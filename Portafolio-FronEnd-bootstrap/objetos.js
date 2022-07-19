// saludo
let saludo = "Hola" ;
console.log(saludo +" Programadores! "+ " 🤗");



// informacion personal
function mostrarInformacion(){
    document.getElementById('desaparecer').style.display= 'block';
}
function cerrarInformacion(){
    document.getElementById('desaparecer').style.display = 'none';
}

// TECNOLOGIAS

function mostrarContainer(){
    document.getElementById('container').style.display= 'block';
}
function cerrarContainer(){
    document.getElementById('container').style.display = 'none';
}
// BOTON EDITAR

function cambiarParrafo(){
    document.getElementById('edit-input').style.display = 'block';
    document.getElementById('ocultarTexto').style.display = 'none';
}


// mostrat interes

// function mostrar(){
//     document.getElementById('interes').style.display= 'block';
// }

// function cerrar(){
//     document.getElementById('interes').style.display = 'none';
// }


// fecha de año
const año= new Date();
let year = año.getFullYear();
document.getElementById("anio").innerHTML = year;
