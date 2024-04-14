const express=require('express')
const { createTestimonial, getAllTestimonials } = require('../controllers/testimonialController')

const testimonialRoute=express.Router()

testimonialRoute.post('/newTestimonial',createTestimonial)
testimonialRoute.get('/getAllTestimonials',getAllTestimonials)

module.exports=testimonialRoute