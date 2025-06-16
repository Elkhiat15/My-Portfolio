import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mohamed Elkhayat",
  initials: "My Pic",
  url: "https://Elkhayat.io",
  location: "Cairo, EG",
  resumeLink: "https://drive.google.com/file/d/1Y3z_yWA2xTIvAN7iEtnK-jkTWQfJRhq_/view?usp=sharing",
  description:
    "Aspiring AI Researcher",
  summary:
    "I am a **Computer Engineering student** at Cairo University, with a strong passion for **Natural Language Processing (NLP)** and machine learning. I am eager to collaborate on various **AI research projects**, as I believe that teamwork and diverse perspectives are essential for driving innovation in this rapidly evolving field. My academic journey has been enriched by **hands-on experience** in projects focusing on **AI applications in NLP and data science**. I thrive on developing innovative solutions that utilize advanced technologies to address real-world challenges, and I am particularly interested in creating **user-friendly tools** that enhance interaction with data and improve **decision-making processes**.",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "C++",
    "Java",
    "SQL",
    "Mongodb",
    "Pytorch",
    "Tensorfolw",
    "Langchain",
    "Llama-index",
    "Hugging Face",
    "Scikit-learn",
    "Scikit-image",
    "Scipy",
    "Transformers",
    "FastAPI",
    "Streamlit",
    "Plotly",
    "Git",
    "Linux",
    "Docker",
    "Azure",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mohamed.elkhayat2025@gmail.com",
    tel: "+201125036915",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Elkhiat15",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohamed-elkhayat-66b36521a",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/khiiuoo?s=21",
        icon: Icons.x,

        navbar: true,
      },
      Gmail: {
        name: "Send Email",
        url: "mailto:mohamed.elkhayat2025@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Resume: {
        name: "View Resume",
        url: "https://drive.google.com/file/d/1Y3z_yWA2xTIvAN7iEtnK-jkTWQfJRhq_/view?usp=sharing",
        icon: Icons.resume,

        navbar: true,
      },
    },

  },

  work: [
    {
      company: "WorldQuant University",
      href: "https://www.credly.com/badges/ae14c49f-6db1-451c-9260-f3c607ed5413",
      badges: [],
      location: "Virtual",
      title: "Applied Data Science Trainee",
      logoUrl: "/wqu.jpeg",
      start: "Mar 2023",
      end: "Aug 2023",
      description:
        "I’ve completed eight end-to-end, applied data science projects. In each project, I accessed data from various sources, including files, SQL and NoSQL databases, and APIs. I’ve developed functions and built ETL pipelines to prepare training sets. I’ve also built machine learning models for both supervised and unsupervised learning tasks, and created visualizations to explain data characteristics and model predictions in a way that’s easy for non-technical audiences to understand.",    
  },
  ],
  research: [
    {
      logoUrl: "/miccai.jpeg", 
      altText: "MICCAI MSB EMERGE",
      href: "",
      projectTitle: "Foundation Models as Class-Incremental Learners for Dermatological Image Classification",
      institution: "Under Review, MICCAI MSB EMERGE",
      period: "July 2025",
      keywords: [""],
      description: `
        Proposed an exemplar-free, zero-forgetting continual learning framework using frozen foundation models with lightweight MLPs 
        or zero-training nearest-mean classifiers for dermatology, and achieved state-of-the-art accuracy, 
        outperforming all regularization, replay, and architecture-based approaches by 20-40% and exceeding the upper bound by 8%.      
        `,
    },
  ],
  education: [
    {
      school: "Cairo University Faculty of Engineering",
      href: "https://eng.cu.edu.eg/en/",
      degree: "Bachelor's Degree of Computer Engineering (GPA 3.5/4) ",
      logoUrl: "/cufe.jpeg",
      start: "Oct 2020",
      end: "July 2026",
    },
    
  ],
  projects: [
    {
      title: "Multimodal Corrective Agentic RAG",
      href: "https://github.com/Elkhiat15/Multimodal-Corrective-Agentic-RAG-Chatbot",
      // dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a question-answering tool using **Corrective-RAG (CRAG)** to improve answer accuracy through **self-reflection** and grading of retrieved documents & Integrated a **multimodal retriever** to extract relevant images from PDF and PPTX files.",
      technologies: [
        "Python",
        "Langgraph",
        "Langchain",
        "Gemini",
        "Mistral",
        "Chroma",
        "Gradio",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Elkhiat15/Multimodal-Corrective-Agentic-RAG-Chatbot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/graph.png",
      video:
        "",
    },
    {
      title: "Long Document Summarization and Chat with PDFs",
      href: "https://large-document-summarization-ithmzwp7rmjtjtrsc6rqpw.streamlit.app/",
      // dates: "June 2023 - Present",
      active: true,
      description:
        "Utilized **K-means clustering** to group similar sections and reduce dimensionality, enabling efficient summarization system, capable of processing documents with **1000+ pages in less than 60s** & Implemented a cumulative approach to reduce the time required for summarizing added documents & Leveraged **Gemini’s multi-modal capability** to build a **multi-modal RAG** that enables users to chat with PDFs.",
      technologies: [
        "Python",
        "Langchain",
        "Scikit-learn",
        "FAISS",
        "Streamlit",
      ],
      links: [
        {
          type: "Website",
          href: "https://large-document-summarization-ithmzwp7rmjtjtrsc6rqpw.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Elkhiat15/Large-Document-Summarization",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/LDS.gif",
      video: "",
    },
    {
      title: "Search Engine",
      href: "https://github.com/ahmed-kamal2004/Aurora_SearchEngine",
      // dates: "April 2023 - September 2023",
      active: true,
      description:
        "Designed and developed an efficient **Indexer that leverages NLP techniques** to store and preprocess HTML pages,minimizing overhead and redundancy, and enabling **fast data retrieval** & Built a robust **Query Engine** that efficiently retrieve relevant results from the indexed data.",
      technologies: [
        "Java",
        "MongoDB",
        "JSOUP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ahmed-kamal2004/Aurora_SearchEngine",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/search.png",
      video: "",
    },
    {
      title: "Employee Attrition",
      href: "https://retainradar-fafvmavjduenrv58dfnrtk.streamlit.app/",
      // dates: "April 2023 - March 2024",
      active: true,
      description:
        "Conducted **statistical analysis and hypothesis testing** to gain insights into the factors affecting employee turnover & Built an **early warning system** that accurately predicts the probability of an employee quitting and assigns a **risk level** to each employee.",
      technologies: [
        "Python",
        "Scipy",
        "Scikit-learn",
        "Pandas",
        "Plotly",
      ],
      links: [
        {
          type: "Website",
          href: "https://retainradar-fafvmavjduenrv58dfnrtk.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Elkhiat15/Probability-Project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/attrition.gif",
      video:
        "",
    },
    {
      title: "License Plate Recognition",
      href: "https://github.com/Elkhiat15/Cerberus",
      // dates: "April 2023 - September 2023",
      active: true,
      description:
        "Applied **classical computer vision** techniques to build a fast and **real-time** license plate detection & Built an **OCR model** to be used in license plate recognition.",
      technologies: [
        "Python",
        "OpenCv",
        "Scikit-image",
        "Scikit-learn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Elkhiat15/Cerberus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/LPR.png",
      video: "",
    },
    {
      title: "Process Scheduler",
      href: "https://github.com/jpassica/ProcessScheduler",
      // dates: "April 2023 - September 2023",
      active: true,
      description:
        "Implemented an efficient scheduling algorithm using data structures and OOP concepts to **minimize response time** and waiting time for the CPU.",
      technologies: [
        "C++",
        "Data Structure",
        "OOP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/jpassica/ProcessScheduler",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Process-Scheduler.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "First Place: Undergraduate Engineering Mathematics Researcher Forum",
      dates: "December 2024",
      location: "TCCD Career Center at Cairo University, Cairo, Egypt",
      description:
        "Won First Place for developing a statistical analysis and hypothesis testing to uncover insights into the factors influencing employee turnover.",
      image:
        "/TCCD.jpeg",
      links: [
        {
          title: "Github",
          href: "https://github.com/Elkhiat15/Probability-Project",
          icon: <Icons.github className="size-3" />,
        },
        {
          title: "Post",
          href: "https://www.linkedin.com/posts/mohamed-elkhayat-66b36521a_datascience-dataanalytics-employeeattrition-activity-7147983201641152512-092r?utm_source=share&utm_medium=member_desktop&rcm=ACoAADc5z3MBA4BLyE229T5ekNZ-JwDSLrrEDXk",
          icon: <Icons.linkedin className="size-3" />,
        },
        {
          title: "Report",
          href: "https://github.com/Elkhiat15/Probability-Project/blob/main/Probability_Report.pdf",
          icon: <Icons.report className="size-3" />,
        },
      ],
    },
  ],
} as const;
