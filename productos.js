// Clase para crear objetos producto
class Producto{
    constructor(id, categoria, nombre, precio) {
        this._id = id;
        this._categoria = categoria;
        this._nombre = nombre;
        this._precio = precio;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(value) {
        this._categoria = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }
    toString(){
        return `id: ${this.id} \ncategoria: ${this.categoria} \nnombre: ${this.nombre} \nprecio: ${this.precio}`;
    }
}

//Creación de productos
// let producto1 = new Producto("Remera Bob Esponja", 15000);
// let producto2 = new Producto("Zapatillas Los Padrinos Magicos", 30000);
// let producto3 = new Producto("Cuaderno Ben 10", 4500);
// let producto4 = new Producto("Agenda KND Los Chicos del Barrio", 11000);
// let producto5 = new Producto("Pelota Phineas y Ferb", 8000);

//Se crea una colección de productos
const listaProductos = [
    new Producto(1,"Ropa", "Remera Bob Esponja", 15000),
    new Producto(2,"Calzado", "Zapatillas Los Padrinos Mágicos", 30000),
    new Producto(3,"Papelería", "Cuaderno Ben 10", 4500),
    new Producto(4,"Papelería", "Agenda KND Los Chicos del Barrio", 11000),
    new Producto(5,"Juguetes", "Pelota Phineas y Ferb", 8000),
    new Producto(6,"Escolar", "Mochila Mansión Foster para amigos imaginarios", 25000),
    new Producto(7,"Accesorios", "Botella de agua Jóvenes Titanes", 3500),
    new Producto(8,"Papelería", "Lápices de colores Danny Phantom", 5000),
    new Producto(9,"Papelería", "Set de stickers Rugrats", 2000),
    new Producto(10,"Accesorios", "Bolso Las Chicas Super Poderosas", 18000),
    new Producto(11,"Accesorios", "Gorra Invasor Zim", 7000),
    new Producto(12,"Papelería", "Libreta El laboratorio de Dexter", 6000),
    new Producto(13,"Ropa", "Pijama Johnny Bravo", 22000),
    new Producto(14,"Accesorios", "Reloj Coraje el perro cobarde", 12000),
    new Producto(15,"Accesorios", "Cartera Cat-Dog", 19000),
    new Producto(16,"Cocina", "Taza Ed, Edd y Eddy", 4000),
    new Producto(17,"Hogar", "Almohada Duelo Xiaolins", 15000),
    new Producto(18,"Juguetes", "Puzzle Los Sustitutos", 10000),
    new Producto(19,"Cocina", "Termo Las aventuras de Brandy y el Sr. Bigotes", 25000),
    new Producto(20,"Accesorios", "Llavero Kim Possible", 3500),
    new Producto(21,"Accesorios", "Candado Jake Long: El dragón occidental", 8000),
    new Producto(22,"Juguetes", "Juego de mesa Los Picapiedras", 18000),
    new Producto(23,"Calzado", "Pantuflas La Vida Moderna de Rocko", 28000),
    new Producto(24,"Ropa", "Camiseta Hey Arnold!", 20000),
    new Producto(25,"Escolar", "Set de pinceles Dave el Bárbaro", 15000),
    new Producto(26,"Papelería", "Cuaderno de dibujo Mansión Foster para amigos imaginarios", 12000),
    new Producto(27,"Disfraces", "Máscara de Carnaval Los Castores Cascarrabias", 10000),
    new Producto(28,"Electrónica", "Porta CD's Jimmy Neutron", 8000),
    new Producto(29,"Accesorios", "Monedero Las Chicas Super Poderosas", 16000),
    new Producto(30,"Exteriores", "Lona para picnic Los Picapiedras", 30000)
];