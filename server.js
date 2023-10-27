//  npm install express --save (Beginning)

//  npm i body-parser     _For post etc  


const express = require('express')
const app = express()
const port = 4000   //   4000 because client = 30000

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Res = response req = request
app.get('/datarep', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

// Res = response req = request
app.get('/whatever', (req, res) => {    //  at what port in the get(/...)
    res.send('Goodbye')   //  What it returns
})



app.get('/name', (req, res) => {    //  at what port in the get(/...)
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname)   //  What it returns
})


//  Post Method
app.post('/name', (req, res) => {    //  at what port in the get(/...)
    res.send('Hello POST ' + req.body.fname + ' ' + req.body.lname)   //  body not query as its post and its body parsing


})
//Books
app.get('/api/books', (req, res) => {    //  at what port in the get(/...)
    const data =


        [
            {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
                "authors": ["Rick Umali"],
                "categories": []
            },
            {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
                "status": "MEAP",
                "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                ],
                "categories": []
            },
            {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl":
                    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
            }
        ]

    res.json({
        myBooks: data,
        "Message": "Hello from server.js"


    }
    )   //  What it returns
})

// Res = response req = request
app.get('/test', (req, res) => {    //  at what port in the get(/test)
    // const fileName = 'index.html';
    res.sendFile(__dirname + '/index.html')
})


// Res = response req = request
app.get('/hello/:name', (req, res) => {    //  A colon is to specify parameter
    res.send("Hello" + req.params.name)   //  
})


// Listener on port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})