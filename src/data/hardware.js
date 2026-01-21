export const hardwareContent = [
    {
        type: "section",
        title: "1. Mainboard-Architektur",
        text: "Das Mainboard (Motherboard) ist die zentrale Platine eines Computers. Es verbindet alle Komponenten und regelt deren Kommunikation."
    },
    {
        type: "list",
        title: "Wichtige Komponenten auf dem Board",
        items: [
            "Sockel: Halterung für die CPU (PGA mit Pins am Prozessor, LGA mit Pins im Sockel).",
            "Chipsatz: Steuert den Datenfluss zwischen CPU, RAM und Peripherie.",
            "RAM-Steckplätze: Slots für Arbeitsspeicher (DIMM für Desktop, SO-DIMM für Notebooks).",
            "PCIe-Slots: Für Erweiterungskarten (Grafikkarten, NVMe-Adapter).",
            "Stromanschlüsse: ATX 24-polig für das Board, 4/8-polig für die CPU.",
            "SATA-Ports: Für den Anschluss von HDDs und SSDs."
        ]
    },
    {
        type: "section",
        title: "2. RAID-Systeme (Redundante Festplattenverbünde)",
        text: "RAID dient der Erhöhung der Datensicherheit (Redundanz), der Kapazität oder der Schreib-/Lesegeschwindigkeit durch den Zusammenschluss mehrerer physischer Festplatten."
    },
    {
        type: "list",
        title: "Die wichtigsten RAID-Level",
        items: [
            "RAID 0 (Striping): Daten werden aufgeteilt. Hohe Geschwindigkeit, KEINE Sicherheit. Fällt eine Platte aus, sind alle Daten weg.",
            "RAID 1 (Mirroring): Spiegelung. Daten werden identisch auf zwei Platten geschrieben. Hohe Sicherheit, Kapazität = 1 Platte.",
            "RAID 5 (Parität): Kombination aus Striping und Paritätsinformationen (verteilt). Benötigt mind. 3 Platten. 1 Platte darf ausfallen.",
            "RAID 6: Ähnlich wie RAID 5, aber mit doppelter Parität. Benötigt mind. 4 Platten. BIS ZU 2 Platten dürfen ausfallen.",
            "RAID 10: Kombination aus RAID 1 und RAID 0 (Mirroring + Striping). Hohe Sicherheit und Geschwindigkeit. Benötigt mind. 4 Platten."
        ]
    },
    {
        type: "list",
        title: "Implementierung & Administration",
        items: [
            "Hardware-RAID: Separater RAID-Controller mit eigenem Prozessor und Cache. Entlastet die CPU, oft teurer.",
            "Software-RAID: Das Betriebssystem (Windows, Linux) übernimmt die Verwaltung. Günstiger, belastet die CPU.",
            "Hot-Spare (Hot-Fix): Eine Reserveplatte im System, die bei einem Defekt automatisch einspringt und den Rebuild startet.",
            "Das RAIDsche Dreieck: Zielkonflikt zwischen Kosten, Sicherheit und Geschwindigkeit."
        ]
    },
    {
        type: "section",
        title: "3. Speicherschnittstellen & Datenübertragung",
        text: "Moderne Systeme setzen auf hohe Bandbreiten und kompakte Bauweisen."
    },
    {
        type: "list",
        title: "Schnittstellen-Details",
        items: [
            "SATA: Bis zu 6 Gbit/s. Protokoll: AHCI. Einsatz für HDDs und Standard-SSDs.",
            "M.2: Kompakte Bauweise. Unterstützt SATA oder PCIe (NVMe).",
            "USB Standards: USB 3.2 Gen 2 (10 Gbit/s), USB 4 (bis 40 Gbit/s).",
            "Thunderbolt: Kombiniert PCIe, DisplayPort und Strom (bis 40 Gbit/s)."
        ]
    },
    {
        type: "section",
        title: "4. Druckertechnologien",
        text: "Drucker nutzen unterschiedliche physikalische Verfahren zur Bilderzeugung."
    },
    {
        type: "list",
        title: "Laserdrucker vs. Tintenstrahl",
        items: [
            "Laser: Elektrostatik, Toner, Fixierung (Hitze/Druck). Schnell und wischfest.",
            "Inkjet: Tröpfchenausstoß (Piezo/Thermal). CMYK-Farbmischung (subtraktiv). Exzellente Fotos."
        ]
    }
];

export const hardwareQuiz = [
    {
        question: "Welches RAID-Level bietet Striping ohne jegliche Redundanz?",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 0
    },
    {
        question: "Was ist der Hauptvorteil von RAID 1?",
        options: ["Maximale Geschwindigkeit", "Maximale Kapazität", "Datensicherheit durch Spiegelung", "Niedrigster Preis"],
        answer: 2
    },
    {
        question: "Wie viele Festplatten dürfen bei RAID 5 maximal gleichzeitig ausfallen, ohne Datenverlust zu erleiden?",
        options: ["0", "1", "2", "Beliebig viele"],
        answer: 1
    },
    {
        question: "Was ist eine 'Hot-Spare' Platte?",
        options: ["Eine besonders schnelle SSD", "Eine Ersatzplatte, die im Fehlerfall automatisch einspringt", "Eine externe Backup-Platte", "Eine Festplatte für Cloud-Speicher"],
        answer: 1
    },
    {
        question: "Welches RAID-Level benötigt mindestens 4 Festplatten und bietet doppelte Parität?",
        options: ["RAID 1", "RAID 5", "RAID 6", "RAID 0"],
        answer: 2
    },
    {
        question: "Was ist der Unterschied zwischen Hardware- und Software-RAid?",
        options: ["Hardware-RAID nutzt einen eigenen Controller, Software-RAID das Betriebssystem", "Software-RAID ist immer schneller", "Hardware-RAID ist nur für Laptops", "Es gibt keinen"],
        answer: 0
    },
    {
        question: "Welches RAID-Level ist eine Kombination aus Spiegelung und Striping?",
        options: ["RAID 0", "RAID 5", "RAID 10", "RAID 6"],
        answer: 2
    },
    {
        question: "Was beschreibt das 'RAIDsche Dreieck'?",
        options: ["Den Platzbedarf im Gehäuse", "Den Zielkonflikt zwischen Kosten, Sicherheit und Geschwindigkeit", "Die Form der Festplatten", "Den Stromverbrauch"],
        answer: 1
    },
    {
        question: "Wie hoch ist die nutzbare Kapazität bei RAID 1 mit zwei 4TB Festplatten?",
        options: ["8TB", "4TB", "2TB", "16TB"],
        answer: 1
    },
    {
        question: "Was passiert beim 'Rebuild' eines RAID-Systems?",
        options: ["Die Festplatten werden formatiert", "Die Daten der ausgefallenen Platte werden auf eine neue Platte wiederhergestellt", "Das Betriebssystem wird neu installiert", "Das BIOS wird geupdatet"],
        answer: 1
    },
    {
        question: "Welches RAID-Level bietet die höchste Lesegeschwindigkeit durch Parallelisierung ohne Sicherheit?",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
        answer: 0
    },
    {
        question: "Welches Modell beschreibt die Farbmischung beim Drucker?",
        options: ["RGB (Additiv)", "CMYK (Subtraktiv)", "HSV", "Bit-Map"],
        answer: 1
    },
    {
        question: "Welcher Sockeltyp findet man auf modernen Intel-Mainboards?",
        options: ["PGA", "LGA", "BGA", "ZIF"],
        answer: 1
    },
    {
        question: "Was ist die maximale Datenrate von Thunderbolt 4?",
        options: ["10 Gbit/s", "20 Gbit/s", "40 Gbit/s", "480 Mbit/s"],
        answer: 2
    },
    {
        question: "Was macht die 'Fixiereinheit' im Laserdrucker?",
        options: ["Sie reinigt die Trommel", "Sie schmilzt den Toner durch Hitze auf das Papier", "Sie mischt die Farben", "Sie transportiert das Papier"],
        answer: 1
    },
    {
        question: "Wie viele Festplatten benötigt man mindestens für ein RAID 5?",
        options: ["1", "2", "3", "4"],
        answer: 2
    },
    {
        question: "Was bedeutet 'Parität' im Kontext von RAID?",
        options: ["Dass alle Platten gleich groß sind", "Zusatzinformationen zur Fehlerkorrektur/Wiederherstellung", "Dass die Platten besonders leise sind", "Ein spezielles Kabel"],
        answer: 1
    },
    {
        question: "Welche RAID-Konfiguration bietet Schutz gegen den Ausfall von ZWEI Festplatten?",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
        answer: 3
    },
    {
        question: "Was ist ein Vorteil von Hardware-RAID gegenüber Software-RAID?",
        options: ["Es ist kostenlos", "Die CPU des Rechners wird nicht belastet", "Man braucht keine Festplatten", "Es ist einfacher zu installieren"],
        answer: 1
    },
    {
        question: "Bei welchem RAID-Level verliert man genau 50% der Gesamtkapazität?",
        options: ["RAID 0", "RAID 1 (und RAID 10)", "RAID 5", "RAID 6"],
        answer: 1
    },
    {
        question: "Woran erkennt man einen LGA-Sockel?",
        options: ["Pins am Prozessor", "Pins befinden sich im Sockel auf dem Board", "Keine Pins", "Blaues Plastik"],
        answer: 1
    },
    {
        question: "Wofür steht 'M.2'?",
        options: ["Memory 2.0", "Kompakter Formfaktor für SSDs und Erweiterungskarten", "Ein spezielles Maus-Modell", "Monitor 2"],
        answer: 1
    },
    {
        question: "Was ist das Hauptmerkmal eines Tintenstrahldruckers?",
        options: ["Elektrostatik", "Tröpfchenausstoß (Piezo/Thermal)", "Farbband", "Wärmeübertragung"],
        answer: 1
    },
    {
        question: "Welches RAID-Level ist am kostengünstigsten pro Terabyte bei hoher Sicherheit (ab 3 Platten)?",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        answer: 2
    },
    {
        question: "Was ist 'RAID 01' (im Gegensatz zu RAID 10)?",
        options: ["Dasselbe", "Ein Mirror von Stripes (weniger fehlertolerant als RAID 10)", "Ein Stripe von Mirrors", "Eine veraltete Software"],
        answer: 1
    },
    {
        question: "Welcher Chipsatz-Komponente ist heute meist direkt in der CPU integriert?",
        options: ["Southbridge", "Northbridge", "BIOS", "RAM"],
        answer: 1
    },
    {
        question: "Wie lautet die maximale Übertragungsrate von USB 3.0?",
        options: ["480 Mbit/s", "5 Gbit/s", "10 Gbit/s", "1 Gbit/s"],
        answer: 1
    },
    {
        question: "Welche Komponente am Mainboard versorgt die CPU mit Strom?",
        options: ["SATA Kabel", "P4 / EPS Anschluss (4/8-polig)", "USB Port", "PCIe Slot"],
        answer: 1
    },
    {
        question: "Was ist 'RAID 10'?",
        options: ["RAID 1 + RAID 0", "RAID 5 + 5", "RAID 6 + 4", "RAID 0 + 0"],
        answer: 0
    },
    {
        question: "Wozu dient der Cache am Hardware-RAID-Controller?",
        options: ["Zum Speichern von Passwörtern", "Zur Beschleunigung von Schreib-/Lesezugriffen", "Zur Kühlung", "Als Backup-Speicher"],
        answer: 1
    }
];
