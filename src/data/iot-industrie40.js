export const iotContent = [
    {
        type: "section",
        title: "1. Grundlagen der Industrie 4.0",
        text: "Die Industrie 4.0 beschreibt die vierte industrielle Revolution, geprägt durch die Vernetzung von Maschinen, Produkten und Menschen (Cyber-physische Systeme)."
    },
    {
        type: "list",
        title: "Historische Entwicklung",
        items: [
            "Industrie 1.0 (Ende 18. Jh.): Mechanisierung (Wasser- und Dampfkraft).",
            "Industrie 2.0 (Ende 19. Jh.): Massenproduktion (Fließband, elektrische Energie).",
            "Industrie 3.0 (ab 1970er): Automatisierung (IT und Elektronik, SPS).",
            "Industrie 4.0 (heute): Cyber-physische Systeme, Vernetzung, IoT, KI."
        ]
    },
    {
        type: "section",
        title: "2. Begriffsdefinitionen & Smart Concepts",
        text: "Die Vernetzung durchdringt alle Lebens- und Arbeitsbereiche."
    },
    {
        type: "list",
        title: "Key Concepts",
        items: [
            "Cyber-physische Systeme (CPS): Verbindung physischer Komponenten mit Software und Netzwerken (z.B. ein autonomer Roboter).",
            "Internet of Things (IoT): Vernetzung beliebiger physischer Gegenstände über das Internet.",
            "IIoT (Industrial IoT): Anwendung von IoT in der Produktion (M2M-Kommunikation).",
            "Smart Factory: Die vernetzte, sich selbst steuernde Fabrik.",
            "Smart Concepts: Smart Home (private Vernetzung), Smart City (Urbane Effizienz), Smart Health (E-Health)."
        ]
    },
    {
        type: "section",
        title: "3. Funktechnologien & Kommunikation",
        text: "Je nach Reichweite und Datenrate kommen unterschiedliche Technologien zum Einsatz."
    },
    {
        type: "list",
        title: "Nahbereich & Lokale Netze",
        items: [
            "RFID / NFC: Kontaktlose Identifikation auf kürzeste Distanz.",
            "Bluetooth / BLE: Kurzstreckenfunk (Energiesparend als BLE).",
            "ZigBee / Z-Wave: Mesh-Netzwerke für Smart Home Automation.",
            "Wi-Fi: Hohe Datenrate, mittlere Reichweite."
        ]
    },
    {
        type: "list",
        title: "Weitverkehrsnetze (LPWAN / Mobilfunk)",
        items: [
            "LoRaWAN / Sigfox: Sehr hohe Reichweite, extrem niedriger Energieverbrauch, geringe Datenrate (ideal für Sensoren).",
            "NB-IoT (Narrowband): Nutzt bestehendes Mobilfunknetz für IoT-Geräte.",
            "5G: Hohe Bandbreite, minimale Latenz (Echtzeitfähigkeit für CPS)."
        ]
    },
    {
        type: "section",
        title: "4. Das MQTT Protokoll",
        text: "MQTT (Message Queuing Telemetry Transport) ist der Standard für die IoT-Kommunikation."
    },
    {
        type: "list",
        title: "Funktionsprinzip MQTT",
        items: [
            "Publish-Subscribe Prinzip: Clients abonnieren (Subscribe) oder veröffentlichen (Publish) Nachrichten unter einem bestimmten Betreff (Topic).",
            "Broker: Die zentrale Vermittlungsstelle (Server), die Nachrichten verteilt.",
            "QoS (Quality of Service): Level 0 (max. einmal), Level 1 (mind. einmal), Level 2 (genau einmal).",
            "Last Will & Testament: Nachricht, die der Broker versendet, wenn ein Client unerwartet die Verbindung verliert."
        ]
    }
];

export const iotQuiz = [
    {
        question: "Was kennzeichnet die Industrie 4.0 primär?",
        options: ["Die Einführung des Fließbands", "Die Nutzung cyber-physischer Systeme und Vernetzung", "Die Erfindung der Dampfmaschine", "Nur die Nutzung von E-Mails"],
        answer: 1
    },
    {
        question: "Wofür steht die Abkürzung CPS?",
        options: ["Central Power System", "Cyber-physisches System", "Computer Processing Standard", "Communication Protocol Suite"],
        answer: 1
    },
    {
        question: "Welches Protokoll arbeitet nach dem Publisher-Subscriber Prinzip?",
        options: ["HTTP", "MQTT", "FTP", "SMTP"],
        answer: 1
    },
    {
        question: "Was ist die Aufgabe des 'Brokers' bei MQTT?",
        options: ["Software programmieren", "Zentrale Vermittlung von Nachrichten zwischen Publishern und Subscribern", "Hardware verkaufen", "Das Backup erstellen"],
        answer: 1
    },
    {
        question: "Welche Funktechnologie ist ideal für Sensoren mit hoher Reichweite und minimalem Energieverbrauch?",
        options: ["Wi-Fi", "LoRaWAN", "NFC", "Standard Bluetooth"],
        answer: 1
    },
    {
        question: "Worin liegt der Hauptunterschied zwischen IoT und IIoT?",
        options: ["IIoT ist nur für Handys", "IIoT bezieht sich speziell auf industrielle Anwendungen (Produktion/Fabrik)", "IoT ist schneller", "Es gibt keinen Unterschied"],
        answer: 1
    },
    {
        question: "Welcher QoS-Level bei MQTT garantiert, dass eine Nachricht 'genau einmal' ankommt?",
        options: ["Level 0", "Level 1", "Level 2", "Level 3"],
        answer: 2
    },
    {
        question: "Was beschreibt eine 'Smart Factory'?",
        options: ["Eine Fabrik mit vielen Bildschirmen", "Eine vernetzte Produktionsumgebung, die sich weitgehend selbst organisiert", "Ein Gebäude mit Solaranlagen", "Ein Callcenter"],
        answer: 1
    },
    {
        question: "Was ist 'BLE'?",
        options: ["Bluetooth Low Energy", "Basic Logic Element", "Binary Light Exchange", "Big Loop Ethernet"],
        answer: 0
    },
    {
        question: "Wozu dient der 'Last Will & Testament' bei MQTT?",
        options: ["Zur Vererbung von Code", "Nachricht des Brokers beim unerwarteten Verbindungsabbruch eines Clients", "Das Beenden des Programms", "Ein Backup-Verzeichnis"],
        answer: 1
    },
    {
        question: "Auf welcher Schicht des OSI-Modells arbeitet MQTT primär?",
        options: ["Bitübertragungschicht", "Sicherungsschicht", "Anwendungsschicht", "Vermittlungsschicht"],
        answer: 2
    },
    {
        question: "Was ist ein 'Digitaler Zwilling' (Digital Twin)?",
        options: ["Ein zweiter Monitor", "Das virtuelle Abbild eines physischen Objekts oder Prozesses", "Ein Backup-Server", "Eine Kopie einer CD"],
        answer: 1
    },
    {
        question: "Welche Technologie nutzt elektromagnetische Wellen zur kontaktlosen Identifikation von Objekten (z.B. Etiketten)?",
        options: ["ZigBee", "RFID", "5G", "SATA"],
        answer: 1
    },
    {
        question: "Warum ist 5G für die Industrie 4.0 so wichtig?",
        options: ["Wegen der hellen Farbe", "Wegen der extrem niedrigen Latenzzeiten für Echtzeitanwendungen", "Weil es billiger ist", "Wegen der E-Mails"],
        answer: 1
    },
    {
        question: "Was ist ein 'Topic' bei MQTT?",
        options: ["Der Name des Brokers", "Die hierarchische Adressierung (Betreff) einer Nachricht", "Der Benutzername", "Ein Passwort"],
        answer: 1
    },
    {
        question: "Welche industrielle Revolution brachte das Fließband (Massenerzeugung)?",
        options: ["Industrie 1.0", "Industrie 2.0", "Industrie 3.0", "Industrie 4.0"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Predictive Maintenance'?",
        options: ["Warten, bis etwas kaputt geht", "Vorausschauende Wartung basierend auf Sensordaten zur Vermeidung von Ausfällen", "Täglicher Neustart", "Putzen der Anlagen"],
        answer: 1
    },
    {
        question: "Was ist 'ZigBee'?",
        options: ["Ein schneller Prozessor", "Ein Funkstandard für Mesh-Netzwerke im Smart Home", "Ein neues Auto", "Ein Dateiformat"],
        answer: 1
    },
    {
        question: "Wie viele Geräte können theoretisch in ein IPv6-basiertes IoT integriert werden?",
        options: ["Einige Tausend", "Fast unendlich viele (3,4 x 10^38 Adressen)", "Genau 4 Milliarden", "Nur 255"],
        answer: 1
    },
    {
        question: "Was ist 'NB-IoT'?",
        options: ["New Basic IoT", "Narrowband IoT (Mobilfunk-Standard für geringe Datenmengen)", "No Bit IoT", "Network Bridge IoT"],
        answer: 1
    },
    {
        question: "Was beschreibt 'M2M'?",
        options: ["Man to Man", "Machine to Machine (direkte Kommunikation zwischen Endgeräten)", "Month to Month", "Mail to Mail"],
        answer: 1
    },
    {
        question: "Wer ist der 'Publisher' in einem MQTT-Szenario?",
        options: ["Der Server", "Der Client, der Daten an den Broker sendet", "Der Empfänger der Nachricht", "Die Datenbank"],
        answer: 1
    },
    {
        question: "Was ist ein Vorteil von CPPS (Cyber-physische Produktionssysteme)?",
        options: ["Hohe Flexibilität und Wandlungsfähigkeit der Produktion", "Sie brauchen keinen Strom", "Sie sind immer billiger", "Man braucht keine Mitarbeiter mehr"],
        answer: 0
    },
    {
        question: "Welche Distanz überbrückt NFC typischerweise?",
        options: ["Bis zu 100m", "Wenige Zentimeter (unter 10cm)", "Über 1km", "Ganze Städte"],
        answer: 1
    },
    {
        question: "Was ist ein 'KPI' im Kontext der Industrie?",
        options: ["Keep People Informed", "Key Performance Indicator (Leistungskennzahl)", "Key Protocol Index", "Kern-Prozess-Instanz"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Interoperabilität'?",
        options: ["Innere Sicherheit", "Fähigkeit verschiedener Systeme, nahtlos zusammenzuarbeiten", "Langsame Verbindung", "Verschlüsselung"],
        answer: 1
    },
    {
        question: "Was ist 'Edge Computing'?",
        options: ["Rechnen am Rand des Netzwerks (nah an den Datenquellen/Sensoren)", "Rechnen in der Cloud", "Rechnen mit dem Taschenrechner", "Ausschalten von Servern"],
        answer: 0
    },
    {
        question: "Wofür wird 'Z-Wave' primär eingesetzt?",
        options: ["Für Videostreaming", "Hausautomatisierung / Smart Home", "Industrie-Robotik", "Mobilfunk"],
        answer: 1
    },
    {
        question: "Was ist der Nachteil von Wi-Fi gegenüber LoRaWAN im Sensor-Netz?",
        options: ["Niedrigere Datenrate", "Höherer Energieverbrauch und geringere Reichweite", "Keine Verschlüsselung", "Es ist zu alt"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Smart City'?",
        options: ["Eine Stadt mit vielen Schulen", "Vernetzte Stadtinfrastruktur zur Effizienzsteigerung (Verkehr, Energie, Abfall)", "Eine Stadt ohne Autos", "Eine Stadt im Internet"],
        answer: 1
    }
];
