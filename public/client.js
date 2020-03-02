window.addEventListener("DOMContentLoaded", () => {
  const quoteList = document.getElementById("quoteList");
  fetch("/quotes").then(res => res.json()).then((data) => {
    quoteList.innerHTML = QuoteList(data.reverse());
  });

  const quoteForm = document.getElementById("quote-form");
  quoteForm.onsubmit = (e) => {
    e.preventDefault();
    const textInput = e.target.elements["text"];
    const fromInput = e.target.elements["from"];

    //   const quoteInput = e.target.elements["text"];
    //   const text = quoteInput.getElementById('text');
    //   console.log(`text is ${text}`);
    const text = textInput.value;
    const from = fromInput.value;

    console.log(`text is ${text}`);

    //   quoteInput.value = "";
    //fetch (path,promises)
    fetch("/quotes",
      {
        method: "POST",
        //JSON.stringify(value[, replacer [, space]])
        body: JSON.stringify({ text: text, from: from }),
        //A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.  
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => res.json()).then((data) => {

        quoteList.innerHTML = QuoteList(data);
      });
  }
});

function QuoteList(quotes) {
  // return "I am happy";
  // singleQuote.append()
  return quotes.map((quote) => {
    let singleQuote = `<li>${quote.text} <br> ${quote.from}<br><br></li>`;
    singleQuote.className="quote";
    let wrapper = document.createElement('div');
    wrapper.className = "box";
    wrapper.append(singleQuote);

    return singleQuote;
  }).join("");
}