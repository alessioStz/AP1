export const wirtschaftContent = [
    {
        type: "section",
        title: "1. Kosten- und Leistungsrechnung",
        text: "Grundlage wirtschaftlichen Handelns ist die Kenntnis über die anfallenden Kosten und deren Verrechnung."
    },
    {
        type: "list",
        title: "Kostenarten im IT-Betrieb",
        items: [
            "Fixkosten: Unabhängig von der Auslastung (z.B. Miete für das Rechenzentrum, Gehälter).",
            "Variable Kosten: Abhängig von der Nutzung (z.B. Stromverbrauch, Cloud-Ressourcen nach Verbrauch).",
            "Einzelkosten: Direkt einem Produkt/Projekt zuordnungsbar (z.B. Hardware für Projekt A).",
            "Gemeinkosten: Fallen für das gesamte Unternehmen an (z.B. Verwaltung, Marketing)."
        ]
    },
    {
        type: "section",
        title: "2. Angebotsvergleich & Nutzwertanalyse",
        text: "Bei der Beschaffung reicht der Preis allein oft nicht aus. Man nutzt quantitative und qualitative Vergleiche."
    },
    {
        type: "list",
        title: "Verfahren",
        items: [
            "Quantitativ: Preisvergleich, Rabatte, Skonti, Versandkosten.",
            "Qualitativ: Nutzwertanalyse (Gewichtung von Kriterien wie Supportqualität, Lieferzeit, ökologische Aspekte).",
            "Make-or-Buy: Entscheidung zwischen Eigenfertigung und Fremdbezug (Kosten vs. Know-how vs. Risiko)."
        ]
    },
    {
        type: "section",
        title: "3. Investition & Finanzierung",
        text: "Wie werden IT-Systeme bezahlt und wie lange werden sie genutzt?"
    },
    {
        type: "list",
        title: "Abschreibung (AfA)",
        items: [
            "AfA: Absetzung für Abnutzung. Erfasst den Wertverlust über die Zeit.",
            "Lineare Abschreibung: Gleichbleibende Beträge über die Nutzungsdauer (Anschaffungskosten / Jahre).",
            "Nutzungsdauer: IT-Hardware wird steuerlich meist über 3 Jahre abgeschrieben."
        ]
    },
    {
        type: "list",
        title: "Finanzierungsarten",
        items: [
            "Eigenfinanzierung: Aus eigenen Gewinnen oder Einlagen.",
            "Fremdfinanzierung: Kredit bei einer Bank.",
            "Leasing: Miete des Objekts, oft mit Wartungsvertrag (OPEX statt CAPEX - schont die Liquidität)."
        ]
    }
];

export const wirtschaftQuiz = [
    {
        question: "Was sind Fixkosten?",
        options: ["Kosten für Rohstoffe", "Kosten, die unabhängig von der Produktionsmenge anfallen", "Kosten für Überstunden", "Kosten für den Versand"],
        answer: 1
    },
    {
        question: "Wie berechnet man die lineare Abschreibung pro Jahr?",
        options: ["Anschaffungskosten x Jahre", "Anschaffungskosten / Nutzungsdauer", "Verkaufspreis - Kosten", "Umsatz / Mitarbeiter"],
        answer: 1
    },
    {
        question: "Was ist das Hauptziel einer Nutzwertanalyse?",
        options: ["Den billigsten Preis finden", "Qualitative Kriterien vergleichbar machen", "Die Steuererklärung vorbereiten", "Mitarbeiter motivieren"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Skonto'?",
        options: ["Ein Rabatt für große Mengen", "Ein Preisabzug bei schneller Zahlung", "Ein Aufschlag für Spätzahler", "Eine Gebühr für die Lieferung"],
        answer: 1
    },
    {
        question: "Welcher Faktor spricht eher für 'Buy' (Einkaufen) statt 'Make'?",
        options: ["Man möchte das Know-how im Haus behalten", "Die benötigte Kapazität ist intern nicht vorhanden", "Das Produkt soll einzigartig sein", "Man möchte Kosten sparen durch Eigenproduktion"],
        answer: 1
    },
    {
        question: "Was ist 'Liquidität'?",
        options: ["Die Fähigkeit, fällige Zahlungen leisten zu können", "Der Gesamtgewinn eines Jahres", "Die Menge an Wasser im Büro", "Die Anzahl der Mitarbeiter"],
        answer: 0
    },
    {
        question: "Ein PC kostet 900€ netto und wird über 3 Jahre linear abgeschrieben. Wie hoch ist die AfA pro Jahr?",
        options: ["900€", "450€", "300€", "100€"],
        answer: 2
    },
    {
        question: "Was bedeutet 'TCO'?",
        options: ["Total Cost of Ownership (Gesamtkosten über den Lebenszyklus)", "Technical Control Order", "True Cost Output", "Total Care Office"],
        answer: 0
    },
    {
        question: "Was sind 'Gemeinkosten'?",
        options: ["Kosten, die man absichtlich niedrig hält", "Kosten, die nicht direkt einem Produkt zugeordnet werden können", "Kosten für Hardware-Einzelteile", "Kosten für das Gehalt des Projektleiters"],
        answer: 1
    },
    {
        question: "Was ist ein Vorteil von Leasing für ein Unternehmen?",
        options: ["Das Gerät gehört einem sofort", "Schonung der Liquidität (keine hohe Einmalzahlung)", "Man kann das Gerät beliebig umbauen", "Es fallen keine Zinsen an"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Break-Even-Point'?",
        options: ["Der Zeitpunkt, an dem das Projekt scheitert", "Die Gewinnschwelle (Erlöse = Kosten)", "Der Feierabend", "Der maximale Gewinn"],
        answer: 1
    },
    {
        question: "Wozu dient ein 'Meldebestand' im Lager?",
        options: ["Um dem Chef Bescheid zu geben", "Um rechtzeitig nachzubestellen, bevor das Lager leer ist", "Um die Inventur zu vereinfachen", "Um Platz zu sparen"],
        answer: 1
    },
    {
        question: "Welches Gesetz regelt die Buchführungspflicht in Deutschland?",
        options: ["HGB (Handelsgesetzbuch)", "BGB", "StGB", "StPO"],
        answer: 0
    },
    {
        question: "Was ist 'ROI'?",
        options: ["Return on Investment (Kapitalrentabilität)", "Risk of Interest", "Release of Innovation", "Rule of Industry"],
        answer: 0
    },
    {
        question: "In einer Zuschlagskalkulation: Worauf werden die Gemeinkosten aufgeschlagen?",
        options: ["Auf den Gewinn", "Auf die Einzelkosten", "Auf die Umsatzsteuer", "Auf den Skonto"],
        answer: 1
    },
    {
        question: "Was ist der Unterschied zwischen Eigen- und Fremdkapital?",
        options: ["Es gibt keinen", "Eigenkapital kommt von den Inhabern, Fremdkapital von Gläubigern (z.B. Banken)", "Fremdkapital ist immer teurer", "Eigenkapital muss man zurückzahlen"],
        answer: 1
    },
    {
        question: "Was ist eine 'Bilanz'?",
        options: ["Eine Liste aller verkauften Produkte", "Gegenüberstellung von Vermögen (Aktiva) und Kapital (Passiva)", "Eine Gehaltsabrechnung", "Ein Steuerbescheid"],
        answer: 1
    },
    {
        question: "Was versteht man unter 'Opportunitätskosten'?",
        options: ["Kosten für verpasste Gelegenheiten", "Besonders hohe Marketingkosten", "Kosten für neue Computer", "Gebühren bei der Bank"],
        answer: 0
    },
    {
        question: "Was ist 'Insolvenz'?",
        options: ["Besonders hohes Wachstum", "Zahlungsunfähigkeit eines Unternehmens", "Ein neues Marketingkonzept", "Ein Arbeitsvertrag"],
        answer: 1
    },
    {
        question: "Was ist 'Marketing'?",
        options: ["Nur Werbung", "Alle Maßnahmen zur Absatzförderung und Kundenorientierung", "Die Buchhaltung", "Der Einkauf von Hardware"],
        answer: 1
    },
    {
        question: "Wie berechnet man den Brutto-Preis aus dem Netto-Preis (bei 19% MwSt)?",
        options: ["Netto / 1,19", "Netto * 1,19", "Netto + 19", "Netto - 0,19"],
        answer: 1
    },
    {
        question: "Was ist 'Produktivität'?",
        options: ["Umsatz minus Kosten", "Verhältnis von Output zu Input", "Anzahl der gearbeiteten Stunden", "Die Stimmung im Team"],
        answer: 1
    },
    {
        question: "Was ist 'Just-in-Time'?",
        options: ["Pünktliches Erscheinen am Arbeitsplatz", "Lieferung der Ware genau zum Zeitpunkt des Bedarfs", "Ein schnelles Betriebssystem", "Eine Versicherung"],
        answer: 1
    },
    {
        question: "Was ist ein 'Kalkulationszuschlag'?",
        options: ["Eine Strafe bei Falschberechnung", "Prozentsatz zur Ermittlung des Verkaufspreises aus den Kosten", "Ein Rabatt für Stammkunden", "Die Mehrwertsteuer"],
        answer: 1
    },
    {
        question: "Was bedeutet 'Amortisation'?",
        options: ["Die Zeit, bis eine Investition ihre Kosten wieder eingespielt hat", "Die Zerstörung von Hardware", "Der Kauf von Software", "Die Schulung von Mitarbeitern"],
        answer: 0
    },
    {
        question: "Was ist 'Wettbewerbsanalyse'?",
        options: ["Beobachtung der Konkurrenz am Markt", "Ein Spiel für Mitarbeiter", "Die Prüfung der eigenen Server", "Ein Gerichtsprozess"],
        answer: 0
    },
    {
        question: "Was ist ein 'Businessplan'?",
        options: ["Ein Terminkalender", "Ein Konzept zur Gründung oder Erweiterung eines Unternehmens", "Eine Liste von Kunden", "Eine Rechnung"],
        answer: 1
    },
    {
        question: "Was ist 'Benchmarking'?",
        options: ["Ein Test für die CPU", "Vergleich der eigenen Leistung mit dem Marktführer", "Ein Reparaturset", "Eine Sitzgelegenheit im Büro"],
        answer: 1
    },
    {
        question: "Was ist 'E-Procurement'?",
        options: ["Elektronischer Einkauf von Waren und Dienstleistungen", "Versand von Newslettern", "Spiel am Computer", "Datensicherung"],
        answer: 0
    },
    {
        question: "Was bedeutet 'CAPEX'?",
        options: ["Capital Expenditure (Investitionsausgaben)", "Capacity Extender", "Care Package Exchange", "Common App Execution"],
        answer: 0
    }
];
