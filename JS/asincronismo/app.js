//PROMESA

const miPromesa = () => {
  return new Promise((resolve, reject) => {
    let exito = true;
    setTimeout(() => {
      if (exito) {
        resolve("Tarea terminada ✅");
      } else {
        reject("Falló la tarea ❌");
      }
    }, 3000);
  });
};

miPromesa()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
//   .finally(() => console.log("Ejecución terminada"));

let peliculas = [];

fetch("https://devsapihub.com/api-fast-food")
  .then((response) => response.json())
  .then((datos) => console.log(datos));
