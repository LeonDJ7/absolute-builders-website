const express = require('express')
const mongoose = require('mongoose');
const routes = express.Router()

const projectSchema = new mongoose.Schema({
  title: String,
  location: String,
  images: [String],
  imageIndex: Number 
});

const Project = mongoose.model('Project', projectSchema, 'projects');

routes.get('/projects', async function (req, res) {
  try {
    const projects = await Project.find().lean()
    res.send(projects)
  }
  catch (err) {
    console.log(err)
  }
})

module.exports = routes