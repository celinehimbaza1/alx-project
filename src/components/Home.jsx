import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Home() {
const [amount, setAmount] = useState(10)
const [difficulty, setDifficulty] = useState('easy')
const navigate = useNavigate()


function start() {
// pass query params to quiz route
navigate(`/quiz?amount=${amount}&difficulty=${difficulty}`)
}


return (
<div className="bg-white rounded-2xl p-8 shadow">
<h1 className="text-2xl font-bold mb-4">Quick Quiz</h1>


<label className="block mb-2">Number of Questions</label>
<input type="number" value={amount} onChange={e => setAmount(e.target.value)} min={1} max={50} className="w-full mb-4 p-2 border rounded" />


<label className="block mb-2">Difficulty</label>
<select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="w-full mb-6 p-2 border rounded">
<option value="easy">Easy</option>
<option value="medium">Medium</option>
<option value="hard">Hard</option>
</select>


<button onClick={start} className="w-full py-2 rounded bg-blue-600 text-white font-semibold">Start Quiz</button>
</div>
)
}