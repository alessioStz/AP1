export const modellierungContent = [
    {
        type: "section",
        title: "1. UML - Unified Modeling Language",
        text: "UML ist der Standard zur Visualisierung, Spezifikation und Dokumentation von Softwaresystemen. Man unterscheidet zwischen Struktur- und Verhaltensdiagrammen."
    },
    {
        type: "list",
        title: "Wichtige Diagrammtypen",
        items: [
            "Use-Case-Diagramm: Zeigt die Interaktion zwischen Akteuren und dem System. Beziehungen: <<include>> (zwingend) und <<extend>> (optional).",
            "Klassendiagramm: Statische Struktur. Klassen mit Attributen und Methoden sowie deren Sichtbarkeit (+ public, - private, # protected).",
            "Aktivitätsdiagramm: Beschreibt den dynamischen Ablauf eines Prozesses (ähnlich einem Flussdiagramm).",
            "Sequenzdiagramm: Visualisiert den Nachrichtenaustausch zwischen Objekten über die Zeit.",
            "Zustandsdiagramm: Zeigt die verschiedenen Zustände, in denen sich ein Objekt befinden kann, und die Übergänge dazwischen."
        ]
    },
    {
        type: "section",
        title: "2. Beziehungen im Klassendiagramm",
        text: "Beziehungen definieren, wie Klassen miteinander verbunden sind."
    },
    {
        type: "list",
        title: "Beziehungstypen",
        items: [
            "Assoziation: Eine einfache Beziehung ('Nutzt-ein').",
            "Aggregation: 'Hat-ein' (Teil kann ohne Ganzes existieren).",
            "Komposition: 'Besteht-aus' (Teil kann NICHT ohne Ganzes existieren).",
            "Vererbung: 'Ist-ein' (Spezialisierung einer Oberklasse)."
        ]
    },
    {
        type: "section",
        title: "3. Alternative Modellierung: Struktogramme",
        text: "Nassi-Shneiderman-Struktogramme (DIN 66261) visualisieren Programmlogik ohne Sprungbefehle."
    },
    {
        type: "list",
        title: "Elemente",
        items: [
            "Anweisung: Ein einfaches Rechteck.",
            "Verzweigung (Alternative): Ein Dreieck zur Entscheidung.",
            "Schleife (Wiederholung): Ein Block mit einem seitlichen Balken für die Bedingung."
        ]
    },
    {
        type: "section",
        title: "4. Modelling tools: PlantUML",
        text: "PlantUML erlaubt es, Diagramme durch textuelle Notation zu beschreiben, was die Versionskontrolle erleichtert."
    }
];

export const modellierungQuiz = [
    {
        question: "Welches UML-Diagramm zeigt die statische Struktur eines Systems?",
        options: ["Aktivitätsdiagramm", "Klassendiagramm", "Sequenzdiagramm", "Anwendungsfalldiagramm"],
        answer: 1
    },
    {
        question: "Was bedeutet die Sichtbarkeit '+' in einem Klassendiagramm?",
        options: ["private", "public", "protected", "additiv"],
        answer: 1
    },
    {
        question: "Welche Beziehung beschreibt ein 'Ganzes-Teile-Verhältnis', bei dem das Teil NICHT ohne das Ganze existieren kann?",
        options: ["Assoziation", "Aggregation", "Komposition", "Generalisierung"],
        answer: 2
    },
    {
        question: "Welche Beziehung zeigt eine 'Ist-ein' Verbindung (Vererbung)?",
        options: ["Assoziation", "Aggregation", "Generalisierung", "Abhängigkeit"],
        answer: 2
    },
    {
        question: "Was beschreibt eine <<include>> Beziehung im Use-Case-Diagramm?",
        options: ["Einen optionalen Ablauf", "Einen zwingend erforderlichen Teil-Anwendungsfall", "Einen Fehler", "Einen externen Akteur"],
        answer: 1
    },
    {
        question: "Welches Diagramm eignet sich am besten zur Darstellung von Nachrichtenaustausch in chronologischer Reihenfolge?",
        options: ["Klassendiagramm", "Sequenzdiagramm", "Zustandsdiagramm", "Verteilungsdiagramm"],
        answer: 1
    },
    {
        question: "Woran erkennt man eine Aggregation (grafisch)?",
        options: ["Ausgefüllte Raute", "Leere Raute", "Einfacher Pfeil", "Gestrichelte Linie"],
        answer: 1
    },
    {
        question: "Was stellt ein Rechteck in einem Nassi-Shneiderman-Struktogramm dar?",
        options: ["Eine Entscheidung", "Eine Schleife", "Eine einfache Anweisung", "Das Programmende"],
        answer: 2
    },
    {
        question: "Was ist ein 'Akteur' in einer UML-Modellierung?",
        options: ["Nur ein Mensch", "Eine Rolle, die mit dem System interagiert (Mensch oder anderes System)", "Ein Programmierer", "Eine Datenbank-Tabelle"],
        answer: 1
    },
    {
        question: "Welches Diagramm zeigt Phasenübergänge eines Objekts (z.B. Bestellung: offen, bezahlt, versendet)?",
        options: ["Sequenzdiagramm", "Zustandsdiagramm", "Klassendiagramm", "Aktivitätsdiagramm"],
        answer: 1
    },
    {
        question: "Was beschreibt die 'Multiplizität' (Kardinalität) in einem Klassendiagramm?",
        options: ["Die Anzahl der Methoden", "Die Anzahl der Objekte, die an einer Beziehung teilnehmen können (z.B. 1..*)", "Die Geschwindigkeit der Klasse", "Die Sichtbarkeit"],
        answer: 1
    },
    {
        question: "Welches Symbol stellt einen 'Entscheidungsknoten' im Aktivitätsdiagramm dar?",
        options: ["Kreis", "Quadrat", "Raute", "Balken"],
        answer: 2
    },
    {
        question: "Wozu dient PlantUML?",
        options: ["Zum Gießen von Pflanzen", "Zur Erstellung von Diagrammen mittels Text-Code", "Zur Installation von Treibern", "Zum Kompilieren von C++"],
        answer: 1
    },
    {
        question: "Was ist der Unterschied zwischen Aggregation und Komposition?",
        options: ["Es gibt keinen", "Bei der Komposition besteht eine Existenzabhängigkeit des Teils vom Ganzen", "Aggregation ist immer digital", "Komposition ist für Hardware"],
        answer: 1
    },
    {
        question: "Welcher Pfeil kennzeichnet die Vererbung?",
        options: ["Leere Dreieckspitze an einer durchgezogenen Linie", "Ausgefüllte Pfeilspitze", "Gestrichelte Linie", "Raute"],
        answer: 0
    },
    {
        question: "Was bedeutet die Sichtbarkeit '-'?",
        options: ["public", "private", "protected", "static"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Nebenläufigkeit' (Concurrency) in einem Aktivitätsdiagramm?",
        options: ["Laufen im Kreis", "Mehrere Aktivitäten finden gleichzeitig statt (Synchronisationsbalken)", "Ein Fehler im Ablauf", "Langsame Ausführung"],
        answer: 1
    },
    {
        question: "Was beschreibt ein 'Szenario' im Bezug auf Use Cases?",
        options: ["Ein fertiges Programm", "Ein spezieller Durchlauf/Pfad durch einen Anwendungsfall", "Das Drehbuch der Software", "Die Kosten"],
        answer: 1
    },
    {
        question: "Wo werden Attribute in einer UML-Klasse eingetragen?",
        options: ["Im obersten Drittel", "Im mittleren Drittel", "Im untersten Drittel", "Außerhalb des Rechtecks"],
        answer: 1
    },
    {
        question: "Was ist eine 'Abstrakte Klasse'?",
        options: ["Eine Klasse ohne Namen", "Eine Klasse, von der keine Instanzen erzeugt werden können", "Eine Klasse für Bilder", "Eine sehr große Klasse"],
        answer: 1
    },
    {
        question: "Welche Norm beschreibt Struktogramme?",
        options: ["ISO 9001", "DIN 66261", "DIN 4000", "IEEE 802.11"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Sichtbarkeit protected' (#)?",
        options: ["Zugriff nur für die Klasse selbst", "Zugriff für die Klasse und ihre Unterklassen", "Zugriff für alle", "Gar kein Zugriff"],
        answer: 1
    },
    {
        question: "Was zeigt die 'Lebenslinie' in einem Sequenzdiagramm?",
        options: ["Das Alter des Nutzers", "Die Zeitspanne, in der ein Objekt existiert", "Den Pfad im Wald", "Die CPU-Last"],
        answer: 1
    },
    {
        question: "Welches Beziehungsmerkmal besagt, dass ein Teil auch zu anderen Ganzen gehören kann?",
        options: ["Komposition", "Aggregation (Shared)", "Vererbung", "Abhängigkeit"],
        answer: 1
    },
    {
        question: "In einem Anwendungsfalldiagramm: Was stellt das Rechteck um die Use Cases dar?",
        options: ["Die Hardware", "Die Systemgrenze", "Den Speicherplatz", "Das Internet"],
        answer: 1
    },
    {
        question: "Was beschreibt ein 'Trigger' im Zustandsdiagramm?",
        options: ["Einen Fehler", "Das Ereignis, das einen Zustandsübergang auslöst", "Das Ende des Programms", "Einen Drucker"],
        answer: 1
    },
    {
        question: "Was ist eine 'Schnittstelle' (Interface) in UML?",
        options: ["Ein Kabel", "Eine Sammlung von Operations-Signaturen ohne Implementation", "Ein Monitor", "Eine Tastatur"],
        answer: 1
    },
    {
        question: "Welches Symbol markiert den Startzustand im Zustands- oder Aktivitätsdiagramm?",
        options: ["Ein ausgefüllter Kreis", "Ein Kreis mit einem Kreuz", "Ein Quadrat", "Ein Dreieck"],
        answer: 0
    },
    {
        question: "Was ist eine 'Assoziation'?",
        options: ["Ein Verein", "Eine allgemeine Beziehung zwischen zwei Klassen", "Ein spezieller Datentyp", "Eine Fehlermeldung"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Multiplizität 1..*'?",
        options: ["Genau eins", "Null oder viele", "Eins oder viele", "Immer zwei"],
        answer: 2
    }
];
