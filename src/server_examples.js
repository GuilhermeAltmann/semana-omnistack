const express = require('express')

const app = express();

app.use(express.json());

app.get('/users', (req, res) =>{
  return res.json({
    message: "Hello World",
    idade: req.query.idade
  });
});

app.put('/users/:id', (req, res) =>{
  return res.json({
    message: "Hello World",
    id: req.params.id
  });
});

app.post('/users', (req, res) =>{
  return res.json({
    message: "Hello World",
    data: req.body
  });
});


app.listen(3333);