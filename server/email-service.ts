import Mailgun from 'mailgun.js';
import FormData from 'form-data';

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
});

// Use sandbox domain format for testing when main domain has verification issues
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || '';
// Use a working Mailgun sandbox domain temporarily until main domain is re-verified
const WORKING_DOMAIN = `sandbox3eb1e0d75c9a4736b8bcf1bfbc24a3e9.mailgun.org`;

function formatDescription(description: string): string {
  // Split description into sentences and group into paragraphs
  const sentences = description.split(/(?<=[.!?])\s+/);
  const paragraphs: string[] = [];
  let currentParagraph: string[] = [];
  
  sentences.forEach((sentence, index) => {
    currentParagraph.push(sentence.trim());
    
    // Create a new paragraph every 3-4 sentences or at natural breaks
    if (currentParagraph.length >= 3 || 
        sentence.includes('Unlike') || 
        sentence.includes('However') || 
        sentence.includes('Furthermore') ||
        sentence.includes('Additionally') ||
        sentence.includes('Clinical') ||
        sentence.includes('Current studies') ||
        sentence.includes('Research shows') ||
        index === sentences.length - 1) {
      
      paragraphs.push(currentParagraph.join(' '));
      currentParagraph = [];
    }
  });
  
  // Add any remaining sentences as a final paragraph
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph.join(' '));
  }
  
  // Convert to HTML paragraphs
  return paragraphs.map(paragraph => `<p style="margin-bottom: 16px; line-height: 1.6;">${paragraph}</p>`).join('');
}

interface PersonalizedContent {
  title: string;
  description: string;
  benefits?: string[];
  timeline?: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  successFactors?: Array<{
    factor: string;
    status: "favorable" | "moderate" | "challenging";
    explanation: string;
  }>;
  scientificBackground?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  recoveryStats?: string;
  nextSteps?: string[];
}

interface EmailData {
  to: string;
  userName: string;
  reportContent: PersonalizedContent;
  conditionName?: string;
}

function generateEmailHTML(data: EmailData): string {
  const { userName, reportContent, conditionName } = data;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Personalized Stem Cell Report</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            background-color: #f8f9fa;
            padding: 20px;
        }
        .email-container {
            background-color: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1d4ed8 100%);
            color: white !important;
            padding: 50px 30px;
            border-radius: 16px 16px 0 0;
            text-align: center;
            position: relative;
            overflow: hidden;
            margin-bottom: 0;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="7" cy="7" r="7"/><circle cx="53" cy="7" r="7"/><circle cx="7" cy="53" r="7"/><circle cx="53" cy="53" r="7"/></g></svg>') repeat;
            opacity: 0.3;
        }
        .header h1 {
            color: white !important;
            font-size: 36px;
            margin-bottom: 15px;
            font-weight: 700;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            position: relative;
            z-index: 1;
        }
        .header p {
            color: white !important;
            font-size: 18px;
            margin: 0;
            opacity: 0.95;
            font-weight: 400;
            position: relative;
            z-index: 1;
        }
        .doctor-info {
            display: none;
        }
        .report-section {
            margin: 30px 0;
        }
        .report-section h2 {
            color: #1f2937;
            font-size: 24px;
            margin-bottom: 15px;
            border-left: 4px solid #2563eb;
            padding-left: 15px;
        }
        .description-content {
            line-height: 1.7;
            color: #374151;
            font-size: 16px;
        }
        .description-content p {
            margin-bottom: 16px;
            text-align: justify;
        }
        .report-section h3 {
            color: #374151;
            font-size: 20px;
            margin-bottom: 12px;
        }
        .benefits-grid, .timeline-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .benefit-item, .timeline-item {
            background-color: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #10b981;
        }
        .timeline-item {
            border-left-color: #f59e0b;
        }
        .success-factors {
            background-color: #ecfdf5;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .success-factors ul {
            margin: 0;
            padding-left: 20px;
        }
        .scientific-background {
            background-color: #eff6ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .cta-section {
            background-color: #1f2937;
            color: white !important;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            margin: 40px 0;
        }
        .cta-section h2, .cta-section p {
            color: white !important;
        }
        .cta-button {
            display: inline-block;
            background-color: #2563eb;
            color: white !important;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 10px;
            font-size: 16px;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
        }
        .disclaimer {
            background-color: #fef3c7;
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
            border-left: 4px solid #f59e0b;
        }
        @media (max-width: 600px) {
            .email-container {
                padding: 20px;
            }
            .header h1 {
                font-size: 24px;
            }
            .benefits-grid, .timeline-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>${userName ? `${userName.charAt(0).toUpperCase() + userName.slice(1)}'s` : 'Your'} Personalized Stem Cell Report</h1>
            <p>Evidence-based insights tailored specifically for ${conditionName || 'your condition'}</p>
        </div>

        <!-- Personal Note from Dr. McCarthy with Photo -->
        <div class="report-section">
            <h2 style="color: #1f2937; font-size: 24px; margin-bottom: 15px; border-left: 4px solid #2563eb; padding-left: 15px;">A Personal Note from Dr. Daisy McCarthy</h2>
            <div style="background: linear-gradient(135deg, #f8fafc 0%, #e3f2fd 100%); border-left: 4px solid #3b82f6; padding: 30px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Doctor Photo and Introduction -->
                <div style="display: flex; align-items: flex-start; margin-bottom: 25px; flex-wrap: wrap;">
                    <div style="flex-shrink: 0; margin-right: 20px; margin-bottom: 15px;">
                        <img src="https://i.imgur.com/y5KWlzY.jpeg" 
                             alt="Dr. Daisy McCarthy, MD" 
                             style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid #ffffff; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);">
                    </div>
                    <div style="flex: 1; min-width: 250px;">
                        <h3 style="color: #1f2937; margin: 0 0 5px 0; font-size: 22px; font-weight: 600;">Dr. Daisy McCarthy, MD</h3>
                        <p style="color: #4b5563; margin: 0 0 15px 0; font-size: 14px; line-height: 1.4;">
                            <strong>Harvard-trained Anesthesiologist</strong><br>
                            Regenerative Medicine Specialist<br>
                            Colombia Stem Cell Clinic
                        </p>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            <span style="background: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 15px; font-size: 12px; font-weight: 500;">Harvard University</span>
                            <span style="background: #dcfce7; color: #166534; padding: 4px 10px; border-radius: 15px; font-size: 12px; font-weight: 500;">15+ Years Experience</span>
                            <span style="background: #fef3c7; color: #92400e; padding: 4px 10px; border-radius: 15px; font-size: 12px; font-weight: 500;">ISSCA Certified</span>
                        </div>
                    </div>
                </div>
                
                <!-- Personal Message -->
                <div style="border-top: 1px solid #e2e8f0; padding-top: 20px;">
                    <p style="margin-bottom: 16px; line-height: 1.7; color: #374151; font-size: 16px;">I'm so glad you've taken the first step in exploring how regenerative medicine could support your recovery. This personalized report is designed to give you evidence-based insights into how stem cell therapy may help with your ${conditionName}.</p>
                    
                    <p style="margin-bottom: 16px; line-height: 1.7; color: #374151; font-size: 16px;">Every patient's situation is unique, which is why the next—and most important—step is to discuss your case directly. A brief consultation will allow me to review your medical history, answer your questions, and help determine whether stem cell therapy is the right option for you.</p>
                    
                    <p style="margin-bottom: 25px; line-height: 1.7; color: #374151; font-size: 16px;">I encourage you to book a call today so we can create a plan tailored to your specific needs.</p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="https://calendly.com/bennvb12/new-meeting" 
                           style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: 600; display: inline-block; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4); font-size: 16px; transition: all 0.3s ease;">
                            📅 Book Your 20-Minute Consultation
                        </a>
                    </div>
                    
                    <div style="text-align: center; margin-top: 25px; padding: 20px; background: rgba(255, 255, 255, 0.5); border-radius: 10px;">
                        <p style="margin: 0; color: #4b5563; font-style: italic; font-size: 16px; line-height: 1.5;">
                            Warm regards,<br>
                            <strong style="color: #1f2937;">Dr. Daisy McCarthy, MD</strong><br>
                            <span style="font-size: 14px; color: #6b7280;">Harvard-trained Anesthesiologist & Regenerative Medicine Specialist</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="report-section">
            <h2>${reportContent.title}</h2>
            <div class="description-content">
                ${formatDescription(reportContent.description)}
            </div>
        </div>

        ${reportContent.benefits && reportContent.benefits.length > 0 ? `
        <div class="report-section">
            <h2>Key Benefits for Your Condition</h2>
            <div class="benefits-grid">
                ${reportContent.benefits.map((benefit: string) => `
                    <div class="benefit-item">
                        <p>${benefit}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}

        ${reportContent.timeline && reportContent.timeline.length > 0 ? `
        <div class="report-section">
            <h2>Treatment Timeline</h2>
            <div class="timeline-grid">
                ${reportContent.timeline.map((timelineItem: any) => `
                    <div class="timeline-item">
                        <h3>Step ${timelineItem.step}: ${timelineItem.title}</h3>
                        <p>${timelineItem.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}

        ${reportContent.successFactors && reportContent.successFactors.length > 0 ? `
        <div class="report-section">
            <h2>Success Factors</h2>
            <div class="success-factors">
                <ul>
                    ${reportContent.successFactors.map((factor: any) => `<li><strong>${factor.factor}:</strong> ${factor.explanation}</li>`).join('')}
                </ul>
            </div>
        </div>
        ` : ''}

        ${reportContent.scientificBackground && reportContent.scientificBackground.length > 0 ? `
        <div class="report-section">
            <h2>Scientific Background</h2>
            <div class="scientific-background">
                ${reportContent.scientificBackground.map((item: any) => `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `).join('')}
            </div>
        </div>
        ` : ''}

        ${reportContent.nextSteps && reportContent.nextSteps.length > 0 ? `
        <div class="report-section">
            <h2>Recommended Next Steps</h2>
            <ul>
                ${reportContent.nextSteps.map((step: any) => `<li>${step}</li>`).join('')}
            </ul>
        </div>
        ` : ''}

        <div class="cta-section">
            <h2>Ready to Explore Your Options?</h2>
            <p>Schedule a personalized consultation with Dr. Daisy McCarthy to discuss how stem cell therapy could benefit your specific condition.</p>
            <a href="https://calendly.com/bennvb12/new-meeting" class="cta-button" target="_blank">Book Your Consultation</a>
            <a href="https://freestemcellreport.com" class="cta-button" target="_blank">Learn More</a>
        </div>

        <div class="disclaimer">
            <strong>Important Medical Disclaimer:</strong> This report is for educational purposes only and does not constitute medical advice. Please consult with qualified healthcare professionals before making any treatment decisions. Individual results may vary.
        </div>

        <div class="footer">
            <p><strong>Colombia Stem Cell Clinic</strong><br>
            Dr. Daisy McCarthy, MD<br>
            Harvard-trained Anesthesiologist & Regenerative Medicine Specialist</p>
            <p>This personalized report was generated based on your responses to our educational questionnaire.</p>
        </div>
    </div>
</body>
</html>
  `;
}

export async function sendPersonalizedReport(emailData: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      throw new Error('Mailgun credentials not configured');
    }

    const htmlContent = generateEmailHTML(emailData);
    const textContent = `
Your Personalized Stem Cell Report

${emailData.reportContent.title}

${emailData.reportContent.description}

To view the full report with formatting, please view this email in an HTML-capable email client.

Best regards,
Dr. Daisy McCarthy, MD
Colombia Stem Cell Clinic

Book a consultation: https://calendly.com/bennvb12/new-meeting
Learn more: https://freestemcellreport.com
    `.trim();

    const messageData = {
      from: `Dr. Daisy McCarthy <noreply@${MAILGUN_DOMAIN}>`,
      to: [emailData.to],
      subject: `${emailData.userName ? `${emailData.userName}'s ` : 'Your '}Personalized Stem Cell Report${emailData.conditionName ? ` - ${emailData.conditionName}` : ''}`,
      text: textContent,
      html: htmlContent,
      'h:Reply-To': `info@${MAILGUN_DOMAIN}`,
    };

    console.log('Sending email via Mailgun to:', emailData.to);
    
    // Use the original domain (we'll provide setup instructions)
    const domainToUse = MAILGUN_DOMAIN;
    console.log(`Using domain: ${domainToUse}`);
    
    const result = await mg.messages.create(domainToUse, messageData);
    
    console.log('Email sent successfully:', result.id);
    
    return {
      success: true,
      messageId: result.id
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}