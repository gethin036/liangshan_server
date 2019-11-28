
const score = require('./score')
const merchant = require('./merchant')
const inspect = require('./inspect')

module.exports = (app) => {
  app.use('/score', score)
  app.use('/merchant', merchant)
  app.use('/inspect', inspect)
}