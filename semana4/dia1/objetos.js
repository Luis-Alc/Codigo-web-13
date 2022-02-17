// //? un objeto es una entidad independiente ahora, este tiene propiedades y atributos

// //* Atributos de una auto
// //! numero de puertas
// //! color
// //! motor

// //? un objeto esta compuesto por una KEY(llave) y un VALUE(valor)

// //? creemos el objeto carro
// //! [] = declarar array
// //! {} = declarar objetos
// //! color: "Azul" => (color) es el KEY, ("Asul") el value

// const carro = {
//     color: "Azul",
//     motor: 1.2,
//     modelo: "GTR",
//     marca: "Nissan"
// };

// //! agregar elementos al objeto

// // carro.celular = "99999"


// //! codigo antiguo

// carro["caballos"] = "9898998"
// console.log(carro)


// //? creando objetos de la forma antigua
// //! otra forma de crear objertos

// const laptopUno = new Object(),
// modelo = "ss",
// peso = 2.5,
// color = "Negro";



// // const laptopDos = new Object(),
// // modelo = "ASUS",
// // peso = 2.5,
// // color = "Negro";
// // console.log(laptopDos)


//** CREANDO UN OBJETO */
const celular = {
    nombre : "Note 10S",
    flexibilidad : false,
    tamano : 6.1,
    gama : "alta",
};
//**Cambiando el valor de un KEY en el objeto */

const mostrarDetalleCelular = (celularObjeto) =>{
    return `El modelo es ${celularObjeto.nombre} y la gama es ${celularObjeto.gama}`
}
console.log(mostrarDetalleCelular(celular))


const usuario = {
    nickname: "loquitoProgramador01",
    email: "loqui@gmail.com",
    password: "******",
    carnetEvaluacion: true,
    location: "Peru",
    level: "Pro",
    edad: 18,
}

//! OPERADOR TERNARIO OJO SE USA COMO IF(?) Y ELSE(:)

const validacionUsuario = (usuario) => {
    const {nickname,location, level} = usuario;
    return location==="Peru" ? `Tu nickname es ${nickname} y tu level es ${level}` : "Oye tu nickname no es Peruano"
}
console.log(validacionUsuario(usuario))

