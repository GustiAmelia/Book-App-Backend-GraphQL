const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
const connection_url = `mongodb+srv://admin:AunA3ALm2EEbgV3@cluster0.qmgg5.mongodb.net/gql-ninja?retryWrites=true&w=majority`;

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
})

mongoose.connection.once('open', () => {
  console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true,
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});