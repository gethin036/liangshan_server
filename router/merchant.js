const express = require('express')

const router = express.Router()
const Merchant = require('../utils/db.js').MerchantSchema
const MerchantInfo = require('../models').MerchantInfo


//  查询商户信息
router.get('/info', (req, res) => {
  var merchantId = req.query.merchantId
  MerchantInfo.findOne({ merchantId }, {_id: 0}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send({resultCode: '00', msg: 'SUCCESS', data: data})
    }
  })
})

// 查询巡检信息
router.get('/getInspection', (req, res) => {
  var merchantId = req.query.merchantId
  Merchant.findOne({ merchantId }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      if (data) {
        res.status(200).send({resultCode: '00', msg: 'SUCCESS', data: data})
      } else {
        res.status(200).send({resultCode: '00', msg: 'SUCCESS', data: '无数据'})
      }
    }
  })
})

router.post('/add', (req, res, next) => {
  const merchantId = req.body.merchantId

  Merchant.updateOne({ merchantId }, req.body, { upsert: true }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(data)
      res.status(200).send({resultCode: '00', msg: 'SUCCESS', data: '成功'})
    }
  })
})

module.exports = router