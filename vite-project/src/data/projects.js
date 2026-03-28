export default [
  {
    title: "MedMind: Pre-visit Patient Clinical Agent",
    type: "Google AI Build Day Project",
    description: "Developed a multimodal agent using MedGemma that triages patient messages, identifies urgent cases, requests *missing information* from patients, and generates clinical pre-visit summaries for clinicians.",
    pdf: "/data/MedMind.pdf"
  },
  {
    title: "NavigaTORS: Patient Education Chatbot",
    type: "RAG System for Oropharyngeal Cancer",
    description: "Developed a domain-specific RAG chatbot for HPV-associated oropharyngeal cancer patient education. Fine-tuned large language models with cancer-specific terminology and implemented safety guardrails. Pilot deployed with patient navigator materials.",
    pdf: "/data/NavigaTORS.pdf"
  },
  {
    title: "Automated Multilabel ECG Classification",
    type: "Deep Learning on MIMIC-IV-ECG",
    description: "Built deep learning models (CNN, ResNet1D, Transformer hybrids) for multilabel ECG classification using 800k ECGs from 160k patients. Addressed severe class imbalance with ResNet1D achieving strongest AUC/AUPRC among tested architectures."
  },
  {
    title: "SuRAGeon: Using RAG and FineTuning to create a Surgical Assistant",
    type: "AGI House Hackathon Project (1st Place Winners)",
    description: "Used RAG and Fine-Tuning to create a surgical assistant that can answer questions about thyroidectomies and other Head & Neck surgical procedures"
  },
  {
    title: "Tumor Segmentation from Head & Neck MRI",
    type: "Semantic Segmentation Pipeline",
    description: "Built semantic segmentation pipelines for gross tumor volumes in T2-weighted MRI. Implemented U-Net, Attention U-Net, U-Net++, and novel Mamba U-Net architectures. Preprocessed 3D volumes into 25k+ 2D slices with patient-level splits."
  }
]
