const saludar = (nombre, apellidos, edad) =>  {
 return `hola ${nombre} ${apellidos} , usted tiene ${edad} años`;
}


const areaRectangulo = (base, altura) =>  {
    const result = +base * +altura
    return `area del rectangulo ${result}`;
   }
   console.log(areaRectangulo(2,5))




const areaRectanguloDos = (base, altura) => +base * +altura
    console.log(areaRectanguloDos(2,58))




// const esMayor = (edad) =>{
//     if (edad >= 18){
//         return "Es mayor de edad"
//     }else{
//         return "Es menor de edad"
//     }
// }

// console.log(edad(15))

// const esMayor2 = (edad) =>{
//     return edad >=18 ? "Es mayor de edad" : "Es menor de edad"
// }
// console.log(edad(18))


const contarArreglo = (arreglo) =>  arreglo.length > 5 ? "El arreglo es grande" : "Es menor que 5"


console.log(contarArreglo("luis","juan","pedro","ddd","sss","aaaa","sss",))