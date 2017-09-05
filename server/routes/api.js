const express = require("express")
const MongoClient = require("mongodb").MongoClient
const ObjectID = require("mongodb").ObjectID
const router = express.Router()

// Connect
const connection = (clousure) => {
  return MongoClient.connect("mongodb://hermy:123456@ds151963.mlab.com:51963/orion", (err, db) => {
    if (err)
      return console.log(err)
    clousure(db)
  })
}

// Error handing
const sendError = (err, res) => {
  response.status = 501
  response.message = typeof err == "object" ? err.message : err
  res.status(501).json(response)
}

// Response handing
let response = {
  status: 200,
  data: [],
  message: null,
}

// Get Interfaces
router.get("/interfaces", (req, res) => {
  connection((db) => {
    db.collection("interfaces")
      .find()
      .toArray()
      // Successfull
      .then((interfaces) => {
        response.data = interfaces
        res.json(response)
      })
      // Error
      .catch((err) => {
        sendError(err, res)
      })
  })
})

module.exports = router