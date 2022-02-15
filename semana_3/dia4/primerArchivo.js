// const numero1 = 10
// const numero2 = 20

// let resultado = 0

// resultado = numero1 + numero2

// console.log("Resultado: " + numero1 + "+" + numero2 + "=" + resultado)
// console.log(resultado)


// //otro propiedad del console.log 
// console.log("Sumatoria:", resultado)


// //existe el console.error y console.warn
// //console.error es para errores
// //console.warn es para 

// console.error("suma error uno",resultado)
// console.error("suma error dos",resultado)
// console.error("suma error tres",resultado)

// console.warn("suma error uno",resultado)
// console.warn("suma error dos",resultado)
// console.warn("suma error tres",resultado)

// //abre una ventana tipo alerta pero la cual nos permite ingresar valor
// //y el valor se guarda em la variable
// const valor1 = prompt("Ingrese un valor1")
// const valor2 = prompt("Ingrese un valor2")


// //nesecito que el usuario ingrese el tipo de operacion
// const operacion = prompt("Ingrese una operacion puede ser + - * /  ")

// let resultadoCalculadora = 0

// //+ : colocamos el simbolo delante de la variable y esta se convierte en number
// if (operacion === "+"){
//     resultadoCalculadora = +valor1 + +valor2
//     console.log("Resultado: ", resultadoCalculadora)
// } else if (operacion === "-"){
//     resultadoCalculadora = +valor1 - +valor2
//     console.log("Resultado: ", resultadoCalculadora)
// }else if (operacion === "*"){
//     resultadoCalculadora = +valor1 * +valor2
//     console.log("Resultado: ", resultadoCalculadora)
// }else if (operacion === "/"){
//     if (+valor2 !== 0){
//         resultadoCalculadora = +valor1 / +valor2
//         console.log("Resultado: ", resultadoCalculadora)
//     }else{
//         console.error("El divisor debe ser distinto")
//     }
// }else{
//     console.error("Operacion no valida")
// }



// //haremos un algoritmo para poder detectar si un numero es par o impar

// const numeroMultiplo = 12
// // la forma en la que puedo saber si un numero es par es usando el %
// //por que es una operacion que brinda el residuo

// // mod = %
// if (numeroMultiplo % 2 === 0){
//     console.log("Numero multiplo de 2: ", numeroMultiplo)
// }
//  if (numeroMultiplo % 3 ===0){
//      console.log("Numnero multiplo de 3: ", numeroMultiplo )
//  }


const valor1 = +prompt("Ingrese un valor1")
const valor2 = +prompt("Ingrese un valor2")
const valor3 = +prompt("Ingrese un valor3")



let resultado = "el numero mayor es 3"

if (valor1 > valor2 && valor1 > valor3 ){
    resultado = "el numero mayor es 2"
}else if(valor2 > valor1 && valor2 > valor3){
    resultado = "El numero mayor es 1"
}
console.log(resultado)


//vamos a ver como usar los operadores and y or
//&& : and
//|| : or
