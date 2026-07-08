// CV content, ported from the previous single-page site (src/content.js).
// Content is unchanged — only presentation was rebuilt.

export interface CVProject {
  name: string;
  client: string;
  note: string;
}

export interface CVExperienceItem {
  period: string;
  role: string;
  org: string;
  tag: string;
  body: string;
  projects?: CVProject[];
}

export interface CVEducationItem {
  school: string;
  degree: string;
  period: string;
  note: string;
}

export interface CVSkillGroup {
  name: string;
  items: string[];
}

export interface CVLanguage {
  lang: string;
  level: string;
}

export interface CVInterest {
  title: string;
  note: string;
}

export interface CVContent {
  nav: {
    about: string;
    experience: string;
    education: string;
    skills: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    tagline: string;
    meta: { label: string; value: string }[];
  };
  about: {
    kicker: string;
    title: string;
    body: string[];
  };
  experience: {
    kicker: string;
    title: string;
    items: CVExperienceItem[];
  };
  education: {
    kicker: string;
    items: CVEducationItem[];
  };
  skills: {
    kicker: string;
    title: string;
    groups: CVSkillGroup[];
    certs: { title: string; items: string[] };
    languages: { title: string; items: CVLanguage[] };
  };
  interests: {
    kicker: string;
    items: CVInterest[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    email: string;
    cta: string;
    links: { label: string; value: string; href?: string }[];
  };
}

export const cv: Record<'en' | 'de', CVContent> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Expertise',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'IT Consultant · Berlin',
      name: 'Hüseyin Camalan',
      tagline:
        'I help teams get through complex digital transformation projects — coordinating people, planning, and the things in between.',
      meta: [
        { label: 'Based in', value: 'Berlin, DE' },
        { label: 'Status', value: 'Open to new roles' },
        { label: 'Focus', value: 'IT consulting, project management, data science' },
      ],
    },
    about: {
      kicker: 'About',
      title: 'Short version',
      body: [
        'A results-driven IT consultant with four years of experience coordinating international and cross-functional teams on complex digitalisation projects. My background in psychology and neuroscience, combined with experience in data science, lets me pair analytical precision with a human-centered approach to problem-solving.',
      ],
    },
    experience: {
      kicker: 'Experience',
      title: "Where I've worked",
      items: [
        {
          period: 'Sep 2025 — Present',
          role: 'Professional reorientation',
          org: 'Berlin',
          tag: 'Current',
          body: 'Looking for the next role — open to consulting, project management and IT transformation work in Europe.',
        },
        {
          period: 'Feb 2025 — Aug 2025',
          role: 'Sabbatical',
          org: '—',
          tag: 'Interlude',
          body: 'Six months off for travel and a reset.',
        },
        {
          period: 'Jul 2021 — Feb 2025',
          role: 'Technology Consulting Analyst / Transformation Excellence Analyst',
          org: 'Accenture GmbH, Berlin',
          tag: '3y 8m',
          body: 'Governance and PM roles across complex IT transformations, working in international (DACH, India, Eastern Europe) and cross-functional teams. Hands-on technical work as developer, data architect, and test engineer. Led and prepared client workshops. Authored project proposals and internal assets.',
          projects: [
            {
              name: 'IT Carve-out',
              client: 'Global industrial group',
              note: 'Key role in the PMO of a large transformation programme spanning six projects. Significant contribution to conflict resolution between programme management and project teams.',
            },
            {
              name: 'Cloud Transformation',
              client: 'Large European e-commerce platform',
              note: 'Test specialist and requirements manager for the design and rollout of the end-to-end test strategy across 100+ decentralised teams ahead of an ambitious go-live. Left behind a lasting test culture at the client, particularly around automation.',
            },
            {
              name: 'ESG Conception',
              client: 'European pharmaceutical company',
              note: 'Project manager and data architect for an ESG reporting conception project. Developed an innovative workaround for calculating ESG metrics where source data was incomplete.',
            },
          ],
        },
        {
          period: 'Mar 2018 — Apr 2020',
          role: 'Student Research Assistant',
          org: 'Charité & Fraunhofer HHI, Berlin',
          tag: '2y',
          body: 'Research into machine-learning applications across different problem spaces. Co-author on a paper on VR user behaviour (nominated for Best Paper).',
        },
      ],
    },
    education: {
      kicker: 'Education',
      items: [
        {
          school: 'TU Berlin',
          degree: 'M.Sc. Computational Neuroscience',
          period: 'Oct 2014 — Mar 2020',
          note: 'Thesis: Machine Learning in Dementia Prediction. Grade 1.9 (German scale) — "good".',
        },
        {
          school: 'Bilkent University',
          degree: 'B.A. Psychology',
          period: 'Sep 2008 — Jun 2013',
          note: 'Grade 3.94 (American GPA scale) — top of cohort.',
        },
        {
          school: 'Reuter Management Training',
          degree: 'Project Management Certification (IPMA-C)',
          period: 'Dec 2025 — Apr 2026',
          note: 'In progress.',
        },
      ],
    },
    skills: {
      kicker: 'Skills',
      title: 'What I do',
      groups: [
        {
          name: 'Project leadership',
          items: [
            'Project management',
            'Project planning',
            'PMO & governance',
            'Reporting & decision-ready artefacts',
            'Coordination of large, complex endeavours',
            'Agile delivery',
            'Requirements management',
            'Communication planning',
            'Conflict resolution',
            'Workshop facilitation',
          ],
        },
        {
          name: 'Analytical & domain',
          items: ['Data analysis & forecasting', 'End-to-end testing', 'ESG', 'IT transformation'],
        },
        {
          name: 'Tools',
          items: ['MS PowerPoint', 'Python', 'Mural & Miro', 'Jira & Xray', 'SQL · Snowflake', 'MS Project'],
        },
      ],
      certs: {
        title: 'Certifications',
        items: [
          'Google Project Management',
          'ICAgile Certified Professional',
          'Workera Data Scientist',
          'AWS Cloud Practitioner',
        ],
      },
      languages: {
        title: 'Languages',
        items: [
          { lang: 'English', level: 'C2' },
          { lang: 'German', level: 'C1' },
          { lang: 'Turkish', level: 'C2' },
          { lang: 'French', level: 'A1' },
        ],
      },
    },
    interests: {
      kicker: 'Outside of work',
      items: [
        {
          title: 'Forró dance',
          note: 'Teaching, DJing, volunteering and organising since 2019. Steering committee of Tome Forró Berlin e.V. since 2025.',
        },
        {
          title: 'Ultimate Frisbee',
          note: 'Playing since 2008. Competed at the World Club Championships in 2014.',
        },
        {
          title: 'Strength training & bouldering',
          note: 'In the gym and on the wall since 2015.',
        },
        {
          title: 'Specialty coffee',
          note: 'Proud owner of a hand grinder.',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Get in touch',
      body: 'Currently open to consulting, project management and IT transformation roles — full-time or project-based. Email is the fastest way to reach me.',
      email: 'camalanhuseyin@gmail.com',
      cta: 'Say hello',
      links: [
        { label: 'LinkedIn', value: '/in/huseyin-camalan', href: 'https://www.linkedin.com/in/huseyin-camalan/' },
        { label: 'Email', value: 'huseyin@camalan.de', href: 'mailto:camalanhuseyin@gmail.com' },
        { label: 'Location', value: 'Berlin, DE' },
      ],
    },
  },

  de: {
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      education: 'Bildung',
      skills: 'Expertise',
      contact: 'Kontakt',
    },
    hero: {
      eyebrow: 'IT-Berater · Berlin',
      name: 'Hüseyin Camalan',
      tagline:
        'Ich helfe Teams durch komplexe Digitalisierungsprojekte — mit Koordination, Planung und allem dazwischen.',
      meta: [
        { label: 'Standort', value: 'Berlin, DE' },
        { label: 'Status', value: 'Offen für neue Rollen' },
        { label: 'Fokus', value: 'IT-Transformation · PMO' },
      ],
    },
    about: {
      kicker: 'Über mich',
      title: 'Kurzfassung',
      body: [
        'Ergebnisorientierter IT-Berater mit vier Jahren Erfahrung in der Koordination internationaler und funktionsübergreifender Teams in komplexen Digitalisierungsprojekten. Durch mein Studium der Psychologie und Neurowissenschaften sowie Erfahrung in Data Science verbinde ich analytische Präzision mit einem menschenzentrierten Problemlösungsansatz.',
      ],
    },
    experience: {
      kicker: 'Erfahrung',
      title: 'Beruflicher Werdegang',
      items: [
        {
          period: 'Sep 2025 — heute',
          role: 'Berufliche Neuorientierung',
          org: 'Berlin',
          tag: 'Aktuell',
          body: 'Auf der Suche nach der nächsten Rolle — offen für Consulting, Projektmanagement und IT-Transformationsarbeit in Europa.',
        },
        {
          period: 'Feb 2025 — Aug 2025',
          role: 'Sabbatical',
          org: '—',
          tag: 'Pause',
          body: 'Sechs Monate Auszeit für Reisen und Reflexion.',
        },
        {
          period: 'Jul 2021 — Feb 2025',
          role: 'Technology Consulting Analyst / Transformation Excellence Analyst',
          org: 'Accenture GmbH, Berlin',
          tag: '3J 8M',
          body: 'Governance- und PM-Rollen in komplexen IT-Transformationsprojekten, mit Arbeit in internationalen (DACH, Indien, Osteuropa) und funktionsübergreifenden Teams. Technischer Einsatz als Programmierer, Datenarchitekt und Testingenieur. Leitung und Vorbereitung von Kundenworkshops. Erstellung von Projektangeboten und internen Assets.',
          projects: [
            {
              name: 'IT-Carve-out',
              client: 'Globaler Industriekonzern',
              note: 'Schlüsselrolle im PMO eines großen Transformationsprogramms mit sechs Projekten. Wichtiger Beitrag zur Konfliktlösung zwischen Programmmanagement und Projektteams.',
            },
            {
              name: 'Cloud Transformation',
              client: 'Große europäische E-Commerce-Plattform',
              note: 'Testspezialist und Anforderungsmanager bei Entwicklung und Umsetzung der E2E-Teststrategie für 100+ dezentrale Teams vor einem ambitionierten Go-Live. Hinterließ eine nachhaltige Testkultur beim Kunden, insbesondere im Bereich Automatisierung.',
            },
            {
              name: 'ESG-Konzeption',
              client: 'Europäisches Pharma­unternehmen',
              note: 'Projektmanager und Datenarchitekt für ein Konzeptionsprojekt zu ESG-Reporting. Entwicklung eines innovativen Workarounds zur Kalkulation der ESG-Metriken bei unvollständigen Quelldaten.',
            },
          ],
        },
        {
          period: 'Mär 2018 — Apr 2020',
          role: 'Studentische Forschungskraft',
          org: 'Charité & Fraunhofer HHI, Berlin',
          tag: '2J',
          body: 'Forschung zu Machine-Learning-Anwendungen in verschiedenen Themenfeldern. Mitautor eines Papers zu VR-Nutzerverhalten (nominiert als Best Paper).',
        },
      ],
    },
    education: {
      kicker: 'Bildung',
      items: [
        {
          school: 'TU Berlin',
          degree: 'M.Sc. Computational Neuroscience',
          period: 'Okt 2014 — Mär 2020',
          note: 'Masterarbeit: Maschinelles Lernen in der Demenz­vorhersage. Note 1,9 (deutsche Skala) — „gut".',
        },
        {
          school: 'Bilkent University',
          degree: 'B.A. Psychology',
          period: 'Sep 2008 — Jun 2013',
          note: 'Note 3,94 (amerikanische Skala) — Jahrgangs­beste.',
        },
        {
          school: 'Reuter Management Training',
          degree: 'Projekt­management­ausbildung (IPMA-C)',
          period: 'Dez 2025 — Apr 2026',
          note: 'Prüfungausstehend (IPMA-D)',
        },
      ],
    },
    skills: {
      kicker: 'Skills',
      title: 'Was ich mache',
      groups: [
        {
          name: 'Projektführung',
          items: [
            'Projekt­management',
            'Projekt­planung',
            'PMO & Governance',
            'Reporting & Entscheidungs­unterlagen',
            'Koordination umfangreicher & komplexer Vorhaben',
            'Agile Umsetzung',
            'Anforderungs­management',
            'Kommunikations­planung',
            'Konflikt­lösung',
            'Workshop­vorbereitung',
          ],
        },
        {
          name: 'Analytisch & fachlich',
          items: ['Datenanalyse & Forecasting', 'E2E-Test', 'ESG', 'IT-Transformation'],
        },
        {
          name: 'Werkzeuge',
          items: ['MS PowerPoint', 'Python', 'Mural & Miro', 'Jira & Xray', 'SQL · Snowflake', 'MS Project'],
        },
      ],
      certs: {
        title: 'Zertifikate',
        items: [
          'Google Project Management',
          'ICAgile Certified Professional',
          'Workera Data Scientist',
          'AWS Cloud Practitioner',
        ],
      },
      languages: {
        title: 'Sprachen',
        items: [
          { lang: 'Englisch', level: 'C2' },
          { lang: 'Deutsch', level: 'C1' },
          { lang: 'Türkisch', level: 'C2' },
          { lang: 'Französisch', level: 'A1' },
        ],
      },
    },
    interests: {
      kicker: 'Abseits der Arbeit',
      items: [
        {
          title: 'Forró',
          note: 'Tanzlehre, DJ, ehrenamtliche Arbeit und und Veranstaltungs­organisation seit 2019. Lenkungs­ausschuss von Tome Forró Berlin e.V. seit 2025.',
        },
        {
          title: 'Ultimate Frisbee',
          note: 'Im Spiel seit 2008. Teilnahme an den Weltmeister­schaften 2014.',
        },
        {
          title: 'Kraftsport & Bouldern',
          note: 'Im Gym und an der Wand seit 2015.',
        },
        {
          title: 'Spezialitäten­kaffee',
          note: 'Stolzer Besitzer eines Handmühles.',
        },
      ],
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Sprechen wir',
      body: 'Aktuell offen für Consulting-, Projektmanagement und IT-Transformationsrollen — Festanstellung oder projektbasiert. Am schnellsten erreichbar per E-Mail.',
      email: 'camalanhuseyin@gmail.com',
      cta: 'Hallo sagen',
      links: [
        { label: 'LinkedIn', value: '/in/huseyin-camalan', href: 'https://www.linkedin.com/in/huseyin-camalan/' },
        { label: 'E-Mail', value: 'camalanhuseyin@gmail.com', href: 'mailto:camalanhuseyin@gmail.com' },
        { label: 'Ort', value: '10969 Berlin, DE' },
      ],
    },
  },
};
