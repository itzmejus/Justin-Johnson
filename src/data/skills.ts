import { t } from "../i18n/locale";

const skillList = [
  {
    icon: "data_object",
    title: "FRONTEND",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: "dns",
    title: "BACKEND",
    tags: ["Node.js", "Express", "Python", "REST APIs"],
  },
  {
    icon: "cloud",
    title: "CLOUD & AWS",
    tags: ["AWS S3", "EC2", "Lambda", "Docker"],
  },
  {
    icon: "storage",
    title: "DATABASES",
    tags: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: "shopping_cart",
    title: "E-COMMERCE",
    tags: ["Stripe", "PayPal", "HyperPay"],
  },
  {
    icon: "terminal",
    title: "TOOLS",
    tags: ["Git", "Jira", "Figma"],
  },
];

const TITLES_DE: Record<string, string> = {
  DATABASES: "DATENBANKEN",
};

export const skills = skillList.map((skill) => ({ ...skill, title: t({ en: skill.title, de: TITLES_DE[skill.title] ?? skill.title }) }));
