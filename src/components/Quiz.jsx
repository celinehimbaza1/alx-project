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

  if (!current)
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-medium text-gray-600">
        Loading quiz...
      </div>
    );

  function handleSelect(answer) {
    submitAnswer(answer);
    setTimeout(() => nextQuestion(), 600);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="mb-4 text-sm text-gray-600 flex justify-between">
          <span>
            Question <strong>{index + 1}</strong> / {questions.length}
          </span>
          <span className="font-semibold text-blue-600">
            Score: {score}
          </span>
        </div>

        <QuestionCard
          question={current}
          answers={answers}
          selected={selected}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}
