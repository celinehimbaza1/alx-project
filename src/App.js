import React, { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Score from "./components/Score";


function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState("home");

  const startQuiz = async (amount, difficulty) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const res = await fetch(url);
    const data = await res.json();

    setQuestions(data.results);
    setScore(0);
    setStage("quiz");
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setStage("score");
  };

  return (
    <div>
      {stage === "home" && <Home startQuiz={startQuiz} />}
      {stage === "quiz" && (
        <Quiz questions={questions} finishQuiz={finishQuiz} />
      )}
      {stage === "score" && <Score score={score} total={questions.length} />}

    </div>
  );
}

export default App;
