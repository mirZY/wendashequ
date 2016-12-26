/*
* @Author: Administrator
* @Date:   2016-12-26 16:35:10
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-26 17:41:02
*/

'use strict';
const express = require("express")
const router = express.Router()

router.get('/register', (req, res) => {
   res.render('register.html')
 })


 router.get('/login', (req, res) => {
   res.render('login.html')
 })

 export default router