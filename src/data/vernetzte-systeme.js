export const vernetzteContent = [
    {
        type: "section",
        title: "1. Switching & VLAN-Management",
        text: "Virtual Local Area Networks (VLANs) unterteilen physische Switche in logische Teilnetze, um Sicherheit und Performance zu erhöhen."
    },
    {
        type: "list",
        title: "VLAN Konzepte",
        items: [
            "VLAN-ID: Kennzeichnung des Netzes (z.B. VLAN 10 Marketing, VLAN 20 IT).",
            "Trunking (802.1Q): Übertragung mehrerer VLANs über eine physische Leitung zwischen Switchen mittels 'Tagging'.",
            "Native VLAN: VLAN, dessen Pakete auf einem Trunk nicht getaggt werden (Sicherheitsrisiko, wenn nicht konfiguriert).",
            "VLAN-Matrix: Dokumentation, welches VLAN mit welchem kommunizieren darf (Inter-VLAN-Routing)."
        ]
    },
    {
        type: "section",
        title: "2. Redundanz & Spanning Tree (STP)",
        text: "STP (IEEE 802.1D) verhindert Netzwerkschleifen (Loops) in redundanten Schicht-2-Strukturen, indem es gezielt Ports blockiert."
    },
    {
        type: "list",
        title: "STP Rollen & Wahl",
        items: [
            "Root Bridge: Der zentrale Switch ('Wurzel') des Baums. Gewählt durch die niedrigste Bridge ID (Priority + MAC).",
            "Root Port: Der Port eines Nicht-Root-Switches mit dem günstigsten Pfad zur Root Bridge.",
            "Designated Port: Der Port eines Segments, der Daten in Richtung Root Bridge weiterleitet.",
            "Alternate/Blocking Port: Port, der zur Loop-Vermeidung deaktiviert ist.",
            "Path Costs: Kosten basierend auf Bandbreite (z.B. 100 Mbit = 19, 1 Gbit = 4)."
        ]
    },
    {
        type: "section",
        title: "3. Hochverfügbarkeit mit EtherChannel",
        text: "EtherChannel (LACP/P@G) bündelt mehrere physische Links zu einem logischen Link."
    },
    {
        type: "list",
        title: "Vorteile von EtherChannel",
        items: [
            "Bandbreitenbündelung: Höherer Durchsatz zwischen Switchen.",
            "Redundanz: Fällt ein Kabel aus, läuft der Verkehr über die restlichen weiter (kein STP-Rebuild nötig).",
            "Lastverteilung: Intelligente Nutzung aller verfügbaren Leitungen."
        ]
    },
    {
        type: "section",
        title: "4. Netzwerkplanung & Dokumentation",
        text: "Eine professionelle Planung berücksichtigt Skalierbarkeit und Sicherheit."
    },
    {
        type: "list",
        title: "Planungsaspekte",
        items: [
            "Adressierung: Nutzung privater IPv4-Ranges (RFC 1918) für interne Netze.",
            "Skalierbarkeit: Reservierung von Adressräumen für zukünftige Lagerhallen oder Standorte.",
            "Cisco Packet Tracer: Tool zur Simulation und Validierung von Netzwerkkonfigurationen vor dem Rollout.",
            "Dokumentation: Erstellung von Netzplänen, IP-Listen und Port-Belegungsplänen."
        ]
    }
];

export const vernetzteQuiz = [
    {
        question: "Wozu dient ein VLAN?",
        options: ["Zur Erhöhung der CPU-Leistung", "Zur logischen Unterteilung eines physischen Netzes", "Zum Surfen im Internet", "Zur Stromersparnis"],
        answer: 1
    },
    {
        question: "Welcher Standard wird für VLAN-Tagging auf Trunks verwendet?",
        options: ["802.11ac", "802.1Q", "802.3ad", "802.1X"],
        answer: 1
    },
    {
        question: "Wie wird die Root Bridge im STP gewählt?",
        options: ["Durch Auswürfeln", "Switch mit der niedrigsten Bridge ID (Priorität + MAC)", "Der teuerste Switch", "Zufallsprinzip"],
        answer: 1
    },
    {
        question: "Welchen Status hat ein 'Root Port'?",
        options: ["Blocking", "Forwarding", "Listening", "Disabled"],
        answer: 1
    },
    {
        question: "Was sind die 'Path Costs' für ein 100 Mbit/s (Fast Ethernet) Link laut STP-Standard?",
        options: ["4", "19", "100", "2"],
        answer: 1
    },
    {
        question: "Was verhindert das Spanning Tree Protocol (STP)?",
        options: ["Hacker-Angriffe", "Layer-2-Loops (Netzwerkschleifen)", "Virenverbreitung", "Zu hohen Stromverbrauch"],
        answer: 1
    },
    {
        question: "Wofür steht LACP im Kontext von EtherChannel?",
        options: ["Link Aggregation Control Protocol", "Layer Application Connection Port", "Logic Access Control Point", "Loop Avoidance Central Process"],
        answer: 0
    },
    {
        question: "Ein 'Designated Port' befindet sich immer in welchem Zustand?",
        options: ["Blocking", "Forwarding", "Learning", "Saturated"],
        answer: 1
    },
    {
        question: "Was passiert, wenn man die 'STP Priority' eines Switches manuell senkt?",
        options: ["Er wird seltener genutzt", "Die Wahrscheinlichkeit steigt, dass er Root Bridge wird", "Der Switch schaltet sich aus", "Die Bandbreite sinkt"],
        answer: 1
    },
    {
        question: "Wie viele physische Links können bei EtherChannel (typischerweise) maximal gebündelt werden?",
        options: ["2", "4", "8", "16"],
        answer: 2
    },
    {
        question: "Was beschreibt eine 'VLAN Matrix'?",
        options: ["Einen Film über Netzwerke", "Die Dokumentation der erlaubten Kommunikation zwischen den VLANs", "Die Hardware-Seriennummern", "Die Kabellängen"],
        answer: 1
    },
    {
        question: "Welcher Port-Typ blockiert den Verkehr, um einen Loop zu verhindern?",
        options: ["Root Port", "Designated Port", "Alternate / Blocking Port", "Access Port"],
        answer: 2
    },
    {
        question: "Wozu dient der 'Cisco Packet Tracer'?",
        options: ["Zum Hacken von Passwörtern", "Zur Simulation und Planung von Netzwerk-Topologien", "Als Betriebssystem für Switche", "Zum Messen der Kabellänge"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Inter-VLAN Routing'?",
        options: ["Routing innerhalb eines einzelnen VLANs", "Routing des Datenverkehrs zwischen verschiedenen VLANs (meist über Router/L3-Switch)", "Das Löschen von VLANs", "Die WLAN-Konfiguration"],
        answer: 1
    },
    {
        question: "Welches Protokoll ist die Cisco-proprietäre Alternative zu LACP?",
        options: ["STP", "P@GP", "VTP", "OSPF"],
        answer: 1
    },
    {
        question: "Was ist ein 'Trunk Port'?",
        options: ["Ein Port für nur einen Computer", "Ein Port, der den Verkehr mehrerer VLANs gleichzeitig übertragen kann", "Ein spezieller Stromanschluss", "Ein kaputter Port"],
        answer: 1
    },
    {
        question: "Was sind die Standard-Path-Costs für 1 Gbit/s?",
        options: ["19", "4", "1", "100"],
        answer: 1
    },
    {
        question: "Warum sollte man das 'Native VLAN' von VLAN 1 auf eine andere ID ändern?",
        options: ["Wegen der Geschwindigkeit", "Aus Sicherheitsgründen (Vermeidung von VLAN-Hopping)", "Weil VLAN 1 nicht existiert", "Ist egal"],
        answer: 1
    },
    {
        question: "Welches Gerät führt STP standardmäßig aus?",
        options: ["Hub", "Managed Switch", "Modem", "Drucker"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Skalierbarkeit' in der Netzwerkplanung?",
        options: ["Das Gewicht der Switche", "Die Fähigkeit des Netzes, mit den Anforderungen (z.B. neue Gebäude) zu wachsen", "Die Farbe der Kabel", "Die Dauer der Garantie"],
        answer: 1
    },
    {
        question: "Welchen Vorteil hat EtherChannel gegenüber STP für redundante Links?",
        options: ["Es ist billiger", "Links müssen nicht blockiert werden; die Gesamtbandbreite steigt", "Es braucht keinen Strom", "Es ist einfacher zu verkabeln"],
        answer: 1
    },
    {
        question: "Was ist die BRIDGE ID?",
        options: ["Der Name des Herstellers", "Kombination aus Priority und MAC-Adresse des Switches", "Die IP-Adresse des Gateways", "Ein Passwort"],
        answer: 1
    },
    {
        question: "Welches VLAN empfängt ungetaggten Verkehr auf einem 802.1Q Trunk?",
        options: ["Management VLAN", "Native VLAN", "Voice VLAN", "Default VLAN"],
        answer: 1
    },
    {
        question: "Wie viele Root Bridges gibt es pro Spanning Tree Instanz?",
        options: ["0", "1", "2", "So viele wie Switche vorhanden sind"],
        answer: 1
    },
    {
        question: "Was ist ein 'Access Port'?",
        options: ["Ein Port für Trunks", "Ein Port, der fest einem einzigen VLAN zugeordnet ist (Endgeräte-Anschluss)", "Ein Port für das Internet", "Ein Konsolen-Port"],
        answer: 1
    },
    {
        question: "Was passiert, wenn die Root Bridge ausfällt?",
        options: ["Das Netzwerk bricht dauerhaft zusammen", "Eine neue Root Bridge wird unter den verbleibenden Switchen gewählt", "Alle Switche explodieren", "Nichts"],
        answer: 1
    },
    {
        question: "Wofür steht 'BPDU' bei STP?",
        options: ["Binary Process Data Unit", "Bridge Protocol Data Unit", "Basic Port Delivery Utility", "Backup Power Distribution Unit"],
        answer: 1
    },
    {
        question: "Welches Adressierungsschema wird für private Netze empfohlen?",
        options: ["Public IPs", "RFC 1918 (z.B. 10.0.0.0/8)", "0.0.0.0", "IPv4 Klassen ohne Subnetting"],
        answer: 1
    },
    {
        question: "Was beschreibt der Begriff 'Convergence' (Konvergenz) bei STP?",
        options: ["Die Geschwindigkeit der CPU", "Der Zustand, in dem alle Switche sich auf eine Topologie geeinigt haben", "Das Ende des Vertrags", "Ein Hardware-Defekt"],
        answer: 1
    },
    {
        question: "Warum bündelt man Ports zu einem EtherChannel?",
        options: ["Um Kabel zu sparen", "Um Bandbreite zu erhöhen und Redundanz ohne STP-Blocking zu schaffen", "Damit es schöner aussieht", "Um Strom zu sparen"],
        answer: 1
    }
];
