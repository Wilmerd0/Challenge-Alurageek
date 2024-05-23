import { conexionAPI } from "./conexionAPI.js";
import { listarProductos } from "./mostrarProducto.js";

const lista = document.querySelector("[data-lista]");

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener('submit', async evento => {
    evento.preventDefault();
    
    const nombreProducto = document.querySelector("[data-nombre]").value;
    const precioProducto = document.querySelector("[data-precio]").value;
    const imagenProducto = document.querySelector("[data-imagen]").value;

    console.log(nombreProducto, precioProducto, imagenProducto);
    await conexionAPI.agregarProducto(nombreProducto,precioProducto,imagenProducto)
    
    lista.innerHTML = "";
    init()
})

async function removeCard(id){
    await conexionAPI.eliminarProducto(id)
    init()
}

async function init(){
    const listaAPI = await conexionAPI.listarProductos();
    
    listarProductos(lista, listaAPI, removeCard)
}

init()