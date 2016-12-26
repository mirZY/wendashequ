'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: Administrator
 * @Date:   2016-12-24 16:27:08
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-12-26 16:33:58
 */

var app = (0, _express2.default)();

//配置静态资源

app.use('/static', _express2.default.static((0, _path.join)(__dirname, '../static')));

app.use('/node_modules', _express2.default.static((0, _path.join)(__dirname, '../node_modules')));

//watch 表示监视文件的改动
_nunjucks2.default.configure(_config2.default.viewPath, {
  autoescape: true,
  express: app,
  watch: true,
  noCache: false
});

// app.get('/',(req,res)=>{
// 	res.render('index.html')
// })

// app.get('/account/register', (req, res) => {
//   res.render('register.html')
// })


// app.get('/account/login', (req, res) => {
//   res.render('login.html')
// })

app.listen(_config2.default.port, _config2.default.host, function () {
  console.log('Server is running at port ' + _config2.default.port + '/');
  console.log('Please visit http://' + _config2.default.host + ':' + _config2.default.port + '/');
});