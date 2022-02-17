// una arreglo es un conjunto de datos 
// ** la forma en que declaramos un  arrego es pareceida la de una variable


// !! esto es un arreglo vacio, para poder llenanorlo yo debe colocar los datos separado por comas

//!! :eye: siempre empezar a contar los indices desde el 0
const alumnos = ["Erick", "Karina", "Patricia", "kjaris", "Bruno"];
let transporte = ["", "avion", "barco"];
console.log("alumnos", alumnos);

//** Pueda contener datos de distintos tipos */
// @@ -30,3 +30,20 @@ console.log("alumno reasignado", alumnos);

alumnos[5] = "Erick";
console.log("Creando un nuevo elemento", alumnos);

alumnos[6] = "Joel";
console.log("Creando un nuevo elemento", alumnos);

// ** como puede saber cuantos elementos contiene un array?
// ** los array tienen una funcion llamada length la cual nos permite saber cuantos elementos tiene el array
console.log("Cantidad de elementos", alumnos.length);

//! quiero agregar un elemento en la ultima posicion del array

// esto en que posicion añade a juan?
alumnos[alumnos.length] = "Juan";
console.log("Creando un nuevo elemento", alumnos);

//** Y si quiero obtener el ultimo elemento de mi array? */
// .length retorna un number 
console.log("ultimo elemento", alumnos[alumnos.length - 1]);