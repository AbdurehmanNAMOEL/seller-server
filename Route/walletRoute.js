const express=require('express')
const { createWallet, getAgentWallet, updateWallet } = require('../controllers/walletController')

const walletRoute=express.Router()

walletRoute.post('/create+wallet',createWallet)
walletRoute.get('/get_agent_wallet/:id',getAgentWallet)
walletRoute.put('/update_wallet/:id',updateWallet)

module.exports=walletRoute