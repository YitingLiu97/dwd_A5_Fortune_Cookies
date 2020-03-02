// window.addEventListener("DOMContentLoaded", () => {
//     const quoteList = document.getElementById("quoteList");
//     fetch("/quotes").then(res=>res.json()).then((data)=>{
//         console.log(`data text is ${data.text}`);

//         quoteList.innerHTML = data;;
//         console.log(quoteList.innerHTML);
//         return `<li>${data.text}</li>`;
//     });
// });

if (typeof(window) !== 'undefined') {

window.addEventListener("DOMContentLoaded",()=>{
    const quoteList = document.getElementById('quoteList');
    fetch('/quotes').then(res=>res.json()).then((data)=>{
        quoteList.innerHTML = QuoteList(data.text);
    });
});
}

function QuoteList(quotes){
    console.log("working");

    return quotes.map((quote)=>{
        return `<li>${quote.text}</li>`;
    }).join("");
}


// console.log(quote.getQuote());

// console.log(quote.getRandomQuote());