const express=require('express')
const { createNotification, getAllNotification } = require('../controllers/notificationController')

const notificationRoute=express.Router()

notificationRoute.post('/new_notification',createNotification)
notificationRoute.get('/get_all_notifications',getAllNotification)

module.exports=notificationRoute