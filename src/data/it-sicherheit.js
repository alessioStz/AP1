export const sicherheitContent = [
    {
        type: "section",
        title: "1. Die Grundwerte der IT-Sicherheit (CIA)",
        text: "IT-Sicherheit basiert auf drei zentralen Schutzzielen, die durch technische und organisatorische Maßnahmen geschützt werden müssen."
    },
    {
        type: "list",
        title: "CIA-Triade",
        items: [
            "Confidentiality (Vertraulichkeit): Daten sind nur für autorisierte Personen zugänglich.",
            "Integrity (Integrität): Daten sind korrekt und unverändert (Schutz vor Manipulation).",
            "Availability (Verfügbarkeit): Systeme und Daten sind bei Bedarf einsatzbereit."
        ]
    },
    {
        type: "list",
        title: "TOM: Technische und Organisatorische Maßnahmen",
        items: [
            "Technische Maßnahmen: Firewall, Verschlüsselung, 2FA, Backup-Systeme, Videoüberwachung.",
            "Organisatorische Maßnahmen: Mitarbeiterschulungen, Passwortrichtlinien, Zutrittskontrollen, Notfallpläne.",
            "Ziel der TOMs: Umsetzung der DSGVO-Vorgaben zum Schutz personenbezogener Daten."
        ]
    },
    {
        type: "section",
        title: "2. Kryptographie (Verschlüsselung)",
        text: "Verschlüsselung schützt die Vertraulichkeit und Integrität von Daten."
    },
    {
        type: "list",
        title: "Verschlüsselungsverfahren",
        items: [
            "Symmetrisch: Ein geheimer Schlüssel für Verschlüsselung und Entschlüsselung (z.B. AES). Schnell, aber Problem beim Schlüssel-Austausch.",
            "Asymmetrisch: Ein öffentlicher Schlüssel (Verschlüsselung) und ein privater Schlüssel (Entschlüsselung). Bekanntestes Verfahren: RSA.",
            "Hashing: Einwegfunktion zur Prüfung der Integrität (z.B. SHA-256). Aus einem Hash kann das Original nicht wiederhergestellt werden.",
            "Digitale Signatur: Nutzt asymmetrische Kryptographie zur Authentifizierung des Absenders."
        ]
    },
    {
        type: "section",
        title: "3. Backup-Strategien & Notfallplan",
        text: "Um die Verfügbarkeit zu gewährleisten, sind regelmäßige Sicherungen unerlässlich."
    },
    {
        type: "list",
        title: "Sicherungsarten",
        items: [
            "Voll-Backup: Sichert alle Daten. Benötigt viel Platz und Zeit.",
            "Differentielles Backup: Sichert alle Änderungen seit dem letzten VOLL-Backup.",
            "Inkrementelles Backup: Sichert alle Änderungen seit dem letzten BACKUP (egal welcher Art).",
            "GvS-Prinzip: Generationenprinzip (Großvater-Vater-Sohn) zur Vorhaltung verschiedener Zeitstände."
        ]
    },
    {
        type: "list",
        title: "Die 3-2-1 Regel",
        items: [
            "3 Kopien der Daten.",
            "2 verschiedene Speichermedien.",
            "1 Kopie außer Haus (offsite)."
        ]
    },
    {
        type: "section",
        title: "4. Netzwerksicherheit & Angriffstypen",
        text: "Systeme müssen gegen verschiedene Arten von Angriffen geschützt werden."
    },
    {
        type: "list",
        title: "Gefahren & Abwehr",
        items: [
            "Malware: Viren, Würmer, Trojaner, Ransomware (Erpressungstrojaner).",
            "Phishing: Betrügerische Versuche, an Passwörter über Fake-Mails zu gelangen.",
            "DDoS: Überlastung eines Servers durch massenhafte Anfragen.",
            "Social Engineering: Manipulation von Menschen, um Sicherheitsregeln zu umgehen.",
            "Firewall: Filtert Netzwerkverkehr nach Regeln.",
            "Proxy-Server: Vermittler zwischen Client und Server, kann Inhalte filtern und anonymisieren."
        ]
    }
];

export const sicherheitQuiz = [
    {
        question: "Welches Schutzziel stellt sicher, dass Daten nicht unbefugt gelesen werden können?",
        options: ["Verfügbarkeit", "Integrität", "Vertraulichkeit", "Authentizität"],
        answer: 2
    },
    {
        question: "Was beschreibt 'Integrität'?",
        options: ["Daten sind vor Löschung geschützt", "Daten sind korrekt und unverfälscht", "Daten sind verschlüsselt", "Systeme sind 24/7 online"],
        answer: 1
    },
    {
        question: "Welches Verschlüsselungsverfahren nutzt zwei verschiedene Schlüssel (Public/Private)?",
        options: ["Symmetrisch", "Asymmetrisch", "Hashing", "Rot-13"],
        answer: 1
    },
    {
        question: "Wofür wird ein 'Hash-Wert' hauptsächlich genutzt?",
        options: ["Zur Verschlüsselung von E-Mails", "Zur Prüfung der Integrität von Dateien", "Zur Komprimierung von Videos", "Zur Vergabe von IP-Adressen"],
        answer: 1
    },
    {
        question: "Was ist Ransomware?",
        options: ["Software zum Schutz vor Viren", "Schadsoftware, die Daten verschlüsselt und Lösegeld fordert", "Ein Tool zum Hacken von Webseiten", "Ein Browser-Plugin"],
        answer: 1
    },
    {
        question: "Was besagt die '3-2-1 Regel' bei Backups?",
        options: ["3 Server, 2 Backups, 1 IT-Experte", "3 Kopien, 2 Medien, 1 Offsite-Standort", "3 Passwörter, 2 User, 1 Admin", "3 Tage Backup, 2 Wochen Archiv, 1 Jahr Löschung"],
        answer: 1
    },
    {
        question: "Welches Backup-Verfahren sichert alle Änderungen seit dem letzten VOLL-Backup?",
        options: ["Inkrementell", "Differentiell", "Spiegelung", "Copy-Paste"],
        answer: 1
    },
    {
        question: "Was ist 'Phishing'?",
        options: ["Ein Sport für Programmierer", "Versuch, über gefälschte Mails/Webseiten an sensible Daten zu kommen", "Ein Netzwerk-Protokoll", "Ein Backup-Verfahren"],
        answer: 1
    },
    {
        question: "Welche Komponente filtert den Datenverkehr zwischen zwei Netzwerken?",
        options: ["Switch", "Router", "Firewall", "Modem"],
        answer: 2
    },
    {
        question: "Was bedeutet 'Zwei-Faktor-Authentisierung' (2FA)?",
        options: ["Man braucht zwei Passwörter", "Kombination aus zwei verschiedenen Komponenten (z.B. Passwort + Handy-Code)", "Zwei Personen müssen sich gleichzeitig anmelden", "Das Passwort muss zweimal eingegeben werden"],
        answer: 1
    },
    {
        question: "Was ist ein 'Trojaner'?",
        options: ["Ein schneller Prozessor", "Ein nützlich erscheinendes Programm, das im Hintergrund Schadfunktionen ausführt", "Ein Hacker aus Griechenland", "Eine Firewall-Marke"],
        answer: 1
    },
    {
        question: "Welches Protokoll sorgt für eine verschlüsselte Verbindung beim Surfen im Web?",
        options: ["HTTP", "HTTPS", "FTP", "Telnet"],
        answer: 1
    },
    {
        question: "Wofür steht die Abkürzung 'VPN'?",
        options: ["Virtual Private Network", "Very Personal Name", "Visual Project Node", "Verified Protocol Node"],
        answer: 0
    },
    {
        question: "Was ist 'Social Engineering'?",
        options: ["Programmierung von sozialen Netzwerken", "Psychologische Manipulation von Menschen zur Herausgabe von Daten", "Bau von ergonomischen Möbeln", "Optimierung von Teamarbeit"],
        answer: 1
    },
    {
        question: "Welches Gesetz regelt primär den Schutz personenbezogener Daten in der EU?",
        options: ["StGB", "DSGVO", "BGB", "HGB"],
        answer: 1
    },
    {
        question: "Was ist ein 'Wurm' im IT-Kontext?",
        options: ["Ein Hardware-Defekt", "Ein Schadprogramm, das sich selbstständig über Netzwerke verbreitet", "Ein sehr langes Kabel", "Eine Fehlermeldung"],
        answer: 1
    },
    {
        question: "Was ist der Zweck eines 'DMZ' (Demilitarisierte Zone)?",
        options: ["Bereich für Pausen im Büro", "Sicherheitsbereich zwischen internem und externem Netzwerk für öffentliche Dienste", "Ein Rechenzentrum im Ausland", "Ein abgeschalteter Computer"],
        answer: 1
    },
    {
        question: "Was ist 'Brute-Force'?",
        options: ["Ein starker Magnet für Festplatten", "Automatisches Ausprobieren aller möglichen Passwörter", "Eine schnelle Internetverbindung", "Eine spezielle Hardware-Kühlung"],
        answer: 1
    },
    {
        question: "Wozu dient BitLocker?",
        options: ["Zur Optimierung der Internetgeschwindigkeit", "Zur Festplattenverschlüsselung unter Windows", "Zum Sperren von nervigen Benutzern", "Zur Reinigung des PCs"],
        answer: 1
    },
    {
        question: "Was ist eine 'Man-in-the-Middle' Attacke?",
        options: ["Ein Hacker sitzt physisch im Büro", "Angreifer schaltet sich unbemerkt in die Kommunikation zwischen zwei Partnern", "Drei Leute nutzen ein Passwort", "Ein Fehler im Mainboard"],
        answer: 1
    },
    {
        question: "Was ist der 'BSI-Grundschutz'?",
        options: ["Eine Versicherung für Hardware", "Vom Bundesamt für Sicherheit in der Informationstechnik entwickelter Standard zur IT-Sicherheit", "Eine Grundsteuer für IT-Firmen", "Ein Virenscanner"],
        answer: 1
    },
    {
        question: "Welches Schutzziel wird durch einen DDoS-Angriff primär angegriffen?",
        options: ["Vertraulichkeit", "Verfügbarkeit", "Integrität", "Authentizität"],
        answer: 1
    },
    {
        question: "Was ist 'Salting' beim Speichern von Passwörtern?",
        options: ["Hinzufügen einer zufälligen Zeichenfolge vor dem Hashen", "Das Passwort mit Salz reinigen", "Ein Passwort besonders kurz machen", "Passwörter in der Cloud speichern"],
        answer: 0
    },
    {
        question: "Was ist eine 'Sandbox'?",
        options: ["Ein Spielplatz für Admins", "Isolierte Umgebung zum sicheren Ausführen unbekannter Programme", "Ein Backup-Medium", "Ein spezielles Tastatur-Layout"],
        answer: 1
    },
    {
        question: "Woran erkennt man eine digitale Signatur?",
        options: ["An einem handgeschriebenen Scan", "An einem kryptographischen Zertifikat, das die Echtheit bestätigt", "An einem Stempel auf dem Monitor", "An der blauen Farbe des Textes"],
        answer: 1
    },
    {
        question: "Was ist ein 'Proxy-Server'?",
        options: ["Ein sehr schneller Server", "Ein Stellvertreter-Server, der Anfragen im Namen des Clients weiterleitet", "Ein Server für Spiele", "Ein Virenscanner für Netzwerke"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Patch Management'?",
        options: ["Gärtnern im Firmenhof", "Systematisches Einspielen von Software-Updates zur Schließung von Sicherheitslücken", "Verwalten von Netzwerkkabeln", "Erstellen von Passwörtern"],
        answer: 1
    },
    {
        question: "Was ist 'Skimming'?",
        options: ["Schnelles Lesen von Dokumenten", "Illegales Ausspähen von Kartendaten an Geldautomaten", "Ein Optimierungsverfahren", "Datensicherung auf Band"],
        answer: 1
    },
    {
        question: "Was ist eine 'Zero-Day-Exploit'?",
        options: ["Ein Fehler, der genau um Mitternacht auftritt", "Ausnutzung einer Sicherheitslücke, bevor ein Patch verfügbar ist", "Ein sehr alter Virus", "Ein Sicherheitstest am Wochenende"],
        answer: 1
    },
    {
        question: "Was ist 'BYOD'?",
        options: ["Bring Your Own Device (Nutzen privater Geräte für Firmenzwecke)", "Build Your Own Data", "Buy Your Own Drive", "Be Your Own Developer"],
        answer: 0
    }
];
