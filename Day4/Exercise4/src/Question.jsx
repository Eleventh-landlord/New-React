import React from "react";

function Question({ question, index, selectedAnswer, setSelectedAnswer, handleAnswer }) {
  return (
    <div className="question-box">
      <h3>
        Question {index + 1}:
      </h3>
      <p>{question.question}</p>

      <div className="options">
        {question.options.map((option, i) => (
          <label key={i} className={selectedAnswer === option ? "selected" : ""}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            {option}
          </label>
        ))}
      </div>

      <button onClick={handleAnswer} disabled={!selectedAnswer}>
        Submit Answer
      </button>
    </div>
  );
}

export default Question;
