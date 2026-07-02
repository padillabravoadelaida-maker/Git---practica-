function agregarCarrito(nombre, precio, imagen){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({
        nombre: nombre,
        precio: precio,
        imagen: imagen
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto añadido al carrito 🛒");
}

function buscarProducto(){

    let input = document.getElementById("input-busqueda");

    if(!input){
        return;
    }

    let texto = input.value.toLowerCase();

    let productos = [
        {nombre:"Camiseta", precio:69900, imagen:"img/h1.jpg"},
        {nombre:"Jean Wide", precio:89900, imagen:"img/producto1.jpg"},
        {nombre:"Crop Top Black", precio:49900, imagen:"img/promo1.jpg"},
        {nombre:"Chaqueta White", precio:79900, imagen:"img/m2.jpg"},
        {nombre:"Short dama", precio:89900, imagen:"img/m1.jpg"}
    ];

    let resultados = document.getElementById("resultados");

    if(!resultados){
        return;
    }

    resultados.innerHTML = "";

    let encontrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    if(encontrados.length === 0){
        resultados.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }

    encontrados.forEach(producto => {

        resultados.innerHTML += `
        <div class="producto">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <h3>${producto.nombre}</h3>

            <p>$${producto.precio.toLocaleString("es-CO")}</p>

            <button onclick="agregarCarrito('${producto.nombre}',${producto.precio},'${producto.imagen}')">
                Comprar
            </button>

        </div>
        `;

    });

}

function mostrarCarrito(){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let contenedor = document.getElementById("lista-carrito");

    if(!contenedor){
        return;
    }

    contenedor.innerHTML = "";

    let total = 0;

    if(carrito.length === 0){

        contenedor.innerHTML = "<h3>Tu carrito está vacío.</h3>";

    }else{

        carrito.forEach((producto, indice)=>{

            total += producto.precio;

            contenedor.innerHTML += `

            <div class="carrito-card">

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <div>

                    <h3>${producto.nombre}</h3>

                    <p>$${producto.precio.toLocaleString("es-CO")}</p>

                    <button class="btn-eliminar" onclick="eliminarProducto(${indice})">
                        🗑 Eliminar
                    </button>

                </div>

            </div>

            `;

        });

    }

    let cantidad = document.getElementById("cantidad-productos");
    let totalCompra = document.getElementById("total-compra");

    if(cantidad){
        cantidad.innerHTML = "Productos: " + carrito.length;
    }

    if(totalCompra){
        totalCompra.innerHTML = "Total: $" + total.toLocaleString("es-CO");
    }

}

function eliminarProducto(indice){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(indice,1);

    localStorage.setItem("carrito",JSON.stringify(carrito));

    mostrarCarrito();

}

function vaciarCarrito(){

    localStorage.removeItem("carrito");

    mostrarCarrito();

}

function finalizarCompra(){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if(carrito.length === 0){

        alert("🛒 Tu carrito está vacío.");

        return;

    }

    let confirmar = confirm(
        "¿Deseas finalizar tu compra en STYLE MATTELSA K?"
    );

    if(confirmar){

        alert("🎉 ¡Gracias por tu compra!\n\nTu pedido fue realizado con éxito.\n\n¡Vuelve pronto! ❤️");

        localStorage.removeItem("carrito");

        mostrarCarrito();

    }

}