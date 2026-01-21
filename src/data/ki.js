export const kiContent = [
    {
        type: "section",
        title: "1. Grundlagen der Künstlichen Intelligenz",
        text: "Seit 2025 ist KI ein fester Bestandteil der AP1. Es geht um das Verständnis der Funktionsweise und der verschiedenen Ansätze."
    },
    {
        type: "list",
        title: "Definitionen",
        items: [
            "Schwache KI (Narrow AI): Auf ein bestimmtes Problem spezialisiert (z.B. Schachcomputer, Bilderkennung, ChatGPT).",
            "Starke KI (General AI): Hypothetische KI, die alle kognitiven Fähigkeiten eines Menschen besitzt.",
            "Maschinelles Lernen (ML): Algorithmen, die aus Daten lernen und Muster erkennen, ohne explizit programmiert zu werden."
        ]
    },
    {
        type: "section",
        title: "2. Maschinelles Lernen - Verfahren",
        text: "Wie lernt eine KI? Es gibt drei grundlegende Lernparadigmen."
    },
    {
        type: "list",
        title: "Lernverfahren",
        items: [
            "Supervised Learning (Überwacht): Lernen mit gelabelten Daten (Input + korrekte Lösung). Ziel: Vorhersage.",
            "Unsupervised Learning (Unüberwacht): Erkennt selbstständig Muster in unbenannten Daten (Clustering).",
            "Reinforcement Learning (Bestärkend): Lernen durch Belohnung und Bestrafung in einer Umgebung."
        ]
    },
    {
        type: "section",
        title: "3. Neuronale Netze & Deep Learning",
        text: "Deep Learning nutzt künstliche neuronale Netze, die dem menschlichen Gehirn nachempfunden sind."
    },
    {
        type: "list",
        title: "Architektur",
        items: [
            "Input Layer: Nimmt die Daten auf.",
            "Hidden Layers: Verarbeiten die Informationen durch Gewichtung und Aktivierungsfunktionen.",
            "Output Layer: Gibt das Ergebnis aus (z.B. Wahrscheinlichkeit für 'Katze' oder 'Hund').",
            "Backpropagation: Verfahren zur Anpassung der Gewichte, um Fehler zu minimieren."
        ]
    },
    {
        type: "section",
        title: "4. Ethische & Rechtliche Aspekte",
        text: "Der Einsatz von KI bringt neue Herausforderungen mit sich."
    },
    {
        type: "list",
        title: "Herausforderungen",
        items: [
            "Bias (Voreingenommenheit): KI übernimmt Vorurteile aus den Trainingsdaten.",
            "Black Box: Oft ist nicht nachvollziehbar, wie eine KI zu einer Entscheidung kam.",
            "EU AI Act: Das weltweit erste umfassende Gesetz zur Regulierung von KI (Risikoklassifizierung).",
            "Urheberrecht: Wem gehören KI-generierte Werke?"
        ]
    }
];

export const kiQuiz = [
    {
        question: "Was unterscheidet 'Starke KI' von 'Schwacher KI'?",
        options: ["Starke KI braucht mehr Strom", "Starke KI besitzt menschenähnliche kognitive Fähigkeiten in allen Bereichen", "Schwache KI ist nur für Hardware gedacht", "Es gibt keinen Unterschied"],
        answer: 1
    },
    {
        question: "Welches Lernverfahren nutzt 'gelabelte' Daten?",
        options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Deep Learning"],
        answer: 1
    },
    {
        question: "Was ist das Ziel von 'Clustering'?",
        options: ["Daten zu verschlüsseln", "Ähnliche Datenpunkte in Gruppen zu ordnen", "Dateien zu löschen", "Software zu installieren"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Bias' im Kontext von KI?",
        options: ["Eine besonders schnelle CPU", "Systematische Vorurteile in den Ergebnissen durch voreingenommene Trainingsdaten", "Ein Backup-Verfahren", "Ein Programmierfehler in HTML"],
        answer: 1
    },
    {
        question: "Was ist 'Deep Learning'?",
        options: ["Lernen beim Schlafen", "Ein Teilbereich des ML, der tiefe neuronale Netze nutzt", "Das Lesen von dicken Handbüchern", "Ein neues Betriebssystem"],
        answer: 1
    },
    {
        question: "Was passiert bei der 'Backpropagation'?",
        options: ["Der Strom wird abgeschaltet", "Fehler werden im neuronalen Netz zurückgegeben, um Gewichte anzupassen", "Die KI geht in den Standby-Modus", "Daten werden gelöscht"],
        answer: 1
    },
    {
        question: "Welches Gesetz reguliert KI in der Europäischen Union?",
        options: ["EU AI Act", "DSGVO (nur teilweise)", "BGB", "StGB"],
        answer: 0
    },
    {
        question: "Was ist ein 'Large Language Model' (LLM)?",
        options: ["Ein Modell für große Gebäude", "Ein KI-Modell, das auf die Verarbeitung und Generierung von Text spezialisiert ist", "Ein Modell für Netzwerke", "Ein großes Datenbank-Schema"],
        answer: 1
    },
    {
        question: "Welche Funktion haben die 'Hidden Layers' in einem neuronalen Netz?",
        options: ["Sie speichern nur die Passwörter", "Sie verarbeiten Merkmale der Eingangsdaten durch Gewichtung", "Sie verstecken Viren", "Sie kühlen den Prozessor"],
        answer: 1
    },
    {
        question: "Was versteht man unter 'Generativer KI'?",
        options: ["KI, die nur Strom erzeugt", "KI, die neue Inhalte wie Texte, Bilder oder Musik erstellt", "KI in Kraftwerken", "Alte KI-Systeme"],
        answer: 1
    },
    {
        question: "Was ist ein 'Turing-Test'?",
        options: ["Ein Test für die Festplattengeschwindigkeit", "Ein Test, ob ein Mensch eine KI von einem anderen Menschen unterscheiden kann", "Ein Belastungstest für Server", "Ein Mathematik-Wettbewerb"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Overfitting'?",
        options: ["Der PC ist zu groß für das Gehäuse", "Das Modell hat die Trainingsdaten 'auswendig gelernt' und versagt bei neuen Daten", "Die KI ist zu schlau geworden", "Der Download dauert zu lange"],
        answer: 1
    },
    {
        question: "Welche Hardware-Komponente wird besonders häufig für das Training von KI genutzt?",
        options: ["Soundkarte", "GPU (Grafikkarte)", "Diskettenlaufwerk", "Netzteil"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Inferenz'?",
        options: ["Das Training der KI", "Die Anwendung des gelernten Modells auf neue Daten", "Das Löschen des Modells", "Ein Netzwerkfehler"],
        answer: 1
    },
    {
        question: "Was ist ein 'Perzeptron'?",
        options: ["Ein spezielles Mikroskop", "Die kleinste Einheit eines künstlichen neuronalen Netzes", "Ein Roboter", "Ein Betriebssystem"],
        answer: 1
    },
    {
        question: "Warum ist Datenschutz bei KI-Training kritisch?",
        options: ["Weil die KI sonst kaputt geht", "Weil Trainingsdaten oft persönliche Informationen enthalten können", "KI braucht kein Internet", "Datenschutz gilt nicht für KI"],
        answer: 1
    },
    {
        question: "Was ist 'Explainable AI' (XAI)?",
        options: ["KI, die Witze erklärt", "Ansätze, um die Entscheidungsfindung von KI-Modellen nachvollziehbar zu machen", "Ein Handbuch für KI", "KI für Kinder"],
        answer: 1
    },
    {
        question: "Welches Lernparadigma nutzt ein Roboter, der durch 'Versuch und Irrtum' lernt?",
        options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Deep Learning"],
        answer: 2
    },
    {
        question: "Was ist 'Computer Vision'?",
        options: ["Ein Videospiel", "Die Fähigkeit von KI, visuelle Informationen aus Bildern oder Videos zu verarbeiten", "Eine Brille für Programmierer", "Ein Hardware-Test"],
        answer: 1
    },
    {
        question: "Was ist 'NLP'?",
        options: ["Natural Language Processing (Verarbeitung natürlicher Sprache)", "New Logic Protocol", "Network Learning Process", "No Logic Program"],
        answer: 0
    },
    {
        question: "Was bedeutet 'Verschlimmbesserung' durch KI (Model Collapse)?",
        options: ["Die KI wird immer besser", "KI lernt von KI-generierten Daten und verliert an Qualität", "Der Server stürzt ab", "Ein Fehler im Code"],
        answer: 1
    },
    {
        question: "Welche Risikoklasse im EU AI Act umfasst KI zur sozialen Bewertung (Social Scoring)?",
        options: ["Minimales Risiko", "Hohes Risiko", "Unakzeptables Risiko (Verboten)", "Kein Risiko"],
        answer: 2
    },
    {
        question: "Was ist ein 'Prompt'?",
        options: ["Eine Fehlermeldung", "Die Eingabeaufforderung oder Anweisung an eine KI", "Ein spezielles Kabel", "Ein Hardware-Takt"],
        answer: 1
    },
    {
        question: "Was ist 'Fine-Tuning'?",
        options: ["Das Gehäuse putzen", "Ein vortrainiertes Modell auf eine spezifische Aufgabe anpassen", "Den Bildschirm einstellen", "Die Lautstärke regeln"],
        answer: 1
    },
    {
        question: "Welches Unternehmen entwickelte ChatGPT?",
        options: ["Google", "Microsoft", "OpenAI", "Meta"],
        answer: 2
    },
    {
        question: "Was ist ein 'Chatbot'?",
        options: ["Ein Roboter, der Kaffee kocht", "Ein Programm, das textbasierte Unterhaltungen führt", "Ein spezieller Browser", "Ein Virenscanner"],
        answer: 1
    },
    {
        question: "Können neuronale Netze Emotionen wirklich fühlen?",
        options: ["Ja, sie sind wie Menschen", "Nein, sie simulieren nur Muster in Daten", "Nur wenn sie genug RAM haben", "In der Zukunft ja"],
        answer: 1
    },
    {
        question: "Was ist 'Predictive Maintenance'?",
        options: ["Hardware putzen", "Vorhersage von Wartungsbedarfen durch KI-Datenanalyse", "Einen Termin vereinbaren", "Warten auf ein Wunder"],
        answer: 1
    },
    {
        question: "Was ist das Hauptproblem bei der 'Black Box' von KI?",
        options: ["Sie ist zu schwer", "Mangelnde Transparenz bei der Entscheidungsfindung", "Sie verbraucht zu viel Platz", "Sie ist teuer"],
        answer: 1
    },
    {
        question: "Darf eine KI laut EU AI Act zur biometrischen Echtzeit-Identifizierung im öffentlichen Raum ohne Weiteres genutzt werden?",
        options: ["Ja, immer", "Nein, es unterliegt strengen Verboten und Ausnahmen", "Nur am Wochenende", "Nur von Privatfirmen"],
        answer: 1
    }
];
