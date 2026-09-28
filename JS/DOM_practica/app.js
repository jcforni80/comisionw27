//Lista de productos
const productos = [
  { id: 1, title: "Pizza", icon: "🍕", price: 5000 },
  { id: 2, title: "Hamburguesa", icon: "🍔", price: 4500 },
  { id: 3, title: "Papas", icon: "🍟", price: 2000 },
  { id: 4, title: "Ensalada", icon: "🥗", price: 5000 },
];

//variable del carrito
const carrito = [];

const containerCards = document.getElementById("container-cards");
const containerCart = document.querySelector("#container-cart");

//generemos las tarjetas de los productos del array
const generateCardsProducts = () => {
  //ALGORITMO
  //ENTRADA: array de productos
  //PROCESOS: Recorrer el array y por cada producto crear la tarjeta. Donde se va a renderizar
  //SALIDA: Las tarjetas renderizadas en el navegador dentro de su contenedor

  productos.map((producto) => {
    const col = document.createElement("div"); //creando un nodo
    col.classList = "col mb-3";
    //<div class="col"></div>
    const card = /*HTML */ `<div class="card">
              <div class="card-body">
                <h5 class="card-title">${producto.title} ${producto.icon}</h5>
                <p class="card-text fs-3">$${producto.price}</p>
                <div class="d-grid">
                <button class="btn btn-outline-success" onclick="addCart(${producto.id})">🧺Agregar</button>
                </div>
              </div>
            </div>`;
    col.innerHTML = card;
    containerCards.append(col);
  });
};

const addCart = (idProduct) => {
  console.log(idProduct);
  //find()
  console.log(productos.find((producto) => producto.id === idProduct));
};

generateCardsProducts();
