const express=require('express')
const { createFeedback, getAllFeedbacks, deleteFeedback } = require('../controllers/feedbackController')

const feedbackRoute=express.Router()

feedbackRoute.post('/newFeedback',createFeedback)
feedbackRoute.get('/getAllFeedbacks',getAllFeedbacks)
feedbackRoute.delete('/delete_feedback/:id',deleteFeedback)

module.exports=feedbackRoute