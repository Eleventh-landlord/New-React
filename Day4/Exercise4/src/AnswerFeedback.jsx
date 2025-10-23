

function AnswerFeedback({ feedback }) {
  if (!feedback) return null;

  return <div className="feedback">{feedback}</div>;
}

export default AnswerFeedback;
