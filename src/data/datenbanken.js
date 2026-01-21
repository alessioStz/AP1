export const datenbankenContent = [
    {
        type: "section",
        title: "1. Relationale Datenbanken & ER-Modellierung",
        text: "Datenbanken speichern Informationen strukturiert in Tabellen. Das Entity-Relationship-Modell (ERM) dient zur Planung dieser Struktur."
    },
    {
        type: "list",
        title: "Grundbegriffe des ERM",
        items: [
            "Entität: Ein eindeutig zu bestimmendes Objekt der Realwelt (z.B. Kunde, Produkt).",
            "Attribut: Eine Eigenschaft einer Entität (z.B. Name, Preis).",
            "Beziehung: Verbindung zwischen Entitäten.",
            "Kardinalitäten: 1:1 (ein Ehepartner), 1:n (ein Kunde - viele Bestellungen), m:n (viele Studenten - viele Kurse)."
        ]
    },
    {
        type: "section",
        title: "2. Normalisierung",
        text: "Normalisierung verhindert Redundanzen (doppelte Daten) und Anomalien (Einfüge-, Lösch- und Änderungsfehler)."
    },
    {
        type: "list",
        title: "Die drei Normalformen",
        items: [
            "1. Normalform (1NF): Alle Attribute sind atomar (nicht weiter zerlegbar). Keine Wiederholungsgruppen.",
            "2. Normalform (2NF): 1NF ist erfüllt UND jedes Nicht-Schlüsselattribut ist vom GESAMTEN Primärschlüssel voll funktionell abhängig (relevant bei zusammengesetzten Schlüsseln).",
            "3. Normalform (3NF): 2NF ist erfüllt UND es existieren keine transitiven Abhängigkeiten (Attribute hängen nur vom Primärschlüssel ab, nicht von anderen Nicht-Schlüsselattributen)."
        ]
    },
    {
        type: "section",
        title: "3. SQL - Structured Query Language",
        text: "SQL ist die Standard-Sprache zur Kommunikation mit relationalen Datenbanken."
    },
    {
        type: "list",
        title: "Wichtige Befehle",
        items: [
            "CREATE TABLE: Erstellt eine neue Tabelle inkl. Datentypen und Schlüssel.",
            "ALTER TABLE: Modifiziert die Struktur einer bestehenden Tabelle.",
            "INSERT INTO: Fügt neue Datensätze hinzu.",
            "SELECT: Fragt Daten ab.",
            "UPDATE: Ändert bestehende Daten.",
            "DELETE: Löscht Datensätze."
        ]
    },
    {
        type: "list",
        title: "Integrität & Schlüssel",
        items: [
            "Primärschlüssel (Primary Key): Identifiziert einen Datensatz eindeutig. Darf nicht NULL sein.",
            "Fremdschlüssel (Foreign Key): Verweist auf den Primärschlüssel einer anderen Tabelle, um Beziehungen abzubilden.",
            "Referenzielle Integrität: Stellt sicher, dass Fremdschlüssel immer auf existierende Primärschlüssel verweisen."
        ]
    }
];

export const datenbankenQuiz = [
    {
        question: "Was beschreibt die 1. Normalform (1NF)?",
        options: ["Keine transitiven Abhängigkeiten", "Alle Attribute sind atomar (nicht weiter zerlegbar)", "Keine Redundanzen", "Alle Tabellen haben Namen"],
        answer: 1
    },
    {
        question: "Wann ist die 3. Normalform (3NF) verletzt?",
        options: ["Wenn Attribute atomar sind", "Wenn transitive Abhängigkeiten bestehen (Nicht-Schlüsselattribut hängt von anderem Nicht-Schlüsselattribut ab)", "Wenn die Tabelle zu klein ist", "Wenn kein Primärschlüssel existiert"],
        answer: 1
    },
    {
        question: "Welches SQL-Kommando erstellt eine neue Tabelle?",
        options: ["NEW TABLE", "CREATE TABLE", "MAKE TABLE", "ADD TABLE"],
        answer: 1
    },
    {
        question: "Was ist ein 'Fremdschlüssel'?",
        options: ["Ein Schlüssel für eine andere Wohnung", "Ein Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist", "Ein Schlüssel, der nicht funktioniert", "Ein Backup-Schlüssel"],
        answer: 1
    },
    {
        question: "Was bedeutet 'atomar' im Kontext der 1NF?",
        options: ["Dass die Daten gefährlich sind", "Dass Datenwerte nicht weiter sinnvoll aufgeteilt werden können (z.B. Name/Vorname trennen)", "Dass die Datenbank extrem schnell ist", "Dass nur Zahlen gespeichert werden"],
        answer: 1
    },
    {
        question: "Welche Kardinalität beschreibt: 'Ein Lehrer unterrichtet viele Klassen, eine Klasse hat viele Lehrer'?",
        options: ["1:1", "1:n", "m:n", "0:0"],
        answer: 2
    },
    {
        question: "Welcher SQL-Befehl ändert die Struktur einer Tabelle (z.B. neue Spalte hinzufügen)?",
        options: ["CHANGE TABLE", "MODIFY TABLE", "ALTER TABLE", "UPDATE TABLE"],
        answer: 2
    },
    {
        question: "Was stellt die 'referenzielle Integrität' sicher?",
        options: ["Dass die Datenbank verschlüsselt ist", "Dass Fremdschlüsselbeziehungen konsistent bleiben und nicht auf gelöschte Datensätze verweisen", "Dass der Server online ist", "Dass keine Viren in der DB sind"],
        answer: 1
    },
    {
        question: "Was ist eine 'Entität' im ER-Modell?",
        options: ["Ein Attribut", "Ein eindeutig identifizierbares Objekt der Realwelt (z.B. ein Fahrzeug)", "Eine mathematische Formel", "Ein SQL-Befehl"],
        answer: 1
    },
    {
        question: "Welcher Datentyp speichert Texte variabler Länge?",
        options: ["INT", "FLOAT", "VARCHAR", "DATE"],
        answer: 2
    },
    {
        question: "Wie nennt man die doppelte Speicherung von identischen Daten?",
        options: ["Konsistenz", "Redundanz", "Anomalie", "Performance"],
        answer: 1
    },
    {
        question: "Was ist eine 'Löschanomalie'?",
        options: ["Dass man nichts löschen kann", "Dass beim Löschen eines Datensatzes ungewollt auch andere Informationen verloren gehen", "Dass das Löschen zu lange dauert", "Ein Fehler in der Hardware"],
        answer: 1
    },
    {
        question: "In welcher Normalform müssen alle Nicht-Schlüsselattribute vom VOLLSTÄNDIGEN Primärschlüssel abhängen?",
        options: ["1NF", "2NF", "3NF", "4NF"],
        answer: 1
    },
    {
        question: "Welches Symbol stellt im ER-Diagramm eine Entität dar?",
        options: ["Ellipse", "Rechteck", "Raute", "Linie"],
        answer: 1
    },
    {
        question: "Wodurch wird ein Primärschlüssel charakterisiert?",
        options: ["Er ist immer eine Zahl", "Er ist eindeutig und darf nicht NULL sein", "Er ist besonders lang", "Er wird automatisch gelöscht"],
        answer: 1
    },
    {
        question: "Welcher SQL-Befehl löscht ALLE Datensätze einer Tabelle, behält aber die Struktur?",
        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
        answer: 2
    },
    {
        question: "Welche Kardinalität hat 'Ein Land - eine Hauptstadt'?",
        options: ["1:1", "1:n", "m:n", "n:1"],
        answer: 0
    },
    {
        question: "Wofür steht das 'R' in RDBMS?",
        options: ["Rapid", "Relational", "Remote", "Robust"],
        answer: 1
    },
    {
        question: "Was ist ein 'Zusammengesetzter Primärschlüssel'?",
        options: ["Ein Schlüssel aus mehreren Spalten", "Ein kaputter Schlüssel", "Zwei verschiedene Primärschlüssel in einer Tabelle", "Ein Schlüssel aus Text"],
        answer: 0
    },
    {
        question: "Welcher SQL-Befehl dient zur Datenabfrage?",
        options: ["GET", "SEARCH", "SELECT", "QUERY"],
        answer: 2
    },
    {
        question: "Was bewirkt 'ORDER BY' in SQL?",
        options: ["Löscht Daten", "Sortiert das Abfrageergebnis", "Gruppiert Daten", "Bestellt Hardware"],
        answer: 1
    },
    {
        question: "Was ist 'SQL Injection'?",
        options: ["Eine schnelle Datenübertragung", "Ein Angriffstyp, bei dem bösartiger SQL-Code in Abfragen eingeschleust wird", "Ein Programm zur DB-Pflege", "Eine neue DB-Version"],
        answer: 1
    },
    {
        question: "Was bedeutet 'NULL' in einer Datenbank?",
        options: ["Die Zahl 0", "Ein unbekannter oder nicht vorhandener Wert", "Ein Fehler", "Ein kurzer Text"],
        answer: 1
    },
    {
        question: "Welche Normalform ist die Basis für alle weiteren?",
        options: ["1NF", "2NF", "3NF", "BNCF"],
        answer: 0
    },
    {
        question: "Was ist ein 'Attribut'?",
        options: ["Ein SQL-Befehl", "Eine Eigenschaft einer Entität (Spalte einer Tabelle)", "Ein Primärschlüssel", "Ein Datenbank-Server"],
        answer: 1
    },
    {
        question: "Wozu dient der 'INDEX' in einer Datenbank?",
        options: ["Zur Inhaltsangabe", "Zur Beschleunigung von Suchanfragen", "Zum Löschen von Daten", "Zur Verschlüsselung"],
        answer: 1
    },
    {
        question: "Was ist ein 'Join' in SQL?",
        options: ["Ein neues Programm", "Das Verknüpfen von Daten aus zwei oder mehr Tabellen über gemeinsame Spalten", "Das Beenden der Verbindung", "Das Kopieren der DB"],
        answer: 1
    },
    {
        question: "Wie nennt man das grafische Schema einer Datenbankplanung?",
        options: ["Struktogramm", "Klassendiagramm", "ER-Modell (ERM)", "Gantt-Diagramm"],
        answer: 2
    },
    {
        question: "Was ist eine 'Update-Anomalie'?",
        options: ["Dass der PC beim Update einfriert", "Inkonsistenz durch fehlerhafte oder unvollständige Änderung mehrfach vorhandener Daten", "Dass das Update zu teuer ist", "Dass man kein Update machen kann"],
        answer: 1
    },
    {
        question: "Welcher SQL-Befehl fügt einen neuen Datensatz ein?",
        options: ["ADD", "PUT", "INSERT INTO", "NEW"],
        answer: 2
    }
];
