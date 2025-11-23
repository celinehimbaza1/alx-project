export async function fetchQuestions(amount = 10, difficulty = "easy") {
  let url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;

  if (difficulty) {
    url += `&difficulty=${difficulty}`;
  }

  const res = await fetch(url);
  const data = await res.json();

  // If no questions returned, try again without difficulty filter
  if (data.response_code !== 0 || data.results.length === 0) {
    const fallback = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&type=multiple`
    );
    const fallbackData = await fallback.json();
    return fallbackData.results;
  }

  return data.results;
}
