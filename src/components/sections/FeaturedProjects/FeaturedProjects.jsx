import React from 'react';
import Section from '../../layout/Section';
import CaseStudy from '../../ui/CaseStudy/CaseStudy';

export default function FeaturedProjects() {
  const presalesProject = {
    badge: "Featured Flagship Project",
    title: "PreSales AI Agent",
    period: "July – Present",
    description: (
      <>
        After working on frontend, full-stack and client-facing applications, I moved into <strong>AI agent development</strong> with a project called the <strong>PreSales AI Agent</strong>.<br /><br />
        The PreSales AI Agent is an <strong>AI-powered platform designed to automate the software pre-sales and proposal-generation process</strong>.<br /><br />
        The basic workflow starts with <strong>client or business requirements</strong>. These requirements are processed and analyzed through an AI-driven workflow, after which the system can generate structured <strong>software proposals and POCs</strong>.<br /><br />
        The high-level flow is:<br />
        <strong>Requirement Input → Requirement Analysis → AI Workflow → Proposal Generation → POC Generation</strong><br /><br />
        This project helped me understand the concept of <strong>AI agents and LLM-based workflows</strong>, where AI is not used only to generate a response, but is incorporated into a multi-step business process to automate repetitive pre-sales activities.<br /><br />
        The major learning from this project was understanding how <strong>business requirements can be converted into structured technical outputs through an AI-driven workflow</strong>.
      </>
    ),
    solution: "An AI-powered workflow that automates and assists with pre-sales activities, creating a seamless pipeline from requirement gathering to client proposal generation.",
    workflow: [
      "Client Requirement (Text / Form / Voice)",
      "AI Requirement Analysis",
      "Requirement Structuring",
      "Agent Workflow",
      "Skills & Resource Identification",
      "Effort Estimation & Cost Estimation",
      "Proposal Generation & POC Generation",
      "Client Review & Approval",
      "PDF Export"
    ],
    contributions: [
      { title: "AI Workflow", desc: "Worked on AI workflow development" },
      { title: "Backend/API", desc: "Developed backend APIs and logic" },
      { title: "Frontend Integration", desc: "Integrated frontend systems" },
      { title: "Requirement Processing", desc: "Processed business requirements" },
      { title: "Proposal Automation", desc: "Developed proposal generation workflows" },
      { title: "POC Generation", desc: "Implemented POC generation features" }
    ],
    concepts: ["AI Agents", "LLM Integration", "Requirement Analysis", "Intelligent Workflow", "Proposal Generation", "POC Generation", "PDF Generation", "Cost Estimation", "Effort Estimation", "Resource Planning"],
    github: "#" // Add Correct PreSales AI Agent GitHub Repository
  };

  const snapEatsProject = {
    title: "SnapEats",
    period: "Mid March – April",
    description: (
      <>
        After my first client project, I started exploring <strong>full-stack development</strong> through a project called <strong>SnapEats</strong>, a food-delivery and e-commerce-style application built using the <strong>MERN stack</strong>.<br /><br />
        The frontend was developed using <strong>React.js</strong> with a <strong>component-based architecture</strong>, while the backend was built using <strong>Node.js and Express.js</strong>, exposing <strong>RESTful APIs</strong>.<br /><br />
        The overall architecture was:<br />
        <strong>React → REST API → Node/Express → MongoDB</strong><br /><br />
        MongoDB was used for <strong>data persistence</strong>, while I also explored <strong>Redis for in-memory data handling and caching</strong> and <strong>webhooks for event-driven communication</strong>.<br /><br />
        The main learning from this project was understanding the <strong>end-to-end application flow</strong>, from frontend interaction and API communication to backend processing and database operations.<br /><br />
        This project helped me transition from <strong>frontend development to full-stack and backend development</strong>.
      </>
    ),
    problem: "Needed a practical sandbox to understand how full-stack applications function, how frontend connects to backend, and how to manage complex state and database operations.",
    solution: "Developed SnapEats as a comprehensive learning project to explore and implement MERN stack capabilities, Redis caching, and Webhook integrations.",
    contributions: [
      { title: "Exploration", desc: "Used this project to explore MERN stack capabilities and backend concepts." }
    ],
    concepts: ["MERN Architecture", "Redis", "Webhooks", "REST APIs", "Database Integration", "Frontend–Backend Communication"],
    github: "https://github.com/Dipti-VE/Ecommerce",
    liveLink: "https://snapeats-1.onrender.com/"
  };

  const stefanoProject = {
    title: "AI-Powered Company Research & Reporting Platform (Stefano Sarli)",
    period: "April – June",
    description: (
      <>
        From <strong>April to June</strong>, I worked on a major client project for <strong>Stefano Sarli</strong> — an <strong>AI-powered company research and reporting platform</strong>.<br /><br />
        The main purpose of the platform was to <strong>collect and consolidate company-related information from multiple data sources</strong>, including databases, Excel files, schedules and external APIs. The collected information was then processed and presented as <strong>structured business insights and company research reports</strong>.<br /><br />
        At a high level, the platform worked as a <strong>business intelligence and research system</strong>, where information from different sources was brought together into a single application for analysis and reporting.<br /><br />
        The major technical learning from this project was working on a <strong>real-world client-facing application</strong>, where I had to integrate APIs, manage complex frontend state, handle authentication and KYC workflows, and continuously adapt the implementation according to changing client requirements.<br /><br />
        Overall, this project significantly improved my understanding of <strong>React frontend architecture, REST API integration, authentication, KYC workflows, PDF generation and production-oriented development</strong>.
      </>
    ),
    goal: "To collect and consolidate company-related information from multiple data sources and present it as structured business insights and company research reports.",
    solution: "Built a comprehensive platform that combines company information, financial data, industry information, news, and external APIs to automatically generate presentation slides based on client templates.",
    workflow: [
      "Company Selection",
      "Data Collection",
      "API/Data Processing",
      "AI Analysis",
      "Structured Content",
      "PPT/PDF Export"
    ],
    contributions: [
      { title: "API Integration", desc: "Integrated backend REST APIs with the React frontend." },
      { title: "Authentication", desc: "Implemented Login and Signup authentication workflows." },
      { title: "KYC Workflows", desc: "Worked on Global KYC screening workflows and generated KYC reports." },
      { title: "PDF Generation", desc: "Handled KYC report and PDF generation workflows." },
      { title: "Data Handling", desc: "Implemented Bulk Select All and Download functionality." },
      { title: "UI Components", desc: "Developed reusable and maintainable React components." },
      { title: "Client Communication", desc: "Communicated with the client to understand requirements and verify deployment updates." }
    ],
    concepts: ["React", "API Integration", "KYC Workflows", "PDF Generation", "Authentication", "Frontend Architecture", "Business Intelligence"],
    github: "#"
  };

  const anirbanProject = {
    title: "Anirban Bhowmick Client Project",
    period: "March",
    description: "My first client project was the Anirban Bhowmick client project, where I worked as a Frontend Developer. This was my first exposure to a real-world client application after joining the organization as an AI/ML trainee.",
    goal: "The objective was to create functional and reusable interfaces based on the requirements provided for the client application.",
    solution: "Developed different frontend pages using React, focusing on translating client requirements into a functional user interface.",
    contributions: [
      { title: "Frontend Implementation", desc: "Developed different frontend pages using React." },
      { title: "UI Components", desc: "Created functional and reusable interfaces based on client requirements." }
    ],
    concepts: ["React", "Frontend Development", "UI Implementation"],
    github: "#"
  };

  const harryProject = {
    title: "Harry Brown's Project",
    period: "After June",
    description: (
      <>
        After completing the <strong>Stefano Sarli client project</strong>, I worked on <strong>Harry Brown's project</strong> as a <strong>Frontend Developer and UI/UX Designer</strong>.<br /><br />
        The main focus of this project was <strong>frontend development, UI/UX design and API integration</strong>.<br /><br />
        I designed the interface using <strong>Figma</strong>, where I worked on the visual structure and user experience of the application.<br /><br />
        After designing the interface, I implemented the UI on the frontend using reusable components and integrated the required <strong>APIs</strong> to connect the frontend with the backend.<br /><br />
        This project helped me strengthen my understanding of the relationship between <strong>design, frontend architecture and API-driven application development</strong>.
      </>
    ),
    solution: "Designed the UI in Figma and converted it into functional frontend components while integrating backend APIs.",
    contributions: [
      { title: "UI/UX Design", desc: "Designed the user interface and visual structure in Figma." },
      { title: "Frontend Implementation", desc: "Converted Figma designs into functional, reusable frontend components." },
      { title: "API Integration", desc: "Integrated backend APIs to connect the frontend with the backend." }
    ],
    concepts: ["UI/UX Design", "Figma", "Frontend Architecture", "API Integration", "React"],
    github: "#"
  };

  return (
    <Section id="projects" title="Featured Case Studies" subtitle="Deep dives into the major applications I built and contributed to.">
      <CaseStudy project={presalesProject} />
      <CaseStudy project={stefanoProject} />
      <CaseStudy project={harryProject} />
      <CaseStudy project={anirbanProject} />
      <CaseStudy project={snapEatsProject} />
    </Section>
  );
}
