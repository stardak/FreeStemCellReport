export interface EducationalContent {
  condition?: string;
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
    explanation?: string;
  }[];
  scientificBackground: {
    title: string;
    description: string;
    icon: string;
  }[];
  videoUrl?: string;
  recoveryStats: string;
  nextSteps?: string[];
}

export interface QuizFormData {
  condition: string;
  severity?: "mild" | "moderate" | "severe";
  duration: "recent" | "chronic" | "longterm" | "years" | "new" | "researching" | "experienced" | "veteran" | "exploring";
  treatments?: string[];
  customDescription?: string;
  // Additional fields for different condition types
  concerns?: string[];  // for cosmetic conditions
  goals?: string[];     // for regenerative conditions
  // Contact information
  userName?: string;
  userEmail?: string;
  emailConsent?: boolean;
}
