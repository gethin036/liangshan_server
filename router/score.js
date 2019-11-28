const express = require('express')

const router = express.Router()
// const Score = require('../utils/db.js').Score
const Score = require('../models/index').Score





router.get('/list', function(req, res, next) {
  Score.find({}, {'quession': 1, 'quession_data': 1, 'title': 1, '_id': 0}, function(err, data) {
    if (err) {
      // console.log(err)
      var error = new Error(err)
      next(error)
    } else {
      // console.log(data)
      res.status(200).send({resultCode: '00', msg: 'SUCCESS', data: data})
    }
  })
})

router.get('/merchantScore', (req, res) => {
  var merchantId = req.query.merchantId
})


module.exports = router