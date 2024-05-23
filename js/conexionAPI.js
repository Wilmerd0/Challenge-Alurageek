async function listarProductos(){
    const conexion = await fetch("http://localhost:3000/productos");
    const conexionConvertida = await conexion.json();

    return conexionConvertida
};

async function agregarProducto(nombre,precio,imagen){
    const conexion = await fetch("http://localhost:3000/productos",{
        method:"POST",
        headers:{"Content-type":"aplication/json"},
        body:JSON.stringify({
            nombre,
            precio,
            imagen,
            id:crypto.randomUUID()
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
};

async function eliminarProducto(id){
    const conexion = await fetch("http://localhost:3000/productos/" + id,{
        method:"DELETE"       
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
};

export const conexionAPI = {
    listarProductos,agregarProducto,eliminarProducto
}