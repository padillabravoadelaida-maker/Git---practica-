function agregarCarrito(){
    alert("Producto añadido al carrito 🛒");
}
function buscarProducto(){

    let texto = document.getElementById("input-busqueda").value.toLowerCase();

    let productos = [
        {nombre: "Camiseta", precio: 69900, imagen: "img/h1.jpg"},
        {nombre: "Jean Wide", precio: 89900, imagen: "img/producto1.jpg"},
        {nombre: "Crop Top Black", precio: 49900, imagen: "img/promo1.jpg"},
        {nombre: "Chaqueta withe", precio: 79900, imagen: "img/m2.jpg"},
        {nombre: "Short dama", precio: 89900,   imagen : "img/m1.jpg"},
    ];

    let resultados = document.getElementById("resultados");

    resultados.innerHTML = "";

    let encontrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(texto)
    );

    if(encontrados.length === 0){
        resultados.innerHTML = "<p>No se encontraron productos</p>";
        return;
    }

    encontrados.forEach(p => {
        resultados.innerHTML += `
            <div class="producto">
                <img src="${p.imagen}">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <button onclick="agregarCarrito('${p.nombre}', ${p.precio}, '${p.imagen}')">
                    Comprar
                </button>
            </div>
        `;
    });

}