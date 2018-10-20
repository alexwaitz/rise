// express import/config
const express = require('express');
const app = express();
const port = 3000;

// graphql import
const { request } = require('graphql-request');
const graphqlEndpoint = 'https://hshacks-rise.herokuapp.com/v1alpha1/graphql';

/* this query asks for the age of all user entries with the name being equal to "Alexander Waitz"
let exampleQuery = `
{
    users(
      where: {name: {_eq: "Alexander Waitz"}}
    ) {
      age
    }
}
`;

request(graphqlEndpoint, exampleQuery)
  .then(data => console.log(data))
  .catch(err => console.log(err));
*/

app.get('/', (req, res) => res.send('Hello World!'));

// sending a list of all users
app.get('/users', (req, res) => {
  request(
    graphqlEndpoint,
    `
    {
        users (
            order_by: points_desc
        ) {
            name
            points
        }
    }
    `
  ).then(data => {
    res.send(data);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
