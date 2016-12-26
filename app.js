/*
 * @Author: Administrator
 * @Date:   2016-12-24 16:27:08
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-12-26 15:14:06
 */

import express from 'express'

import config from './config'

import nunjucks from 'nunjucks'

import {join}  from 'path'

const app = express()

//配置静态资源

app.use('/static', express.static(join(__dirname, '../static')))


app.use('/node_modules', express.static(join(__dirname, '../node_modules')))


//watch 表示监视文件的改动
nunjucks.configure(config.viewPath,{
	autoescape:true,
	express:app,
	watch:true,
    noCache:false
})



app.get('/',(req,res)=>{
	res.render('index.html')
})

app.get('/account/register', (req, res) => {
  res.render('register.html')
})


app.get('/account/login', (req, res) => {
  res.render('login.html')
})

app.listen(config.port,config.host,() => {
	console.log(`Server is running at port ${config.port}/`)
	console.log(`Please visit http://${config.host}:${config.port}/`)
})