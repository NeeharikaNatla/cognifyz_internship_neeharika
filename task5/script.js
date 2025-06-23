function getQuote() {
  const quotes = [
    { text: "Believe in yourself and all that you are.", author: "Niharika ✨" },
    { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
    { text: "You are stronger than you think.", author: "Life" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Motivation" },
    { text: "Great things never come from comfort zones.", author: "Success" }
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById("quote").innerText = `"${quote.text}" — ${quote.author}`;
}





