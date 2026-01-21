import { itArbeitsplatzContent, itArbeitsplatzQuiz } from './it-arbeitsplatz';
import { netzwerkContent, netzwerkQuiz } from './netzwerktechnik';
import { projektContent, projektQuiz } from './projektmanagement';
import { kiContent, kiQuiz } from './ki';
import { sicherheitContent, sicherheitQuiz } from './it-sicherheit';
import { algorithmenContent, algorithmenQuiz } from './algorithmen';
import { wirtschaftContent, wirtschaftQuiz } from './wirtschaftlichkeit';
import { hardwareContent, hardwareQuiz } from './hardware';
import { greenItContent, greenItQuiz } from './green-it';
import { arduinoContent, arduinoQuiz } from './arduino';
import { modellierungContent, modellierungQuiz } from './software-modellierung';
import { datenbankenContent, datenbankenQuiz } from './datenbanken';
import { architekturContent, architekturQuiz } from './systemarchitektur';

import { iotContent, iotQuiz } from './iot-industrie40';
import { vernetzteContent, vernetzteQuiz } from './vernetzte-systeme';

export const topics = [
    {
        id: "it-arbeitsplatz",
        title: "IT-gestützter Arbeitsplatz",
        icon: "Monitor",
        description: "Kundenberatung, Bedarfsanalyse, Hard-/Softwareauswahl, Ergonomie und Übergabe.",
        content: itArbeitsplatzContent,
        quiz: itArbeitsplatzQuiz
    },
    {
        id: "vernetzte-systeme",
        title: "Vernetzte IT-Systeme",
        icon: "Network",
        description: "VLAN-Management, Trunking, STP Loop-Prävention und EtherChannel.",
        content: vernetzteContent,
        quiz: vernetzteQuiz
    },
    {
        id: "iot-industrie40",
        title: "IoT & Industrie 4.0",
        icon: "Network",
        description: "Cyber-physische Systeme, Funktechnologien, MQTT und Smart Concepts.",
        content: iotContent,
        quiz: iotQuiz
    },
    {
        id: "green-it",
        title: "Green IT & Nachhaltigkeit",
        icon: "Shield",
        description: "Grundlagen der Nachhaltigkeit, Lebenszyklus, Siegel und Umweltstrategien.",
        content: greenItContent,
        quiz: greenItQuiz
    },
    {
        id: "netzwerktechnik",
        title: "Netzwerktechnik",
        icon: "Network",
        description: "IPv4/IPv6, Subnetting, VLSM, OSI-Modell und Netzwerkprotokolle.",
        content: netzwerkContent,
        quiz: netzwerkQuiz
    },
    {
        id: "projektmanagement",
        title: "Projektmanagement & Planung",
        icon: "Briefcase",
        description: "Methoden (Scrum, SMART), BPMN 2.0 und komplexe Netzplantechnik.",
        content: projektContent,
        quiz: projektQuiz
    },
    {
        id: "hardware-technik",
        title: "Hardware & RAID",
        icon: "Cpu",
        description: "Mainboard, Schnittstellen, RAID-Systeme und Druckertechnologien.",
        content: hardwareContent,
        quiz: hardwareQuiz
    },
    {
        id: "arduino-programmierung",
        title: "Arduino & C++",
        icon: "Cpu",
        description: "Hardwarenahe Programmierung, GPIO-Interaktion, Sensoren und C++ Syntax.",
        content: arduinoContent,
        quiz: arduinoQuiz
    },
    {
        id: "software-modellierung",
        title: "Modellierung & UML",
        icon: "Briefcase",
        description: "UML-Diagramme, Klassendiagramme, Use-Case und Struktogramme.",
        content: modellierungContent,
        quiz: modellierungQuiz
    },
    {
        id: "datenbanken-sql",
        title: "Datenbanken & SQL",
        icon: "Network",
        description: "ER-Modellierung, Normalisierung (1-3 NF) und SQL-Grundlagen.",
        content: datenbankenContent,
        quiz: datenbankenQuiz
    },
    {
        id: "systemarchitektur",
        title: "Systemarchitektur & Logik",
        icon: "Cpu",
        description: "4-Schichten-Modell, ISA 95, Logikgatter und OOP-Konzepte.",
        content: architekturContent,
        quiz: architekturQuiz
    },
    {
        id: "ki-grundlagen",
        title: "Künstliche Intelligenz",
        icon: "Cpu",
        description: "Grundlagen der KI, Machine Learning, Deep Learning und Ethik.",
        content: kiContent,
        quiz: kiQuiz
    },
    {
        id: "it-sicherheit",
        title: "IT-Sicherheit & Datenschutz",
        icon: "Shield",
        description: "Schutzziele (CIA), Kryptographie, Backups und DSGVO.",
        content: sicherheitContent,
        quiz: sicherheitQuiz
    },
    {
        id: "algorithmen",
        title: "Algorithmen & Pseudocode",
        icon: "Cpu",
        description: "Logik, Kontrollstrukturen, Datentypen und Pseudocode.",
        content: algorithmenContent,
        quiz: algorithmenQuiz
    },
    {
        id: "wirtschaftlichkeit",
        title: "Wirtschaftlichkeit",
        icon: "Briefcase",
        description: "Kostenrechnung, Investition (AfA), TCO und Nutzwertanalyse.",
        content: wirtschaftContent,
        quiz: wirtschaftQuiz
    }
];
