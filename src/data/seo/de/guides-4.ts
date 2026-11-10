import type { SeoPageTranslation } from "../types";

// Code blocks are inherited from the English pages (null keeps the English code and file-path caption).
export const guidePagesDe4: SeoPageTranslation[] = [
  {
    slug: "how-to-build-a-crm-with-nextjs-and-supabase",
    title: "CRM mit Next.js und Supabase bauen | Justin Johnson",
    description: "Eine Schritt-für-Schritt-Anleitung zu den Grundbausteinen eines individuellen CRM – Schema, Row-Level Security und Pipeline-Ansicht.",
    h1: "So bauen Sie ein CRM mit Next.js und Supabase",
    eyebrow: "Anleitungen",
    primaryKeyword: "CRM mit Next.js und Supabase bauen",
    secondaryKeywords: [
      "Next.js Supabase CRM Tutorial",
      "individuelles CRM bauen Anleitung",
      "Supabase CRM-Schema",
      "Next.js CRM-Datenmodell",
    ],
    intro: [
      "Diese Anleitung behandelt die Grundbausteine eines individuellen CRM auf Basis von Next.js und Supabase – Datenmodell, Zugriffskontrolle und eine einfache Pipeline-Ansicht – statt aller Funktionen, die ein vollständiges CRM irgendwann braucht.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Ein Supabase-Projekt", "Ein Next.js-Projekt mit App Router und bereits eingerichteter Supabase-Authentifizierung"]] },
      { heading: "Schritt 1: Das Kernschema entwerfen", blocks: [null] },
      {
        heading: "Schritt 2: Row-Level Security hinzufügen",
        blocks: [
          null,
          [
            "Wiederholen Sie ähnliche Richtlinien für insert, update und die deals-Tabelle – RLS ist das, was tatsächlich durchsetzt, dass ein Vertriebsmitarbeiter die Pipeline eines anderen nicht sehen kann, egal was das Frontend anzeigt.",
          ],
        ],
      },
      {
        heading: "Schritt 3: Die Pipeline-Ansicht bauen",
        blocks: [
          [
            "Deals in einer Server Component nach Phase gruppiert laden und als Spalten darstellen – ein einfacher Ausgangspunkt, bevor Phasenwechsel per Drag-and-drop hinzukommen, die eine Client Component und einen Update-Aufruf an Supabase erfordern.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Daten sind trotz aktivierter RLS für alle Nutzer sichtbar – prüfen Sie, ob für die ausgeführte Operation (select/insert/update/delete) tatsächlich eine Richtlinie existiert; RLS ohne passende Richtlinie verweigert den Zugriff standardmäßig, aber eine fehlende Richtlinie für eine Operation, während andere existieren, kann verwirrende Lücken erzeugen",
            "Fremdschlüsselfehler beim Anlegen eines Deals – prüfen Sie, ob die referenzierte contact_id tatsächlich existiert und demselben Eigentümer gehört",
            "Langsame Pipeline-Abfragen bei wachsenden Daten – ergänzen Sie einen Index auf die Spalten stage und owner_id, die in der Hauptabfrage verwendet werden",
          ],
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          [
            "RLS-Richtlinien vor jeglichem Frontend-Code entwerfen, nicht danach",
            "Das Schema eng am tatsächlichen Vertriebsprozess ausrichten statt an einer generischen Vorlage",
            "Früh eine Tabelle für Aktivitäten/Notizen ergänzen – sie wird meist früher gebraucht als erwartet",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Brauche ich eine separate Backend-API, oder kann das Frontend direkt mit Supabase sprechen?",
        "Für die meisten CRM-Anwendungsfälle reicht es, Supabase direkt aus Server Components abzufragen (oder über die Client-Bibliothek mit RLS als Zugriffskontrolle) – eine separate API-Schicht lohnt sich erst, wenn die Geschäftslogik so komplex wird, dass sie zentralisiert werden muss.",
      ],
      [
        "Wie ergänze ich Automatisierung, etwa KI-entworfene Follow-ups?",
        "Das ist die Schicht des KI-gestützten CRM – sobald Kernschema und RLS solide sind, lesen KI-Funktionen aus denselben Tabellen und schreiben dorthin zurück und rufen für die generativen Teile eine LLM-API auf.",
      ],
      [
        "Können mehrere Vertriebsmitarbeiter dieselben Deals sehen?",
        "Ja, wenn das der gewünschte Ablauf ist – die RLS-Richtlinie prüft dann die Team- oder Organisationszugehörigkeit statt einer strikten owner_id-Übereinstimmung, je nachdem, wie das Teilen funktionieren soll.",
      ],
    ],
    howToSteps: [
      ["Das Kernschema entwerfen", "Tabellen für Kontakte und Deals mit passenden Beziehungen anlegen."],
      ["Row-Level Security hinzufügen", "RLS-Richtlinien schreiben, damit Nutzer nur auf ihre eigenen Daten zugreifen."],
      ["Die Pipeline-Ansicht bauen", "Deals nach Pipeline-Phase gruppiert laden und anzeigen."],
    ],
  },
  {
    slug: "how-to-build-a-saas-application-with-nextjs",
    title: "SaaS-Anwendung mit Next.js bauen | Justin Johnson",
    description: "Die Grundbausteine eines SaaS-Produkts mit Next.js – Mandantenfähigkeit, Authentifizierung und Abrechnung – vor den produktspezifischen Funktionen.",
    h1: "So bauen Sie eine SaaS-Anwendung mit Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "SaaS-Anwendung mit Next.js bauen",
    secondaryKeywords: [
      "Next.js SaaS Boilerplate Konzepte",
      "mandantenfähiges Next.js Tutorial",
      "Next.js SaaS Abrechnung Tutorial",
      "SaaS-Starter-Architektur",
    ],
    intro: [
      "Vor jeder produktspezifischen Funktion braucht eine SaaS-Anwendung drei Dinge, die korrekt funktionieren: Benutzerkonten, eine Möglichkeit, Kundendaten voneinander zu isolieren, und Abrechnung. Diese Anleitung behandelt die Architekturentscheidungen hinter allen dreien.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Ein Next.js-Projekt mit Datenbank (Postgres/Supabase)", "Ein Stripe-Konto für die Abrechnung"]] },
      {
        heading: "Schritt 1: Auf Mandantenfähigkeit auslegen",
        blocks: [
          [
            "Der einfachste und häufigste Ansatz: eine gemeinsame Datenbank mit einer Spalte organization_id (Mandanten-ID) in jeder Tabelle mit Kundendaten, durchgesetzt bei jeder einzelnen Abfrage – entweder manuell oder über Row-Level Security bei Postgres/Supabase.",
          ],
          null,
        ],
      },
      {
        heading: "Schritt 2: Abo-Abrechnung anbinden",
        blocks: [
          [
            "Einen Stripe-Customer und ein Abonnement anlegen, wenn eine Organisation einen kostenpflichtigen Plan bucht, und den Abo-Status am Organisationsdatensatz speichern – aktualisiert über Stripe-Webhooks (nicht über die Checkout-Weiterleitung), sobald er sich ändert.",
          ],
        ],
      },
      {
        heading: "Schritt 3: Funktionen nach Plan freischalten",
        blocks: [
          [
            "Den aktuellen Plan der Organisation (aus Ihrer Datenbank gelesen, per Webhooks synchron gehalten) prüfen, bevor planabhängige Funktionen gerendert oder freigegeben werden – sowohl in der Oberfläche als auch auf API-Ebene.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Eine Abfrage ohne Filter auf organization_id, die Daten zwischen Mandanten preisgibt – die folgenreichste Fehlerkategorie in einer mandantenfähigen App, die besondere Aufmerksamkeit im Review verdient",
            "Ein veralteter Abo-Status, weil er nur über die Checkout-Weiterleitung statt über Webhooks aktualisiert wird",
            "Funktionsfreischaltungen, die nur in der Oberfläche geprüft werden, sodass ein entschlossener Nutzer die API direkt aufrufen und die Planbeschränkung umgehen kann",
          ],
        ],
      },
      {
        heading: "Sicherheitsaspekte",
        blocks: [
          [
            "Jede Abfrage auf Mandantendaten muss nach organization_id filtern – erwägen Sie Row-Level Security als von der Datenbank durchgesetzte Absicherung, statt sich allein auf Disziplin im Anwendungscode zu verlassen",
            "Stripe-Webhook-Signaturen prüfen, bevor einem Abrechnungsereignis vertraut wird",
            "In API-Fehlermeldungen keine Daten einer anderen Organisation preisgeben",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Sollte jeder Kunde eine eigene Datenbank bekommen?",
        "Für die meisten SaaS-Produkte nicht – eine gemeinsame Datenbank mit Mandanten-ID-Spalte ist einfacher zu betreiben und reicht aus, bis eine Größenordnung oder Compliance-Anforderung ausdrücklich eine Isolation verlangt; das betrifft weniger Fälle, als oft angenommen wird.",
      ],
      [
        "Wie halte ich den Abo-Status korrekt?",
        "Aktualisieren Sie ihn anhand von Stripe-Webhook-Ereignissen (Abo erstellt, geändert, gekündigt), nicht allein über die Erfolgs-Weiterleitung nach dem Checkout – die Weiterleitung kann verpasst werden, wenn der Kunde den Tab vorzeitig schließt.",
      ],
      [
        "Was ist das größte Risiko einer mandantenfähigen Architektur?",
        "Eine Abfrage, die vergisst, nach Mandanten-ID zu filtern, und damit die Daten eines Kunden einem anderen preisgibt – das verdient gezielte Aufmerksamkeit im Code-Review und, wo die Datenbank es unterstützt, eine Row-Level-Security-Richtlinie als Absicherung.",
      ],
    ],
    howToSteps: [
      ["Auf Mandantenfähigkeit auslegen", "Jeder Tabelle mit Kundendaten eine Mandanten- bzw. Organisations-ID hinzufügen."],
      ["Abo-Abrechnung anbinden", "Stripe-Abonnements integrieren und den Status per Webhooks synchronisieren."],
      ["Funktionen nach Plan freischalten", "Den Plan-Status prüfen, bevor Zugriff auf planabhängige Funktionen gewährt wird."],
    ],
  },
  {
    slug: "how-to-build-an-ai-chatbot-for-a-website",
    title: "KI-Chatbot für eine Website bauen | Justin Johnson",
    description: "Die Kernbausteine eines Website-Chatbots auf Basis Ihrer eigenen Inhalte – Retrieval, Prompt-Struktur und Chat-Oberfläche.",
    h1: "So bauen Sie einen KI-Chatbot für eine Website",
    eyebrow: "Anleitungen",
    primaryKeyword: "KI-Chatbot für Website bauen",
    secondaryKeywords: [
      "Chatbot bauen Tutorial",
      "KI-Chatbot mit RAG Tutorial",
      "Anleitung Website-Chatbot Entwicklung",
      "individueller Chatbot mit OpenAI",
    ],
    intro: [
      "Ein Chatbot, der für eine bestimmte Website wirklich nützlich ist, muss auf den Inhalten dieser Website beruhen, nicht nur auf dem Allgemeinwissen des Modells – diese Anleitung behandelt die Retrieval-Pipeline, die das möglich macht, sowie die Oberfläche drumherum.",
    ],
    sections: [
      {
        heading: "Voraussetzungen",
        blocks: [
          [
            "Ein API-Key von OpenAI (oder einem vergleichbaren Anbieter)",
            "Inhalte, auf die sich der Bot stützen soll (Dokumentation, FAQs, Produktseiten)",
            "Eine Vektordatenbank oder Postgres mit pgvector",
          ],
        ],
      },
      {
        heading: "Schritt 1: Inhalte aufteilen und einbetten",
        blocks: [
          [
            "Die Quellinhalte in angemessen große Abschnitte aufteilen (einige Hundert Wörter pro Abschnitt sind ein gängiger Ausgangspunkt), für jeden über eine Embeddings-API einen Embedding-Vektor erzeugen und sowohl den Text als auch seinen Vektor speichern.",
          ],
        ],
      },
      { heading: "Schritt 2: Relevante Abschnitte zur Abfragezeit abrufen", blocks: [null] },
      {
        heading: "Schritt 3: Den Prompt aufbauen und eine Antwort erzeugen",
        blocks: [
          null,
          [
            "Das Modell ausdrücklich anzuweisen zu sagen, dass es etwas nicht weiß, wenn der Kontext die Frage nicht abdeckt, ist einer der einfachsten und wirkungsvollsten Wege, erfundene Antworten zu reduzieren.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Der Bot beantwortet selbstbewusst Fragen außerhalb seiner tatsächlichen Inhalte – der Prompt weist ihn nicht klar genug an, beim bereitgestellten Kontext zu bleiben",
            "Es werden irrelevante Abschnitte abgerufen – die Abschnittsgröße ist für den Inhaltstyp möglicherweise zu groß oder zu klein; das erfordert meist Iteration anhand echter Testfragen",
            "Lange Antwortzeiten – die Antwort Token für Token zu streamen lässt dieselbe Gesamtlatenz für den Nutzer deutlich schneller wirken",
          ],
        ],
      },
      {
        heading: "Sicherheitsaspekte",
        blocks: [
          [
            "Den Chat-Endpunkt mit Rate Limiting versehen, um Missbrauch und ausufernde API-Kosten zu verhindern",
            "Den Retrieval-Schritt niemals Inhalte abrufen lassen, auf die der aktuelle Nutzer keinen Zugriff haben sollte – dieselben Berechtigungen wie im Quellsystem respektieren",
            "Unterhaltungen für das Qualitätsmonitoring bereinigen und protokollieren, ohne mehr personenbezogene Daten als nötig zu speichern",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wie viele Inhalte brauche ich, bevor sich das lohnt?",
        "So viele, dass eine Stichwortsuche tatsächlich Mühe hätte, die richtige Antwort zu finden – eine Handvoll Seiten braucht vielleicht gar keinen Chatbot; bei umfangreicher Dokumentation oder einem großen Produktkatalog beginnt Retrieval-basierte Suche echten Mehrwert zu bieten.",
      ],
      [
        "Kann ich diesen Ansatz ohne Vektordatenbank nutzen?",
        "Bei sehr wenigen Inhalten kann eine einfachere Stichwort- oder Volltextsuche statt Embeddings ausreichen – Vektorsuche rechtfertigt ihre Komplexität, sobald die Inhalte umfangreich sind oder die Formulierung der Fragen stark vom Quelltext abweicht.",
      ],
      [
        "Wie verhindere ich, dass der Bot Dinge erfindet?",
        "Ihn strikt auf den abgerufenen Kontext stützen, ihn ausdrücklich anweisen zu sagen, wenn er etwas nicht weiß, und eine Konfidenzschwelle erwägen, unterhalb derer er an einen Menschen übergibt, statt zu antworten.",
      ],
    ],
    howToSteps: [
      ["Inhalte aufteilen und einbetten", "Quellinhalte in Abschnitte aufteilen und für jeden Vektor-Embeddings erzeugen."],
      ["Relevante Abschnitte abrufen", "Die Frage des Nutzers einbetten und die ähnlichsten Abschnitte abrufen."],
      ["Prompt aufbauen und Antwort erzeugen", "Abgerufenen Kontext mit der Frage kombinieren und die LLM-API aufrufen."],
    ],
  },
  {
    slug: "how-to-integrate-the-openai-api-with-nextjs",
    title: "OpenAI API in Next.js integrieren | Justin Johnson",
    description: "Die OpenAI API aus einem Next.js Route Handler aufrufen – mit Streaming-Antworten, Fehlerbehandlung und Kostenkontrolle.",
    h1: "So integrieren Sie die OpenAI API in Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "OpenAI API in Next.js integrieren",
    secondaryKeywords: [
      "OpenAI API Next.js Tutorial",
      "Next.js Streaming Chat Completion",
      "OpenAI Route Handler in Next.js",
      "Next.js AI SDK Tutorial",
    ],
    intro: [
      "Diese Anleitung behandelt den Aufruf der OpenAI API aus einem Route Handler, das Streaming der Antwort an den Client für eine reaktionsschnelle Oberfläche sowie Fehlerbehandlung und Kostenkontrolle, die von Anfang an dazugehören sollten.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Ein OpenAI-API-Key", "Ein Next.js-Projekt mit App Router", "Das npm-Paket openai installiert"]] },
      { heading: "Schritt 1: Einen Route Handler anlegen", blocks: [null] },
      {
        heading: "Schritt 2: Die Antwort streamen",
        blocks: [
          null,
          [
            "Streaming zeigt die Antwort, während sie erzeugt wird, statt auf die vollständige Completion zu warten – das verbessert die wahrgenommene Geschwindigkeit bei längeren Antworten spürbar.",
          ],
        ],
      },
      {
        heading: "Schritt 3: Fehler und Rate Limits behandeln",
        blocks: [
          [
            "Den API-Aufruf in try/catch einbetten, Rate-Limit-Antworten (429) mit einer Retry-Strategie inklusive Backoff behandeln und ein sinnvolles Timeout setzen, damit eine langsame oder hängende Anfrage den Nutzer nicht unbegrenzt warten lässt.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Der API-Key liegt im clientseitigen Code offen – die OpenAI API darf ausschließlich aus Servercode (Route Handlers, Server Components) aufgerufen werden, niemals direkt aus dem Browser",
            "Keine Fehlerbehandlung rund um den API-Aufruf, sodass ein vorübergehender Fehler die Anfrage abstürzen lässt, statt kontrolliert zu reagieren",
            "Keine Kostenüberwachung, was bei unerwarteten Nutzungsspitzen zu einer überraschenden Rechnung führt",
          ],
        ],
      },
      {
        heading: "Sicherheits- & Kostenaspekte",
        blocks: [
          [
            "Den API-Key ausschließlich serverseitig halten, in einer Umgebungsvariable, die nie an den Client gelangt",
            "Nutzungslimits pro Nutzer oder Session setzen, um die Kosten zu kontrollieren",
            "Das kleinste Modell wählen, das die Aufgabe zuverlässig bewältigt – die Kosten skalieren direkt mit den verarbeiteten Tokens",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Kann ich die OpenAI API direkt aus einer Client Component aufrufen?",
        "Nein – damit läge Ihr API-Key im Browser offen, wo ihn jeder auslesen und missbrauchen könnte. Leiten Sie den Aufruf immer über einen serverseitigen Route Handler.",
      ],
      [
        "Wie streame ich eine Antwort in eine React-Komponente?",
        "Der Route Handler gibt eine ReadableStream-Antwort zurück, die der Client schrittweise liest (über den response.body-Reader von fetch oder eine Bibliothek wie das Vercel AI SDK, die dieses Muster kapselt), um die Oberfläche beim Eintreffen des Textes zu aktualisieren.",
      ],
      [
        "Welches Modell sollte ich standardmäßig verwenden?",
        "Ein kleineres, schnelleres Modell (wie gpt-4o-mini) reicht für die meisten Aufgaben oft aus und ist deutlich günstiger; größere Modelle sollten Sie für wirklich komplexe Aufgaben reservieren, bei denen die Ausgabequalität des kleineren Modells nicht genügt.",
      ],
    ],
    howToSteps: [
      ["Einen Route Handler anlegen", "Einen serverseitigen Endpunkt einrichten, der die OpenAI API aufruft."],
      ["Die Antwort streamen", "Eine Streaming-Antwort zurückgeben, damit sich die Oberfläche während der Texterzeugung aktualisiert."],
      ["Fehler und Rate Limits behandeln", "Fehlerbehandlung, Wiederholungen und eine kostenbewusste Modellwahl ergänzen."],
    ],
  },
  {
    slug: "how-to-improve-seo-for-a-react-website",
    title: "SEO für React-Websites verbessern | Justin Johnson",
    description: "Eine praktische Checkliste für bessere Sichtbarkeit einer React-App in Suchmaschinen – von der Rendering-Strategie bis zu Metadaten pro Seite.",
    h1: "So verbessern Sie das SEO einer React-Website",
    eyebrow: "Anleitungen",
    primaryKeyword: "SEO für React-Website verbessern",
    secondaryKeywords: [
      "React SEO Checkliste",
      "SEO für Single Page App verbessern",
      "Alternative zu React Helmet",
      "Sichtbarkeit von React-Apps in der Suche",
    ],
    intro: [
      "Dies ist eine praktische, geordnete Checkliste für das SEO einer React-App – beginnend mit dem wirkungsvollsten Thema (Rendering-Strategie) bis hin zu den Details, die zählen, sobald das Fundament stimmt.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Eine live oder lokal laufende React-Anwendung", "Zugriff auf den Seitenquelltext bzw. die rohen HTML-Antworten"]] },
      {
        heading: "Schritt 1: Prüfen, was tatsächlich im initialen HTML steht",
        blocks: [
          [
            "Sehen Sie sich den rohen HTML-Quelltext der Seite an (nicht das gerenderte DOM im Browser). Fehlt Ihr Hauptinhalt, hängt er von clientseitigem JavaScript ab – das zu beheben ist der größte einzelne Hebel für React-SEO, entweder per Prerendering oder durch die Migration auf ein Framework mit eingebautem Server-Rendering.",
          ],
        ],
      },
      {
        heading: "Schritt 2: Metadaten pro Route ergänzen",
        blocks: [
          [
            "Jede Route braucht eigene Titel, Beschreibungen und Canonical-URLs statt eines einzigen statischen Satzes in der index.html – das lässt sich mit einem kleinen Hook umsetzen, der document.head bei jedem Routenwechsel aktualisiert, hilft allerdings nur Crawlern, die JavaScript ausführen.",
          ],
        ],
      },
      {
        heading: "Schritt 3: Die technischen Grundlagen korrigieren",
        blocks: [
          [
            "Eine echte sitemap.xml mit jeder indexierbaren Route",
            "Eine robots.txt, die nicht versehentlich Inhalte blockiert, die indexiert werden sollen",
            "Semantisches HTML mit genau einer H1 pro Seite und logischer Überschriftenhierarchie",
            "Echte Anchor-Tags (<a href>) für die interne Navigation statt Klick-Handlern auf Nicht-Link-Elementen",
            "Strukturierte Daten, wo sie tatsächlich anwendbar sind",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Navigation, die vollständig mit onClick-Handlern auf <div>-Elementen statt mit echten <a>-Tags gebaut ist, denen Crawler und Nutzer mit normalem Linkverhalten nicht wie gewohnt folgen können",
            "Eine einzige statische Meta-Beschreibung für die gesamte App, dupliziert auf jeder indexierten Seite",
            "Gar keine Sitemap, sodass die Auffindbarkeit vollständig von internen Links und externen Backlinks abhängt",
          ],
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          [
            "Die Rendering-Strategie vor jeder anderen einzelnen SEO-Änderung angehen – sie bestimmt, ob jede weitere Maßnahme für Crawler überhaupt sichtbar wird",
            "Echte <a>-Tags für die gesamte interne Navigation verwenden, auch in einer Single-Page-App",
            "Mit dem URL-Prüftool der Google Search Console testen, was der Google-Crawler tatsächlich erfasst hat, statt nur, was im eigenen Browser gerendert wird",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ist meine React-App für Suchmaschinen definitiv unsichtbar?",
        "Nicht unbedingt unsichtbar, aber im Nachteil – der Google-Crawler führt JavaScript aus, nur langsamer und weniger zuverlässig als beim Lesen vorgerenderten HTMLs, und andere Crawler führen es möglicherweise gar nicht aus. Für die besten Ergebnisse sollten Inhalte ohne JavaScript-Ausführung vorhanden sein.",
      ],
      [
        "Was ist die schnellste Lösung, wenn ich das Framework gerade nicht wechseln kann?",
        "Statisches Prerendering – zur Build-Zeit HTML-Snapshots jeder Route erzeugen – verbessert die Crawlbarkeit deutlich, ohne die Rendering-Strategie komplett neu zu schreiben; mehr dazu finden Sie auf der Seite zu SEO für React-Websites.",
      ],
      [
        "Beeinflusst React Router das SEO?",
        "Clientseitiges Routing an sich ist nicht das Kernproblem, solange für Links echte <a href>-Tags verwendet werden (denen Nutzer und Crawler folgen können); entscheidend ist die zugrunde liegende Rendering-Strategie – also ob Inhalte im initialen HTML vorhanden sind.",
      ],
    ],
    howToSteps: [
      ["Das initiale HTML prüfen", "Den rohen Seitenquelltext ansehen, um zu bestätigen, ob Inhalte ohne JavaScript vorhanden sind."],
      ["Metadaten pro Route ergänzen", "Sicherstellen, dass jede Route einen eindeutigen Titel, eine Beschreibung und eine Canonical-URL hat."],
      ["Die technischen Grundlagen korrigieren", "Sitemap, korrekte robots.txt, semantisches HTML und echte Anchor-Tags ergänzen."],
    ],
  },
];
