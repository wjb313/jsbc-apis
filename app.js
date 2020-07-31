const express = require('express');
const app = express();

app.get('/dogs/:id', (req, res) => {
  const dogs = [{
    id: 1,
    name: 'Roger'
  }]

  const dog = dogs.filter(dog => dog.id === req.params.id)
  if (dog.length) {
    res.json(dog[0])
  } else {
    res.status(404).send('File not found')
  }
})

app.listen(3000, () => console.log('Server ready'));