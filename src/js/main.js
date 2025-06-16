// let message

// message="Soy Daniel Rojas"
// // message="Soy un coder de riwi"

// alert(message)

// // const tipoDeSangre = "O+"

// // // Daniel Rojas

// // // Camel case
// // danielRojasEcheverria

// // let nombre
// // let nombreCompleto
// // let fechaDeNacimiento
// // let numeroDeIdentidad

// // // Snake case
// // daniel_rojas_echeverria

// // // Pascal case
// // danielRojasEcheverria

// // // Kebat case
// // daniel-rojas-echeverria

// console.log(message);
// console.error(message);
// console.warn(message);

// let edad = prompt(message="Ingresa tu edad:")

let myWeight;
let myHeight;
let imc;

myWeight = prompt((message = "Please, type your wieght"));
myWeight =parseInt(myWeight);

myHeight = prompt((message = "Please, type your hieght"));
myHeight =parseFloat(myHeight);

imc = myWeight / (myHeight**2)
