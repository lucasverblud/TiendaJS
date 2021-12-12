const URLredes = "json/redes.json"

jQuery(() => {

    /*  Función agregar redes sociales dinámicamente y crearlos en el contenedor */
    const insertarRedes = () => {
        $.get(URLredes, (respuesta, estado) => {
            console.log(respuesta);
            console.log(estado);
            if (estado === "success") {
                for (const red of respuesta) {
                    $('#redSocial').append(`
                    <li id="${red.id}">
                    <a class="nav-link" href="${red.link}" target="_Blank">
                    <img src="${red.src}" alt="${red.nombre}">
                    </a>`);
                }
            }
        })
    }   

    insertarRedes();

});