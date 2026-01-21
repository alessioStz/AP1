import { useState, memo } from 'react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Quiz.css';

const Quiz = memo(function Quiz({ questions, topicTitle }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleAnswerOptionClick = (index) => {
        if (isAnswered) return;

        setSelectedAnswer(index);
        setIsAnswered(true);
        if (index === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setShowScore(false);
        setScore(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
    };

    if (showScore) {
        return (
            <div className="quiz-result">
                <CheckCircle2 size={64} className="result-icon success" />
                <h2>Quiz abgeschlossen!</h2>
                <div className="score-display">
                    <span className="score-number">{score}</span>
                    <span className="score-total">/ {questions.length}</span>
                </div>
                <p>Das sind {Math.round((score / questions.length) * 100)}% richtige Antworten.</p>
                <button className="reset-btn" onClick={resetQuiz}>
                    <RotateCcw size={18} />
                    Quiz wiederholen
                </button>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-progress">
                <div className="progress-text">
                    Frage {currentQuestion + 1} von {questions.length}
                </div>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="question-section"
                >
                    <h3 className="question-text">{questions[currentQuestion].question}</h3>
                    <div className="options-grid">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className={`option-btn ${selectedAnswer === index ? (index === questions[currentQuestion].answer ? 'correct' : 'wrong') : ''
                                    } ${isAnswered && index === questions[currentQuestion].answer ? 'correct' : ''}`}
                                onClick={() => handleAnswerOptionClick(index)}
                                disabled={isAnswered}
                            >
                                <span className="option-label">{String.fromCharCode(65 + index)}</span>
                                <span className="option-content">{option}</span>
                                {isAnswered && index === questions[currentQuestion].answer && (
                                    <CheckCircle2 size={18} className="status-icon" />
                                )}
                                {isAnswered && selectedAnswer === index && index !== questions[currentQuestion].answer && (
                                    <XCircle size={18} className="status-icon" />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {isAnswered && (
                <button className="next-btn" onClick={handleNextQuestion}>
                    {currentQuestion === questions.length - 1 ? 'Ergebnis anzeigen' : 'Nächste Frage'}
                    <ChevronRight size={18} />
                </button>
            )}
        </div>
    );
});

export default Quiz;
