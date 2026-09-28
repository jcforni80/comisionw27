//Funciones de tiempo
//setIntervale
let contador = 0;

const intervalo = setInterval(() => {
  console.log(++contador);
}, 1000);

const detener = () => clearInterval(intervalo);

//setTimeout
//   setTimeout(() => {
//     console.log("Hola, buen día!");
//   }, 3000);

setTimeout(() => {
  const mensaje = confirm("Querés ir a la web de Rolling?");

  if (mensaje) {
    //   location.href = "https://web.rollingcodeschool.com";
    location.assign("https://web.rollingcodeschool.com");
  }
}, 3000);
