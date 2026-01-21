export const netzwerkContent = [
    {
        type: "section",
        title: "1. Grundlagen der IPv4-Adressierung",
        text: "Eine IPv4-Adresse ist eine 32-Bit-Zahl, die in vier Oktette (à 8 Bit) unterteilt wird. Sie dient der eindeutigen Adressierung von Geräten in einem IP-Netzwerk."
    },
    {
        type: "list",
        title: "Aufbau und Notation",
        items: [
            "Dotted-Decimal-Notation: Die 32 Bit werden als vier Dezimalzahlen (0-255) dargestellt, getrennt durch Punkte (z. B. 192.168.10.1).",
            "Binäre Schreibweise: Jedes Oktett besteht aus 8 Binärstellen (z. B. 11000000.10101000.00001010.00000001).",
            "Adresshierarchie: Adressen werden von der IANA (Internet Assigned Numbers Authority) an regionale Registrare (z. B. RIPE NCC für Europa) und dann an Provider vergeben."
        ]
    },
    {
        type: "list",
        title: "Adressklassen (Klassisches Modell)",
        items: [
            "Klasse A: 0.0.0.0 bis 127.255.255.255 (Subnetzmaske 255.0.0.0).",
            "Klasse B: 128.0.0.0 bis 191.255.255.255 (Subnetzmaske 255.255.0.0).",
            "Klasse C: 192.0.0.0 bis 223.255.255.255 (Subnetzmaske 255.255.255.0).",
            "Klasse D: Multicast (224.0.0.0 bis 239.255.255.255).",
            "Klasse E: Experimentell (240.0.0.0 bis 255.255.255.255)."
        ]
    },
    {
        type: "section",
        title: "2. Subnetting & Netzmasken",
        text: "Subnetting unterteilt ein großes Netzwerk in kleinere Teilnetze (Subnetze). Die Netzmaske bestimmt, welcher Teil der IP-Adresse zum Netzwerk (Net-ID) und welcher zu den Geräten (Host-ID) gehört."
    },
    {
        type: "list",
        title: "Berechnungen & Begriffe",
        items: [
            "Netzwerkadresse: Alle Host-Bits sind auf 0 gesetzt. Identifiziert das Netz.",
            "Broadcast-Adresse: Alle Host-Bits sind auf 1 gesetzt. Nachricht an alle Teilnehmer im Netz.",
            "Host-Anzahl: 2^n - 2 (n = Anzahl der Host-Bits). Die 2 wird abgezogen für Netz- und Broadcast-Adresse.",
            "Bitweise UND-Verknüpfung (AND): IP-Adresse AND Netzmaske = Netzwerkadresse.",
            "CIDR (Classless Inter-Domain Routing): Suffix-Schreibweise (z. B. /24 statt 255.255.255.0).",
            "VLSM (Variable Length Subnet Mask): Erlaubt Subnetze unterschiedlicher Größe innerhalb eines Adressblocks zur effizienten Nutzung."
        ]
    },
    {
        type: "list",
        title: "Spezielle Adressbereiche",
        items: [
            "Private Bereiche: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Nicht im Internet geroutet.",
            "Loopback: 127.0.0.1 (Localhost) zur Prüfung des eigenen TCP/IP-Stacks.",
            "Standard-Route: 0.0.0.0/0 (Default Gateway)."
        ]
    },
    {
        type: "section",
        title: "3. Praktisches Rechnen",
        text: "Für die Prüfung ist die Beherrschung der Zweierpotenzen (1, 2, 4, 8, 16, 32, 64, 128) und die Umwandlung essentiell."
    },
    {
        type: "list",
        title: "Beispiel /27 Subnetting",
        items: [
            "Maske /27: 27 mal eins, dann 5 mal null (11111111.11111111.11111111.11100000) = 255.255.255.224.",
            "Sprungweite: Das letzte gesetzte Bit steht an der Stelle 32 (2^5). Die Netze fangen also bei 0, 32, 64, 96... an.",
            "Hosts pro Netz: 2^5 - 2 = 30 nutzbare IP-Adressen."
        ]
    }
];

export const netzwerkQuiz = [
    {
        question: "Wie viele Bits hat eine IPv4-Adresse?",
        options: ["16", "32", "64", "128"],
        answer: 1
    },
    {
        question: "In welche Klasse fällt die IP-Adresse 130.10.20.1?",
        options: ["A", "B", "C", "D"],
        answer: 1
    },
    {
        question: "Wie lautet die Netzadresse der IP 192.168.1.50 bei einer Maske von 255.255.255.0?",
        options: ["192.168.1.1", "192.168.1.0", "192.168.1.255", "192.168.0.0"],
        answer: 1
    },
    {
        question: "Was bedeutet CIDR?",
        options: ["Common Internet Data Route", "Classless Inter-Domain Routing", "Central IP Definition Rule", "Computer Integrated Data Record"],
        answer: 1
    },
    {
        question: "Wie viele nutzbare Hosts bietet ein /24 Netzwerk?",
        options: ["256", "255", "254", "252"],
        answer: 2
    },
    {
        question: "Was ist die Broadcast-Adresse für das Netz 10.0.0.0/8?",
        options: ["10.0.0.1", "10.255.255.255", "10.0.0.255", "255.255.255.255"],
        answer: 1
    },
    {
        question: "Welches Bit-Muster entspricht dem Dezimalwert 192?",
        options: ["11000000", "10101010", "11110000", "10000001"],
        answer: 0
    },
    {
        question: "Wozu dient VLSM?",
        options: ["Zur Verschlüsselung von IPs", "Zur effizienten Nutzung des Adressraums durch Subnetze unterschiedlicher Größe", "Zur Beschleunigung des Internetzugangs", "Zur automatischen Adressvergabe"],
        answer: 1
    },
    {
        question: "Wie lautet die Loopback-Adresse?",
        options: ["192.168.0.1", "10.0.0.1", "127.0.0.1", "0.0.0.0"],
        answer: 2
    },
    {
        question: "Was passiert bei einer bitweisen UND-Verknüpfung von IP-Adresse und Subnetzmaske?",
        options: ["Man erhält die Broadcast-Adresse", "Man erhält die Netzwerkadresse", "Man erhält die Host-ID", "Der PC stürzt ab"],
        answer: 1
    },
    {
        question: "Welcher Bereich ist ein privater IPv4-Adressraum?",
        options: ["192.167.0.0/16", "172.16.0.0/12", "128.0.0.0/8", "8.8.8.8"],
        answer: 1
    },
    {
        question: "Wie lautet die Subnetzmaske für /27 in Dezimalform?",
        options: ["255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240"],
        answer: 2
    },
    {
        question: "Was beschreibt der Begriff 'Oktett'?",
        options: ["Eine Gruppe von 10 Bits", "Einen Block von 8 Bits in einer IP-Adresse", "Die Geschwindigkeit des Netzes", "Die Anzahl der Router"],
        answer: 1
    },
    {
        question: "Wieviele Host-Bits hat ein /28 Netzwerk?",
        options: ["28", "16", "8", "4"],
        answer: 3
    },
    {
        question: "Welche Institution vergibt weltweit IP-Adressbereiche an regionale Registrare?",
        options: ["RIPE NCC", "IANA", "IEEE", "Denic"],
        answer: 1
    },
    {
        question: "Was ist ein Merkmal der Broadcast-Adresse?",
        options: ["Alle Host-Bits sind 0", "Das erste Bit ist 1", "Alle Host-Bits sind 1", "Die Adresse endet immer auf .0"],
        answer: 2
    },
    {
        question: "Welche IP-Adresse ist das Standard-Gateway/Default-Route Symbol?",
        options: ["1.1.1.1", "0.0.0.0", "255.255.255.255", "127.0.0.1"],
        answer: 1
    },
    {
        question: "Warum werden bei der Host-Berechnung 2 Adressen abgezogen?",
        options: ["Für Router und Switch", "Für Netzwerk- und Broadcast-Adresse", "Wegen technischer Verluste", "Für Internet und Intranet"],
        answer: 1
    },
    {
        question: "Wie lautet 2 hoch 7?",
        options: ["64", "128", "256", "512"],
        answer: 1
    },
    {
        question: "In welchem Oktett findet bei einer /20 Maske das Subnetting statt?",
        options: ["1.", "2.", "3.", "4."],
        answer: 2
    },
    {
        question: "Was ist eine 'Gültigkeitsprüfung' im Subnetting?",
        options: ["Prüfung, ob eine IP eine gültige Hostadresse im jeweiligen Subnetz ist", "Abfrage beim Provider", "Virencheck der IP", "Prüfung der Hardware"],
        answer: 0
    },
    {
        question: "Wie rechnet man binär 10101010 in dezimal um?",
        options: ["128", "170", "192", "255"],
        answer: 1
    },
    {
        question: "Was ist die Sprungweite bei einer Subnetzmaske von 255.255.255.192?",
        options: ["32", "64", "128", "16"],
        answer: 1
    },
    {
        question: "Sind Netzwerkadressen im Host-Anteil meist gerade oder ungerade (Faustregel)?",
        options: ["Immer ungerade", "Meist gerade (da letztes Bit 0)", "Immer 255", "Völlig zufällig"],
        answer: 1
    },
    {
        question: "Welches Protokoll wird vom Router genutzt, um Daten zwischen verschiedenen Subnetzen zu vermitteln?",
        options: ["IP", "TCP", "HTTP", "ARP"],
        answer: 0
    },
    {
        question: "Was bedeutet 'Multicast' (Klasse D)?",
        options: ["Nachricht an EINEN Teilnehmer", "Nachricht an ALLE Teilnehmer im Netz", "Nachricht an eine GRUPPE von Teilnehmern", "Eine Fehlermeldung"],
        answer: 2
    },
    {
        question: "Was ist das Ergebnis der Berechnung: 2^6 - 2?",
        options: ["30", "62", "126", "14"],
        answer: 1
    },
    {
        question: "Wie viele Subnetze erhält man, wenn man ein /24 Netz um 2 Bits erweitert (/26)?",
        options: ["2", "4", "8", "16"],
        answer: 1
    },
    {
        question: "Was ist der Vorteil von VLSM gegenüber festem Subnetting?",
        options: ["Weniger Rechenaufwand", "Vermeidung von Adressverschwendung", "Sicherere Adressen", "Automatische Konfiguration"],
        answer: 1
    },
    {
        question: "Welches Tool wird oft genutzt, um die Erreichbarkeit eines Hosts zu prüfen?",
        options: ["traceroute", "ping", "ipconfig", "nslookup"],
        answer: 1
    }
];
