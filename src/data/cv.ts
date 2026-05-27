// ============================================================
// CV DATA — sourced from TaqiELdeen_CV.pdf
// ============================================================

export const personal = {
  name:      "Taqi Eldeen",
  fullName:  "Taqi Eldeen Mohammad",
  role:      "Cybersecurity & Full-Stack Developer",
  tagline:   "Building secure, fast, and bold digital experiences.",
  location:  "Cairo, Egypt",
  email:     "taqieldeenmohammad@gmail.com",
  phone:     "+20 114 020 7191",
  linkedin:  "https://linkedin.com/in/taqi-eldeen-mohammad",
  github:    "https://github.com/Taqi-Eldeen",
  summary:
    "Cybersecurity and Computer Science student at Misr International University with hands-on experience in network security, system administration, and secure web development. Skilled in firewalls, VPNs, OSPF, ASA, and Linux systems. Developed an ML-based Web Application Firewall sponsored by CyShield.",
};

export const education = [
  {
    school:   "Misr International University (MIU)",
    degree:   "B.Sc. Computer Science — Cybersecurity Track",
    location: "Cairo, Egypt",
    period:   "2022 — 2026",
  },
];

export interface Project {
  title:    string;
  subtitle: string;
  desc:     string[];
  tags:     string[];
  award?:   string;
  featured?: boolean;
  icon:     string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title:    "Web Hydra",
    subtitle: "Intelligent Web Application Firewall · Graduation Project · Sponsored by CyShield",
    desc: [
      "Advanced WAF protecting web applications against modern cyber threats using machine learning and behavioral profiling to detect anomalies and malicious traffic in real time.",
      "Engineered modules for request analysis, signature-based detection, automated threat mitigation, and centralised real-time monitoring and logging.",
    ],
    tags:     ["Python", "Machine Learning", "WAF", "Cybersecurity", "Behavioral Analysis"],
    featured: true,
    icon:     "shield",
    gradient: "linear-gradient(135deg, #282c20 0%, #343a26 100%)",
  },
  {
    title:    "Sports Excellence Platform",
    subtitle: "Full-Stack Sports Club Platform",
    award:    "Best Project Award — Spring 2024",
    desc: [
      "Full-stack sports club platform with secure bcrypt auth, role-based access, e-commerce, tiered ticketing, multi-language i18n, and HTTPS/SSL. 104 commits.",
    ],
    tags:     ["Node.js", "Express", "MongoDB", "EJS", "SSL/HTTPS", "i18n"],
    icon:     "trophy",
    gradient: "linear-gradient(135deg, #111112 0%, #282c20 100%)",
  },
  {
    title:    "Enterprise Network Security",
    subtitle: "Cisco Packet Tracer · IT Security Course (INF 420)",
    desc: [
      "Multi-site enterprise network (20+ devices) with OSPF routing and SHA-256 key-chain auth across three routers.",
      "Site-to-Site IPsec VPN (AES-256, SHA-1, DH Group 5) and Zone-Based Policy Firewall with INSIDE, OUTSIDE, and GUEST zones.",
      "Cisco ASA with PAT, DMZ segmentation, static NAT, MPF inspection, and SSH remote access.",
    ],
    tags:     ["Cisco", "IPsec VPN", "OSPF", "ASA", "SDN", "RADIUS AAA"],
    icon:     "network",
    gradient: "linear-gradient(135deg, #343a26 0%, #535450 100%)",
  },
  {
    title:    "Inventory Management System",
    subtitle: "PHP/MySQL Full-Stack Application",
    desc: [
      "Role-based auth system with supplier management, low-stock auto-notifications, sales reporting, and Apache SSL configuration.",
    ],
    tags:     ["PHP", "MySQL", "Apache", "SSL", "Role-Based Auth"],
    icon:     "database",
    gradient: "linear-gradient(135deg, #282c20 0%, #111112 100%)",
  },
  {
    title:    "E-Commerce Platform",
    subtitle: "Responsive Storefront",
    desc: [
      "Responsive e-commerce site with product catalogue, shopping cart, and order management.",
    ],
    tags:     ["HTML", "CSS", "JavaScript"],
    icon:     "cart",
    gradient: "linear-gradient(135deg, #111112 0%, #3b3c38 100%)",
  },
];

export interface Skill {
  group:  string;
  icon:   string;
  items:  string[];
}

export const skills: Skill[] = [
  {
    group: "Cybersecurity",
    icon:  "🛡️",
    items: [
      "Firewall Config (ACLs, ZPF, ASA)",
      "IPsec VPN (IKE/ISAKMP)",
      "RADIUS / AAA",
      "Port Security",
      "DHCP Snooping",
      "BPDU Guard",
      "Cryptography (AES, SHA, RSA)",
      "WAF Development",
    ],
  },
  {
    group: "Networking",
    icon:  "🌐",
    items: [
      "OSPF + SHA-256 Auth",
      "VLANs & Subnetting",
      "Routing & Switching",
      "SDN Controllers",
      "Cisco Packet Tracer",
      "DMZ Segmentation",
    ],
  },
  {
    group: "Programming",
    icon:  "⚡",
    items: [
      "Python",
      "JavaScript",
      "Node.js",
      "C++",
      "C#",
      "PHP",
    ],
  },
  {
    group: "Web Development",
    icon:  "🔧",
    items: [
      "Express.js",
      "RESTful APIs",
      "MongoDB",
      "MySQL",
      "EJS / MVC",
      "SSL / HTTPS",
    ],
  },
  {
    group: "Tools & Systems",
    icon:  "🛠️",
    items: [
      "Linux (Red Hat)",
      "Git & GitHub",
      "Composer",
      "LaTeX (Overleaf)",
      "Cisco Packet Tracer",
      "Apache",
    ],
  },
  {
    group: "ML & AI",
    icon:  "🤖",
    items: [
      "Behavioral Profiling",
      "Anomaly Detection",
      "Signature-Based Detection",
      "Real-Time Monitoring",
    ],
  },
];

export interface Experience {
  role:     string;
  company:  string;
  period:   string;
  type:     string;
  bullets:  string[];
}

export const experience: Experience[] = [
  {
    role:    "IT Intern",
    company: "Kumquat",
    period:  "Summer 2024",
    type:    "Internship",
    bullets: [
      "Assisted in network configuration, system troubleshooting, and enterprise IT operations.",
    ],
  },
  {
    role:    "Conference Contributor",
    company: "MIUCC 2025 — 5th Int'l Mobile, Intelligent & Ubiquitous Computing Conference",
    period:  "2025",
    type:    "Academic",
    bullets: [
      "Contributed to the 5th International MIUCC Conference; engaged in AI research discussions.",
    ],
  },
];

export interface Certification {
  name:   string;
  issuer: string;
  date:   string;
  badge:  string;
}

export const certifications: Certification[] = [
  {
    name:   "Red Hat System Administration I (RH124) v9.3",
    issuer: "Red Hat",
    date:   "June 2025",
    badge:  "🎓",
  },
  {
    name:   "Network Security",
    issuer: "Cisco Networking Academy",
    date:   "2025",
    badge:  "🔐",
  },
  {
    name:   "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date:   "2025",
    badge:  "🛡️",
  },
  {
    name:   "Information Technology Fundamentals",
    issuer: "IBM SkillsBuild",
    date:   "May 2025",
    badge:  "💻",
  },
  {
    name:   "MIUCC 2025 Certificate of Contribution",
    issuer: "5th Int'l MIUCC Conference",
    date:   "2025",
    badge:  "🏆",
  },
];

export const stats = [
  { value: 5,   suffix: "+",  label: "Projects Shipped"  },
  { value: 5,   suffix: "",   label: "Certifications"    },
  { value: 104, suffix: "",   label: "Git Commits (best project)" },
  { value: 20,  suffix: "+",  label: "Network Devices (lab)" },
];

export const marqueeItems = [
  "Python", "Node.js", "Cybersecurity", "WAF", "Cisco",
  "Linux", "IPsec VPN", "MongoDB", "OSPF", "Machine Learning",
  "Red Hat", "Express.js", "ASA Firewall", "RADIUS AAA",
];
