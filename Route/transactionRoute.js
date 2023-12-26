const express=require('express')
const { createTransaction, getAllTransaction, getAgentTransaction } = require('../controllers/transactionController')

const transactionRoute=express.Router()

transactionRoute.post('/new_notification',createTransaction)
transactionRoute.get('/get_all_transaction',getAllTransaction)
transactionRoute.get('/get_all_transaction/:id',getAgentTransaction)

module.exports=transactionRoute