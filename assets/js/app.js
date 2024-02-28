//2. Se crean dos variables con sus respectivos valores
const numeroX = prompt("Ingrese numero 1");
const numeroY = prompt("Ingrese numero 2");

// Se suman ambas variables y el resultado se guarda en una nueva
// Se muestra el resultado en la consola
const suma = parseInt(numeroX) + parseInt(numeroY)

const resta = parseInt(numeroX) - parseInt(numeroY)

const multiplicacion = parseInt(numeroX) * parseInt(numeroY)

const division = parseInt(numeroX) / parseInt(numeroY)

const resto = parseInt(numeroX) % parseInt(numeroY)

// Se muestra el resultado en la consola
console.log(`Los resultados de la sumatoria de las constantes matematicas basicas son:
${suma} + ${resta} + ${multiplicacion} + ${division} + ${resto} = ${suma + resta + multiplicacion + division + resto}. `)


// 3. Ingresar la temperatura en grados Celsius y que
// se transforme a grados Kelvin y Fahrenheit.
const celsius = prompt("Ingrese grados Celsius");
const kelvin = +(celsius) + 273.15;
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius}°C = ${kelvin}°K = ${fahrenheit}°F`);


// 4. Programa años, semanas, días
function convertirDias() {
    const cantidadDias = parseInt(prompt("Ingrese la cantidad de días:"));
    const anios = Math.floor(cantidadDias / 365);
    const semanas = Math.floor((cantidadDias % 365) / 7);
    const dias = Math.floor(cantidadDias % 7);

    console.log(`${anios} Años, ${semanas} semanas y ${dias - 1} días`);
} convertirDias();

// 5. Calculos
const numeroA = parseInt(prompt("Ingrese número A"));
const numeroB = parseInt(prompt("Ingrese número B"));
const numeroC = parseInt(prompt("Ingrese número C"));
const numeroD = parseInt(prompt("Ingrese número D"));
const numeroE = parseInt(prompt("Ingrese número E"));

const adicion = (numeroA + numeroB + numeroC + numeroD + numeroE);
const promedio = Math.floor(numeroA + numeroB + numeroC + numeroD + numeroE) / 5;
const promRound = Math.round(promedio);

console.log(`Suma : ${adicion}`)
console.log(`Promedio : ${promRound}`)