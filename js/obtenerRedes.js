//Redes
// const redes = [
//     {
//         id: 1,
//         nombre: 'facebook',
//         link: 'https://facebook.com/borahae.cba',
//         src: 'images/social_facebook_fb_35.png'
//     },
//     {
//         id: 2,
//         nombre: 'instagram',
//         link: 'https://instagram.com/borahae.cba',
//         src: 'images/social_instagram_3.png'
//     },
//     {
//         id: 3,
//         nombre: 'tiktok',
//         link: 'https://tiktok.com/@borahae.cba',
//         src: 'images/tiktok_logo_icon_186928.png'
//     },
//     {
//         id: 4,
//         nombre: 'whatsapp',
//         link: 'https://api.whatsapp.com/send?phone=5493516164148&text=Hola%2C%20quiero%20hacer%20una%20consulta',
//         src: 'images/whatsapp-black_100119.png'
//     }];



// jQuery(() => {

//     /*  Función agregar redes sociales dinámicamente y crearlos en el contenedor */
//     const insertarRedes = () => {     
//                 for (const red of redes) {
//                     $('#redSocial').append(`
//                     <li id="${red.id}">
//                     <a class="nav-link" href="${red.link}" target="_Blank">
//                     <img src="${red.src}" alt="${red.nombre}">
//                     </a>`);
//                 }
//     }   

//     insertarRedes();

// });

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