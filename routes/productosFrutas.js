const express = require("express");
const router = express.Router();
const { getItems,getItem,getEnRango,createItem,updateItem,deleteItem } = require("../controllers/productoFruta.controller")
//TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get('/', getItems);
router.get('/producto',getItem);
router.get('/enRango',getEnRango);
router.post('/nuevoProducto/', createItem);
router.put('/editarProducto/:id', updateItem);
router.delete('/eliminarProducto/:id', deleteItem);


module.exports = router