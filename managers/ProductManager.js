const fs = require("fs/promises")
const {existsSync} = require("fs")

class ProductManager {
  
  constructor(path){
    this.path = path
}

    async readFile(){
      return await fs.readFile(this.path,"utf-8")
  }


  async writeFile(string){
      return await fs.writeFile(this.path, string,"utf-8")
  }

  
    addProduct(title, description, price, thumbnail, code, stock) {
      const producto = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      
      if (
        title === undefined ||
        description === undefined ||
        price === undefined ||
        thumbnail === undefined ||
        code === undefined ||
        stock === undefined
      ) {
        return console.log("Todos los campos son obligatorios");
      }
  
      let condition = this.products.find((producto) => producto.code === code);
      if (condition) {
        return console.log("Este producto ya existe");
      } else {
        this.products.push(producto);
      }
    }


    async updateProduct(id,newProperties){
      const productos = await this.getProducts()
      const foundProduct = await this.getProductsById(id)
  
      const productUpdated = {...foundProduct, ...newProperties}
  
      const updatedList = productos.map(elem=>{
          if(elem.id=== productUpdated.id){
              return productUpdated
          }else{
              return elem
          }
      })
  
      const stringList = await JSON.stringify(updatedList,null, "\t")
  
      await this.writeFile(stringList)
      return stringList
  }
  

  async getProducts(){
    try {
        if(existsSync(this.path)){
            const productsString = await this.readFile()
            const products = await JSON.parse(productsString);
            return products
        }else{
            return [];
        }
      } catch (error) {
        throw new Error(error)
    }
  } 


  async getProductsById(id){

    try {
      const products = await this.getProducts()
      const foundProduct = products.find(elem=> elem.id===id);

      if(!foundProduct){
          throw new Error("Ese producto no existe")
      }

      return foundProduct;
    } catch (error) {
      console.log(error.message)
    }
  }


  deleteProduct(id) {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.products = JSON.parse(data);
          const index = this.products.findIndex((product) => product.id === id);
          this.products.splice(index, 1);
          fs.writeFile(
            this.path,
            JSON.stringify(this.products, null, "\t"),
            (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        }
      });
    });
  }

}
  //console.log("Mostrar todos los productos:", productManager.getProducts());
  
  //console.log("Buscar producto:", productManager.getProductById(2));

module.exports = ProductManager