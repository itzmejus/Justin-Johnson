import type { SeoPageTranslation } from "../types";

export const industryPagesDe2: SeoPageTranslation[] = [
  {
    slug: "bus-and-coach-booking-systems",
    title: "Buchungssysteme für Bus & Reisebus | Justin Johnson",
    description: "Buchungssysteme für Reisebus- und Minibusvermietung – Angebotsanfragen, routenbasierte Preise und Netzwerke über mehrere Städte.",
    h1: "Buchungssysteme für Bus & Reisebus",
    eyebrow: "Branchen",
    primaryKeyword: "Buchungssystem für Busvermietung",
    secondaryKeywords: [
      "Website für Reisebusvermietung",
      "Minibus Buchungssystem",
      "Entwickler für Gruppentransport-Buchung",
      "Website für Bus-Sitzplatzbuchung",
    ],
    intro: [
      "Buchungen für Reisebus- und Minibusvermietung passen oft nicht in einen einfachen Warenkorb mit Festpreisen – Gruppengröße, Route, Fahrzeugtyp und Fahrtdauer beeinflussen den Preis, und viele Buchungen beginnen als Angebotsanfrage statt als Sofort-Checkout. Ich habe das für Minibus-Netzwerke über mehrere Städte umgesetzt, die eine gemeinsame Infrastruktur für mehrere lokalisierte Städte-Websites nutzen.",
      "Das Muster, das hier gut funktioniert, ist ein konfigurationsgesteuertes Frontend – eine gemeinsame Codebasis, die mehrere städte- oder markenspezifische Websites aus einer einzigen Quelle der Wahrheit betreibt.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Angebotsanfrage für gruppen- und routenbasierte Preise",
            "Auswahl von Fahrzeugtyp und Kapazität",
            "Unterstützung mehrerer Städte oder Marken aus einer gemeinsamen Codebasis",
            "Buchungsbestätigung und Zuweisung von Fahrer und Fahrzeug",
            "Local-SEO-Struktur für städtespezifische Seiten",
          ],
        ],
      },
      {
        heading: "Netzwerke über mehrere Städte",
        blocks: [
          [
            "Für Anbieter in mehreren Städten hält eine gemeinsame, konfigurationsgesteuerte Codebasis die zentrale Buchungslogik einheitlich und lässt gleichzeitig jede Städte-Website tatsächlich eigenständige lokale Inhalte tragen – Details zum Einzugsgebiet, lokale Preise und standortspezifisches SEO –, statt die gesamte Anwendung pro Stadt zu duplizieren.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Unterstützt das sowohl Sofortbuchungen als auch Angebotsanfragen?",
        "Ja – für Routen und Fahrzeugtypen mit planbaren Preisen funktioniert die Sofortbuchung zum Festpreis; größere oder individuelle Gruppenanfragen laufen über eine Angebotsanfrage zu den Mitarbeitern, die manuell ein Angebot erstellen.",
      ],
      [
        "Kann ein System mehrere städtespezifische Websites betreiben?",
        "Ja – das ist das konfigurationsgesteuerte Muster aus Minibus-Netzwerken über mehrere Städte, bei dem jede Städte-Website dieselbe Buchungslogik und dasselbe Design-System nutzt, aber eigene Inhalte und eigenes Local SEO trägt.",
      ],
      [
        "Wie wird die Gruppengröße bei der Preisgestaltung berücksichtigt?",
        "Preisstufen oder Fahrzeugkapazitäten werden mit der Gruppengröße abgeglichen – automatisch bei Standardkonfigurationen oder über ein Angebot bei größeren oder ungewöhnlichen Gruppenanforderungen.",
      ],
    ],
  },
  {
    slug: "web-development-for-schools",
    title: "Webentwicklung für Schulen | Justin Johnson",
    description: "Schul-Websites mit Informationen zur Aufnahme, Neuigkeiten und Terminen sowie einem Elternportal, ausgerichtet auf den echten Schulbetrieb.",
    h1: "Webentwicklung für Schulen",
    eyebrow: "Branchen",
    primaryKeyword: "Webentwicklung für Schulen",
    secondaryKeywords: [
      "Schul-Website Entwickler",
      "Webdesign für Bildungseinrichtungen",
      "Schul-Website mit Elternportal",
      "Website für Schulanmeldung",
    ],
    intro: [
      "Die Website einer Schule hat zwei unterschiedliche Zielgruppen mit unterschiedlichen Bedürfnissen – interessierte Eltern, die sich über die Aufnahme informieren, und aktuelle Eltern und Schüler, die laufend Informationen brauchen (Termine, Ankündigungen, manchmal Noten oder Anwesenheit). Beide gut zu bedienen bedeutet meist einen klaren öffentlichen Bereich plus ein Portal mit sauberer Zugriffskontrolle.",
      "Das umfasst die öffentliche Website und bei Bedarf das darauf aufbauende Eltern- oder Lehrerportal.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Informationen zur Aufnahme und Anfrageformulare",
            "Seiten für Neuigkeiten, Termine und Ankündigungen",
            "Verzeichnis von Lehrkräften und Mitarbeitern",
            "Elternportal für Ankündigungen, Kalender oder schulische Informationen",
            "Content-Management, damit Mitarbeiter Neuigkeiten und Termine selbstständig pflegen können",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Private und freie Schulen, die eine leistungsfähigere Website als eine generische Vorlage brauchen – besonders solche, die ein wirklich nützliches Elternportal wollen statt eines gelegentlich hochgeladenen PDF-Newsletters.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Lässt sich das mit einer Schulverwaltungssoftware verbinden?",
        "Wenn die Software eine API bereitstellt, ja – ein Elternportal kann echte Daten (Anwesenheit, Noten, Stundenpläne) abrufen, statt einen separaten manuellen Aktualisierungsprozess zu erfordern.",
      ],
      [
        "Können Mitarbeiter Neuigkeiten und Termine ohne Entwickler aktualisieren?",
        "Ja – das ist gezielt als pflegbarer Inhalt angelegt, damit Routineaktualisierungen keinen Entwickler erfordern.",
      ],
      [
        "Ist das Elternportal sicher?",
        "Ja – der Zugang ist authentifiziert und pro Familie bzw. Schüler eingegrenzt, sodass Eltern nur Informationen zu ihren eigenen Kindern sehen.",
      ],
    ],
  },
  {
    slug: "school-management-software",
    title: "Schulverwaltungssoftware | Justin Johnson",
    description: "Individuelle Schulverwaltungssoftware für Anwesenheit, Kommunikation und Verwaltung – ausgerichtet darauf, wie Ihre Schule funktioniert.",
    h1: "Entwicklung von Schulverwaltungssoftware",
    eyebrow: "Branchen",
    primaryKeyword: "Schulverwaltungssoftware",
    secondaryKeywords: [
      "individuelles Schulverwaltungssystem",
      "Schülerverwaltungssystem Entwickler",
      "Verwaltungssoftware für Schulen",
      "Software zur Anwesenheitserfassung",
    ],
    intro: [
      "Standardsysteme zur Schülerverwaltung decken die üblichen Fälle ab, aber Schulen mit einem speziellen Verwaltungsablauf, einer besonderen Bewertungs- oder Berichtsstruktur oder einem ungewöhnlichen Schuljahreskalender arbeiten oft gegen die Annahmen eines generischen Systems statt mit ihnen.",
      "Ich entwickle individuelle Schulverwaltungstools, die auf die konkrete Lücke in der Verwaltung zugeschnitten sind – Anwesenheitserfassung, Elternkommunikation, individuelle Berichte –, statt unnötig ein komplettes etabliertes Schülerverwaltungssystem zu ersetzen.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Anwesenheitserfassung und -auswertung",
            "Werkzeuge für die Kommunikation zwischen Eltern und Lehrkräften",
            "Rollenbasierter Zugriff für Lehrkräfte, Verwaltung und Eltern",
            "Individuelle Berichte nach den konkreten Anforderungen der Schule",
            "Integration mit bestehenden Systemen, wo ein kompletter Ersatz nicht das Ziel ist",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Schulen mit einem so spezifischen Verwaltungsablauf, dass ein generisches Schülerverwaltungssystem nicht gut passt, oder Schulen, die ein gezieltes Werkzeug (Anwesenheit, Kommunikation) statt eines kompletten Systemersatzes brauchen.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ersetzen Sie unser bestehendes Schülerverwaltungssystem?",
        "Nicht unbedingt – oft ist ein gezieltes Werkzeug für eine konkrete Lücke (Anwesenheit, Kommunikation, Berichte), das sich in das bestehende System integriert, der bessere Umfang als ein kompletter Ersatz, der ein größeres und risikoreicheres Vorhaben ist.",
      ],
      [
        "Können Eltern und Lehrkräfte unterschiedliche Zugriffsrechte haben?",
        "Ja – rollenbasierte Berechtigungen steuern, was jede Nutzergruppe sehen und tun kann, abgestimmt auf die tatsächliche Personalstruktur Ihrer Schule.",
      ],
      [
        "Kann es individuelle Berichte erstellen?",
        "Ja, aufgebaut nach den konkreten Berichtsformaten, die Ihre Schule tatsächlich braucht, statt auf das beschränkt zu sein, was der Berichtsgenerator eines generischen Systems unterstützt.",
      ],
    ],
  },
  {
    slug: "web-development-for-law-firms",
    title: "Webentwicklung für Kanzleien | Justin Johnson",
    description: "Kanzlei-Websites, strukturiert nach Rechtsgebieten und darauf ausgelegt, Besucher mit einem konkreten rechtlichen Anliegen zu gewinnen.",
    h1: "Webentwicklung für Kanzleien",
    eyebrow: "Branchen",
    primaryKeyword: "Webentwicklung für Kanzleien",
    secondaryKeywords: [
      "Kanzlei-Website Entwickler",
      "Webdesign für Rechtsanwälte",
      "Website-Entwicklung für Juristen",
      "SEO-Website für Kanzleien",
    ],
    intro: [
      "Wer einen Anwalt sucht, steckt meist bereits in einer konkreten, oft belastenden Situation – eine klare, eigene Seite pro Rechtsgebiet, die genau dieses Anliegen anspricht, konvertiert besser als eine allgemeine Seite „Unsere Leistungen“. Vertrauenssignale zählen hier mehr als in den meisten Branchen, da Besucher eine Entscheidung mit echten persönlichen Folgen treffen.",
      "Das umfasst die Struktur und Inhaltsarchitektur der Website, aufgebaut nach tatsächlichen Unterschieden zwischen den Rechtsgebieten statt nach einer generischen Vorlage.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Eigene Seiten pro Rechtsgebiet, strukturiert für Nutzer und Suchmaschinen",
            "Anwaltsprofile mit Qualifikationen und Erfahrung",
            "Formulare für Mandatsanfragen oder Beratungstermine",
            "Inhalte, strukturiert nach den konkreten Fragen, nach denen potenzielle Mandanten suchen",
            "Local-SEO-Einrichtung für Kanzleien mit einem bestimmten regionalen Einzugsgebiet",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Kanzleien mit mehreren Rechtsgebieten, deren aktuelle Website sie als undifferenzierte Leistungsliste behandelt, sowie Einzelanwälte oder kleine Kanzleien, die eine Website brauchen, die glaubwürdig und konkret statt generisch wirkt.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Schreiben Sie die juristischen Inhalte selbst?",
        "Nein – Inhalte zu Rechtsgebieten und Fallkonstellationen sollten aus der Kanzlei oder von einem auf juristische Inhalte spezialisierten Autor stammen, angesichts der Anforderungen an Genauigkeit und Haftung. Ich baue Struktur, SEO und Darstellung rund um Inhalte, die die Kanzlei liefert oder prüft.",
      ],
      [
        "Kann jedes Rechtsgebiet eine eigene Seite erhalten?",
        "Ja, und das ist für die Sichtbarkeit in Suchmaschinen meist der stärkere Ansatz – eine eigene Seite pro Rechtsgebiet trifft die jeweilige Suchintention deutlich besser als eine einzige kombinierte Seite, die alles kurz abdeckt.",
      ],
      [
        "Wie gehen Sie auf der Website mit Mandantengeheimnis um?",
        "Ohne ausdrückliche Freigabe erscheinen keine konkreten Falldetails oder Mandanteninformationen auf der öffentlichen Website; Anfrageformulare sind der passende Kanal für alles, was die konkrete Situation eines potenziellen Mandanten betrifft.",
      ],
    ],
  },
  {
    slug: "web-development-for-construction-companies",
    title: "Webentwicklung für Bauunternehmen | Justin Johnson",
    description: "Websites für Bauunternehmen mit Projektportfolio, Leistungsseiten und Angebotsanfragen – gebaut für die Leadgenerierung.",
    h1: "Webentwicklung für Bauunternehmen",
    eyebrow: "Branchen",
    primaryKeyword: "Webentwicklung für Bauunternehmen",
    secondaryKeywords: [
      "Website für Bauunternehmen",
      "Webdesign für Handwerksbetriebe",
      "Website mit Bauprojekt-Portfolio",
      "Leadgenerierung für Bauunternehmen",
    ],
    intro: [
      "Die Website eines Bauunternehmens ist vor allem eine Frage von Vertrauen und Portfolio – potenzielle Auftraggeber wollen echte abgeschlossene Projekte sehen, die zu ihrem eigenen Vorhaben passen, bevor sie ein Angebot anfragen. Klare Leistungsseiten nach Projektart und ein leicht durchsuchbares Portfolio tun mehr für die Conversion als eine generische Unternehmensvorlage.",
      "Das umfasst Marketing-Website, Projektportfolio und Angebotsanfrage gemeinsam, da alle auf dasselbe Ziel der Leadgenerierung einzahlen.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Leistungsseiten nach Projektart (Wohnbau, Gewerbebau, Sanierung usw.)",
            "Projektportfolio mit Filterung nach Kategorie",
            "Angebotsformulare, die die Details erfassen, die zur Einschätzung eines Projekts nötig sind",
            "Team- und Qualifikationsseiten zum Vertrauensaufbau",
            "Local-SEO-Struktur für die Ausrichtung auf das Einzugsgebiet",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Bau- und Handwerksbetriebe, die sich auf Empfehlungen oder veraltete Websites verlassen, die ihre tatsächlich abgeschlossenen Projekte nicht zeigen – besonders Unternehmen mit mehreren unterschiedlichen Projektarten, die eigene, gezielte Seiten verdienen.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Lässt sich das Portfolio nach Projektart filtern?",
        "Ja – eine kategorisierte Filterung hilft potenziellen Auftraggebern, Beispiele zu finden, die zu ihrem konkreten Projekt passen, statt eine undifferenzierte Galerie durchzublättern.",
      ],
      [
        "Was sollte ein Angebotsformular abfragen?",
        "Genug Details, um die Anfrage sinnvoll einzuschätzen – Projektart, ungefähre Größe oder Umfang, Zeitrahmen, Standort –, ohne so lang zu sein, dass es vom Absenden abhält. Die richtige Balance hängt davon ab, wie das Vertriebsteam tatsächlich nachfasst.",
      ],
      [
        "Unterstützen Sie bei Local SEO für Einzugsgebiete?",
        "Ja – bei Unternehmen mit einem festgelegten regionalen Einzugsgebiet wird die Website im Rahmen der Umsetzung so strukturiert, dass sie diese lokale Sichtbarkeit unterstützt.",
      ],
    ],
  },
  {
    slug: "web-development-for-salons",
    title: "Webentwicklung für Salons | Justin Johnson",
    description: "Websites für Friseur-, Beauty- und Spa-Salons mit Leistungsübersicht, Profilen der Mitarbeiter und Online-Buchung – Mobile First.",
    h1: "Webentwicklung für Salons",
    eyebrow: "Branchen",
    primaryKeyword: "Webentwicklung für Salons",
    secondaryKeywords: [
      "Salon-Website Entwickler",
      "Spa Webdesign",
      "Friseur-Website mit Online-Buchung",
      "Kosmetikstudio Website",
    ],
    intro: [
      "Kunden von Salons und Spas recherchieren und buchen meist auf dem Smartphone, oft kurzfristig – eine klare Leistungsübersicht mit Preisen, leicht durchsuchbare Profile der Stylisten oder Therapeuten und eine schnelle Online-Buchung zählen hier mehr als ein aufwendiges Desktop-Erlebnis.",
      "Das umfasst Marketing-Website und Buchungsablauf, abgestimmt auf ein Geschäft, in dem Kunden oft eine bestimmte Leistung bei einer bestimmten Person buchen.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Leistungsübersicht mit Preisen und Dauer, leicht vom Personal zu aktualisieren",
            "Profilseiten der Stylisten oder Therapeuten",
            "Online-Buchung auf Basis der tatsächlichen Verfügbarkeit der Mitarbeiter",
            "Arbeitsgalerie für Salons, in denen ein visuelles Portfolio zählt (Haare, Nägel, Ästhetik)",
            "Mobile-First-Design, da die meisten Buchungen auf dem Smartphone stattfinden",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Salons und Spas, die sich auf die generische Profilseite einer Buchungsplattform verlassen statt auf eine eigene gebrandete Website, sowie Salons mit mehreren Stylisten, bei denen Kunden oft bei einer bestimmten Person buchen möchten.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Können Kunden bei einem bestimmten Stylisten buchen?",
        "Ja – die Buchung kann an die Verfügbarkeit einzelner Mitarbeiter gebunden werden, sodass Kunden, die einen bestimmten Stylisten wünschen, nur dessen tatsächlich freie Termine sehen.",
      ],
      [
        "Kann das Personal die Leistungsübersicht selbst aktualisieren?",
        "Ja – Leistungen, Preise und Dauer sind pflegbare Inhalte, sodass Routineaktualisierungen keinen Entwickler erfordern.",
      ],
      [
        "Unterstützen Sie Anzahlungen bei Buchungen?",
        "Ja, wenn der Salon eine Anzahlung oder Vorauszahlung verlangt, um Terminausfälle zu reduzieren – integriert über ein Payment-Gateway als Teil des Buchungsablaufs.",
      ],
    ],
  },
  {
    slug: "salon-booking-system-development",
    title: "Buchungssysteme für Salons | Justin Johnson",
    description: "Individuelle Buchungssysteme für Salons und Spas – mitarbeiterbezogene Verfügbarkeit, Leistungsdauer und Anzahlungen.",
    h1: "Entwicklung von Salon-Buchungssystemen",
    eyebrow: "Branchen",
    primaryKeyword: "Salon Buchungssystem",
    secondaryKeywords: [
      "Spa Terminbuchung Entwickler",
      "Terminplanungssoftware für Salons",
      "Beauty-Buchungsplattform Entwickler",
      "Buchung nach Verfügbarkeit der Stylisten",
    ],
    intro: [
      "Die Buchung im Salon hat eigene Rahmenbedingungen – unterschiedliche Leistungen dauern unterschiedlich lang, Kunden wünschen oft einen bestimmten Stylisten, und nicht wahrgenommene Termine sind echte Kosten, die Anzahlungen oder Stornierungsregeln begrenzen helfen. Ein dafür gebautes Buchungssystem bildet alle drei nativ ab, statt sie nur anzunähern.",
      "Das ist speziell die Buchungsengine – eigenständig oder als Teil einer kompletten Salon-Website.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Leistungsspezifische Dauer, damit der Kalender die tatsächlich benötigte Zeit pro Termin widerspiegelt",
            "Mitarbeiterbezogene Verfügbarkeit und Zuordnung von Leistungen",
            "Anzahlungen oder Vorauszahlungen, um Terminausfälle zu reduzieren",
            "Automatische Erinnerungen gegen verpasste Termine",
            "Admin-Ansicht zur Verwaltung des Tagesplans über alle Mitarbeiter",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Salons und Spas, die den Grenzen eines generischen Planungstools bei mitarbeiterbezogener Buchung und Leistungsdauer entwachsen – besonders solche mit wiederkehrenden Terminausfällen, die eine Anzahlungsregel lösen könnte.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Können unterschiedliche Leistungen unterschiedlich lange im Kalender stehen?",
        "Ja – die Dauer jeder Leistung wird explizit konfiguriert, sodass eine 90-minütige Farbbehandlung und ein 20-minütiger Haarschnitt den Kalender korrekt belegen, statt beide dieselbe Standardlänge zu erhalten.",
      ],
      [
        "Reduziert das Terminausfälle?",
        "Automatische Erinnerungen und – falls gewünscht – eine Anzahlungs- oder Stornierungsregel reduzieren Terminausfälle messbar im Vergleich zu gar keinem System; wie stark, hängt vom Geschäft und der gewählten Regel ab.",
      ],
      [
        "Kann es den gesamten Tagesplan mehrerer Stylisten verwalten?",
        "Ja – die Admin-Ansicht zeigt den kompletten Plan über alle Mitarbeiter hinweg, sodass Lücken oder Konflikte auf einen Blick erkennbar sind.",
      ],
    ],
  },
  {
    slug: "web-development-for-travel-agencies",
    title: "Webentwicklung für Reisebüros | Justin Johnson",
    description: "Websites für Reisebüros und Reiseveranstalter mit Reiseangeboten, Buchungsabläufen und Anfragen per WhatsApp.",
    h1: "Webentwicklung für Reisebüros",
    eyebrow: "Branchen",
    primaryKeyword: "Webentwicklung für Reisebüros",
    secondaryKeywords: [
      "Reisebüro-Website Entwickler",
      "Website für Reiseveranstalter",
      "Webdesign für Reisebuchungen",
      "Website für Ausflugsbuchungen",
    ],
    intro: [
      "Reisebuchungen weisen oft so viel Variation auf – Termine, Gruppengröße, Zusatzleistungen, individuelle Reiseverläufe –, dass ein starrer E-Commerce-Warenkorb nicht immer sauber passt. Ich habe das mit dem Produktmodell von Shopify als flexiblem Backend für Touren- und Ausflugsangebote umgesetzt, mit WhatsApp als alternativem Anfrageweg für Buchungen, die vor der Bestätigung mehr Abstimmung brauchen.",
      "Das umfasst Reise- oder Ausflugsangebote, Buchungs- oder Anfrageabläufe und die visuelle, bildstarke Präsentation, die Reiseinhalte meist brauchen.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Touren- und Angebotsseiten mit aussagekräftigen Bildern und Reiseverlauf",
            "Buchungsablauf mit Auswahl von Datum und Gruppengröße",
            "Anfrageweg per WhatsApp für individuelle oder komplexe Wünsche",
            "Unterstützung mehrerer Währungen für internationale Kunden",
            "Darstellung von Bewertungen oder Reise-Highlights – ausschließlich mit echten Inhalten",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Reisebüros und Reiseveranstalter, die Reiseerlebnisse direkt verkaufen – besonders solche, die mehr Kontrolle über Präsentation und Buchung wollen, als ein Eintrag auf einem Reiseportal eines Drittanbieters erlaubt.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Unterstützt das sowohl Sofortbuchungen als auch individuelle Anfragen?",
        "Ja – Standardangebote können sofort zum Festpreis gebucht werden, während individuelle oder Gruppenanfragen über WhatsApp oder ein Formular für ein maßgeschneidertes Angebot laufen.",
      ],
      [
        "Unterstützen Sie mehrere Währungen?",
        "Ja – wichtig für Reisebüros mit internationaler Kundschaft, die aus verschiedenen Ländern bucht.",
      ],
      [
        "Können wir echte Kundenbewertungen anzeigen?",
        "Ja – Bewertungen aus tatsächlich abgeschlossenen Buchungen können angezeigt werden. Erfundene oder Platzhalter-Bewertungen füge ich dagegen nicht hinzu, sowohl aus Prinzip als auch um Probleme mit Bewertungs-Schema bei Suchmaschinen zu vermeiden.",
      ],
    ],
  },
  {
    slug: "tour-booking-platform-development",
    title: "Tourenbuchungsplattformen | Justin Johnson",
    description: "Buchungsplattformen für Touren und Ausflüge mit terminbasierter Verfügbarkeit, Gruppenpreisen und Auswahl von Zusatzleistungen.",
    h1: "Entwicklung von Tourenbuchungsplattformen",
    eyebrow: "Branchen",
    primaryKeyword: "Tourenbuchungsplattform entwickeln",
    secondaryKeywords: [
      "Ausflugsbuchungssystem Entwickler",
      "Aktivitäten-Buchungsplattform",
      "Reservierungssystem für Touren",
      "Website für Safari-Buchungen",
    ],
    intro: [
      "Buchungen für Touren und Ausflüge hängen von terminbasierter Verfügbarkeit ab (eine Tour an bestimmten Tagen mit Kapazitätsgrenzen), von Preisen nach Gruppengröße und oft von optionalen Zusatzleistungen – ein Standard-Warenkorb bildet nichts davon ohne Anpassung nativ ab.",
      "Ich habe dieses Muster für Plattformen für Wüstensafaris und Ausflugsbuchungen in den VAE umgesetzt, wobei jede Tour als buchbare Ressource mit eigenem Kalender behandelt wird statt als statisches Produktangebot.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Terminbasierte Verfügbarkeit mit Kapazitätsgrenzen pro Termin",
            "Berechnung von Preisen nach Gruppengröße und pro Person",
            "Auswahl von Zusatzleistungen und Upgrades während der Buchung",
            "Buchungsbestätigung mit Abhol- oder Treffpunktdetails",
            "Admin-Ansicht zur Verwaltung der Kapazität über anstehende Termine",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Reiseveranstalter mit geplanten Ausflügen und festgelegter Kapazität pro Termin sowie Anbieter von Aktivitäten, die Buchungslogik jenseits eines einfachen Produktkatalogs brauchen.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wie wird die Kapazität pro Termin verwaltet?",
        "Jeder Termin hat eine eigene Kapazitätsgrenze, die mit eingehenden Buchungen sinkt, sodass das System eine Überbuchung einer bestimmten Tour automatisch verhindert, statt eine manuelle Nachverfolgung zu erfordern.",
      ],
      [
        "Können Preise nach Gruppengröße variieren?",
        "Ja – Preise pro Person, Gruppenrabatte oder Staffelpreise nach Gruppengröße lassen sich passend zum tatsächlichen Preismodell des Veranstalters konfigurieren.",
      ],
      [
        "Können Kunden während der Buchung Zusatzleistungen wählen?",
        "Ja – optionale Extras (Ausrüstung, Upgrades, Mahlzeiten) können im selben Buchungsablauf angeboten und bepreist werden, statt einen separaten Nachkauf zu erfordern.",
      ],
    ],
  },
  {
    slug: "web-development-for-small-businesses",
    title: "Webentwicklung für kleine Unternehmen | Justin Johnson",
    description: "Individuelle Websites für kleine Unternehmen – schnell, leicht zu pflegen und ausgerichtet auf die tatsächlichen Leistungen statt auf eine Vorlage.",
    h1: "Webentwicklung für kleine Unternehmen",
    eyebrow: "Branchen",
    primaryKeyword: "Webentwicklung für kleine Unternehmen",
    secondaryKeywords: [
      "Website für kleine Unternehmen",
      "bezahlbare individuelle Website",
      "Webdesign für Kleinunternehmen",
      "Website für lokale Unternehmen",
    ],
    intro: [
      "Kleine Unternehmen brauchen keine Enterprise-Software, aber eine generische Vorlage verkauft oft unter Wert, was das Unternehmen tatsächlich auszeichnet. Ziel ist hier eine Website, die schnell ist, sich für Inhaber oder Mitarbeiter wirklich einfach aktualisieren lässt und nach den echten Leistungen strukturiert ist statt nach Füllabschnitten aus einer Vorlage.",
      "Das ist bewusst die breiteste der Branchenseiten – der gemeinsame Nenner bei Projekten für kleine Unternehmen ist, den Umfang im Verhältnis zu dem zu halten, was das Unternehmen tatsächlich braucht, und nicht zu viel zu bauen.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Eine Website, strukturiert nach den tatsächlichen Leistungen des Unternehmens, nicht nach den Annahmen einer generischen Vorlage",
            "Inhalte, die Mitarbeiter oder Inhaber ohne Entwickler aktualisieren können",
            "Local-SEO-Grundlagen, damit das Unternehmen bei relevanten Suchen in der Nähe erscheint",
            "Kurze Ladezeiten, da kleine Budgets keine an langsame Seiten verlorenen Besucher verkraften",
            "Ein Kontakt- oder Buchungsweg, der dazu passt, wie Anfragen das Unternehmen tatsächlich erreichen sollen",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Jedes kleine Unternehmen, das den Grenzen eines DIY-Website-Baukastens entwachsen ist, oder eines, das sich ganz auf Social Media verlässt und eine richtige Website als Anker seiner Online-Präsenz und zur Unterstützung der [Sichtbarkeit in der lokalen Suche](resources/local-seo-website-development) möchte.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Lohnt sich eine individuelle Website gegenüber einem Baukasten wie Wix oder Squarespace?",
        "Das hängt vom Unternehmen ab – ein Baukasten ist für sehr einfache Anforderungen ein vernünftiger Anfang. Eine individuelle Website lohnt sich, sobald das Unternehmen etwas braucht, das eine Vorlage nicht gut kann (spezielle Buchungslogik, Integrationen, Performance), oder sobald die Geschwindigkeits- und SEO-Grenzen eines Baukastens echte Sichtbarkeit kosten.",
      ],
      [
        "Was kostet eine Website für ein kleines Unternehmen?",
        "Das skaliert mit dem Umfang – eine einfache Informationswebsite ist ein deutlich kleineres Projekt als eine mit Buchung, E-Commerce oder individuellen Funktionen. Der Umfang wird besprochen und vereinbart, bevor die Arbeit beginnt.",
      ],
      [
        "Kann ich die Website nach dem Launch selbst aktualisieren?",
        "Ja – Inhalte sind so angelegt, dass Routineaktualisierungen ohne Code möglich sind; für alles darüber hinaus steht die Website-Wartung zur Verfügung.",
      ],
    ],
  },
];
