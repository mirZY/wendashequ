/*
* @Author: Administrator
* @Date:   2016-12-26 16:34:46
* @Last Modified by:   Administrator
* @Last Modified time: 2016-12-26 17:34:20
*/

'use strict';

 const express = require("express")
 const router = express.Router()

 router.get('/',(req,res)=>{
 	res.render('index.html')
 })

 export default router
 

