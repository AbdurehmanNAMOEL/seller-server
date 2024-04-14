const express=require('express')
const { createNotification, getAllNotification, getAgentAllNotification } = require('../controllers/notificationController')

const notificationRoute=express.Router()

notificationRoute.post('/new_notification',createNotification)
notificationRoute.get('/get_all_notifications',getAllNotification)
notificationRoute.get('/get_agent_all_notifications/:id',getAgentAllNotification)

module.exports=notificationRoute