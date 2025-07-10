# Quote_Generator
## Date:10/7/2025
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Quote Generator</title>
  <link rel="stylesheet" href="color.css" />
</head>
<body>
  <div class="quote-container">
    <h1>InspireMe</h1>
    <div class="quote-box">
      <p id="quote" class="fade">Click the button to get quotes!</p>
      <p id="author" class="fade">—</p>
    </div>
    <button id="new-quote">Get Quote</button>
    <a id="tweet" target="_blank">Tweet this...</a>
  </div>
  <script src="src.js"></script>
</body>
</html>

```
## CSS Code:
```
body{
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background: #f0f4f8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.quote-container{
  text-align: center;
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
}
h1{
  margin-bottom: 20px;
  color: #333;
}
.quote-box{
  margin-bottom: 20px;
}
#quote{
  font-size: 1.3rem;
  font-style: italic;
  color: #444;
}
#author{
  margin-top: 10px;
  font-weight: bold;
  color: #666;
}
button{
  background-color: #0077cc;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}
button:hover{
  background-color: #005fa3;
}
#tweet{
  display: block;
  margin-top: 15px;
  text-decoration: none;
  color: #0077cc;
  font-weight: bold;
}
.fade{
  opacity: 0;
  transition: opacity 0.5s;
}
.fade.show{
  opacity: 1;
}

```
## JS Code:
```
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

```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4b5563db-3d56-4365-8ad6-11ea52c7fd93" />


## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
