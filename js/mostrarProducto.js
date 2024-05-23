import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard (nombre,precio,imagen){
    const producto = document.createElement("div");
    producto.className="card";
    producto.innerHTML=`
    <img src="${imagen}" alt="${nombre}">
    <h2>${nombre}</h2>
    <p class="price">$${precio}</p>
    <p><button>Remove</button></p>`;
    
    console.log(producto);
    return producto;

}


async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos()

    console.log(listaAPI)

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre,producto.precio,producto.imagen)));
}

listarProductos()