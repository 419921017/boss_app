const express = require('express');
const mongoose = require('mongoose');

// 连接mongoDB
const DB_URL = 'mongodb://localhost:27017/boss_app';


mongoose.connect(DB_URL);

mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})
// user表
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))
// 新增数据
// User.create({
//   user: 'bbb',
//   age: 19
// }, function (err, doc) {
//   if (!err) {
//     console.log('success', doc)
//   } else {
//     console.log('err', err)
//   }
// })
// 删除
User.remove({user: 'bbb'}, function (err, doc) {
  console.log(doc)
})
// 更新
// User.update({user: 'aaa'}, {$set: {age: 12}}, function (err, doc) {
//   console.log(doc)
// })
// 新建app
const app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>')
});

app.get('/data', function (req, res) {
  // User.findOne({age: 12}, function (err, doc) {
  //   console.log(doc)
  // })
  User.find({}, function (err, doc) {
    if (!err) {
      console.log('success', doc)
      res.json(doc)
    } else {
      console.log('err', err)
    }
  })
  // res.json('{name: 123}')
})

app.listen('9093', function () {
  console.log('Node app start at port 9093')
});

