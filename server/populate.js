// use this script to populate the database with data
const fetch = require('isomorphic-fetch');
const graphqlEndpoint = 'https://hshacks-rise.herokuapp.com/v1alpha1/graphql';

// this works! use it as a model for writing future update code
fetch(graphqlEndpoint, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query:
      'mutation insert_users { insert_users (objects: [{name: "Big Boberto", points: 134}]) {returning { name points }}}'
  })
})
  .then(res => res.json())
  .then(res => console.log(res));
