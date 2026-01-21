export const greenItContent = [
    {
        type: "section",
        title: "1. Grundlagen der Green IT",
        text: "Green IT bezeichnet Bestrebungen, die Nutzung von Informations- und Kommunikationstechnik (IKT) über den gesamten Lebenszyklus hinweg umwelt- und ressourcenschonend zu gestalten."
    },
    {
        type: "list",
        title: "Ziele der Green IT",
        items: [
            "Reduzierung des Energieverbrauchs (während der Nutzung und Herstellung).",
            "Minimierung von Emissionen (CO2-Fußabdruck).",
            "Nachhaltiges Hardware-Design (Materialwahl, Reparierbarkeit).",
            "Vermeidung von Schadstoffen in der Produktion."
        ]
    },
    {
        type: "section",
        title: "2. Lebenszyklus von Hardware",
        text: "Die langlebige Nutzung von Geräten ist einer der effektivsten Hebel für die Nachhaltigkeit, da die Herstellung oft den größten Teil der Umweltbelastung ausmacht."
    },
    {
        type: "list",
        title: "Phasen und Maßnahmen",
        items: [
            "Herstellung: Hoher Rohstoff- und Energieeinsatz (Graue Energie).",
            "Nutzungsphase: Energieeffizienzklassen beachten, Power-Management nutzen.",
            "Langlebigkeit: Besonders bei Notebooks ist eine Nutzung über 5+ Jahre erstrebenswert.",
            "End-of-Life: IT-Refurbishing (Aufarbeitung) vor IT-Recycling (Rohstoffrückgewinnung)."
        ]
    },
    {
        type: "section",
        title: "3. Nachhaltigkeitssiegel & Zertifikate",
        text: "Zertifizierungen helfen dabei, die Umweltverträglichkeit von IT-Produkten objektiv zu bewerten."
    },
    {
        type: "list",
        title: "Die wichtigsten Siegel",
        items: [
            "Blauer Engel: Deutsches Umweltsiegel für Ressourcen- und Energieeffizienz.",
            "Energy Star: Internationaler Standard für energiesparende Bürogeräte.",
            "EPEAT: Umfassendes US-Zertifikat (Gold, Silber, Bronze) für den gesamten Lebenszyklus.",
            "TCO Certified: Weltweit führende Nachhaltigkeitszertifizierung für IT-Produkte (Soziale + Ökologische Kriterien).",
            "Nordic Ecolabel (Svanen): Skandinavisches Umweltsiegel."
        ]
    },
    {
        type: "section",
        title: "4. Ressourcen- und Unternehmensstrategien",
        text: "Große IT-Unternehmen setzen sich ambitionierte Klimaziele, auch um wettbewerbsfähig zu bleiben."
    },
    {
        type: "list",
        title: "Begriffe und Strategien",
        items: [
            "IT-Refurbishing: Professionelle Aufarbeitung gebrauchter Hardware.",
            "IT-Remarketing: Wiedervermarktung gebrauchter, funktionsfähiger Geräte.",
            "Klimaneutralität: Z.B. Apple (CO2-neutral bis 2030), Microsoft (CO2-negativ bis 2030).",
            "Circular Economy: Kreislaufwirtschaft zur Minimierung von Abfällen."
        ]
    }
];

export const greenItQuiz = [
    {
        question: "Was beschreibt der Begriff 'Graue Energie' bei einem Notebook?",
        options: ["Die Energie, die durch den Akku geliefert wird", "Die Energie, die für Herstellung, Transport und Entsorgung benötigt wird", "Den Stromverbrauch im Standby-Modus", "Die Strahlung des Displays"],
        answer: 1
    },
    {
        question: "Welches Siegel ist ein umfassendes Zertifikat für den gesamten Lebenszyklus von IT-Geräten (US-Ursprung)?",
        options: ["Blauer Engel", "Energy Star", "EPEAT", "TCO Certified"],
        answer: 2
    },
    {
        question: "Was ist das Hauptziel von 'IT-Refurbishing'?",
        options: ["Die fachgerechte Zerstörung von Festplatten", "Die professionelle Aufarbeitung gebrauchter Hardware für die Zweitnutzung", "Der Neubau von Computern aus Rohstoffen", "Das Design von grünen Logos"],
        answer: 1
    },
    {
        question: "Welches Unternehmen hat sich das Ziel gesetzt, bis 2030 CO2-negativ zu sein?",
        options: ["Apple", "Microsoft", "Google", "Amazon"],
        answer: 1
    },
    {
        question: "Wofür steht das 'TCO Certified' Siegel hauptsächlich?",
        options: ["Nur für geringen Stromverbrauch", "Für ökologische und soziale Nachhaltigkeit über den gesamten Lebenszyklus", "Dass das Gerät sehr billig (TCO) ist", "Dass der Support gut ist"],
        answer: 1
    },
    {
        question: "Welche Phase im Lebenszyklus eines PCs verursacht meist die größte Umweltbelastung?",
        options: ["Die Nutzung (Stromverbrauch)", "Die Herstellung (Rohstoffgewinnung & Produktion)", "Der Transport zum Kunden", "Die Verpackung"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Circularity' im Kontext von IT?",
        options: ["Dass Monitore immer runder werden", "Das Prinzip der Kreislaufwirtschaft (Wiederverwendung statt Wegwerfen)", "Dass der Strom im Kreis fließt", "Dass Programme in Schleifen laufen"],
        answer: 1
    },
    {
        question: "Warum ist eine lange Nutzungsdauer (z.B. 6 Jahre statt 3) ökologisch sinnvoll?",
        options: ["Weil man Geld spart", "Weil die graue Energie auf mehr Jahre verteilt wird und weniger Neugeräte produziert werden müssen", "Weil alte Geräte weniger Strom verbrauchen", "Weil Windows XP sicherer ist"],
        answer: 1
    },
    {
        question: "Welches Siegel ist das bekannteste deutsche Umweltsiegel?",
        options: ["Blauer Engel", "Grüner Punkt", "TÜV Rheinland", "Energy Star"],
        answer: 0
    },
    {
        question: "Was versteht man unter 'IT-Remarketing'?",
        options: ["Werbung für neue IT-Produkte", "Den professionellen Wiederverkauf gebrauchter Hardware", "Das Versenden von Spam-Mails", "Die Reparatur von Displays"],
        answer: 1
    },
    {
        question: "Was bedeutet 'E-Waste'?",
        options: ["Besonders schnelle Datenübertragungsrate", "Elektronikschrott (Altgeräte)", "Eine sichere E-Mail", "Energieverlust"],
        answer: 1
    },
    {
        question: "Welche Zertifizierung fokussiert sich primär auf den Energieverbrauch im Betrieb?",
        options: ["EPEAT", "TCO", "Energy Star", "Nordic Ecolabel"],
        answer: 2
    },
    {
        question: "Was beschreibt 'Carbon Offsetting'?",
        options: ["Die Reduzierung von Plastik", "Den Ausgleich von CO2-Emissionen durch Klimaschutzprojekte", "Das Ausschalten von Servern über Nacht", "Die Nutzung von Solarenergie"],
        answer: 1
    },
    {
        question: "Was ist ein 'Conflict Mineral' (Konfliktrohstoff) im Smartphone?",
        options: ["Plastik aus dem Meer", "Rohstoffe wie Tantal oder Kobalt aus Krisengebieten", "Glas von kaputten Displays", "Aluminium"],
        answer: 1
    },
    {
        question: "Welcher Begriff bezeichnet das Ziel, nicht mehr CO2 auszustoßen, als durch Maßnahmen gebunden wird?",
        options: ["Klimaneutralität", "Klimanegativität", "Klimapositivität", "Klimastabilität"],
        answer: 0
    },
    {
        question: "Was ist ein Merkmal nachhaltigen Hardware-Designs?",
        options: ["Verklebte Akkus", "Leichte Zerlegbarkeit und Verwendung von Sekundärrohstoffen", "Möglichst viel Plastik", "Keine Upgrademöglichkeit"],
        answer: 1
    },
    {
        question: "Was ist 'Greenwashing'?",
        options: ["Das Reinigen von Servern mit Wasser", "Verschleierung von negativen Umweltauswirkungen durch übertriebene Darstellung von 'grünen' Maßnahmen", "Ein spezielles Display-Reinigungsmittel", "Die Wartung von Solaranlagen"],
        answer: 1
    },
    {
        question: "Welche Energiequelle ist für 'Green IT' in Rechenzentren am wichtigsten?",
        options: ["Kohlekraft", "Erdgas", "Erneuerbare Energien (Wind, Solar, Wasser)", "Kernkraft"],
        answer: 2
    },
    {
        question: "Was bedeutet 'Dematerialisierung'?",
        options: ["Dass Gegenstände verschwinden", "Das Ersetzen von physischen Produkten durch digitale Dienste (z.B. Cloud-Streaming statt DVDs)", "Das Verdampfen von Chips", "Die Nutzung von dünneren Kabeln"],
        answer: 1
    },
    {
        question: "Warum ist die Abwärme von Servern ein Thema für Green IT?",
        options: ["Weil Server sonst einfrieren", "Weil man sie zur Beheizung von Gebäuden nutzen könnte (Abwärmenutzung)", "Weil sie die WLAN-Signale stört", "Weil sie die Farbe der Kabel ändert"],
        answer: 1
    },
    {
        question: "Was ist das 'ElektroG'?",
        options: ["Gesetz über Elektroautos", "Gesetz über das Inverkehrbringen, die Rücknahme und die umweltverträgliche Entsorgung von Elektrogehilfen", "Regelung für den Strompreis", "Sicherheitsvorschrift für Steckdosen"],
        answer: 1
    },
    {
        question: "Welches Metall ist ein wertvoller Rohstoff beim IT-Recycling?",
        options: ["Gold", "Kohlenstoff", "Holz", "Schwefel"],
        answer: 0
    },
    {
        question: "Was bedeutet 'TCO' im Kontext der Nachhaltigkeit manchmal auch?",
        options: ["Total Cost of Ownership", "Triple Core Optimization", "Technical Care Object", "Es bleibt meist bei Total Cost of Ownership"],
        answer: 0
    },
    {
        question: "Was ist 'SLAAC'?",
        options: ["Ein Siegel", "Ein Netzwerk-Protokoll (IPv6)", "Ein Recycling-Verfahren", "Ein Hardware-Bus"],
        answer: 1
    },
    {
        question: "Wozu dient Power-over-Ethernet (PoE) ökologisch?",
        options: ["Es spart separate Netzteile und Kabel", "Es macht den Strom grüner", "Es beschleunigt das Internet", "Es braucht kein Internet"],
        answer: 0
    },
    {
        question: "Was ist der Vorteil von 'Cloud Computing' für die Nachhaltigkeit?",
        options: ["Mehr Server verbrauchen immer mehr Strom", "Höhere Auslastung der Hardware durch Virtualisierung spart Ressourcen", "Die Cloud ist immer im Himmel", "Die Cloud braucht kein Metall"],
        answer: 1
    },
    {
        question: "Was beschreibt 'Sustainable Procurement'?",
        options: ["Den schnellen Einkauf von Billigware", "Den nachhaltigen Einkauf unter Berücksichtigung von Sozial- und Umweltstandards", "Das Mieten von IT", "Einkauf nur am Wochenende"],
        answer: 1
    },
    {
        question: "Welches Land hat das 'Nordic Ecolabel'?",
        options: ["Deutschland", "USA", "Skandinavische Länder", "Japan"],
        answer: 2
    },
    {
        question: "Was bedeutet 'REACH'?",
        options: ["Eine Verordnung zur Registrierung, Bewertung, Zulassung und Beschränkung chemischer Stoffe", "Die Reichweite von WLAN", "Ein neues Speicherprotokoll", "Ein Backup-Tool"],
        answer: 0
    },
    {
        question: "Was ist das Ziel des 'Right to Repair'?",
        options: ["Dass alles kaputt gehen darf", "Dass Verbraucher Geräte selbst reparieren können (Zugang zu Ersatzteilen/Anleitungen)", "Dass Techniker mehr Geld verdienen", "Dass man keine Garantie braucht"],
        answer: 1
    }
];
