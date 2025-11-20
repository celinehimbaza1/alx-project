import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { fetchQuestions } from '../utils/api'
import useQuiz from '../hooks/useQuiz'
import QuestionCard from './QuestionCard'


export default function Quiz() {
const [questions, setQuestions] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [searchParams] = useSearchParams()
const navigate = useNavigate()


useEffect(() => {
async function load() {
setLoading(true)
setError(null)
try {
const amount = searchParams.get('amount') || 10
const difficulty = searchParams.get('difficulty') || 'easy'
const data = await fetchQuestions({ amount, difficulty })
setQuestions(data)
} catch (err) {
setError(err.message)
} finally {
setLoading(false)
}
}
load()
}, [searchParams])


const { index, current, answers, selected, submitAnswer, nextQuestion, score } = useQuiz(questions)


useEffect(() => {
if (!loading && questions.length > 0 && index >= questions.length) {
// go to score page and pass score via state
navigate('/score', { state: { score, total: questions.length } })
}
}, [index, loading, questions, score, navigate])


if (loading) return <div className="text-center">Loading questions...</div>
if (error) return <div className="text-center text-red-500">{error}</div>
if (!current) return <div className="text-center">No questions found.</div>


function handleSelect(answer) {
submitAnswer(answer)
// small delay then next
setTimeout(() => nextQuestion(), 700)
}


return (
<div>
<div className="mb-4 text-sm">Question {index + 1} / {questions.length}</div>
<QuestionCard question={current} answers={answers} selected={selected} onSelect={handleSelect} />
</div>
)
}