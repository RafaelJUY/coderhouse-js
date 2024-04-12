let acumMonto = 0;      // Acumula el monto total
let opcion;     // Opción que ingrasa el usuario
const carrito = [];

do{
    opcion = pedirOpcion(listaProductos);

    if (opcion.toUpperCase() === "B"){
        let idProducto= parseInt(prompt("Ingrese el ID del producto: "));

        let productoEncontrado = listaProductos.find(prod => prod.id === idProducto);

        if (productoEncontrado !== undefined){
            let agregar = prompt("El producto es el siguiente: \n\n" + productoEncontrado + "\n\nDesea agregarlo al carrito (y/n)?");
            if (agregar.toLowerCase() === "y"){
                agregarAlCarrito(productoEncontrado);
            }
        }else{
            alert("El producto no existe")
        }
    } else if (opcion.toUpperCase() === "C"){
        let categoria = prompt("Las categorias son las siguientes: \n" + obtenerCategorias())

        let productosEntontrados = [];
        productosEntontrados = listaProductos.filter(prod => prod.categoria.toUpperCase() === categoria.toUpperCase());

        console.log(productosEntontrados)
        if (productosEntontrados.length > 0){
            for (let i = 0; i < productosEntontrados.length; i++) {
                console.log(productosEntontrados[i].toString());
            }
            let agregar= prompt("Desea agregar un producto (y/n)");
            if( agregar.toLowerCase() === "y"){
                let idProducto= parseInt(prompt("Ingrese el ID del producto: "));

                let productoEncontrado = listaProductos.find(prod => prod.id === idProducto);

                if (productoEncontrado !== undefined){
                    agregarAlCarrito(productoEncontrado);
                }else{
                    alert("El producto no existe")
                }
            }
        }else{
            console.log("No se encontraron productos de esa categoria")
        }

    }else if(opcion.toUpperCase() === "T"){
        for (let i = 0; i < listaProductos.length; i++) {
            console.log("Listando todos los productos! ")
            console.log(listaProductos[i].toString());
        }
        let agregar= prompt("Desea agregar un producto (y/n)");
        if( agregar.toLowerCase() === "y"){
            let idProducto= parseInt(prompt("Ingrese el ID del producto: "));

            let productoEncontrado = listaProductos.find(prod => prod.id === idProducto);

            if (productoEncontrado !== undefined){
                agregarAlCarrito(productoEncontrado);
            }else{
                alert("El producto no existe")
            }
        }
    }
}while (opcion.toUpperCase() !== "S");

console.log("Sucarrito contiene: ")
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].toString());
    acumMonto += carrito[i].precio;
}
alert("Monto Final: ARS " + acumMonto);