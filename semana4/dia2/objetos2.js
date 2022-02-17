//! primera formade usar una funcion dentro de un objeto

const persona = {
    edad: 23,
    nombre: "juan",
    apellido: "vasquet",
    calcularEdad: function (){
        console.log("calculando la edad")
    },
};

console.log("1er forma")
persona.calcularEdad();

console.log("2er forma")
persona.calcularEdad;



//todo: Ejemplo
//? vamos a ver como acceder a las propiedades desde una funcion interna
//! this = va a permitir acceder a los datos del objeto padre
// const computadora ={
//     marca: "asus",
//     memoria: "8 GB",
//     peso: 2.5,
//     nuevo:true,

//     mostrarDetalle: function () {
//         console.log("marca", this.marca)
//     },

//     //     //! en los arrays no existen los this, solo se accede con function(mal escrito)
//     // mostrarDetalleCompleto: () => {
//     //     console.log("Detalle", `Marca: ${marca}, Memoria: ${memoria}`)
//     // },

    
//         //! en los arrays no existen los this, solo se accede con function
//     mostrarDetalleCompleto: function() {
//         console.log("Detalle", `Marca: ${marca}, Memoria: ${memoria}, Nuevo: ${this.nuevo ? "si" : "no"}`)
//     },
// }
// // computadora.mostrarDetalle();

// computadora.mostrarDetalleCompleto();



//! this va a permitir accede a los datos del objeto padre
const computadora = {
    color: "azul",
    marca: "HP",
    nuevo: true,
    mostrarDetalle: function () {
      // color no pertenece al ambito de la funcion
      console.log("color", this.color);
    },
    mostrarDetalleCompleto: function () {
      //! En los arrow function this no existe
      console.log(
        "Detalle",
        `Color: ${this.color} Marca: ${this.marca} Es nuevo? ${
          this.nuevo ? "Si" : "No"
        }`
      );
    },
  };

  computadora.mostrarDetalleCompleto();



  //! Objetos con array

  const alumno = {
    nombre: "Juanito",
    notas: [10, 5, 16],
    cursos: ["HTML", "CSS", "JS"],
  }

  console.log("Notas",alumno.notas);



  //! Creando un array de objetos

  const alumnos = [
      {
          nombre: "Pepito",
          edad: 18,
          promedio: 15,
      },
      {
          nombre: "El pepe",
          edad: 21,
          promedio: 16
      },
  ];

  console.log(`Nombre de ${alumnos[0].nombre}`)


for (let obj = 0; obj < alumnos.length; obj++){
    if(alumnos[obj].edad < 20){
        console.log("el nombre es",alumnos[obj].nombre)
    }
}

for (let obj = 0; obj < alumnos.length; obj++){
    if(alumnos[obj].edad < 30){
        console.log(`El alumno mayor es ${alumnos[obj].nombre}`)
    }
}





  //**En una web siempre estan presentes los arrays de objetos */

  //* Creemos un array de laptops

  const laptop = [
      {
          marca: "Lenovo",
          mobre: "Ide Centre AIO I3",
          caracteristicas: {
              procesador: "i3",
              discoDuro: "1TR HDD"
          }
      },
      {
        marca: "Lenovo",
        mobre: "Ide Centre AIO I3",
        caracteristicas: {
            procesador: "i3",
            discoDuro: "1TR HDD"
        }
    },
  ]

console.log(laptop)


//? Key con numeros
const listaUtiles = {
    1: "hojas bon",
    2: "plumones"
}
console.log(listaUtiles["1"])


//? objetos dentro de objetos
const componentes = {
    nombre: "lenovo",
    caracteristicas:{
        ram: 16,
        memoria: 512,
        extra:{
            pantalla: "4K"
        }
    }
}

console.log(componentes.caracteristicas.ram)
console.log(componentes.caracteristicas.extra.pantalla)





const tiendaMacBook = [
    {
        marca: "MacBook",
        nombre: "Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, Space Gray)",
        foto: "https://www.bhphotovideo.com",
        precio: "$2,699",
        ShippingRestriction: "No shipping to PERU",
        caracteristicas: {
            1: "Apple M1 Pro 10-Core Chip",
            2: "16GB Unified RAM | 1TB SSD",
            3: "16.2 3456 x 2234 Liquid Retina XDR Screen",
            4: "16-Core GPU | 16-Core Neural Engine",
            5: "Wi-Fi 6 (802.11ax) | Bluetooth 5.0"
        }
    },
    {
        marca: "MacBook",
        nombre: "Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, Space Gray)",
        foto: "https://www.bhphotovideo.com",
        precio: "$2,449",
        ShippingRestriction: "No shipping to PERU",
        caracteristicas: {
            1: "Apple M1 Pro 10-Core Chip",
            2: "16GB Unified RAM | 512GB SSD",
            3: "16.2 3456 x 2234 Liquid Retina XDR Screen",
            4: "16-Core GPU | 16-Core Neural Engine",
            5: "Wi-Fi 6 (802.11ax) | Bluetooth 5.0"
        }
    },
    {
        marca: "MacBook",
        nombre: "Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, Silver)",
        foto: "https://www.bhphotovideo.com",
        precio: "$2,699",
        ShippingRestriction: "No shipping to PERU",
        caracteristicas: {
            1: "Apple M1 Pro 10-Core Chip",
            2: "16GB Unified RAM | 1TB SSD",
            3: "16.2 3456 x 2234 Liquid Retina XDR Screen",
            4: "16-Core GPU | 16-Core Neural Engine",
            5: "Wi-Fi 6 (802.11ax) | Bluetooth 5.0"
        }
    },
]

for (let o=0;o < tiendaMacBook.length; o++){
    console.log(tiendaMacBook[o].nombre)
    console.log(tiendaMacBook[o].precio)
}

