// express import/config
const express = require('express');
const child_process = require('child_process');
const app = express();
const bodyParser = require('body-parser');
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

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'));

// sending a list of all users
app.get('/users', (req, res) => {
  fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: '{ users (order_by: points_desc) { id name picture points } }'
    })
  })
    .then(fetchRes => fetchRes.json())
    .then(fetchRes => res.send(fetchRes));
});

app.get('/user/:id', (req, res) => {
  fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{ users (where: {id: {_eq: ${req.params.id}}}) { id name picture points json } }`
    })
  })
    .then(fetchRes => fetchRes.json())
    .then(fetchRes => res.send(fetchRes));
});

app.post('/addGrade', (req, res) => {
  fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query:
      `{
        users(
          where: {id: {_eq: 2}}
        ) {
          points
          json
        }
      }`
    })
  }).then(fetchRes => fetchRes.json())
  .then(fetchRes => {
    console.log(fetchRes)
    child_process.spawn('python', ['main.py', '100', '100', req.body.init, req.body.final, '0', '1.5']).stdout.on('data', (data) => {
      let jsonT = JSON.parse(fetchRes.data.users[0].json)
      data = parseFloat(data)
      jsonT.history.push(data)
      console.log(jsonT)
      fetch(graphqlEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: 
          `mutation update_user {
            update_users(
              where: {id: {_eq: 2}},
              _set: {points: ${Math.round(fetchRes.data.users[0].points + data)}, json: "${JSON.stringify(jsonT).replace(/"/g, '\\"')}"}
            ) {
              affected_rows
            }
          }`
        })
      })
      .then(x => x.json())
      .then(x => res.send(x))
    })
  })
});

app.post('/user/:id', (req, res) => {
  fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
