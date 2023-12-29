const express=require('express')
const { createWallet, getAgentWallet } = require('../controllers/walletController')

const walletRoute=express.Router()

walletRoute.post('/create+wallet',createWallet)
walletRoute.get('/get_agent_wallet/:id',getAgentWallet)

module.exports=walletRoute