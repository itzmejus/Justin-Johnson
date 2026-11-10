import type { SeoPageTranslation } from "../types";

export const servicePagesDe1: SeoPageTranslation[] = [
  {
    slug: "nextjs-development-services",
    title: "Next.js Entwicklung | Justin Johnson",
    description: "Next.js-Entwicklung für inhaltsstarke Websites und Onlineshops: App Router, Server-Rendering und SEO-orientierte Architektur von einem freiberuflichen Entwickler.",
    h1: "Next.js Entwicklung",
    eyebrow: "Leistungen",
    primaryKeyword: "Next.js Entwicklung",
    secondaryKeywords: [
      "Next.js Entwickler beauftragen",
      "Next.js Webanwendung entwickeln",
      "serverseitig gerenderte Next.js Websites",
      "Next.js E-Commerce Entwicklung",
      "Next.js Berater",
    ],
    intro: [
      "Next.js ist meine Standardwahl, wann immer eine Website in Suchmaschinen ranken oder beim ersten Aufruf schnell laden muss. Sie erhalten Server-Rendering, dateibasiertes Routing sowie Bild- und Metadaten-Handling, ohne eine eigene Build-Pipeline aufbauen zu müssen – also weniger Infrastrukturcode und mehr Zeit für das eigentliche Produkt.",
      "Ich entwickle und betreue Next.js-Anwendungen im Produktivbetrieb von Anfang bis Ende – Architekturentscheidungen, Data-Fetching-Strategie, Deployment und die laufenden Änderungen nach dem Launch.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Eine React-Single-Page-App, die Suchmaschinen nicht richtig indexieren können, weil Inhalte erst nach dem clientseitigen JavaScript erscheinen",
            "Marketingseiten, die langsam laden, weil das gesamte Bundle ausgeliefert wird, bevor irgendetwas sichtbar ist",
            "Eine Codebasis ohne klares Muster dafür, wo Data Fetching, Routing und Rendering-Entscheidungen hingehören",
            "Der Bedarf an einer schnellen Marketing-Website und einer App mit Login in derselben Codebasis, ohne doppelte Infrastruktur",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "App-Router-Architektur mit Route Groups und Layouts",
            "Aufteilung in Server- und Client-Komponenten für minimales JavaScript im Browser",
            "Einrichtung der Metadata API für Titel, Beschreibungen und Open-Graph-Tags pro Seite",
            "Bildoptimierung mit next/image",
            "API-Routen oder Route Handlers für die Backend-Logik",
            "Deployment-Pipeline (Vercel oder selbst gehosteter Node-Server)",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Seiten und Datenquellen eingrenzen und entscheiden, was statisch, serverseitig oder clientseitig gerendert wird",
            "App-Router-Struktur, gemeinsame Layouts und Design-System-Integration aufsetzen (Tailwind CSS, Komponentenbibliothek)",
            "Routen, Data Fetching und Formulare umsetzen, mit TypeScript-Typen, die Frontend und API-Schicht gemeinsam nutzen",
            "Metadaten, Sitemap und strukturierte Daten vor dem Launch einbinden, nicht danach",
            "Deployen, Core Web Vitals überwachen und eine Codebasis übergeben, die ein anderer Entwickler problemlos übernehmen kann",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "Next.js (App Router)",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js-APIs",
            "PostgreSQL oder Supabase für Daten",
            "Deployment über Vercel oder Docker",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Unternehmen, deren Marketing-Website tatsächlich in der Suche ranken muss, SaaS-Produkte, die neben der App eine schnelle öffentliche Website brauchen, und Teams, die von einer langsamen clientseitig gerenderten React-App oder einem veralteten CMS-Theme migrieren.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Warum Next.js statt einer einfachen React-App?",
        "Eine einfache React-App (Vite, Create React App) rendert alles im Browser, sodass Suchmaschinen und Social-Media-Crawler eine leere Seite sehen, bis JavaScript ausgeführt wird. Next.js rendert das initiale HTML auf dem Server oder zur Build-Zeit, sodass die Inhalte sofort vorhanden sind – das wirkt sich direkt auf die organische Sichtbarkeit aus und darauf, wie schnell sich die Seite bei langsamer Verbindung anfühlt.",
      ],
      [
        "Nutzen Sie den Pages Router oder den App Router?",
        "Für neue Projekte den App Router – er ist das aktuelle Modell, auf dem Next.js aufbaut, mit besserer Unterstützung für Layouts, Streaming und Server Components. Bei bestehenden Projekten, die bereits auf dem Pages Router basieren, arbeite ich darin weiter, statt eine unnötige Migration zu erzwingen.",
      ],
      [
        "Können Sie eine bestehende React-App zu Next.js migrieren?",
        "Ja. Routing und Komponentenstruktur lassen sich meist mit Anpassungen übernehmen; der größere Aufwand liegt in der Entscheidung, was zur Server-Komponente wird und was clientseitig bleibt, sowie im Umbau des Data Fetchings auf das Modell von Next.js statt auf useEffect-basiertes Laden.",
      ],
      [
        "Kümmern Sie sich auch um Hosting und Deployment?",
        "Ja – in der Regel Vercel wegen der Einfachheit, oder ein Docker-Container auf Ihrer eigenen Infrastruktur, wenn alles im Haus bleiben oder ein Vendor-Lock-in vermieden werden soll.",
      ],
    ],
  },
  {
    slug: "react-development-services",
    title: "React Entwicklung | Justin Johnson",
    description: "Individuelle React-Anwendungen und Frontend-Entwicklung – Komponentenarchitektur, State-Management und Anbindung an bestehende APIs und Backends.",
    h1: "React Entwicklung",
    eyebrow: "Leistungen",
    primaryKeyword: "React Entwicklung",
    secondaryKeywords: [
      "React Entwickler beauftragen",
      "individuelle React Anwendung entwickeln",
      "React Frontend Entwicklung",
      "React Komponenten Entwicklung",
      "Single Page Application Entwicklung",
    ],
    intro: [
      "React ist das richtige Werkzeug, wenn Sie eine interaktive Oberfläche brauchen – Dashboards, Buchungsabläufe, mehrstufige Formulare, alles mit viel clientseitigem State. Ich entwickle React-Frontends, die auch beim Wachsen wartbar bleiben, mit klaren Komponentengrenzen und typisierten Daten.",
      "Das umfasst sowohl Neuentwicklungen als auch die Übernahme einer bestehenden React-Codebasis, die über ihre ursprüngliche Struktur hinausgewachsen ist.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Eine Oberfläche, die sich nur noch schwer ändern lässt, weil der State ohne klare Zuständigkeit über Komponenten verstreut ist",
            "Träge Interaktionen durch unnötige Re-Renders oder zu große Bundles",
            "Ein Frontend, das zuverlässig mit mehreren Backends oder Drittanbieter-APIs (Zahlungen, Karten, CRMs) kommunizieren muss",
            "Noch gar kein Frontend – Start mit einem Design und einer API",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Komponentenarchitektur und Ordnerstruktur, die über die ersten Features hinaus skalieren",
            "State-Management passend zur Größe der App (React State/Context oder Redux für größere Apps)",
            "Formularverarbeitung mit Validierung",
            "API-Anbindung mit typisierten Request-/Response-Verträgen",
            "Barrierefreiheitsprüfung – semantisches HTML, Tastaturnavigation, Fokuszustände",
            "Performance-Profiling und Behebung langsamer Renders",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Design oder bestehende App prüfen und Komponentengrenzen sowie Datenfluss festlegen",
            "Projekt mit TypeScript, Linting und Build-Tool aufsetzen (oder das bestehende auditieren)",
            "Features schrittweise umsetzen – jedes funktioniert vollständig, bevor das nächste beginnt",
            "Kritische Abläufe manuell über Breakpoints und Browser hinweg testen",
            "Übergabe mit Dokumentation, wo was liegt und warum",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "React 18/19",
            "TypeScript",
            "Redux oder React Context",
            "Tailwind CSS",
            "Vite oder Next.js",
            "REST- oder GraphQL-APIs",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Produkte, die vor allem interaktiv statt inhaltsgetrieben sind – interne Tools, Buchungssysteme, Marktplätze und Dashboards – sowie Teams, deren bestehende React-Codebasis stabilisiert werden muss, bevor neue Features hinzukommen.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "React oder Next.js für mein Projekt?",
        "Wenn die App hinter einem Login liegt und Sichtbarkeit in Suchmaschinen keine Rolle spielt – ein Admin-Dashboard, ein internes Tool –, ist eine einfache React-SPA (mit Vite) simpler und mit weniger Infrastruktur verbunden. Muss irgendein Teil in der Suche gefunden werden, ist Next.js der bessere Ausgangspunkt.",
      ],
      [
        "Können Sie in einer bestehenden React-Codebasis arbeiten?",
        "Ja, das ist häufige Arbeit. Ich beginne mit einem Audit – Komponentenstruktur, State-Management, Abhängigkeitsversionen –, bevor ich Änderungen vornehme, damit Korrekturen nicht mit Mustern kollidieren, die an anderer Stelle der App bereits verwendet werden.",
      ],
      [
        "Schreiben Sie Tests?",
        "Für kritische Pfade – Checkout, Authentifizierung, alles mit finanziellen oder datenbezogenen Folgen – ja, meist mit Vitest oder Jest plus React Testing Library. Bei kleineren Marketingprojekten ist manuelle Qualitätssicherung der Abläufe meist die bessere Investition als eine vollständige Testsuite.",
      ],
      [
        "Wie gehen Sie mit State-Management um?",
        "Standardmäßig nutze ich für die meisten Apps den eingebauten State und Context von React – das ist weniger Code, der gepflegt werden muss. Redux kommt ins Spiel, wenn State zwischen vielen unabhängigen Komponenten geteilt werden muss oder wenn Time-Travel-Debugging und Middleware, etwa für API-Caching, gebraucht werden.",
      ],
    ],
  },
  {
    slug: "full-stack-development-services",
    title: "Full-Stack-Entwicklung | Justin Johnson",
    description: "Webanwendungen von Anfang bis Ende: Frontend, Backend, Datenbank und Deployment – ein Entwickler für den gesamten Stack.",
    h1: "Full-Stack-Entwicklung",
    eyebrow: "Leistungen",
    primaryKeyword: "Full-Stack-Entwicklung",
    secondaryKeywords: [
      "Full Stack Entwickler beauftragen",
      "React und Node.js Entwicklung",
      "Webanwendung Ende-zu-Ende entwickeln",
      "Full-Stack-Web-App Entwicklung",
      "freiberuflicher Full Stack Entwickler",
    ],
    intro: [
      "Die meisten Projekte brauchen kein fünfköpfiges Team, um von der Idee zum funktionierenden Produkt zu kommen – sie brauchen eine Person, die zwischen Datenbank, API und Oberfläche wechseln kann, ohne dabei den Kontext zu verlieren. Genau das mache ich: Frontend mit React oder Next.js, Backend mit Node.js, Datenschicht mit PostgreSQL, deployt und überwacht.",
      "Der Vorteil einer Person über den gesamten Stack: weniger Übergaben und weniger Integrationsfehler, weil derjenige, der die API entworfen hat, auch die Oberfläche baut, die sie nutzt.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Ein funktionierendes Produkt zu brauchen, ohne ein mehrköpfiges Team zusammenstellen und führen zu müssen",
            "Integrationsfehler, die entstehen, wenn Frontend und Backend von Leuten gebaut werden, die nie direkt miteinander sprechen",
            "Ein Prototyp, der zu einer echten, deployten Anwendung mit richtiger Datenbank werden muss",
            "Der Wunsch nach einem einzigen Verantwortlichen für das gesamte Projekt statt der Koordination mehrerer Spezialisten",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Datenbankschema-Design (PostgreSQL/Supabase)",
            "REST-API oder Route Handlers mit Authentifizierung",
            "React- oder Next.js-Frontend, das diese API nutzt",
            "Drittanbieter-Integrationen (Zahlungen, Karten, Messaging)",
            "Deployment und Einrichtung der Umgebungen",
            "Laufende Wartung nach dem Launch",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Zuerst das Datenmodell definieren – es bestimmt die Form der API und die Struktur des Frontends",
            "Backend und ein minimales Frontend gemeinsam bauen, damit die API früh an echter Nutzung validiert wird",
            "Die vollständige Oberfläche ergänzen, sobald die Kernabläufe funktionieren",
            "Authentifizierung, Fehlerbehandlung und Sonderfälle hinzufügen",
            "Vor dem Livegang in einer Staging-Umgebung deployen",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "React / Next.js",
            "Node.js",
            "TypeScript",
            "PostgreSQL / Supabase",
            "AWS oder Vercel",
            "Docker für containerisierte Deployments",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Gründer, die ein Produkt validieren und dafür eine echte, funktionierende Umsetzung statt eines statischen Mockups brauchen, sowie kleine Unternehmen, die individuelle Software benötigen – ein Buchungssystem, ein internes Tool, ein Kundenportal –, die Standardprodukte nicht ganz abdecken.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Was umfasst „Full Stack“ hier konkret?",
        "Datenbankdesign, API- und Backend-Logik, das Frontend, das sie nutzt, und das Deployment – eine Person für alle vier Ebenen, statt getrennte Frontend- und Backend-Dienstleister zu koordinieren.",
      ],
      [
        "Reicht ein Full Stack Entwickler für ein echtes Produkt?",
        "Für die meisten Produkte in der Frühphase und Tools für kleine Unternehmen: ja. Komplexität, die einen eigenen Backend- oder DevOps-Spezialisten erfordert, zeigt sich meist erst in einer Größenordnung, die die meisten Projekte noch nicht erreicht haben. Wenn ein Projekt mehr als einen Entwickler braucht, sage ich das offen.",
      ],
      [
        "Übernehmen Sie auch das Datenbankdesign?",
        "Ja – Schema-Design, Beziehungen, Indizes und Migrationen sind Teil der Umsetzung, kein nachträglicher Gedanke. Ein frühzeitig richtiges Datenmodell vermeidet später teure Neuentwicklungen.",
      ],
      [
        "Was, wenn mein Projekt über das hinauswächst, was ein Entwickler betreuen kann?",
        "Ich weise rechtzeitig darauf hin und übergebe eine Codebasis, die so dokumentiert und strukturiert ist, dass weitere Entwickler ohne langwierige Einarbeitung einsteigen können.",
      ],
    ],
  },
  {
    slug: "typescript-development-services",
    title: "TypeScript Entwicklung | Justin Johnson",
    description: "TypeScript-Entwicklung und -Migration: typisierte Frontends, typisierte APIs und die Umstellung bestehender JavaScript-Codebasen ohne Neuentwicklung.",
    h1: "TypeScript Entwicklung",
    eyebrow: "Leistungen",
    primaryKeyword: "TypeScript Entwicklung",
    secondaryKeywords: [
      "TypeScript Entwickler beauftragen",
      "Migration von JavaScript zu TypeScript",
      "typisierte React Entwicklung",
      "TypeScript API Entwicklung",
      "TypeScript Codebasis Audit",
    ],
    intro: [
      "TypeScript fängt eine ganze Kategorie von Fehlern ab, bevor sie in Produktion gelangen – falsche Argumenttypen, undefinierte Eigenschaften, API-Antworten, die nicht zu dem passen, was das Frontend erwartet. Ich setze es standardmäßig in jedem Projekt ein und übernehme auch Migrationen bestehender JavaScript-Codebasen, die zu groß geworden sind, um untypisiert noch beherrschbar zu sein.",
      "Der Wert liegt nicht in den Typannotationen selbst, sondern in dem, was sie ermöglichen: sicherere Refactorings, bessere Autovervollständigung und einen Vertrag zwischen Frontend und Backend, den der Compiler durchsetzt, statt sich darauf zu verlassen, dass die Dokumentation aktuell bleibt.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Laufzeitfehler durch Tippfehler oder falsche Annahmen über die Struktur eines Werts, die erst in Produktion auftauchen",
            "Eine JavaScript-Codebasis, deren Refactoring riskant geworden ist, weil niemand sicher weiß, was wovon abhängt",
            "API-Antworten, die nicht mehr zu dem passen, was das Frontend erwartet",
            "Neue Entwickler, die Implementierungscode lesen müssen, um zu verstehen, was eine Funktion erwartet",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Schrittweise Migration von JavaScript zu TypeScript (Datei für Datei, keine Komplettneuentwicklung)",
            "Gemeinsame Typen für API und Frontend",
            "Strict-Mode-Konfiguration, abgestimmt auf die Risikotoleranz des Projekts",
            "Typsichere Formularvalidierung und API-Clients",
            "ESLint-Regeln, die Typdisziplin dauerhaft sicherstellen",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "TypeScript-Konfiguration aufsetzen und den Build zunächst mit großzügigen Einstellungen zum Laufen bringen",
            "Zuerst stark genutzte oder risikoreiche Dateien migrieren – dort, wo ein Fehler am teuersten ist",
            "Die Strenge des Compilers schrittweise erhöhen, während die Abdeckung wächst",
            "API-Grenzen typisieren, damit Frontend und Backend nicht unbemerkt auseinanderlaufen",
            "Bewusste Ausnahmen (any, unknown-Casts) dokumentieren, damit sie später leicht zu finden sind",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "TypeScript",
            "React / Next.js",
            "Node.js",
            "Zod o. Ä. für Laufzeitvalidierung",
            "ESLint mit typescript-eslint",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Teams mit einer JavaScript-Codebasis, die so groß geworden ist, dass Fehler durch Typinkonsistenzen regelmäßig Kosten verursachen, und neue Projekte, die Typsicherheit vom ersten Commit an eingebaut haben möchten, statt sie später nachzurüsten.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Bedeutet die Migration zu TypeScript, dass die App neu geschrieben wird?",
        "Nein. TypeScript ist eine Obermenge von JavaScript, sodass Dateien einzeln umgestellt werden können (.js zu .ts), während der Rest der App weiterläuft. Ich beginne meist mit den risikoreichsten oder am häufigsten geänderten Dateien, statt alles auf einmal umzustellen.",
      ],
      [
        "Wie lange dauert eine Migration?",
        "Das hängt vollständig von der Größe der Codebasis ab und davon, wie dynamisch das bestehende JavaScript ist. Eine gezielte Migration der zentralen Datenschicht und der API-Grenze ist meist der wertvollste erste Schritt und kann schrittweise neben der regulären Feature-Arbeit erfolgen statt als separates, blockierendes Projekt.",
      ],
      [
        "Lohnt sich der Strict Mode?",
        "Für neue Projekte ja, ab dem ersten Tag – Strict Null Checks in einer großen bestehenden Codebasis nachzurüsten ist deutlich schwieriger. Bei Migrationen starte ich meist locker und verschärfe die Einstellungen schrittweise mit wachsender Abdeckung.",
      ],
      [
        "Nutzen Sie TypeScript auch im Backend?",
        "Ja, wenn das Backend auf Node.js läuft – so fließen Typen von der Datenbankschicht über die API bis ins Frontend, mit einer einzigen Quelle der Wahrheit für gemeinsame Typen.",
      ],
    ],
  },
  {
    slug: "supabase-development-services",
    title: "Supabase Entwicklung | Justin Johnson",
    description: "Supabase-Backend-Entwicklung: Datenbankschema, Authentifizierung, Row-Level Security und API-Design für React- und Next.js-Anwendungen.",
    h1: "Supabase Entwicklung",
    eyebrow: "Leistungen",
    primaryKeyword: "Supabase Entwicklung",
    secondaryKeywords: [
      "Supabase Entwickler beauftragen",
      "Supabase Backend Entwicklung",
      "Supabase und Next.js Entwicklung",
      "Postgres Backend Entwicklung",
      "Supabase Authentifizierung einrichten",
    ],
    intro: [
      "Supabase gibt einem Projekt eine echte PostgreSQL-Datenbank, Authentifizierung und automatisch generierte APIs, ohne einen separaten Backend-Dienst aufsetzen zu müssen – damit ist es eine starke Standardwahl für Produkte, die schnell vorankommen sollen, ohne auf eine richtige relationale Datenbank zu verzichten.",
      "Ich entwickle Schema, Sicherheitsregeln und Integrationsschicht so, dass das Frontend sicher mit Supabase kommuniziert, statt es als Blackbox zu behandeln, die zufällig Daten liefert.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Nutzerauthentifizierung und Datenbank zu brauchen, ohne ein eigenes Backend von Grund auf zu entwickeln und zu hosten",
            "Echtes SQL und relationale Daten statt eines Dokumentenspeichers, der mit Beziehungen kämpft",
            "Sicherheitsregeln, die auf Datenbankebene liegen müssen und nicht nur im Anwendungscode durchgesetzt werden",
            "Echtzeitfunktionen – Live-Updates, Präsenz – ohne selbst gebaute WebSocket-Infrastruktur",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Datenbankschema-Design mit sauberen Beziehungen und Constraints",
            "Row-Level-Security-Richtlinien (RLS), damit die Zugriffskontrolle in der Datenbank liegt",
            "Einrichtung der Authentifizierung (E-Mail/Passwort, OAuth-Anbieter, Magic Links)",
            "Konfiguration von Storage-Buckets für Datei-Uploads",
            "Realtime-Subscriptions, wo das Produkt Live-Daten braucht",
            "Typisierte Client-Integration in React/Next.js",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Das Schema anhand der tatsächlichen Datenbeziehungen im Produkt entwerfen, nicht nach einer generischen Vorlage",
            "Row-Level-Security-Richtlinien vor dem Frontend-Code schreiben, damit Zugriffskontrolle nie nachträglich angeflanscht wird",
            "Auth-Abläufe einrichten und gegen jede Nutzerrolle im System testen",
            "Typisierte Datenbanktypen generieren und im Frontend einbinden",
            "Kritische Abfragen unter Last testen und bei Bedarf Indizes ergänzen",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "Supabase",
            "PostgreSQL",
            "Next.js / React",
            "TypeScript",
            "Row-Level-Security-Richtlinien",
            "Supabase Storage",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "SaaS-Produkte und interne Tools, die echte Benutzerkonten und eine relationale Datenbank brauchen, ohne den Aufwand eines separaten Backend-Servers, sowie Teams, die den Vendor-Lock-in vollständig proprietärer Backend-as-a-Service-Plattformen vermeiden wollen – unter Supabase steckt Postgres, die Daten bleiben also portabel.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ist Supabase oder ein eigenes Node.js-Backend die bessere Wahl?",
        "Mit Supabase geht die Umsetzung bei Standardanforderungen wie CRUD, Authentifizierung und Dateispeicher schneller, weil Datenbank, Auth und API-Schicht bereits miteinander verbunden sind. Ein eigenes Node.js-Backend ist sinnvoller, wenn die Geschäftslogik so komplex ist, dass Sie volle Kontrolle über die API-Schicht brauchen – nicht nur über die Datenbank.",
      ],
      [
        "Was ist Row-Level Security und warum ist sie wichtig?",
        "RLS ist die eingebaute Zugriffskontrolle von PostgreSQL – Regeln, die auf Datenbankebene festlegen, welche Zeilen ein Nutzer lesen oder schreiben darf. Sie ist wichtig, weil sich die Zugriffskontrolle dadurch nicht durch einen Fehler im Frontend-Code umgehen lässt; die Datenbank setzt sie durch, egal was der Client sendet.",
      ],
      [
        "Skaliert Supabase für ein wachsendes Produkt?",
        "Unter der Haube ist es Postgres, daher gelten dieselben Skalierungstechniken wie bei jeder Postgres-Datenbank – Indizierung, Connection Pooling, Read Replicas. Die verwalteten Tarife von Supabase übernehmen die Infrastrukturseite dieser Skalierung.",
      ],
      [
        "Migrieren Sie bestehende Datenbanken zu Supabase?",
        "Ja. Da Supabase Standard-PostgreSQL verwendet, ist die Migration einer bestehenden Postgres-Datenbank meist eine Frage von Dump und Restore für Schema und Daten, gefolgt vom Neuaufbau der Auth- und RLS-Richtlinien nach dem Modell von Supabase.",
      ],
    ],
  },
];
