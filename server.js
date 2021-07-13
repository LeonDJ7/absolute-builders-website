require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes')
const path = require('path');

const app = express()
const port = process.env.PORT || 4201

mongoose.connect(process.env.MONGODB_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we r connected!')
});

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname + "/client/dist/absolute-builders/")))
app.use('/api', routes)

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname + "/client/dist/absolute-builders/index.html"))
})

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`)
})
