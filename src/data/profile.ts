export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies?: string[];
  flow: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  githubUsername: string;
  githubUrl: string;
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
  };
  about: string;
  summary: string;
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  architecture: {
    title: string;
    steps: string[];
  };
  healthcareArchitecture: {
    title: string;
    steps: string[];
  };
  concepts: string[];
  achievements: string[];
  education: {
    degree: string;
    major: string;
    institution: string;
    period: string;
    location: string;
  };
}

export const PROFILE: ProfileData = {
  name: "Ganesh R",
  role: "Data Engineer",
  email: "ganeshraman110@gmail.com",
  phone: "9361889414",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/ganesh-r-a32a01393",
  githubUsername: "Ganesh-AHTPL",
  githubUrl: "https://github.com/Ganesh-AHTPL",

  hero: {
    badge: "DATA ENGINEER",
    heading: "Building reliable data pipelines and cloud data platforms.",
    subtitle:
      "AWS Data Engineer with hands-on experience building production-grade ETL pipelines, cloud data platforms, large-scale data processing workflows, and analytics solutions.",
  },

  about:
    "I am a Data Engineer focused on building scalable and reliable data pipelines and cloud-based data platforms. My experience includes AWS data engineering, ETL/ELT, PySpark, SQL, data lakes, data warehousing, data quality, and analytics across enterprise systems and healthcare domains (HMIS).",

  summary:
    "Data Engineer with 2.6+ years of hands-on experience building and operating production-grade ETL pipelines across healthcare and enterprise domains. Strong expertise in AWS Glue, EMR, PySpark, SQL, and S3 for large-scale batch data processing and analytics.",

  experience: [
    {
      role: "DATA ENGINEER",
      company: "Analytix hub ai",
      period: "03/2026 – Present",
      location: "Chennai",
      responsibilities: [
        "Designed and developed scalable data pipelines to support analytics, reporting, and AI/ML initiatives.",
        "Built and maintained ETL/ELT frameworks for ingesting data from multiple source systems.",
        "Developed and optimized data models, data warehouses, and data lakes for enterprise reporting.",
        "Ensured data quality, governance, security, and compliance across data platforms.",
        "Worked with structured and semi-structured datasets.",
        "Collaborated with business stakeholders to translate requirements into technical solutions.",
      ],
    },
    {
      role: "CLOUD ENGINEER",
      company: "Dataman Computer Systems Pvt Ltd",
      period: "04/2025 – 01/2026",
      location: "Bangalore",
      responsibilities: [
        "Engineered and maintained scalable ETL pipelines for Hospital Management Information Systems (HMIS).",
        "Processed patient, billing, pharmacy, laboratory, and operational datasets.",
        "Designed and implemented automated data ingestion and transformation workflows.",
        "Used AWS Glue, PySpark, SQL, S3, and Step Functions.",
        "Supported healthcare analytics and reporting.",
      ],
    },
    {
      role: "SOFTWARE ENGINEER",
      company: "Anunta Technology Management Services Public Ltd",
      period: "09/2023 – 03/2025",
      location: "Chennai",
      responsibilities: [
        "Designed and developed batch ETL pipelines using AWS Glue and PySpark.",
        "Processed application and transactional data from multiple source systems.",
        "Architected and maintained an Amazon S3 data lake.",
        "Used raw, processed, and curated data layers.",
        "Followed standardized folder structures and naming conventions.",
      ],
    },
  ],

  skills: [
    {
      category: "LANGUAGES",
      skills: ["Python", "SQL"],
    },
    {
      category: "DATA ENGINEERING",
      skills: [
        "PySpark",
        "ETL",
        "ELT",
        "Data Pipelines",
        "Data Modeling",
        "Data Quality",
        "Data Validation",
      ],
    },
    {
      category: "AWS",
      skills: ["AWS Glue", "Amazon S3", "AWS EMR", "AWS Lambda", "AWS Step Functions"],
    },
    {
      category: "ORCHESTRATION",
      skills: ["Apache Airflow"],
    },
    {
      category: "DATA WAREHOUSING",
      skills: ["Snowflake", "Amazon Redshift"],
    },
    {
      category: "INDUSTRY",
      skills: [
        "Healthcare Data Systems",
        "HMIS",
        "Cloud Data Engineering",
        "Enterprise Data Engineering",
        "Large-Scale Data Processing",
        "Data Warehousing & Analytics",
      ],
    },
  ],

  projects: [
    {
      title: "Healthcare Data Engineering & HMIS",
      description:
        "Engineered scalable ETL pipelines for Hospital Management Information Systems (HMIS), processing patient, billing, pharmacy, laboratory, and operational datasets to support analytics and reporting.",
      technologies: ["AWS Glue", "PySpark", "SQL", "Amazon S3", "Step Functions"],
      flow: ["HMIS Sources", "AWS Glue", "PySpark", "S3", "Curated Data", "Analytics / Reporting"],
    },
    {
      title: "AWS Data Lake",
      description:
        "Designed and maintained an Amazon S3 data lake using raw, processed, and curated data layers for enterprise data processing and analytics.",
      technologies: ["Amazon S3", "AWS Glue", "PySpark"],
      flow: ["Source", "Raw", "Processed", "Curated", "Analytics"],
    },
    {
      title: "Enterprise Batch Data Processing",
      description:
        "Built batch ETL pipelines using AWS Glue and PySpark to process application and transactional data from multiple source systems.",
      technologies: ["AWS Glue", "PySpark", "SQL", "Amazon S3"],
      flow: ["Source", "Ingestion", "Transformation", "Processed Data", "Analytics"],
    },
  ],

  architecture: {
    title: "Data Engineering Architecture",
    steps: [
      "SOURCE SYSTEMS",
      "INGESTION",
      "AWS GLUE",
      "PYSPARK",
      "AMAZON S3",
      "CURATED DATA",
      "DATA WAREHOUSE",
      "ANALYTICS",
    ],
  },

  healthcareArchitecture: {
    title: "Healthcare Data Pipeline",
    steps: [
      "HMIS",
      "Patient / Billing / Pharmacy / Laboratory / Operational Data",
      "Data Ingestion",
      "AWS Glue",
      "PySpark Transformation",
      "Data Quality Validation",
      "Amazon S3",
      "Curated Data",
      "Reporting / Analytics",
    ],
  },

  concepts: [
    "ETL / ELT",
    "Batch Processing",
    "Data Lakes",
    "Data Warehousing",
    "Data Modeling",
    "Data Quality",
    "Data Validation",
    "Structured Data",
    "Semi-Structured Data",
    "Large-Scale Data Processing",
    "Cloud Data Engineering",
  ],

  achievements: [
    "Recognized for delivering stable and scalable ETL pipelines supporting mission-critical healthcare and enterprise data platforms.",
    "Appreciated for automation of data workflows that reduced manual intervention and improved operational reliability.",
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Information Technology",
    institution: "Meenakshi Sundararajan Engineering College",
    period: "08/2019 – 04/2023",
    location: "Chennai",
  },
};
