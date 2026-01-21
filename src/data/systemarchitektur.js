export const architekturContent = [
    {
        type: "section",
        title: "1. 4-Schichten-Architektur",
        text: "Moderne Software wird oft in Schichten unterteilt, um die Wartbarkeit und Austauschbarkeit zu erhöhen. Jede Schicht hat eine spezifische Aufgabe."
    },
    {
        type: "list",
        title: "Die Schichten im Detail",
        items: [
            "Präsentationsschicht (UI): Schnittstelle zum Benutzer (Web-Interface, App).",
            "Anwendungsschicht (App Logic): Koordiniert die Aufgaben und verarbeitet Befehle.",
            "Domänenschicht (Domain): Enthält die Geschäftslogik und die Datenmodelle (Kern der App).",
            "Infrastrukturschicht: Technischer Unterbau (Datenbank-Zugriff, Netzwerk-Kommunikation)."
        ]
    },
    {
        type: "section",
        title: "2. Logische Grundoperationen (Logikgatter)",
        text: "Auf unterster Ebene arbeiten alle digitalen Systeme mit logischen Gattern, die elektrische Signale nach festen Regeln verknüpfen."
    },
    {
        type: "list",
        title: "Die wichtigsten Gatter",
        items: [
            "AND (UND): Ausgang ist nur 1, wenn BEIDE Eingänge 1 sind.",
            "OR (ODER): Ausgang ist 1, wenn MINDESTENS ein Eingang 1 ist.",
            "NOT (NICHT): Invertiert das Signal (0 wird 1, 1 wird 0).",
            "NAND (NICHT-UND): Invertiertes AND.",
            "NOR (NICHT-ODER): Invertiertes OR.",
            "XOR (Exklusiv-ODER): Ausgang ist 1, wenn GENAU ein Eingang 1 ist (Antivalenz)."
        ]
    },
    {
        type: "section",
        title: "3. Industrielle Standards - ISA 95",
        text: "Die ISA 95 ist ein internationaler Standard zur Integration von Unternehmens- und Steuerungssystemen."
    },
    {
        type: "list",
        title: "Ebenen der ISA 95",
        items: [
            "Ebene 0: Der physische Prozess (Sensoren, Aktoren).",
            "Ebene 1: Steuerung (SPS / PLC).",
            "Ebene 2: Überwachung und Steuerung (SCADA, HMI).",
            "Ebene 3: Fertigungsmanagement (MES - Manufacturing Execution Systems).",
            "Ebene 4: Unternehmensplanung (ERP - Enterprise Resource Planning)."
        ]
    },
    {
        type: "section",
        title: "4. Objektorientierte Konzepte (OOP)",
        text: "OOP strukturiert Software als eine Sammlung von kooperierenden Objekten."
    },
    {
        type: "list",
        title: "Kernelemente",
        items: [
            "Klasse: Der Bauplan (Blueprint) für Objekte.",
            "Objekt/Instanz: Die konkrete Ausprägung einer Klasse.",
            "Konstruktor: Spezielle Methode zur Initialisierung beim Erstellen eines Objekts.",
            "Vererbung: Unterklassen übernehmen Attribute und Methoden der Oberklasse.",
            "Polymorphie (Vielgestaltigkeit): Gleiche Methodenaufrufe können in verschiedenen Klassen unterschiedliches Verhalten auslösen."
        ]
    }
];

export const architekturQuiz = [
    {
        question: "Welche Schicht der 4-Schichten-Architektur ist für die Benutzeroberfläche zuständig?",
        options: ["Infrastrukturschicht", "Domänenschicht", "Präsentationsschicht", "Anwendungsschicht"],
        answer: 2
    },
    {
        question: "Welches logische Gatter liefert nur dann eine '1', wenn beide Eingänge '1' sind?",
        options: ["OR", "XOR", "NOT", "AND"],
        answer: 3
    },
    {
        question: "Was macht ein NOT-Gatter?",
        options: ["Es verdoppelt das Signal", "Es invertiert das Signal (0 zu 1, 1 zu 0)", "Es löscht den Speicher", "Es addiert zwei Signale"],
        answer: 1
    },
    {
        question: "Auf welcher Ebene der ISA 95 befindet sich das ERP-System?",
        options: ["Ebene 1", "Ebene 2", "Ebene 3", "Ebene 4"],
        answer: 3
    },
    {
        question: "Welches logische Gatter entspricht der 'Antivalenz' (Ausgang 1 bei ungleichen Eingängen)?",
        options: ["AND", "OR", "XOR", "NAND"],
        answer: 2
    },
    {
        question: "In welcher Schicht liegen der Datenbankzugriff und File-Handling?",
        options: ["Domänenschicht", "Infrastrukturschicht", "Präsentationsschicht", "Anwendungsschicht"],
        answer: 1
    },
    {
        question: "Was versteht man unter 'Vererbung' in der OOP?",
        options: ["Dass man Code löscht", "Dass Unterklassen Attribute und Methoden von Oberklassen übernehmen", "Dass man Geld bekommt", "Dass Variablen geteilt werden"],
        answer: 1
    },
    {
        question: "Was ist ein 'MES' in der ISA 95?",
        options: ["Manufacturing Execution System (Fertigungsmanagement)", "Mixed Electronic Sensor", "Master Energy Source", "Mobile Event Service"],
        answer: 0
    },
    {
        question: "Wie nennt man den 'Bauplan' für Objekte in der Programmierung?",
        options: ["Instanz", "Klasse", "Funktion", "Datentyp"],
        answer: 1
    },
    {
        question: "Was liefert ein OR-Gatter bei den Eingängen (1, 0)?",
        options: ["0", "1", "Beides", "Fehler"],
        answer: 1
    },
    {
        question: "Was ist ein Konstruktor?",
        options: ["Ein Bauarbeiter am Server", "Eine spezielle Methode zur Initialisierung eines Objekts", "Ein Programm zum Zeichnen", "Ein Hardware-Stecker"],
        answer: 1
    },
    {
        question: "Wie viele Eingänge hat ein Standard-NOT-Gatter?",
        options: ["1", "2", "3", "Beliebig viele"],
        answer: 0
    },
    {
        question: "In der Schichtenarchitektur: Darf die Domänenschicht direkt auf die Präsentationsschicht zugreifen?",
        options: ["Ja, immer", "Nein, Schichten sollten nur auf tiefere (oder benachbarte) Schichten zugreifen", "Nur am Wochenende", "Es gibt keine Regeln"],
        answer: 1
    },
    {
        question: "Was ist der Ausgang eines NAND-Gatters bei (1, 1)?",
        options: ["0", "1", "High", "Error"],
        answer: 0
    },
    {
        question: "In der ISA 95: Wo liegen die SPS/PLC (Speicherprogrammierbare Steuerungen)?",
        options: ["Ebene 0", "Ebene 1", "Ebene 3", "Ebene 4"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Polymorphie'?",
        options: ["Vielgestaltigkeit - Objekte verschiedener Klassen reagieren unterschiedlich auf den gleichen Aufruf", "Dass ein PC viele Monitore hat", "Die Umwandlung von Text in Binär", "Ein Netzwerkfehler"],
        answer: 0
    },
    {
        question: "Woran erkennt man eine Komposition im Vergleich zur Aggregation?",
        options: ["An der blauen Farbe", "An der ausgefüllten Raute (Ganzes besitzt Teile exklusiv)", "Es gibt keinen Unterschied", "An der gestrichelten Linie"],
        answer: 1
    },
    {
        question: "Welche Schicht enthält die eigentliche Geschäftslogik?",
        options: ["Infrastrukturschicht", "Domänenschicht", "Präsentationsschicht", "Betriebssystem"],
        answer: 1
    },
    {
        question: "Was ist der Unterschied zwischen einer Klasse und einem Objekt?",
        options: ["Klasse ist der abstrakte Bauplan, Objekt die konkrete Realisierung im Speicher", "Objekt ist größer", "Klasse ist nur für Java", "Es gibt keinen"],
        answer: 0
    },
    {
        question: "Was bedeutet 'Abkapselung' (Encapsulation) in der OOP?",
        options: ["Dass der PC in einem Gehäuse steckt", "Verbergen von Daten vor direktem Zugriff durch Sichtbarkeitsregeln (private)", "Verschlüsselung der Festplatte", "Backup in die Cloud"],
        answer: 1
    },
    {
        question: "Welches Gatter verknüpft zwei Nullen zu einer Eins, aber Einser zu einer Null?",
        options: ["AND", "OR", "NOR", "XOR"],
        answer: 2
    },
    {
        question: "Was ist ein 'Package Diagram' in der Architekturmodellierung?",
        options: ["Ein Diagramm für Postpakete", "Ein Diagramm zur Strukturierung von Systemelementen in Gruppen (Paketen)", "Die Anleitung für den Einbau von CPUs", "Ein Lieferschein"],
        answer: 1
    },
    {
        question: "Welche Architekturform verteilt Aufgaben oft auf viele kleine, unabhängige Dienste?",
        options: ["Monolith", "Microservices", "Schichtenarchitektur", "Mainframe"],
        answer: 1
    },
    {
        question: "Welche ISA 95 Ebene befasst sich mit Sensoren und Aktoren?",
        options: ["Ebene 0", "Ebene 1", "Ebene 2", "Ebene 4"],
        answer: 0
    },
    {
        question: "Wofür steht 'HMI' im SCADA-Umfeld?",
        options: ["Human Machine Interface", "High Memory Index", "Hardware Modern Integration", "Home Made Interface"],
        answer: 0
    },
    {
        question: "Was ist ein 'Interface' in der OOP?",
        options: ["Ein Kabel", "Ein Vertrag/Schnittstelle, die Methoden ohne Implementation vorgibt", "Ein Design-Tool", "Eine Tastatur"],
        answer: 1
    },
    {
        question: "Wie viele Zustände hat ein Boolean-Wert in der Logik?",
        options: ["1", "2 (0 oder 1 / True oder False)", "8", "Unendlich"],
        answer: 1
    },
    {
        question: "Welches Gatter liefert nur dann 0, wenn beide Eingänge 1 sind?",
        options: ["AND", "OR", "NAND", "NOR"],
        answer: 2
    },
    {
        question: "Was bedeutet 'Instanziieren'?",
        options: ["Ein Programm löschen", "Ein konkretes Objekt aus einer Klasse erzeugen", "Einen Text drucken", "Einen Fehler suchen"],
        answer: 1
    },
    {
        question: "Welche Beziehung im Klassendiagramm stellt eine 'Besteht-aus' Verbindung dar?",
        options: ["Generalisierung", "Assoziation", "Komposition", "Abhängigkeit"],
        answer: 2
    }
];
