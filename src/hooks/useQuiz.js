import { useState, useMemo } from 'react'


export default function useQuiz(rawQuestions = []) {
const [index, setIndex] = useState(0)
const [score, setScore] = useState(0)
const [selected, setSelected] = useState(null)


const current = rawQuestions[index]


const answers = useMemo(() => {
if (!current) return []
const all = [...current.incorrect_answers, current.correct_answer]
// shuffle
for (let i = all.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1))
;[all[i], all[j]] = [all[j], all[i]]
}
return all
}, [current])


function submitAnswer(answer) {
setSelected(answer)
if (answer === current.correct_answer) setScore(s => s + 1)
}


function nextQuestion() {
setSelected(null)
setIndex(i => i + 1)
}


return { index, current, answers, selected, submitAnswer, nextQuestion, score }
}