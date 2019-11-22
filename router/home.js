const express = require('express')

const router = express.Router()
const Score = require('../utils/db.js').Score
const InspectSchema = require('../utils/db.js').InspectSchema



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

router.post('/addInspection', function(req, res, next) {
  // model 使用 create , new 
  // var inspect = new InspectSchema(req.body); 
  // inspect.sve(fucntion(){})

  // InspectSchema.create(req.body, function(err, res1) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log(res1)
  //     res.status(200).send(req.body)
  //   }
  // })
  // console.log(req.body)

  res.status(200).send(req.body)
})

module.exports = router