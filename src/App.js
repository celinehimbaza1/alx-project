import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Score from './components/Score'


export default function App() {
return (
<div className="min-h-screen flex items-center justify-center p-4">
<div className="w-full max-w-3xl">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/quiz" element={<Quiz />} />
<Route path="/score" element={<Score />} />
</Routes>
</div>
</div>
)
}