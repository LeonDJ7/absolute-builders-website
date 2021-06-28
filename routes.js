const express = require('express')
const routes = express.Router()

const projects = [
    {
        title: 'Kitchen renovation',
        location: '216 High St, Abington MA',
        images: []
    },
    {
        title: 'New home',
        location: '2 Kearsarge Rd, Yarmouth MA',
        images: []
    }
]

routes.get('/projects', async function (req, res) {
  try {
    res.send(projects);
  }
  catch (err) {
    console.log(err)
  }
});

module.exports = routes