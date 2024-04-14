const express=require('express')
const { 
 createAgent, 
 login, 
 getAgentInfo, 
 getAllAgentInfo, 
 updatedPassword, 
 updateAgentInfo,
 agentCount,
 getAgentWithLocation,
 updateAgentStatus,
 updateAgentPublicId,
 updateAgentProfileImage
} = require('../controllers/agentController')

const agentRoute=express.Router()

agentRoute.post('/create_new_agent',createAgent)
agentRoute.put('/update_agent_info',updateAgentInfo)
agentRoute.put('/update_agent_public_id',updateAgentPublicId)
agentRoute.put('/update_agent_profile_image',updateAgentProfileImage)
agentRoute.put('/update_agent_info',updateAgentInfo)
agentRoute.post('/agent_login',login)
agentRoute.get('/get_agent_info/:id',getAgentInfo)
agentRoute.get('/get_all_agents_info',getAllAgentInfo)
agentRoute.get('/agentCount',agentCount)
agentRoute.get('/get_agents_based_on_location/:id',getAgentWithLocation)
agentRoute.put('/update_password',updatedPassword)
agentRoute.put('/update_agent_status/:id',updateAgentStatus)

module.exports=agentRoute