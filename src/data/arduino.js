export const arduinoContent = [
    {
        type: "section",
        title: "1. Arduino-Grundlagen & C/C++ Syntax",
        text: "Die Programmierung von Mikrocontrollern wie dem Arduino erfolgt meist in einer auf C/C++ basierenden Sprache. Ein Programm (Sketch) besteht mindestens aus setup() und loop()."
    },
    {
        type: "list",
        title: "Datentypen & Variablen",
        items: [
            "int: Ganze Zahlen (2 Byte auf Uno).",
            "float: Fließkommazahlen.",
            "byte: 8-Bit Ganzzahl (0-255).",
            "boolean: Wahrheitswert (true/false).",
            "String: Zeichenketten (Vorsicht beim RAM-Verbrauch!).",
            "Deklaration: 'int ledPin = 13;' - Reserviert Speicher und weist einen Namen zu."
        ]
    },
    {
        type: "section",
        title: "2. Hardware-Interaktion (GPIO)",
        text: "Über die Pins kommuniziert der Arduino mit der Außenwelt. Pins müssen konfiguriert werden, bevor sie gelesen oder geschrieben werden können."
    },
    {
        type: "list",
        title: "Wichtige Funktionen",
        items: [
            "pinMode(pin, mode): Konfiguriert Pin als INPUT oder OUTPUT.",
            "digitalWrite(pin, value): Schaltet Pin auf HIGH (5V/3.3V) oder LOW (0V).",
            "digitalRead(pin): List den Zustand (HIGH/LOW) eines digitalen Eingangs.",
            "analogRead(pin): List einen analogen Wert (0-1023) über den ADC.",
            "analogWrite(pin, value): Erzeugt ein PWM-Signal (0-255) zur Helligkeitssteuerung."
        ]
    },
    {
        type: "section",
        title: "3. Sensoren, Aktoren & Bibliotheken",
        text: "Für komplexe Bauteile wie den DHT-Sensor (Temperatur/Feuchtigkeit) nutzt man fertige Bibliotheken."
    },
    {
        type: "list",
        title: "Arbeit mit Peripherie",
        items: [
            "DHT11/22: Sensoren zur Messung von Klima-Daten.",
            "Pull-up/Pull-down Widerstände: Sorgen für definierte Zustände an Eingängen (verhindern 'Floating Pins').",
            "Bibliotheken einbinden: Über '#include <LibraryName.h>'.",
            "Eigene Bibliotheken: Bestehen aus Header (.h), Implementation (.cpp) und keywords.txt."
        ]
    },
    {
        type: "section",
        title: "4. Logik & Zufall",
        text: "Pseudozufallszahlen sind wichtig für Simulationen oder Spiele."
    },
    {
        type: "list",
        title: "Zufall auf dem Arduino",
        items: [
            "random(min, max): Generiert eine Pseudozufallszahl.",
            "randomSeed(seed): Initialisiert den Generator.",
            "Tipp: Nutze 'randomSeed(analogRead(0));' an einem unbeschalteten Pin für echtes Rauschen als Startwert."
        ]
    }
];

export const arduinoQuiz = [
    {
        question: "Welche zwei Funktionen müssen in jedem Arduino-Sketch vorhanden sein?",
        options: ["start() und loop()", "setup() und loop()", "init() und run()", "main() und start()"],
        answer: 1
    },
    {
        question: "Mit welcher Funktion konfiguriert man einen Pin als Eingang oder Ausgang?",
        options: ["setPin()", "pinMode()", "digitalSet()", "ioConfig()"],
        answer: 1
    },
    {
        question: "Welchen Wertebereich liefert analogRead() standardmäßig (Uno)?",
        options: ["0 bis 1", "0 bis 255", "0 bis 1023", "0 bis 65535"],
        answer: 2
    },
    {
        question: "Was bewirkt digitalWrite(13, HIGH);?",
        options: ["Löscht den Code an Pin 13", "Setzt Pin 13 auf 5V (Spannung an)", "Liest den Wert von Pin 13", "Taktet Pin 13 mit 50Hz"],
        answer: 1
    },
    {
        question: "Wofür nutzt man einen Pull-up-Widerstand an einem Taster-Eingang?",
        options: ["Um den Strom zu begrenzen", "Um einen definierten HIGH-Zustand sicherzustellen, wenn der Taster offen ist", "Um die LED heller zu machen", "Um WLAN zu empfangen"],
        answer: 1
    },
    {
        question: "Welcher Datentyp speichert eine ganze Zahl und belegt meist 2 Byte?",
        options: ["byte", "int", "float", "boolean"],
        answer: 1
    },
    {
        question: "Wie bindet man eine externe Header-Datei ein?",
        options: ["#include <file.h>", "import file.h", "use file.h", "require file.h"],
        answer: 0
    },
    {
        question: "Welche Datei in einer eigenen Bibliothek sorgt für das Highlighting der Begriffe in der IDE?",
        options: ["setup.txt", "keywords.txt", "tags.cpp", "colors.h"],
        answer: 1
    },
    {
        question: "Wie erzeugt man ein PWM-Signal (z.B. zum Dimmen einer LED)?",
        options: ["digitalWrite()", "analogWrite()", "pwmOutput()", "dimmer()"],
        answer: 1
    },
    {
        question: "Was passiert, wenn man randomSeed() nicht nutzt?",
        options: ["Der Arduino stürzt ab", "Der Zufallsgenerator liefert nach jedem Neustart dieselbe Sequenz", "Es gibt keine Zufallszahlen", "Die LED blinkt rot"],
        answer: 1
    },
    {
        question: "Was bedeutet 'void' vor einem Funktionsnamen?",
        options: ["Die Funktion ist leer", "Die Funktion gibt keinen Wert zurück", "Die Funktion ist ungültig", "Die Funktion ist privat"],
        answer: 1
    },
    {
        question: "Welcher Sensor misst Temperatur und Luftfeuchtigkeit?",
        options: ["HC-SR04", "DHT11", "LDR", "BMP180"],
        answer: 1
    },
    {
        question: "Wie deklariert man eine Variable für Fließkommazahlen?",
        options: ["num x;", "int x;", "float x;", "double-int x;"],
        answer: 2
    },
    {
        question: "Was ist der Unterschied zwischen '=' und '=='?",
        options: ["Keiner", "'=' ist Zuweisung, '==' ist Vergleich", "'==' ist Zuweisung, '=' ist Vergleich", "'==' ist für Strings"],
        answer: 1
    },
    {
        question: "Wozu dient der 'Serielle Monitor'?",
        options: ["Zum Fernsehen", "Zum Datenaustausch und Debugging zwischen Arduino und PC via USB", "Zum Programmieren von Webseiten", "Zum Messen der Temperatur"],
        answer: 1
    },
    {
        question: "Wie lange wartet der Befehl 'delay(1000);'?",
        options: ["1 Minute", "1 Sekunde (1000ms)", "1 Millisekunde", "0,1 Sekunden"],
        answer: 1
    },
    {
        question: "Was ist ein 'Floating Pin'?",
        options: ["Ein Pin im Wasser", "Ein undefinierter Zustand eines Eingangs ohne festen HIGH/LOW Bezug", "Ein Pin, der sich bewegt", "Ein kaputter Pin"],
        answer: 1
    },
    {
        question: "Welche Baudrate ist standardmäßig oft eingestellt?",
        options: ["100", "9600", "1.000.000", "0"],
        answer: 1
    },
    {
        question: "Was bedeutet 'C++ Überladung' bei Funktionen?",
        options: ["Zu viel Strom in der Funktion", "Mehrere Funktionen mit gleichem Namen, aber unterschiedlichen Parametern", "Die Funktion wird gelöscht", "Die Funktion läuft zu oft"],
        answer: 1
    },
    {
        question: "Was ist eine Konstante in C++?",
        options: ["Ein Wert, der sich oft ändert", "Ein Wert, der mit 'const' deklariert wird und nicht verändert werden kann", "Ein Name für den Arduino", "Ein Fehler"],
        answer: 1
    },
    {
        question: "Welche Schleife prüft die Bedingung, BEVOR der Block ausgeführt wird?",
        options: ["while", "do-while", "for (manchmal)", "if"],
        answer: 0
    },
    {
        question: "Wozu dient der Library Manager?",
        options: ["Zum Bücher lesen", "Zum einfachen Herunterladen und Installieren von Code-Bibliotheken", "Zum Verwalten von Kabeln", "Zum Bestellen von Hardware"],
        answer: 1
    },
    {
        question: "Welche Erweiterung hat die Implementierungsdatei einer C++ Klasse?",
        options: [".h", ".cpp", ".txt", ".ino"],
        answer: 1
    },
    {
        question: "Was bewirkt der Operator '!'?",
        options: ["Addition", "Logisches NICHT (Negation)", "Multiplikation", "Vergleich auf Gleichheit"],
        answer: 1
    },
    {
        question: "Wie spricht man den Pin A0 analog an?",
        options: ["digitalRead(A0)", "analogRead(A0)", "pinIn(A0)", "readSource(A0)"],
        answer: 1
    },
    {
        question: "Was ist ein 'Syntax-Error'?",
        options: ["Ein Logikfehler", "Ein Verstoß gegen die Grammatik der Programmiersprache", "Ein Hardware-Defekt", "Ein leerer Akku"],
        answer: 1
    },
    {
        question: "Wie startet man die serielle Kommunikation mit 115200 Baud?",
        options: ["Serial.begin(115200);", "Serial.start(115200);", "Comm.init(115200);", "Baudrate = 115200;"],
        answer: 0
    },
    {
        question: "Was bedeutet 'byte x = 256;' in C++?",
        options: ["x ist 256", "Es kommt zu einem Overflow (Überlauf), da byte nur bis 255 geht", "Der Arduino explodiert", "x ist 0"],
        answer: 1
    },
    {
        question: "Welcher Befehl beendet eine Funktion sofort und gibt ggf. einen Wert zurück?",
        options: ["stop", "break", "return", "end"],
        answer: 2
    },
    {
        question: "Wozu dient ein 'Bitwise AND' in der Programmierung?",
        options: ["Zum Löschen von Dateien", "Zum gezielten Ausmaskieren von einzelnen Bits in einem Register", "Zum Rechnen von Rabatten", "Zum Beschleunigen von Schleifen"],
        answer: 1
    }
];
