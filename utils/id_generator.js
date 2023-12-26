const generateUniqueId = require('generate-unique-id')
const generateId=()=>generateUniqueId({length:24,useNumbers:true})

module.exports=generateId