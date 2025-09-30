import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResponseSchema } from "@shared/schema";
import { generatePersonalizedContent, generateChatResponse } from "./openai";
import { sheetsService } from "./sheets";
import { sendPersonalizedReport } from "./email-service";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit quiz response
  app.post("/api/quiz-responses", async (req, res) => {
    try {
      const validatedData = insertQuizResponseSchema.parse(req.body);
      const response = await storage.createQuizResponse(validatedData);
      res.json(response);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Generate personalized content using OpenAI
  app.post("/api/generate-content", async (req, res) => {
    try {
      console.log("Received request body:", req.body);
      const { condition, severity, duration, treatments, customDescription, concerns, goals } = req.body;
      
      console.log("Extracted fields:", { condition, severity, duration, treatments, customDescription, concerns, goals });
      
      // Check required fields - condition is always required
      // severity is only required for pain/orthopedic conditions
      // concerns is used for cosmetic conditions instead of severity
      // goals is used for regenerative conditions instead of severity
      if (!condition) {
        console.log("Missing required fields check failed:", { condition: !!condition, duration: !!duration });
        res.status(400).json({ message: "Missing required fields: condition is required" });
        return;
      }

      // Normalize the data for different condition types
      const normalizedSeverity = severity || concerns || goals || 'moderate';
      const normalizedDuration = duration || 'chronic'; // Default to chronic if missing
      
      const personalizedContent = await generatePersonalizedContent(
        condition,
        normalizedSeverity, 
        normalizedDuration,
        treatments || [],
        customDescription
      );

      res.json(personalizedContent);
    } catch (error) {
      console.error("Error generating content:", error);
      res.status(500).json({ message: "Failed to generate personalized content" });
    }
  });

  // Get quiz response by ID
  app.get("/api/quiz-responses/:id", async (req, res) => {
    try {
      const response = await storage.getQuizResponse(req.params.id);
      if (!response) {
        res.status(404).json({ message: "Quiz response not found" });
        return;
      }
      res.json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Chat endpoint for stem cell education
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, messages } = req.body;
      
      if (!message || typeof message !== 'string') {
        res.status(400).json({ message: "Invalid message format" });
        return;
      }

      const response = await generateChatResponse(message, messages || []);
      res.json({ message: response });
    } catch (error) {
      console.error("Error in chat endpoint:", error);
      res.status(500).json({ message: "Failed to process chat message" });
    }
  });

  // Voice chat session endpoint for OpenAI realtime API
  app.get("/session", async (req, res) => {
    try {
      const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4o-realtime-preview",
          voice: "echo",
          modalities: ["text", "audio"],
          input_audio_format: "pcm16",
          output_audio_format: "pcm16",
          temperature: 0.6,
          max_response_output_tokens: 2048,
          instructions: `
You are a friendly intake assistant for a stem cell clinic located in Colombia.
Speak and write in ENGLISH only.
Provide general educational info only — this is not medical advice.
Encourage booking a consultation with Dr. McCarthy for personal guidance.

CLINIC LOCATION: The clinic is located in Colombia. Dr. McCarthy practices in Colombia and sees patients there.

GUIDELINES (All responses in English):

Provide stem cell therapy information in English only.

Never diagnose, recommend treatment, or give medical advice.

When giving educational info related to treatments or conditions, include this once early in the conversation:
"This information is educational only, not medical advice. Stem cell therapies may carry risks, and availability and uses can vary depending on local regulations. Please speak with Dr. McCarthy for personalized guidance."

Do not repeat the full disclaimer every time.

If the user starts asking about their specific condition or whether a treatment is right for them, say:
"Just a quick reminder — everything I share is for educational purposes only. For personal medical advice, Dr. McCarthy is the one to speak with. If you'd like to talk to the doctor, just tap the blue button to book your consultation. Or, if you want more info first, you can fill out the form for a free personalized stem cell report."

For non-stem cell questions, say:
"I'm specifically designed to help with stem cell therapy questions only."

Speak in a warm, natural, conversational tone.

Ask follow-up questions to guide the user (e.g., "Are you exploring stem cells for pain, hair loss, or something else?")

Never ask for personal health or contact information.

IF USER WANTS A CONSULTATION:

Say: "Ready to chat with the doctor? Hit the blue button to book your consultation. If you'd like more information first, complete the form for a free personalized stem cell report."

If they hesitate: "No rush! I'm here if you want to explore more about stem cell therapies before deciding."

EXPERTISE AREAS:

Stem cell therapy for joint pain (knee, hip, back, shoulder)

Regenerative medicine for chronic pain and arthritis

Anti-aging and wellness therapies

Aesthetic medicine (facial rejuvenation, skin quality, hair restoration)

Hair loss and cosmetic treatments

Sexual wellness (e.g., erectile dysfunction, hormone support)

Sports injury recovery (ligaments, tendons, cartilage repair)

Exosome therapies (cell-free regenerative approaches)

General education about stem cell safety and use

STEM CELL TYPES EDUCATION:

Autologous Stem Cells (from your own body):

Sourced from fat, blood, or bone marrow

Like recycling your body's healing tools

Low rejection risk

Used for arthritis, joint repair, skin rejuvenation, hair loss, and wellness

Allogeneic Stem Cells (from donated umbilical cord tissue):

Donated after healthy births, ethically sourced

Contain young, potent mesenchymal stem cells

Immune-privileged (low rejection risk)

Used for degenerative joints, inflammation, immune regulation, aging, and aesthetic applications

If asked which is better, say:
"Each type has its advantages. Autologous comes from your own body. Allogeneic uses young donor cells that are ready to go. Dr. McCarthy can help determine which option fits your needs best."

SAFETY NOTES:

This is educational information only — not medical advice

Stem cell therapies may carry risks and may not be approved for all uses

Results vary and should always be discussed with a medical professional

Refer all personalized questions to Dr. McCarthy

Never claim or promise outcomes

SUGGESTED VOICE QUESTIONS TO ASK USERS:

"Are you looking into stem cells for joint pain, anti-aging, or something else?"

"Want to hear how stem cells are used in cosmetic or sexual wellness treatments?"

"Curious about stem cells or exosomes for sports injuries or chronic pain?"

"Would you like help understanding the difference between your own stem cells and donor ones?"

IF OFF-TOPIC OR MEDICAL ADVICE IS REQUESTED:

For unrelated questions: "I'm here to help with questions about stem cell therapy only. Would you like to know how it works for joints, aging, or something else?"

For medical advice:
"Just a quick reminder — everything I share is for educational purposes only. For personal medical advice, Dr. McCarthy is the one to speak with. If you'd like to talk to the doctor, just tap the blue button to book your consultation. Or, if you want more info first, you can fill out the form for a free personalized stem cell report."
          `
        })
      });
      
      if (response.ok) {
        const json = await response.json();
        console.log('Session created successfully:', json);
        res.json(json);
      } else {
        const errorText = await response.text();
        console.error('Session creation failed:', response.status, errorText);
        res.status(500).json({ error: 'Failed to create session', details: errorText });
      }
    } catch (error) {
      console.error("Error creating realtime session:", error);
      res.status(500).json({ error: "Failed to create realtime session", details: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  // Contact request endpoint
  app.post("/api/contact-requests", async (req, res) => {
    try {
      const { name, email, phone, preferredContact, message } = req.body;
      
      if (!name || !email) {
        res.status(400).json({ message: "Name and email are required" });
        return;
      }

      // Store contact request
      const contactRequest = {
        id: Date.now().toString(),
        name,
        email,
        phone: phone || '',
        preferredContact: preferredContact || 'email',
        message: message || '',
        createdAt: new Date().toISOString()
      };

      // For now, just log it. In production, you'd save to database
      console.log("New contact request:", contactRequest);
      
      res.json({ 
        message: "Contact request submitted successfully",
        id: contactRequest.id 
      });
    } catch (error) {
      console.error("Error processing contact request:", error);
      res.status(500).json({ message: "Failed to submit contact request" });
    }
  });

  // Submit lead to Google Sheets
  app.post("/api/submit-lead", async (req, res) => {
    try {
      console.log("=== Google Sheets Lead Submission ===");
      console.log("Request body:", req.body);
      
      const { name, email, source, description } = req.body;
      
      if (!name || !email) {
        console.log("Missing required fields:", { name: !!name, email: !!email });
        res.status(400).json({ message: "Name and email are required" });
        return;
      }

      console.log("Initializing sheet headers...");
      // Initialize sheet headers if needed
      await sheetsService.initializeSheetHeaders();

      console.log("Submitting data to Google Sheets...");
      // Submit data to Google Sheets
      await sheetsService.appendUserData({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        source: source || 'Website',
        description: description || ''
      });

      console.log("Successfully submitted to Google Sheets!");
      res.json({ 
        message: "Lead submitted successfully to Google Sheets" 
      });
    } catch (error) {
      console.error("Error submitting lead to Google Sheets:", error);
      res.status(500).json({ 
        message: "Failed to submit lead",
        error: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
      });
    }
  });

  // Test endpoint for Google Sheets
  app.get("/api/test-sheets", async (req, res) => {
    try {
      console.log("=== Testing Google Sheets Connection ===");
      
      // Test credentials
      const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
      if (!credentials) {
        throw new Error('GOOGLE_SHEETS_CREDENTIALS not found');
      }
      
      console.log("Credentials found, length:", credentials.length);
      
      // Test JSON parsing
      const credentialsParsed = JSON.parse(credentials);
      console.log("Credentials parsed successfully");
      console.log("Service account email:", credentialsParsed.client_email);
      
      // Test sheet connection
      await sheetsService.initializeSheetHeaders();
      
      // Test data submission
      await sheetsService.appendUserData({
        name: "Test User",
        email: "test@example.com",
        source: "API Test"
      });
      
      res.json({ 
        message: "Google Sheets test successful!",
        serviceAccountEmail: credentialsParsed.client_email
      });
    } catch (error) {
      console.error("Google Sheets test failed:", error);
      res.status(500).json({ 
        message: "Google Sheets test failed",
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Send personalized report email
  app.post("/api/send-report-email", async (req, res) => {
    try {
      const { email, userName, reportContent, conditionName } = req.body;
      
      if (!email || !userName || !reportContent) {
        res.status(400).json({ message: "Missing required fields: email, userName, and reportContent are required" });
        return;
      }

      const emailData = {
        to: email,
        userName,
        reportContent,
        conditionName
      };

      const result = await sendPersonalizedReport(emailData);
      
      if (result.success) {
        res.json({ 
          message: "Report email sent successfully",
          messageId: result.messageId 
        });
      } else {
        res.status(500).json({ 
          message: "Failed to send email",
          error: result.error 
        });
      }
    } catch (error) {
      console.error("Error sending report email:", error);
      res.status(500).json({ message: "Failed to send report email" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
