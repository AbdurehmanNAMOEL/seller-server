const express=require('express')
const { createWallet, getAgentWallet } = require('../controllers/walletController')

const walletRoute=express.Router()

walletRoute.post('/new_notification',createWallet)
walletRoute.get('/get_agent_wallet/:id',getAgentWallet)

module.exports=walletRoute