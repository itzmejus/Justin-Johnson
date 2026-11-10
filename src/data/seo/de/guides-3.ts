import type { SeoPageTranslation } from "../types";

// Code blocks are inherited from the English pages (null keeps the English code and file-path caption).
export const guidePagesDe3: SeoPageTranslation[] = [
  {
    slug: "how-to-improve-core-web-vitals-in-nextjs",
    title: "Core Web Vitals in Next.js verbessern | Justin Johnson",
    description: "Praktische Maßnahmen für LCP, CLS und INP in einer Next.js-App – mit den eingebauten Optimierungswerkzeugen des Frameworks richtig eingesetzt.",
    h1: "So verbessern Sie die Core Web Vitals in Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "Core Web Vitals in Next.js verbessern",
    secondaryKeywords: [
      "Next.js LCP verbessern",
      "Next.js CLS beheben",
      "Next.js Performance Tutorial",
      "Next.js Lighthouse-Score",
    ],
    intro: [
      "Next.js gibt Ihnen die Werkzeuge für starke Core-Web-Vitals-Werte – aber nur, wenn sie bewusst eingesetzt werden. Diese Anleitung führt durch die wirkungsvollsten Maßnahmen, geordnet nach ihrem typischen Effekt.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Eine Next.js-App mit bereits ermitteltem Ausgangswert in Lighthouse oder PageSpeed Insights"]] },
      {
        heading: "Schritt 1: LCP mit next/image verbessern",
        blocks: [
          null,
          [
            "Das priority-Prop weist Next.js an, genau dieses Bild vorab zu laden statt per Lazy Loading – verwenden Sie es nur beim tatsächlich größten Bild im sichtbaren Bereich, nicht überall.",
          ],
        ],
      },
      {
        heading: "Schritt 2: CLS mit reserviertem Platz beheben",
        blocks: [
          [
            "next/image verlangt width und height (oder fill mit einem dimensionierten Container), wodurch der richtige Platz reserviert wird, bevor das Bild lädt – das verhindert Layout-Verschiebungen. Wenden Sie dieselbe Disziplin auf Anzeigen, Einbettungen und Webfonts an, letztere mit next/font.",
          ],
        ],
      },
      {
        heading: "Schritt 3: INP durch weniger clientseitiges JavaScript verbessern",
        blocks: [
          [
            "Setzen Sie „use client“-Grenzen so tief wie möglich im Komponentenbaum und nutzen Sie dynamische Imports für schwere, nicht kritische Client Components, damit sie den Main Thread bei der ersten Interaktion nicht blockieren.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "priority bei jedem Bild der Seite zu setzen, was den Zweck aushebelt, weil dann alles vorab geladen wird",
            "Webfonts ohne next/font zu laden, was Layout-Verschiebungen beim Schriftwechsel verursacht",
            "Große Drittanbieter-Skripte (Chat-Widgets, Analytics), die synchron im head geladen werden und das Rendering blockieren",
          ],
        ],
      },
      {
        heading: "Performance-Aspekte",
        blocks: [
          [
            "Sowohl mit Lighthouse (Labordaten) als auch mit dem Core-Web-Vitals-Bericht der Search Console (Felddaten) messen – beide können voneinander abweichen",
            "Zuerst den größten einzelnen Verursacher beheben und dann neu messen, statt viele Dinge gleichzeitig zu ändern",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Welche einzelne Maßnahme bringt am meisten?",
        "Bei den meisten Inhaltswebsites die korrekte Dimensionierung und Priorisierung des größten Bildes im sichtbaren Bereich, da LCP auf nicht optimierten Websites häufig der schlechteste der drei Core-Web-Vitals-Werte ist.",
      ],
      [
        "Verbessert Next.js die Core Web Vitals automatisch?",
        "Es stellt die Werkzeuge bereit (Bildoptimierung, Schriftoptimierung, Code-Splitting), wendet sie aber nicht für Sie an – eine schlecht gebaute Next.js-App kann trotzdem schlecht abschneiden.",
      ],
      [
        "Wie oft sollte ich neu messen?",
        "Nach jeder größeren Änderung und regelmäßig im Produktivbetrieb über die Felddaten der Search Console, da reale Bedingungen von Labortests abweichen.",
      ],
    ],
    howToSteps: [
      ["LCP mit next/image verbessern", "next/image mit dem priority-Prop für das größte Bild im sichtbaren Bereich verwenden."],
      ["CLS mit reserviertem Platz beheben", "Explizite Breite und Höhe für Bilder setzen und next/font für Schriften nutzen."],
      ["INP durch weniger Client-JavaScript verbessern", "Den Umfang von Client Components minimieren und nicht kritische Skripte verzögern."],
    ],
  },
  {
    slug: "how-to-optimize-nextjs-images",
    title: "Bilder in Next.js optimieren | Justin Johnson",
    description: "next/image richtig nutzen für automatische Skalierung, Formatumwandlung und Lazy Loading – inklusive Bildern von externen Quellen.",
    h1: "So optimieren Sie Bilder in Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "Bilder in Next.js optimieren",
    secondaryKeywords: [
      "next/image Tutorial",
      "Next.js Bildgrößen",
      "Next.js responsive Bilder",
      "Next.js externe Bilder",
    ],
    intro: [
      "next/image übernimmt Skalierung, Formatumwandlung und Lazy Loading automatisch, braucht aber die richtige Konfiguration – besonders für Bilder, die von einer externen Domain wie einem CMS oder CDN ausgeliefert werden.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Ein Next.js-Projekt", "Bild-Assets, lokal oder aus einer externen Quelle (CMS, CDN)"]] },
      {
        heading: "Schritt 1: Grundlegende Nutzung mit lokalen Bildern",
        blocks: [
          null,
          [
            "Wird ein lokales Bild importiert, kennt Next.js seine Abmessungen automatisch, sodass width und height nicht manuell gesetzt werden müssen.",
          ],
        ],
      },
      {
        heading: "Schritt 2: Externe Bilder konfigurieren",
        blocks: [
          null,
          [
            "Externe Bilder brauchen explizite width- und height-Props, da Next.js die Abmessungen der Datei nicht vorab lesen kann, und der Hostname muss aus Sicherheitsgründen in der next.config.js freigegeben sein.",
          ],
        ],
      },
      {
        heading: "Schritt 3: priority nur für das LCP-Bild verwenden",
        blocks: [
          [
            "Setzen Sie priority nur beim größten Bild im sichtbaren Bereich, um es vorab zu laden; alle anderen Bilder sollten standardmäßig per Lazy Loading geladen werden – genau das ist das Standardverhalten von next/image.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Fehler „hostname not configured“ – die externe Domain ist nicht in remotePatterns aufgeführt",
            "Layout-Verschiebungen trotz next/image – bei einem externen Bild fehlen width/height (oder fill mit dimensioniertem Elternelement)",
            "Bilder wirken unscharf – prüfen Sie, ob das sizes-Prop für responsive Layouts korrekt gesetzt ist, damit die richtige Auflösung angefordert wird",
          ],
        ],
      },
      {
        heading: "Performance-Aspekte",
        blocks: [
          [
            "priority sparsam einsetzen – nur beim tatsächlichen LCP-Bild",
            "sizes bei responsiven Bildern genau setzen, damit der Browser keine größere Datei anfordert als nötig",
            "Moderne Formate bevorzugen – next/image liefert automatisch WebP/AVIF aus, wo der Browser es unterstützt",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Muss ich Bilder manuell in WebP umwandeln?",
        "Nein – next/image liefert automatisch ein optimiertes, modernes Format aus, abhängig von der Unterstützung des anfragenden Browsers, ohne manuellen Umwandlungsschritt.",
      ],
      [
        "Warum braucht ein externes Bild explizite Breite und Höhe?",
        "Bei lokal importierten Dateien kann Next.js die Abmessungen automatisch lesen, bei einer externen Datei aber nicht vor dem Rendern – daher müssen sie explizit angegeben werden, um den richtigen Platz im Layout zu reservieren.",
      ],
      [
        "Was macht das fill-Prop?",
        "Es lässt das Bild sein Elternelement ausfüllen – nützlich für responsive Layouts, in denen sich die Bildgröße nach einem Container statt nach festen Pixelmaßen richten soll. Das Elternelement braucht dafür position: relative.",
      ],
    ],
    howToSteps: [
      ["next/image für lokale Bilder verwenden", "Lokale Bilder direkt importieren, damit die Abmessungen automatisch gelesen werden."],
      ["Externe Bilder konfigurieren", "Externe Hostnamen in der next.config.js freigeben und explizite Abmessungen setzen."],
      ["priority nur beim LCP-Bild setzen", "Nur das größte Bild im sichtbaren Bereich vorab laden."],
    ],
  },
  {
    slug: "how-to-protect-api-routes-in-nextjs",
    title: "API-Routen in Next.js absichern | Justin Johnson",
    description: "API-Routen und Route Handlers in Next.js absichern – Session-Validierung, Rate Limiting und Eingabevalidierung.",
    h1: "So schützen Sie API-Routen in Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "API-Routen in Next.js schützen",
    secondaryKeywords: [
      "Next.js API Authentifizierung",
      "Next.js Route Handlers absichern",
      "Next.js API Middleware Auth",
      "Next.js API Rate Limiting",
    ],
    intro: [
      "Eine API-Route ist direkt erreichbar, egal was das Frontend ausblendet – jede Route muss deshalb Identität und Berechtigungen des Aufrufers unabhängig prüfen, statt anzunehmen, dass eine Anfrage nur von Ihrem eigenen angemeldeten Frontend kommt.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Ein Next.js-Projekt mit bereits eingerichteter Authentifizierung", "Route Handlers (app/api/*/route.ts), die abgesichert werden sollen"]] },
      { heading: "Schritt 1: Die Session im Route Handler validieren", blocks: [null] },
      {
        heading: "Schritt 2: Autorisierung prüfen, nicht nur Authentifizierung",
        blocks: [
          [
            "Angemeldet zu sein ist nicht dasselbe, wie eine bestimmte Aktion ausführen zu dürfen – prüfen Sie, ob der Nutzer der Session tatsächlich Zugriff auf die angefragte Ressource hat (z. B. ob diese Bestellung zu diesem Nutzer gehört), bevor Daten zurückgegeben oder geändert werden.",
          ],
        ],
      },
      {
        heading: "Schritt 3: Eingaben validieren und Rate Limiting ergänzen",
        blocks: [
          [
            "Den Request-Body vor der Verwendung gegen ein Schema validieren (Zod ist eine gängige Wahl) und Rate Limiting für jeden Endpunkt ergänzen, der teuer ist oder missbraucht werden könnte (Login-Versuche, KI-API-Aufrufe, E-Mail-Versand).",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Anzunehmen, dass Auth-Prüfungen in der Middleware auch API-Routen abdecken – die matcher der Middleware müssen API-Pfade explizit einschließen, oder jede Route braucht eine eigene Prüfung",
            "Einer im Request-Body gesendeten Nutzer-ID zu vertrauen, statt sie aus der validierten Session abzuleiten",
            "Kein Rate Limiting bei teuren Operationen, sodass sie Missbrauch oder ausufernden Kosten offenstehen",
          ],
        ],
      },
      {
        heading: "Sicherheitsaspekte",
        blocks: [
          [
            "Vom Client gelieferten Kennungen bei Autorisierungsentscheidungen niemals vertrauen – die Identität immer aus der verifizierten Session ableiten",
            "Bei Auth-Fehlern generische Fehlermeldungen zurückgeben – nicht verraten, ob eine Nutzer-ID existiert",
            "Fehlgeschlagene Authentifizierungen für das Monitoring protokollieren, ohne sensible Nutzdaten mitzuloggen",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Reicht Middleware aus, um API-Routen zu schützen?",
        "Nur wenn ihr matcher die API-Pfade explizit abdeckt – viele Middleware-Konfigurationen sind mit Blick auf Seiten geschrieben und schließen /api-Routen versehentlich aus, sodass diese ungeprüft bleiben.",
      ],
      [
        "Wie ergänze ich Rate Limiting?",
        "Anfragen pro Nutzer oder IP über ein Zeitfenster zählen – bei kleinem Umfang mit einem schlanken In-Memory-Ansatz, oder mit einem dedizierten Dienst (etwa dem Rate Limiter von Upstash) für alles, was über mehrere Serverless-Instanzen läuft.",
      ],
      [
        "Sollten Fehlermeldungen verraten, was schiefgelaufen ist?",
        "Bei Authentifizierungs- und Autorisierungsfehlern sollten Meldungen generisch bleiben – detaillierte Fehlermeldungen können einem Angreifer nützliche Informationen liefern, etwa ob ein bestimmtes Nutzerkonto existiert.",
      ],
    ],
    howToSteps: [
      ["Die Session validieren", "Die Session des Aufrufers in jeder API-Route unabhängig prüfen."],
      ["Autorisierung prüfen", "Bestätigen, dass der angemeldete Nutzer auf die konkrete Ressource zugreifen darf."],
      ["Eingaben validieren und Rate Limiting ergänzen", "Request-Bodies validieren und sensible Endpunkte mit Rate Limiting versehen."],
    ],
  },
  {
    slug: "how-to-add-google-maps-to-nextjs",
    title: "Google Maps in Next.js einbinden | Justin Johnson",
    description: "Eine interaktive Google-Maps-Karte in eine Next.js-App einbinden – clientseitig geladen und mit korrekt eingeschränktem API-Key.",
    h1: "So binden Sie Google Maps in Next.js ein",
    eyebrow: "Anleitungen",
    primaryKeyword: "Google Maps in Next.js einbinden",
    secondaryKeywords: [
      "Next.js Google Maps Integration",
      "Google Maps React-Komponente",
      "Next.js Kartenkomponente Tutorial",
      "Google Maps API-Key einrichten",
    ],
    intro: [
      "Google Maps ist von Natur aus interaktiv, daher muss die Kartenkomponente selbst eine Client Component sein – diese Anleitung zeigt, wie Sie sie korrekt laden und den API-Key sicher halten.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Ein Google-Cloud-Projekt mit aktivierter Maps JavaScript API", "Ein auf Ihre Domain eingeschränkter API-Key"]] },
      {
        heading: "Schritt 1: Den API-Key absichern",
        blocks: [
          [
            "Schränken Sie den API-Key in der Google Cloud Console unter „Application restrictions“ auf die Domain(s) Ihrer Website ein und begrenzen Sie ihn auf die Maps-APIs, die Sie tatsächlich nutzen – das verhindert Missbrauch, falls der Key im clientseitigen Code sichtbar ist, was bei einer im Browser gerenderten Karte zwangsläufig der Fall ist.",
          ],
        ],
      },
      { heading: "Schritt 2: Die Karte in einer Client Component laden", blocks: [null] },
      {
        heading: "Schritt 3: In einer serverseitig gerenderten Seite verwenden",
        blocks: [
          [
            "Der Rest der Seite – umgebende Inhalte, Metadaten – wird wie gewohnt serverseitig gerendert; nur die Kartenkomponente selbst braucht „use client“, da sie als einziger Teil Browser-APIs benötigt.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Die Karte lädt nicht und zeigt „RefererNotAllowedMapError“ – die Domain-Einschränkungen des API-Keys umfassen die aktuelle Domain nicht (einschließlich localhost während der Entwicklung)",
            "Der Kartencontainer wird mit einer Höhe von null gerendert – der Container braucht eine explizite Höhe, da die Karte keinen natürlichen Inhalt hat, an dem sie ihre Größe ausrichten könnte",
            "Abrechnungsfehler – Google Maps verlangt ein mit dem Projekt verknüpftes Abrechnungskonto, auch innerhalb des kostenlosen Nutzungskontingents",
          ],
        ],
      },
      {
        heading: "Performance-Aspekte",
        blocks: [
          [
            "Die Kartenkomponente unterhalb des sichtbaren Bereichs per dynamischem Import mit ssr: false nachladen, da sie ohnehin nur clientseitig läuft und das erste Rendern nicht blockieren sollte",
            "Autovervollständigung oder Suche während der Eingabe per Debouncing drosseln, um übermäßige API-Anfragen zu vermeiden",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ist es sicher, den Maps-API-Key im Client-Code offenzulegen?",
        "Ja, solange er in der Google Cloud Console korrekt auf Domains (HTTP-Referrer) und bestimmte APIs eingeschränkt ist – der Key ist für browserbasierte Karten ohnehin öffentlich gedacht, und genau die Einschränkungen verhindern Missbrauch.",
      ],
      [
        "Kann ich stattdessen eine kostenlose Alternative verwenden?",
        "Leaflet mit OpenStreetMap-Kacheln ist eine kostenlose Option für die einfache Kartendarstellung, ohne Places-Autovervollständigung oder Directions-Daten von Google – einen ausführlicheren Vergleich finden Sie auf der Seite zur Google Maps API Integration.",
      ],
      [
        "Warum muss die Karte eine Client Component sein?",
        "Die Maps JavaScript API ist von Natur aus interaktiv und läuft im Browser – sie lässt sich nicht serverseitig rendern, daher braucht jede Komponente, die sie nutzt, „use client“.",
      ],
    ],
    howToSteps: [
      ["Den API-Key absichern", "Den Key in der Google Cloud Console auf Ihre Domain und bestimmte Maps-APIs einschränken."],
      ["Die Karte in einer Client Component laden", "Die Kartenkomponente mit „use client“ kennzeichnen und mit einer Maps-React-Bibliothek rendern."],
      ["In einer serverseitig gerenderten Seite verwenden", "Die umgebende Seite serverseitig rendern und Client-Code auf die Karte selbst beschränken."],
    ],
  },
  {
    slug: "how-to-integrate-stripe-with-nextjs",
    title: "Stripe in Next.js integrieren | Justin Johnson",
    description: "Stripe Checkout in Next.js einrichten – inklusive Webhook-Handler, der Ihre Datenbank mit den echten Zahlungsereignissen synchron hält.",
    h1: "So integrieren Sie Stripe in Next.js",
    eyebrow: "Anleitungen",
    primaryKeyword: "Stripe in Next.js integrieren",
    secondaryKeywords: [
      "Stripe Next.js Checkout Tutorial",
      "Next.js Stripe Webhook",
      "Stripe Checkout in Next.js",
      "Next.js Abo-Abrechnung Tutorial",
    ],
    intro: [
      "Diese Anleitung behandelt die zwei Kernbausteine einer Stripe-Integration: das Erstellen einer Checkout-Session in einem Route Handler und die Verarbeitung des Webhooks, der bestätigt, was mit der Zahlung tatsächlich passiert ist.",
    ],
    sections: [
      { heading: "Voraussetzungen", blocks: [["Ein Stripe-Konto mit API-Keys", "Das npm-Paket stripe installiert", "Ein Next.js-Projekt mit App Router"]] },
      { heading: "Schritt 1: Eine Checkout-Session erstellen", blocks: [null] },
      {
        heading: "Schritt 2: Webhooks verarbeiten",
        blocks: [
          null,
          [
            "Der Webhook – nicht die Weiterleitung auf die success_url – ist die verlässliche Quelle der Wahrheit dafür, ob eine Zahlung tatsächlich abgeschlossen wurde. Ein Kunde könnte den Tab schließen, bevor die Weiterleitung greift, der Webhook kommt trotzdem an.",
          ],
        ],
      },
      {
        heading: "Schritt 3: Mit der Stripe CLI testen",
        blocks: [
          null,
          [
            "Damit werden echte Stripe-Ereignisse an Ihren lokalen Entwicklungsserver weitergeleitet, sodass Sie den Webhook-Handler testen können, ohne vorher zu deployen.",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "„Webhook signature verification failed“ – der rohe Request-Body muss vor dem Parsen als Text gelesen werden; wird er zuerst als JSON geparst, schlägt die Signaturprüfung fehl",
            "Die Bestellung wird als abgeschlossen markiert, bevor die Zahlung tatsächlich bestätigt ist – weil die success_url-Weiterleitung statt des Webhooks als Quelle der Wahrheit dient",
            "Doppelte Auftragsabwicklung – Webhooks können mehrfach zugestellt werden; nutzen Sie die Event-ID oder eine Idempotenzprüfung vor der Verarbeitung",
          ],
        ],
      },
      {
        heading: "Sicherheitsaspekte",
        blocks: [
          [
            "Die Webhook-Signatur immer prüfen – ohne sie könnte jeder ein gefälschtes „Zahlung erfolgreich“-Ereignis an Ihren Endpunkt senden",
            "Den Stripe-Secret-Key niemals an den Client weitergeben – nur der Publishable Key gehört in Frontend-Code",
            "Das Webhook-Secret in Umgebungsvariablen speichern, getrennt pro Umgebung (Test vs. Live)",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Sollte ich Stripe Checkout oder Payment Elements verwenden?",
        "Checkout (die gehostete Seite von Stripe) ist schneller umgesetzt und reduziert den PCI-Compliance-Umfang. Elements gibt volle Kontrolle über das Aussehen des Zahlungsformulars, wenn es vollständig auf Ihrer Domain bleiben soll.",
      ],
      [
        "Warum sind Webhooks wichtiger als die Weiterleitung?",
        "Die Weiterleitung greift nur, wenn der Browser des Kunden sie erfolgreich abschließt; der Webhook wird von Stripe in jedem Fall direkt an Ihren Server zugestellt und ist damit das verlässliche Signal dafür, ob die Zahlung tatsächlich erfolgreich war.",
      ],
      [
        "Wie teste ich Zahlungen ohne echtes Geld?",
        "Der Testmodus von Stripe bietet Testkartennummern (wie 4242 4242 4242 4242), die erfolgreiche und fehlgeschlagene Zahlungen simulieren, ohne echtes Geld zu bewegen.",
      ],
    ],
    howToSteps: [
      ["Eine Checkout-Session erstellen", "Eine API-Route bauen, die eine Stripe-Checkout-Session erstellt und ihre URL zurückgibt."],
      ["Webhooks verarbeiten", "Stripe-Webhook-Ereignisse prüfen und verarbeiten, um den Zahlungsabschluss zu bestätigen."],
      ["Mit der Stripe CLI testen", "Echte Stripe-Ereignisse zum Testen an Ihren lokalen Server weiterleiten."],
    ],
  },
];
