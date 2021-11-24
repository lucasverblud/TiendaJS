const URL = "json/productos.json"
// jquery ready
jQuery(() => {
 // Recupero carrito en localstorage
    const productoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

    const insertarProductos = () => {
        $.get(URL, (respuesta, estado) => {
            console.log(respuesta);
            console.log(estado);
            if (estado === "success") {
                for (const producto of respuesta) {
                    $('#divProductos').append(`
                    <div class="col mb-5" id="${producto.id}">
                    <div class="card h-100">
                    <!-- Sale badge-->
                    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Oferta</div>
                    <!-- Product image-->
                    <img class="card-img-top" src="${producto.imagen}" alt="..." />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">${producto.nombre}</h5>
                            <p class="card-text">${producto.codigo}</p>
                            <!-- Product reviews-->
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            <!-- Product price-->
                            <span class="text-muted text-decoration-line-through">$${producto.precioLista}</span>
                            $${producto.precio}
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Añadir</a></div>
                    </div>
                    </div>`)

                    $(`#${producto.id}`).on("click", function () {
                        insertarProductosACanasta(producto);
                    });
                }
            }
        });
    }

    insertarProductos();

    // Recupero carrito en localstorage
    if (productoLocalStorage !== null) {
        for (const producto of productoLocalStorage) {
            insertarProductosACanasta(producto);
        }
    }
});