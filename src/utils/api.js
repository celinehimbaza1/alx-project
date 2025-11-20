// Simple wrapper to fetch from Open Trivia DB
export async function fetchQuestions({ amount = 10, category = '', difficulty = 'easy', type = 'multiple' } = {}) {
const params = new URLSearchParams({ amount, difficulty, type })
if (category) params.set('category', category)
const url = `https://opentdb.com/api.php?${params.toString()}`
const res = await fetch(url)
const data = await res.json()
if (data.response_code !== 0) throw new Error('No questions available for that selection')
return data.results
}