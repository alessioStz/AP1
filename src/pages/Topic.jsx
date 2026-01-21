import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { topics } from '../data/topics';
import { ArrowLeft, ChevronRight, GraduationCap } from 'lucide-react';
import Quiz from '../components/Quiz';
import './Topic.css';

export default function Topic() {
    const { id } = useParams();
    const [showQuiz, setShowQuiz] = useState(false);
    const topic = topics.find(t => t.id === id);

    // Reset quiz state when topic changes
    useEffect(() => {
        setShowQuiz(false);
    }, [id]);

    if (!topic) {
        return (
            <div className="not-found">
                <h2>Thema nicht gefunden</h2>
                <Link to="/">Zurück zur Übersicht</Link>
            </div>
        );
    }

    return (
        <motion.div
            className="topic-page"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            key={topic.id}
        >
            <header className="topic-header">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} />
                    <span>Übersicht</span>
                </Link>
                <h1>{topic.title}</h1>
                <p className="topic-intro">{topic.description}</p>
            </header>

            <AnimatePresence mode="wait">
                {!showQuiz ? (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="topic-body"
                    >
                        <div className="topic-content">
                            {topic.content.map((block, index) => (
                                <section key={index} className="content-block">
                                    {block.type === 'section' && (
                                        <>
                                            <h2>{block.title}</h2>
                                            <p>{block.text}</p>
                                        </>
                                    )}
                                    {block.type === 'list' && (
                                        <>
                                            <h2>{block.title}</h2>
                                            <ul className="content-list">
                                                {block.items.map((item, i) => (
                                                    <li key={i}>
                                                        <ChevronRight size={16} className="list-icon" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </section>
                            ))}
                        </div>

                        <footer className="topic-footer">
                            <div className="quiz-tease">
                                <GraduationCap size={40} className="quiz-icon" />
                                <h3>Bereit für einen Test?</h3>
                                <p>Überprüfe dein Wissen zu diesem Thema mit unserem interaktiven Quiz.</p>
                                <button className="quiz-btn" onClick={() => setShowQuiz(true)}>Quiz starten</button>
                            </div>
                        </footer>
                    </motion.div>
                ) : (
                    <motion.div
                        key="quiz"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <div className="quiz-header">
                            <button className="back-btn" onClick={() => setShowQuiz(false)}>
                                <ArrowLeft size={16} />
                                <span>Zurück zum Lernstoff</span>
                            </button>
                            <h2>Quiz: {topic.title}</h2>
                        </div>
                        <Quiz questions={topic.quiz} onRestart={() => setShowQuiz(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
