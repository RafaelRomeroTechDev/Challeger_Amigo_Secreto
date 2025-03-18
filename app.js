// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Voy a declarar un arreglo amigos para almacenar los nombres de los amigos
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

   
    if (!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();

    mostrarAmigos();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert("Debes agregar al menos 3 amigos");
        return;
    }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo que te toco es : ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}
