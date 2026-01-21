export const projektContent = [
    {
        type: "section",
        title: "1. Projektdefinition & Managementgrundlagen",
        text: "Ein Projekt ist durch Zielvorgabe, zeitliche, finanzielle und personelle Begrenzung sowie eine projektspezifische Organisation gekennzeichnet."
    },
    {
        type: "list",
        title: "SMART-Methode zur Zielformulierung",
        items: [
            "S - Spezifisch: Das Ziel muss eindeutig definiert sein.",
            "M - Messbar: Erfolgskriterien müssen quantifizierbar sein.",
            "A - Attraktiv: Das Ziel muss für alle Beteiligten lohnenswert und akzeptiert sein.",
            "R - Realistisch: Das Ziel muss mit den verfügbaren Ressourcen erreichbar sein.",
            "T - Terminiert: Es gibt einen klaren Zeitrahmen und ein Enddatum."
        ]
    },
    {
        type: "section",
        title: "2. Anforderungsmanagement & Kunden",
        text: "Die Klärung der Anforderungen ist die Basis für das Pflichtenheft."
    },
    {
        type: "list",
        title: "Lastenheft vs. Pflichtenheft",
        items: [
            "Lastenheft: Vom AUFTRAGGEBER erstellt. Beschreibt, WAS gemacht werden soll (Anforderungen).",
            "Pflichtenheft: Vom AUFTRAGNEHMER erstellt. Beschreibt, WIE die Anforderungen technisch umgesetzt werden.",
            "Kundenmanagement: Unterscheidung zwischen externen Kunden (Markt) und internen Kunden (andere Abteilungen im Unternehmen)."
        ]
    },
    {
        type: "section",
        title: "3. Netzplantechnik (Terminplanung)",
        text: "Der Netzplan ist ein grafisches Werkzeug zur Zeitplanung und Analyse von Abhängigkeiten. Er ermöglicht die Berechnung der Projektdauer und von Puffern."
    },
    {
        type: "list",
        title: "Berechnungen im Netzplan",
        items: [
            "FAZ (Frühestmöglicher Anfangszeitpunkt): Vorwärtsterminierung (Maximum der FEZ der Vorgänger).",
            "FEZ (Frühestmöglicher Endzeitpunkt): FAZ + Dauer.",
            "SEZ (Spätestzulässiger Endzeitpunkt): Rückwärtsterminierung (Minimum der SAZ der Nachfolger).",
            "SAZ (Spätestzulässiger Anfangszeitpunkt): SEZ - Dauer.",
            "Gesamtpuffer (GP): SEZ - FEZ (oder SAZ - FAZ). Zeit, um die sich ein Vorgang verschieben kann, ohne das Projektende zu gefährden.",
            "Freier Puffer (FP): FAZ (Nachfolger) - FEZ (Vorgang). Zeit, um die sich ein Vorgang verschieben kann, ohne den FAZ des Nachfolgers zu gefährden.",
            "Kritischer Pfad: Die Kette von Vorgängen, bei denen der Gesamtpuffer = 0 ist."
        ]
    },
    {
        type: "image",
        title: "Netzplantechnik (Beispiel mit Kritischem Pfad & Puffern)",
        url: "/assets/images/netzplan.png"
    },
    {
        type: "section",
        title: "4. Projekt-Visualisierung (Gantt-Chart)",
        text: "Das Gantt-Chart (Balkendiagramm) visualisiert den zeitlichen Ablauf von Aufgaben auf einer Zeitachse."
    },
    {
        type: "list",
        title: "Vorteile des Gantt-Charts",
        items: [
            "Übersichtlichkeit: Man sieht sofort, welche Aufgabe wann startet und wie lange sie dauert.",
            "Meilensteine: Wichtige Ereignisse ohne Dauer werden als Rauten markiert.",
            "Abhängigkeiten: Pfeile zeigen, welche Aufgabe von einer anderen abhängt.",
            "Ressourcenplanung: Man erkennt Überlastungen von Mitarbeitern oder Maschinen."
        ]
    },
    {
        type: "section",
        title: "4. Klassische & Agile Methoden",
        text: "Je nach Komplexität und Flexibilitätsbedarf werden unterschiedliche Frameworks gewählt."
    },
    {
        type: "list",
        title: "Vorgehensmodelle",
        items: [
            "Wasserfall: Jede Phase wird sequenziell abgearbeitet.",
            "V-Modell: Erweitert den Wasserfall um dedizierte Testphasen.",
            "Scrum: Iteratives Arbeiten in Sprints mit festen Rollen (PO, Scrum Master, Team).",
            "Kanban: Fokus auf kontinuierlichen Fluss und WIP-Limits."
        ]
    }
];

export const projektQuiz = [
    {
        question: "Wofür steht das 'S' in der SMART-Methode?",
        options: ["Sicher", "Spezifisch", "Schnell", "Systematisch"],
        answer: 1
    },
    {
        question: "Welches Dokument wird vom Auftraggeber erstellt und beschreibt dessen Anforderungen?",
        options: ["Pflichtenheft", "Lastenheft", "Projektauftrag", "Rechnung"],
        answer: 1
    },
    {
        question: "Was beschreibt der 'Freie Puffer' (FP) in der Netzplantechnik?",
        options: ["Zeit, bis das Projekt scheitert", "Zeit, um die ein Vorgang verschoben werden kann, ohne den Start des direkten Nachfolgers zu verzögern", "Die gesamte Reservezeit des Projekts", "Die Dauer der Mittagspause"],
        answer: 1
    },
    {
        question: "Wie berechnet man den Frühestmöglichen Endzeitpunkt (FEZ)?",
        options: ["SAZ + Dauer", "FAZ + Dauer", "SEZ - Dauer", "FAZ - Dauer"],
        answer: 1
    },
    {
        question: "Vorgänge auf dem 'Kritischen Pfad' haben einen Gesamtpuffer von...",
        options: ["Maximal 5 Tagen", "Genau 0", "Unendlich", "Immer 1"],
        answer: 1
    },
    {
        question: "Was ist das Hauptziel der Rückwärtsterminierung im Netzplan?",
        options: ["Den FAZ zu finden", "Die spätestzulässigen Zeitpunkte (SAZ, SEZ) zu bestimmen", "Die Dauer zu verkürzen", "Den Starttermin zu feiern"],
        answer: 1
    },
    {
        question: "Was bedeutet das 'A' in SMART bei der Zielformulierung?",
        options: ["Aufwendig", "Attraktiv / Akzeptiert", "Automatisch", "Anspruchslos"],
        answer: 1
    },
    {
        question: "Wer erstellt in der Regel das Pflichtenheft?",
        options: ["Der Kunde", "Der Auftraggeber", "Der Auftragnehmer / Dienstleister", "Der Staat"],
        answer: 2
    },
    {
        question: "Ein Vorgang hat FAZ=10, Dauer=5, SEZ=20. Wie hoch ist der Gesamtpuffer?",
        options: ["0", "5", "10", "15"],
        answer: 1
    },
    {
        question: "Was ist ein 'interner Kunde'?",
        options: ["Ein Kunde, der im Laden kauft", "Eine andere Abteilung/Kollege innerhalb des eigenen Unternehmens", "Ein geheimer Testkäufer", "Der Chef"],
        answer: 1
    },
    {
        question: "Welches Zielkriterium fehlt hier: Spezifisch, Messbar, Attraktiv, Realistisch und ...?",
        options: ["Teuer", "Terminiert", "Technisch", "Toll"],
        answer: 1
    },
    {
        question: "Was bedeutet 'FEZ = FAZ + Dauer'?",
        options: ["Vorwärtsterminierung", "Rückwärtsterminierung", "Pufferberechnung", "Kritischer Pfad"],
        answer: 0
    },
    {
        question: "In einem Netzplan verzögert sich ein Vorgang auf dem kritischen Pfad um 2 Tage. Was passiert mit dem Projektende?",
        options: ["Nichts, es gibt Puffer", "Es verschiebt sich ebenfalls um 2 Tage nach hinten", "Es wird 2 Tage früher fertig", "Das Projekt wird abgebrochen"],
        answer: 1
    },
    {
        question: "Was beschreibt das 'Pflichtenheft'?",
        options: ["Die Wünsche des Kunden", "Die technische Umsetzung (WIE) der Anforderungen", "Die rechtlichen Bedingungen", "Die Kostenaufstellung"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Messbarkeit' eines Ziels?",
        options: ["Dass man ein Lineal braucht", "Dass Erfolg an objektiven Kriterien (z.B. Zeit, Kosten, Qualität) geprüft werden kann", "Dass das Ziel groß ist", "Dass die Mitarbeiter zufrieden sind"],
        answer: 1
    },
    {
        question: "Was ist die Vorwärtsterminierung?",
        options: ["Berechnung vom Projektende zum Start", "Berechnung vom Projektstart zum Ende (FAZ/FEZ)", "Berechnung der Puffer", "Einteilung der Teams"],
        answer: 1
    },
    {
        question: "Was ist ein Merkmal für die Komplexität eines Projekts?",
        options: ["Es ist sehr einfach", "Viele Abhängigkeiten und Beteiligte", "Dass es nur einen Tag dauert", " Dass es billig ist"],
        answer: 1
    },
    {
        question: "Wie wird der SAZ berechnet?",
        options: ["SEZ - Dauer", "FAZ + Dauer", "FEZ + Puffer", "SAZ = FAZ"],
        answer: 0
    },
    {
        question: "Ein Ziel lautet: 'Wir wollen besser werden.' Welches SMART-Kriterium ist hier am wenigsten erfüllt?",
        options: ["Terminiert", "Messbar / Spezifisch", "Realistisch", "Attraktiv"],
        answer: 1
    },
    {
        question: "Was passiert, wenn der SEZ kleiner als der FEZ ist?",
        options: ["Das Projekt ist unmöglich im Zeitrahmen zu schaffen", "Es gibt viel Puffer", "Der Netzplan ist perfekt", "Das Projekt endet früher"],
        answer: 0
    },
    {
        question: "Was ist ein 'Meilenstein'?",
        options: ["Eine schwere Aufgabe", "Ein prüfbares Zwischenergebnis mit Dauer = 0", "Das Projektende", "Ein physischer Stein"],
        answer: 1
    },
    {
        question: "Wozu dient das Projekt-Controlling?",
        options: ["Zur Überwachung von Zeit, Kosten und Qualität", "Nur zur Kontrolle der Mitarbeiter", "Um Fehlermeldungen zu schreiben", "Um neue Aufträge zu suchen"],
        answer: 0
    },
    {
        question: "Was ist 'Scope Creep'?",
        options: ["Ein langsamer Computer", "Unkontrollierte Ausweitung des Projektumfangs", "Ein neues Feature in Scrum", "Der Projektabschluss"],
        answer: 1
    },
    {
        question: "Was beschreibt der 'Gesamtpuffer'?",
        options: ["Maximale Verspätung eines Vorgangs ohne Gefährdung des PROJEKTENDES", "Maximale Verspätung ohne Gefährdung des NÄCHSTEN Vorgangs", "Die Dauer der Pause", "Die Anzahl der Mitarbeiter"],
        answer: 0
    },
    {
        question: "Warum sollte ein Ziel 'Attraktiv' sein?",
        options: ["Damit es gut aussieht", "Um die Motivation und Akzeptanz bei den Beteiligten sicherzustellen", "Um mehr Geld zu verlangen", "Damit es leichter ist"],
        answer: 1
    },
    {
        question: "In welcher Phase wird das Lastenheft erstellt?",
        options: ["Planungsphase", "Definitionsphase", "Realisierungsphase", "Abschlussphase"],
        answer: 1
    },
    {
        question: "Was ist die 'Terminierung' eines Ziels?",
        options: ["Dass es gelöscht wird", "Festlegung eines genauen Zeitpunkts (Deadline)", "Die Wahl des Namens", "Die Wahl der Tools"],
        answer: 1
    },
    {
        question: "Was ist ein 'Vorgänger' im Netzplan?",
        options: ["Der Chef", "Ein Vorgang, der abgeschlossen sein muss, bevor der aktuelle starten kann", "Ein alter Computer", "Ein früherer Mitarbeiter"],
        answer: 1
    },
    {
        question: "Was bedeutet 'SMART' in der Projektplanung insgesamt?",
        options: ["Ein kleines Auto", "Ein Leitfaden für präzise Zieldefinitionen", "Ein Programm zur Code-Analyse", "Ein Verschlüsselungsverfahren"],
        answer: 1
    },
    {
        question: "Welches Diagramm visualisiert Netzpläne oft zeitlich?",
        options: ["Balkendiagramm (Gantt)", "Kreisdiagramm", "Klassendiagramm", "Mindmap"],
        answer: 0
    }
];
