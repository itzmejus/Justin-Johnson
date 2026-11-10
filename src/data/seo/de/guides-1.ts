import type { SeoPageTranslation } from "../types";

// Code blocks are inherited from the English pages (null keeps the English code and file-path caption).
export const guidePagesDe1: SeoPageTranslation[] = [
  {
    slug: "how-to-build-a-nextjs-website",
    title: "Next.js Website erstellen: Anleitung | Justin Johnson",
    description: "Eine praxisnahe Anleitung zum Aufsetzen eines Next.js-Projekts, zur Strukturierung der Routen und zur ersten echten Seite im Netz.",
    h1: "So erstellen Sie eine Next.js-Website",
    eyebrow: "Anleitungen",
    primaryKeyword: "Next.js Website erstellen",
    secondaryKeywords: [
      "Next.js Tutorial",
      "Einstieg in Next.js",
      "Next.js Projekt aufsetzen",
      "Website mit Next.js bauen",
    ],
    intro: [
      "Diese Anleitung führt durch das Aufsetzen eines neuen Next.js-Projekts mit dem App Router, die Strukturierung der ersten Routen und das Rendern einer echten Seite – die Grundlage, auf der alle weiteren Anleitungen dieser Reihe aufbauen.",
      "Grundkenntnisse in React und JavaScript werden vorausgesetzt, Erfahrung mit Next.js jedoch nicht.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [["Node.js 18.18 oder neuer installiert", "Grundkenntnisse in React-Komponenten und JSX", "Ein Code-Editor und ein Terminal"]],
      },
      {
        heading: "Schritt 1: Projekt anlegen",
        blocks: [
          null,
          [
            "Die CLI fragt nach TypeScript, ESLint, Tailwind und dem App Router – bestätigen Sie TypeScript und den App Router, sofern Sie keinen konkreten Grund dagegen haben; beides sind die aktuell empfohlenen Standards.",
          ],
        ],
      },
      {
        heading: "Schritt 2: Die Dateistruktur verstehen",
        blocks: [
          [
            "app/layout.tsx – das Root-Layout, umschließt jede Seite",
            "app/page.tsx – die Startseite (Route: /)",
            "app/about/page.tsx – erzeugt die Route /about",
            "public/ – statische Assets, die unverändert ausgeliefert werden",
          ],
        ],
      },
      {
        heading: "Schritt 3: Die erste echte Seite bauen",
        blocks: [
          null,
          [
            "Das ist standardmäßig eine Server Component – „use client“ ist nur nötig, wenn State, Effects oder reine Browser-APIs verwendet werden.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "„Module not found“ nach dem Hinzufügen einer neuen Seite – prüfen Sie, ob die Datei exakt page.tsx heißt und nicht Page.tsx oder index.tsx",
            "Hooks wie useState funktionieren nicht – die Komponente braucht „use client“ am Anfang der Datei",
            "Styles werden nicht angewendet – prüfen Sie, ob die globale CSS-Datei im Root-Layout importiert ist",
          ],
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          [
            "Komponenten standardmäßig als Server Components belassen; „use client“ nur dort hinzufügen, wo Interaktivität wirklich nötig ist",
            "Zusammengehörige Komponenten im selben Routenordner ablegen statt in einem flachen components-Verzeichnis",
            "Den Strict Mode von TypeScript von Anfang an aktivieren",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Sollte ich für ein neues Projekt den App Router oder den Pages Router nutzen?",
        "Den App Router – er ist das aktiv weiterentwickelte Modell mit der klarsten langfristigen Unterstützung und für die meisten Websites mit besseren Performance-Eigenschaften.",
      ],
      [
        "Brauche ich zum Start ein Backend?",
        "Nein – Next.js kann statische oder serverseitig gerenderte Seiten ganz ohne Backend rendern; API-Routen oder eine Datenbankverbindung kommen erst hinzu, wenn die Website tatsächlich dynamische Daten braucht.",
      ],
      [
        "Wo deploye ich die Website?",
        "Vercel ist speziell für Next.js die einfachste Option; die Schritt-für-Schritt-Anleitung finden Sie im Guide zum Deployment von Next.js auf Vercel.",
      ],
    ],
    howToSteps: [
      ["Projekt anlegen", "npx create-next-app@latest ausführen und TypeScript sowie den App Router wählen."],
      ["Dateistruktur verstehen", "Lernen, wie app/page.tsx und Ordnernamen auf Routen abgebildet werden."],
      ["Erste Seite bauen", "Einen neuen Routenordner mit einer page.tsx anlegen, die eine Komponente exportiert."],
    ],
  },
  {
    slug: "how-to-deploy-nextjs-on-vercel",
    title: "Next.js auf Vercel deployen | Justin Johnson",
    description: "Eine Next.js-App auf Vercel deployen – vom git push bis zur eigenen Domain, inklusive Umgebungsvariablen.",
    h1: "So deployen Sie Next.js auf Vercel",
    eyebrow: "Anleitungen",
    primaryKeyword: "Next.js auf Vercel deployen",
    secondaryKeywords: [
      "Next.js App deployen",
      "Vercel Deployment Anleitung",
      "Next.js Produktiv-Deployment",
      "Vercel Umgebungsvariablen",
    ],
    intro: [
      "Vercel wird vom Next.js-Team entwickelt und unterstützt die Funktionen des Frameworks (ISR, Edge Functions, Bildoptimierung) bei den meisten Projekten ohne zusätzliche Konfiguration. Diese Anleitung führt vom lokalen Projekt bis zum Live-Deployment mit eigener Domain.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [["Ein Next.js-Projekt in einem Git-Repository (GitHub, GitLab oder Bitbucket)", "Ein kostenloses oder kostenpflichtiges Vercel-Konto"]],
      },
      {
        heading: "Schritt 1: Projekt importieren",
        blocks: [
          [
            "Bei Vercel anmelden und auf „Add New Project“ klicken",
            "Das Git-Repository mit Ihrer Next.js-App auswählen",
            "Vercel erkennt das Next.js-Framework automatisch und setzt den Build-Befehl",
          ],
        ],
      },
      {
        heading: "Schritt 2: Umgebungsvariablen konfigurieren",
        blocks: [
          [
            "Secrets oder Konfiguration (Datenbank-URLs, API-Keys) unter Project Settings → Environment Variables hinterlegen, jeweils getrennt für Production, Preview und Development, damit ein Test-Deployment nie Produktivdaten berührt.",
          ],
        ],
      },
      {
        heading: "Schritt 3: Deployen und Domain verbinden",
        blocks: [
          [
            "Auf Deploy klicken – Vercel baut das Projekt und vergibt automatisch eine *.vercel.app-URL",
            "Unter Project Settings → Domains Ihre eigene Domain hinzufügen",
            "Die DNS-Einträge Ihrer Domain gemäß den Vorgaben von Vercel anpassen (meist ein A-Record oder CNAME)",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Build schlägt wegen einer fehlenden Umgebungsvariable fehl – prüfen Sie, ob sie speziell für die Production-Umgebung gesetzt ist und nicht nur für Development",
            "Die Website funktioniert unter *.vercel.app, aber nicht unter der eigenen Domain – die DNS-Verbreitung kann dauern; prüfen Sie, ob die Einträge exakt den Vorgaben von Vercel entsprechen",
            "Preview-Deployments zeigen alte Daten – prüfen Sie, ob ISR-Revalidierung oder Caching die Aktualisierung verdeckt",
          ],
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          [
            "Niemals Secrets ins Repository committen – immer Umgebungsvariablen verwenden",
            "Preview-Deployments nutzen, um jeden Pull Request vor dem Merge in die Produktion zu prüfen",
            "Deployment-Benachrichtigungen einrichten, damit fehlgeschlagene Builds nicht unbemerkt bleiben",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ist Vercel für ein kleines Projekt kostenlos?",
        "Ja, der kostenlose Tarif von Vercel deckt persönliche und kleine Projekte ab; Produktiv-Apps mit nennenswertem Traffic wechseln mit wachsender Nutzung meist in einen kostenpflichtigen Tarif.",
      ],
      [
        "Löst jeder git push ein Deployment aus?",
        "Standardmäßig werden Pushes auf den Produktions-Branch in die Produktion deployt, und andere Branches oder Pull Requests erhalten jeweils eine eigene Preview-URL.",
      ],
      [
        "Kann ich ein fehlerhaftes Deployment zurücksetzen?",
        "Ja – Vercel behält frühere Deployments und ermöglicht es, ein älteres über das Dashboard sofort wieder in die Produktion zu übernehmen.",
      ],
    ],
    howToSteps: [
      ["Projekt importieren", "Ihr Git-Repository mit einem neuen Vercel-Projekt verbinden."],
      ["Umgebungsvariablen konfigurieren", "Secrets getrennt für Production, Preview und Development hinterlegen."],
      ["Deployen und Domain verbinden", "Das Projekt deployen und die DNS Ihrer eigenen Domain auf Vercel richten."],
    ],
  },
  {
    slug: "how-to-deploy-nextjs-on-cpanel",
    title: "Next.js auf cPanel deployen | Justin Johnson",
    description: "Eine Next.js-App auf cPanel-Hosting mit Node.js-Unterstützung betreiben – Build, Upload und Einrichtung des Prozessmanagers.",
    h1: "So deployen Sie Next.js auf cPanel",
    eyebrow: "Anleitungen",
    primaryKeyword: "Next.js auf cPanel deployen",
    secondaryKeywords: [
      "Next.js Shared Hosting",
      "Next.js ohne Vercel deployen",
      "Next.js Node.js Hosting",
      "cPanel Node.js App",
    ],
    intro: [
      "Manche Situationen erfordern es, beim bestehenden Shared Hosting zu bleiben, statt zu Vercel zu wechseln – viele cPanel-Hoster unterstützen inzwischen Node.js-Anwendungen direkt. Damit lässt sich eine Next.js-App betreiben, allerdings mit einigen manuellen Schritten mehr als auf einer speziell dafür gebauten Plattform.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [
          [
            "cPanel-Hosting mit verfügbarer Funktion „Setup Node.js App“ (beim Hoster nachfragen)",
            "SSH- oder Terminalzugang ist hilfreich, aber nicht immer erforderlich",
            "Ein Next.js-Projekt, das bereit zum Build ist",
          ],
        ],
      },
      {
        heading: "Schritt 1: Die App lokal bauen",
        blocks: [
          null,
          [
            "Das erzeugt den Produktions-Build in .next. Anders als ein statischer Export braucht ein normaler Next.js-Build einen Node.js-Server zum Laufen – genau den stellt die Node.js-App-Funktion von cPanel bereit.",
          ],
        ],
      },
      {
        heading: "Schritt 2: Node.js-App hochladen und konfigurieren",
        blocks: [
          [
            "Das Projekt (ohne node_modules) über den Dateimanager oder Git hochladen",
            "In cPanel „Setup Node.js App“ öffnen und eine neue Anwendung anlegen, die auf Ihren Projektordner zeigt",
            "Als Startdatei ein kleines Server-Skript festlegen, das next start aufruft, oder den Standalone-Output-Modus von Next.js nutzen",
            "Abhängigkeiten über den npm-install-Button von cPanel oder das Terminal installieren",
          ],
        ],
      },
      {
        heading: "Schritt 3: Starten und prüfen",
        blocks: [
          [
            "Die App über die Node.js-Oberfläche von cPanel starten und prüfen, ob der zugewiesene Port korrekt über Ihre Domain weitergeleitet wird – die meisten cPanel-Setups übernehmen diese Weiterleitung automatisch, sobald die App läuft.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Der Hoster unterstützt gar kein Node.js – reines statisches Hosting kann keine serverseitig gerenderte Next.js-App betreiben; als Ausweg bleibt ein statischer Export ohne Serverfunktionen oder der Wechsel zu Node-fähigem Hosting",
            "Die App stürzt direkt nach dem Start ab – prüfen Sie, ob die in cPanel gewählte Node.js-Version den Anforderungen von Next.js entspricht",
            "Umgebungsvariablen werden nicht übernommen – setzen Sie sie im Bereich für Umgebungsvariablen der Node.js-App in cPanel, nicht nur in einer lokalen .env-Datei",
          ],
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          [
            "Den Standalone-Output-Modus von Next.js nutzen, um möglichst wenig hochladen und ausführen zu müssen",
            "Einen Prozessmanager (den in cPanel integrierten oder PM2 bei Shell-Zugang) einsetzen, der die App bei Abstürzen automatisch neu startet",
            "Bei einer rein statischen Website ohne Serverfunktionen stattdessen einen statischen Export erwägen – damit entfällt der dauerhafte Node.js-Prozess vollständig",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Kann ich Next.js auf Hosting ohne Node.js-Unterstützung betreiben?",
        "Nur über einen vollständig statischen Export, der Server-Side Rendering, ISR und API-Routen wegfallen lässt – das passt nur für Inhalte, die tatsächlich statisch sind.",
      ],
      [
        "Ist das schwieriger als ein Deployment auf Vercel?",
        "Ja, spürbar – Vercel übernimmt Builds, Skalierung und Next.js-spezifische Funktionen automatisch. Das Deployment auf cPanel ist eine valide Option, wenn Sie an bestehendes Hosting gebunden sind, aber keine generelle Empfehlung gegenüber Vercel.",
      ],
      [
        "Funktioniert ISR auf cPanel-Hosting?",
        "Das kann funktionieren, da die App als dauerhafter Node.js-Prozess läuft, hängt aber von der konkreten Node.js-App-Konfiguration Ihres Hosters und den Schreibrechten im Dateisystem ab.",
      ],
    ],
    howToSteps: [
      ["Die App lokal bauen", "npm run build ausführen, um den Produktions-Build zu erzeugen."],
      ["Node.js-App hochladen und konfigurieren", "Das Projekt hochladen und im Node.js-App-Tool von cPanel einrichten."],
      ["Starten und prüfen", "Die App starten und bestätigen, dass sie über Ihre Domain erreichbar ist."],
    ],
  },
  {
    slug: "how-to-use-supabase-authentication-with-nextjs",
    title: "Supabase Auth mit Next.js nutzen | Justin Johnson",
    description: "Supabase-Authentifizierung in einem Next.js-Projekt mit App Router einrichten – mit Sessions, die in Server und Client Components funktionieren.",
    h1: "So nutzen Sie Supabase-Authentifizierung mit Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "Supabase Authentifizierung mit Next.js",
    secondaryKeywords: [
      "Supabase Next.js Auth Tutorial",
      "Supabase SSR Auth",
      "Next.js Login mit Supabase",
      "Supabase Session-Cookies in Next.js",
    ],
    intro: [
      "Supabase Auth in Kombination mit dem App Router erfordert ein bestimmtes Setup, damit der Session-Status in Server und Client Components konsistent verfügbar ist – diese Anleitung führt durch dieses Setup von Anfang bis Ende.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [
          [
            "Ein Supabase-Projekt (der kostenlose Tarif reicht)",
            "Ein Next.js-Projekt mit App Router",
            "Die Pakete @supabase/supabase-js und @supabase/ssr installiert",
          ],
        ],
      },
      {
        heading: "Schritt 1: Installieren und konfigurieren",
        blocks: [
          null,
          [
            "Fügen Sie die URL und den Anon-Key Ihres Supabase-Projekts als Umgebungsvariablen hinzu (NEXT_PUBLIC_SUPABASE_URL und NEXT_PUBLIC_SUPABASE_ANON_KEY).",
          ],
        ],
      },
      {
        heading: "Schritt 2: Supabase-Clients für Server und Client anlegen",
        blocks: [null],
      },
      {
        heading: "Schritt 3: Routen mit Middleware schützen",
        blocks: [
          [
            "Die Middleware läuft, bevor eine Anfrage eine Seite erreicht – damit ist sie der richtige Ort, um die Gültigkeit der Session zu prüfen und nicht angemeldete Nutzer umzuleiten, bevor Seitencode ausgeführt wird. Das ist schneller und sicherer, als den Auth-Status in der Seitenkomponente zu prüfen.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Die Session erscheint auf dem Server abgemeldet, auf dem Client aber angemeldet – meist ein Unterschied in der Cookie-Verarbeitung zwischen Server- und Client-Supabase-Client",
            "„Invalid JWT“-Fehler nach dem Deployment – prüfen Sie, ob die Umgebungsvariablen in der Deployment-Umgebung korrekt gesetzt sind und nicht nur lokal",
            "Weiterleitungsschleifen auf geschützten Routen – prüfen Sie, ob die matcher-Konfiguration der Middleware nicht auch die Login-Seite selbst abfängt",
          ],
        ],
      },
      {
        heading: "Sicherheitsaspekte",
        blocks: [
          [
            "Den Service-Role-Key von Supabase niemals an den Client weitergeben – nur der Anon-Key gehört in NEXT_PUBLIC_-Variablen",
            "Row-Level-Security-Richtlinien sind die eigentliche Zugriffskontrolle – clientseitiger Routenschutz allein reicht nicht aus",
            "Die Session in jeder API-Route unabhängig validieren, nicht nur in der Middleware",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Warum brauche ich sowohl eine Server- als auch eine Client-Instanz von Supabase?",
        "Server und Client Components lesen die Session unterschiedlich – der Server-Client liest Cookies über die Server-APIs von Next.js, während die Client-Instanz die Browser-Session verwaltet. Wird die falsche Instanz im falschen Kontext genutzt, entstehen Session-Inkonsistenzen.",
      ],
      [
        "Ist Middleware für die Authentifizierung zwingend nötig?",
        "Nicht zwingend, aber ohne sie würden nicht angemeldete Nutzer Seitencode erreichen, bevor sie umgeleitet werden – das ist langsamer und eine schwächere Sicherheitsgrenze als die vorherige Prüfung in der Middleware.",
      ],
      [
        "Wie gehe ich mit OAuth-Anbietern wie Google um?",
        "Den Anbieter im Supabase-Dashboard konfigurieren und dann supabase.auth.signInWithOAuth() mit einer Redirect-URL nutzen, die auf eine Callback-Route zeigt, die den Auth-Code gegen eine Session eintauscht.",
      ],
    ],
    howToSteps: [
      ["Supabase installieren und konfigurieren", "Das Supabase-SSR-Paket installieren und Umgebungsvariablen hinzufügen."],
      ["Supabase-Instanzen für Server und Client anlegen", "Getrennte Clients für Server Components und Browser-Code einrichten."],
      ["Routen mit Middleware schützen", "Die Session-Gültigkeit in der Next.js-Middleware prüfen, bevor geschützte Seiten gerendert werden."],
    ],
  },
  {
    slug: "how-to-build-a-nextjs-admin-dashboard",
    title: "Next.js Admin-Dashboard bauen | Justin Johnson",
    description: "Ein Admin-Dashboard in Next.js strukturieren – Layout, geschützte Routen, Datentabellen und rollenbasierter Zugriff.",
    h1: "So bauen Sie ein Admin-Dashboard mit Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "Next.js Admin-Dashboard bauen",
    secondaryKeywords: [
      "Next.js Dashboard Tutorial",
      "Admin-Panel mit Next.js",
      "Next.js Datentabelle",
      "Next.js Dashboard-Layout",
    ],
    intro: [
      "Ein Admin-Dashboard hat andere Anforderungen als eine Marketing-Website – es liegt hinter einem Login, muss nicht in Suchmaschinen ranken und wird an Informationsdichte und Bedienschnelligkeit gemessen statt an visuellem Feinschliff. Diese Anleitung zeigt, wie Sie eines in Next.js mit persistentem Layout, geschützten Routen und einem Muster für Datentabellen aufbauen.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [
          [
            "Ein funktionierendes Next.js-Projekt mit App Router",
            "Ein bereits eingerichtetes Authentifizierungssystem (siehe die Anleitung zu Supabase Auth)",
            "Eine Datenquelle (Datenbank oder API), die angezeigt werden soll",
          ],
        ],
      },
      {
        heading: "Schritt 1: Das Dashboard-Layout strukturieren",
        blocks: [
          null,
          [
            "Ein eigenes Layout für die Route-Group /dashboard sorgt dafür, dass die Seitenleiste bei der Navigation bestehen bleibt, statt bei jedem Seitenwechsel neu gerendert zu werden.",
          ],
        ],
      },
      {
        heading: "Schritt 2: Die Route-Group schützen",
        blocks: [
          [
            "Die Session in der Middleware für jeden Pfad unter /dashboard prüfen und nicht angemeldete Nutzer zum Login umleiten, bevor Layout oder Seite überhaupt mit dem Rendern beginnen.",
          ],
        ],
      },
      {
        heading: "Schritt 3: Eine Datentabelle bauen",
        blocks: [
          [
            "Daten serverseitig in der Seitenkomponente laden (eine Server Component kann die Datenbank direkt abfragen) und nur für die interaktiven Teile an eine Client Component übergeben – Sortierung, Filter, Paginierungssteuerung.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Die Seitenleiste wird bei der Navigation neu gerendert oder flackert – prüfen Sie, ob sie im Layout liegt und nicht in jeder Seite dupliziert ist",
            "Große Tabellen rendern langsam – ergänzen Sie Paginierung oder Virtualisierung, statt Tausende Zeilen auf einmal zu rendern",
            "Rollenprüfungen nur in der Oberfläche – Berechtigungen müssen auch auf API- bzw. Datenebene durchgesetzt werden, nicht nur in der Oberfläche ausgeblendet",
          ],
        ],
      },
      {
        heading: "Performance-Aspekte",
        blocks: [
          [
            "Nur die Daten laden, die eine Ansicht braucht – nicht ganze Tabellen clientseitig laden, nur um im Browser zu filtern",
            "Lange Listen paginieren oder virtualisieren",
            "Schwere clientseitige Bibliotheken (Diagramme, umfangreiche Tabellen) per dynamischem Import möglichst aus dem initialen Bundle heraushalten",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Sollte das Dashboard serverseitig oder clientseitig gerendert werden?",
        "Hybrid – Datenabruf und erstes Rendering können für die Geschwindigkeit serverseitig erfolgen, während Sortierung, Filter und andere Interaktionen clientseitig laufen, sobald die Daten geladen sind.",
      ],
      [
        "Wie ergänze ich rollenbasierte Berechtigungen?",
        "Die Rolle des Nutzers sowohl in der Middleware prüfen (um ganze Bereiche zu sperren) als auch beim Datenabruf (um zu filtern, was tatsächlich zurückgegeben wird) – niemals allein auf das Ausblenden von UI-Elementen verlassen.",
      ],
      [
        "Wie gehe ich am besten mit großen Datentabellen um?",
        "Mit serverseitiger Paginierung – nur die aktuelle Ergebnisseite abrufen, statt den kompletten Datensatz in den Browser zu laden und clientseitig zu paginieren.",
      ],
    ],
    howToSteps: [
      ["Das Dashboard-Layout strukturieren", "Ein persistentes Layout mit Seitenleiste für die Dashboard-Route-Group anlegen."],
      ["Die Route-Group schützen", "Die Authentifizierung in der Middleware für alle Dashboard-Routen prüfen."],
      ["Eine Datentabelle bauen", "Daten serverseitig laden und Interaktivität in einer Client Component umsetzen."],
    ],
  },
];
