import type { SeoPageTranslation } from "../types";

// Code blocks are inherited from the English pages (null keeps the English code and file-path caption).
export const guidePagesDe2: SeoPageTranslation[] = [
  {
    slug: "how-to-connect-nextjs-to-postgresql",
    title: "Next.js mit PostgreSQL verbinden | Justin Johnson",
    description: "Eine Next.js-App direkt mit PostgreSQL verbinden – Connection Pooling, Abfragen aus Server Components und typische Fallstricke.",
    h1: "So verbinden Sie Next.js mit PostgreSQL",
    eyebrow: "Anleitungen",
    primaryKeyword: "Next.js mit PostgreSQL verbinden",
    secondaryKeywords: [
      "Next.js Postgres Tutorial",
      "Next.js Datenbankverbindung",
      "Prisma Next.js Postgres",
      "Datenbankabfrage in Next.js Server Component",
    ],
    intro: [
      "Server Components können eine Datenbank direkt abfragen, ohne separate API-Schicht dazwischen – das vereinfacht die App-Struktur erheblich, bedeutet aber auch, dass die Verbindungsverwaltung Sorgfalt erfordert, besonders in Serverless-Umgebungen.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [
          [
            "Eine laufende PostgreSQL-Datenbank (lokal, Supabase oder ein verwalteter Anbieter)",
            "Ein Next.js-Projekt mit App Router",
            "Eine Datenbank-Client-Bibliothek (pg oder ein ORM wie Prisma oder Drizzle)",
          ],
        ],
      },
      { heading: "Schritt 1: Einen Datenbank-Client installieren", blocks: [null] },
      {
        heading: "Schritt 2: Einen Connection Pool einrichten",
        blocks: [
          null,
          [
            "Eine einzige gemeinsame Pool-Instanz statt einer neuen Verbindung pro Anfrage verhindert, dass die Datenbank bei wachsendem Traffic überlastet wird.",
          ],
        ],
      },
      { heading: "Schritt 3: Aus einer Server Component abfragen", blocks: [null] },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "„Too many connections“ in Produktion – Serverless-Funktionen können jeweils eine eigene Verbindung öffnen; nutzen Sie Connection Pooling (PgBouncer oder den eingebauten Pooler Ihres Anbieters) statt eines eigenen Pools pro Funktionsinstanz",
            "Abfragen funktionieren lokal, laufen im Deployment aber in einen Timeout – prüfen Sie, ob die Datenbank Verbindungen aus den IP-Bereichen Ihrer Deployment-Plattform zulässt",
            "Risiko von SQL-Injection – immer parametrisierte Abfragen verwenden und Nutzereingaben niemals per String-Verkettung in eine Abfrage einfügen",
          ],
        ],
      },
      {
        heading: "Sicherheitsaspekte",
        blocks: [
          [
            "Immer parametrisierte Abfragen ($1, $2 als Platzhalter) statt String-Interpolation verwenden, um SQL-Injection zu verhindern",
            "Den Datenbank-Connection-String in Umgebungsvariablen speichern, niemals im Repository",
            "Einen Datenbanknutzer mit nur den Rechten verwenden, die die Anwendung tatsächlich braucht, keinen Superuser",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Sollte ich einen reinen SQL-Client oder ein ORM verwenden?",
        "Ein ORM (Prisma, Drizzle) bringt Typsicherheit und Migrationswerkzeuge mit, die sich für die meisten Anwendungen lohnen; reines SQL über pg bietet direktere Kontrolle und ist für einfachere Projekte oder sehr spezifische Abfragen vernünftig.",
      ],
      [
        "Wie gehe ich mit Verbindungen in einem Serverless-Deployment um?",
        "Mit einem für Serverless ausgelegten Connection Pooler (etwa PgBouncer oder dem verwalteten Pooler Ihres Anbieters) statt eines normalen Connection Pools, da Serverless-Funktionen viele parallele Instanzen starten können, die sonst das Verbindungslimit der Datenbank ausschöpfen würden.",
      ],
      [
        "Kann ich die Datenbank direkt aus einer Client Component abfragen?",
        "Nein – Datenbankzugangsdaten dürfen niemals den Browser erreichen. Server Components, API-Routen oder Server Actions sind die richtigen Orte für Datenbankabfragen.",
      ],
    ],
    howToSteps: [
      ["Einen Datenbank-Client installieren", "Das Paket pg oder ein ORM zum Projekt hinzufügen."],
      ["Einen Connection Pool einrichten", "Eine einzige gemeinsame Pool-Instanz anlegen, statt pro Anfrage zu verbinden."],
      ["Aus einer Server Component abfragen", "Die Datenbank direkt in einer asynchronen Server Component abfragen."],
    ],
  },
  {
    slug: "how-to-create-dynamic-routes-in-nextjs",
    title: "Dynamische Routen in Next.js | Justin Johnson",
    description: "Dynamische Routen mit dem App Router anlegen – Ordnerkonventionen, generateStaticParams und Catch-all-Segmente.",
    h1: "So erstellen Sie dynamische Routen in Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "dynamische Routen in Next.js erstellen",
    secondaryKeywords: [
      "Next.js dynamische Segmente",
      "Next.js [slug]-Route",
      "generateStaticParams Tutorial",
      "Next.js Catch-all-Routen",
    ],
    intro: [
      "Mit dynamischen Routen rendert eine einzige Vorlage viele Seiten auf Basis eines URL-Parameters – ein Blog-Slug, eine Produkt-ID. Diese Anleitung behandelt die Ordnerkonventionen und wie Sie die Seiten zur Build-Zeit vorab rendern.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [["Ein Next.js-Projekt mit App Router", "Eine Datenquelle mit der Liste der zu rendernden Einträge (Array, Datenbank oder CMS)"]],
      },
      {
        heading: "Schritt 1: Ein dynamisches Segment anlegen",
        blocks: [
          [
            "Ein Ordner namens [slug] in app/blog/ erzeugt eine Route, die jeden Wert an dieser Stelle akzeptiert – app/blog/[slug]/page.tsx verarbeitet /blog/beliebig.",
          ],
          null,
        ],
      },
      {
        heading: "Schritt 2: Bekannte Pfade mit generateStaticParams vorab rendern",
        blocks: [
          null,
          [
            "Damit teilen Sie Next.js genau mit, welche Slug-Werte zur Build-Zeit als statisches HTML vorgerendert werden sollen, statt jeden Aufruf bei Bedarf zu rendern.",
          ],
        ],
      },
      {
        heading: "Schritt 3: Catch-all-Segmente für verschachtelte Pfade",
        blocks: [
          [
            "Ein Ordner namens [...slug] akzeptiert beliebig viele Pfadsegmente (z. B. /docs/a/b/c) – nützlich für Dokumentationsbäume oder tief verschachtelte Inhaltsstrukturen, deren Tiefe nicht feststeht.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Die Seite zeigt bei einem gültigen Slug einen 404 – prüfen Sie, ob generateStaticParams genau dieselbe Werteform zurückgibt, die in der URL verwendet wird (String, keine Zahl)",
            "Der Build dauert sehr lange – bei sehr großen Datenmengen nur die wichtigsten Pfade vorab rendern und den Rest per ISR bei Bedarf generieren lassen",
            "TypeScript beschwert sich über den Typ von params – in aktuellen Next.js-Versionen ist params ein Promise und muss mit await abgewartet werden",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Muss ich generateStaticParams verwenden?",
        "Nein – ohne funktionieren dynamische Routen trotzdem, werden aber bei jeder Anfrage gerendert (oder je nach Konfiguration beim ersten Aufruf mit Caching), statt vorab als statisches HTML gebaut zu werden.",
      ],
      [
        "Was ist der Unterschied zwischen [slug] und [...slug]?",
        "[slug] passt auf genau ein Pfadsegment; [...slug] (Catch-all) passt auf ein oder mehrere Segmente – nützlich für beliebig verschachtelte Pfade wie Dokumentationsbäume.",
      ],
      [
        "Wie gehe ich mit einem Slug um, der nicht existiert?",
        "Den Datensatz in der Seitenkomponente prüfen und notFound() aus next/navigation aufrufen – das rendert die not-found.tsx der Route mit einem korrekten 404-Status.",
      ],
    ],
    howToSteps: [
      ["Ein dynamisches Segment anlegen", "Einen [slug]-Ordner hinzufügen, um eine dynamische Route zu definieren."],
      ["Bekannte Pfade vorab rendern", "generateStaticParams exportieren, um bekannte Routen statisch zu bauen."],
      ["Catch-all-Segmente für verschachtelte Pfade nutzen", "[...slug] für Routen mit variabler Tiefe verwenden."],
    ],
  },
  {
    slug: "how-to-generate-metadata-in-nextjs",
    title: "Metadaten in Next.js generieren | Justin Johnson",
    description: "Die Metadata API von Next.js für Titel, Beschreibungen und Open-Graph-Tags pro Seite nutzen – statisch und dynamisch.",
    h1: "So generieren Sie Metadaten in Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "Metadaten in Next.js generieren",
    secondaryKeywords: [
      "Next.js generateMetadata Tutorial",
      "Next.js Metadata API",
      "dynamische Seitentitel in Next.js",
      "Next.js Open-Graph-Tags",
    ],
    intro: [
      "Mit der Metadata API kann jede Route eigene Titel, Beschreibungen und Open-Graph-Tags definieren – entweder als statisches Objekt oder dynamisch auf Basis geladener Daten.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Ein Next.js-Projekt mit App Router"]] },
      { heading: "Schritt 1: Statische Metadaten", blocks: [null] },
      { heading: "Schritt 2: Dynamische Metadaten", blocks: [null] },
      {
        heading: "Schritt 3: Einen seitenweiten Standard im Root-Layout setzen",
        blocks: [
          [
            "In app/layout.tsx definierte Metadaten dienen als Fallback und können mit title.template automatisch einen einheitlichen Website-Namen an den Titel jeder Seite anhängen.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Jede Seite zeigt denselben Titel – ein statischer metadata-Export in einem Layout überschreibt die Metadaten auf Seitenebene; prüfen Sie, wo jeweils was definiert ist",
            "generateMetadata wird nicht ausgeführt – prüfen Sie, ob es aus einer page.tsx oder layout.tsx exportiert wird und nicht aus einer normalen Komponente",
            "Das Open-Graph-Bild erscheint nicht in sozialen Netzwerken – prüfen Sie, ob die Bild-URL absolut ist (mit https:// beginnt) und nicht relativ",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Lassen sich Metadaten aus einer Datenbank generieren?",
        "Ja – generateMetadata ist eine asynchrone Funktion und kann dieselben Daten laden, die auch die Seite nutzt (idealerweise mit Request-Memoization, damit sie nicht doppelt geladen werden).",
      ],
      [
        "Wie lang sollte eine Meta-Beschreibung sein?",
        "Ungefähr unter 160 Zeichen, damit sie in den Suchergebnissen nicht abgeschnitten wird – auch wenn Suchmaschinen Beschreibungen manchmal unabhängig von der Länge umschreiben.",
      ],
      [
        "Brauche ich separate Open-Graph- und Twitter-Tags?",
        "Twitter liest standardmäßig Open-Graph-Tags, wenn twitter:card auf summary_large_image gesetzt ist; separate twitter:-Tags braucht es nur für Twitter-spezifische Abweichungen.",
      ],
    ],
    howToSteps: [
      ["Statische Metadaten hinzufügen", "Ein metadata-Objekt aus einer Seite exportieren, für feste Titel und Beschreibungen."],
      ["Dynamische Metadaten hinzufügen", "Eine asynchrone generateMetadata-Funktion für inhaltsgetriebene Seiten exportieren."],
      ["Einen seitenweiten Standard setzen", "Fallback-Metadaten und eine Titelvorlage im Root-Layout definieren."],
    ],
  },
  {
    slug: "how-to-create-an-xml-sitemap-in-nextjs",
    title: "XML-Sitemap in Next.js erstellen | Justin Johnson",
    description: "sitemap.xml in Next.js mit der eingebauten sitemap.ts-Dateikonvention erzeugen – inklusive dynamischer Routen.",
    h1: "So erstellen Sie eine XML-Sitemap in Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "XML-Sitemap in Next.js erstellen",
    secondaryKeywords: [
      "Next.js sitemap.ts Tutorial",
      "Next.js Sitemap generieren",
      "dynamische Sitemap in Next.js",
      "Next.js robots.txt",
    ],
    intro: [
      "Next.js unterstützt eine sitemap.ts-Dateikonvention, die automatisch eine gültige sitemap.xml erzeugt – diese Anleitung zeigt eine statische Sitemap und eine, die dynamische Routen aus Ihren tatsächlichen Daten enthält.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [
          [
            "Ein Next.js-Projekt mit App Router (ab v13.3)",
            "Eine Funktion, die Ihre dynamischen Routendaten zurückgibt (z. B. alle Blog-Slugs)",
          ],
        ],
      },
      { heading: "Schritt 1: Die Sitemap-Datei anlegen", blocks: [null] },
      { heading: "Schritt 2: Dynamische Routen hinzufügen", blocks: [null] },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Die Sitemap enthält noindex- oder weitergeleitete Seiten – filtern Sie Ihre Datenquelle auf tatsächlich indexierbare URLs, bevor Sie sie in die Sitemap übernehmen",
            "lastModified zeigt bei jedem Build das aktuelle Datum – nutzen Sie den echten Zeitstempel der Inhaltsaktualisierung aus Ihrer Datenquelle statt new Date() zur Build-Zeit",
            "Die Sitemap überschreitet 50.000 URLs – teilen Sie sie auf mehrere Sitemap-Dateien auf, auf die ein Sitemap-Index verweist",
          ],
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          [
            "Die Sitemap aus derselben Datenquelle erzeugen, die Ihre Routen speist, damit beide nicht auseinanderlaufen können",
            "Echte lastModified-Daten verwenden, die an tatsächliche Inhaltsänderungen gekoppelt sind",
            "Die Sitemap-URL nach größeren Änderungen in der Google Search Console einreichen",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Erzeugt Next.js auch die robots.txt?",
        "Ja, nach demselben Dateikonventionsmuster – eine Datei app/robots.ts kann die Regeln exportieren, und Next.js liefert sie automatisch unter /robots.txt aus.",
      ],
      [
        "Wie gehe ich mit sehr vielen URLs um?",
        "Über eine generateSitemaps-Funktion, die ein Array von Sitemaps zurückgibt und die URLs auf mehrere Sitemap-Dateien unterhalb der Grenze von 50.000 URLs bzw. 50 MB pro Datei verteilt.",
      ],
      [
        "Muss ich die Sitemap nach jeder Änderung neu einreichen?",
        "Nicht zwingend – Suchmaschinen crawlen eine eingereichte Sitemap regelmäßig erneut, aber ein erneutes Einreichen in der Search Console nach größeren Änderungen kann einen schnelleren Recrawl anstoßen.",
      ],
    ],
    howToSteps: [
      ["Die Sitemap-Datei anlegen", "Eine Datei app/sitemap.ts hinzufügen, die statische Einträge exportiert."],
      ["Dynamische Routen hinzufügen", "Ihre dynamischen Inhalte laden und in Sitemap-Einträge umwandeln."],
    ],
  },
  {
    slug: "how-to-add-json-ld-in-nextjs",
    title: "JSON-LD in Next.js einbinden | Justin Johnson",
    description: "Gültige strukturierte Daten (JSON-LD) in Next.js-Seiten einbinden – als wiederverwendbares Muster statt duplizierter Inline-Skripte.",
    h1: "So binden Sie JSON-LD in Next.js ein",
    eyebrow: "Anleitungen",
    primaryKeyword: "JSON-LD in Next.js einbinden",
    secondaryKeywords: [
      "Next.js strukturierte Daten Tutorial",
      "JSON-LD Script-Tag in Next.js",
      "Next.js Schema Markup",
      "Next.js Rich Results",
    ],
    intro: [
      "Strukturierte Daten in JSON-LD werden als Script-Tag direkt in der Seite gerendert – diese Anleitung zeigt das Muster, um das sicher und wiederverwendbar für mehrere Seitentypen umzusetzen.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [
          [
            "Ein Next.js-Projekt mit App Router",
            "Inhalte, die tatsächlich einem schema.org-Typ entsprechen (Article, Service, FAQPage usw.)",
          ],
        ],
      },
      { heading: "Schritt 1: Das Script-Tag rendern", blocks: [null] },
      {
        heading: "Schritt 2: Eine wiederverwendbare Hilfsfunktion bauen",
        blocks: [
          [
            "Statt das JSON-LD-Objekt auf jeder Seite inline zusammenzubauen, hält eine gemeinsame Funktion, die Ihre Inhaltsdaten entgegennimmt und das korrekte Schema-Objekt zurückgibt, das Markup einheitlich – und ein Fehler lässt sich so auf allen Seiten auf einmal beheben.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "JSON.stringify direkt als children statt über dangerouslySetInnerHTML zu verwenden – React escaped Textinhalte, was das JSON beschädigt",
            "Inhalte auszuzeichnen, die auf der Seite gar nicht sichtbar sind – das kann eine manuelle Maßnahme von Google wegen irreführender strukturierter Daten auslösen",
            "Die Validierung zu vergessen – die Ausgabe vor dem Livegang immer mit dem Rich-Results-Test von Google prüfen",
          ],
        ],
      },
      {
        heading: "Sicherheitsaspekte",
        blocks: [
          [
            "Unbereinigte Nutzereingaben niemals direkt in das JSON-LD-Objekt interpolieren – sauber per JSON.stringify serialisieren, statt den String von Hand zusammenzubauen, was sonst Script-Injection ermöglichen könnte",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wo sollte das Script-Tag platziert werden?",
        "Irgendwo in der Seite oder einem gemeinsamen Layout – weder Next.js noch Suchmaschinen verlangen eine bestimmte Position, auch wenn es üblich ist, es zur besseren Lesbarkeit in der Nähe der beschriebenen Inhalte zu platzieren.",
      ],
      [
        "Kann ich mehrere JSON-LD-Blöcke auf einer Seite haben?",
        "Ja – separate Script-Tags für unterschiedliche Schema-Typen (z. B. Article plus BreadcrumbList) sind gültig und üblich.",
      ],
      [
        "Wie validiere ich die Ausgabe?",
        "Der Rich-Results-Test von Google und der Schema.org-Validator akzeptieren eine URL oder rohes Markup und markieren strukturelle Fehler, bevor Sie live gehen.",
      ],
    ],
    howToSteps: [
      ["Das Script-Tag rendern", "Ein Script-Tag vom Typ application/ld+json mit Ihrem Schema-Objekt hinzufügen."],
      ["Eine wiederverwendbare Hilfsfunktion bauen", "Den Aufbau des Schemas für mehr Einheitlichkeit in eine gemeinsame Funktion auslagern."],
    ],
  },
];
