class ProductManager {
    constructor() {
      this.products = [];
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

  
    getProducts() {
      return this.products;
    }

  
    getProductById(id) {
      let myID = parseInt(id);
      let miPRoducto = null;
      this.products.forEach((producto) => {
        if (producto.id === myID) {
          miPRoducto = producto;
        }
      });
      if (miPRoducto === null) {
        return console.log("Este producto no existe");
      } else {
        return miPRoducto;
      }
    }
  }

  
  const productManager = new ProductManager();
  productManager.addProduct(
    "Camiseta titular Argentina",
    "Camiseta titular de la selección Argentina Messi Qatar 2022",
    20000,
    "https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg",
    "abc1234",
    100
  );
  productManager.addProduct(
    "Camiseta suplente Argentina",
    "Camiseta suplente de la selección Argentina Messi Qatar 2022",
    20000,
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a37248da803e40d08f48af04010aae24_9366/Camiseta_Suplente_Seleccion_Argentina_Messi_1_Azul_IQ5463_01_laydown.jpg",
    "abc1235",
    100
  );
  productManager.addProduct(
    "Short titular Argentina",
    "Shor titular de la selección Argentina Qatar 2022",
    13000,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/095/885/products/short-juego-argentina1-2b77fd6c0b763f88aa16622284057689-480-0.jpg",
    "abc1236",
    100
  );
  productManager.addProduct(
    "Short suplente Argentina",
    "Short suplente de la selección Argentina Qatar 2022",
    13000,
    "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0b9b8ba8/products/AD_HF1487/AD_HF1487-1.JPG",
    "abc1237",
    100
  );
  
  console.log("Mostrar todos los productos:", productManager.getProducts());
  
  //console.log("Buscar producto:", productManager.getProductById(2));