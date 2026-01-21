import { motion } from 'framer-motion';
import { topics } from '../data/topics';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import './Home.css';

export default function Home() {
    return (
        <div className="home">
            <header className="home-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Meistere deine AP1
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Die umfassende Vorbereitung für Fachinformatiker Systemintegration. Modern, kompakt und leicht erklärt.
                </motion.p>
            </header>

            <section className="stats-grid">
                <div className="stat-card">
                    <BookOpen className="stat-icon" />
                    <div className="stat-info">
                        <h3>{topics.length}</h3>
                        <p>Themengebiete</p>
                    </div>
                </div>
                <div className="stat-card">
                    <Clock className="stat-icon" />
                    <div className="stat-info">
                        <h3>90 Min</h3>
                        <p>Prüfungsdauer</p>
                    </div>
                </div>
                <div className="stat-card">
                    <CheckCircle className="stat-icon" />
                    <div className="stat-info">
                        <h3>20%</h3>
                        <p>Gewichtung AP1</p>
                    </div>
                </div>
            </section>

            <section className="topics-overview">
                <h2>Deine Lernfelder</h2>
                <div className="topics-grid">
                    {topics.map((topic, index) => (
                        <motion.div
                            key={topic.id}
                            className="topic-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <h3>{topic.title}</h3>
                            <p>{topic.description}</p>
                            <Link to={`/topic/${topic.id}`} className="topic-link">
                                Jetzt lernen
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
