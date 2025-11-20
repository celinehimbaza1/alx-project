import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Score() {
const { state } = useLocation()
const navigate = useNavigate()
if (!state) return <div className="text-center">No score data.</div>


const { score, total } = state


return (
<div className="bg-white rounded-2xl p-8 shadow text-center">
<h2 className="text-2xl font-bold mb-2">Your Score</h2>
<p className="text-lg mb-4">{score} / {total}</p>
<p className="mb-6">{Math.round((score / total) * 100)}% correct</p>
<div className="flex gap-3 justify-center">
<button onClick={() => navigate('/')} className="px-4 py-2 rounded border">Home</button>
<button onClick={() => navigate(`/quiz?amount=${total}&difficulty=easy`)} className="px-4 py-2 rounded bg-blue-600 text-white">Retry</button>
</div>
</div>
)
}