import type { SeoPageTranslation } from "../types";

export const technologyPagesDe1: SeoPageTranslation[] = [
  {
    slug: "nextjs-app-router",
    title: "Next.js App Router Entwicklung | Justin Johnson",
    description: "Expertise im Next.js App Router – verschachtelte Layouts, Route Groups, Server Components und wann er die bessere Wahl als der Pages Router ist.",
    h1: "Next.js App Router Entwicklung",
    eyebrow: "Technologien",
    primaryKeyword: "Next.js App Router",
    secondaryKeywords: [
      "Next.js App Router vs. Pages Router",
      "Next.js Layouts",
      "Next.js Route Groups",
      "App Router Entwickler",
      "verschachteltes Routing in Next.js",
    ],
    intro: [
      "Der App Router ist das Routing- und Rendering-Modell, auf dem Next.js seit Version 13 aufbaut – dateibasierte Routen, verschachtelte Layouts, die über Navigationen hinweg bestehen bleiben, und Server Components als Standard. Er verändert, wie eine Next.js-App strukturiert ist, nicht nur, wie URLs auf Dateien abgebildet werden.",
      "Ich nutze den App Router als Standard für neue Next.js-Projekte und helfe Teams bei der Einschätzung, ob sich die Migration einer bestehenden Pages-Router-App lohnt.",
    ],
    sections: [
      {
        heading: "Was der App Router verändert",
        blocks: [
          [
            "Komponenten sind standardmäßig Server Components und werden nur durch explizite Kennzeichnung zu Client Components",
            "Layouts werden verschachtelt und bleiben bei der Navigation bestehen, statt die gesamte Seitenhülle neu zu rendern",
            "Route Groups ermöglichen es, Routen zu organisieren, ohne die URL-Struktur zu beeinflussen",
            "Lade- und Fehlerzustände werden über eigene Dateikonventionen statt über manuellen State behandelt",
            "Data Fetching erfolgt direkt in Server Components mit async/await, ohne separate getServerSideProps-Funktion",
          ],
        ],
      },
      {
        heading: "Wo ich ihn einsetze",
        blocks: [
          [
            "Jedes neue Next.js-Projekt startet auf dem App Router – er ist das aktiv weiterentwickelte Modell mit der klarsten langfristigen Unterstützung. Bei bestehenden Pages-Router-Apps hängt die Migrationsentscheidung davon ab, ob die App noch aktiv wächst; eine stabile App ohne absehbare Feature-Roadmap ist eine Migration um ihrer selbst willen oft nicht wert.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Eine Komponente aus Gewohnheit mit „use client“ zu kennzeichnen, obwohl sie Server Component bleiben und weniger JavaScript ausliefern könnte",
            "Daten in einer Client Component mit useEffect zu laden, obwohl sie direkt in einer Server Component abgerufen werden könnten",
            "Keine Route Groups zu nutzen, um Layout-Belange zu trennen (Marketingseiten vs. App-Bereich mit Login)",
            "Data-Fetching-Muster uneinheitlich über die Codebasis zu mischen, sodass schwer nachvollziehbar ist, was wo läuft",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Sollte ich meine Pages-Router-App auf den App Router migrieren?",
        "Nur wenn die App aktiv erweitert wird und von Server Components, Streaming oder verschachtelten Layouts profitieren würde. Eine stabile App, die selten angefasst wird, ist eine Migration um ihrer selbst willen meist nicht wert – der Pages Router wird weiterhin vollständig unterstützt.",
      ],
      [
        "Muss ich alles in Server Components umwandeln?",
        "Nein – im App Router können Server und Client Components nebeneinander existieren. Interaktive Teile (Formulare, alles mit State oder Browser-APIs) bleiben Client Components; alles andere kann standardmäßig serverseitig gerendert werden.",
      ],
      [
        "Ist die Entwicklung mit dem App Router langsamer?",
        "Es gibt eine Lernkurve, wenn man an getServerSideProps und das alte Data-Fetching-Modell gewöhnt ist. Sobald die Aufteilung in Server und Client Components sitzt, geht die Entwicklung aber meist schneller – weniger Boilerplate beim Data Fetching, und Layouts vermeiden das erneute Laden gemeinsamer Daten bei jeder Navigation.",
      ],
    ],
  },
  {
    slug: "react-server-components",
    title: "React Server Components | Justin Johnson",
    description: "Umsetzung von React Server Components – Rendering auf dem Server, um clientseitiges JavaScript zu reduzieren, ohne Interaktivität dort zu verlieren, wo sie zählt.",
    h1: "React Server Components",
    eyebrow: "Technologien",
    primaryKeyword: "React Server Components",
    secondaryKeywords: [
      "RSC Entwicklung",
      "Server vs. Client Components",
      "React Server Components Performance",
      "Next.js Server Components",
    ],
    intro: [
      "Server Components werden vollständig auf dem Server gerendert und liefern ihren Code nie an den Browser aus – keine Hydration-Kosten, kein JavaScript-Bundle für diesen Teil der Oberfläche. Client Components sind diejenigen, die weiterhin Interaktivität brauchen: Formulare, Klick-Handler, alles mit State. Die Kunst liegt darin, zu entscheiden, wo diese Grenze verläuft.",
      "Das wirkt sich direkt auf die Ladeperformance aus – eine Seite, die überwiegend aus Server Components besteht, liefert nur einen Bruchteil des JavaScripts aus, den eine vollständig clientseitig gerenderte Variante bräuchte.",
    ],
    sections: [
      {
        heading: "Wie die Aufteilung funktioniert",
        blocks: [
          [
            "Server Components laden Daten direkt und rendern auf dem Server zu HTML, ohne clientseitigen JavaScript-Fußabdruck",
            "Client Components („use client“) übernehmen alles Interaktive – Formulare, Schalter, alles mit useState oder Browser-APIs",
            "Eine Server Component kann eine Client Component rendern, aber nicht direkt umgekehrt – Daten müssen als Props weitergegeben werden",
            "Server Components können direkt auf Backend-Ressourcen (Datenbanken, Dateisysteme, Secrets) zugreifen, ohne API-Schicht dazwischen",
          ],
        ],
      },
      {
        heading: "Wo die Grenze liegen sollte",
        blocks: [
          [
            "Die Grundregel: „use client“ so weit unten im Komponentenbaum wie möglich setzen. Eine Seite mit statischem Header, einer Liste von Einträgen und einem interaktiven Filter-Dropdown sollte nur das Dropdown als Client Component kennzeichnen – nicht die gesamte Seite.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Eine ganze Seite mit „use client“ zu kennzeichnen, weil ein kleiner Teil Interaktivität braucht",
            "Hooks oder Browser-APIs in einer Server Component verwenden zu wollen, was nicht unterstützt wird",
            "Zu übersehen, dass Context Provider Client Components sein müssen – zu weit oben platziert, zwingen sie mehr vom Baum auf den Client als beabsichtigt",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ersetzen Server Components clientseitiges React vollständig?",
        "Nein – sie sind eine Rendering-Strategie, die neben Client Components existiert. Alles, was wirklich interaktiv ist, läuft weiterhin im Browser; Server Components übernehmen nur die Teile, die das nicht müssen.",
      ],
      [
        "Können Server Components direkt aus einer Datenbank lesen?",
        "Ja, das ist einer ihrer größten Vorteile – es muss kein separater API-Endpunkt gebaut werden, nur um Daten für eine Seite bereitzustellen, die ausschließlich Ihr eigenes Frontend nutzt.",
      ],
      [
        "Funktioniert das auch außerhalb von Next.js?",
        "React Server Components benötigen ein Framework mit der passenden Infrastruktur (Streaming, die Server/Client-Grenze). Next.js ist derzeit die ausgereifteste Implementierung; andere Frameworks bauen die Unterstützung in unterschiedlichem Reifegrad aus.",
      ],
    ],
  },
  {
    slug: "nextjs-server-side-rendering",
    title: "Next.js Server-Side Rendering | Justin Johnson",
    description: "Server-Side Rendering in Next.js für Seiten, die aktuelle Daten pro Anfrage brauchen – korrekt umgesetzt für Geschwindigkeit und SEO.",
    h1: "Next.js Server-Side Rendering",
    eyebrow: "Technologien",
    primaryKeyword: "Next.js Server-Side Rendering",
    secondaryKeywords: [
      "Next.js SSR",
      "serverseitig gerenderte Next.js Seiten",
      "SSR vs. SSG in Next.js",
      "dynamisches Rendering in Next.js",
    ],
    intro: [
      "Server-Side Rendering bedeutet, dass das HTML einer Seite bei jeder Anfrage auf dem Server erzeugt wird – mit Daten, die zum Zeitpunkt der Anfrage aktuell sind. Das ist die richtige Wahl, wenn sich Inhalte tatsächlich pro Anfrage ändern – ein Dashboard, Suchergebnisse, alles Personalisierte – und die falsche, wenn die Inhalte für jeden Besucher gleich sind; dann ist statische Generierung schneller.",
      "Ich entscheide pro Route zwischen SSR und statischer Generierung, je nachdem, wie sich die Daten tatsächlich verhalten, statt für die ganze App ein einziges Muster vorzugeben.",
    ],
    sections: [
      {
        heading: "Wann SSR die richtige Wahl ist",
        blocks: [
          [
            "Inhalte, die pro Nutzer personalisiert sind (Dashboards, Kontoseiten)",
            "Such- oder Filterergebnisse, die von Query-Parametern abhängen",
            "Daten, die sich so häufig ändern, dass selbst kurzlebiges statisches Caching veraltete Informationen zeigen würde",
            "Seiten, die Informationen zum Anfragezeitpunkt brauchen – Header, Cookies, Geolokalisierung",
          ],
        ],
      },
      {
        heading: "SSR und SEO",
        blocks: [
          [
            "SSR-Seiten sind vollständig gerendertes HTML, wenn ein Crawler sie sieht – genau wie statische Seiten. Der SEO-Unterschied zwischen SSR und statischer Generierung betrifft nicht die Crawlbarkeit, sondern die Geschwindigkeit: Eine statisch generierte Seite kann sofort von einem CDN-Edge ausgeliefert werden; eine SSR-Seite muss bei jeder Anfrage gerendert werden, was Latenz hinzufügt, die Suchmaschinen bei Signalen zur Seitengeschwindigkeit berücksichtigen.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "SSR für Inhalte zu nutzen, die eigentlich für jeden Besucher gleich sind, obwohl statische Generierung schneller und günstiger wäre",
            "SSR-Antworten gar nicht zu cachen, obwohl partielles Caching (stale-while-revalidate) die Daten trotzdem ausreichend aktuell halten würde",
            "Beim Server-Rendering mehr Daten zu laden, als die Seite tatsächlich braucht, was die Time to First Byte verlangsamt",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ist SSR für SEO immer besser als statische Generierung?",
        "Nein – beide erzeugen vollständig gerendertes HTML, das Crawler lesen können. Statische Generierung ist für SEO meist der bessere Standard, gerade weil sie schneller ausgeliefert wird und die Seitengeschwindigkeit selbst ein Rankingfaktor ist.",
      ],
      [
        "Verlangsamt SSR die Website?",
        "Es fügt jeder Anfrage Renderzeit auf dem Server hinzu, verglichen mit vorab gebautem statischem HTML. Für wirklich dynamische Inhalte ist es aber immer noch deutlich schneller als clientseitiges Rendering, bei dem erst JavaScript heruntergeladen und ausgeführt werden muss, bevor etwas angezeigt wird.",
      ],
      [
        "Kann eine Seite SSR und statische Inhalte mischen?",
        "Ja – eine Seite kann überwiegend statische Inhalte rendern und einen kleineren dynamischen Bereich (etwa eine personalisierte Begrüßung) separat behandeln, sodass nicht die ganze Seite dynamisch werden muss, nur weil ein Teil es ist.",
      ],
    ],
  },
  {
    slug: "nextjs-static-site-generation",
    title: "Next.js Static Site Generation | Justin Johnson",
    description: "Static Site Generation in Next.js – vorab gebautes HTML zur Deploy-Zeit für die schnellstmöglichen Ladezeiten und die stärkste SEO-Grundlage.",
    h1: "Next.js Static Site Generation",
    eyebrow: "Technologien",
    primaryKeyword: "Next.js Static Site Generation",
    secondaryKeywords: [
      "Next.js SSG",
      "statische Generierung in Next.js",
      "generateStaticParams",
      "statische Next.js Seiten",
    ],
    intro: [
      "Statische Generierung baut das HTML einer Seite einmal zur Build-Zeit und liefert dieselbe Datei jedem Besucher von einem CDN-Edge aus – kein Server-Rendering pro Anfrage, keine Datenbankabfrage pro Besuch. Es ist die schnellste Rendering-Strategie, die Next.js bietet, und der richtige Standard für alle Inhalte, die sich nicht pro Nutzer ändern.",
      "Marketingseiten, Blogbeiträge, Dokumentation und die meisten SEO-relevanten Inhalte einer Website fallen in diese Kategorie.",
    ],
    sections: [
      {
        heading: "Wie es funktioniert",
        blocks: [
          [
            "Seiten werden zur Build-Zeit zu statischem HTML gerendert, nicht bei jeder Anfrage",
            "generateStaticParams teilt Next.js mit, welche dynamischen Routenparameter vorab gerendert werden sollen (z. B. jeder Blog-Slug)",
            "Das Ergebnis ist reines HTML/CSS/JS, das ohne Serverrechenleistung pro Anfrage über ein CDN ausgeliefert werden kann",
            "Inhaltsänderungen erfordern einen neuen Build, sofern nicht mit Incremental Static Regeneration kombiniert",
          ],
        ],
      },
      {
        heading: "Warum es für SEO so stark ist",
        blocks: [
          [
            "Statische Seiten sind das Schnellste, was man ausliefern kann – keine Renderlatenz, keine Cold Starts, kein Datenbank-Roundtrip. Da die Seitengeschwindigkeit ins Ranking einfließt und die Absprungrate direkt beeinflusst, ist statische Generierung meist der stärkste Ausgangspunkt für jede Inhaltsseite, deren Hauptziel organischer Suchtraffic ist.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Standardmäßig zu SSR zu greifen, obwohl sich die Inhalte gar nicht pro Anfrage ändern",
            "generateStaticParams bei dynamischen Inhaltsseiten nicht zu nutzen, sodass sie bei Bedarf statt zur Build-Zeit gerendert werden",
            "Zu vergessen, dass eine vollständig statische Website einen neuen Build (oder ISR) braucht, um Inhaltsänderungen anzuzeigen – eine häufige Überraschung für Teams, die ein klassisches CMS mit sofortiger Veröffentlichung gewohnt sind",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wie geht statische Generierung mit dynamischen Routen wie Blogbeiträgen um?",
        "generateStaticParams gibt die Liste der Parameterwerte zurück (z. B. jeden Beitrags-Slug), die Next.js zur Build-Zeit vorab rendern soll, und erzeugt so eine statische HTML-Datei pro Beitrag – die Routen sind im Code dynamisch, im Ergebnis aber statisch.",
      ],
      [
        "Was passiert, wenn sich Inhalte nach dem Build ändern?",
        "Eine vollständig statische Seite zeigt die Änderung erst nach dem nächsten Deployment, es sei denn, sie ist mit Incremental Static Regeneration eingerichtet. Damit kann Next.js eine Seite nach einem festgelegten Intervall oder auf Auslöser hin im Hintergrund neu generieren.",
      ],
      [
        "Eignet sich statische Generierung für große Websites mit Tausenden Seiten?",
        "Ja, mit generateStaticParams und – falls Build-Zeiten bei sehr großem Umfang zum Problem werden – ISR, um selten besuchte Seiten bei Bedarf zu generieren statt alle vorab. So bleiben Builds schnell, während trotzdem alles statisch ausgeliefert wird.",
      ],
    ],
  },
  {
    slug: "nextjs-incremental-static-regeneration",
    title: "Next.js Incremental Static Regeneration | Justin Johnson",
    description: "ISR in Next.js einrichten – die Geschwindigkeit statischer Seiten mit stets aktuellen Inhalten, ohne bei jeder Änderung die gesamte Website neu zu bauen.",
    h1: "Next.js Incremental Static Regeneration",
    eyebrow: "Technologien",
    primaryKeyword: "Next.js Incremental Static Regeneration",
    secondaryKeywords: [
      "Next.js ISR",
      "revalidate in Next.js",
      "On-Demand-Revalidierung",
      "ISR Caching-Strategie",
    ],
    intro: [
      "ISR ist der Mittelweg zwischen vollständig statisch und vollständig serverseitig gerendert: Seiten werden als statisches HTML ausgeliefert, aber Next.js generiert sie nach einem festgelegten Intervall oder auf Auslöser hin im Hintergrund neu. So bleiben Inhalte ausreichend aktuell, ohne die Kosten eines Renderings bei jeder einzelnen Anfrage.",
      "Zu diesem Muster greife ich bei Inhalten, die sich ändern, aber nicht bei jeder Anfrage – Produktkataloge, Preisseiten, alles, was aus einem CMS mit regelmäßigen Aktualisierungen kommt.",
    ],
    sections: [
      {
        heading: "Wie ISR funktioniert",
        blocks: [
          [
            "Eine Seite wird zur Build-Zeit statisch generiert, genau wie bei vollständiger SSG",
            "Ein revalidate-Intervall legt fest, wie lange die gecachte Version ausgeliefert wird, bevor Next.js sie im Hintergrund neu generiert",
            "Besucher während der Neugenerierung erhalten weiterhin die letzte gültige gecachte Version – niemand wartet auf ein langsames Rendering",
            "On-Demand-Revalidierung kann eine Neugenerierung sofort auslösen (z. B. per CMS-Webhook bei Veröffentlichung), statt auf das Intervall zu warten",
          ],
        ],
      },
      {
        heading: "Die richtige Revalidierungsstrategie wählen",
        blocks: [
          [
            "Zeitbasierte Revalidierung (alle N Sekunden) ist am einfachsten und funktioniert gut, wenn eine Seite Änderungen nicht sofort zeigen muss. On-Demand-Revalidierung, ausgelöst durch einen CMS-Webhook oder eine Admin-Aktion, lohnt den zusätzlichen Aufwand, wenn Veröffentlichungen sofort live gehen müssen statt erst beim nächsten Intervall.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Ein so kurzes revalidate-Intervall zu setzen, dass es sich praktisch wie SSR verhält – ohne den Vorteil des Cachings",
            "Keine On-Demand-Revalidierung für Redakteure einzurichten, die erwarten, dass Änderungen direkt nach der Veröffentlichung erscheinen",
            "Anzunehmen, dass ISR jeden Besucher sofort aktualisiert – der erste Besucher nach Ablauf sieht noch die alte Version, während im Hintergrund neu generiert wird",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Funktioniert ISR für Seiten, die zur Build-Zeit noch nicht existieren?",
        "Ja – Next.js kann neue statische Seiten beim ersten Aufruf bei Bedarf generieren (für Pfade, die nicht in generateStaticParams enthalten sind) und sie dann für nachfolgende Besucher gemäß der Revalidierungsstrategie cachen.",
      ],
      [
        "Worin unterscheidet sich ISR von SSR?",
        "SSR rendert bei jeder Anfrage. ISR rendert einmal, liefert das gecachte Ergebnis an alle aus und rendert erst nach Ablauf des Caches im Hintergrund neu – deutlich weniger Serverlast für Inhalte, die nicht sekundengenau aktuell sein müssen.",
      ],
      [
        "Kann ich die Revalidierung aus meinem CMS auslösen?",
        "Ja – die meisten Headless-CMS-Plattformen unterstützen Webhooks, die im Moment der Veröffentlichung eine On-Demand-Revalidierungs-Route in Next.js aufrufen können, sodass Seiten sofort aktualisiert werden, statt auf das Zeitintervall zu warten.",
      ],
    ],
  },
  {
    slug: "nextjs-authentication",
    title: "Next.js Authentifizierung | Justin Johnson",
    description: "Authentifizierung für Next.js-Apps – Sessions, geschützte Routen und rollenbasierter Zugriff, aufgebaut nach dem Modell des App Routers.",
    h1: "Next.js Authentifizierung",
    eyebrow: "Technologien",
    primaryKeyword: "Next.js Authentifizierung",
    secondaryKeywords: [
      "Next.js Auth einrichten",
      "NextAuth Alternative",
      "Session-Management in Next.js",
      "Next.js Routen schützen",
    ],
    intro: [
      "Authentifizierung in Next.js muss berücksichtigen, dass Server und Client Components, Middleware und API-Routen alle wissen müssen, wer der aktuelle Nutzer ist – das Modell des App Routers verändert, wie dieser Zustand geprüft wird, verglichen mit dem älteren Pages-Router-Muster.",
      "Ich setze Authentifizierung mit Session-Cookies um, die in Middleware und Server Components validiert werden – häufig mit Supabase Auth als Backend oder einer eigenen Node.js-Session-Schicht, wenn das Projekt volle Kontrolle braucht.",
    ],
    sections: [
      {
        heading: "Was ein solides Setup umfasst",
        blocks: [
          [
            "Session-Validierung in der Middleware, sodass geschützte Routen umleiten, bevor Seitencode ausgeführt wird",
            "Server Components, die den aktuellen Nutzer ohne clientseitigen Roundtrip lesen können",
            "Rollenbasierte Zugriffskontrolle für Routen und API-Endpunkte",
            "Sichere httpOnly-Session-Cookies statt Tokens im localStorage",
            "Passwort-Reset, E-Mail-Verifizierung und OAuth-Abläufe nach Bedarf",
          ],
        ],
      },
      {
        heading: "Routen schützen",
        blocks: [
          [
            "Die Next.js-Middleware läuft, bevor eine Anfrage eine Seite erreicht – damit ist sie der richtige Ort, um die Gültigkeit der Session zu prüfen und nicht angemeldete Nutzer umzuleiten. Das ist günstiger und sicherer, als den Auth-Status erst in der Seitenkomponente zu prüfen, nachdem das Rendering bereits begonnen hat.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Auth-Tokens im localStorage zu speichern, wo jedes Skript der Seite sie lesen kann und sie anfällig für XSS sind",
            "Die Authentifizierung nur auf dem Client zu prüfen, sodass das serverseitig gerenderte HTML kurzzeitig Inhalte offenlegt, die es nicht sollte",
            "Sessions in API-Routen nicht unabhängig zu validieren und sich allein darauf zu verlassen, dass das Frontend unerlaubte Aktionen ausblendet",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Nutzen Sie NextAuth.js oder bauen Sie eine eigene Authentifizierung?",
        "Das hängt vom Projekt ab – NextAuth (Auth.js) ist ein solider Standard für klassische E-Mail/Passwort- und OAuth-Abläufe. Bei Projekten, die bereits Supabase nutzen, ist die eingebaute Authentifizierung meist einfacher, da sie bereits mit derselben Datenbank und Row-Level Security verbunden ist.",
      ],
      [
        "Wie schützen Sie API-Routen?",
        "Jede API-Route validiert die Session unabhängig – ohne anzunehmen, dass eine Anfrage nur von einer angemeldeten Seite kommt, da API-Routen direkt aufgerufen werden können, egal was das Frontend ausblendet.",
      ],
      [
        "Unterstützt das rollenbasierte Berechtigungen?",
        "Ja – Rollen werden sowohl in der Middleware (um ganze Routenbereiche zu sperren) als auch auf API-Ebene (um bestimmte Aktionen zu sperren) geprüft, sodass Berechtigungsprüfungen nicht allein vom Ausblenden von UI-Elementen abhängen.",
      ],
    ],
  },
  {
    slug: "nextjs-seo",
    title: "Next.js SEO Umsetzung | Justin Johnson",
    description: "Next.js-SEO direkt in der Architektur – Metadata API, Sitemaps, strukturierte Daten und Rendering-Entscheidungen, die das Ranking unterstützen.",
    h1: "Next.js SEO Umsetzung",
    eyebrow: "Technologien",
    primaryKeyword: "Next.js SEO",
    secondaryKeywords: [
      "Next.js Metadata API",
      "Next.js strukturierte Daten",
      "Next.js Sitemap einrichten",
      "SEO-freundliches Next.js",
    ],
    intro: [
      "Das Rendering-Modell von Next.js ist selbst schon ein SEO-Vorteil gegenüber einer rein clientseitig gerenderten SPA – Inhalte stehen im initialen HTML, statt von der Ausführung von JavaScript abzuhängen. Darüber hinaus übernehmen die Metadata API, die eingebaute Sitemap-Generierung und die Bildoptimierung des Frameworks den Großteil der mechanischen SEO-Arbeit direkt im Code.",
      "Die Arbeit besteht darin, diese Bausteine pro Seite und Routensegment korrekt zu verbinden, statt SEO als separaten Durchgang nach der Entwicklung zu behandeln.",
    ],
    sections: [
      {
        heading: "Was Next.js nativ mitbringt",
        blocks: [
          [
            "generateMetadata für Titel, Beschreibungen und Open-Graph-Tags pro Seite",
            "Automatische Generierung von sitemap.xml und robots.txt über Dateikonventionen",
            "next/image für optimierte, korrekt dimensionierte Bilder mit Lazy Loading",
            "Server-Rendering oder statische Generierung, damit Inhalte ohne JavaScript-Ausführung vorhanden sind",
            "Streaming und Suspense für schnell wahrgenommene Ladezeiten",
          ],
        ],
      },
      {
        heading: "Was weiterhin bewusste Arbeit erfordert",
        blocks: [
          [
            "Strukturierte Daten (JSON-LD) entstehen nicht automatisch – sie müssen pro Seitentyp anhand dessen ergänzt werden, was tatsächlich auf der Seite steht",
            "Canonical-URLs müssen explizit gesetzt werden, besonders bei Seiten, die über mehrere Kombinationen von Query-Parametern erreichbar sind",
            "Interne Verlinkung – das übernimmt Next.js nicht; es ist eine Inhalts- und Architekturentscheidung",
            "Core Web Vitals hängen weiterhin davon ab, wie Sie die App schreiben, nicht nur vom gewählten Framework",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Garantiert Next.js gutes SEO?",
        "Nein – es beseitigt die größte technische Hürde (rein clientseitiges Rendering), aber Inhaltsqualität, Metadaten, strukturierte Daten und Seitenarchitektur müssen trotzdem richtig umgesetzt werden. Next.js macht gutes SEO erreichbar; automatisch passiert es nicht.",
      ],
      [
        "Wie setze ich Metadaten pro Seite?",
        "Über generateMetadata (dynamisch, z. B. anhand geladener Inhalte) oder einen statischen metadata-Export – beides Teil der Metadata API des App Routers. Jedes Routensegment kann eigene Titel, Beschreibungen und Open-Graph-Daten definieren.",
      ],
      [
        "Erstellt Next.js automatisch eine Sitemap?",
        "Es unterstützt eine sitemap.ts-Dateikonvention, die sitemap.xml zur Build- oder Anfragezeit aus Ihren Routendaten erzeugt – die Struktur muss weiterhin anhand Ihrer tatsächlichen Seiten definiert werden, der Generierungsmechanismus ist aber eingebaut.",
      ],
    ],
  },
  {
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance-Optimierung | Justin Johnson",
    description: "Performance-Arbeit für Next.js – Bundle-Größe, Rendering-Strategie und Bildverarbeitung, abgestimmt auf echte Verbesserungen der Core Web Vitals.",
    h1: "Next.js Performance-Optimierung",
    eyebrow: "Technologien",
    primaryKeyword: "Next.js Performance-Optimierung",
    secondaryKeywords: [
      "Next.js Geschwindigkeit optimieren",
      "Next.js Bundle-Größe",
      "Next.js Core Web Vitals",
      "Next.js App optimieren",
    ],
    intro: [
      "Next.js bringt starke Performance-Standards mit, aber eine echte Anwendung sammelt die üblichen Verdächtigen an – unnötig große Client-Bundles, nicht optimierte Bilder, Drittanbieter-Skripte, die auf jeder Seite geladen werden, ob sie gebraucht werden oder nicht. Optimierung bedeutet hier: zuerst messen, dann beheben, was tatsächlich langsam ist.",
      "Ich beginne meist mit einem Lighthouse- und Core-Web-Vitals-Audit, um den konkreten Engpass zu finden, statt generische Ratschläge anzuwenden, die auf die betreffende App vielleicht gar nicht zutreffen.",
    ],
    sections: [
      {
        heading: "Wo die Zeit meist verloren geht",
        blocks: [
          [
            "Übergroße clientseitige JavaScript-Bundles durch unnötige „use client“-Grenzen oder schwere Abhängigkeiten",
            "Nicht optimierte Bilder in voller Auflösung statt in der tatsächlich angezeigten Größe",
            "Drittanbieter-Skripte (Analytics, Chat-Widgets, Ad-Tags), die den Main Thread blockieren",
            "Layout-Verschiebungen durch Bilder oder Schriften ohne reservierten Platz",
            "Wasserfall-artiges Data Fetching, bei dem Anfragen nacheinander statt parallel laufen",
          ],
        ],
      },
      {
        heading: "Maßnahmen, die meist spürbar helfen",
        blocks: [
          [
            "„use client“-Grenzen so tief wie möglich im Komponentenbaum setzen",
            "next/image mit korrekter Dimensionierung und modernen Formaten (WebP/AVIF)",
            "next/font für selbst gehostete Schriften ohne Layout-Verschiebung",
            "Nicht kritische Drittanbieter-Skripte verzögert oder per Lazy Loading laden",
            "Datenabrufe parallelisieren, statt sie nacheinander abzuwarten",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Was prüfen Sie zuerst bei einer langsamen Next.js-Website?",
        "Einen Lighthouse-Durchlauf und den Network-Tab, um zu sehen, was das Rendering tatsächlich blockiert – übergroße JavaScript-Bundles und nicht optimierte Bilder sind nach meiner Erfahrung die beiden häufigsten Ursachen, ungefähr in dieser Reihenfolge.",
      ],
      [
        "Verbessert der Wechsel zum App Router automatisch die Performance?",
        "Er gibt Ihnen die Werkzeuge dafür (Server Components mit weniger JavaScript, Streaming), aber nur, wenn Sie sie richtig einsetzen – eine schlecht strukturierte App-Router-App kann genauso viel Client-JavaScript ausliefern wie eine Pages-Router-App.",
      ],
      [
        "Wie viel bringt Bildoptimierung tatsächlich?",
        "Auf realen Websites oft den größten Einzeleffekt – nicht optimierte Hero-Bilder gehören regelmäßig zu den größten Verursachern eines schlechten Largest-Contentful-Paint-Werts, einer der drei Core-Web-Vitals-Metriken.",
      ],
    ],
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance-Optimierung | Justin Johnson",
    description: "React-Performance-Optimierung für langsame, träge Oberflächen – unnötige Re-Renders, übergroße Bundles und aufwendige Berechnungen.",
    h1: "React Performance-Optimierung",
    eyebrow: "Technologien",
    primaryKeyword: "React Performance-Optimierung",
    secondaryKeywords: [
      "React Re-Renders optimieren",
      "React Memoization",
      "langsame React App beschleunigen",
      "React Bundle-Größe reduzieren",
    ],
    intro: [
      "React-Performance-Probleme sind fast immer eines von zwei Dingen: Komponenten rendern häufiger neu als nötig, oder es wird zu viel JavaScript heruntergeladen und geparst, bevor die App interaktiv wird. Beides lässt sich beheben, sobald genau sichtbar ist, was passiert – deshalb kommt Profiling vor jeder Optimierung.",
      "Ich nutze den eingebauten Profiler von React und die Browser-Entwicklertools, um den tatsächlichen Engpass zu finden, bevor ich zu Memoization oder Code-Splitting greife – geratene Performance-Maßnahmen erhöhen meist die Komplexität, ohne das eigentliche Problem zu lösen.",
    ],
    sections: [
      {
        heading: "Häufige Ursachen für Langsamkeit",
        blocks: [
          [
            "Bei jedem Render neue Objekt- oder Funktionsreferenzen als Props zu übergeben, was Memoization aushebelt",
            "Aufwendige Berechnungen, die bei jedem Render laufen, statt memoisiert zu werden",
            "Große Listen ohne Virtualisierung",
            "Context Provider, die bei jeder State-Änderung – auch bei unabhängigen – alle Konsumenten neu rendern lassen",
            "Übergroße Abhängigkeiten im initialen Bundle statt per Code-Splitting nachgeladen",
          ],
        ],
      },
      {
        heading: "Maßnahmen in der Reihenfolge, in der ich sie angehe",
        blocks: [
          [
            "Zuerst profilen – mit dem React DevTools Profiler herausfinden, welche Komponenten neu rendern und warum",
            "Unnötige Re-Renders an der Quelle beheben (Platzierung des States, stabile Props), bevor memo/useMemo zum Einsatz kommen",
            "Lange Listen virtualisieren, sodass nur sichtbare Einträge gerendert werden",
            "Routen und schwere Komponenten per Code-Splitting aufteilen, damit das initiale Bundle klein bleibt",
            "Große Context Provider aufteilen, damit unabhängige State-Änderungen keine Re-Render-Kaskaden auslösen",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Sollte ich alles in React.memo verpacken?",
        "Nein – Memoization hat eigene Kosten (Vergleich der Props bei jedem Render) und erhöht die Komplexität. Sie lohnt sich bei Komponenten, die häufig mit denselben Props rendern und deren Neu-Rendering teuer ist, nicht als pauschaler Standard.",
      ],
      [
        "Was ist der größte Performance-Fehler, den Sie sehen?",
        "State, der zu weit oben im Komponentenbaum liegt, sodass eine kleine UI-Änderung einen deutlich größeren Teilbaum neu rendern lässt als nötig. State näher an den Ort zu verschieben, an dem er tatsächlich genutzt wird, löst mehr Performance-Probleme als jede Memoization-Technik.",
      ],
      [
        "Beeinflusst TypeScript die Laufzeit-Performance?",
        "Nein – TypeScript wird vollständig wegkompiliert, bevor der Code läuft; die Typprüfung findet zur Build-Zeit statt und hat keinerlei Laufzeitkosten.",
      ],
    ],
  },
  {
    slug: "typescript-for-web-applications",
    title: "TypeScript für Webanwendungen | Justin Johnson",
    description: "TypeScript in der Praxis für produktive Web-Apps – strikte Typisierung, gemeinsame Typen für Frontend und Backend und wo Typen ihren Aufwand wert sind.",
    h1: "TypeScript für Webanwendungen",
    eyebrow: "Technologien",
    primaryKeyword: "TypeScript für Webanwendungen",
    secondaryKeywords: [
      "TypeScript im Produktivbetrieb",
      "typsichere Webentwicklung",
      "TypeScript Strict Mode",
      "TypeScript Best Practices",
    ],
    intro: [
      "Der Wert von TypeScript in einer echten Anwendung liegt nicht in den Typannotationen selbst, sondern in den Fehlern, die es vor dem Deployment abfängt, und in der Sicherheit beim Refactoring. Gut eingesetzt wird es zu einer Form von Dokumentation, die der Compiler tatsächlich durchsetzt, statt einer, die unbemerkt veraltet.",
      "Ich setze es standardmäßig in jedem Projekt ein, mit Strenge-Einstellungen, die darauf abgestimmt sind, ob die Codebasis neu ist oder schrittweise migriert wird.",
    ],
    sections: [
      {
        heading: "Wo Typen ihren Aufwand wert sind",
        blocks: [
          [
            "API-Grenzen – Request- und Response-Strukturen, die Frontend und Backend gemeinsam nutzen",
            "Formularvalidierung, damit ungültige Daten abgefangen werden, bevor sie die Geschäftslogik erreichen",
            "Alles, woran mehrere Entwickler arbeiten – Typen wirken hier als Vertrag zwischen ihnen",
            "Refactorings – der Compiler markiert jede Stelle, an der eine Änderung etwas bricht, statt sich auf manuelle Tests zu verlassen",
          ],
        ],
      },
      {
        heading: "Wo man es nicht übertreiben sollte",
        blocks: [
          [
            "Typen sind ein Werkzeug, kein Ziel – übermäßig raffinierte generische Typen, deren Lesen länger dauert als der Laufzeitfehler, den sie verhindern würden, lohnen sich nicht. Für den meisten Anwendungscode decken einfache Interfaces und Type-Aliase den Bedarf, ohne das Typsystem zu einer eigenen Wartungslast zu machen.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "„any“ als Abkürzung zu verwenden, um Fehler zum Schweigen zu bringen, statt die tatsächliche Datenstruktur zu modellieren",
            "Strict Null Checks nicht zu aktivieren, obwohl sie einen großen Teil echter Laufzeitfehler abfangen",
            "Typen zwischen Frontend und Backend zu duplizieren, statt eine einzige Quelle der Wahrheit zu teilen",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Lohnt sich TypeScript für ein kleines Projekt?",
        "Bei einem wirklich kleinen, kurzlebigen Projekt rechnet sich der Einrichtungsaufwand vielleicht nicht. Für alles, was über die Zeit gepflegt oder erweitert werden soll – also die meisten echten Projekte –, zahlt es sich schnell aus, sobald die Codebasis zu groß wird, um sie vollständig im Kopf zu behalten.",
      ],
      [
        "Verlangsamt TypeScript die Entwicklung?",
        "Anfangs leicht, besonders im Strict Mode. Nach dieser Eingewöhnung beschleunigt es die Arbeit meist – Autovervollständigung und Inline-Fehler fangen Fehler sofort ab, statt erst beim manuellen Testen oder in Produktion.",
      ],
      [
        "Was ist der Unterschied zwischen „any“ und „unknown“?",
        "„any“ nimmt einen Wert vollständig von der Typprüfung aus. „unknown“ verlangt weiterhin eine Eingrenzung (Prüfung des Typs), bevor der Wert verwendet werden kann – das ist sicherer, weil es Sie zwingt, die tatsächliche Datenstruktur zu behandeln, statt sie anzunehmen.",
      ],
    ],
  },
];
