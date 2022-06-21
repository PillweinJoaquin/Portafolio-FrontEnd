// saludo
let saludo = "Hola" ;
console.log(saludo +" Programadores! "+ " 🤗");

function mostrarInformacion(){
    document.getElementById('desaparecer').style.display= 'block';
}
function cerrarInformacion(){
    document.getElementById('desaparecer').style.display = 'none';
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
