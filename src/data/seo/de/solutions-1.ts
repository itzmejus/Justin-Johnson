import type { SeoPageTranslation } from "../types";

export const solutionPagesDe1: SeoPageTranslation[] = [
  {
    slug: "ai-development-services",
    title: "KI-Entwicklung | Justin Johnson",
    description: "KI-Entwicklung – Integration von LLM-APIs in echte Anwendungen für Support, Suche und Workflow-Automatisierung.",
    h1: "KI-Entwicklung",
    eyebrow: "KI & Automatisierung",
    primaryKeyword: "KI-Entwicklung",
    secondaryKeywords: [
      "KI Entwickler beauftragen",
      "individuelle KI-Anwendung entwickeln",
      "KI Integration Entwickler",
      "angewandte KI-Entwicklung",
    ],
    intro: [
      "KI-Entwicklung bedeutet in der Praxis meist, eine bestehende Large-Language-Model-API (OpenAI, Anthropic) in den tatsächlichen Ablauf einer Anwendung zu integrieren – nicht, Modelle von Grund auf zu trainieren. Die Entwicklungsarbeit steckt im Prompt-Design, im Abruf des richtigen Kontexts, im sauberen Umgang mit Fehlern und darin, das Ergebnis so einzubinden, dass der Rest der App zuverlässig damit arbeiten kann.",
      "Ich baue diese als normale Anwendungsfunktionen – einen Chatbot, eine Dokumentenverarbeitung, einen Schritt zur Lead-Qualifizierung – auf Basis einer LLM-API, statt als eigenständige KI-Demos, die mit nichts verbunden sind.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Wiederkehrende Aufgaben – Zusammenfassen, Kategorisieren, Antworten entwerfen –, die Zeit der Mitarbeiter kosten und einem recht einheitlichen Muster folgen",
            "Kundenseitige Inhalte oder Support, die skalieren müssen, ohne dass das Personal linear mitwächst",
            "Unstrukturierte Daten (Dokumente, E-Mails, Formulareingaben), die in strukturierte, nutzbare Informationen umgewandelt werden müssen",
            "KI-Funktionen zu wollen, ohne zu wissen, wo die eigentliche technische Komplexität liegt – meist nicht im Modell, sondern in der Integration drumherum",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Integration von LLM-APIs (OpenAI, Anthropic oder andere, je nach Anwendungsfall)",
            "Prompt-Design und Tests für die konkrete Aufgabe",
            "Retrieval-Augmented Generation für Antworten auf Basis Ihrer eigenen Daten",
            "Verarbeitung strukturierter Ausgaben, damit KI-Antworten sauber in den Rest der Anwendung einfließen",
            "Fallback-Verhalten für den Fall, dass die Modellausgabe nicht verwertbar ist",
            "Kostenüberwachung, da die Nutzung von LLM-APIs pro Token abgerechnet wird",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Die konkrete Aufgabe präzise definieren – vage „KI hinzufügen“-Wünsche werden auf ein konkretes Eingabe-/Ausgabe-Problem eingegrenzt",
            "Mit einem kleinen Testdatensatz einen Prototyp bauen, um den Ansatz zu validieren, bevor die vollständige Integration entsteht",
            "Die Integration mit sauberer Fehlerbehandlung und Fallback-Verhalten umsetzen",
            "Nach dem Livegang Monitoring für Kosten und Ausgabequalität ergänzen",
            "Prompts anhand der echten Nutzung weiterentwickeln, nicht nur anhand der ersten Tests",
          ],
        ],
      },
      {
        heading: "Technologie-Stack",
        blocks: [
          [
            "OpenAI API / Anthropic API",
            "Node.js",
            "Vektordatenbanken für das Retrieval",
            "TypeScript für typisierte strukturierte Ausgaben",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Trainieren Sie eigene KI-Modelle?",
        "Nein – für die allermeisten geschäftlichen Anwendungen liefert die Integration eines bestehenden Large Language Models per API, kombiniert mit Ihren eigenen Daten (Retrieval-Augmented Generation), schneller und zuverlässiger bessere Ergebnisse als ein selbst trainiertes Modell, das weit mehr Daten und Infrastruktur erfordert, als die meisten Projekte rechtfertigen können.",
      ],
      [
        "Was kostet der Betrieb einer KI-Funktion?",
        "LLM-APIs rechnen pro verarbeitetem Token ab, die Kosten skalieren also mit dem Nutzungsvolumen und damit, wie viel Kontext jede Anfrage mitsendet. Ich richte ein Monitoring ein, damit die tatsächlichen Kosten früh sichtbar sind, statt als Überraschung auf der Rechnung aufzutauchen.",
      ],
      [
        "Was passiert, wenn die KI eine falsche Antwort gibt?",
        "Dafür wird explizit vorgesorgt – mit Konfidenzschwellen, Übergabe an einen Menschen oder einer Standardantwort sowie Antworten, die auf Ihren tatsächlichen Daten (RAG) statt auf dem allgemeinen Training des Modells beruhen. Das reduziert falsche Ausgaben, beseitigt sie aber nicht vollständig.",
      ],
      [
        "Werden meine Daten zum Training des KI-Modells verwendet?",
        "Das hängt von den Bedingungen des Anbieters und dem genutzten API-Tarif ab – die meisten Enterprise-API-Tarife großer Anbieter schließen Ihre Daten ausdrücklich vom Training aus. Es lohnt sich, das anhand der aktuellen Richtlinie des jeweiligen Anbieters zu prüfen, bevor sensible Daten gesendet werden.",
      ],
    ],
  },
  {
    slug: "ai-chatbot-development",
    title: "KI-Chatbot-Entwicklung | Justin Johnson",
    description: "Individuelle KI-Chatbots – auf Basis Ihrer eigenen Inhalte, integriert in Ihre Website oder Ihr Produkt, kein generisches Widget.",
    h1: "KI-Chatbot-Entwicklung",
    eyebrow: "KI & Automatisierung",
    primaryKeyword: "KI-Chatbot-Entwicklung",
    secondaryKeywords: [
      "individuellen KI-Chatbot entwickeln lassen",
      "Website-Chatbot Entwicklung",
      "GPT-basierter Chatbot",
      "KI-Chatbot Integration",
    ],
    intro: [
      "Ein nützlicher Chatbot stützt sich auf Ihre konkreten Inhalte – Produktdetails, Dokumentation, Richtlinien – statt auf das Allgemeinwissen des Modells, das Chatbots dazu bringt, selbstbewusst Dinge zu erfinden. Ich baue sie mit Retrieval-Augmented Generation, sodass Antworten aus Ihren tatsächlichen Daten gezogen werden, bevor das Modell eine Antwort formuliert.",
      "Die Oberfläche selbst ist meist der kleinere Teil der Arbeit; die Retrieval-Pipeline und das Verhalten, wenn der Bot etwas nicht weiß, machen den Großteil des Entwicklungsaufwands aus.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Wiederkehrende Kundenfragen, die ein Support-Team immer wieder gleich beantwortet",
            "Dokumentation oder FAQs, die schwer durchsuchbar sind und bei denen eine dialogbasierte Oberfläche schneller die richtige Antwort findet",
            "Support außerhalb der Geschäftszeiten, ohne rund um die Uhr ein Live-Team zu besetzen",
            "Generische Chat-Widgets von Drittanbietern, die über Ihr konkretes Produkt eigentlich nichts wissen",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Retrieval-Pipeline, die Ihre Inhalte (Dokumentation, Produktdaten, FAQs) für fundierte Antworten indexiert",
            "Chat-Oberfläche im Design Ihrer Website statt eines generischen eingebetteten Widgets",
            "Übergabe an einen Menschen bei Fragen, die der Bot nicht sicher beantworten kann",
            "Protokollierung der Antworten, damit Sie sehen, was Menschen tatsächlich fragen",
            "Rate Limiting und Schutz vor Missbrauch",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Die Inhalte bestimmen, auf die der Bot zugreifen soll, und sie in ein durchsuchbares, in Abschnitte gegliedertes Format bringen",
            "Die Retrieval-Pipeline bauen, damit relevante Inhalte in den Kontext geladen werden, bevor das Modell antwortet",
            "Das Fallback-Verhalten für Fragen außerhalb des fundierten Wissens des Bots gestalten",
            "Die Chat-Oberfläche passend zum Design Ihrer Website bauen",
            "Vor dem Launch mit echten Fragen testen, nicht nur mit den offensichtlichen",
          ],
        ],
      },
      {
        heading: "Geeignet für",
        blocks: [
          [
            "Websites mit so viel Dokumentation oder Produktinhalten, dass die Suche allein Antworten nicht effizient findet, und Support-Teams, die eine große Zahl wiederkehrender, gut dokumentierter Fragen bearbeiten.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Erfindet der Chatbot Dinge?",
        "Durch die Verankerung in Ihren tatsächlichen Inhalten per Retrieval-Augmented Generation passiert das deutlich seltener als bei einem Chatbot, der sich nur auf das allgemeine Training des Modells stützt. Kein LLM-basiertes System beseitigt das Risiko aber vollständig – deshalb ist ein Weg zu einem Menschen bei allem Wichtigen entscheidend.",
      ],
      [
        "Kann er an einen Menschen übergeben?",
        "Ja – wenn die Konfidenz des Bots gering ist oder die Frage außerhalb seines fundierten Wissens liegt, kann er an einen Mitarbeiter oder ein Kontaktformular weiterleiten, statt zu raten.",
      ],
      [
        "Worin unterscheidet sich das von einem generischen Chatbot-Widget?",
        "Fertige Widgets sind meist entweder skriptbasiert (auf vorgefertigte Abläufe beschränkt) oder mit einem allgemeinen Modell verbunden, ohne Verankerung in Ihren konkreten Inhalten. Dieser Bot wird von Anfang an um Ihre tatsächlichen Produktdaten herum gebaut und passt zum Design Ihrer Website, statt wie ein angeflanschtes Drittanbieter-Tool auszusehen.",
      ],
      [
        "Muss der Chatbot ständig aktualisiert werden?",
        "Der Retrieval-Index muss mit Ihren Inhalten synchron bleiben, wenn sich diese ändern – das wird in der Regel als Teil der Umsetzung automatisiert und ist keine manuelle Aufgabe.",
      ],
    ],
  },
  {
    slug: "ai-automation-services",
    title: "KI-Automatisierung | Justin Johnson",
    description: "KI-Automatisierung für wiederkehrende Geschäftsprozesse – Dokumentenverarbeitung, Kategorisierung und Entwürfe, eingebunden in Ihre bestehenden Tools.",
    h1: "KI-Automatisierung",
    eyebrow: "KI & Automatisierung",
    primaryKeyword: "KI-Automatisierung",
    secondaryKeywords: [
      "Geschäftsprozesse mit KI automatisieren",
      "KI-Automatisierung Entwickler",
      "wiederkehrende Aufgaben mit KI automatisieren",
      "KI-gestützte Automatisierung",
    ],
    intro: [
      "Die zuverlässigste KI-Automatisierung ist kein einzelnes großes System – sie besteht darin, konkrete, wiederkehrende Aufgaben mit einem recht einheitlichen Eingabe-/Ausgabe-Muster zu identifizieren und genau diesen Schritt zu automatisieren, eingebunden in die Tools, die Sie bereits nutzen. E-Mail-Vorsortierung, Dokumentenkategorisierung, erste Antwortentwürfe – bei eng umrissenen, klar definierten Aufgaben ist KI-Automatisierung heute am verlässlichsten.",
      "Ich grenze diese Projekte auf eine konkrete Aufgabe ein, bevor etwas gebaut wird, denn vage Automatisierungsziele führen meist zu Systemen, die echten, unordentlichen Eingaben nicht standhalten.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Arbeitszeit für wiederkehrende Aufgaben, die einem einheitlichen, erlernbaren Muster folgen",
            "Manuelle Dateneingabe aus unstrukturierten Quellen (E-Mails, PDFs, Formulare) in ein strukturiertes System",
            "Langsame Reaktionszeiten bei Routineanfragen, weil sie hinter wichtigeren Aufgaben warten",
            "Prozesse mit bereits klaren Regeln, die trotzdem jemand von Hand ausführen muss",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Prozessanalyse, um zu ermitteln, was tatsächlich automatisierbar ist und was weiterhin menschliches Urteil braucht",
            "KI-gestützte Klassifizierung, Extraktion oder Entwürfe für die identifizierte Aufgabe",
            "Integration mit bestehenden Tools (E-Mail, CRM, Tabellen, interne Systeme)",
            "Menschliche Prüfung für alles oberhalb einer festgelegten Konfidenz- oder Risikoschwelle",
            "Monitoring, damit die Qualität der Automatisierung sichtbar ist und keine Blackbox bleibt",
          ],
        ],
      },
      {
        heading: "So arbeite ich",
        blocks: [
          [
            "Den aktuellen Prozess Schritt für Schritt erfassen, um den konkreten Engpass zu finden, dessen Automatisierung sich lohnt",
            "Die Automatisierung an echten historischen Beispielen prototypisch testen, bevor die vollständige Pipeline entsteht",
            "Die Integration in bestehende Tools bauen, nicht als separates System, das niemand nutzt",
            "Eine Human-in-the-Loop-Prüfung ergänzen, wo Fehler teuer sind",
            "Die Genauigkeit über die Zeit überwachen und bei auftauchenden Sonderfällen nachjustieren",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Welche Aufgaben eignen sich tatsächlich für KI-Automatisierung?",
        "Aufgaben mit einem einheitlichen Muster und moderaten Fehlerkosten – eingehende E-Mails kategorisieren, eine erste Antwort entwerfen, Daten aus einem Standarddokumentformat extrahieren. Folgenreiche, stark variierende Entscheidungen sind ohne menschliche Prüfung schlechte Kandidaten.",
      ],
      [
        "Ersetzt das Mitarbeiter?",
        "Am wirkungsvollsten ist es darin, den repetitiven Teil einer Tätigkeit zu übernehmen und Mitarbeitern Zeit für urteilsbasierte Arbeit zu verschaffen, die KI weiterhin schlecht beherrscht. Ob sich dadurch die Personalstärke ändert, ist eine unternehmerische Entscheidung, die die Automatisierung selbst nicht vorgibt.",
      ],
      [
        "Wie genau ist KI-Automatisierung in der Praxis?",
        "Das variiert je nach Aufgabe und sollte vor dem Rollout an Ihren eigenen Daten gemessen statt angenommen werden. Eine menschliche Prüfung für Ausgaben mit geringerer Konfidenz ist bei allem, wo ein Fehler echte Folgen hat, gängige Praxis.",
      ],
    ],
  },
  {
    slug: "openai-api-integration",
    title: "OpenAI API Integration | Justin Johnson",
    description: "Integration der OpenAI API in bestehende Anwendungen – Chat, strukturierte Ausgaben, Function Calling und kostenbewusste Umsetzung.",
    h1: "OpenAI API Integration",
    eyebrow: "KI & Automatisierung",
    primaryKeyword: "OpenAI API Integration",
    secondaryKeywords: [
      "GPT API Integration Entwickler",
      "OpenAI Entwickler beauftragen",
      "ChatGPT API Integration",
      "OpenAI Function Calling",
    ],
    intro: [
      "Die OpenAI API in eine echte Anwendung zu integrieren ist mehr, als einen Prompt zu senden und die Antwort anzuzeigen – es geht um die Verwaltung von Kontextfenstern, das zuverlässige Parsen strukturierter Ausgaben, Function Calling für Aktionen, die das Modell auslösen soll, und die Kostenkontrolle bei wachsender Nutzung.",
      "Ich integriere die API in bestehende Node.js- und Next.js-Anwendungen und behandle Fehlerbehandlung und Kostenüberwachung als Kernanforderungen statt als etwas, das nach dem Launch ergänzt wird.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Chat Completions mit sauberem Streaming für eine reaktionsschnelle Oberfläche",
            "Strukturierte Ausgaben (JSON-Modus / Function Calling) für Antworten, die Ihre App zuverlässig verarbeiten kann",
            "Kontextverwaltung für Unterhaltungen, die sich über mehrere Runden erinnern müssen",
            "Behandlung von Rate Limits und Fehlern, inklusive Wiederholungen mit Backoff",
            "Kostenerfassung pro Anfrage oder pro Nutzer",
          ],
        ],
      },
      {
        heading: "Function Calling",
        blocks: [
          [
            "Mit Function Calling entscheidet das Modell, wann eine bestimmte Aktion in Ihrer App ausgelöst wird – eine Bestellung nachschlagen, einen Termin vereinbaren –, indem es strukturierte Argumente zurückgibt statt freien Text, den Sie parsen müssten. Das macht aus einem Chatbot, der nur redet, etwas, das in Ihrer Anwendung tatsächlich handeln kann.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Welches OpenAI-Modell sollte ich verwenden?",
        "Das hängt von der Komplexität der Aufgabe und der Kostensensibilität ab – ein kleineres, schnelleres Modell reicht für Klassifizierungs- oder Extraktionsaufgaben oft aus und ist günstiger, während komplexes Schlussfolgern von einem größeren Modell profitiert. Ich teste an der tatsächlichen Aufgabe, statt standardmäßig die teuerste Option zu wählen.",
      ],
      [
        "Wie bleiben die API-Kosten planbar?",
        "Durch Nutzungslimits pro Nutzer oder Funktion, Caching von Antworten bei wiederkehrenden Anfragen und die Wahl des kleinsten Modells, das die Aufgabe zuverlässig bewältigt – die Kosten skalieren direkt mit den verarbeiteten Tokens, daher lohnt es sich, unnötigen Kontext zu kürzen.",
      ],
      [
        "Wofür wird Function Calling eingesetzt?",
        "Damit das Modell echte Aktionen auslösen kann – eine Datenbank abfragen, eine andere API aufrufen –, indem es strukturierte Argumente passend zu einer von Ihnen definierten Funktionssignatur zurückgibt, statt freien Text, den Ihre App parsen und interpretieren müsste.",
      ],
    ],
  },
  {
    slug: "ai-customer-support-automation",
    title: "KI-Kundensupport-Automatisierung | Justin Johnson",
    description: "KI-gestützter Kundensupport – Ticket-Vorsortierung, Antwortentwürfe und fundierte Antworten, mit eingebauter Eskalation an einen Menschen.",
    h1: "KI-Kundensupport-Automatisierung",
    eyebrow: "KI & Automatisierung",
    primaryKeyword: "KI Kundensupport Automatisierung",
    secondaryKeywords: [
      "KI Ticket-Vorsortierung",
      "automatisierter Kundenservice",
      "KI Helpdesk Integration",
      "Support-Automatisierung Entwickler",
    ],
    intro: [
      "Support-Automatisierung funktioniert am besten als Unterstützung statt als vollständiger Ersatz – eingehende Tickets vorsortieren und kategorisieren, eine erste Antwort entwerfen, die ein Mitarbeiter vor dem Versand prüft, und Routinefragen bei hoher Konfidenz direkt beantworten, mit einem klaren Weg zu einem Menschen für alles andere.",
      "Ich baue das integriert in die Support-Werkzeuge, die Sie bereits nutzen, statt als separates System, das Mitarbeiter zusätzlich prüfen müssen.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Support-Warteschlangen, in denen ein großer Teil der Tickets aus routinemäßigen, wiederholten Fragen besteht",
            "Lange Reaktionszeiten bei hohem Aufkommen, weil alles auf einen Menschen wartet",
            "Uneinheitliche Antworten verschiedener Mitarbeiter auf dieselbe häufige Frage",
            "Keine Kategorisierung oder Priorisierung eingehender Tickets, sodass dringende Anliegen neben Routinefällen liegen",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Automatische Kategorisierung und Priorisierung von Tickets",
            "Fundierte Antwortvorschläge für häufige Fragen auf Basis Ihrer Dokumentation",
            "Antwortentwürfe, die Mitarbeiter prüfen und versenden – kein automatischer Versand",
            "Eskalationsregeln für alles außerhalb routinemäßiger, gut dokumentierter Fälle",
            "Integration in bestehende Helpdesk-Tools",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Wird der Support damit vollständig automatisiert?",
        "Für die meisten Unternehmen nicht – das zuverlässigere Muster ist, Vorsortierung und Entwürfe zu automatisieren, wobei zumindest anfangs ein Mensch prüft, bevor etwas versendet wird. Vollautomatische Antworten eignen sich nur für eine schmale Gruppe von Fragen mit hoher Konfidenz und geringem Risiko.",
      ],
      [
        "Woher kennt das System die richtige Antwort?",
        "Es stützt sich per Retrieval auf Ihre tatsächliche Dokumentation und bereits gelöste Tickets statt auf das Allgemeinwissen des Modells – genau das hält die Antworten präzise für Ihr konkretes Produkt und Ihre Richtlinien.",
      ],
      [
        "Lässt es sich in unseren bestehenden Helpdesk integrieren?",
        "Ja, in der Regel über die API der Helpdesk-Plattform – Tickets werden innerhalb Ihres bestehenden Tools kategorisiert und Antwortentwürfe dort erzeugt, ohne dass Mitarbeiter in ein separates System wechseln müssen.",
      ],
    ],
  },
  {
    slug: "ai-lead-generation-systems",
    title: "KI-Systeme zur Leadgenerierung | Justin Johnson",
    description: "KI-gestützte Lead-Qualifizierung und -Erfassung – eingehende Leads bewerten und weiterleiten, bevor sie den Vertrieb erreichen.",
    h1: "KI-Systeme zur Leadgenerierung",
    eyebrow: "KI & Automatisierung",
    primaryKeyword: "KI Leadgenerierung",
    secondaryKeywords: [
      "KI Lead-Qualifizierung",
      "automatisiertes Lead-Scoring",
      "KI Vertriebs-Leads erfassen",
      "Chatbot zur Lead-Qualifizierung",
    ],
    intro: [
      "Der Engpass in den meisten Setups zur Leadgenerierung ist nicht, Interesse zu wecken, sondern es schnell genug zu qualifizieren und weiterzuleiten – ein Lead, der einen Tag unqualifiziert liegen bleibt, ist bereits abgekühlt. Ich baue Systeme, die über dialogbasierte Formulare oder Chat-Oberflächen vorab qualifizierende Informationen erfassen und den Lead dann automatisch bewerten und weiterleiten.",
      "Das wird an Ihr bestehendes CRM angebunden, statt zu einer separaten Lead-Liste zu werden, die jemand manuell abgleichen muss.",
    ],
    sections: [
      {
        heading: "Welche Probleme das löst",
        blocks: [
          [
            "Generische Kontaktformulare, die eine E-Mail-Adresse, aber keine nützlichen Qualifizierungsinformationen erfassen",
            "Vertriebsmitarbeiter, die Zeit mit Leads verbringen, die nie konvertiert hätten",
            "Langsame Reaktion auf eingehendes Interesse, weil die Qualifizierung erst im Nachhinein manuell erfolgt",
            "Kein einheitliches Scoring, sodass die Priorisierung auf Bauchgefühl statt auf echten Passungssignalen beruht",
          ],
        ],
      },
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Dialogbasiertes Erfassungsformular oder Chatbot, der qualifizierende Details natürlich abfragt",
            "Lead-Scoring nach Kriterien, die zu Ihrem Vertriebsprozess passen",
            "Automatische Weiterleitung an den richtigen Mitarbeiter oder das richtige Team je nach Lead-Profil",
            "CRM-Integration, damit Leads dort landen, wo der Vertrieb bereits arbeitet",
            "Follow-up-Sequenzen für Leads, die noch nicht vertriebsreif sind",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Worin unterscheidet sich das von einem normalen Kontaktformular?",
        "Ein normales Formular erfasst die von Ihnen definierten Felder – statisch und für alle gleich. Eine dialogbasierte Erfassung kann je nach vorherigen Antworten Rückfragen stellen und so mehr nützliche Qualifizierungsinformationen sammeln, ohne dass sich das Formular lang anfühlt.",
      ],
      [
        "Wie wird das Lead-Scoring festgelegt?",
        "Anhand von Kriterien, die zu Ihrem Unternehmen passen – Budgetsignale, Zeitrahmen, Unternehmensgröße, alles, was in Ihrem Vertriebsprozess tatsächlich mit einer Conversion zusammenhängt –, gemeinsam in der Konzeptionsphase definiert statt nach generischer Vorlage.",
      ],
      [
        "Ersetzt das unser CRM?",
        "Nein – es speist qualifizierte, bewertete Leads in Ihr bestehendes CRM ein, sodass der Vertrieb weiterhin im selben System arbeitet, statt ein separates Tool prüfen zu müssen.",
      ],
    ],
  },
  {
    slug: "ai-powered-crm-solutions",
    title: "KI-gestützte CRM-Lösungen | Justin Johnson",
    description: "CRM-Entwicklung mit integrierten KI-Funktionen – zusammengefasste Aktivitäten, entworfene Follow-ups und intelligente Lead-Priorisierung.",
    h1: "KI-gestützte CRM-Lösungen",
    eyebrow: "KI & Automatisierung",
    primaryKeyword: "KI-gestütztes CRM",
    secondaryKeywords: [
      "KI CRM Entwickler",
      "CRM mit KI-Funktionen",
      "intelligente CRM-Entwicklung",
      "KI-gestütztes Kundenmanagement",
    ],
    intro: [
      "Ein CRM enthält viel unstrukturierte Historie – Gesprächsnotizen, E-Mails, frühere Interaktionen –, die vor einem Follow-up selten vollständig gelesen wird. KI-Funktionen auf einem CRM können diese Historie zusammenfassen, auf dieser Basis ein Follow-up entwerfen und priorisieren, welche Kontakte Aufmerksamkeit brauchen, ohne die zentrale Datenhaltung des CRM zu ersetzen.",
      "Das baut auf der individuellen CRM-Entwicklung auf und ergänzt KI-Fähigkeiten gezielt dort, wo sie echte Zeit sparen, statt als generisches Zusatzmodul.",
    ],
    sections: [
      {
        heading: "Leistungsumfang",
        blocks: [
          [
            "Automatische Zusammenfassung langer Kontakt- oder Deal-Historien",
            "Entworfene Follow-up-E-Mails auf Basis des Kontexts aus dem CRM-Datensatz",
            "Intelligente Priorisierung, welche Leads oder Kunden Aufmerksamkeit brauchen",
            "Suche in natürlicher Sprache über CRM-Datensätze („zeige Deals, die seit über 30 Tagen stocken“)",
            "Unterstützung bei der Dateneingabe – strukturierte Felder aus unstrukturierten Notizen extrahieren",
          ],
        ],
      },
      {
        heading: "Wie das zu einer individuellen CRM-Entwicklung passt",
        blocks: [
          [
            "Diese Funktionen setzen auf einem sauber modellierten CRM auf – ohne saubere Daten darunter sind sie nicht nützlich. Wenn Sie noch kein CRM haben, das zu Ihrem Prozess passt, kommt das zuerst; KI-Funktionen sind die Schicht, die ergänzt wird, sobald das Datenmodell solide ist.",
          ],
        ],
      },
    ],
    faqs: [
      [
        "Lässt sich das zu einem bestehenden CRM hinzufügen?",
        "Ja, wenn das CRM eine zugängliche API oder Datenbank hat – die KI-Schicht liest aus den bestehenden Datensätzen und schreibt dorthin zurück, ohne ein komplett neues CRM zu erfordern, solange die zugrunde liegenden Daten einigermaßen strukturiert sind.",
      ],
      [
        "Müssen Vertriebsmitarbeiter die Datensätze dann nicht mehr prüfen?",
        "Doch – die KI fasst Informationen schneller zusammen und macht sie sichtbar, und Entwürfe werden nicht ohne Prüfung versendet. Ziel ist es, die Zeit für das Durchlesen der Historie vor dem Handeln zu verkürzen, nicht das menschliche Urteil aus der Interaktion zu entfernen.",
      ],
      [
        "Wie genau sind die Zusammenfassungen?",
        "Sie stützen sich direkt auf den tatsächlichen Inhalt des CRM-Datensatzes statt auf Allgemeinwissen, was sie präzise bei dem hält, was in Ihren Daten steht – trotzdem lohnt sich bei wichtigen Entscheidungen ein kurzer prüfender Blick auf jede KI-Zusammenfassung.",
      ],
    ],
  },
];
