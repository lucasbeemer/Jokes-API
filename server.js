const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const port = 5000;

const server = express();
server.use(express.json());

let jokes = [
    {
        id: 0,
        name: "Frances",
        q: "Why did the scarecrow get a Promotion?",
        p: "Because he was outstanding in his field!"
    },
    {
        id: 1,
        name: "Reginald",
        q: "What do you call a lawyer who doesn't know the law?",
        p: "A judge"
    },
    {
        id: 2,
        name: "Gretchen",
        q: "Why did the hipster burn his mouth?",
        p: "He drank the coffee before it was cool."
    },
    {
        id: 3,
        name: "Stephen",
        q: "What’s the best thing about Switzerland?",
        p: "I don't know, but the flag is big plus."
    },
    {
        id: 4,
        name: "Monica",
        q: "Did you hear about the claustrophobic astronaut?",
        p: "He just needed a little space."
    },
    {
        id: 5,
        name: "Larry",
        q: "What kind of exercise do lazy people do?",
        p: "Diddly squats."
    },
    {
        id: 6,
        name: "Xavier",
        q: "What do you call a fake noodle?",
        p: "An impasta!"
    },
    {
        id: 7,
        name: "Joleen",
        nq: "What did the shark say when he ate the clownfish?",
        p: "This tastes a little funny."
    },
    {
        id: 8,
        name: "Ashley",
        q: "What is an astronaut’s favorite part on a computer?",
        p: "The space bar."
    },
    {
        id: 9,
        name: "Dan",
        q: "Did you hear about the two people who stole a calendar?",
        p: "They each got six months."
    },
];

let id = jokes.length;

server.use(bodyParser.json());
server.use(cors());

//OPENING message
server.get('/api', (req, res) => {
    res.json({ message: "Welcome to the API" });
});

// READ DATA
server.get('/api/jokes/get', (req, res) => {
    setTimeout(() => {
      res.send(jokes);
    }, 1000);
  });

// READ 1 object of DATA by id
// server.get('/api/jokes/:id', (req, res) => {
//     const joke = jokes.find(j => j.id == req.params.id);
  
//     if (joke) {
//       res.status(200).json(joke);
//     } else {
//       res.status(404).send({ msg: 'joke not found' });
//     }
//   });

// CREATE 1 object of DATA
server.post('/api/jokes/create', (req, res) => {
    ++id;
    const { name, q, p } = req.body;
    const myJoke = { id, name, q, p };
    jokes.push(myJoke);
    res.send(jokes);
  });


// UPDATE 1 object of DATA
server.put('/api/jokes/update', (req, res) => {
  const { name, q, p } = req.body;
  const updatedJoke = { name, q, p };
  const newJokes = jokes.map(joke => {
    return (joke = updatedJoke);
  });
  jokes = newJokes;
  res.send(jokes);
});

// DELETE DATA
server.delete('/api/jokes/delete', (req, res) => {
  const id = req.body.id;
  const newJokes = jokes.filter(joke => {
    return id !== joke.id;
  });
  jokes = newJokes;
  res.send(jokes);
});
  
server.listen(port, () => {
    console.log(`\n Server listening on port ${port} \n`);
});