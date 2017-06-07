const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
mongoose.Promise = global.Promise



if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/todosApp');
}
app.use(bodyParser.json())


routes(app);

app.use((err, req, res, next) => {
  console.log(err)
  res.status(422).send({ error: err.message });
})

module.exports = app