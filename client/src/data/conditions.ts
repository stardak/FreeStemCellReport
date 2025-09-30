import { Condition } from "@shared/schema";

export const conditions: Condition[] = [
  // Pain & Orthopedic Conditions
  {
    id: "knee-pain",
    name: "Knee Pain",
    description: "Arthritis, meniscus tears, ligament injuries",
    icon: "fas fa-walking",
    color: "blue",
  },
  {
    id: "shoulder-pain",
    name: "Shoulder Pain",
    description: "Rotator cuff, impingement, arthritis",
    icon: "fas fa-hand-paper",
    color: "green",
  },
  {
    id: "back-pain",
    name: "Back Pain",
    description: "Disc degeneration, spinal stenosis, sciatica",
    icon: "fas fa-user",
    color: "purple",
  },
  {
    id: "hip-pain",
    name: "Hip Pain",
    description: "Hip arthritis, labral tears, bursitis",
    icon: "fas fa-running",
    color: "indigo",
  },
  {
    id: "chronic-pain",
    name: "Chronic Pain",
    description: "Long-term pain management",
    icon: "fas fa-user-injured",
    color: "orange",
  },
  {
    id: "osteoarthritis",
    name: "Osteoarthritis",
    description: "Joint cartilage restoration",
    icon: "fas fa-bone",
    color: "brown",
  },
  
  // Autoimmune & Inflammatory Conditions
  {
    id: "arthritis",
    name: "Rheumatoid Arthritis",
    description: "Autoimmune joint inflammation",
    icon: "fas fa-bone",
    color: "red",
  },
  {
    id: "autoimmune",
    name: "Autoimmune Diseases",
    description: "Lupus, RA, and immune conditions",
    icon: "fas fa-shield-alt",
    color: "pink",
  },
  {
    id: "crohns-colitis",
    name: "Crohn's & Colitis",
    description: "Gastrointestinal healing",
    icon: "fas fa-heartbeat",
    color: "teal",
  },
  
  // Neurological Disorders
  {
    id: "multiple-sclerosis",
    name: "Multiple Sclerosis",
    description: "Neurological regeneration",
    icon: "fas fa-brain",
    color: "purple",
  },
  {
    id: "neurological",
    name: "Neurological Conditions",
    description: "Brain and nerve disorders",
    icon: "fas fa-brain",
    color: "indigo",
  },
  {
    id: "spinal-cord",
    name: "Spinal Cord Injuries",
    description: "SCI recovery protocols",
    icon: "fas fa-spine",
    color: "blue",
  },
  
  // Metabolic & Systemic Conditions
  {
    id: "diabetes",
    name: "Diabetes Treatment",
    description: "Type 1 & Type 2 diabetes therapy",
    icon: "fas fa-syringe",
    color: "green",
  },
  {
    id: "other-condition",
    name: "Other Conditions",
    description: "Additional medical conditions requiring evaluation",
    icon: "fas fa-question",
    color: "gray",
  },
  
  // Regenerative & Longevity Treatments
  {
    id: "fountain-youth-women",
    name: "Anti-Aging (Women)",
    description: "Women's longevity and wellness",
    icon: "fas fa-venus",
    color: "pink",
  },
  {
    id: "health-optimization-men",
    name: "Health Optimization (Men)",
    description: "Men's performance and vitality",
    icon: "fas fa-mars",
    color: "blue",
  },
  {
    id: "sexual-wellness",
    name: "Sexual Wellness",
    description: "Intimate health and performance",
    icon: "fas fa-heart",
    color: "red",
  },
  
  // Cosmetic
  {
    id: "cosmetic-skin",
    name: "Cosmetic & Skin",
    description: "Aesthetic treatments and skin rejuvenation",
    icon: "fas fa-spa",
    color: "purple",
  },
];
