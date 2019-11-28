const mongoose = require('mongoose')
const config = require('../config/default') 

const ScoreSchema = require('./score')
const TemalateSchema = require('./template')
const MerchantInfo = require('./merchantInfo')

 mongoose.connect(config.mongodb, {autoIndex: false, useNewUrlParser: true, useUnifiedTopology: true})



 exports.Score = mongoose.model('Score', ScoreSchema, 'score')
 exports.Temalate = mongoose.model('Temalate', TemalateSchema, 'inspectTemplate')
 exports.MerchantInfo = mongoose.model('MerchantInfo', MerchantInfo, 'merchantInfo')

 
