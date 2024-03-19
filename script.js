// Para crear objetos de tipo Producto
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

//Creación de productos
let producto1 = new Producto("Remera Bob Esponja", 15000);
let producto2 = new Producto("Zapatillas Los Padrinos Magicos", 30000);
let producto3 = new Producto("Cuaderno Ben 10", 4500);
let producto4 = new Producto("Agenda KND Los Chicos del Barrio", 11000);
let producto5 = new Producto("Pelota Phineas y Ferb", 8000);

//Se crea una colección de productos
let listaProductos = [producto1, producto2, producto3, producto4, producto5];

// Función para crear el menú de opciones según la colección de productos
function crearMenuOpciones(productos){
    let menuOpciones = "Cuenta con las siguientes opciones:\n" +
        "(0) Salir\n";

    // Se itera la colección de productos para crear las opciones necesarias
    for (let i = 0; i < productos.length; i++) {
        let opcion = i+1;   // En producto en el índice n será la opción n+1 del menú.
        menuOpciones = menuOpciones + "("+ opcion +") " + productos[i].nombre + " - ARS " + productos[i].precio + "\n";
    }
    return menuOpciones;
}

// Función para pedir al usuario ingresar opción.
function pedirOpcion(productos) {
    return parseInt(prompt(crearMenuOpciones(productos) + "\nIngrese una opción: "));
}

let acumMonto = 0;      // Acumula el monto total
let opcion;     // Opción que ingrasa el usuario

do{
    opcion = pedirOpcion(listaProductos);

    if (opcion !== 0){
        if (opcion > 0 && opcion <= listaProductos.length){
            let indice = opcion - 1;    //El producto (n) en el menú corresponde al indice (n-1) de la colección de productos.

            alert("Agregado al carrito! " + listaProductos[indice].nombre + " - ARS " +listaProductos[indice].precio);
            acumMonto += listaProductos[indice].precio;
        }else {
            alert("El producto ingresado no existe")
        }
    }
    alert("Total Actual: ARS " + acumMonto);
}while (opcion !== 0);

alert("Monto Final: ARS " + acumMonto);