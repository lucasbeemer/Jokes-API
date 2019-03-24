const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const server = express();
const port = 5000;

// knex
const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

// config
server.use(express.json());
server.use(bodyParser.json());
server.use(cors());

//OPENING message
server.get('/', (req, res) => {
    res.json({ message: "Welcome to the API" });
});

// READ DATA
server.get('/posts', (req, res) => {

  // shows selected query in console
  // console.log('\n' + knex('posts').toString())
  knex('posts').then((results) => {
      res.json(results);
  })
})

// READ 1 object of DATA by id
server.get('/posts/:id', (req, res) => {
    const joke = jokes.find(joke => joke.id == req.params.id);
  
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).send({ msg: 'content not found' });
    }
  });

// CREATE 1 object of DATA
server.post('/posts', (req, res) => {
  console.log(req.body)
  knex('posts').insert({
      author: req.body.author,
      content: req.body.content,
  }).then((results) => {
      res.send(200);
  })
})


// UPDATE 1 object of DATA
server.put('/posts/:id', (req, res) => {
  knex('posts').update({
      author: req.body.author,
      content: req.body.content,
      upvotes: req.body.upvotes
  }).where('id', req.params.id)
  .then((results) => {
      res.send(200);
  })
})

// DELETE DATA
server.delete('/posts/:id', (req, res) => {
  knex('posts').delete().where('id', req.params.id).then(() => {
      res.send(200);
  })
})
  
server.listen(port, () => {
    console.log(`\n Server listening on port ${port} \n`);
});