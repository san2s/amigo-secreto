// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []



function agregarAmigo(){
    asignarTexto('#mensajeError','');
    let nombreAmigo = document.getElementById('amigo').value;
    let resultado = document.querySelector('#resultado');
    
    if(nombreAmigo == ''){
        asignarTexto('#mensajeError','Escribe un nombre valido');
        return;
    }

    if (listaAmigos.includes(nombreAmigo)){
        asignarTexto('#mensajeError','Este amigo ya esta en la lista');
        nombreAmigo.value='';
        return;
    }

    listaAmigos.push(nombreAmigo);
    
    limpiarCampo();

    mostrarAmigos();
    
    console.log(listaAmigos)
}

function limpiarCampo(){
    document.querySelector('#amigo').value='';
    return;
}

function asignarTexto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//Repasar por que funciona
function mostrarAmigos(){
    let listaHTML = document.getElementById('listaAmigos')
    listaHTML.innerHTML ='';
    for (let i = 0;i<listaAmigos.length;i++){
        let li =document.createElement('li');
        li.textContent = listaAmigos[i];
        listaHTML.appendChild(li);
    }
}

function sortearAmigo(){
    if (listaAmigos.length === 0){
        asignarTexto('#mensajeError','No hay amigos que sortear');
        return;
    }

    const i = Math.floor(Math.random() * listaAmigos.length)
    const amigoSecreto = listaAmigos[i]

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: <b>${amigoSecreto}</b></li>`

}

