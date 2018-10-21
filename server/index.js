// express import/config
const express = require('express');
const app = express();
const port = 3000;

// graphql import
const fetch = require('isomorphic-fetch');
const graphqlEndpoint = 'https://hshacks-rise.herokuapp.com/v1alpha1/graphql';

/*
// canvas
const canvas = require('canvas-api');

canvas.helpers.getAllResources(
  {
    url:
      'https://sequoia.instructure.com/api/v1/courses/9048/gradebook_history/days/'
  },
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  }
);

canvas.assignment.get(9048, 146061, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
*/

app.get('/', (req, res) => res.send('Hello World!'));

// sending a list of all users
app.get('/users', (req, res) => {
  fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: '{ users (order_by: points_desc) { name points } }'
    })
  })
    .then(fetchRes => fetchRes.json())
    .then(fetchRes => res.send(fetchRes));
});

app.post('/user/:id', (req, res) => {
  fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
