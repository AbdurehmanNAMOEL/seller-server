const express = require('express');
const { createGemStone,getGemStone,updateStone,deleteStone, getAllGemStone, getAllStone} = require('../controllers/gemStoneController');
const protect = require('../middleWare/authMiddleWare')
const gemStoneRoute = express.Router()
gemStoneRoute.post('/upload',protect,createGemStone)
gemStoneRoute.get('/getStone',getGemStone)
gemStoneRoute.get('/stone',getAllGemStone)
gemStoneRoute.put('/edit/:id',protect,updateStone)
gemStoneRoute.delete('/delete/:id',protect,deleteStone)

module.exports= gemStoneRoute