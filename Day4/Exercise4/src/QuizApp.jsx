import React, { useState } from "react";
import Question from "./Question.jsx";
import ScoreBoard from "./ScoreBoard.jsx";
import AnswerFeedback from "./AnswerFeedback.jsx";
import "./App.css";

function QuizApp() {
  const questions = [
    {
      question: "What is the capital of Lagos State?",
      options: ["Lagos Island", "Ikeja", "Victoria Island", "Lekki"],
      answer: "Ikeja",
    },
    {
      question: "What is the capital of Kano State?",
      options: ["Wudil", "Kano", "Gwale", "Bichi"],
      answer: "Kano",
    },
    {
      question: "What is the capital of Rivers State?",
      options: ["Port Harcourt", "Bonny", "Degema", "Ahoada"],
      answer: "Port Harcourt",
    },
    {
      question: "What is the capital of Oyo State?",
      options: ["Ogbomoso", "Ibadan", "Oyo", "Iseyin"],
      answer: "Ibadan",
    },
    {
      question: "What is the capital of Borno State?",
      options: ["Maiduguri", "Biu", "Damboa", "Chibok"],
      answer: "Maiduguri",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = () => {
    if (!selectedAnswer) return;

    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
      setFeedback(" Correct!");
    } else {
      setFeedback(` Wrong! The correct answer is ${currentQuestion.answer}.`);
    }

    setTimeout(() => {
      setFeedback("");
      setSelectedAnswer("");

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowFinal(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentIndex(0);
    setSelectedAnswer("");
    setFeedback("");
    setShowFinal(false);
  };

  return (
    <div className="quiz-container">
      <h2> Nigerian States Quiz</h2>
      <ScoreBoard score={score} total={questions.length} />

      {showFinal ? (
        <div className="final-screen">
          <h3> Quiz Completed!</h3>
          <p>
            You scored <strong>{score}</strong> out of {questions.length}
          </p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <Question
            question={currentQuestion}
            index={currentIndex}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            handleAnswer={handleAnswer}
          />
          <AnswerFeedback feedback={feedback} />
        </>
      )}
    </div>
  );
}

export default QuizApp;
