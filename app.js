// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []
// Funcion para agregar a un amigo a la lista usando enter, para mayor accesibilidad
document.getElementById('amigo').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

function agregarAmigo() {
    asignarTexto('#mensajeError', '');
    let nombreAmigo = document.getElementById('amigo').value; //Almacena el valor del campo de texto 

    //Verifica si el campo está vacío
    if (nombreAmigo == '') {
        asignarTexto('#mensajeError', 'Escribe un nombre valido');
        return;
    }
    //Verifica si el nombre ya esta en la lista
    if (listaAmigos.includes(nombreAmigo)) {
        asignarTexto('#mensajeError', 'Este amigo ya esta en la lista');
        nombreAmigo.value = '';
        return;
    }

    listaAmigos.push(nombreAmigo);
    limpiarCampo();
    mostrarAmigos();
}

//limpia el campo de texto
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
    return;
}

//Funcion util para asignar texto a un elemento HTML
//Recibe un selector de elemento y el texto a asignar
function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//Muestra la lista de amigos en el HTML
//Recorre el array y crea un elemento li por cada amigo
function mostrarAmigos() {
    let listaHTML = document.getElementById('listaAmigos')
    listaHTML.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        listaHTML.appendChild(li);
    }
}

//Función que se ejecuta al hacer click en el botón "Sorteo"
function sortearAmigo() {
    //Verifica si hay amigos en la lista antes de sortear
    if (listaAmigos.length === 0) {
        asignarTexto('#mensajeError', 'No hay amigos que sortear');
        return;
    }

    const i = Math.floor(Math.random() * listaAmigos.length)
    const amigoSecreto = listaAmigos[i]

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: <b>${amigoSecreto}</b></li>`

}

