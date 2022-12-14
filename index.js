const ProductManager = require("./managers/ProductManager");

const manager = new ProductManager("./data/Productos.json")

const queries = async ()=>{

    try {

        console.log("Actualizar producto")
        const list = await manager.updateProduct(1,{price:17000, stock:150})
        console.log(list)

        console.log("Eliminar producto")
        const borrar = await manager.deleteProduct(3)
        console.log(borrar)

    } catch (error) {
        console.log(error)
    }
}

queries()