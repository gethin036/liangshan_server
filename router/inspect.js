const express = require('express')

const router = express.Router()
const InspectSchema = require('../utils/db.js').InspectSchema
const Template = require('../models/index').Temalate


// 获取巡检模板信息
router.post('/getTemplate', (req, res) => {
  const merchantId = req.query.merchantId
  Template.findOne({ merchantId }, {_id: 0}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(data)
      // res.status(200).send({resultCode: '00', msg: 'SUCCESS', data: data})
      res.status(200).send({resultCode: '00', msg: 'SUCCESS', ...data._doc})
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

// 查询巡检信息
router.get('/getInspection', (req, res) => {
  var merchantId = req.query.merchantId
  InspectSchema.findOne({ merchantId }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send({resultCode: '00', msg: 'SUCCESS', data: data})
    }
  })
})

module.exports = router