// Función para crear el menú de opciones según una colección de productos
function crearMenuOpciones(){
    return "Cuenta con las siguientes opciones:\n" +
        "(B) Buscar por ID de producto\n" +
        "(C) Buscar por Categoria\n" +
        "(T) Ver todos los productos\n" +
        "(S) Salir\n";
}

// Función para pedir al usuario ingresar opción.
function pedirOpcion() {
    return prompt(crearMenuOpciones() + "\nIngrese una opción: ");
}

function agregarAlCarrito(producto){
    carrito.push(producto);
}

function obtenerCategorias(){
    let categoriasSet = new Set();

    // Iterar sobre la lista de productos y agregar categorías al conjunto
    listaProductos.forEach(producto => {
        categoriasSet.add(producto.categoria);
    });

    // Convertir el conjunto de categorías a un array y unirlo con guiones medios
    return Array.from(categoriasSet).join("\n");
}