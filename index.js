const quotes = ["Success is not final, failure is not fatal, it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "In the middle of difficulty lies opportunity.",
    "The journey of a thousand miles begins with one step.",
    "Happiness is not something ready-made, it comes from your own actions.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The best way to predict the future is to create it.",
    "It always seems impossible until it's done."]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")
let btn = document.querySelector(".btn")

function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
       
    }
    while(true){
    
        const randomIdx = Math.floor(Math.random()*quotes.length)

        if(usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = `" ${quote}"`;
        usedIndexes.add(randomIdx)
        break// want to learn break and continue and about has function
    }
}
btn.addEventListener("click", ()=>{
    quote.style.padding = "20px"
})