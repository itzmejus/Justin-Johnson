import type { SeoPageTranslation } from "../types";

export const resourcePagesDe1: SeoPageTranslation[] = [
  {
    slug: "technical-seo-services",
    title: "Technisches SEO | Justin Johnson",
    description: "Technisches SEO auf Code-Ebene – Crawlbarkeit, Indexierbarkeit, Seitenarchitektur und die Probleme, die reines Content-SEO nicht lösen kann.",
    h1: "Technisches SEO",
    eyebrow: "SEO & Performance",
    primaryKeyword: "technisches SEO",
    secondaryKeywords: [
      "technischer SEO Berater",
      "SEO Seitenarchitektur",
      "Crawlability Audit",
      "Indexierungsprobleme beheben",
    ],
    intro: [
      "Technisches SEO ist der Teil der Suchmaschinenoptimierung, der im Code steckt statt in den Inhalten – ob Seiten überhaupt gecrawlt und indexiert werden können, ob die Seitenarchitektur die Auffindbarkeit unterstützt, ob Rendering-Entscheidungen Inhalte vor Suchmaschinen verbergen. Inhalte und Backlinks spielen keine Rolle, wenn das technische Fundament die Indexierung einer Seite von vornherein verhindert.",
      "Als Entwickler und nicht als Marketer bringe ich hier den größten Mehrwert – ich behebe die eigentlichen Ursachen, statt sie zu umgehen.",
    ],
    sections: [
      {
        heading: "Was das umfasst",
        blocks: [
          [
            "Audit von Crawlbarkeit und Indexierbarkeit (robots.txt, Meta-Robots, Canonical-Tags)",
            "Seitenarchitektur und interne Verlinkungsstruktur",
            "Rendering-Audit – Prüfung, ob Inhalte tatsächlich im HTML stehen, das Suchmaschinen sehen",
            "Genauigkeit und Struktur der XML-Sitemap",
            "Umsetzung und Validierung strukturierter Daten",
            "Diagnose von Core Web Vitals und Ladegeschwindigkeit",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Die Website so crawlen, wie es eine Suchmaschine tun würde, um Indexierungs- und Rendering-Probleme direkt zu finden",
            "Die Search Console auf bestehende Crawling-Fehler und Abdeckungsprobleme prüfen",
            "Maßnahmen nach erwarteter Wirkung priorisieren – zuerst Indexierungsblocker, dann Architektur, dann Details",
            "Korrekturen direkt in der Codebasis umsetzen, nicht als separaten Bericht, den jemand anderes abarbeiten muss",
            "Nach den Änderungen die Search Console beobachten, um zu bestätigen, dass die Probleme tatsächlich behoben sind",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Websites, bei denen Inhalte und Marketingaufwand nicht zu Sichtbarkeit in der Suche führen – oft ein Zeichen dafür, dass das technische Fundament die Ergebnisse unabhängig von der Inhaltsqualität ausbremst.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Worin unterscheidet sich das vom technischen Audit einer SEO-Agentur?",
        "Die meisten SEO-Audits liefern einen Bericht mit Empfehlungen, die jemand anderes umsetzen muss – oft ein Entwickler, der mit SEO-Prioritäten wenig vertraut ist. Da ich Auditor und Entwickler zugleich bin, werden Korrekturen direkt umgesetzt, statt über eine Übergabe hinweg übersetzt zu werden.",
      ],
      [
        "Kann technisches SEO allein ein Ranking-Problem lösen?",
        "Es repariert das Fundament – Indexierbarkeit, Crawlbarkeit, Ladegeschwindigkeit –, aber Inhaltsqualität und Relevanz bestimmen das Ranking weiterhin auf diesem Fundament. Technisches SEO räumt Hindernisse aus dem Weg; es ersetzt nicht die Notwendigkeit wirklich nützlicher Inhalte.",
      ],
      [
        "Wie lange dauert es, bis technische Korrekturen wirken?",
        "Behobene Indexierungsprobleme können sich innerhalb von Tagen bis Wochen in der Search Console zeigen, sobald Seiten neu gecrawlt werden; Ranking-Verbesserungen durch technische Änderungen brauchen meist länger und lassen sich schwerer von anderen Faktoren trennen.",
      ],
    ],
  },
  {
    slug: "nextjs-seo-services",
    title: "Next.js SEO-Optimierung | Justin Johnson",
    description: "SEO-Umsetzung speziell für Next.js-Websites – Metadaten, Sitemaps, strukturierte Daten und Rendering-Strategie richtig umgesetzt.",
    h1: "Next.js SEO-Optimierung",
    eyebrow: "SEO & Performance",
    primaryKeyword: "Next.js SEO-Optimierung",
    secondaryKeywords: [
      "Next.js SEO Berater",
      "Next.js technisches SEO",
      "Next.js Search Console einrichten",
      "Next.js SEO Umsetzung",
    ],
    intro: [
      "Next.js gibt Ihnen die Werkzeuge für starkes SEO – die Metadata API, eingebaute Sitemap-Generierung, Server-Rendering –, aber eine Website kann trotzdem auf Next.js laufen und echte SEO-Probleme haben, wenn diese Werkzeuge nicht richtig eingesetzt werden. Diese Leistung richtet sich speziell an Next.js-Websites: Prüfung und Korrektur von Metadaten, Rendering-Strategie und strukturierten Daten auf Framework-Ebene.",
      "Da ich Next.js-Anwendungen selbst entwickle, kann ich Korrekturen direkt in der Codebasis umsetzen, statt generische Empfehlungen zu übergeben.",
    ],
    sections: [
      {
        heading: "Was geprüft wird",
        blocks: [
          [
            "Nutzung der Metadata API – sind Titel und Beschreibungen tatsächlich pro Seite einzigartig oder von einem Standard dupliziert",
            "Rendering-Strategie pro Route – werden Inhalte statisch generiert, wo sie sollten, oder unnötig clientseitig gerendert",
            "Konfiguration von Sitemap und robots.txt",
            "Abdeckung mit strukturierten Daten für die Seitentypen, die sie unterstützen",
            "Bildoptimierung und Core Web Vitals",
            "Umgang mit Canonical-URLs, besonders bei Seiten, die über mehrere Pfade oder Query-Parameter erreichbar sind",
          ],
        ],
      },
      {
        heading: "Typische Next.js-spezifische Probleme",
        blocks: [
          [
            "Seiten, die versehentlich vollständig clientseitig gerendert werden und Inhalte vor Crawlern verbergen, die JavaScript nicht vollständig ausführen",
            "Fehlende oder doppelte Metadaten, weil generateMetadata nicht pro Route umgesetzt wurde",
            "Keine sitemap.ts-Datei oder eine, die nicht zu den tatsächlichen Routen passt",
            "Bilder ohne next/image, ohne Breite/Höhe und mit daraus folgenden Layout-Verschiebungen",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Unterscheidet sich das von Ihrem allgemeinen technischen SEO?",
        "Dieselbe Grunddisziplin, aber gezielt auf die Werkzeuge und typischen Fallstricke von Next.js ausgerichtet – Metadata API, Rendering-Entscheidungen im App Router und Sitemap-Dateikonventionen – statt eines frameworkunabhängigen Audits.",
      ],
      [
        "Können Sie SEO-Probleme ohne komplettes Redesign beheben?",
        "In den meisten Fällen ja – Korrekturen an Metadaten, Sitemap und strukturierten Daten lassen sich meist umsetzen, ohne das visuelle Design anzufassen, da sie in der Daten- und Konfigurationsschicht des Frameworks liegen und nicht in der Oberfläche.",
      ],
      [
        "Richten Sie Search Console und Monitoring ein?",
        "Ja – Verifizierung der Property, Einreichen der Sitemap und anschließende Prüfung der Abdeckungsberichte, um zu bestätigen, dass Indexierungsprobleme tatsächlich behoben sind.",
      ],
    ],
  },
  {
    slug: "react-website-seo",
    title: "SEO für React-Websites | Justin Johnson",
    description: "SEO für React-Single-Page-Anwendungen – die Crawlbarkeitslücke schließen, die durch rein clientseitiges Rendering entsteht.",
    h1: "SEO für React-Websites",
    eyebrow: "SEO & Performance",
    primaryKeyword: "React Website SEO",
    secondaryKeywords: [
      "SEO für Single Page Applications",
      "React SPA SEO verbessern",
      "SEO-Problem durch Client-Side Rendering",
      "React SEO Berater",
    ],
    intro: [
      "Eine einfache React-SPA rendert alles im Browser, das initiale HTML, das ein Crawler erhält, ist also nahezu leer, bis JavaScript ausgeführt wird. Der Google-Crawler führt JavaScript zwar aus, aber langsamer und weniger zuverlässig als beim direkten Lesen von statischem HTML – andere Suchmaschinen und Link-Vorschauen in sozialen Medien führen es oft gar nicht aus.",
      "Diese Leistung richtet sich an React-Websites, die bessere Sichtbarkeit in der Suche brauchen, ohne zwingend komplett auf ein anderes Framework zu migrieren – plus eine ehrliche Einschätzung, wann eine Migration tatsächlich die richtige Wahl ist.",
    ],
    sections: [
      {
        heading: "Optionen, grob nach Aufwand",
        blocks: [
          [
            "Statisches Prerendering – zur Build-Zeit statische HTML-Snapshots jeder Route erzeugen, die Crawlern und Nutzern gleichermaßen ausgeliefert werden, während die App weiterhin zu einer vollständigen SPA hydriert. Geringerer Aufwand, funktioniert für Inhalte, die nicht pro Besucher dynamisch sein müssen.",
            "Server-Side Rendering für die bestehende React-App durch eine Framework-Migration (meist zu Next.js), die Rendering, Metadaten und Routing umfassender abdeckt",
            "Hybrider Ansatz – die SEO-relevanten Marketingseiten vorrendern und den App-Bereich mit Login als clientseitig gerenderte SPA belassen",
          ],
        ],
      },
      {
        heading: "Was außerdem behoben wird",
        blocks: [
          [
            "Metadaten pro Route (Titel, Beschreibung, Canonical) statt eines statischen Satzes für die ganze App",
            "Eine richtige XML-Sitemap mit allen indexierbaren Routen",
            "Strukturierte Daten, wo sie tatsächlich anwendbar sind",
            "Interne Verlinkung mit echten Anchor-Tags statt reiner JavaScript-Navigation",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Indexiert Google clientseitig gerenderte React-Websites tatsächlich?",
        "Ja, der Google-Crawler rendert JavaScript, aber zeitverzögert und mit stärkeren Ressourcenbeschränkungen als beim Rendern statischen HTMLs – Seiten können merklich länger bis zur Indexierung brauchen, und andere Crawler (Social-Media-Vorschauen, einige andere Suchmaschinen) führen JavaScript möglicherweise gar nicht zuverlässig aus.",
      ],
      [
        "Muss ich zu Next.js migrieren?",
        "Nicht unbedingt – Prerendering kann die Crawlbarkeit ohne Framework-Migration deutlich verbessern. Eine vollständige Migration zu Next.js lohnt sich, wenn die Website inhaltsreich ist und Sichtbarkeit in der Suche ein Hauptziel ist, da es die Rendering-Strategie langfristig umfassender abdeckt.",
      ],
      [
        "Was genau ist Prerendering?",
        "Ein Build-Schritt, der jede Route vorab zu statischem HTML rendert (oft mit einem Headless-Browser), sodass Crawler und langsame Verbindungen sofort echte Inhalte erhalten, während die App nach dem Laden und Hydrieren von JavaScript trotzdem zu einer voll interaktiven SPA wird.",
      ],
    ],
  },
  {
    slug: "core-web-vitals-optimization",
    title: "Core Web Vitals Optimierung | Justin Johnson",
    description: "Optimierung der Core Web Vitals LCP, CLS und INP – mit echten Daten diagnostiziert und auf Code-Ebene behoben, nicht geraten.",
    h1: "Core Web Vitals Optimierung",
    eyebrow: "SEO & Performance",
    primaryKeyword: "Core Web Vitals Optimierung",
    secondaryKeywords: [
      "LCP optimieren",
      "CLS beheben",
      "INP optimieren",
      "Core Web Vitals Entwickler",
    ],
    intro: [
      "Die Core Web Vitals – Largest Contentful Paint, Cumulative Layout Shift und Interaction to Next Paint – messen die von echten Nutzern wahrgenommene Geschwindigkeit und werden von Google als Rankingsignal genutzt. Sie zu verbessern bedeutet, das konkrete Element oder Skript zu finden, das das Problem tatsächlich verursacht, statt generische „mach es schneller“-Ratschläge anzuwenden.",
      "Ich diagnostiziere sowohl mit Labordaten (Lighthouse) als auch mit Felddaten (echte Nutzermetriken aus der Search Console oder einem Monitoring-Tool), da beide nicht immer übereinstimmen und die Felddaten widerspiegeln, was echte Besucher erleben.",
    ],
    sections: [
      {
        heading: "Was jede Metrik tatsächlich misst",
        blocks: [
          [
            "LCP (Largest Contentful Paint) – wie lange es dauert, bis das größte sichtbare Element (meist ein Hero-Bild oder eine Überschrift) gerendert ist",
            "CLS (Cumulative Layout Shift) – wie stark sich sichtbare Inhalte während des Ladens unerwartet verschieben",
            "INP (Interaction to Next Paint) – wie reaktionsschnell sich die Seite anfühlt, wenn ein Nutzer tatsächlich mit ihr interagiert",
          ],
        ],
      },
      {
        heading: "Typische Maßnahmen",
        blocks: [
          [
            "Das größte Bild im sichtbaren Bereich optimieren und korrekt dimensionieren (auf den meisten Websites der größte Hebel für LCP)",
            "Platz für Bilder und Anzeigen reservieren, bevor sie laden, um Layout-Verschiebungen zu verhindern",
            "Schriften mit next/font oder Vergleichbarem selbst hosten, um Verschiebungen beim Schriftwechsel zu vermeiden",
            "Nicht kritisches JavaScript verzögern, das den Main Thread blockiert",
            "Größe und Priorität render-blockierender Ressourcen reduzieren",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Beeinflussen die Core Web Vitals wirklich das Ranking?",
        "Sie sind ein Signal unter vielen im Ranking-System von Google und spielen eher als Entscheidungshilfe zwischen ansonsten ähnlich guten Seiten eine Rolle als als dominanter Faktor. Sie wirken sich aber unabhängig von ihrem Ranking-Gewicht direkt auf Absprungrate und Conversion aus – deshalb lohnt sich die Optimierung in jedem Fall.",
      ],
      [
        "Warum stimmen Labor- und Felddaten nicht überein?",
        "Labordaten (Lighthouse) testen einen einzelnen simulierten Durchlauf unter kontrollierten Bedingungen; Felddaten fassen echte Besucher auf echten Geräten und Verbindungen zusammen, die viel stärker variieren – eine Website kann in Lighthouse gut abschneiden, im Feld aber schlecht, wenn viele echte Besucher über langsame mobile Verbindungen kommen.",
      ],
      [
        "Was ist der größte einzelne Hebel für LCP?",
        "Auf den meisten Inhaltswebsites das größte Bild im sichtbaren Bereich – es in der richtigen Größe, in einem modernen Format und mit hoher Ladepriorität auszuliefern, verbessert LCP meist stärker als jede andere einzelne Änderung.",
      ],
    ],
  },
  {
    slug: "website-speed-optimization",
    title: "Website-Geschwindigkeit optimieren | Justin Johnson",
    description: "Ladezeitoptimierung auf Basis echter Messungen – Bilder, JavaScript, Schriften und Serverantwortzeit, nach Wirkung priorisiert.",
    h1: "Website-Geschwindigkeit optimieren",
    eyebrow: "SEO & Performance",
    primaryKeyword: "Website Geschwindigkeit optimieren",
    secondaryKeywords: [
      "Ladezeit optimieren lassen",
      "langsame Website beschleunigen",
      "Website Performance Audit",
      "Website schneller machen",
    ],
    intro: [
      "Geschwindigkeitsoptimierung beginnt mit Messen, nicht mit Annahmen – der tatsächliche Engpass einer Website kann ein übergroßes Hero-Bild, ein nicht optimiertes Drittanbieter-Skript oder eine langsame Serverantwort sein, und jedes davon braucht eine andere Lösung. Ich messe zuerst, um herauszufinden, was tatsächlich langsam ist, bevor ich etwas anfasse.",
      "Das umfasst sowohl einmalige Audits mit priorisierter Maßnahmenliste als auch die praktische Umsetzung der Maßnahmen selbst.",
    ],
    sections: [
      {
        heading: "Wo ich anfange",
        blocks: [
          [
            "Lighthouse und WebPageTest ausführen, um Labormetriken und ein visuelles Wasserfalldiagramm zu erhalten, was wann geladen wird",
            "Die Felddaten der Search Console prüfen, um zu sehen, wie echte Besucher die Website tatsächlich erleben",
            "Den größten einzelnen Verursacher langsamer Ladezeiten identifizieren – meist Bilder, JavaScript-Bundle-Größe oder Drittanbieter-Skripte",
            "Das größte Problem zuerst beheben und neu messen, bevor das nächste angegangen wird",
          ],
        ],
      },
      {
        heading: "Häufige Verursacher",
        blocks: [
          [
            "Nicht optimierte, übergroße Bilder in weit größeren Abmessungen als angezeigt",
            "Drittanbieter-Skripte (Analytics, Chat-Widgets, Ad-Tags), die synchron geladen werden und das Rendering blockieren",
            "Webfonts ohne korrektes Preloading oder Fallback-Strategie, die Layout-Verschiebungen oder unsichtbaren Text verursachen",
            "Langsame Serverantwortzeit (TTFB) durch nicht optimierte Backend-Abfragen oder fehlendes Caching",
            "Übermäßig viel JavaScript für Interaktivität, die die Seite eigentlich nicht braucht",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wie stark lässt sich die Geschwindigkeit realistisch verbessern?",
        "Das hängt vollständig vom Ausgangspunkt und den Ursachen ab – eine Website mit klaren, behebbaren Engpässen (nicht optimierte Bilder, blockierende Skripte) verbessert sich meist deutlich und messbar; eine bereits recht gut optimierte Website bietet weniger leicht erreichbares Potenzial.",
      ],
      [
        "Ist ein CDN notwendig?",
        "Für statische Assets in der Regel ja – Bilder, CSS und JS von einem CDN-Edge in der Nähe des Besuchers auszuliefern, senkt die Latenz spürbar. Die meisten modernen Hosting-Plattformen (Vercel, Netlify) bringen das standardmäßig mit.",
      ],
      [
        "Optimieren Sie Bilder automatisch?",
        "Bei Next.js-Websites übernimmt next/image Skalierung und Formatumwandlung automatisch. Bei anderen Stacks wird das als Teil der Build-Pipeline oder über einen Bildtransformationsdienst auf CDN-Ebene eingerichtet.",
      ],
    ],
  },
  {
    slug: "javascript-seo",
    title: "JavaScript SEO | Justin Johnson",
    description: "Wie sich JavaScript-Rendering auf Crawlbarkeit und Indexierung auswirkt – und wie Sie verhindern, dass Inhalte für Suchmaschinen unsichtbar sind.",
    h1: "JavaScript SEO",
    eyebrow: "SEO & Performance",
    primaryKeyword: "JavaScript SEO",
    secondaryKeywords: [
      "Client-Side Rendering SEO",
      "JavaScript SEO Best Practices",
      "Rendering und SEO",
      "SEO für JavaScript-Frameworks",
    ],
    intro: [
      "Bei JavaScript SEO geht es um eine Kernfrage: Stehen die relevanten Inhalte tatsächlich in dem, was eine Suchmaschine liest, oder erscheinen sie erst, nachdem clientseitiges JavaScript ausgeführt wurde? Die Antwort hängt vollständig von der gewählten Rendering-Strategie für eine Seite ab, nicht vom Einsatz von JavaScript an sich – eine Seite kann viel JavaScript nutzen und trotzdem perfekt crawlbar sein, wenn das Rendering richtig gelöst ist.",
      "Das ist das eigentliche Problem hinter den meisten SEO-Schwierigkeiten moderner Websites mit JavaScript-Frameworks – und der Grund, warum Server-Rendering oder statische Generierung für alles wichtig sind, was ranken soll.",
    ],
    sections: [
      {
        heading: "Die zentrale Unterscheidung",
        blocks: [
          [
            "Client-Side Rendering – der Server sendet nahezu leeres HTML, und Inhalte werden per JavaScript im Browser eingefügt. Suchmaschinen müssen dieses JavaScript ausführen, um die Inhalte zu sehen – langsamer und weniger zuverlässig als das direkte Lesen von HTML.",
            "Server-Side Rendering / statische Generierung – der Server sendet vollständiges HTML mit bereits vorhandenen Inhalten. Es ist keine JavaScript-Ausführung nötig, um die Inhalte zu sehen.",
            "Hybrid – eine Hülle mit dem Großteil der Inhalte wird auf dem Server gerendert, und nur bestimmte interaktive Teile hydrieren auf dem Client.",
          ],
        ],
      },
      {
        heading: "So prüfen Sie, was ein Crawler tatsächlich sieht",
        blocks: [
          [
            "Den rohen HTML-Quelltext der Seite ansehen (nicht das gerenderte DOM) – fehlt der Hauptinhalt, hängt er vollständig von JavaScript ab",
            "Mit dem URL-Prüftool der Google Search Console das gerenderte HTML ansehen, das der Google-Crawler tatsächlich erfasst hat",
            "JavaScript im Browser deaktivieren und die Seite neu laden, um zu sehen, was übrig bleibt",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Bestraft Google Websites mit viel JavaScript?",
        "Nicht für den Einsatz von JavaScript an sich – das Problem entsteht gezielt dann, wenn indexierbare Inhalte erst nach der JavaScript-Ausführung existieren, was die Indexierung verzögert und riskanter macht als bei Inhalten im initialen HTML.",
      ],
      [
        "Ist Hydration ein Problem für SEO?",
        "Hydration selbst nicht – eine serverseitig gerenderte Seite, die später zu einer interaktiven App hydriert, hat ihre Inhalte bereits im HTML, wenn ein Crawler sie liest. Das Problem betrifft gezielt Seiten, die ausschließlich clientseitig gerendert werden und von vornherein keine serverseitig gerenderten Inhalte haben.",
      ],
      [
        "Woran erkenne ich, ob meine Website ein JavaScript-SEO-Problem hat?",
        "Prüfen Sie die rohe HTML-Antwort (nicht das gerenderte DOM im Browser) einer Seite – fehlt der Hauptinhalt, hängt er von clientseitigem JavaScript ab, und genau dieses Muster lohnt eine genauere Untersuchung.",
      ],
    ],
  },
  {
    slug: "structured-data-implementation",
    title: "Strukturierte Daten umsetzen | Justin Johnson",
    description: "Strukturierte Daten (JSON-LD) korrekt umgesetzt und validiert – abgestimmt auf das, was tatsächlich auf der Seite sichtbar ist.",
    h1: "Strukturierte Daten umsetzen",
    eyebrow: "SEO & Performance",
    primaryKeyword: "strukturierte Daten",
    secondaryKeywords: [
      "JSON-LD Umsetzung",
      "Schema Markup Entwickler",
      "strukturierte Daten für SEO",
      "Rich Results einrichten",
    ],
    intro: [
      "Strukturierte Daten (meist JSON-LD) teilen Suchmaschinen explizit mit, was eine Seite darstellt – einen Artikel, ein Produkt, eine Dienstleistung, ein FAQ. Das kann Rich Results in den Suchergebnissen ermöglichen und hilft Suchmaschinen, Inhalte zu verstehen, die sie sonst erschließen müssten. Die Anforderung, an der viele scheitern: Das Markup muss genau widerspiegeln, was tatsächlich auf der Seite sichtbar ist, nicht das, was man gerne darin stehen hätte.",
      "Ich setze das als wiederverwendbare, typisierte Hilfsfunktionen um, statt JSON-LD-Skripte auf jeder Seite von Hand zu duplizieren, und validiere jedes Schema vor dem Livegang mit den Testwerkzeugen von Google.",
    ],
    sections: [
      {
        heading: "Gängige Schema-Typen und wann sie passen",
        blocks: [
          [
            "Article / TechArticle – Blogbeiträge, Anleitungen und technische Inhalte",
            "Service – kommerzielle Leistungsseiten",
            "FAQPage – nur wenn echte, sichtbare FAQ-Inhalte auf der Seite stehen",
            "BreadcrumbList – jede Seite mit sichtbarer Brotkrümelnavigation",
            "HowTo – Schritt-für-Schritt-Anleitungen mit einer echten Abfolge von Schritten",
            "Person / Organization – Identitäts- und Entitätsinformationen",
          ],
        ],
      },
      {
        heading: "Was Sie vermeiden sollten",
        blocks: [
          [
            "FAQPage-Schema mechanisch auf jeder Seite einzufügen, unabhängig davon, ob sie echte, sichtbare FAQ-Inhalte hat",
            "Bewertungs-, Rating- oder Preisdaten aufzunehmen, die auf der Seite gar nicht angezeigt werden",
            "Inhalte auszuzeichnen, die nicht dem entsprechen, was ein Besucher tatsächlich sieht – das riskiert eine manuelle Maßnahme von Google, nicht nur eine verpasste Chance",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Garantieren strukturierte Daten Rich Results?",
        "Nein – sie machen eine Seite für Rich Results berechtigt, aber Google entscheidet anhand eigener Kriterien, ob und wie sie angezeigt werden; das ist weder garantiert noch vollständig dokumentiert.",
      ],
      [
        "Kann ich Bewertungs-Schema ohne echte Bewertungen hinzufügen?",
        "Nein – das verstößt gegen die Richtlinien von Google für strukturierte Daten und kann eine manuelle Abstrafung auslösen. Strukturierte Daten müssen Inhalte genau widerspiegeln, die tatsächlich auf der Seite vorhanden und sichtbar sind.",
      ],
      [
        "Wie validieren Sie strukturierte Daten?",
        "Mit dem Rich-Results-Test von Google und dem Schema.org-Validator vor dem Deployment sowie regelmäßig danach, wenn sich Inhalte ändern – eine spätere Inhaltsänderung kann zuvor korrektes Markup unbemerkt falsch machen.",
      ],
    ],
  },
  {
    slug: "xml-sitemap-optimization",
    title: "XML-Sitemap-Optimierung | Justin Johnson",
    description: "Einrichtung und Bereinigung von XML-Sitemaps – korrekt, aktuell und so strukturiert, dass das Crawl-Budget auf die wichtigen Seiten entfällt.",
    h1: "XML-Sitemap-Optimierung",
    eyebrow: "SEO & Performance",
    primaryKeyword: "XML-Sitemap-Optimierung",
    secondaryKeywords: [
      "sitemap.xml einrichten",
      "Sitemap für große Websites",
      "Sitemap Indexierungsprobleme",
      "dynamische Sitemap-Generierung",
    ],
    intro: [
      "Die Aufgabe einer Sitemap ist es, Suchmaschinen mitzuteilen, welche URLs existieren und das Crawlen lohnen – sie garantiert keine Indexierung, aber eine ungenaue Sitemap (mit entfernten Seiten, fehlenden neuen Seiten, falschen lastmod-Daten) verschwendet aktiv Crawl-Budget und kann Unklarheit darüber schaffen, welche Version einer Seite kanonisch ist.",
      "Ich baue Sitemaps, die programmatisch aus den tatsächlichen Routendaten generiert werden, sodass sie nicht unbemerkt von der echten Website abweichen können, wie es eine von Hand gepflegte Datei irgendwann tut.",
    ],
    sections: [
      {
        heading: "Was eine gute Sitemap enthält",
        blocks: [
          [
            "Nur kanonische, indexierbare URLs – keine Duplikate, Weiterleitungen oder noindex-Seiten",
            "Korrekte lastmod-Daten, die echte Inhaltsänderungen widerspiegeln und nicht bei jedem Build erfunden werden",
            "Sitemap-Index-Dateien für Websites, die das URL-Limit einer einzelnen Sitemap überschreiten",
            "Getrennte Sitemaps nach Inhaltstyp, wo es das Monitoring erleichtert (z. B. eine für Blog-Inhalte, eine für Leistungsseiten)",
          ],
        ],
      },
      {
        heading: "Häufige Fehler",
        blocks: [
          [
            "Eine von Hand gepflegte Sitemap, die nicht mehr stimmt, wenn Seiten hinzukommen, entfernt oder umbenannt werden",
            "Seiten aufzunehmen, die weiterleiten oder Fehler zurückgeben, was Crawlern widersprüchliche Signale sendet",
            "lastmod bei jedem Deployment auf das aktuelle Datum zu setzen, egal ob sich der Inhalt der Seite tatsächlich geändert hat",
            "Die Sitemap nach größeren Änderungen nicht in der Search Console einzureichen",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Garantiert eine Sitemap, dass meine Seiten indexiert werden?",
        "Nein – sie ist ein Hinweis, der die Auffindbarkeit unterstützt, keine Garantie. Die Indexierung hängt weiterhin von Inhaltsqualität, Crawlbarkeit und davon ab, dass die Seite nicht durch robots.txt oder ein noindex-Tag blockiert ist.",
      ],
      [
        "Sollten sich die lastmod-Daten bei jedem Build automatisch aktualisieren?",
        "Nein – lastmod sollte widerspiegeln, wann sich der Inhalt einer Seite tatsächlich geändert hat, nicht wann die Website zuletzt neu gebaut wurde. Es bei jedem Deployment unabhängig von echten Änderungen auf das aktuelle Datum zu setzen, macht es als Aktualitätssignal wertlos.",
      ],
      [
        "Wie viele URLs passen in eine einzelne Sitemap?",
        "Laut Sitemap-Protokoll bis zu 50.000 URLs oder 50 MB unkomprimiert – größere Websites brauchen eine Sitemap-Index-Datei, die auf mehrere einzelne Sitemaps verweist.",
      ],
    ],
  },
];
