import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import useQuiz from "../hooks/useQuiz";

export default function Quiz({ questions, finishQuiz }) {
  const { index, current, answers, selected, submitAnswer, nextQuestion, score } =
    useQuiz(questions);

  useEffect(() => {
    if (questions.length > 0 && index >= questions.length) {
      finishQuiz(score);
    }
  }, [index, questions, score, finishQuiz]);

  if (!current) return <div className="text-center">Loading...</div>;

  function handleSelect(answer) {
    submitAnswer(answer);
    setTimeout(() => nextQuestion(), 600);
  }

  return (
    <div>
      <div className="mb-4 text-sm">
        Question {index + 1} / {questions.length}
      </div>

      <QuestionCard
        question={current}
        answers={answers}
        selected={selected}
        onSelect={handleSelect}
      />
    </div>
  );
}
