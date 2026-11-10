import type { SeoPageTranslation } from "../types";

export const resourcePagesDe2: SeoPageTranslation[] = [
  {
    slug: "internal-linking-strategy",
    title: "Strategie für interne Verlinkung | Justin Johnson",
    description: "Gezielt aufgebaute interne Verlinkung – keine verwaisten Seiten, klare thematische Hierarchie und aussagekräftige Ankertexte.",
    h1: "Strategie für interne Verlinkung",
    eyebrow: "SEO & Performance",
    primaryKeyword: "interne Verlinkung",
    secondaryKeywords: [
      "interne Linkstruktur SEO",
      "Verlinkung der Seitenarchitektur",
      "verwaiste Seiten beheben",
      "Audit der internen Verlinkung",
    ],
    intro: [
      "Über interne Links entdecken Nutzer und Suchmaschinen Seiten, die nicht in der Hauptnavigation stehen, und über sie fließt Autorität von gut verlinkten Seiten zu neueren oder tiefer liegenden. Eine Website mit starken Inhalten, aber ohne gezielte interne Verlinkung, hat oft Seiten, die praktisch unsichtbar sind – nur über die direkte URL erreichbar, nie beim normalen Surfen.",
      "Das ist ebenso Architekturarbeit wie SEO – es geht darum, wie Kategorien, Hub-Seiten und einzelne Inhaltsseiten aufeinander verweisen sollten.",
    ],
    sections: [
      {
        heading: "So sieht eine durchdachte Struktur aus",
        blocks: [
          [
            "Jede Inhaltsseite verlinkt zurück auf ihre übergeordnete Kategorie- oder Hub-Seite",
            "Hub-Seiten verlinken auf ihre Unterseiten, logisch gruppiert statt als flache Liste",
            "Bereiche mit verwandten Inhalten verbinden Seiten zu ähnlichen Themen miteinander",
            "Kontextuelle Links im Fließtext verweisen auf tatsächlich relevante Seiten, nicht nur ein Sidebar-Widget",
            "Aussagekräftige Ankertexte („Next.js SEO Umsetzung“) statt generischer Anker („hier klicken“, „mehr erfahren“)",
          ],
        ],
      },
      {
        heading: "Verwaiste Seiten finden und beheben",
        blocks: [
          [
            "Eine verwaiste Seite hat keine internen Links, die auf sie verweisen – sie kann trotzdem indexiert sein, wenn sie in der Sitemap steht, erhält aber kaum etwas von der Autorität und Auffindbarkeit, die eine Verlinkung von relevanten, etablierten Seiten mit sich bringt. Ein vollständiger Crawl der Website im Abgleich mit der Sitemap ist der übliche Weg, sie zu finden.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wie viele interne Links sollte eine Seite haben?",
        "Es gibt keine feste Zahl – Maßstab ist die Relevanz, nicht die Menge. Eine Handvoll tatsächlich verwandter Links im Kontext ist nützlicher als eine lange Liste lose verwandter Links, die nur ergänzt wurden, um eine Zielzahl zu erreichen.",
      ],
      [
        "Spielt der Ankertext wirklich eine Rolle?",
        "Ja, in spürbarem Maß – ein aussagekräftiger Ankertext gibt Nutzern und Suchmaschinen ein klares Signal, worum es auf der verlinkten Seite geht, was generische Anker wie „hier klicken“ nicht leisten.",
      ],
      [
        "Wie finde ich verwaiste Seiten auf meiner Website?",
        "Crawlen Sie die Website mit einem Tool, das Links folgt (und nicht nur die Sitemap liest), und gleichen Sie die gefundenen Seiten mit Ihrer vollständigen Sitemap ab – alles, was in der Sitemap steht, aber über interne Links nicht erreicht wird, ist verwaist.",
      ],
    ],
  },
  {
    slug: "seo-website-audit",
    title: "SEO-Audit für Websites | Justin Johnson",
    description: "Ein SEO-Audit unter Leitung eines Entwicklers – technische Probleme, inhaltliche Lücken und Seitenarchitektur, mit nach Wirkung priorisierten Maßnahmen.",
    h1: "SEO-Audit für Websites",
    eyebrow: "SEO & Performance",
    primaryKeyword: "SEO Audit",
    secondaryKeywords: [
      "SEO Audit Dienstleistung",
      "Website SEO Check",
      "SEO Audit Entwickler",
      "umfassendes SEO Audit",
    ],
    intro: [
      "Ein SEO-Audit ist nur so nützlich wie das, was danach passiert – eine lange Liste generischer Empfehlungen hilft nicht, wenn niemand sie priorisiert oder umsetzt. Ich führe Audits mit einer klaren Prioritätsreihenfolge durch (zuerst Indexierungsprobleme, dann Architektur, dann Details) und kann die Maßnahmen ebenso direkt umsetzen, statt nur einen Bericht zu übergeben.",
      "Das umfasst das vollständige technische und strukturelle Bild: Crawlbarkeit, Ladegeschwindigkeit, Metadaten, strukturierte Daten und interne Verlinkung.",
    ],
    sections: [
      {
        heading: "Was geprüft wird",
        blocks: [
          [
            "Crawlbarkeit und Indexierungsstatus über die Search Console und einen direkten Crawl der Website",
            "Abdeckung und Qualität der Metadaten auf allen indexierbaren Seiten",
            "Core Web Vitals und Ladegeschwindigkeit",
            "Vorhandensein und Gültigkeit strukturierter Daten",
            "Interne Verlinkungsstruktur und verwaiste Seiten",
            "Inhaltliche Lücken im Vergleich zu den tatsächlichen Zielthemen der Website",
          ],
        ],
      },
      {
        heading: "Was Sie erhalten",
        blocks: [
          [
            "Eine priorisierte Liste der Probleme, geordnet nach erwarteter Wirkung – nicht nur eine rohe Auflistung von allem, was ein Crawler-Tool markiert hat. Viele automatisierte Audit-Tools zeigen Dutzende Warnungen mit geringer Wirkung neben der Handvoll Probleme an, die wirklich zählen; diese beiden Kategorien zu trennen, macht den Großteil des Werts einer manuellen Prüfung aus.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wie lange dauert ein Audit?",
        "Das hängt von Größe und Komplexität der Website ab – eine kleine Marketing-Website ist ein deutlich kleineres Vorhaben als eine große, inhaltsreiche Website mit Hunderten indexierten Seiten und einer komplexeren Architektur.",
      ],
      [
        "Setzen Sie die Maßnahmen um oder berichten Sie nur darüber?",
        "Beides, je nach Wunsch – ein eigenständiger Audit-Bericht oder das Audit plus direkte Umsetzung der Maßnahmen in der Codebasis, was meist der schnellere Weg zu echter Verbesserung ist.",
      ],
      [
        "Worin unterscheidet sich das von einem kostenlosen automatisierten SEO-Tool?",
        "Automatisierte Tools sind nützlich, um eine breite Liste möglicher Probleme sichtbar zu machen, priorisieren aber schlecht und markieren oft unbedeutende Warnungen neben echten Problemen. Ein manuelles Audit ergänzt das Urteil darüber, was für genau diese Website tatsächlich zählt.",
      ],
    ],
  },
  {
    slug: "programmatic-seo",
    title: "Programmatisches SEO | Justin Johnson",
    description: "Programmatische SEO-Systeme, die auf Hunderte Seiten skalieren, ohne zu dünnen, doppelten oder minderwertigen Doorway-Pages zu werden.",
    h1: "Programmatisches SEO",
    eyebrow: "SEO & Performance",
    primaryKeyword: "programmatisches SEO",
    secondaryKeywords: [
      "Programmatic SEO Entwickler",
      "datengetriebene SEO-Seiten",
      "skalierbares SEO-Seitensystem",
      "programmatisches SEO ohne Thin Content",
    ],
    intro: [
      "Programmatisches SEO bedeutet, viele Seiten aus einer gemeinsamen Vorlage und einer strukturierten Datenquelle zu erzeugen, um eine breite Palette verwandter Suchbegriffe abzudecken – einen Standort, einen Anwendungsfall, einen Vergleich –, ohne jede Seite einzeln von Hand zu bauen. Gut gemacht skaliert eine Website so ihre inhaltliche Abdeckung; schlecht gemacht entstehen genau die dünnen, nahezu doppelten Seiten, die Suchmaschinen abwerten.",
      "Das System hinter diesem Seitenbereich auf dieser Website ist selbst ein programmatisches SEO-Projekt – ein typisiertes Inhaltsmodell und gemeinsame Vorlagen, wobei die eigentlichen Inhalte jeder Seite so geschrieben sind, dass sie tatsächlich eigenständig sind, statt nur eine Variable in einen festen Absatz einzusetzen.",
    ],
    sections: [
      {
        heading: "Was gutes programmatisches SEO von Doorway-Pages unterscheidet",
        blocks: [
          [
            "Jede Seite beantwortet eine tatsächlich eigene Suchintention, nicht denselben Inhalt mit einem ausgetauschten Suchbegriff",
            "Die Daten hinter jeder Seite sind echt und spezifisch – kein Füllmaterial, um eine Wortzahl zu erreichen",
            "Seiten verlinken gezielt aufeinander und bilden eine echte thematische Struktur statt einer isolierten Seitenfarm",
            "Die Vorlage selbst erlaubt genug strukturelle Variation, nicht nur Variation in ein paar ausgefüllten Feldern",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Design des Inhaltsmodells – was pro Seite tatsächlich variiert und was strukturell gleich bleibt",
            "Wiederverwendbare Seitenvorlagen passend zu jedem Inhaltstyp",
            "Validierung, die doppelte oder fehlerhafte Inhalte vor der Veröffentlichung abfängt",
            "Sitemap und interne Verlinkung aus derselben Datenquelle generiert",
            "Ein Inhaltsplan, der sich an echter Abdeckung von Suchbegriffen und Suchintentionen orientiert, nicht an einer willkürlichen Seitenzahl",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Ist programmatisches SEO nicht einfach Spam in großem Stil?",
        "Das kann es sein, wenn Seiten nahezu identisch sind, nur eine Variable ausgetauscht wird und kein echter Informationswert entsteht. Spam ist es aber nicht per se – ein großer E-Commerce-Katalog oder eine tatsächlich eigenständige Reihe von Standort- oder Anwendungsfallseiten ist eine legitime Anwendung desselben Grundmusters.",
      ],
      [
        "Wie vermeiden Sie dünne Inhalte auf vielen Seiten?",
        "Indem jede Seite eigene Abschnitte, FAQs und Beispiele zu ihrem konkreten Thema haben muss – die Vorlage definiert die Struktur, nicht die eigentlichen Sätze, und jede Seite, die zu dünn ist, um für sich zu stehen, wird gestrichen statt veröffentlicht.",
      ],
      [
        "Ab wie vielen Seiten ist es „zu viel“ für einen einzigen Launch?",
        "Eine feste Zahl gibt es nicht, aber eine sehr große Menge neuer Seiten auf einmal zu veröffentlichen, zieht die Aufmerksamkeit von Suchmaschinen in beide Richtungen auf sich – Qualität zählt mehr als Menge, und eine kleinere Zahl wirklich nützlicher Seiten schlägt eine viel größere Zahl schwacher.",
      ],
    ],
  },
  {
    slug: "local-seo-website-development",
    title: "Websites für Local SEO | Justin Johnson",
    description: "Websites, die für die lokale Suche gebaut sind – Standortseiten, strukturierte Daten und technische Grundlagen für lokale Rankings.",
    h1: "Websites für Local SEO",
    eyebrow: "SEO & Performance",
    primaryKeyword: "Local SEO Website",
    secondaryKeywords: [
      "SEO für lokale Unternehmen",
      "SEO-Seiten für mehrere Standorte",
      "Google Unternehmensprofil Website",
      "Sichtbarkeit in der lokalen Suche",
    ],
    intro: [
      "Die Sichtbarkeit in der lokalen Suche hängt von einer Mischung aus Faktoren ab, die eine Website nicht direkt steuert (Google-Unternehmensprofil, Bewertungen, Branchenverzeichnisse), und Faktoren, die vollständig in der Website selbst liegen – eigene Standortseiten mit tatsächlich unterschiedlichen Inhalten, korrekte strukturierte Daten und schnelle Ladezeiten für die mobilen Suchen, aus denen lokale Anfragen überwiegend kommen.",
      "Ich konzentriere mich auf die Website-Seite: Standort- oder Einzugsgebietsseiten, die aus eigener Kraft bestehen, statt dünner Seiten, bei denen nur der Städtename ausgetauscht wird.",
    ],
    sections: [
      {
        heading: "Was das umfasst",
        blocks: [
          [
            "Standort- oder Einzugsgebietsseiten mit tatsächlich standortspezifischen Inhalten",
            "LocalBusiness-Strukturdaten, abgestimmt auf das, was tatsächlich auf der Seite steht",
            "Mobile-First-Performance, da die lokale Suche stark mobil geprägt ist",
            "Einheitliche NAP-Angaben (Name, Adresse, Telefon) auf der gesamten Website",
            "Interne Verlinkung zwischen Standortseiten und den Hauptleistungsseiten",
          ],
        ],
      },
      {
        heading: "Unternehmen mit mehreren Standorten",
        blocks: [
          [
            "Für Unternehmen mit mehreren Standorten ist das im Grunde ein Spezialfall von [programmatischem SEO](resources/programmatic-seo) – eine gemeinsame Vorlage mit tatsächlich eigenständigen, standortspezifischen Inhalten pro Seite (lokale Leistungsdetails, gebietsbezogene Informationen) statt desselben Textes mit nur geändertem Städtenamen.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Beeinflusst die Website selbst lokale Rankings oder nur das Google-Unternehmensprofil?",
        "Beides – Unternehmensprofil und Bewertungen haben großes Gewicht für die Rankings im Local Pack, aber Relevanz, strukturierte Daten und technische Qualität der Website fließen weiterhin in lokale wie normale organische Rankings ein und sind für die breiteren organischen Ergebnisse jenseits des Local Packs sogar wichtiger.",
      ],
      [
        "Wie vermeiden Sie dünne, doppelte Standortseiten?",
        "Jede Standortseite braucht tatsächlich eigenständige, nützliche Inhalte zu diesem Gebiet – keine Vorlage, bei der nur der Städtename ausgetauscht wird. Gibt es nicht genug eigenständige Informationen für eine separate Seite, ist eine einzige gut strukturierte Einzugsgebietsseite oft die bessere Lösung.",
      ],
      [
        "Welche strukturierten Daten helfen bei Local SEO?",
        "LocalBusiness-Schema, befüllt nur mit Informationen, die tatsächlich auf der Seite angezeigt werden (Adresse, Öffnungszeiten, Einzugsgebiet) – erfundene oder widersprüchliche Unternehmensangaben in strukturierten Daten können mehr schaden als nützen.",
      ],
    ],
  },
  {
    slug: "conversion-focused-web-design",
    title: "Conversion-orientiertes Webdesign | Justin Johnson",
    description: "Designentscheidungen, die sich daran orientieren, was Besucher tatsächlich zum Handeln bringt – nicht nur an ästhetischen Vorlieben.",
    h1: "Conversion-orientiertes Webdesign",
    eyebrow: "SEO & Performance",
    primaryKeyword: "Conversion-orientiertes Webdesign",
    secondaryKeywords: [
      "Conversion-Rate-Optimierung Entwickler",
      "CRO Webdesign",
      "Landingpage Conversion Design",
      "Website mit hoher Conversion-Rate",
    ],
    intro: [
      "Traffic, der nicht konvertiert, ist wenig wert, egal wie gut eine Seite rankt – conversion-orientiertes Design bedeutet, dass jede wesentliche Designentscheidung (Seitenstruktur, Platzierung der Call-to-Action, Formularlänge, Ladegeschwindigkeit) daran gemessen wird, ob sie dem Besucher bei der gewünschten Aktion hilft oder ihn behindert.",
      "Das ist kein eigener visueller Stil, sondern eine Reihe praktischer Leitplanken innerhalb der bestehenden Marke und Designsprache der Website.",
    ],
    sections: [
      {
        heading: "Was geprüft wird",
        blocks: [
          [
            "Klarheit der primären Call-to-Action auf jeder wichtigen Seite",
            "Formularlänge und Hürden – nur das abfragen, was in diesem Schritt tatsächlich nötig ist",
            "Ladegeschwindigkeit, da langsame Seiten die Abbruchrate messbar erhöhen, bevor ein Besucher das Angebot überhaupt sieht",
            "Mobile Nutzbarkeit, da auf den meisten Websites der Großteil des Traffics mobil ist",
            "Vertrauenssignale, die zum Unternehmen passen – echt, nicht erfunden",
          ],
        ],
      },
      {
        heading: "Wo sich das mit SEO und Performance überschneidet",
        blocks: [
          [
            "Eine schnelle, gut strukturierte, mobilfreundliche Seite dient SEO- und Conversion-Zielen gleichzeitig – beides steht nicht im Widerspruch, wie es manchmal dargestellt wird. Konflikte entstehen vor allem dann, wenn eine Designentscheidung (etwa ein aufdringliches Pop-up) einer einzelnen Kennzahl hilft, aber das Nutzererlebnis insgesamt verschlechtert.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Geht es dabei um A/B-Tests?",
        "A/B-Tests sind ein Werkzeug innerhalb der Conversion-Optimierung und am nützlichsten, wenn genug Traffic für statistische Signifikanz vorhanden ist. Für die meisten Websites ist es praktikabler, etablierte, gut belegte Designprinzipien direkt anzuwenden, statt jede Entscheidung formal zu testen.",
      ],
      [
        "Ändert das das gesamte Design?",
        "Nicht unbedingt – meist geht es darum, bestimmte Elemente (Hervorhebung der CTA, Formularlänge, Seitenstruktur) innerhalb der bestehenden Marke und Gestaltung anzupassen, nicht um ein komplettes Redesign.",
      ],
      [
        "Wie wird das gemessen?",
        "Anhand eines festgelegten, seitenspezifischen Conversion-Ziels – eine Formularanfrage, ein Kauf, eine Buchung –, das vor und nach Änderungen per Analytics erfasst wird, statt nach subjektivem visuellem Geschmack zu urteilen.",
      ],
    ],
  },
  {
    slug: "mobile-website-optimization",
    title: "Mobile Website-Optimierung | Justin Johnson",
    description: "Mobile-First-Optimierung von Layout, Geschwindigkeit und Nutzbarkeit – ausgerichtet darauf, wie die Mehrheit der Besucher die Website tatsächlich erlebt.",
    h1: "Mobile Website-Optimierung",
    eyebrow: "SEO & Performance",
    primaryKeyword: "mobile Website-Optimierung",
    secondaryKeywords: [
      "Mobile-First-Design Entwickler",
      "responsive Website reparieren",
      "mobile Ladezeit optimieren",
      "Audit der mobilen Nutzbarkeit",
    ],
    intro: [
      "Google indexiert und rankt überwiegend auf Basis der mobilen Version einer Website, und bei den meisten Unternehmen kommt auch der Großteil des echten Traffics von Mobilgeräten – eine Website, die auf dem Desktop ausgefeilt, auf dem Smartphone aber langsam oder umständlich ist, optimiert für den kleineren Teil der tatsächlichen Besucher.",
      "Das umfasst sowohl die technische Seite (mobile Ladegeschwindigkeit, korrektes responsives Layout) als auch die Nutzbarkeit (Größe der Tippflächen, lesbarer Text ohne Zoomen, Formulare, die gut mit einer Touch-Tastatur funktionieren).",
    ],
    sections: [
      {
        heading: "Was geprüft wird",
        blocks: [
          [
            "Korrektes Layout auf echten Gerätebreiten, nicht nur im responsiven Modus des Browsers",
            "Größe und Abstand der Tippflächen für die Touch-Bedienung",
            "Lesbarkeit des Textes ohne Zoomen",
            "Speziell die mobile Ladegeschwindigkeit, die auf derselben Website oft hinter dem Desktop zurückbleibt",
            "Formulare und Checkout-Abläufe, getestet mit einer echten Touch-Tastatur",
          ],
        ],
      },
      {
        heading: "Warum die mobile Geschwindigkeit oft zurückbleibt",
        blocks: [
          [
            "Mobilgeräte haben meist weniger Rechenleistung und oft eine langsamere Netzverbindung als der Desktop-Rechner, auf dem eine Website wahrscheinlich entwickelt und getestet wurde. Dasselbe JavaScript-Bundle und dieselben Bilder, die sich in der Entwicklung gut anfühlen, können daher auf einem Mittelklasse-Smartphone mit mobilen Daten tatsächlich langsam sein.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Was ist Mobile-First-Indexierung?",
        "Google nutzt für Indexierung und Ranking überwiegend die mobile Version einer Seite, selbst bei Suchen am Desktop – Inhalte oder Funktionen, die mobil fehlen, sind für Google in dieser Hinsicht also praktisch unsichtbar, egal wie vollständig die Desktop-Version ist.",
      ],
      [
        "Wie testen Sie die mobile Performance zuverlässig?",
        "Auf echten Geräten oder mit gedrosseltem Netzwerk und gedrosselter CPU in den Entwicklertools, nicht nur in einem verkleinerten Desktop-Browserfenster – das Layout kann bei schmaler Breite gut aussehen, während Touch-Bedienung und Ladeperformance trotzdem schlecht sind.",
      ],
      [
        "Was ist ein häufiger Fehler bei der mobilen Nutzbarkeit?",
        "Tippflächen (Buttons, Links), die für eine präzise Bedienung mit dem Daumen zu dicht beieinanderliegen, und Formulare ohne den richtigen Eingabetyp, sodass die falsche mobile Tastatur erscheint (zum Beispiel eine Texttastatur für ein Telefonnummernfeld).",
      ],
    ],
  },
  {
    slug: "website-accessibility-services",
    title: "Barrierefreie Websites | Justin Johnson",
    description: "Barrierefreiheit direkt im Markup – semantisches HTML, Tastaturnavigation und Kontraste, geprüft nach WCAG.",
    h1: "Barrierefreie Websites",
    eyebrow: "SEO & Performance",
    primaryKeyword: "barrierefreie Website",
    secondaryKeywords: [
      "WCAG-konforme Entwicklung",
      "Barrierefreiheit Audit Entwickler",
      "Website Barrierefreiheit BFSG",
      "barrierefreies Webdesign",
    ],
    intro: [
      "Barrierefreiheit ist weitgehend ein Nebenprodukt korrekten, semantischen HTMLs – saubere Überschriftenhierarchie, echte Buttons und Links statt Divs mit Klick-Handlern, beschriftete Formularfelder, ausreichender Farbkontrast. Das meiste davon ist Entwicklungsdisziplin und keine nachträglich angebaute Funktion – genau deshalb ist es meist günstiger, es von Anfang an einzubauen, als es nachzurüsten.",
      "Ich prüfe nach WCAG 2.1 AA als praktischer Grundlage und behebe Probleme direkt im Markup, statt mich auf ein Overlay-Skript eines Drittanbieters zu verlassen, das Probleme eher überdeckt als löst.",
    ],
    sections: [
      {
        heading: "Was geprüft wird",
        blocks: [
          [
            "Semantische HTML-Struktur und korrekte Überschriftenhierarchie",
            "Tastaturbedienbarkeit – alles Interaktive ohne Maus erreichbar und nutzbar",
            "Sichtbare Fokuszustände an interaktiven Elementen",
            "Farbkontrast nach den Schwellenwerten von WCAG AA",
            "Formularbeschriftungen und Fehlermeldungen, die mit Screenreadern funktionieren",
            "Alt-Texte für aussagekräftige Bilder, leere Alt-Attribute für rein dekorative",
          ],
        ],
      },
      {
        heading: "Warum nicht einfach ein Barrierefreiheits-Overlay?",
        blocks: [
          [
            "Overlay-Skripte versuchen, Barrierefreiheitsprobleme zur Laufzeit per JavaScript zu überdecken, ohne das zugrunde liegende Markup zu reparieren, und haben eine gut dokumentierte Bilanz darin, neue Probleme zu verursachen oder genau die Probleme nicht zu lösen, die für Nutzer assistiver Technologien tatsächlich zählen. Das Markup direkt zu korrigieren ist zuverlässiger und schafft keine Abhängigkeit von einem Drittanbieter-Skript.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Garantieren Sie vollständige WCAG-Konformität?",
        "Ich arbeite auf WCAG 2.1 AA als praktischen, etablierten Standard hin und behebe bei der Prüfung gefundene Probleme. Eine vollständige rechtliche Konformität kann aber keine externe Stelle ohne ein umfassendes Audit inklusive Tests mit echten Nutzern assistiver Technologien garantieren – das ist ein eigenständiges, größeres Vorhaben als eine entwicklungsorientierte Barrierefreiheitsprüfung.",
      ],
      [
        "Sind Barrierefreiheits-Overlays eine legitime Abkürzung?",
        "Sie gelten weithin als unzuverlässiger Ersatz für die Korrektur des zugrunde liegenden Markups – mehrere Anbieter sahen sich selbst rechtlichen Auseinandersetzungen ausgesetzt, weil sie keine echte Barrierefreiheit lieferten, und sie lösen keine Probleme, die in der tatsächlichen HTML-Struktur liegen.",
      ],
      [
        "Verlangsamt Barrierefreiheit ein Projekt?",
        "Mit semantischem HTML und korrekter Struktur von Anfang an zu entwickeln, kostet kaum zusätzliche Zeit – verglichen mit einer späteren Nachrüstung, bei der nicht-semantisches Markup oft grundlegend überarbeitet werden muss.",
      ],
    ],
  },
];
