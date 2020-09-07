import React from "react";

const QuestionInput = ({ setQuestionText, questionText }) => {
  return (
    <input
      id='question-input'
      className="question-input"
      type="text"
      value={questionText}
      aria-label="Question input"
      placeholder="Enter a Question..."
      onChange={(e) => setQuestionText(e)}
    />
  );
};

export default QuestionInput;
