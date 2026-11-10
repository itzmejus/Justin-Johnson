import { t } from "../i18n/locale";

const educationList = [
  {
    degree: "BCA",
    institution: "Shreedevi College, India",
    institutionLink: "https://sdit.ac.in/",
    years: "2018 – 2021",
    isCurrent: true,
  },
  {
    degree: "Plus 2",
    institution: "GHSS Pakkam, India",
    institutionLink: "https://schools.org.in/kasaragod/32010400213/ghss-pakkam.htm",
    years: "2017",
  },
  {
    degree: "SSLC",
    institution: "Ursuline Public School, India",
    institutionLink: "https://ursulinepublicschoolkanhiradukkam.com/",
    years: "2015",
  },
];

// German labels for the degrees and the country; years and links stay the same.
const DEGREES_DE: Record<string, string> = {
  BCA: "Bachelor of Computer Applications (BCA)",
  "Plus 2": "Hochschulreife (Plus 2)",
  SSLC: "Mittlerer Schulabschluss (SSLC)",
};

export const education = educationList.map((edu) =>
  t({
    en: edu,
    de: { ...edu, degree: DEGREES_DE[edu.degree] ?? edu.degree, institution: edu.institution.replace(", India", ", Indien") },
  }),
);
