import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface PersonalizedContent {
  title: string;
  description: string;
  benefits: string[];
  timeline: {
    step: number;
    title: string;
    description: string;
  }[];
  successFactors: {
    factor: string;
    status: "favorable" | "moderate" | "challenging";
    explanation: string;
  }[];
  scientificBackground: {
    title: string;
    description: string;
    icon: string;
  }[];
  recoveryStats: string;
  nextSteps: string[];
}

export async function generatePersonalizedContent(
  condition: string,
  severity: string,
  duration: string,
  treatments: string[],
  customDescription?: string
): Promise<PersonalizedContent> {
  const treatmentHistory = treatments.length > 0 ? treatments.join(", ") : "none";
  
  // Map condition IDs to readable names for better AI understanding
  const conditionNameMap: { [key: string]: string } = {
    'sexual-wellness': 'Sexual Wellness and Performance',
    'fountain-youth-women': 'Anti-Aging and Longevity for Women',
    'health-optimization-men': 'Health Optimization for Men',
    'cosmetic-skin': 'Cosmetic and Skin Rejuvenation',
    'knee-pain': 'Knee Pain and Joint Issues',
    'shoulder-pain': 'Shoulder Pain and Mobility',
    'back-pain': 'Back Pain and Spinal Issues',
    'hip-pain': 'Hip Pain and Joint Problems',
    'chronic-pain': 'Chronic Pain Management',
    'osteoarthritis': 'Osteoarthritis and Joint Degeneration',
    'arthritis': 'Arthritis and Inflammatory Joint Disease',
    'autoimmune': 'Autoimmune Conditions',
    'multiple-sclerosis': 'Multiple Sclerosis',
    'diabetes': 'Diabetes and Metabolic Disorders'
  };

  const readableCondition = conditionNameMap[condition] || condition;

  const prompt = `You are Dr. Daisy McCarthy, MD, a Harvard-trained anesthesiologist and regenerative medicine specialist at Colombia Stem Cell Clinic. Generate comprehensive, personalized educational content about stem cell therapy for a patient with the following profile:

Condition: ${readableCondition}
Severity/Level: ${severity}
Duration/Experience: ${duration}  
Previous treatments/attempts: ${treatmentHistory}
${customDescription ? `\nPatient's Additional Details: "${customDescription}"` : ''}

IMPORTANT: Create a COMPREHENSIVE, DETAILED report that is at least 800-1000 words total across all sections. This should be a complete educational report, not a brief summary.

Please provide detailed, medically accurate educational content that includes:
1. A personalized title addressing their specific condition
2. A comprehensive description (6-8 paragraphs, 300-400 words total) explaining:
   - How stem cell therapy specifically works for their exact condition
   - The biological mechanisms that make it effective for their specific issue
   - How it addresses the root cause rather than just masking symptoms
   - Why it's superior to the conventional treatments they've previously tried
   - The regenerative healing process tailored to their condition type
   - Expected outcomes based on their specific profile and treatment history
3. 5-6 key benefits tailored to their condition and severity level
4. A detailed 3-step timeline with specific milestones for their condition
5. Success factors assessment (3 factors with comprehensive explanations)
6. Scientific background (3 detailed mechanisms with condition-specific explanations)
7. Evidence-based recovery statistics for their specific condition
8. Comprehensive next steps recommendations (3-4 actionable items)

Content Requirements:
- 50% more detailed than typical medical summaries
- Include condition-specific mechanisms (e.g., cartilage regeneration for knee issues, tendon repair for shoulder problems)
- Explain why stem cells are particularly effective for their specific issue
- Address their treatment history and why this approach may succeed where others haven't
- Use accessible but authoritative medical language
- Break descriptions into clear paragraphs with double line breaks (\n\n)
- Be encouraging yet realistic about outcomes

Format the response as JSON with the exact structure I'll specify.`;

  console.log("Generating AI content for:", readableCondition, "with severity/level:", severity);
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a medical education specialist creating personalized stem cell therapy information. Provide accurate, evidence-based content tailored to each patient's specific condition and history. Always include appropriate medical disclaimers and emphasize the need for professional consultation."
        },
        {
          role: "user",
          content: `${prompt}

Please respond with JSON in this exact format:
{
  "title": "How Stem Cell Therapy Could Help Your [specific condition]",
  "description": "Comprehensive 4-5 paragraph explanation (150-200 words) with double line breaks (\\n\\n) between paragraphs. Include condition-specific mechanisms, why it's superior to their previous treatments, and the regenerative healing process.",
  "benefits": ["detailed benefit 1 specific to condition", "detailed benefit 2", "detailed benefit 3", "detailed benefit 4", "detailed benefit 5", "detailed benefit 6"],
  "timeline": [
    {"step": 1, "title": "Treatment Day", "description": "Detailed description of what happens during the procedure for this specific condition"},
    {"step": 2, "title": "2-6 Weeks", "description": "Specific healing milestones and what to expect for this condition"},
    {"step": 3, "title": "3-6 Months", "description": "Long-term recovery expectations and functional improvements for this condition"}
  ],
  "successFactors": [
    {"factor": "Factor 1", "status": "favorable/moderate/challenging", "explanation": "Detailed explanation of how this factor affects treatment success for this patient's specific situation"},
    {"factor": "Factor 2", "status": "favorable/moderate/challenging", "explanation": "Comprehensive explanation"},
    {"factor": "Factor 3", "status": "favorable/moderate/challenging", "explanation": "Thorough explanation"}
  ],
  "scientificBackground": [
    {"title": "Primary Mechanism", "description": "Detailed explanation of how stem cells specifically address this condition", "icon": "fas fa-seedling"},
    {"title": "Secondary Mechanism", "description": "Additional healing mechanism specific to this condition", "icon": "fas fa-shield-alt"},
    {"title": "Supporting Process", "description": "Third mechanism that supports healing for this condition", "icon": "fas fa-sync-alt"}
  ],
  "recoveryStats": "Specific evidence-based statistics and success rates for this exact condition and severity level",
  "nextSteps": ["Detailed consultation recommendation", "Specific diagnostic tests needed", "Pre-treatment preparation steps", "Additional actionable recommendation"]
}`
        }
      ],
      response_format: { type: "json_object" },
      max_tokens: 4000
    });

    const content = JSON.parse(response.choices[0].message.content || "{}");
    console.log("AI content generated successfully, title:", content.title);
    return content;
  } catch (error) {
    console.error("Error generating personalized content:", error);
    // Fallback to basic content structure
    return {
      title: `How Stem Cell Therapy Could Help Your ${condition}`,
      description: "Based on your responses, stem cell therapy may offer potential benefits for your condition. Please consult with our medical team for personalized assessment.",
      benefits: [
        "Natural healing enhancement",
        "Anti-inflammatory effects", 
        "Tissue regeneration potential",
        "Minimally invasive treatment"
      ],
      timeline: [
        { step: 1, title: "Treatment Day", description: "Outpatient procedure" },
        { step: 2, title: "2-6 Weeks", description: "Initial healing response" },
        { step: 3, title: "3-6 Months", description: "Progressive improvement" }
      ],
      successFactors: [
        { factor: "Overall Health", status: "favorable", explanation: "Good general health supports treatment success" },
        { factor: "Condition Duration", status: "moderate", explanation: "Treatment timing affects outcomes" },
        { factor: "Treatment Response", status: "moderate", explanation: "Individual response varies" }
      ],
      scientificBackground: [
        { title: "Regenerative Healing", description: "Stem cells promote natural tissue repair", icon: "fas fa-leaf" },
        { title: "Growth Factors", description: "Release beneficial proteins for healing", icon: "fas fa-chart-line" },
        { title: "Anti-inflammatory", description: "Reduce inflammation and promote healing", icon: "fas fa-shield-alt" }
      ],
      recoveryStats: "Treatment success varies by individual condition and response",
      nextSteps: [
        "Schedule consultation with our medical team",
        "Complete comprehensive medical evaluation", 
        "Discuss treatment options and expectations"
      ]
    };
  }
}

export async function generateChatResponse(
  message: string,
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>
): Promise<string> {
  try {
    // Count user messages in conversation history + current message
    const userMessageCount = conversationHistory.filter(msg => msg.role === 'user').length + 1;
    
    const baseSystemPrompt = `You are a friendly intake assistant for a stem cell clinic located in Colombia.
Provide general educational info only — this is not medical advice.
Encourage booking a consultation with Dr. McCarthy for personal guidance.

CLINIC LOCATION: The clinic is located in Colombia. Dr. McCarthy practices in Colombia and sees patients there.

GUIDELINES:

Provide stem cell therapy information only.

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

IF OFF-TOPIC OR MEDICAL ADVICE IS REQUESTED:

For unrelated questions: "I'm here to help with questions about stem cell therapy only. Would you like to know how it works for joints, aging, or something else?"

For medical advice:
"Just a quick reminder — everything I share is for educational purposes only. For personal medical advice, Dr. McCarthy is the one to speak with. If you'd like to talk to the doctor, just tap the blue button to book your consultation. Or, if you want more info first, you can fill out the form for a free personalized stem cell report."`;

    const consultationPrompt = `

CONSULTATION ENCOURAGEMENT (Use after 2+ agent replies AND when user shows interest):
- Provide helpful educational information about how stem cells might help their specific situation
- Ask more detailed questions about their condition, symptoms, duration, and previous treatments
- Explain potential benefits, realistic timelines, and success factors
- Gently suggest a consultation to help determine their candidacy and discuss personalized treatment options

BEFORE SUGGESTING CONSULTATION:
- Ask about their pain levels, daily impact, previous treatments tried
- Provide educational content about the relevant stem cell procedures
- Explain realistic expectations and recovery timelines
- Share relevant success factors and candidacy criteria

CALL-TO-ACTION PHRASES (Use sparingly and only after extensive education):
- "Based on what you've shared, Dr. McCarthy could provide a personalized assessment"
- "If you're interested in exploring this further, a consultation would help determine your candidacy"
- "Dr. McCarthy could evaluate your specific situation and discuss realistic outcomes"

Remember: Focus on education and building trust. Only suggest consultation after providing substantial value and information.`;

    const systemPrompt = userMessageCount >= 2 ? baseSystemPrompt + consultationPrompt : baseSystemPrompt;

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      { role: 'user' as const, content: message }
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
      messages,
      max_tokens: 500
    });

    return response.choices[0].message.content || "I apologize, but I'm having trouble responding right now. Please try again or consider booking a consultation with Dr. McCarthy for personalized guidance.";
  } catch (error) {
    console.error("Error generating chat response:", error);
    return "I apologize, but I'm experiencing technical difficulties. Please try again or contact our clinic directly to speak with Dr. McCarthy about your stem cell therapy questions.";
  }
}