const express = require('express')
const routes = express.Router()

const projects = [
    {
        title: 'Kitchen renovation',
        address: '216 High St, Abington MA',
        images: []
    },
    {
        title: 'New home',
        address: '2 Kearsarge Rd, Yarmouth MA',
        images: []
    }
]

routes.get('/project', async function (req, res) {
  try {
    res.send(projects);
  }
  catch (err) {
    console.log(err)
  }
});

module.exports = routes