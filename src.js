const quotes = [
  {text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  {text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  {text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  {text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  {text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];
const quoteEl=document.getElementById("quote");
const authorEl=document.getElementById("author");
const button=document.getElementById("new-quote");
const tweetBtn=document.getElementById("tweet");
function showQuote(){
  const randomIndex=Math.floor(Math.random() * quotes.length);
  const quote=quotes[randomIndex];
  quoteEl.classList.remove("show");
  authorEl.classList.remove("show");
  setTimeout(() => {
    quoteEl.innerText=`"${quote.text}"`;
    authorEl.innerText=`— ${quote.author}`;
    tweetBtn.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" — ${quote.author}`)}`;
    quoteEl.classList.add("show");
    authorEl.classList.add("show");
  }, 200);
}
button.addEventListener("click", showQuote);
showQuote();
