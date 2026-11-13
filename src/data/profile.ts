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
  githubUsername: "ganesh2001-11",
  githubUrl: "https://github.com/ganesh2001-11",

  hero: {
    badge: "DATA ENGINEER",
    heading: "Building reliable data pipelines and cloud data platforms.",
    subtitle:
      "AWS Data Engineer with hands-on experience building production-grade ETL pipelines, cloud data platforms, large-scale data processing workflows, and analytics solutions.",
  },

  about:
    "I am a Data Engineer focused on building scalable and reliable data pipelines and cloud-based data platforms. My experience includes AWS data engineering, ETL/ELT, PySpark, SQL, data lakes, data warehousing, data quality, and analytics across enterprise systems and healthcare domains (HMIS).",

  summary:
    "Data Engineer with 3+ years of hands-on experience building and operating production-grade ETL pipelines across healthcare and enterprise domains. Strong expertise in AWS Glue, EMR, PySpark, SQL, and S3 for large-scale batch data processing and analytics.",

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
      company: "Dataman Computer Systems Pvt. Ltd.",
      period: "04/2025 – 01/2026",
      location: "Chennai",
      responsibilities: [
        "Designed, developed, and maintained scalable ETL pipelines to process healthcare datasets, including patient records, billing, pharmacy, laboratory, and hospital operational data.",
        "Developed automated data ingestion and transformation workflows using AWS Glue, PySpark, SQL, Amazon S3, and AWS Step Functions to support reliable batch processing.",
        "Implemented a multi-layer data lake architecture in Amazon S3, organizing datasets into raw, processed, and curated layers for efficient data management and downstream analytics.",
        "Built reusable ETL components and standardized data processing workflows to support recurring ingestion requirements and improve pipeline maintainability.",
        "Implemented data validation and reconciliation checks to identify discrepancies, investigate processing failures, and maintain data quality across healthcare data pipelines.",
        "Troubleshot ETL failures, investigated source-to-target data inconsistencies, and supported the reliable execution of batch data processing workflows.",
        "Prepared curated healthcare datasets for analytical reporting and business intelligence, enabling consistent access to structured data for downstream consumption.",
      ],
    },
    {
      role: "SOFTWARE ENGINEER",
      company: "Anunta Technology",
      period: "09/2023 – 03/2025",
      location: "Chennai",
      responsibilities: [
        "Designed and maintained an Amazon S3 data lake with raw, processed, and curated layers.",
        "Implemented standardized folder structures and naming conventions for efficient data organization.",
        "Supported data transformation and processing requirements for enterprise analytics and reporting.",
        "Developed cloud-based data processing workflows to support analytical and reporting requirements.",
        "Processed structured and semi-structured datasets using SQL.",
        "Implemented data transformation and validation logic to improve consistency across analytical datasets.",
        "Supported data lake and data warehouse development for downstream reporting and analytics.",
        "Investigated pipeline failures and data discrepancies to identify root causes and support reliable processing.",
        "Collaborated with stakeholders to understand data requirements and translate them into technical solutions.",
        "Supported ongoing pipeline maintenance and improvements to data processing reliability.",
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
