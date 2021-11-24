//Productos
const productos = [
    {
        id: 1,
        codigo: '000001',
        nombre: 'MagicShop',
        imagen: 'images/Buzo1.jpeg',
        precioLista: '3800',
        precio: '3500'
    },
    {
        id: 2,
        codigo: '000002',
        nombre: 'Bangtan',
        imagen: 'images/Buzo4.jpeg',
        precioLista: '3800',
        precio: '3500'
    },
    {
        id: 3,
        codigo: '000003',
        nombre: 'MobPsycho',
        imagen: 'images/Buzo2.jpeg',
        precioLista: '3800',
        precio: '3500'
    },
    {
        id: 4,
        codigo: '000004',
        nombre: 'ButterBlack',
        imagen: 'images/Buzo5.jpeg',
        precioLista: '3800',
        precio: '3500'
    },
    {
        id: 5,
        codigo: '000005',
        nombre: 'PermissionToDance',
        imagen: 'images/Remera1.jpeg',
        precioLista: '2600',
        precio: '2200'
    },
    {
        id: 6,
        codigo: '000006',
        nombre: 'PermissionToDanceN1',
        imagen: 'images/Remera4.jpeg',
        precioLista: '2600',
        precio: '2200'
    },
    {
        id: 7,
        codigo: '000007',
        nombre: 'PTD',
        imagen: 'images/Remera2.jpeg',
        precioLista: '2600',
        precio: '2200'
    },
    {
        id: 8,
        codigo: '000008',
        nombre: 'PermissionToDanceN2',
        imagen: 'images/Remera5.jpeg',
        precioLista: '2600',
        precio: '2200'
    }];



jQuery(() => {

    const productoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

    const insertarProductos = () => {
        for (const producto of productos) {
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

    insertarProductos();

    if (productoLocalStorage !== null) {
        for (const producto of productoLocalStorage) {
            insertarProductosACanasta(producto);
        }
    }
});
