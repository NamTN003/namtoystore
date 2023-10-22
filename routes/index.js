var express = require('express');
const UserModel = require('../models/UserModel');
const ToyModel = require('../models/ToyModel');
const SpindleModel = require('../models/SpindleModel');
const HammerModel = require('../models/HammerModel');

var router = express.Router();

router.get('/', async (req, res) => {
  var spindles = await SpindleModel.find();
  var hammer = await HammerModel.find();
  res.render('index', { spindles : spindles, hammer : hammer});
})


router.get('/login', (req, res) => {
  res.render('toy/login', {layout : false});
})

router.post('/', async (req, res) => {
  //lấy thông tin từ form login
  var username = req.body.username;
  var password = req.body.password;
  //lấy dữ liệu user từ db
  var users = await UserModel.find();
  //tạo biến boolean để check login
  var login = false;
  
  //chạy vòng lặp for để kiểm tra thông tin login
  //có match với dữ liệu của bảng user trong db không
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      login = true;
      break;
    }
  }
  //điều hướng web khi login succeed (vào trang admin) hoặc login fail (về lại trang login)
  if (login)  //login == true
    res.redirect('/toy')
  else
    res.redirect('/');
})


module.exports = router;