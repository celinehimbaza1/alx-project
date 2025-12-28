import React from "react";

export default function Score({ score, total }) {
  if (score === undefined)
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-medium text-gray-600">
        No score data.
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-md text-center transition-transform duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-extrabold mb-3 text-blue-700">
          Your Score 
        </h2>
        <p className="text-lg mb-2 font-semibold text-gray-800">
          {score} / {total}
        </p>
        <p className="mb-6 text-gray-600">
          {Math.round((score / total) * 100)}% correct
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 rounded-xl border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200"
          >
            Home
          </button>

          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
