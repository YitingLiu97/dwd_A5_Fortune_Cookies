const fs = require('fs');
const Datastore = require('nedb');
const db = new Datastore({filename: "quotes.db"});
db.loadDatabase();

const content = fs.readFileSync('data/quotes.json');
let quotesObj = JSON.parse(content);
// console.log(quotesObj);

let quotes = quotesObj.map((quote)=>{
    return{
        text: quote.text,
        from:quote.from
    }

});

// db.insert(quotes,(err,docs)=>{
//     console.log(docs);
// })

// db.find({from:"Chinese proverb"},(err,docs)=>{
//     console.log(docs);
// });

//remove my input of the test quote 
// db.remove({_id:"5PJIHdvKMqjplXfQ"},(err,numRemoved)=>{
//     console.log(numRemoved);
// });

// db.remove({_id:"l2PkHAKY7rdsNsUq"},(err,numRemoved)=>{
//     console.log(numRemoved);
// });


db.find({_id:"l2PkHAKY7rdsNsUq"},(err,docs)=>{
    console.log(docs);
})