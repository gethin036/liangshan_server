const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const cors = require('cors')
const router = require('./router')



const app = express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     if(req.method=="OPTIONS") res.sendStatus(200);/*让options请求快速返回*/
//     else  next();
// });

router(app)

// 页面的 404 处理
app.get('*', function (req, res){
  console.log('404 handler..')
  res.status(404).send({resultCode: '01', msg: 'fail', data: null})
});

// 错误出路
app.use(function(err, req, res, next) {
  console.log(err)
  res.status(500).send('something broke')
})


app.listen(3000)