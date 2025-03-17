async function newQuote() {
    const quote = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");
    const data = await quote.json();
    console.log(data)
    const spech = document.getElementById("quote");
    spech.innerText = data.data.content;
    const author = document.getElementById("author");
    author.innerText = data.data.author;
}

function copy() {
    const copytext = document.getElementById("quote", "author").innerText;
    navigator.clipboard.writeText(copytext);
    alert("yes it is copy")

}
function shareX() {
    const quotes = document.getElementById("quote").innerText
    const author = document.getElementById("author").innerText
    const quote_author = `${quotes} - ${author}`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote_author)}`
    window.open(twitterUrl, "_blank")

}