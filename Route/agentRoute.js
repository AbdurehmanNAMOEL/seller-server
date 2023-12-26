const express=require('express')
const { 
 createAgent, 
 login, 
 getAgentInfo, 
 getAllAgentInfo, 
 updatedPassword, 
 updateAgentInfo
} = require('../controllers/agentController')

const agentRoute=express.Router()

agentRoute.post('/create_new_agent',createAgent)
agentRoute.put('/update_agent_info',updateAgentInfo)
agentRoute.post('/login',login)
agentRoute.get('/get_agent_info/:id',getAgentInfo)
agentRoute.get('/get_all_agents_info',getAllAgentInfo)
agentRoute.put('/update_password',updatedPassword)

module.exports=agentRoute