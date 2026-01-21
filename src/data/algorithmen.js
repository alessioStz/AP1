export const algorithmenContent = [
    {
        type: "section",
        title: "1. Was ist ein Algorithmus?",
        text: "Ein Algorithmus ist eine eindeutige Handlungsvorschrift zur Lösung eines Problems. Er besteht aus endlich vielen Einzelschritten."
    },
    {
        type: "list",
        title: "Eigenschaften von Algorithmen",
        items: [
            "Eindeutigkeit: Jeder Schritt muss klar definiert sein.",
            "Ausführbarkeit: Jeder Schritt muss tatsächlich machbar sein.",
            "Endlichkeit (Finitheit): Der Algorithmus muss nach endlich vielen Schritten enden.",
            "Determiniertheit: Bei gleichen Eingabewerten muss das gleiche Ergebnis herauskommen."
        ]
    },
    {
        type: "section",
        title: "2. Kontrollstrukturen",
        text: "Logik in Programmen wird durch drei Grundstrukturen abgebildet."
    },
    {
        type: "list",
        title: "Die drei Strukturen",
        items: [
            "Sequenz: Anweisungen werden hintereinander ausgeführt.",
            "Selektion (Verzweigung): Entscheidung durch Bedingungen (IF...THEN...ELSE).",
            "Iteration (Wiederholung): Schleifen, die Code mehrfach ausführen (WHILE, FOR, REPEAT UNTIL)."
        ]
    },
    {
        type: "section",
        title: "3. Variablen & Datentypen",
        text: "Um Daten zu verarbeiten, müssen sie gespeichert und klassifiziert werden."
    },
    {
        type: "list",
        title: "Gängige Datentypen",
        items: [
            "Integer: Ganze Zahlen (z.B. 1, -5, 42).",
            "Float/Double: Fließkommazahlen (z.B. 3.14).",
            "String: Zeichenketten (Texte).",
            "Boolean: Wahrheitswerte (TRUE / FALSE).",
            "Char: Einzelnes Zeichen."
        ]
    },
    {
        type: "section",
        title: "4. Logische Operatoren",
        text: "Verknüpfung von Bedingungen."
    },
    {
        type: "list",
        title: "Operatoren",
        items: [
            "AND (UND): Beide Bedingungen müssen wahr sein.",
            "OR (ODER): Mindestens eine Bedingung muss wahr sein.",
            "NOT (NICHT): Kehrt den Wahrheitswert um.",
            "XOR (Exklusiv-Oder): Genau eine Bedingung muss wahr sein."
        ]
    }
];

export const algorithmenQuiz = [
    {
        question: "Was ist ein Algorithmus?",
        options: ["Eine Programmiersprache", "Eine eindeutige Handlungsvorschrift zur Problemlösung", "Ein Bauteil im PC", "Eine Verschlüsselung"],
        answer: 1
    },
    {
        question: "Welche Struktur nutzt man für eine 'Entscheidung'?",
        options: ["Sequenz", "Selektion", "Iteration", "Deklaration"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Finitheit' eines Algorithmus?",
        options: ["Er ist besonders schnell", "Er muss nach endlich vielen Schritten enden", "Er darf niemals enden", "Er ist in Java geschrieben"],
        answer: 1
    },
    {
        question: "Welcher Datentyp eignet sich für den Wert '3.1415'?",
        options: ["Integer", "String", "Float / Double", "Boolean"],
        answer: 2
    },
    {
        question: "Was ist das Ergebnis von (TRUE AND FALSE)?",
        options: ["TRUE", "FALSE", "Vielleicht", "Fehler"],
        answer: 1
    },
    {
        question: "Welche Schleife prüft die Bedingung ERST am Ende?",
        options: ["WHILE-Schleife", "FOR-Schleife", "REPEAT-UNTIL-Schleife", "IF-Schleife"],
        answer: 2
    },
    {
        question: "Was passiert in einer 'Endlosschleife'?",
        options: ["Der PC wird schneller", "Der Algorithmus terminiert nie", "Die CPU kühlt ab", "Das Programm wird gelöscht"],
        answer: 1
    },
    {
        question: "Was ist ein 'Boolean'?",
        options: ["Eine Zahl zwischen 0 und 100", "Ein Datentyp für Wahrheitswerte (True/False)", "Ein langer Text", "Ein Bildformat"],
        answer: 1
    },
    {
        question: "Was ist der Unterschied zwischen '=' und '==' in vielen Sprachen?",
        options: ["Es gibt keinen", " '=' ist Zuweisung, '==' ist Vergleich", " '==' ist für Texte", " '=' ist schneller"],
        answer: 1
    },
    {
        question: "Was ist 'Pseudocode'?",
        options: ["Ein Virus", "Hardware-Code", "Halbformale Beschreibung eines Algorithmus (menschenlesbar)", "Verschlüsselter Code"],
        answer: 2
    },
    {
        question: "Was bedeutet 'Inkrementieren'?",
        options: ["Den Wert einer Variable um 1 erhöhen", "Den Wert löschen", "Die Variable umbenennen", "Die Variable halbieren"],
        answer: 0
    },
    {
        question: "Welche Struktur wird hier beschrieben: 'Fahre solange geradeaus, bis die Ampel rot wird'?",
        options: ["Sequenz", "Selektion", "Iteration (Schleife)", "Sprung"],
        answer: 2
    },
    {
        question: "Was ist das Ergebnis von (TRUE OR FALSE)?",
        options: ["TRUE", "FALSE", "NULL", "ERROR"],
        answer: 0
    },
    {
        question: "Was ist ein 'Array'?",
        options: ["Eine einzelne Zahl", "Eine Sammlung von Elementen des gleichen Typs", "Ein Drucker", "Ein Internetkabel"],
        answer: 1
    },
    {
        question: "Was beschreibt die 'Zeitkomplexität'?",
        options: ["Wie spät es ist", "Wie sich die Laufzeit eines Algorithmus mit der Eingabegröße ändert", "Wie lange ein Download dauert", "Die Taktfrequenz"],
        answer: 1
    },
    {
        question: "Was ist ein 'Parameter'?",
        options: ["Ein Übergabewert an eine Funktion", "Ein Messergebnis", "Eine Einstellung im BIOS", "Ein Hardware-Stecker"],
        answer: 0
    },
    {
        question: "Welcher Operator kehrt einen Wahrheitswert um?",
        options: ["AND", "OR", "NOT", "XOR"],
        answer: 2
    },
    {
        question: "Was bedeutet 'Deklarieren' einer Variable?",
        options: ["Den Wert löschen", "Bekanntmachen der Variable mit Name und Typ", "Die Variable ausdrucken", "Den PC ausschalten"],
        answer: 1
    },
    {
        question: "Welchen Wert hat eine Variable vom Typ Boolean nach 'NOT TRUE'?",
        options: ["TRUE", "FALSE", "NULL", "1"],
        answer: 1
    },
    {
        question: "Was ist eine 'Konstante'?",
        options: ["Ein Wert, der sich während der Laufzeit nicht ändert", "Eine Variable in einer Schleife", "Ein Fehler", "Die Uhrzeit"],
        answer: 0
    },
    {
        question: "Was ist 'Debugging'?",
        options: ["Das Gehäuse von Käfern befreien", "Fehlersuche und -behebung in einem Programm", "Den PC schneller machen", "Software installieren"],
        answer: 1
    },
    {
        question: "Welche Klammern werden oft für Arrays genutzt?",
        options: ["( )", "{ }", "[ ]", "< >"],
        answer: 2
    },
    {
        question: "Was bedeutet 'Initialisieren'?",
        options: ["Ein Programm beenden", "Einer Variable einen ersten Wert zuweisen", "Den PC formatieren", "Drucken"],
        answer: 1
    },
    {
        question: "Was ist eine 'Funktion' in der Programmierung?",
        options: ["Ein Werbebanner", "Ein abgeschlossener Programmblock, der eine Aufgabe löst und ggf. einen Wert zurückgibt", "Ein Tastaturlayout", "Eine Hardware-Komponente"],
        answer: 1
    },
    {
        question: "Was ist der Modulo-Operator (%)?",
        options: ["Berechnet den Prozentsatz", "Gibt den Rest einer ganzzahligen Division zurück", "Multipliziert zwei Zahlen", "Löscht den Wert"],
        answer: 1
    },
    {
        question: "Wie oft wird eine FOR-Schleife von 1 bis 10 ausgeführt?",
        options: ["1 mal", "10 mal", "9 mal", "unendlich"],
        answer: 1
    },
    {
        question: "Was ist ein 'String'?",
        options: ["Ein dünnes Kabel", "Eine Folge von Zeichen (Text)", "Ein Zahlentyp", "Eine Fehlermeldung"],
        answer: 1
    },
    {
        question: "Welcher Operator hat Vorrang vor OR?",
        options: ["AND", "NOT", "Beide (NOT vor AND vor OR)", "Keiner"],
        answer: 2
    },
    {
        question: "Was bedeutet 'Compiler'?",
        options: ["Ein Programm, das Quellcode in Maschinencode übersetzt", "Ein Virenscanner", "Ein Texteditor", "Ein Bauteil im Monitor"],
        answer: 0
    },
    {
        question: "Was ist ein 'Syntaxfehler'?",
        options: ["Ein Fehler in der Logik", "Ein Verstoß gegen die Schreibregeln der Programmiersprache", "Ein Hardware-Defekt", "Ein leerer Akku"],
        answer: 1
    }
];
