import React, { useState } from "react";
import "./App.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleLike = () => {
    setDisabled(true);

    // Toggle like/unlike
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }

    // Re-enable after 1 second
    setTimeout(() => setDisabled(false), 1000);
  };

  return (
    <div className="like-container">
      <button
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={handleLike}
        disabled={disabled}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
      <p>
        {count} {count === 1 ? "like" : "likes"}
      </p>
    </div>
  );
}

export default LikeButton;
