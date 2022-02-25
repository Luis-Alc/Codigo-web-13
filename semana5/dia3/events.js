//* addEventListener
//* La forma de JS moderno me permite agregar los eventos de una forma
//* mas legible
const btnPrueba = document.querySelector("#btn-prueba");

function showAlert(icon, title, text) {
  Swal.fire({
    icon,
    title,
    text,
    footer: "<a href='https://google.com'>Link de footer</a>",
  });
}

btnPrueba.onclick = function (event) {
  console.log("click desde el boton");
  console.log(event);
  Swal.fire("Hola mundo");
};

const btnPregunta = document.querySelector("#btn-pregunta");

btnPregunta.onclick = function () {
  Swal.fire("Alguna pregunta", "Aca el texto de la pregunta", "question");
};

const btnError = document.querySelector("#btn-error");

btnError.onclick = function () {
  showAlert("error", "Hubo un error", "Email or Password erroneos");
};

const btnWarning = document.querySelector("#btn-warning");
btnWarning.onclick = function () {
  showAlert("warning", "Hay una alerta de peligro", "El peligro se acerca");
};

const btnSuccess = document.querySelector("#btn-success");
btnSuccess.onclick = function () {
  showAlert("success", "Todo ok", "Todo salio bien");
};

const btnInfo = document.querySelector("#btn-info");
btnInfo.onclick = function () {
  showAlert("info", "Informacion", "Mensaje informativo de mi alerta");
};


const btnalertabotones = document.querySelector("#btn-alerta-botones")
btnalertabotones.onclick = function (){
    Swal.fire({
        title: "Alerta",
        text: "Texto de confirmacion",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: "Nel pastel"
    }).then((resultado) => {
        if (resultado.isConfirmed){
            console.log("Marco la confirmacion")
        }
        if (resultado.isDenied){
            console.log("Marco la negacion")
        }
        if (resultado.isDismissed){
            console.log("Marco la cancelacion")
        }
    })
}



const btAlertaNotificacion = document.querySelector("#btn-alerta-notificacion")
btAlertaNotificacion.onclick = function(){
    Swal.fire({
        position:"top-end",
        icon: "success",
        title: "notificacion",
        showConfirmButton: false,
        timer: 3000
    })
}

const urlMarvel = "https://www.cinemascomics.com/wp-content/uploads/2022/02/villanos-marvel-comics-960x720.jpg"

const btnAlertaImagen = document.querySelector("#btn-alerta-imagen")
btnAlertaImagen.onclick = function(){
    Swal.fire({
        title: "Alerta",
        text: "Alerta con imagen",
        imageUrl: urlMarvel,
        imageWidth: 300,
        imageHeight: 300
    })
}


const btnAlertaCusctom = document.querySelector("#btn-alerta-custom")
btnAlertaCusctom.onclick = function(){
    Swal.fire({
        title: "Cuscton Alert",
        text: "Alerta Customizada",
        background: `url(${urlMarvel})`,
        color: "#fff",
        backdrop: `
        rgba(0, 0, 0, 0.3)
        url(https://img.wattpad.com/0f711afbf77212fed761298e59a14d7ee67a4ecd/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a685678534b64646741542d67773d3d2d313233322e313466643438323962316136303466653438343435323037303931382e676966)
        left top
        no-repeat`

    })
}

const btnAlertaInputs = document.querySelector("#btn-alerta-inputs")
btnAlertaInputs.onclick = function(){
    Swal.fire({
        title: "Input para email",
        input: "email",
        inputLabel: "Ingrese su correo",
        inputPlaceholder: "El correodebe ser valido"
    }).then((resultado) => {
        console.log(resultado.value)
    })
}
const paises = document.querySelector("#select-opciones");

// onchange: Sirve para detectar si hay un cambio en mi elemento
paises.onchange = function (event) {
  // de evento quiero obtener el value y options
  const { value, options } = event.target;

  console.log("valor de event", value);
  const index = options.selectedIndex;
  console.log("index", index);
  console.log("texto", options[index].text);
};



// const usuario = {
//   nombre: "Pepe",
//   apellido: "Zapata",
//   edad: 30,
//   direccion: {
//     calle: "Calle falsa",
//     numero: "123",
//     ciudad: "Madrid",
//   },
// };

// // Estoy lo puedo descomponer en una variable
// // Estos es conocido como destructuracion de objetos
// const { nombre, apellido, edad, direccion } = usuario;
// console.log(nombre); // Pepe