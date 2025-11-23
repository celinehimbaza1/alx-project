import React, { useState } from "react";

const Home = ({ startQuiz }) => {
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");

  const handleStart = () => {
    startQuiz(amount, difficulty);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Quick Quiz
        </h1>

        {/* Number of Questions */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Number of Questions
          </label>
          <input
            type="number"
            className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
            value={amount}
            min={1}
            max={50}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Difficulty */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Difficulty
          </label>
          <select
            className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition-all"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
