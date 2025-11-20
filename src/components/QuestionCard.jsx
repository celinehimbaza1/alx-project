import React from 'react'


function decodeHtml(html) {
const txt = document.createElement('textarea')
txt.innerHTML = html
return txt.value
}


export default function QuestionCard({ question, answers, selected, onSelect }) {
return (
<div className="bg-white rounded-2xl p-6 shadow">
<div className="mb-4 text-lg">{decodeHtml(question.question)}</div>
<div className="grid gap-3">
{answers.map(a => (
<button
key={a}
onClick={() => onSelect(a)}
disabled={!!selected}
className={`p-3 border rounded text-left ${selected === a ? 'bg-blue-100 border-blue-400' : 'hover:bg-gray-50'}`}>
{decodeHtml(a)}
</button>
))}
</div>
</div>
)
}