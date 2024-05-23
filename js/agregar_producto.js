import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

function agregar_producto(evento){
    evento.preventDefault();

    const nombreProducto = document.querySelector("[data-nombre]").value;
    const precioProducto = document.querySelector("[data-precio]").value;
    const imagenProducto = document.querySelector("[data-imagen]").value;

    console.log(nombreProducto, precioProducto, imagenProducto);
    conexionAPI.agregarProducto(nombreProducto,precioProducto,imagenProducto)
}

formulario.addEventListener('submit', evento => agregar_producto(evento))