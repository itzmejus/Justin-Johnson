import type { SeoPageTranslation } from "../types";

export const servicePagesDe2: SeoPageTranslation[] = [
  {
    slug: "saas-application-development",
    title: "SaaS-Entwicklung | Justin Johnson",
    description: "SaaS-Produktentwicklung vom MVP bis zur wartbaren mandantenfähigen Anwendung – Authentifizierung, Abrechnung und die zentralen Produktfunktionen.",
    h1: "SaaS-Entwicklung",
    eyebrow: "Leistungen",
    primaryKeyword: "SaaS-Entwicklung",
    secondaryKeywords: [
      "SaaS Entwickler beauftragen",
      "SaaS Produkt entwickeln",
      "SaaS MVP Entwicklung",
      "mandantenfähige SaaS Entwicklung",
      "Abo-basierte SaaS Anwendung",
    ],
    intro: [
      "Ein SaaS-Produkt braucht ein paar unverzichtbare Bausteine, bevor es Geld verlangen kann: Benutzerkonten, Abrechnung und eine Möglichkeit, die Daten eines Kunden von denen eines anderen zu trennen. Ich baue dieses Fundament parallel zu den eigentlichen Produktfunktionen, sodass das MVP eine echte mandantenfähige Anwendung ist und keine Demo, die neu gebaut werden muss, sobald der erste zahlende Kunde da ist.",
      "Ziel ist es, schnell etwas Echtes auszuliefern, ohne technische Schulden anzuhäufen, die die zweite Version des Produkts schwerer machen als die erste.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Eine Produktidee mit zahlenden Kunden validieren zu müssen, ohne zu viel zu bauen, bevor klar ist, ob sie gewollt ist",
            "Ein Prototyp ohne echtes Kontosystem, ohne Abrechnung und ohne Datentrennung zwischen Kunden",
            "Unsicherheit darüber, wie ein mandantenfähiges Datenmodell strukturiert sein muss, damit Kunden die Daten anderer nicht sehen",
            "Abo-Abrechnung einführen zu wollen, ohne ein Zahlungssystem von Grund auf zu bauen",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Authentifizierung und Kontoverwaltung",
            "Mandantenfähige Datenarchitektur mit sauberer Isolation",
            "Abo-Abrechnung über Stripe",
            "Zentrale Produktfunktionen, beschränkt auf das, was das Konzept beweist",
            "Admin-Ansichten zur Verwaltung von Kunden und Abonnements",
            "Einrichtung von Deployment und Monitoring",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Das MVP auf die Funktionen reduzieren, die die Kernannahme des Produkts tatsächlich testen",
            "Das mandantenfähige Datenmodell entwerfen – meist eine Mandanten- bzw. Organisations-ID in jeder Zeile, konsequent durchgesetzt",
            "Authentifizierung, Abrechnung und Kernfunktionen gemeinsam bauen, da sie voneinander abhängen",
            "Die Admin-Werkzeuge ergänzen, die für die Betreuung erster Kunden nötig sind – ohne komplettes internes Dashboard",
            "Launchen und den nächsten Ausbau anhand echter Nutzung statt Vermutungen priorisieren",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "Next.js / React",
            "Node.js",
            "PostgreSQL / Supabase",
            "Stripe-Abrechnung",
            "TypeScript",
            "Deployment über Vercel oder AWS",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Gründer mit einer validierten Idee, die ein echtes Produkt für zahlende Kunden brauchen, und bestehende SaaS-Produkte, die einen technischen Partner suchen, um ohne eigenes Entwicklungsteam weiter Funktionen zu entwickeln.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wie lange dauert die Entwicklung eines SaaS-MVP?",
        "Das hängt vollständig vom Umfang ab – ehrlich gesagt sollte der Zeitplan dadurch bestimmt werden, dass Funktionen auf das Minimum reduziert werden, das die Idee beweist, und nicht umgekehrt. Bei Umfang, der in Version eins nicht nötig ist, halte ich dagegen.",
      ],
      [
        "Wie setzen Sie Mandantenfähigkeit um?",
        "In der Regel mit einer gemeinsamen Datenbank, in der eine Mandanten- bzw. Organisations-ID in jeder Tabelle und jeder Abfrage durchgesetzt wird – einfacher zu betreiben als getrennte Datenbanken pro Kunde und für die allermeisten SaaS-Produkte ausreichend, bis sie eine Größe erreichen, die aus Compliance-Gründen eine Isolation erfordert.",
      ],
      [
        "Können Sie Stripe-Abrechnung in ein bestehendes Produkt integrieren?",
        "Ja – Abo-Pläne, nutzungsbasierte Abrechnung, Up- und Downgrade-Abläufe sowie Webhook-Verarbeitung für Zahlungsereignisse (fehlgeschlagene Zahlungen, Kündigungen) lassen sich ohne Neuentwicklung in eine bestehende App einbauen.",
      ],
      [
        "Entwickeln Sie auch die Marketing-Website?",
        "Ja, meist als separate Next.js-Route oder App neben dem Produkt mit Login, da die Marketing-Website schnell und indexierbar sein muss, die App selbst aber nicht.",
      ],
    ],
  },
  {
    slug: "crm-development-services",
    title: "CRM-Entwicklung | Justin Johnson",
    description: "Individuelle CRM-Entwicklung für Unternehmen, deren Vertriebs- oder Kundenprozess nicht in Standard-CRM-Software passt.",
    h1: "CRM-Entwicklung",
    eyebrow: "Leistungen",
    primaryKeyword: "CRM-Entwicklung",
    secondaryKeywords: [
      "individuelles CRM entwickeln lassen",
      "CRM System entwickeln",
      "CRM Softwareentwicklung",
      "individuelles Kundenmanagementsystem",
      "CRM Integration Entwicklung",
    ],
    intro: [
      "Standard-CRMs sind für einen generischen Vertriebsprozess gebaut. Wenn der tatsächliche Ablauf eines Unternehmens – wie Leads hereinkommen, wie sie qualifiziert werden, was nach einem Abschluss passiert – nicht zu dieser generischen Form passt, wird das CRM eher bekämpft als genutzt. Ein individuelles CRM wird um den Prozess herum gebaut, der bereits funktioniert, nicht umgekehrt.",
      "Ich entwickle sie als Webanwendungen mit eigener Datenbank, sodass die Daten vollständig im Besitz des Unternehmens bleiben, statt im Exportformat einer Drittanbieterplattform zu liegen.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Ein generisches CRM, das Umwege erfordert, weil es nicht zur tatsächlichen Arbeitsweise von Vertrieb oder Support passt",
            "Kundendaten verteilt auf Tabellen, E-Mails und ein CRM, dem niemand ganz vertraut",
            "Der Bedarf, CRM-Funktionen mit etwas zu kombinieren, das CRM-Plattformen schlecht können – Buchungen, Lagerbestand, individuelle Auswertungen",
            "Laufende Lizenzkosten pro Nutzer für ein CRM, das hauptsächlich für ein oder zwei Kernabläufe genutzt wird",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Lead- und Kontaktverwaltung, aufgebaut um die tatsächliche Vertriebspipeline",
            "Individuelle Pipeline-Phasen und Automatisierungsregeln",
            "Rollenbasierter Zugriff für Vertrieb, Support und Management",
            "Integration bestehender Tools (E-Mail, WhatsApp, Kalender)",
            "Auswertungen rund um die Kennzahlen, die für das Unternehmen zählen",
            "Datenimport aus dem bisherigen System (Tabelle, Export eines bestehenden CRM)",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Den aktuellen Prozess erfassen – Schritt für Schritt, wie aus einem Lead ein Kunde wird",
            "Datenmodell und Pipeline-Phasen um genau diesen Prozess herum entwerfen",
            "Zuerst die zentrale Kontakt- und Deal-Verwaltung bauen, dann Automatisierung und Integrationen ergänzen",
            "Bestehende Kundendaten migrieren",
            "Das Team schulen und Feedback einholen, bevor das Projekt als abgeschlossen gilt",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "React / Next.js",
            "Node.js",
            "PostgreSQL / Supabase",
            "WhatsApp Business API",
            "Rollenbasierte Authentifizierung",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Unternehmen mit einem Vertriebs- oder Kundenbetreuungsprozess, der so spezifisch ist, dass generische CRM-Software dagegen arbeitet – Immobilienmakler mit objektbezogenen Leads, Dienstleister mit wiederkehrenden Buchungen oder B2B-Teams mit mehrstufigen Freigabeprozessen.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Warum ein individuelles CRM statt Salesforce oder HubSpot?",
        "Standard-CRMs sind sinnvoll, wenn Ihr Prozess einer klassischen Vertriebspipeline nahekommt. Eine Individualentwicklung lohnt sich, wenn Sie für viele ungenutzte Funktionen bezahlen, Einschränkungen der Plattform umgehen müssen oder das CRM eng mit etwas Unternehmensspezifischem verzahnt sein soll (Buchungen, Lagerbestand, ein eigener Freigabeprozess).",
      ],
      [
        "Wie werden Kundendaten geschützt?",
        "Durch rollenbasierte Zugriffskontrolle, sodass jeder Nutzer nur sieht, was seine Rolle erfordert, durchgehend verschlüsselte Verbindungen und eine Datenbank auf Infrastruktur, die Sie kontrollieren, statt auf einer Drittanbieter-SaaS-Plattform.",
      ],
      [
        "Lässt es sich mit WhatsApp oder E-Mail verbinden?",
        "Ja – über die WhatsApp Business API für Nachrichten direkt aus einem Kontaktdatensatz und über eine E-Mail-Integration, die Korrespondenz automatisch Leads und Deals zuordnet.",
      ],
      [
        "Was passiert mit unseren bestehenden CRM-Daten?",
        "Sie werden im Rahmen des Projekts migriert – aus dem aktuellen System exportiert und Feld für Feld in das neue Schema übernommen, damit keine Historie verloren geht.",
      ],
    ],
  },
  {
    slug: "admin-dashboard-development",
    title: "Admin-Dashboard-Entwicklung | Justin Johnson",
    description: "Individuelle Admin-Dashboards und interne Tools – Datentabellen, Rollenrechte und Auswertungen, ausgerichtet auf die tatsächliche Arbeitsweise Ihres Teams.",
    h1: "Admin-Dashboard-Entwicklung",
    eyebrow: "Leistungen",
    primaryKeyword: "Admin-Dashboard-Entwicklung",
    secondaryKeywords: [
      "individuelles Dashboard entwickeln lassen",
      "interne Tools entwickeln",
      "React Admin Dashboard",
      "Daten-Dashboard Entwicklung",
      "Backoffice-Anwendung entwickeln",
    ],
    intro: [
      "Die meisten Produkte brauchen irgendwann einen Ort, an dem Mitarbeiter die Daten verwalten, die Kunden nicht sehen – Bestellungen, Nutzer, Inhalte, Konfiguration. Generische Admin-Panel-Generatoren decken einfaches CRUD ab, stoßen aber an Grenzen, sobald die Geschäftslogik spezifisch wird: eigene Freigabeprozesse, berechnete Felder, Berechtigungsregeln entlang Ihrer Organisationsstruktur.",
      "Ich entwickle diese als fokussierte interne Tools: schnell geladen, mit klaren Berechtigungsgrenzen und strukturiert nach den Aufgaben, die Mitarbeiter tatsächlich erledigen, statt nach einem Einheitsgenerator für Tabellen.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Mitarbeiter bearbeiten Daten direkt in der Produktivdatenbank, weil es keine geeignete Oberfläche dafür gibt",
            "Ein generischer Admin-Panel-Generator, der die tatsächliche Freigabe- oder Berechtigungslogik des Unternehmens nicht abbilden kann",
            "Kein Audit-Trail darüber, wer was geändert hat – wichtig, sobald mehr als eine Person Admin-Zugriff hat",
            "Auswertungsbedarf, den eine generische Tabellenansicht ohne manuelle Tabellenarbeit nicht beantworten kann",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Datentabellen mit Suche, Filterung und Sortierung",
            "Rollenbasierte Berechtigungen (Betrachter, Bearbeiter, Admin, eigene Rollen)",
            "Formulare zum Anlegen und Bearbeiten von Datensätzen mit Validierung",
            "Audit-Logging für sensible Änderungen",
            "Auswertungsansichten und Exporte",
            "Massenaktionen, wo der Arbeitsablauf sie erfordert",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Die Aufgaben auflisten, die Mitarbeiter erledigen müssen – nicht nur die Tabellen, die sie sehen müssen",
            "Berechtigungsrollen danach entwerfen, wer tatsächlich was tun muss",
            "Zuerst die zentralen Datenansichten bauen, dann die darauf aufbauenden Abläufe",
            "Audit-Logging für alles ergänzen, was Kunden oder Geld betrifft",
            "Mit den Mitarbeitern testen, die es tatsächlich nutzen werden, bevor es als fertig gilt",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "React / Next.js",
            "TypeScript",
            "PostgreSQL / Supabase",
            "Rollenbasierte Authentifizierung",
            "Tailwind CSS",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Jedes Produkt, bei dem Mitarbeiter Daten bereits direkt über die Datenbank oder über ein generisches Tool verwalten, das nicht zum tatsächlichen Ablauf passt – Bestellverwaltung, Inhaltsmoderation, Support-Werkzeuge, internes Reporting.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Warum keinen No-Code-Admin-Panel-Baukasten nutzen?",
        "No-Code-Tools sind ein vernünftiger Ausgangspunkt für einfaches CRUD. Sie geraten meist an Grenzen, sobald individuelle Geschäftslogik, komplexe Berechtigungsregeln oder ein Ablauf gebraucht werden, der nicht in ein generisches Tabellen-und-Formular-Muster passt – ab diesem Punkt ist ein maßgeschneidertes Dashboard weniger fehleranfällig.",
      ],
      [
        "Können Sie das auf unserer bestehenden Datenbank aufbauen?",
        "Ja – das Dashboard verbindet sich mit Ihrem bestehenden Schema, statt einen separaten Datenspeicher zu verlangen, solange das Schema die nötigen Abfragen unterstützt (und wenn nicht, weise ich darauf hin).",
      ],
      [
        "Wie gehen Sie mit unterschiedlichen Berechtigungsstufen um?",
        "Mit rollenbasierter Zugriffskontrolle entlang Ihrer tatsächlichen Organisationsstruktur – zum Beispiel dürfen Support-Mitarbeiter Tickets ansehen und aktualisieren, aber nur Manager Erstattungen veranlassen –, durchgesetzt sowohl in der Oberfläche als auch auf API-Ebene.",
      ],
      [
        "Ist das eine separate App neben unserem Hauptprodukt?",
        "In der Regel ja – getrennt vom kundenseitigen Produkt deployt und authentifiziert, damit es sich unabhängig weiterentwickeln kann und nicht öffentlich erreichbar ist.",
      ],
    ],
  },
  {
    slug: "custom-web-application-development",
    title: "Individuelle Webanwendungen | Justin Johnson",
    description: "Individuelle Webanwendungen, entwickelt rund um einen konkreten Geschäftsprozess, für den Standardsoftware nicht passt.",
    h1: "Individuelle Webanwendungsentwicklung",
    eyebrow: "Leistungen",
    primaryKeyword: "individuelle Webanwendungsentwicklung",
    secondaryKeywords: [
      "maßgeschneiderte Webanwendung entwickeln lassen",
      "Individualsoftware Entwicklung",
      "Web-App Entwickler beauftragen",
      "maßgeschneiderte Webanwendung",
      "individuelle Unternehmenssoftware",
    ],
    intro: [
      "Manche Prozesse sind so spezifisch, dass kein Standardprodukt ohne große Kompromisse passt – Buchungssysteme mit ungewöhnlichen Regeln, interne Tools für einen bestimmten Betriebsablauf, Marktplätze, die zwei bestimmte Nutzergruppen zusammenbringen. In solchen Fällen ist eine individuell entwickelte Anwendung langfristig die verlässlichere Antwort, als ein generisches SaaS-Produkt passend zu biegen.",
      "Dies ist die breiteste der Leistungsseiten, weil sich die Arbeit von Projekt zu Projekt tatsächlich unterscheidet – konstant bleibt der Prozess: den realen Ablauf verstehen, ein Datenmodell darum herum entwerfen und eine Oberfläche bauen, die Menschen gerne nutzen.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Ein Geschäftsprozess, der so spezifisch ist, dass keine Standardsoftware ohne erhebliche Kompromisse passt",
            "Manuelle Arbeit – Tabellen, E-Mail-Ketten, Telefonate –, die durch ein maßgeschneidertes Tool ersetzt werden könnte",
            "Der Bedarf an zweiseitiger Funktionalität (Marktplatz, Buchungsplattform), die generische Tools schlecht abbilden",
            "Der Wunsch, die Software vollständig zu besitzen, statt sie dauerhaft bei einem SaaS-Anbieter zu mieten",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Anforderungen und Ablaufanalyse, bevor Code geschrieben wird",
            "Datenmodell, entworfen um den konkreten Geschäftsprozess",
            "Full-Stack-Umsetzung – Frontend, Backend, Datenbank",
            "Drittanbieter-Integrationen nach Bedarf (Zahlungen, Karten, Messaging, E-Mail)",
            "Deployment und Übergabedokumentation",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Den aktuellen Prozess im Detail verstehen, einschließlich der Sonderfälle, die eine Standardisierung erschweren",
            "Ein Datenmodell entwerfen, das diesen Prozess genau abbildet, keine generische Annäherung",
            "In Etappen bauen und jeden Kernablauf validieren, bevor Nebenfunktionen hinzukommen",
            "Mit dem integrieren, was das Unternehmen bereits nutzt (Buchhaltungssoftware, Messaging, Kalender)",
            "Deployen und durch die ersten Wochen echter Nutzung begleiten",
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
            "Deployment über AWS oder Vercel",
            "Projektspezifische Drittanbieter-APIs",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Unternehmen, deren zentraler Betriebsablauf so spezifisch ist, dass sie generische Software bereits ausprobiert haben und ihr entwachsen sind, sowie Gründer, bei denen die Software selbst das Geschäft ist und nicht nur ein Hilfsmittel dafür.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wie grenzen Sie eine Individualentwicklung ein, bevor Code geschrieben wird?",
        "Indem zuerst der tatsächliche Ablauf im Detail erfasst wird – wer macht was, in welcher Reihenfolge und wo treten Ausnahmen auf. Diese Analyse bildet die Grundlage für Datenmodell und Funktionsliste, statt mit einer Wunschliste an Features zu beginnen.",
      ],
      [
        "Worin unterscheidet sich das von Ihrer SaaS-Entwicklung?",
        "Überschneidende Fähigkeiten, andere Produktform – SaaS-Entwicklung betrifft speziell mandantenfähige Produkte, die mit Abo-Abrechnung an viele Kunden verkauft werden. Individuelle Webanwendungsentwicklung umfasst Tools für ein einzelnes Unternehmen, interne Software und zweiseitige Plattformen, die nicht zwingend als Abo-Produkt verkauft werden.",
      ],
      [
        "Was, wenn sich die Anforderungen während der Entwicklung ändern?",
        "Das ist bei den meisten Projekten zu erwarten – der Unterschied zwischen einer guten und einer schlechten Individualentwicklung liegt meist darin, wie sauber die Architektur geänderte Anforderungen aufnimmt. In Etappen mit funktionierender Software bei jedem Schritt zu bauen, hält das beherrschbar.",
      ],
      [
        "Bieten Sie nach dem Launch laufenden Support?",
        "Ja, über die Website-Wartung oder nach Bedarf für kleinere Änderungen, wenn sich die Anforderungen des Unternehmens weiterentwickeln.",
      ],
    ],
  },
  {
    slug: "api-development-integration",
    title: "API-Entwicklung & Integration | Justin Johnson",
    description: "REST-API-Design und Drittanbieter-Integrationen – Zahlungen, Karten, ERP-Systeme und Messaging-Plattformen zuverlässig mit Ihrer Anwendung verbunden.",
    h1: "API-Entwicklung & Integration",
    eyebrow: "Leistungen",
    primaryKeyword: "API-Entwicklung und Integration",
    secondaryKeywords: [
      "REST API Entwickler",
      "Drittanbieter API Integration",
      "API Integration Dienstleistung",
      "individuelle API Entwicklung",
      "Backend API Entwickler",
    ],
    intro: [
      "Anwendungen arbeiten selten isoliert – sie müssen mit Zahlungsanbietern, Kartendiensten, ERP-Systemen, Messaging-Plattformen und untereinander kommunizieren. Ich entwerfe REST-APIs von Grund auf und integriere Drittanbieter-APIs in bestehende Systeme, mit besonderem Augenmerk auf die Teile, die gerne übersprungen werden: Fehlerbehandlung, Wiederholungsversuche und was passiert, wenn der Drittanbieterdienst langsam oder nicht erreichbar ist.",
      "Gute API-Arbeit besteht vor allem darin, die Fehlerfälle richtig zu behandeln, denn der Normalfall ist selten die Stelle, an der Integrationen in Produktion tatsächlich brechen.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Gar keine API-Schicht – das Frontend spricht direkt mit der Datenbank, was weder gut skaliert noch sicher ist",
            "Eine Drittanbieter-Integration (Zahlungen, Versand, CRM), die zuverlässig eingebaut werden muss und nicht nur einmal im Test funktionieren soll",
            "Webhooks externer Dienste, die idempotent und sicher verarbeitet werden müssen",
            "Eine bestehende API ohne Dokumentation, gegen die andere kaum entwickeln können",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "REST-API-Design mit konsistenter Ressourcenbenennung und Statuscodes",
            "Authentifizierung (API-Keys, OAuth, JWT) passend zum Anwendungsfall",
            "Drittanbieter-Integration: Payment-Gateways, Karten, ERP-Systeme, Messaging-APIs",
            "Webhook-Verarbeitung mit Signaturprüfung und Idempotenz",
            "Fehlerbehandlung und Retry-Logik für unzuverlässige externe Dienste",
            "API-Dokumentation für interne Nutzung oder Partner",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Ressourcen und Operationen festlegen, die die API unterstützen muss – ausgehend davon, wie Frontend oder Partner sie tatsächlich nutzen",
            "Authentifizierung und Autorisierung zuerst bauen, vor jeglicher Geschäftslogik",
            "Endpunkte mit Eingabevalidierung und konsistenten Fehlerantworten umsetzen",
            "Bei Drittanbieter-Integrationen gegen deren Sandbox entwickeln und dokumentierte Fehlerfälle explizit behandeln",
            "Kritische Endpunkte unter Last testen und bei Bedarf Rate Limiting ergänzen",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "Node.js",
            "TypeScript",
            "REST / GraphQL",
            "Stripe, PayPal, HyperPay",
            "Google Maps API",
            "WhatsApp Business API",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Produkte, die eine richtige API-Schicht zwischen Frontend und Datenbank brauchen, Unternehmen, die ihre Systeme mit Zahlungsanbietern oder ERP-Systemen verbinden, und Teams, die eine bestimmte Drittanbieter-Integration sauber gebaut und getestet haben möchten, statt sie zusammenzuflicken.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "REST oder GraphQL für eine neue API?",
        "REST für die meisten Anwendungen – einfacher zu bauen, zu cachen und zu debuggen. GraphQL rechtfertigt seine Komplexität, wenn ein Frontend tatsächlich flexible, verschachtelte Datenstrukturen abfragen muss und Over-Fetching mit REST zu einem echten Performance-Problem wird.",
      ],
      [
        "Wie gehen Sie mit einer unzuverlässigen Drittanbieter-API um?",
        "Mit Retry-Logik inklusive Backoff für vorübergehende Fehler, Idempotenzschlüsseln, damit Wiederholungen keine doppelten Abbuchungen oder Datensätze erzeugen, und Monitoring, damit Fehler sichtbar werden, statt stillschweigend unterzugehen.",
      ],
      [
        "Können Sie Payment-Gateways wie Stripe oder HyperPay integrieren?",
        "Ja – Checkout-Abläufe, Abo-Abrechnung und Webhook-Verarbeitung für Zahlungsereignisse (erfolgreiche Zahlungen, Fehlschläge, Erstattungen, Rückbuchungen) mit Stripe, PayPal und HyperPay.",
      ],
      [
        "Dokumentieren Sie die API für andere Entwickler?",
        "Ja, in der Regel als OpenAPI-Spezifikation oder als schriftliche Referenz zu Endpunkten, Authentifizierung und erwarteten Request-/Response-Strukturen – nützlich für Ihr eigenes Team ebenso wie für Partner, die dagegen integrieren.",
      ],
    ],
  },
];
