console.log('May the force be with you')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'ejs')

const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb+srv://Pras:V1tK4mNCCcspp5Bz@cluster0.nzbwy1q.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true})
.then (client => {
    
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))
  // We normally abbreviate `request` to `req` and `response` to `res`.
  app.get('/', (req, res) => {
    db.collection('quotes').find().toArray()
      .then(results => {
        res.render('index.ejs', { quotes: results })
      })
    .catch(error => console.error(error))
    

  // 
  })

  

  app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
      })
      .catch(error => console.error(error))
  })
  
  

  app.listen(3000, function() {
    console.log('listening on 3000')
  })
  })
  .catch(error => console.error(error))



