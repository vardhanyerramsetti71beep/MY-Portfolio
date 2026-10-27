// src/data/portfolioData.js
// Canonical data registry for Vardhan Yerramsetti

export const PROFILE = {
  name: "Vardhan Yerramsetti",
  title: "Python Full Stack Developer & AWS Certified Cloud Practitioner",
  shortTitle: "Python Full Stack & AWS Architect",
  tagline: "Architecting high-throughput backends. Engineering resilient systems at cloud scale.",
  location: "Andhra Pradesh, India",
  email: "vardhanyerramsetti71@gmail.com",
  phone: "+91 7386033417",
  whatsapp: "https://wa.me/917386033417?text=Hi%20Vardhan,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect!",
  github: "https://github.com/vardhanyerramsetti71beep",
  githubUsername: "vardhanyerramsetti71beep",
  linkedin: "https://www.linkedin.com/in/vardhan-yerramsetti/",
  livePortfolio: "https://vardhan-portfolio.vercel.app/",
  stats: [
    { label: "Deployed Web Apps", value: "8", suffix: " Live", highlight: "emerald" },
    { label: "Computer Vision ML", value: ">90", suffix: "%", highlight: "brand" },
    { label: "Query Latency Cut", value: "-25", suffix: "%", highlight: "indigo" },
    { label: "Cloud Architecture", value: "AWS", suffix: " Certified", highlight: "amber" }
  ],
  bio: "Results-driven Python Full Stack Developer and AWS Certified Cloud Practitioner with foundational expertise in Data Science and Machine Learning. Proficient in architecting scalable web applications, engineering high-performance RESTful APIs using Flask and FastAPI for backend microservices, and crafting reactive user interfaces with modern React.js and Next.js.",
  philosophy: "Systems, not screens. Clean microservices, normalized relational schemas, and deterministic ML pipelines over fragile monolithic layers. Every endpoint is engineered for measurable throughput."
};

export const TECH_TRAIN_1 = [
  { name: "Python", category: "Language", color: "#3776AB" },
  { name: "AWS Cloud", category: "Infrastructure", color: "#FF9900" },
  { name: "Flask", category: "Backend Microservices", color: "#000000" },
  { name: "FastAPI", category: "High-Performance APIs", color: "#009688" },
  { name: "React.js", category: "Frontend", color: "#61DAFB" },
  { name: "Next.js 14", category: "Full Stack", color: "#000000" },
  { name: "MySQL", category: "Relational DB", color: "#4479A1" },
  { name: "AWS EC2 & S3", category: "Cloud Compute/Storage", color: "#FF9900" },
  { name: "AWS Lambda", category: "Serverless", color: "#FF9900" },
  { name: "Django", category: "Backend Framework", color: "#092E20" },
  { name: "Tailwind CSS", category: "Styling", color: "#06B6D4" },
  { name: "Docker Basics", category: "Containerization", color: "#2496ED" },
  { name: "RESTful APIs", category: "Architecture", color: "#10B981" },
  { name: "Git & GitHub", category: "Version Control", color: "#F05032" }
];

export const TECH_TRAIN_2 = [
  { name: "OpenCV", category: "Computer Vision", color: "#5C3EE8" },
  { name: "Scikit-learn", category: "Machine Learning", color: "#F7931E" },
  { name: "TensorFlow", category: "Deep Learning", color: "#FF6F00" },
  { name: "NumPy & Pandas", category: "Data Science", color: "#150458" },
  { name: "BG/NBD & Gamma-Gamma", category: "Probabilistic Modeling", color: "#8B5CF6" },
  { name: "Plotly 3D Manifolds", category: "Data Visualization", color: "#3F4F75" },
  { name: "Web Audio API", category: "Browser Media", color: "#EF4444" },
  { name: "Postman", category: "API Testing", color: "#FF6C37" },
  { name: "Vercel Edge", category: "Deployment", color: "#000000" },
  { name: "PyMySQL ORM", category: "Database Driver", color: "#4479A1" },
  { name: "Data Structures (DSA)", category: "Core CS", color: "#10B981" },
  { name: "OOP & System Design", category: "Core CS", color: "#0EA5E9" }
];

export const PROJECTS = [
  {
    id: "music-recommender",
    index: "01",
    title: "Music Emotion & Smart Recommender",
    subtitle: "Real-Time Facial Expression Classification & Web Audio Streaming",
    category: "AI & Computer Vision",
    tags: ["Python", "OpenCV", "Flask REST API", "Scikit-learn", "Web Audio API"],
    live: "https://music-recommending.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/music-recommending",
    featured: true,
    stats: [
      { label: "Classification Accuracy", value: ">90%" },
      { label: "Latency", value: "<85ms" },
      { label: "User Engagement", value: "+20%" }
    ],
    problem: "Static music recommendation systems rely on manual input or historical listening history, failing to respond dynamically to a user's instantaneous emotional state and mood shifts.",
    solution: "Engineered an end-to-end computer vision and microservice pipeline analyzing facial expressions via webcam stream. Utilized OpenCV Haar Cascade / landmark detection coupled with a Scikit-learn multi-class model (Happy, Sad, Neutral, Energetic), streaming mood vectors into a responsive Flask RESTful API that delivers targeted audio playback.",
    architecture: "Webcam Video Stream ➔ OpenCV Frame Extraction ➔ Facial Feature Matrix ➔ ML Emotion Classifier ➔ Flask REST API ➔ Reactive Track Dispatcher."
  },
  {
    id: "svt-tailors",
    index: "02",
    title: "S.V.T. Tailors Bespoke Atelier & Tracker",
    subtitle: "Production Atelier Configurator & 5-Stage Workshop Tracking Pipeline",
    category: "Full Stack & Microservices",
    tags: ["Python Serverless", "MySQL", "PyMySQL", "Tailwind CSS", "Vercel"],
    live: "https://svt-tailors.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/S.V.T.Tailors",
    featured: true,
    stats: [
      { label: "Workshop Stages", value: "5 States" },
      { label: "Query Execution", value: "-35ms" },
      { label: "Tracking Precision", value: "100%" }
    ],
    problem: "Bespoke tailoring businesses struggle with disconnected manual order logs, delayed customer updates, and untracked multi-step fabrication pipelines.",
    solution: "Built a production-grade digital atelier interface and tracking engine. Includes a dynamic garment customization configurator (fabrics, collar, cuffs, measurements) coupled with a serverless Python backend persisting orders into normalized MySQL schemas with a 5-stage live status pipeline: Order Logged ➔ Fabric Cut ➔ Master Stitch ➔ Steam Press ➔ Ready for Delivery.",
    architecture: "Client Atelier Configurator ➔ Python Serverless Endpoint ➔ PyMySQL Prepared Statements ➔ MySQL Relational Schema ➔ Real-Time Order Stage Tracker."
  },
  {
    id: "ms-pickles",
    index: "03",
    title: "MS Pickles Artisanal Andhra E-Commerce",
    subtitle: "High-Performance Regional Food E-Commerce Platform",
    category: "E-Commerce & Frontend",
    tags: ["JavaScript ES6+", "Tailwind CSS", "LocalStorage", "Responsive Web"],
    live: "https://ms-pickles.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/MS-pickles",
    featured: true,
    stats: [
      { label: "Catalog Items", value: "15+ SKUs" },
      { label: "Checkout Cart Sync", value: "100%" },
      { label: "Lighthouse Performance", value: "98/100" }
    ],
    problem: "Traditional artisanal food producers lack lightweight, ultra-fast web store architectures that work flawlessly on mobile networks without heavy CMS bloat.",
    solution: "Designed and deployed a modern direct-to-consumer e-commerce storefront for authentic Andhra pickles and podis. Built using modular vanilla ES6+ architecture and utility-first Tailwind CSS, featuring instantaneous category filters, dynamic weight-based pricing, persistent shopping cart management, and seamless WhatsApp ordering.",
    architecture: "Modular Product Catalog ➔ Weight/Price State Matrix ➔ LocalStorage Synchronizer ➔ WhatsApp Checkout Dispatcher."
  },
  {
    id: "they-call-him-og",
    index: "04",
    title: "\"They Call Him OG\" Cinematic Audiovisual Showcase",
    subtitle: "High-Fidelity Interactive Media Experience & Storytelling",
    category: "Full Stack & Web",
    tags: ["Next.js 14", "React", "Tailwind CSS", "Web Audio API", "Vercel"],
    live: "https://they-call-him-og-lemon.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/They-call-him-og",
    featured: true,
    stats: [
      { label: "Video Loops", value: "5 Native MP4s" },
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Showcase Tour", value: "55s Guided" }
    ],
    problem: "Standard promotional media websites are static, passive, and fail to evoke cinematic narrative immersion.",
    solution: "Architected a high-fidelity cinematic fan web experience powered by Next.js 14 and React. Features synchronized HTML5 video loops, scroll-driven circular transitions, ambient Web Audio soundtracks, and a 55-second automated interactive showcase mode.",
    architecture: "Next.js App Router ➔ Intersection Observer Audio/Video Coordinator ➔ Scroll-Driven Transition Canvas ➔ Vercel Global Edge."
  },
  {
    id: "body-transformation",
    index: "05",
    title: "90-Day Body Transformation & 3D Manifolds",
    subtitle: "Dynamic Progression Analytics & 3D Morphological Manifolds",
    category: "Analytics & Systems",
    tags: ["Python", "Plotly 3D", "HTML5/CSS3", "JavaScript", "Analytics"],
    live: "https://90-days-body-transformation.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/90-Days-Body-Transformation",
    featured: true,
    stats: [
      { label: "Tracking Days", value: "90 Days" },
      { label: "Biometric Dimensions", value: "6 Axes" },
      { label: "3D Visualization", value: "Plotly WebGL" }
    ],
    problem: "Body recomposition data is typically tracked in flat spreadsheets, obscuring volumetric changes and progressive physical adaptations over multi-month timelines.",
    solution: "Built a 90-day biometric transformation dashboard integrating Python-generated Plotly 3D topological manifolds. Users interactively explore morphological changes across chest, waist, biceps, body fat percentage, and caloric intake timelines.",
    architecture: "Time-Series Biometric Matrix ➔ Python Data Smoothing ➔ Plotly 3D WebGL Surface Mesh ➔ Interactive Browser Telemetry."
  },
  {
    id: "flask-google-forms",
    index: "06",
    title: "Google Forms Clone & MySQL ORM Engine",
    subtitle: "Dynamic Survey Orchestration & Relational Response Persistence",
    category: "Full Stack & Microservices",
    tags: ["Python", "Flask", "Flask-SQLAlchemy", "MySQL", "Jinja2"],
    live: "https://flask-google-form.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/google-forms-",
    featured: true,
    stats: [
      { label: "Question Types", value: "Multiple" },
      { label: "Schema Normalization", value: "3NF Compliant" },
      { label: "Validation Speed", value: "<15ms" }
    ],
    problem: "Survey engines require flexible dynamic schemas capable of handling heterogeneous question formats while maintaining relational integrity.",
    solution: "Engineered a full-featured survey creation and response aggregation engine in Python and Flask. Implemented a 3NF relational database schema in MySQL using Flask-SQLAlchemy with support for multiple-choice, text, checkbox inputs, and automated result charts.",
    architecture: "Survey Model ➔ Dynamic Form Generator ➔ Foreign Key Relational Persistence ➔ Analytical Response View."
  },
  {
    id: "omnipulse-clv",
    index: "07",
    title: "OmniPulse Enterprise CLV & Retention Engine",
    subtitle: "BG/NBD Customer Lifetime Value & Churn Prediction Microservice",
    category: "Analytics & Systems",
    tags: ["FastAPI", "Scikit-learn", "BG/NBD", "Gamma-Gamma", "Python"],
    live: "https://omni-pulse-enterprise-clv-churn-int-teal.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/OmniPulse-Enterprise-CLV-Churn-Intelligence-Engine",
    featured: true,
    stats: [
      { label: "Probabilistic Model", value: "BG/NBD" },
      { label: "Monetary Value", value: "Gamma-Gamma" },
      { label: "Prediction Horizon", value: "12 Months" }
    ],
    problem: "Subscription and retail businesses struggle to distinguish churned customers from inactive repeat purchasers, misallocating marketing spend.",
    solution: "Developed an enterprise retention microservice utilizing Beta-Geometric/Negative Binomial Distribution (BG/NBD) for purchase frequency and Gamma-Gamma sub-models for monetary value. Computes live probability of being active P(Alive) and forecasts 12-month expected customer equity.",
    architecture: "Transaction Log Ingestion ➔ RFM Metric Aggregation ➔ BG/NBD Parameter Estimation ➔ FastAPI In-Memory Inference."
  },
  {
    id: "task-cloud-portal",
    index: "08",
    title: "Scalable Task & Data Management Cloud Portal",
    subtitle: "Secure Multi-Tenant REST API & AWS Cloud Infrastructure",
    category: "Full Stack & Microservices",
    tags: ["Python", "Flask REST API", "React.js", "MySQL", "AWS EC2/S3"],
    live: "https://task-cloud-portal.vercel.app/",
    github: "https://github.com/vardhanyerramsetti71beep/task-cloud-portal",
    featured: true,
    stats: [
      { label: "Query Latency", value: "-25%" },
      { label: "Storage Resilience", value: "AWS S3 99.99%" },
      { label: "Auth Token Security", value: "JWT Stateless" }
    ],
    problem: "Enterprise task and asset pipelines require high availability, low-latency relational queries, and secure cloud storage without server bottlenecking.",
    solution: "Architected a responsive full-stack task portal featuring a Flask REST API backend, React.js dynamic state management, normalized MySQL indexing cutting query latency by 25%, and asset persistence on AWS S3 with EC2 host provisioning.",
    architecture: "React SPA ➔ JWT Auth Middleware ➔ Flask Microservice ➔ MySQL B-Tree Indexed Engine ➔ AWS S3 Object Store."
  }
];

export const CERTIFICATIONS = [
  {
    id: "aws-ccp",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2023",
    status: "Verified Credential",
    badge: "Cloud Infrastructure",
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS IAM", "Cloud Security", "VPC & Networking", "High Availability & Scalability"],
    summary: "Validated foundational mastery of cloud services, security best practices, architectural principles, core AWS compute, storage, networking services, and cost management models."
  },
  {
    id: "aws-foundations",
    title: "AWS Academy Graduate — Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "2023",
    status: "Verified Academy Certification",
    badge: "Cloud Foundations",
    skills: ["Cloud Architecture", "Database Services", "Elastic Load Balancing", "CloudWatch Observability"],
    summary: "Completed rigorous practical curriculum covering AWS architectural frameworks, resilient system design, cloud operations, and security governance."
  },
  {
    id: "android-enterprise",
    title: "Android Enterprise Associate",
    issuer: "Google",
    year: "2022",
    status: "Certified Associate",
    badge: "Enterprise Mobility",
    skills: ["Device Management", "Enterprise Mobility Security", "Android OS Architecture"],
    summary: "Certified by Google in deploying, configuring, and securing modern enterprise Android environments and mobile device fleets."
  },
  {
    id: "cisco-networking",
    title: "Cisco Networking Essentials",
    issuer: "Cisco Networking Academy",
    year: "2022",
    status: "Certified Network Specialist",
    badge: "Computer Networks",
    skills: ["TCP/IP", "Subnetting", "Routing & Switching", "Network Security Protocols", "DNS / DHCP"],
    summary: "Demonstrated comprehensive understanding of network communication fundamentals, OSI/TCP layers, IP addressing, routing tables, and perimeter defense."
  }
];

export const EXPERIENCE = [
  {
    id: "instakart",
    role: "Operations and Logistics Associate",
    company: "Instakart Services Private Limited",
    subCompany: "Flipkart Logistics & Supply Chain",
    period: "Jan 2026 – Apr 2026",
    location: "Andhra Pradesh, India",
    type: "Industry Operations",
    metrics: [
      { label: "Data Accuracy", value: "99%" },
      { label: "Throughput Increase", value: "+15%" },
      { label: "Pipeline Bottlenecks", value: "Zero" }
    ],
    bullets: [
      "Supervised and audited real-time warehouse operations, order dispatch processing, and inventory databases, maintaining 99% data integrity.",
      "Coordinated cross-functional workflows between ground teams and dispatch systems, eliminating bottlenecks and driving a 15% increase in daily operational throughput.",
      "Conducted root-cause telemetry audits across fulfillment logistics pipelines to minimize order variance and transit latency."
    ]
  },
  {
    id: "teaching-assistant",
    role: "Teaching Assistant — Computer Science",
    company: "Sri Srinivasa Gravity Junior College",
    period: "Jun 2022 – Aug 2022",
    location: "Andhra Pradesh, India",
    type: "Academic Mentorship",
    metrics: [
      { label: "Students Mentored", value: "40+" },
      { label: "Core Topics", value: "DSA, OOP, Logic" },
      { label: "Academic Lift", value: "Measurable" }
    ],
    bullets: [
      "Mentored 40+ engineering aspirants in fundamental computer science principles, Object-Oriented Programming (OOP), and algorithmic problem-solving.",
      "Conducted weekly practical debugging labs, evaluating logic implementations in Python and C++ to build rock-solid foundational fluency.",
      "Assisted senior computer science faculty in designing technical assignments and measuring academic milestone progression."
    ]
  },
  {
    id: "marketing-coordinator",
    role: "Direct Marketing Coordinator",
    company: "Future Generali Total Health Insurance",
    period: "Aug 2022 – Jan 2023",
    location: "Andhra Pradesh, India",
    type: "Data-Driven Marketing",
    metrics: [
      { label: "Leads Engaged", value: "5,000+" },
      { label: "Lead Acquisition Lift", value: "+10%" },
      { label: "Telemetry Channels", value: "Multi-channel" }
    ],
    bullets: [
      "Executed targeted digital campaigns across multi-touch customer channels, engaging 5,000+ prospective leads.",
      "Analyzed conversion telemetry and customer demographic funnels alongside sales teams, driving a 10% uplift in qualified lead acquisition.",
      "Synthesized quantitative campaign performance reports to optimize marketing resource allocation and customer retention touchpoints."
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering (CSE)",
  institution: "Jawaharlal Nehru Technological University (JNTU) Kakinada",
  period: "2018 – 2026",
  cgpa: "6.5 / 10.0",
  coursework: [
    "Web Application Development",
    "Database Management Systems (DBMS)",
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",
    "Cloud Computing Fundamentals",
    "Computer Networks & Protocols",
    "Operating Systems Architecture"
  ]
};

export const ECOSYSTEM_LAYERS = [
  {
    layer: "01",
    name: "Cloud Infrastructure & Scalability",
    description: "AWS cloud resources, serverless execution, containerization, and edge networks.",
    technologies: [
      { name: "AWS EC2", role: "Compute instances, security groups, elasticity" },
      { name: "AWS S3", role: "Object storage, asset pipelines, durability" },
      { name: "AWS Lambda", role: "Serverless event triggers & compute" },
      { name: "AWS IAM", role: "Role-based access control & least-privilege security" },
      { name: "Vercel Edge", role: "Serverless global edge CDN & routing" },
      { name: "Docker", role: "Consistent development & container environments" }
    ]
  },
  {
    layer: "02",
    name: "Backend Microservices & REST APIs",
    description: "High-throughput Python microservices engineered for low latency and deterministic execution.",
    technologies: [
      { name: "Python 3.10+", role: "Core programming language for backend & science" },
      { name: "Flask", role: "Lightweight REST API endpoints, streaming microservices" },
      { name: "FastAPI", role: "Asynchronous OpenAPI services, Pydantic type validation" },
      { name: "Django", role: "Enterprise backend architecture and ORM integration" },
      { name: "REST Architecture", role: "Stateless JSON APIs, token authentication, error contracts" }
    ]
  },
  {
    layer: "03",
    name: "Data Science, Computer Vision & ML",
    description: "Mathematical models, image processing pipelines, and probabilistic customer equity forecasting.",
    technologies: [
      { name: "OpenCV", role: "Computer vision, frame extraction, facial landmark detection" },
      { name: "Scikit-learn", role: "Supervised classification, Random Forest, Logistic Regression" },
      { name: "TensorFlow / Keras", role: "Convolutional Neural Networks & image models" },
      { name: "NumPy & Pandas", role: "Matrix manipulation, feature engineering, vectorization" },
      { name: "BG/NBD & Gamma-Gamma", role: "Probabilistic customer retention & churn modeling" }
    ]
  },
  {
    layer: "04",
    name: "Relational Databases & Performance",
    description: "Normalized relational schemas, B-Tree index optimization, and high-efficiency query execution.",
    technologies: [
      { name: "MySQL", role: "Normalized relational database storage & ACID transactions" },
      { name: "PyMySQL", role: "Prepared statements, connection pooling, SQL injection defense" },
      { name: "Flask-SQLAlchemy", role: "ORM data modeling, migration management, relational mapping" },
      { name: "Query Optimization", role: "EXPLAIN plan tuning, B-Tree index cache hits, -25% latency" }
    ]
  },
  {
    layer: "05",
    name: "Modern Frontend & Reactive UI",
    description: "Component-driven single page applications, responsive design, and smooth user interactions.",
    technologies: [
      { name: "React.js 19", role: "Component architecture, dynamic hooks, virtual DOM" },
      { name: "Next.js 14", role: "Server-side rendering, App Router, metadata management" },
      { name: "Tailwind CSS", role: "Utility-first design system, dark mode, responsive layouts" },
      { name: "JavaScript ES6+", role: "Asynchronous fetch, DOM manipulation, LocalStorage sync" },
      { name: "Framer Motion", role: "Hardware-accelerated animations & smooth page transitions" }
    ]
  }
];

export const SEARCH_INDEX = [
  { title: "Overview", path: "/", keywords: "home about hero bio python aws full stack developer vardhan yerramsetti" },
  { title: "Projects Exhibition", path: "/work", keywords: "projects work portfolio 8 live apps vercel github deployments" },
  { title: "Music Emotion Recommender", path: "/work", keywords: "music emotion opencv facial expression classification flask vercel computer vision" },
  { title: "S.V.T. Tailors Atelier & Tracker", path: "/work", keywords: "svt tailors bespoke order pipeline pymysql serverless mysql 5 stages" },
  { title: "MS Pickles Andhra E-Commerce", path: "/work", keywords: "ms pickles artisanal store andhra food cart tailwind es6" },
  { title: "\"They Call Him OG\" Showcase", path: "/work", keywords: "they call him og nextjs react cinematic video web audio vercel" },
  { title: "90-Day Body Transformation", path: "/work", keywords: "90 days body transformation plotly 3d manifolds python fitness analytics" },
  { title: "Google Forms Clone", path: "/work", keywords: "google forms clone flask sqlalchemy mysql relational survey engine" },
  { title: "OmniPulse Retention & CLV Engine", path: "/work", keywords: "omnipulse clv churn bg nbd gamma gamma customer lifetime value fastapi" },
  { title: "Scalable Task Cloud Portal", path: "/work", keywords: "task cloud portal aws ec2 s3 docker flask react rest api" },
  { title: "Interactive Engineering Lab", path: "/lab", keywords: "lab simulators algorithm opencv audio visualizer mysql query index benchmark retention" },
  { title: "Technology Ecosystem", path: "/ecosystem", keywords: "ecosystem architecture cloud infrastructure backend python ml databases frontend" },
  { title: "Experience & Education", path: "/experience", keywords: "experience instakart flipkart teaching assistant future generali jntu kakinada btech" },
  { title: "Certifications & Credentials", path: "/credentials", keywords: "credentials certifications aws certified cloud practitioner cisco android enterprise" },
  { title: "Resume QuickLook", path: "/resume", keywords: "resume cv download pdf ats score curriculum vitae qualifications" },
  { title: "Connect & Contact", path: "/connect", keywords: "connect contact email whatsapp message hire linkedin github collaborate" }
];
