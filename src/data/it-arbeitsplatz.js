export const itArbeitsplatzContent = [
    {
        type: "section",
        title: "1. Kundenberatung & Bedarfsanalyse",
        text: "Eine erfolgreiche Einrichtung beginnt mit der Ermittlung der Kundenwünsche. Hierzu nutzt man professionelle Fragetechniken."
    },
    {
        type: "list",
        title: "Fragetechniken im Kundengespräch",
        items: [
            "Offene Fragen (W-Fragen): Zur Informationsgewinnung ('Was soll mit dem Gerät gemacht werden?')",
            "Geschlossene Fragen: Zur Bestätigung oder Entscheidung ('Soll das Gerät mobil sein?')",
            "Suggestivfragen: Zur Lenkung des Gesprächs (Sollten wir vermeiden, außer für gezielte Führung)",
            "Alternativfragen: Zur Eingrenzung von Optionen ('Wünschen Sie 16GB oder 32GB RAM?')",
            "Kontrollfragen: Zur Überprüfung des Verständnisses ('Habe ich Sie richtig verstanden, dass...')"
        ]
    },
    {
        type: "section",
        title: "2. Produktauswahl & Ergonomie",
        text: "Die Auswahl der Hardware erfolgt nach technischen, wirtschaftlichen und ergonomischen Kriterien. Besonders die Bildschirmarbeitsverordnung (BiArbV) ist hier relevant."
    },
    {
        type: "list",
        title: "Ergonomische Anforderungen",
        items: [
            "Monitor: Strahlungsarm, flimmerfrei, neigbar, entspiegelt.",
            "Tastatur: Getrennt vom Bildschirm, reflexionsarm, ergonomisch geformt.",
            "Beleuchtung: 500 Lux Mindeststärke, Blendfreiheit (keine Spiegelungen auf dem Screen).",
            "Abstände: Sehabstand zum Monitor ca. 50-70 cm.",
            "Körperhaltung: Oberschenkel waagerecht, Füße fest auf dem Boden, Blick leicht nach unten."
        ]
    },
    {
        type: "section",
        title: "3. Wirtschaftlichkeitsbetrachtung (TCO & Nutzwert)",
        text: "IT-Systeme werden nicht nur nach dem Anschaffungspreis bewertet. Die Total Cost of Ownership (TCO) betrachtet alle Kosten über den Lebenszyklus."
    },
    {
        type: "list",
        title: "Bestandteile der TCO",
        items: [
            "Direkte Kosten: Anschaffung (HW/SW), Installation, Wartung, Support, Verbrauchsmaterial (Toner/Strom).",
            "Indirekte Kosten: Schulungskosten für Mitarbeiter, Ausfallzeiten, administrative Kosten.",
            "Entsorgungskosten: Fachgerechte Entsorgung nach ElektroG."
        ]
    },
    {
        type: "section",
        title: "4. Vertragsarten im IT-Bereich",
        text: "Beim Erwerb oder der Nutzung gibt es rechtliche Unterschiede zwischen den Vertragsformen."
    },
    {
        type: "list",
        title: "Verträge im Überblick",
        items: [
            "Kaufvertrag: Übereignung gegen Geld (§ 433 BGB).",
            "Mietvertrag: Zeitweise Überlassung gegen Gebühr (§ 535 BGB).",
            "Leasingvertrag: Sonderform der Miete, oft mit Kaufoption am Ende.",
            "Dienstvertrag: Tätigkeit wird geschuldet, kein konkreter Erfolg (z.B. IT-Beratung).",
            "Werkvertrag: Ein konkreter Erfolg (das 'Werk') wird geschuldet (z.B. Softwareentwicklung zum Festpreis)."
        ]
    },
    {
        type: "section",
        title: "5. Leistungserbringung & Übergabe",
        text: "Zum Abschluss eines Projekts gehört die formelle Übergabe an den Kunden."
    },
    {
        type: "list",
        title: "Schritte der Übergabe",
        items: [
            "Abnahmeprotokoll: Dokumentiert den IST-Zustand und die mängelfreie Übergabe.",
            "Soll-Ist-Vergleich: Abgleich der erbrachten Leistung mit dem ursprünglichen Auftrag.",
            "Einweisung: Schulung des Nutzers am neuen System.",
            "Dokumentation: Übergabe von Handbüchern, Lizenzen und Passwörtern."
        ]
    }
];

export const itArbeitsplatzQuiz = [
    {
        question: "Welche Fragetechnik eignet sich am besten, um detaillierte Informationen in der Bedarfsanalyse zu sammeln?",
        options: ["Geschlossene Fragen", "Suggestivfragen", "Offene Fragen", "Kontrollfragen"],
        answer: 2
    },
    {
        question: "Was besagt die Bildschirmarbeitsverordnung bezüglich des Sehabstandes?",
        options: ["Maximal 30 cm", "Mindestens 1 Meter", "Zwischen 50 und 70 cm", "Egal, solange es scharf ist"],
        answer: 2
    },
    {
        question: "Welcher Kostenpunkt zählt zu den INDIREKTEN Kosten in der TCO-Rechnung?",
        options: ["HW-Anschaffung", "Stromkosten", "Produktivitätsverlust durch Systemausfall", "Wartungsvertrag"],
        answer: 2
    },
    {
        question: "Bei welcher Vertragsart wird ein konkreter Erfolg (z.B. fertige Software) geschuldet?",
        options: ["Dienstvertrag", "Werkvertrag", "Mietvertrag", "Leasingvertrag"],
        answer: 1
    },
    {
        question: "Wofür steht die Abkürzung TCO?",
        options: ["Technical Cost Object", "Total Cost of Ownership", "True Control Organization", "Total Care Office"],
        answer: 1
    },
    {
        question: "Welches Dokument bestätigt rechtlich die Annahme der Leistung durch den Kunden?",
        options: ["Angebot", "Lieferschein", "Abnahmeprotokoll", "Rechnung"],
        answer: 2
    },
    {
        question: "Wie hoch sollte die Beleuchtungsstärke an einem Büro-Arbeitsplatz mindestens sein?",
        options: ["100 Lux", "300 Lux", "500 Lux", "1000 Lux"],
        answer: 2
    },
    {
        question: "Was ist ein Merkmal eines Leasingvertrags im Vergleich zum Kauf?",
        options: ["Man ist sofort Eigentümer", "Geringere Kapitalbindung zu Beginn", "Keine monatlichen Kosten", "Höhere Wartungskosten"],
        answer: 1
    },
    {
        question: "Welche Einheit beschreibt die Lichtstärke?",
        options: ["Watt", "Volt", "Lux", "Lumen"],
        answer: 2
    },
    {
        question: "Ein Kunde möchte genau wissen, wie er sein neues CRM bedient. Welcher Schritt der Übergabe ist hier gefragt?",
        options: ["Abnahme", "Lessons Learned", "Einweisung/Schulung", "Soll-Ist-Vergleich"],
        answer: 2
    },
    {
        question: "Was bedeutet 'Zweckbindung' im Datenschutz (DSGVO)?",
        options: ["Daten dürfen nur für den erhobenen Zweck genutzt werden", "Alle Daten müssen verschlüsselt sein", "Kunden müssen für Daten bezahlen", "Daten müssen ewig gespeichert werden"],
        answer: 0
    },
    {
        question: "Was ist der Hauptvorteil einer SSD gegenüber einer HDD?",
        options: ["Höhere Kapazität zum gleichen Preis", "Höhere Robustheit und Zugriffsgeschwindigkeit", "Bessere Eignung als Archiv für Langzeitspeicherung", "Geräuschentwicklung"],
        answer: 1
    },
    {
        question: "Welche Art der Frage ist 'Habe ich Sie richtig verstanden, dass Sie zwei Monitore benötigen?'",
        options: ["Einleitungsfrage", "Suggestivfrage", "Kontrollfrage", "Fangfrage"],
        answer: 2
    },
    {
        question: "Welche Schnittstelle ist aktuell der Standard für den Anschluss moderner Monitore?",
        options: ["VGA", "DisplayPort / HDMI", "SCART", "Parallel-Port"],
        answer: 1
    },
    {
        question: "Wozu dient eine Nutzwertanalyse?",
        options: ["Zur Berechnung des exakten Preises", "Zum Vergleich qualitativer Kriterien bei Entscheidungen", "Zur Erstellung von Netzplänen", "Zur Fehlersuche im Netzwerk"],
        answer: 1
    },
    {
        question: "Was ist ein 'Soll-Ist-Vergleich' am Projektende?",
        options: ["Vergleich von Preisen zweier Anbieter", "Abgleich der geplanten Anforderungen mit dem Ergebnis", "Vergleich der Mitarbeiterleistung", "Test der Internetgeschwindigkeit"],
        answer: 1
    },
    {
        question: "Welches Gesetz regelt die Entsorgung von IT-Hardware in Deutschland?",
        options: ["ElektroG", "BGB", "StGB", "DSGVO"],
        answer: 0
    },
    {
        question: "Was versteht man unter Ergonomie?",
        options: ["Minimierung der Kosten", "Anpassung der Arbeitsbedingungen an den Menschen", "Maximierung der Systemleistung", "Sicherheit gegen Hacker"],
        answer: 1
    },
    {
        question: "Ein Dienstvertrag unterscheidet sich vom Werkvertrag dadurch, dass...",
        options: ["...er immer teurer ist.", "...die bloße Tätigkeit geschuldet wird, kein Erfolg.", "...er nur für Hardware gilt.", "...er keine Unterschrift benötigt."],
        answer: 1
    },
    {
        question: "Welche RAM-Technologie ist aktuell am modernsten?",
        options: ["DDR2", "DDR3", "DDR5", "EDO-RAM"],
        answer: 2
    },
    {
        question: "Was ist ein 'EULA'?",
        options: ["End User License Agreement", "Extra User Local App", "Electronic Update Law Association", "Each User Logs Always"],
        answer: 0
    },
    {
        question: "Nach welchem Prinzip sollten Arbeitsplätze gestaltet sein, um Reflexionen zu vermeiden?",
        options: ["Parallel zum Fenster", "Mit dem Rücken zum Fenster", "Blickrichtung parallel zum Fenster/Lichtquelle", "Dunkle Räume ohne Fenster"],
        answer: 2
    },
    {
        question: "Was ist ein Vorteil von Leasing gegenüber Kauf für Unternehmen?",
        options: ["Steuerliche Absetzbarkeit als Betriebsausgabe", "Das Gerät gehört einem sofort", "Man kann es beliebig modifizieren", "Es gibt keinen Vertrag"],
        answer: 0
    },
    {
        question: "Welche Komponente am Arbeitsplatz ist für die Strahlungsminimierung zertifiziert?",
        options: ["TCO-Siegel am Monitor", "DIN am Ständer", "CE an der Maus", "GS an der Tastatur"],
        answer: 0
    },
    {
        question: "Wann beginnt die Gewährleistungsfrist bei einem Kaufvertrag?",
        options: ["Bei der Bestellung", "Mit der Bezahlung", "Mit der Übergabe/Gefahrenübergang", "Gar nicht"],
        answer: 2
    },
    {
        question: "Was ist 'Open Source' Software?",
        options: ["Software, die man nie bezahlen muss", "Software, bei der der Quellcode öffentlich einsehbar ist", "Software, die nur in der Cloud läuft", "Virenfreie Software"],
        answer: 1
    },
    {
        question: "Warum sollte ein Monitor höhenverstellbar sein?",
        options: ["Damit man ihn als Spiegel nutzen kann", "Zur Vermeidung von Nackenverspannungen", "Um Platz auf dem Tisch zu sparen", "Wegen des besseren WLAN-Empfangs"],
        answer: 1
    },
    {
        question: "Welcher Datenträger ist am wenigsten stoßempfindlich?",
        options: ["HDD", "Disketten", "SSD", "CD-ROM"],
        answer: 2
    },
    {
        question: "Welche Frageform ist 'Möchten Sie das Gerät in Silber oder Schwarz?'",
        options: ["Offene Frage", "Suggestivfrage", "Alternativfrage", "Rhetorische Frage"],
        answer: 2
    },
    {
        question: "Was ist ein 'Lessons Learned' Meeting?",
        options: ["Schulung für neue Azubis", "Rückblick auf das Projekt zur Prozessverbesserung", "Vorstellung neuer Hardware", "Meeting zur Gehaltsverhandlung"],
        answer: 1
    }
];
