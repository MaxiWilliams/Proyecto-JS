alert("hola, esta es una calculadora de prestamos bancarios")
alert("en el siguiente input ingrese la cantidad deseada a para su prestamo y cantidad de cuotas y el programa hara el trabajo")

const montoDeseado = prompt("Ingrese el monto deseado para su prestamo")
const cantidadDeCuotas = prompt("ahora la cantidad de cuotas")

let resultado = montoDeseado / cantidadDeCuotas

alert("por ahora, su prestamo sin interes queda en " + cantidadDeCuotas + " cuotas de $" + resultado)
alert("En el siguiente paso, ingrese su banco para calcular el interes del prestamo")

let banco = prompt("Ingrese su banco, las unicas posibilidades son: ICBC, Galicia, Santander, Nación. (Nota: escriba su banco exactamente como esta escrito en las opciones anteriores)")

switch(banco){
    case 'ICBC':
        let interesICBC = resultado * 1.05;
       alert("Con este banco tendra un interes del 5%, quedando asi en un monto de $" + interesICBC + " por cuota");
    break;

    case 'Galicia':
        let interesGalicia = resultado * 1.07;
        alert("Con este banco tendra un interes del 7%, quedando asi en un monto de $" + interesGalicia + " por cuota");
    break;

    case 'Santander':
        let interesSantander = resultado * 1.09;
        alert("Con este banco tendra un interes del 9%, quedando asi en un monto de $" + interesSantander + " por cuota");
    break;

    case 'Nación':
        let interesNación = resultado * 1.12;
        alert("Con este banco tendra un interes del 12%, quedando asi en un monto de $" + interesNación + " por cuota");
    break;
}


const opcionDePago = [
    {
        id:1,
        medioDePago: "Transferencia",
    },
    {
        id:2,
        medioDePago: "Debito",
    },
    {
        id:3,
        medioDePago: "Credito",
    },
]


const verOpciones = () => {
    let mensaje = "opciones de pago: \n";
    opcionDePago.forEach(el => {
        mensaje += '${el.id}- ${el.medioDePago}'
    })    
}


opcion = parseInt(prompt("elige la opcion que mas te convenga: \n 1-Transferencia \n 2-Debito \n 3-Credito"))


switch(opcion) {
    case 1:
        alert("Haz elegido el metodo 'Transferencia' \nAhora seguiremos con la fecha de la cita presencial");
        break;

    case 2:
        alert("Haz elegido el metodo 'Debito' \nAhora seguiremos con la fecha de la cita presencial");
        break;

    case 3:
        alert("Haz elegido el metodo 'Credito' \nAhora seguiremos con la fecha de la cita presencial");
        break;

    default:
        alert("Ingreso una opcion no valida");
        break;
    }


const meses = {
    0: "Enero",
    1: "Febrero",
    2: "Marzo",
    3: "Abril",
    4: "Mayo",
    5: "Junio",
    6: "Julio",
    7: "Agosto",
    8: "Septiembre",
    9: "Octubre",
    10: "Noviembre",
    11: "Diciembre",
};

    // Función selector de fechas
function mostrarSelectorFecha() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth();
    const ano = fechaActual.getFullYear();

    const fechaSeleccionada = prompt("Seleccione una fecha en formato dd/mm/aaaa:", `${dia}/${mes + 1}/${ano}`);

    if (fechaSeleccionada) {
        const [diaSeleccionado, mesSeleccionado, anoSeleccionado] = fechaSeleccionada.split("/");
        const fecha = new Date(anoSeleccionado, mesSeleccionado - 1, diaSeleccionado);

        if (isNaN(fecha)) {
            Swal.fire("Disculpe, fecha invalida");
        } else {
            const mensaje = `${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
            alert("Nos vemos el " + mensaje);
        }
    }
}

mostrarSelectorFecha();

//INICIO DE SESION

alert("Ahora procedera a iniciar sesion con el siguiente usuario y contraseña:\n Usuario: maximo\n Contraseña: 1234")

const baseDeDatos = [{
    usuario:"maximo",
    contraseña:"1234"
}];

const user = {
    usuario:"",
    contraseña:""
};

const usuarioExistente = JSON.parse(localStorage.getItem("usuario"));
const botonIniciar = document.getElementById("iniciar");
const app = document.querySelector("#login-container");
const inputs = document.querySelectorAll("input");

// if(usuarioExistente !== undefined){
//     app.innerHTML = `<h1 class='titulo'>Bienvenido/a de nuevo ${usuarioExistente.usuario}!</h1>`;
// }

botonIniciar.addEventListener("click", () => {
    const userFind = baseDeDatos.find((registro) => user.usuario === registro.usuario && user.contraseña === registro.contraseña);

    if (userFind !== undefined) {
        app.innerHTML = `<h1 class='titulo'>Bienvenido/a de nuevo ${userFind.usuario}!</h1>`;
        localStorage.setItem("usuario", JSON.stringify(userFind));
    } else {
        alert("Disculpe, el usuario y/o contraseña no coinciden");
    }
});


inputs.forEach((elemento) =>{
    elemento.addEventListener("input",(event)=>{
        if(event.target.name === "usuario"){
            user.usuario = event.target.value;
        }
        
        if(event.target.name === "contraseña"){
            user.contraseña = event.target.value;
        };
    });
});

