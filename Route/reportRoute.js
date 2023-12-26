const express=require('express')
const { createReport, getAllReports } = require('../controllers/reportController')

const reportRoute=express.Router()

reportRoute.post('/new_report',createReport)
reportRoute.get('/get_all_reports',getAllReports)

module.exports=reportRoute