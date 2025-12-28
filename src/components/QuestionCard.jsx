import React from 'react'

function decodeHtml(html) {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

export default function QuestionCard({ question, answers, selected, onSelect }) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-lg">
      <div className="mb-5 text-lg font-semibold text-gray-800">
        {decodeHtml(question.question)}
      </div>

      <div className="grid gap-4">
        {answers.map(a => (
          <button
            key={a}
            onClick={() => onSelect(a)}
            disabled={!!selected}
            className={`p-4 border-2 rounded-xl text-left transition-all duration-200
              ${
                selected === a
                  ? 'bg-blue-100 border-blue-500 text-blue-700 font-semibold'
                  : 'bg-gray-50 border-gray-200 hover:bg-blue-50 hover:border-blue-300'
              }
              ${selected && selected !== a ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {decodeHtml(a)}
          </button>
        ))}
      </div>
    </div>
  )
}
