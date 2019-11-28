const config = require('../config/default')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect(config.mongodb, {autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true})

var ScoreSchema = new Schema({
    quession: { type: 'string', required: true },
    quession_data: [{ 
      risk_value: String, 
      risk_score: String,
    }]
})

/**
 * riskRatingTables: [RiskSchema]
 * 这样的话 数组里面就不会有 _id 字段了
 */
var RiskSchema = new Schema({
  title: String,
  value: String,
  score: String,
}, { _id: false})

var InspectSchema = new Schema({
  merchantId: String,
  salesmanId: String,
  remark: String,
  evaluationScore: String,
  evaluationScore: Number,
  isSpecialMerchant: Number,
  riskRatingTables: [RiskSchema],
  createTime: {type: Date, default: Date.now},
}, { id: false, versionKey: false })


// var MerchantInfo = new Schema()

// exports.Score = mongoose.model('Score', ScoreSchema, 'score');
exports.MerchantSchema = mongoose.model('Merchant', InspectSchema, 'merchant');
// exports.MerchantInfo = mongoose.model('MerchantInfo', MerchantInfo, 'merchantInfo')