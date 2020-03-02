const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');

const fs = require("fs");


//quoteList[1].text
//quoteList[1].from

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "views/about.html"));
});

// var quote={};

// function randomInt(min,max)
// {
//     return Math.floor(Math.random()*(max-min+1)+min);
// }

// function getRandomQuote () { 
//   var index = randomInt(0,324);
//   return quoteList[index].text;
// };

function getQuote (){ 
  // var index = randomInt(0,324);
  // quote.text=quoteList[index].text;
  // quote.author=quoteList[index].from;
  // return quote;
  const contents = fs.readFileSync(path.join(__dirname, "./data/quotes.json"));
  const quoteList = JSON.parse(contents);
  return quoteList;
};

function addQuote (newQuote){
  const quotes = getQuote();
  quotes.push(newQuote);

//  newQuote = {
//   text:text,
//   from:from
// }

// quoteList = quoteList.push(newQuote);
// quoteList.text.push(newQuote.text);
// quoteList.from.push(newQuote.from);

// quoteList.push(newQuote);
  console.log(`quotes is ${quotes}`);
  // quoteList[2].text.push(newQuote.text);
  // quoteList[2].from.push(newQuote.from);
  fs.writeFileSync(path.join(__dirname,"./data/quotes.json"),JSON.stringify(quotes));
  return quotes;

}

app.get("/quotes",(req,res)=>{
  const quotes = getQuote();
  res.json(quotes);

})

app.post("/quotes",(req,res)=>{

  const quote = req.body.text; 
  const author = req.body.from;
  const quotes =addQuote({
    "text":quote,
    "from":author
  });

  console.log(`author is ${author}`);
  console.log(`quote is ${quote}`);

  // console.log(bodyParser.req.body);
  // console.log(bodyParser.raw);
  // console.log(`quotes are ${quotes}`);

  res.json(quotes);
})



// app.delete()

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});


