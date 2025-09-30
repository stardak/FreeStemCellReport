import { EducationalContent } from "@/lib/types";

export const educationalContent: Record<string, EducationalContent> = {
  "knee-pain": {
    condition: "knee pain",
    title: "How Stem Cell Therapy Could Help Your Knee Pain",
    description: "Based on your responses, stem cell therapy may offer a regenerative solution to help reduce inflammation and promote cartilage repair.",
    benefits: [
      "Natural anti-inflammatory properties",
      "Potential cartilage regeneration",
      "Minimal invasion compared to surgery",
      "May reduce dependency on pain medication",
    ],
    timeline: [
      {
        step: 1,
        title: "Treatment Day",
        description: "Minimally invasive outpatient procedure",
      },
      {
        step: 2,
        title: "2-4 Weeks",
        description: "Initial healing and reduced inflammation",
      },
      {
        step: 3,
        title: "3-6 Months",
        description: "Progressive improvement and tissue regeneration",
      },
    ],
    successFactors: [
      { factor: "Age Factor", status: "favorable" },
      { factor: "Condition Duration", status: "moderate" },
      { factor: "Overall Health", status: "favorable" },
    ],
    scientificBackground: [
      {
        title: "Regeneration",
        description: "Mesenchymal stem cells can differentiate into cartilage-producing chondrocytes",
        icon: "fas fa-seedling",
      },
      {
        title: "Anti-inflammatory",
        description: "Stem cells release growth factors that reduce inflammation and promote healing",
        icon: "fas fa-shield-alt",
      },
      {
        title: "Tissue Repair",
        description: "Paracrine signaling helps existing cells repair and maintain healthier tissue",
        icon: "fas fa-sync-alt",
      },
    ],
    recoveryStats: "Patients with similar profiles experience 60-80% improvement in pain and mobility within 6 months.",
  },
  "shoulder-injury": {
    condition: "shoulder injury",
    title: "How Stem Cell Therapy Could Help Your Shoulder",
    description: "Stem cell therapy may help restore mobility and reduce pain in your shoulder through natural healing mechanisms.",
    benefits: [
      "Improved range of motion",
      "Reduced inflammatory response",
      "Enhanced tissue repair",
      "Non-surgical treatment option",
    ],
    timeline: [
      {
        step: 1,
        title: "Treatment Day",
        description: "Outpatient injection procedure",
      },
      {
        step: 2,
        title: "2-6 Weeks",
        description: "Gradual improvement in mobility",
      },
      {
        step: 3,
        title: "3-4 Months",
        description: "Significant functional improvement",
      },
    ],
    successFactors: [
      { factor: "Injury Type", status: "favorable" },
      { factor: "Physical Activity Level", status: "favorable" },
      { factor: "Response to Previous Treatments", status: "moderate" },
    ],
    scientificBackground: [
      {
        title: "Tendon Repair",
        description: "Stem cells promote tendon healing and reduce scar tissue formation",
        icon: "fas fa-link",
      },
      {
        title: "Mobility Restoration",
        description: "Growth factors help restore natural shoulder mechanics",
        icon: "fas fa-arrows-alt",
      },
      {
        title: "Pain Reduction",
        description: "Anti-inflammatory properties provide natural pain relief",
        icon: "fas fa-hand-holding-heart",
      },
    ],
    recoveryStats: "Studies show 70-85% of patients experience significant improvement in shoulder function.",
  },
  "back-pain": {
    condition: "back pain",
    title: "How Stem Cell Therapy Could Help Your Back Pain",
    description: "Stem cell therapy may help address disc degeneration and spinal inflammation that contribute to chronic back pain.",
    benefits: [
      "Disc regeneration potential",
      "Reduced spinal inflammation",
      "Improved mobility and function",
      "Alternative to spinal surgery",
    ],
    timeline: [
      {
        step: 1,
        title: "Treatment Day",
        description: "Targeted spinal injection procedure",
      },
      {
        step: 2,
        title: "4-8 Weeks",
        description: "Initial pain reduction and healing",
      },
      {
        step: 3,
        title: "4-6 Months",
        description: "Continued improvement and stabilization",
      },
    ],
    successFactors: [
      { factor: "Disc Health", status: "moderate" },
      { factor: "Activity Level", status: "favorable" },
      { factor: "Overall Spine Health", status: "favorable" },
    ],
    scientificBackground: [
      {
        title: "Disc Regeneration",
        description: "Stem cells may help regenerate damaged disc tissue",
        icon: "fas fa-circle-notch",
      },
      {
        title: "Inflammation Control",
        description: "Reduces inflammatory markers in spinal tissues",
        icon: "fas fa-fire-extinguisher",
      },
      {
        title: "Structural Support",
        description: "Helps maintain spinal stability and function",
        icon: "fas fa-columns",
      },
    ],
    recoveryStats: "Clinical trials show 65-75% of patients report significant pain reduction and improved function.",
  },
  "arthritis": {
    condition: "arthritis",
    title: "How Stem Cell Therapy Could Help Your Arthritis",
    description: "Stem cell therapy offers potential to reduce joint inflammation and promote cartilage repair in arthritic joints.",
    benefits: [
      "Joint inflammation reduction",
      "Cartilage preservation",
      "Improved joint function",
      "Reduced need for medications",
    ],
    timeline: [
      {
        step: 1,
        title: "Treatment Day",
        description: "Intra-articular injection procedure",
      },
      {
        step: 2,
        title: "3-6 Weeks",
        description: "Reduced inflammation and stiffness",
      },
      {
        step: 3,
        title: "3-6 Months",
        description: "Improved joint function and mobility",
      },
    ],
    successFactors: [
      { factor: "Arthritis Stage", status: "moderate" },
      { factor: "Joint Health", status: "moderate" },
      { factor: "Overall Health", status: "favorable" },
    ],
    scientificBackground: [
      {
        title: "Cartilage Protection",
        description: "Stem cells help preserve existing cartilage and may promote new growth",
        icon: "fas fa-shield-virus",
      },
      {
        title: "Immune Modulation",
        description: "Helps regulate immune response that causes joint inflammation",
        icon: "fas fa-balance-scale",
      },
      {
        title: "Joint Lubrication",
        description: "Promotes healthy synovial fluid production",
        icon: "fas fa-tint",
      },
    ],
    recoveryStats: "Research indicates 55-70% of arthritis patients experience meaningful improvement in symptoms.",
  },
  "hip-problems": {
    condition: "hip problems",
    title: "How Stem Cell Therapy Could Help Your Hip Issues",
    description: "Stem cell therapy may help address hip pain and mobility issues through natural healing processes.",
    benefits: [
      "Hip joint preservation",
      "Reduced pain and stiffness",
      "Improved walking ability",
      "Delay or avoid hip replacement",
    ],
    timeline: [
      {
        step: 1,
        title: "Treatment Day",
        description: "Hip injection under imaging guidance",
      },
      {
        step: 2,
        title: "4-8 Weeks",
        description: "Gradual pain reduction",
      },
      {
        step: 3,
        title: "4-6 Months",
        description: "Improved mobility and function",
      },
    ],
    successFactors: [
      { factor: "Hip Joint Condition", status: "moderate" },
      { factor: "Age and Activity", status: "favorable" },
      { factor: "Previous Treatments", status: "favorable" },
    ],
    scientificBackground: [
      {
        title: "Joint Preservation",
        description: "Helps maintain hip joint structure and function",
        icon: "fas fa-save",
      },
      {
        title: "Mobility Enhancement",
        description: "Promotes natural movement and reduces stiffness",
        icon: "fas fa-walking",
      },
      {
        title: "Pain Management",
        description: "Natural anti-inflammatory effects provide pain relief",
        icon: "fas fa-heart",
      },
    ],
    recoveryStats: "Studies show 60-80% of patients experience significant improvement in hip function and pain levels.",
  },
  "other": {
    condition: "your condition",
    title: "How Stem Cell Therapy Could Help Your Condition",
    description: "Stem cell therapy has shown promise in treating various musculoskeletal conditions through regenerative healing.",
    benefits: [
      "Natural healing enhancement",
      "Anti-inflammatory effects",
      "Tissue regeneration potential",
      "Minimally invasive treatment",
    ],
    timeline: [
      {
        step: 1,
        title: "Treatment Day",
        description: "Targeted treatment procedure",
      },
      {
        step: 2,
        title: "2-6 Weeks",
        description: "Initial healing response",
      },
      {
        step: 3,
        title: "3-6 Months",
        description: "Progressive improvement",
      },
    ],
    successFactors: [
      { factor: "Condition Type", status: "moderate" },
      { factor: "Overall Health", status: "favorable" },
      { factor: "Treatment Response", status: "moderate" },
    ],
    scientificBackground: [
      {
        title: "Regenerative Healing",
        description: "Stem cells promote natural tissue repair mechanisms",
        icon: "fas fa-leaf",
      },
      {
        title: "Growth Factors",
        description: "Release beneficial proteins that enhance healing",
        icon: "fas fa-chart-line",
      },
      {
        title: "Tissue Support",
        description: "Provides structural support for damaged tissues",
        icon: "fas fa-building",
      },
    ],
    recoveryStats: "Treatment success varies by condition, with many patients experiencing meaningful improvement.",
  },
};
