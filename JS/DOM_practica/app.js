//Lista de productos
const productos = [
  { id: 1, title: "Pizza", icon: "🍕", price: 5000 },
  { id: 2, title: "Hamburguesa", icon: "🍔", price: 4500 },
  { id: 3, title: "Papas Fritas", icon: "🍟", price: 2000 },
  { id: 4, title: "Hot Dog", icon: "🌭", price: 2500 },
  { id: 5, title: "Taco", icon: "🌮", price: 3000 },
  { id: 6, title: "Sushi", icon: "🍣", price: 8500 },
  { id: 7, title: "Burrito", icon: "🌯", price: 4000 },
  { id: 8, title: "Empanada", icon: "🥟", price: 1200 },
  { id: 9, title: "Helado", icon: "🍦", price: 2200 },
  { id: 10, title: "Donut", icon: "🍩", price: 1500 },
  { id: 11, title: "Pasta", icon: "🍝", price: 6000 },
  { id: 12, title: "Sándwich", icon: "🥪", price: 3500 },
];

//variable del carrito
let carrito = [];

const containerCards = document.getElementById("container-cards");
const containerCart = document.querySelector("#container-cart");
const inputText = document.getElementById("search-input");

//Guardar productos del carrito en localStorage-------------------------
const generateDataBase = () => {
  const dataBase = JSON.parse(localStorage.getItem("carrito")) || [];

  if (dataBase.length > 0) {
    // carrito = dataBase;❌
    carrito = dataBase.slice(0);
    // carrito.push("banana"); //["banana"]
    // console.log(dataBase); // ["banana"]
    generateCardsCart();
  }
};
//-----------------------------------------------------------

//generemos las tarjetas de los productos del array
const generateCardsProducts = (array = productos) => {
  //ALGORITMO
  //ENTRADA: array de productos
  //PROCESOS: Recorrer el array y por cada producto crear la tarjeta. Donde se va a renderizar
  //SALIDA: Las tarjetas renderizadas en el navegador dentro de su contenedor
  containerCards.innerHTML = "";

  if (array.length > 0) {
    array.map((producto) => {
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
  } else {
    const col = document.createElement("div"); //creando un nodo
    col.classList = "col mb-3";
    const message = `<h3 class="my-3">No hay productos para mostrar</h3>`;
    col.innerHTML = message;
    containerCards.append(col);
  }
};

//Agregar  productos al carrito
const addCart = (idProduct) => {
  console.log(idProduct);
  //find()
  const productFind = productos.find((producto) => producto.id === idProduct);
  const searchProduct = carrito.find((prod) => prod.id === idProduct);

  if (!searchProduct) {
    carrito.push(productFind);
    alert("✅Producto agregado al carrito");
    //Guardo carrito---------------------------------------
    localStorage.setItem("carrito", JSON.stringify(carrito));
    //------------------------------------------------------
    generateCardsCart();
  } else {
    alert("❌El producto ya se encuentra en el carrito");
  }
};

const calcTot = () => {
  //calcular el precio total de los productos que hay en el carrito
  //ALGORITMO
  /*
ENTRADA: el array carrito
PROCESO: voy a recorrer cada elemento del carrito, voy a ir sumando el precio de cada uno de 
los productos y guardándolo en un acumulador.
SALIDA: el valor almacenado en el acumulador
*/

  const total = carrito.reduce((acum, produc) => acum + produc.price, 0);
  document.querySelector("#tot").textContent = total;
  // const propina = (total * 10) / 100;
  // document.querySelector("#propina").textContent = propina;
  // const impuesto = (total * 21) / 100;
  // document.querySelector("#impuesto").textContent = impuesto;
  // const totalFinal = total + propina + impuesto;
  // document.getElementById("total-final").textContent = totalFinal;
};

//Generar tarjetas o info en el carrito
const generateCardsCart = () => {
  containerCart.innerHTML = "";
  carrito.map((item) => {
    const content = document.createElement("div");
    content.classList = "row";

    const datos = /*HTML*/ `<div class="col fw-bold d-flex align-items-center">
    <p>${item.icon} ${item.title} <span class="text-danger pointer" onclick="deleteProductCart(${item.id})">x</span></p>
    <div class="col d-flex justify-content-end align-items-center">
    <p>$${item.price}</p>
    </div>
  </div>`;

    content.innerHTML = datos;
    /*
    <div class="row">
      <div class="col fw-bold d-flex align-items-center">
          <p>${item.icon} ${item.title}</p>
          <div class="col d-flex justify-content-end align-items-center">
          <p>$${item.price}</p>
          </div>
      </div>
    </div>
    */
    containerCart.append(content);
  });
  calcTot();
};

const deleteProductCart = (id) => {
  //buscar la posición del elemento a borrar usando el id
  const index = carrito.findIndex((item) => item.id === id); //posición del producto en el carrito || -1
  if (index >= 0) {
    const validar = confirm(
      `Estás seguro que querés borrar ${carrito[index].title} del carrito?`,
    );

    if (validar) {
      //método de arrays para borrar elementos
      carrito.splice(index, 1);
      //Guardo carrito---------------------------------------
      localStorage.setItem("carrito", JSON.stringify(carrito));
      //------------------------------------------------------
      generateCardsCart();
    }
  }
};

const filterProducts = () => {
  //filter()
  //Crea un nuevo array con todos elementos que coincidan con la condición
  const filtro = productos.filter((product) =>
    product.title.toLowerCase().includes(inputText.value.toLowerCase()),
  );
  generateCardsProducts(filtro);
};

//BUSCADOR V.1
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  filterProducts();
  // console.log(filtro);
});

//BUSCADOR V.2
inputText.addEventListener("input", filterProducts);

generateDataBase();
generateCardsProducts();
//WEBSTORAGE
