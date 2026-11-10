import type { SeoPageTranslation } from "../types";

export const technologyPagesDe2: SeoPageTranslation[] = [
  {
    slug: "supabase-authentication",
    title: "Supabase Authentifizierung | Justin Johnson",
    description: "Umsetzung von Supabase Auth – E-Mail/Passwort, OAuth-Anbieter und Session-Verwaltung, verzahnt mit Row-Level Security.",
    h1: "Supabase Authentifizierung",
    eyebrow: "Technologien",
    primaryKeyword: "Supabase Authentifizierung",
    secondaryKeywords: [
      "Supabase Auth einrichten",
      "Supabase Login Integration",
      "Supabase OAuth",
      "Supabase Session-Management",
    ],
    intro: [
      "Supabase Auth übernimmt die Mechanik von Registrierung, Login, Passwort-Reset und OAuth-Anbietern und ist – weil es auf derselben Postgres-Datenbank wie der Rest der App aufbaut – direkt mit Row-Level-Security-Richtlinien verbunden. Die Zugriffskontrolle wird so auf Datenbankebene durchgesetzt und nicht nur im Anwendungscode.",
      "Ich richte das so ein, dass Auth-Status, Session-Aktualisierung und RLS-Richtlinien beim Server- und Client-Rendering in Next.js oder React konsistent sind.",
    ],
    sections: [
      {
        heading: "Was dazugehört",
        blocks: [
          [
            "Anmeldung per E-Mail/Passwort und über OAuth-Anbieter (Google, GitHub usw.)",
            "Session-Verwaltung, die in Server und Client Components funktioniert",
            "Row-Level-Security-Richtlinien mit auth.uid() für nutzerbezogenen Datenzugriff",
            "Abläufe für E-Mail-Verifizierung und Passwort-Reset",
            "Rollen- oder Berechtigungsmetadaten an Benutzerkonten, wo nötig",
          ],
        ],
      },
      {
        heading: "Warum RLS hier so wichtig ist",
        blocks: [
          [
            "Da die Client-Bibliotheken von Supabase recht direkt auf die Datenbank zugreifen können, darf sich die Zugriffskontrolle nicht allein darauf verlassen, dass das Frontend ausblendet, was es nicht anzeigt. Row-Level-Security-Richtlinien legen auf Datenbankebene fest, wer welche Zeilen lesen oder schreiben darf – so kann selbst ein kompromittiertes oder fehlerhaftes Frontend sie nicht umgehen.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Funktioniert Supabase Auth mit Next.js Server Components?",
        "Ja, mit dem passenden serverseitigen Client-Setup – Sessions werden auf dem Server aus Cookies gelesen, sodass der Auth-Status zwischen serverseitig und clientseitig gerenderten Teilen der App konsistent bleibt.",
      ],
      [
        "Welche OAuth-Anbieter unterstützt Supabase?",
        "Google, GitHub, GitLab, Facebook, Apple und weitere direkt ab Werk – für jeden müssen nur die OAuth-Zugangsdaten des Anbieters in den Supabase-Projekteinstellungen hinterlegt werden.",
      ],
      [
        "Ist Supabase Auth sicher genug für den Produktivbetrieb?",
        "Ja, es baut auf bewährten Mustern auf (JWT-Sessions, Standard-OAuth-Abläufe) und wird von sehr vielen Anwendungen produktiv eingesetzt – die wesentliche Sicherheitsarbeit besteht darin, korrekte Row-Level-Security-Richtlinien für Ihr konkretes Datenmodell zu schreiben.",
      ],
    ],
  },
  {
    slug: "supabase-database-development",
    title: "Supabase Datenbankentwicklung | Justin Johnson",
    description: "Supabase-Schema-Design, Row-Level-Security-Richtlinien und Migrationen – auf Basis von Standard-PostgreSQL.",
    h1: "Supabase Datenbankentwicklung",
    eyebrow: "Technologien",
    primaryKeyword: "Supabase Datenbankentwicklung",
    secondaryKeywords: [
      "Supabase Schema-Design",
      "Supabase Row-Level Security",
      "Supabase Postgres",
      "Supabase Datenbankmigrationen",
    ],
    intro: [
      "Die Datenbank von Supabase ist schlicht PostgreSQL – die üblichen Prinzipien des Schema-Designs wie Normalisierung, Fremdschlüssel und Indizes gelten also direkt, ergänzt um die Supabase-eigene Schicht aus automatisch generierten APIs, Row-Level Security und Realtime-Subscriptions.",
      "Ich entwerfe Schemas zuerst anhand der tatsächlichen Beziehungen in den Daten und lege dann RLS-Richtlinien und API-Zugriff darüber, statt bei den Werkzeugen von Supabase anzufangen und rückwärts zu arbeiten.",
    ],
    sections: [
      {
        heading: "Was in ein Schema gehört",
        blocks: [
          [
            "Tabellen und Beziehungen, modelliert nach den echten Daten statt nach einer generischen Vorlage",
            "Fremdschlüssel und Constraints, durchgesetzt auf Datenbankebene",
            "Indizes auf Spalten, die in häufigen Abfragen und Filtern verwendet werden",
            "Row-Level-Security-Richtlinien, die den Zugriff pro Nutzer oder Organisation eingrenzen",
            "Datenbankfunktionen und Trigger für Logik, die in die Datenschicht gehört",
          ],
        ],
      },
      {
        heading: "Migrationen",
        blocks: [
          [
            "Schemaänderungen laufen über versionierte Migrationsdateien statt über manuelle Bearbeitung im Supabase-Dashboard. So sind Änderungen nachvollziehbar, prüfbar und über alle Umgebungen hinweg reproduzierbar – dieselbe Disziplin wie bei jedem Standard-Migrations-Workflow für Postgres.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Kann ich mit Supabase reines SQL verwenden?",
        "Ja – da es Standard-PostgreSQL ist, können Sie SQL-Migrationen, Funktionen und Trigger direkt schreiben und parallel die automatisch generierten Client-APIs von Supabase für typische Abfragen nutzen.",
      ],
      [
        "Wie funktioniert die automatisch generierte API von Supabase?",
        "Sie stellt eine REST- und GraphQL-kompatible API direkt aus Ihrem Postgres-Schema bereit, sodass CRUD-Operationen keine separate Backend-Schicht erfordern – was jede Anfrage tatsächlich darf, regelt dabei die Row-Level Security.",
      ],
      [
        "Kann ich später bei Bedarf von Supabase weg migrieren?",
        "Die Datenbank selbst ist portabel, da es Standard-Postgres ist – der wesentliche Migrationsaufwand bestünde darin, Supabase Auth und die automatisch generierte API-Schicht durch eigene Entsprechungen zu ersetzen.",
      ],
    ],
  },
  {
    slug: "postgresql-development",
    title: "PostgreSQL Entwicklung | Justin Johnson",
    description: "PostgreSQL-Schema-Design, Abfrageoptimierung und Anbindung an Node.js- und Next.js-Anwendungen.",
    h1: "PostgreSQL Entwicklung",
    eyebrow: "Technologien",
    primaryKeyword: "PostgreSQL Entwicklung",
    secondaryKeywords: [
      "PostgreSQL Entwickler",
      "Postgres Schema-Design",
      "PostgreSQL Performance-Tuning",
      "relationales Datenbankdesign",
    ],
    intro: [
      "PostgreSQL ist meine Standarddatenbank für alles mit echten relationalen Daten – Bestellungen, die zu Kunden gehören, Buchungen, die zu Ressourcen gehören, alles, wo Datenintegrität wirklich zählt. Sie ist ausgereift, gut dokumentiert und bewältigt sowohl einfaches CRUD als auch komplexe relationale Abfragen ohne die Umwege, die eine Dokumentendatenbank für dieselbe Aufgabe oft braucht.",
      "Das umfasst Schema-Design, Abfrageoptimierung und die zuverlässige Anbindung von Postgres an eine Node.js- oder Next.js-Anwendungsschicht.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Schema-Design mit sauberer Normalisierung und Fremdschlüsselbeziehungen",
            "Indexierungsstrategie auf Basis der tatsächlichen Abfragemuster",
            "Abfrageoptimierung für langsame Endpunkte",
            "Konfiguration von Connection Pooling für Serverless- oder hochparallele Umgebungen",
            "Migrationswerkzeuge für versionierte Schemaänderungen",
          ],
        ],
      },
      {
        heading: "Wann Postgres die richtige Wahl ist",
        blocks: [
          [
            "Jede Anwendung, in der Daten echte Beziehungen haben – eine Buchung, die zu einem Kunden und einer Ressource gehört, eine Bestellung mit Positionen und Kunde –, profitiert davon, dass eine relationale Datenbank diese Beziehungen erzwingen und effizient darüber abfragen kann. Dokumentendatenbanken können funktionieren, bilden relationale Funktionen aber meist informell nach, sobald das Datenmodell über etwas Triviales hinauswächst.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "PostgreSQL oder MongoDB?",
        "PostgreSQL für alles mit klaren Beziehungen zwischen Entitäten – also die meisten Geschäftsanwendungen. MongoDB kann für tatsächlich dokumentartige, locker strukturierte Daten passen, das betrifft aber einen kleineren Teil echter Projekte, als es oft eingesetzt wird.",
      ],
      [
        "Wie gehen Sie mit Verbindungslimits in Serverless-Umgebungen um?",
        "Mit Connection Pooling (über PgBouncer oder einen verwalteten Pooler wie den von Supabase), damit Serverless-Funktionen, die viele parallele Verbindungen aufbauen können, das Verbindungslimit der Datenbank nicht ausschöpfen.",
      ],
      [
        "Können Sie eine bestehende langsame Datenbank optimieren?",
        "Ja – meist beginnend mit EXPLAIN ANALYZE auf den langsamsten Abfragen, um zu sehen, was tatsächlich passiert. Danach folgen Indizes, umstrukturierte Abfragen oder gezielte Denormalisierung stark genutzter Pfade, wo es gerechtfertigt ist.",
      ],
    ],
  },
  {
    slug: "tailwind-css-development",
    title: "Tailwind CSS Entwicklung | Justin Johnson",
    description: "Tailwind-CSS-Umsetzung – konsistente Design-Tokens, responsive Layouts und Dark Mode ohne separate CSS-Datei pro Komponente.",
    h1: "Tailwind CSS Entwicklung",
    eyebrow: "Technologien",
    primaryKeyword: "Tailwind CSS Entwicklung",
    secondaryKeywords: [
      "Tailwind CSS Entwickler",
      "Utility-First CSS",
      "Tailwind Design-System",
      "Tailwind CSS Theming",
    ],
    intro: [
      "Der Utility-First-Ansatz von Tailwind hält das Styling direkt beim Markup, statt es über separate CSS-Dateien zu verteilen. In der Praxis bedeutet das weniger Benennungsentscheidungen und weniger toten CSS-Code, der sich über die Lebensdauer eines Projekts ansammelt. Der Preis sind lange Klassenlisten, die ein komponentenbasiertes Framework wie React aber recht gut auffängt.",
      "Ich nutze Tailwind als Standard-Styling-Ansatz für neue Projekte, konfiguriert mit projektspezifischen Design-Tokens statt der Standardfarbpalette.",
    ],
    sections: [
      {
        heading: "So sieht ein gutes Setup aus",
        blocks: [
          [
            "Eigene Farb-Tokens und Typografie-Skala in der Tailwind-Konfiguration, abgestimmt auf die Marke",
            "Einheitliche Abstands- und Radius-Skala im ganzen Projekt statt beliebiger Werte",
            "Dark Mode über die class-Strategie für explizite Kontrolle",
            "Gemeinsame Komponentenklassen für wiederkehrende Muster, um übermäßige Klassenduplikate zu vermeiden",
            "Konsequent eingesetzte responsive Breakpoints in der gesamten Komponentenbibliothek",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Die Standardpalette statt markenspezifischer Tokens zu verwenden, was zu visueller Inkonsistenz führt",
            "Beliebige Einzelwerte (wie top-[13px]) quer durch die Codebasis statt der Design-Skala",
            "Tatsächlich wiederkehrende Klassenkombinationen nicht in eine gemeinsame Komponente oder Klasse auszulagern",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Sind die Klassenlisten von Tailwind nicht unlesbar?",
        "Es braucht etwas Eingewöhnung, aber in einem komponentenbasierten Framework stehen die Klassen direkt neben dem Markup, das sie gestalten – in der Praxis sieht man dadurch leichter, wie ein UI-Element aussieht, ohne in ein separates Stylesheet springen zu müssen.",
      ],
      [
        "Bläht Tailwind das CSS-Bundle auf?",
        "Nein – Tailwind durchsucht Ihre Codebasis zur Build-Zeit und übernimmt nur die tatsächlich verwendeten Utility-Klassen. Das Ergebnis ist eine kleinere CSS-Datei als bei den meisten handgeschriebenen CSS-Ansätzen in einem vergleichbaren Projekt.",
      ],
      [
        "Kann Tailwind ein bestimmtes bestehendes Markendesign abbilden?",
        "Ja – über die Konfigurationsdatei lassen sich die Standard-Skalen für Farben, Abstände und Typografie vollständig durch projektspezifische Tokens ersetzen, sodass die Utility-Klassen Ihr Design-System widerspiegeln statt der Standardwerte von Tailwind.",
      ],
    ],
  },
  {
    slug: "rest-api-development",
    title: "REST-API-Entwicklung | Justin Johnson",
    description: "Design und Entwicklung von REST-APIs – Ressourcenmodellierung, Authentifizierung und konsistente Fehlerbehandlung für Node.js-Backends.",
    h1: "REST-API-Entwicklung",
    eyebrow: "Technologien",
    primaryKeyword: "REST-API-Entwicklung",
    secondaryKeywords: [
      "RESTful API Design",
      "REST API Entwickler",
      "API-Versionierung",
      "REST API Best Practices",
    ],
    intro: [
      "Eine REST-API zeichnet sich dadurch aus, wie konsistent sie genutzt wird, nicht durch strikte Befolgung einer Spezifikation – ressourcenbasierte URLs, korrekte HTTP-Methoden und Statuscodes sowie vorhersehbare Fehlerstrukturen machen eine API für jeden Client leicht nutzbar, auch für ein Frontend, das jemand anderes als der API-Autor gebaut hat.",
      "Ich entwerfe APIs um die tatsächlichen Ressourcen und Operationen eines Systems herum, wobei Versionierung und Authentifizierung von Anfang an festgelegt und nicht nachgerüstet werden.",
    ],
    sections: [
      {
        heading: "So sieht eine gut entworfene REST-API aus",
        blocks: [
          [
            "Ressourcenbasierte URLs (/orders/:id, nicht /getOrderById)",
            "Korrekter Einsatz von HTTP-Methoden (GET, POST, PATCH, DELETE) und Statuscodes",
            "Einheitliche Fehlerstruktur über alle Endpunkte hinweg",
            "Paginierung für jeden Endpunkt, der eine unbegrenzte Liste zurückgeben kann",
            "Versionierungsstrategie, festgelegt bevor die erste inkompatible Änderung nötig wird",
          ],
        ],
      },
      {
        heading: "Authentifizierung und Autorisierung",
        blocks: [
          [
            "API-Keys für Server-zu-Server-Integrationen, JWTs oder Session-Cookies für nutzerseitige Apps – die Wahl hängt davon ab, wer die API wie aufruft. Die Autorisierung (was ein angemeldeter Aufrufer darf) wird pro Endpunkt geprüft und nicht allein daraus abgeleitet, dass eine Anfrage überhaupt authentifiziert ist.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wie sollte ich eine REST-API versionieren?",
        "Eine Version im URL-Pfad (/v1/orders) ist der einfachste und expliziteste Ansatz – sie ist in jeder Anfrage sichtbar und macht offensichtlich, welche Version ein Client nutzt. Das ist wichtig, sobald eine inkompatible Änderung nötig wird, ohne bestehende Nutzer zu beeinträchtigen.",
      ],
      [
        "Was ist ein gutes Format für Fehlerantworten?",
        "Konsistente, strukturierte Fehler – ein Fehlercode, eine verständliche Meldung und genug Details, damit der Client weiß, was schiefgelaufen ist, und zwar bei jedem Endpunkt, nicht nur bei einigen. Uneinheitliche Fehlerstrukturen gehören zu den häufigsten Ärgernissen bei der Integration gegen eine API.",
      ],
      [
        "Wie setzen Sie Rate Limiting um?",
        "Mit Limits pro Client oder API-Key auf der API-Ebene und Rate-Limit-Headern in den Antworten, damit Clients sich angemessen zurücknehmen können, statt ohne Information gegen eine Wand zu laufen.",
      ],
    ],
  },
  {
    slug: "graphql-development",
    title: "GraphQL Entwicklung | Justin Johnson",
    description: "Design und Integration von GraphQL-APIs – Schema-Design, Resolver und wann GraphQL tatsächlich besser passt als REST.",
    h1: "GraphQL Entwicklung",
    eyebrow: "Technologien",
    primaryKeyword: "GraphQL Entwicklung",
    secondaryKeywords: [
      "GraphQL API Entwickler",
      "GraphQL Schema-Design",
      "GraphQL vs. REST",
      "GraphQL Entwickler beauftragen",
    ],
    intro: [
      "Mit GraphQL kann ein Client in einer einzigen Abfrage genau die Felder anfordern, die er braucht. Das löst echte Probleme bei Apps mit tief verschachtelten, wechselnden Datenanforderungen über viele Ansichten hinweg. Automatisch besser als REST ist es nicht – die zusätzliche Komplexität lohnt sich gezielt dann, wenn Over- oder Under-Fetching mit REST zu einem echten Performance- oder Entwicklungsproblem wird.",
      "Ich baue GraphQL-Schemas und Resolver, wenn die Datenstruktur eines Projekts es rechtfertigt, und sage offen, wenn REST die einfachere, passendere Wahl ist.",
    ],
    sections: [
      {
        heading: "Wann GraphQL sinnvoll ist",
        blocks: [
          [
            "Mehrere Frontends (Web, Mobile) mit unterschiedlichem Datenbedarf aus demselben Backend",
            "Tief verschachtelte Daten, bei denen REST mehrere Roundtrips oder stark überladene Antworten erfordern würde",
            "Ein Produkt, das sich häufig ändert und bei dem eine flexible Abfrageschicht ständige API-Versionierung vermeidet",
          ],
        ],
      },
      {
        heading: "Wann REST einfacher ist",
        blocks: [
          [
            "Die meisten CRUD-lastigen Anwendungen mit einem einzigen Frontend und eher flachen Daten brauchen die Flexibilität von GraphQL nicht, und REST ist einfacher zu bauen, zu cachen und zu debuggen. Ich setze GraphQL nicht standardmäßig ein, nur weil es verfügbar ist – die zusätzliche Komplexität von Resolvern und Schema muss sich für das konkrete Projekt lohnen.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ist GraphQL schneller als REST?",
        "Nicht von sich aus – es kann Over-Fetching reduzieren, weil Clients genau das anfordern, was sie brauchen. Resolver, die das N+1-Abfrageproblem nicht sorgfältig berücksichtigen, können eine GraphQL-API aber langsamer machen als einen gleichwertigen REST-Endpunkt.",
      ],
      [
        "Brauche ich GraphQL, wenn ich nur ein Frontend habe?",
        "Meist nicht – der Hauptvorteil von GraphQL zeigt sich am deutlichsten, wenn mehrere Clients mit unterschiedlichem Datenbedarf dasselbe Backend nutzen. Ein einzelnes Frontend lässt sich in der Regel gut mit einer sauber entworfenen REST-API bedienen.",
      ],
      [
        "Wie verhindern Sie das N+1-Abfrageproblem?",
        "Mit Batching und Caching innerhalb einer Anfrage über das DataLoader-Muster, damit das Auflösen verschachtelter Felder nicht für jeden Listeneintrag eine eigene Datenbankabfrage auslöst.",
      ],
    ],
  },
  {
    slug: "google-maps-api-integration",
    title: "Google Maps API Integration | Justin Johnson",
    description: "Integration der Google Maps API für Buchungsabläufe, Standortauswahl und die Wahl von Abhol- und Zielorten.",
    h1: "Google Maps API Integration",
    eyebrow: "Technologien",
    primaryKeyword: "Google Maps API Integration",
    secondaryKeywords: [
      "Google Maps Entwickler",
      "interaktive Karte einbinden",
      "Standortauswahl entwickeln",
      "Google Maps API Kosten optimieren",
    ],
    intro: [
      "Interaktive Karten kommen am häufigsten in Buchungs- und Transportanwendungen vor – Auswahl von Abhol- und Zielort, Grenzen von Servicegebieten, Ortssuche mit Autovervollständigung. Ich habe dieses Muster für Transfer- und Lieferbuchungen umgesetzt, bei denen der Routenpreis von den zwei Punkten abhängt, die ein Kunde auf der Karte wählt.",
      "Die API selbst ist gut dokumentiert; die eigentliche Entwicklungsarbeit steckt meist im Interaktionsdesign – eine kartenbasierte Auswahl schnell und klar auf einem kleinen Smartphone-Bildschirm zu machen – und in der Kontrolle der API-Kosten bei hohem Volumen.",
    ],
    sections: [
      {
        heading: "Typische Anwendungsfälle",
        blocks: [
          [
            "Auswahl von Abhol- und Zielorten für Transfer- oder Lieferbuchungen",
            "Adress-Autovervollständigung für Checkout- und Kontoformulare",
            "Filial- oder Servicegebietssuche mit Entfernungsfilter",
            "Routen- und Entfernungsberechnung für Preise, die von der Fahrtstrecke abhängen",
          ],
        ],
      },
      {
        heading: "Kosten und Performance",
        blocks: [
          [
            "Die Maps API rechnet pro Anfrage über mehrere separate APIs ab (Maps, Places, Directions). Ein Buchungsablauf, der bei jedem Tastendruck ohne Debouncing Autovervollständigungsanfragen auslöst, kann deshalb eine deutlich höhere Rechnung erzeugen als einer, der von Anfang an mit Request-Batching und Debouncing gebaut wurde.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Kann ich eine kostenlose Alternative wie Leaflet mit OpenStreetMap nutzen?",
        "Ja – Leaflet mit OpenStreetMap-Kacheln ist eine solide kostenlose Option für die einfache Kartendarstellung. Google Maps lohnt seinen Preis meist dann, wenn Sie die Places-Autovervollständigung und die Directions-/Routing-Daten brauchen, an die OpenStreetMap-basierte Werkzeuge nicht ganz heranreichen.",
      ],
      [
        "Wie halten Sie die Kosten der Maps API im Griff?",
        "Durch Debouncing der Autovervollständigungsanfragen, Caching von Geocoding-Ergebnissen bei wiederkehrenden Adressen und Nutzungskontingente bzw. Warnungen in der Google Cloud Console, damit eine aus dem Ruder laufende Integration keine unerwartete Rechnung erzeugt.",
      ],
      [
        "Kann die Karte Preise anhand der Entfernung berechnen?",
        "Ja – die Directions- oder Distance-Matrix-API liefert Streckenlänge und Fahrtdauer, die direkt in eine Preisberechnung für Transfer- oder Lieferbuchungen einfließen können.",
      ],
    ],
  },
  {
    slug: "stripe-payment-integration",
    title: "Stripe Zahlungsintegration | Justin Johnson",
    description: "Stripe-Integration für Checkout, Abo-Abrechnung und Webhook-Verarbeitung – so gebaut, dass fehlgeschlagene Zahlungen korrekt behandelt werden.",
    h1: "Stripe Zahlungsintegration",
    eyebrow: "Technologien",
    primaryKeyword: "Stripe Zahlungsintegration",
    secondaryKeywords: [
      "Stripe Entwickler",
      "Stripe Abo-Abrechnung",
      "Stripe Checkout Integration",
      "Stripe Webhooks verarbeiten",
    ],
    intro: [
      "Stripe übernimmt die schwierigen Teile von Zahlungen – PCI-Compliance, Kartenspeicherung, Betrugserkennung –, aber die Integrationsarbeit drumherum (Webhook-Verarbeitung, Abo-Status, Wiederherstellung fehlgeschlagener Zahlungen) macht den Großteil des eigentlichen Entwicklungsaufwands aus. Ein Checkout, der in einer Demo funktioniert, und einer, der mit einer abgelehnten Karte oder einem doppelt zugestellten Webhook umgehen kann, sind unterschiedlich viel Arbeit.",
      "Ich baue sowohl einmalige Checkout-Abläufe als auch Abo-Abrechnung, wobei die Webhook-Verarbeitung ein zentraler Teil der Integration ist und kein nachträglicher Gedanke.",
    ],
    sections: [
      {
        heading: "Was dazugehört",
        blocks: [
          [
            "Checkout-Ablauf – Stripe Checkout (gehostet) oder Elements (eingebettet), je nachdem, wie viel Kontrolle über die Oberfläche nötig ist",
            "Abo-Pläne, Upgrades, Downgrades und anteilige Verrechnung",
            "Webhook-Verarbeitung für erfolgreiche und fehlgeschlagene Zahlungen, Rückbuchungen und Ereignisse im Abo-Lebenszyklus",
            "Idempotenz, damit wiederholte Webhooks keine doppelten Datensätze erzeugen",
            "Abläufe zur Wiederherstellung fehlgeschlagener Zahlungen (Dunning) für Abo-Geschäftsmodelle",
          ],
        ],
      },
      {
        heading: "Warum Webhooks wichtiger sind als das Checkout-Formular",
        blocks: [
          [
            "Ein erfolgreicher Checkout im Frontend garantiert nicht, dass die Zahlung tatsächlich abgewickelt wurde – Webhooks sind der Weg, auf dem Stripe Ihr Backend zuverlässig darüber informiert, was wirklich passiert ist, einschließlich Ereignissen ohne Frontend-Entsprechung wie einer Abo-Verlängerung oder einer verzögerten Banküberweisung, die erst Tage später bestätigt wird. Korrekte Webhook-Verarbeitung hält Ihre Datenbank im Einklang mit der Realität.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Stripe Checkout oder Stripe Elements?",
        "Checkout (die gehostete Zahlungsseite von Stripe) für eine schnellere Umsetzung und weniger PCI-Umfang. Elements (eingebettete, individuell gestaltete Felder), wenn der Checkout vollständig auf Ihrer eigenen Domain bleiben und exakt zu Ihrem Design passen soll.",
      ],
      [
        "Wie prüfen Sie, dass Webhooks wirklich von Stripe stammen?",
        "Jeder Webhook wird vor der Verarbeitung anhand seiner Signatur mit dem Webhook-Secret von Stripe verifiziert – das verhindert, dass ein Angreifer gefälschte „Zahlung erfolgreich“-Ereignisse an Ihren Endpunkt sendet.",
      ],
      [
        "Was passiert, wenn eine Abo-Zahlung fehlschlägt?",
        "Das Dunning-System von Stripe versucht die Belastung automatisch nach einem Zeitplan erneut; die Integration wertet die entsprechenden Webhook-Ereignisse aus, um den Abo-Status zu aktualisieren und gegebenenfalls den Kunden zu benachrichtigen oder den Zugang bis zur Klärung einzuschränken.",
      ],
    ],
  },
  {
    slug: "vercel-deployment",
    title: "Vercel Deployment | Justin Johnson",
    description: "Vercel-Deployment für Next.js-Apps – Umgebungen, Preview-Deployments, eigene Domains und Edge-Konfiguration.",
    h1: "Vercel Deployment",
    eyebrow: "Technologien",
    primaryKeyword: "Vercel Deployment",
    secondaryKeywords: [
      "Next.js auf Vercel deployen",
      "Vercel vs. AWS",
      "Vercel Umgebungen einrichten",
      "Vercel Preview-Deployments",
    ],
    intro: [
      "Vercel wird vom Team hinter Next.js entwickelt, und das merkt man – Deployments unterstützen ISR, Edge Functions und Bildoptimierung ohne die zusätzliche Konfiguration, die ein allgemeiner Hoster erfordern würde. Für die meisten Next.js-Projekte ist es der reibungsloseste Weg vom git push zur Live-URL.",
      "Ich richte die Deployment-Pipeline, Umgebungsvariablen, eigene Domains und den Preview-Deployment-Workflow ein, sodass jeder Pull Request vor dem Merge seine eigene testbare URL erhält.",
    ],
    sections: [
      {
        heading: "Was ein sauberes Setup umfasst",
        blocks: [
          [
            "Getrennte Umgebungsvariablen für Produktion, Preview und Entwicklung",
            "Preview-Deployments für jeden Pull Request zur Prüfung vor dem Merge",
            "Konfiguration eigener Domains mit korrektem DNS und SSL",
            "Build- und Deployment-Benachrichtigungen, eingebunden in den Workflow des Teams",
            "Konfiguration von Edge- und Serverless-Funktionen, wo die App sie nutzt",
          ],
        ],
      },
      {
        heading: "Vercel vs. Self-Hosting",
        blocks: [
          [
            "Vercel tauscht etwas Kontrolle über die Infrastruktur gegen deutlich weniger Betriebsaufwand – keine Server, die gepatcht werden müssen, automatische Skalierung und native Unterstützung für Next.js-Funktionen. Self-Hosting auf AWS oder per Docker ist sinnvoller, wenn die Infrastruktur in einer bestimmten Umgebung laufen muss oder wenn die Preise von Vercel bei hohem Volumen für das Projekt relevant werden.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ist Vercel kostenlos?",
        "Vercel bietet einen kostenlosen Tarif für persönliche Projekte und kleine Websites; Produktivanwendungen mit echtem Traffic wechseln meist in einen kostenpflichtigen Tarif, der sich nach Nutzung richtet (Bandbreite, Funktionsausführung, Team-Plätze).",
      ],
      [
        "Kann ich auf Vercel eine eigene Domain nutzen?",
        "Ja – Domains werden direkt in den Projekteinstellungen hinzugefügt und die DNS-Einträge auf Vercel gerichtet; SSL-Zertifikate werden automatisch ausgestellt und erneuert.",
      ],
      [
        "Funktioniert Vercel auch für Projekte ohne Next.js?",
        "Ja, es unterstützt die meisten modernen Frameworks (Vite, Remix, statische Websites), aber die tiefste Funktionsintegration – ISR, Edge Middleware – ist speziell auf Next.js abgestimmt.",
      ],
    ],
  },
  {
    slug: "docker-deployment",
    title: "Docker Deployment | Justin Johnson",
    description: "Docker-basiertes Deployment für Node.js- und Next.js-Apps – containerisierte Builds, die in jeder Umgebung gleich laufen.",
    h1: "Docker Deployment",
    eyebrow: "Technologien",
    primaryKeyword: "Docker Deployment",
    secondaryKeywords: [
      "containerisiertes Next.js Deployment",
      "Docker für Node.js Apps",
      "Self-Hosted Deployment",
      "Docker CI/CD einrichten",
    ],
    intro: [
      "Docker verpackt eine Anwendung mit allem, was sie zum Laufen braucht – Abhängigkeiten, Laufzeitversion, Konfiguration – in einen Container, der sich auf dem Rechner eines Entwicklers, einem Staging-Server und in Produktion gleich verhält. Das ist vor allem dann wichtig, wenn die Infrastruktur nicht auf einer verwalteten Plattform wie Vercel laufen soll oder die App neben anderen Diensten in einer selbst gehosteten Umgebung betrieben wird.",
      "Ich richte mehrstufige Docker-Builds ein, die das finale Image klein halten, sowie die CI/CD-Pipeline, die es baut und deployt.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Mehrstufiges Dockerfile, das das Produktions-Image schlank hält (keine Dev-Abhängigkeiten im Ergebnis)",
            "Umgang mit Umgebungsvariablen und Secrets passend zur Zielplattform",
            "CI/CD-Pipeline, die den Container bei jedem Push baut, testet und deployt",
            "Health Checks und Neustart-Richtlinien für Zuverlässigkeit",
            "Reverse-Proxy- und SSL-Konfiguration beim Self-Hosting",
          ],
        ],
      },
      {
        heading: "Wann sich Docker lohnt",
        blocks: [
          [
            "Wenn das Ziel eine verwaltete Plattform ist, die den Build für Sie übernimmt (Vercel), ist Docker meist unnötiger Mehraufwand. Es lohnt sich beim Deployment auf eigene Server, beim Betrieb auf AWS ECS oder einer ähnlichen Container-Plattform oder wenn die App konsistent neben anderen containerisierten Diensten laufen muss.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Brauche ich Docker für eine Next.js-App?",
        "Nicht beim Deployment auf Vercel oder einer ähnlichen verwalteten Plattform, die die Build-Umgebung für Sie übernimmt. Es lohnt sich beim Self-Hosting, beim Deployment auf Container-Dienste von AWS/GCP oder wenn uneinheitliche lokale Umgebungen im Team ein wiederkehrendes Problem sind.",
      ],
      [
        "Wie halten Sie Docker-Images klein?",
        "Mit mehrstufigen Builds – Abhängigkeiten und der Build-Schritt laufen in einer Zwischenstufe, und nur das kompilierte Ergebnis plus Produktionsabhängigkeiten werden ins finale Image kopiert. Build-Werkzeuge und Dev-Abhängigkeiten bleiben so außen vor.",
      ],
      [
        "Unterstützen Docker-Deployments weiterhin CI/CD?",
        "Ja – eine Standard-Pipeline baut das Image, führt Tests dagegen aus, schiebt es in eine Registry und löst ein Deployment aus. Es ist derselbe automatisierte Ablauf wie bei jedem anderen Deployment-Ziel, nur containerisiert.",
      ],
    ],
  },
];
