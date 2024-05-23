export function crearCard (nombre,precio,imagen,id, callback){
    const productoPadre = document.createElement("div");
    const boton = document.createElement("button");
    boton.textContent = "remove";
    boton.id = id;

    productoPadre.className="card";
    productoPadre.innerHTML=`
    <img src="${imagen}" alt="${nombre}">
    <h2>${nombre}</h2>
    <p class="price">$${precio}</p>`;
    productoPadre.appendChild(boton)
    boton.onclick = () => callback(id)

    return productoPadre;
}

export async function listarProductos(listaReference, lista, callback){
    if(lista.length == 0) {
        listaReference.innerHTML=`<h2 style="font-size:28px; margin: auto; padding: 25px">No se encuentran productos</h2>`
        return;
    }
    lista.forEach(({nombre,precio,imagen,id}) => listaReference.appendChild(crearCard(nombre,precio,imagen,id, callback)));
}