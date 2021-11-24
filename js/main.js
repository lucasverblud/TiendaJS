//DESAFIO CLASE1
// let numero1 = parseInt(prompt("Ingrese el primer valor númerico para la suma:"));
// let numero2 = parseInt(prompt("Ingrese el segundo valor númerico para la suma:"));

// let resultado = numero1 + numero2;

// alert("El resultado de la suma es: " + resultado)


//DESAFIO CLASE2
// let colorSemaforo   = prompt("Ingresar uno de los tres (3) colores del semáforo: ").toUpperCase();

// if((colorSemaforo !="") && ((colorSemaforo == "ROJO") || (colorSemaforo =="AMARRILLO") || (colorSemaforo =="VERDE")))
// {
//     alert("El color "+colorSemaforo+" ingresado es correcto"); 
// }
// else
// {
//     alert("El color "+colorSemaforo+" ingresado NO es correcto, no pertenece a uno de los tres (3) colores del semáforo."); 
// }


//DESAFÍO CLASE 3

// var texto = prompt("Ingrese primer texto a concatenar");
// var resultado = texto;

// var textoConcatenar = "";

// while (textoConcatenar != "ESC") {
//    textoConcatenar = prompt("Ingrese el siguiente texto a concatenar");
//    if (textoConcatenar != "ESC"){
//     resultado = resultado + " " + textoConcatenar;  
//    }
//    console.log(resultado);
// }


// function solicitarNombre(){
//    let nombreIngresado   = prompt("Ingresar nombre");
//    alert("El nombre ingresado es " + nombreIngresado);
// } 
// solicitarNombre();
// solicitarNombre();
// solicitarNombre();

// //Declaración de variable para guardar el resultado de la suma
// let resultado = 0;
// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero;
// }
// //Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje);
// }
// //Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);            
// mostrar(resultado); 

// function sumar(primerNumero, segundoNumero) {
//    return primerNumero + segundoNumero;
// }
// let resultado = sumar(5, 8);
// console.log(resultado);


// function calculadora(primerNumero, segundoNumero, operacion) {
//    switch (operacion) {
//        case "+":
//            return primerNumero + segundoNumero;
//            break;
//        case "-":
//            return primerNumero - segundoNumero;
//            break;
//        case "*":
//            return primerNumero * segundoNumero;
//            break;
//        case "/":
//            return primerNumero / segundoNumero;
//            break;
//        default:
//            return 0;
//            break;
//    }
// }
// console.log(calculadora(10, 5, "+"));

// //Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
// const suma  = function (a, b) { return a + b };
// const resta = function (a, b) { return a - b };
// console.log(suma(15,20));
// console.log(resta(15,5));

// const suma  = (a, b) => { return a + b };
// //Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
// const resta = (a, b) =>  a - b ;
// console.log(suma(15,20));
// console.log(resta(20,5));


// const suma  = (a,b) => a + b;
// const resta = (a,b) => a - b;
// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
// const iva   = x => x * 0.21;
// let precioProducto  = 100; 
// let precioDescuento = 30;  
// //Calculo el precioProducto + IVA - precioDescueto
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
// console.log(nuevoPrecio);


// // DESAFIO CLASE 4
// let total = 0;
// let descuento = 1.15;
// let iva = 1.21;
// let envio = 500;

// function agregarAlCarrito() {

//     do {
//         let producto = prompt("¿Querés comprar remera, buzo o ambos?", "Ej: ambos");
//         let cantidad = parseInt(prompt("¿Cuantos queres comprar?", 0));

//         let precio = 0;

//         switch (producto) {
//             case "remera" :
//                 precio = 2000;
//                 break;
//             case "buzo" :
//                 precio = 3000;
//                 break;
//             case "ambos" :
//                 precio = 4800;
//                 break;
//             default :
//                 alert("Alguno de los datos ingresados es incorrecto");
//                 precio = 0;
//                 cantidad = 0;
//         }

//         total = total + precio * cantidad;
//         otroProducto = confirm("¿Querés agregar otro producto? Monto total hasta el momento $"+total);
//     } while (otroProducto);
// }

// function aplicarDescuento(total) {
//     if(total >= 7000) {
//         total = total * descuento;
//         alert("Tenes un descuento extra por superar el monto de $7000. Monto total hasta el momento $"+total);
//     }
//     return total;
// }

// function aplicarIva(total)
// {
//    total = total * iva;
//    alert("El costo final con IVA incluido es $"+total);
//    return total;
// }

// function calcularEnvio(total) {
//     let confirmacion = confirm("¿Querés envío a domicilio?");

//     if( confirmacion && total >= 5000) {
//         alert("Tenés envio gratis. El total de tu compra es $"+total);
//     } else if ( confirmacion && total < 2000 && total != 0) {
//        total = total + 500;
//         alert("El envío cuesta $500. El total de tu compra es $"+ total);
        
//     } else {
//         alert("El total de tu compra es $"+total);
//     }

//     return total;
// }

// agregarAlCarrito();
// calcularEnvio(aplicarIva(aplicarDescuento(total)));
// confirm("¿Confirmar compra?");

// DESAFIO COMPLEMENTARIO CLASE 4

// alert("Verificar si 2 números son múltiplos");

// const resto = (a , b)  => a % b;

//  let numero1 = parseInt(prompt("Ingrese primer valor", 0));
//  let numero2 = parseInt(prompt("Ingrese segundo valor", 0));

//  let resultado = resto(numero1,numero2);
//  console.log(resultado);
//    if (resultado==0){
//       alert(numero1 + " es múltiplo de " + numero2);
//    }else{
//       alert(numero1 + " NO es múltiplo de " + numero2);
//    }

// DESAFIO CLASE 6
// let producto = 0;
// let cantidadProducto = 0;
// let precio = 0;

// class Pedido {
    // constructor(producto, precio, cantidad){
        // this.producto = producto,
        // this.precio = precio,
        // this.cantidad = cantidad,
        // this.envio = 0,
        // this.subTotal = 0,
        // this.total = 0
    // }

    // calcularSubTotal() {
        // this.subTotal = this.precio * this.cantidad;
    // }

    // calcularIva() {
        // return this.subTotal * 0.21;
    // }

    // calcularEnvio() {
        // if(this.subTotal >= 9000) {
            // this.envio = 0;
        // } else {
            // this.envio = 650;
        // }
    // }

    // calcularTotal() {
        // this.total = this.subTotal + this.envio + this.calcularIva();
    // }
// }


// function pedidoProducto() {
    // while(!producto || producto == 0 || producto > 4) {
        // producto = parseInt(prompt("¿Qué producto desea comprar?:\n 1:Remera($2000)\n 2:Buzo($3000)\n 3:Medias($1000)\n 4:Accesorios($800)"));
    // }

    // switch(producto){
        // case 1:
            // producto = "Remera";
            // precio = 2000;
            // break;
        // case 2:
            // producto = "Buzo";
            // precio = 3000;
            // break;
        // case 3:
            // producto = "Medias";
            // precio = 1000;
            // break;
        // case 4:
            // producto = "Accesorios";
            // precio = 800;
            // break;
    // }

    // while(!cantidadProducto || cantidadProducto == 0){
        // cantidadProducto = parseInt(prompt("Producto elegido: "+ producto + "\n Introduzca la cantidad deseada.(sólo números)"));
    // }

    // return new Pedido(producto, precio, cantidadProducto)
    
// }

// alert("Bienvenida/o a la tienda");

// const pedido = pedidoProducto();

// pedido.calcularSubTotal();
// pedido.calcularIva();
// pedido.calcularEnvio();
// pedido.calcularTotal();

// const productoDetalle1 = {producto:pedido.producto,cantidad:pedido.cantidad,precio:pedido.precio * pedido.cantidad,precioIva:pedido.calcularIva(),precioEnvio:pedido.envio,precioTotal:pedido.total};

// alert("Detalle del pedido:\n"+
    // "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" +
    // "- IVA 21%: $" + pedido.calcularIva() + "\n" +
    // "- Costo de envío: $" + pedido.envio + "\n" +
    // "Total = $" + pedido.total
// );

 // producto = 0;
 // cantidadProducto = 0;
 // precio = 0;

// if(confirm("¿Desea comprar otro producto?")){
    // const pedido1 = pedidoProducto();

    // pedido1.calcularSubTotal();
    // pedido1.calcularIva();
    // pedido1.calcularEnvio();
    // pedido1.calcularTotal();
    
    // const productoDetalles = [productoDetalle1,{producto:pedido1.producto,cantidad:pedido1.cantidad,precio:pedido1.precio * pedido1.cantidad,precioIva:pedido1.calcularIva(),precioEnvio:pedido1.envio,precioTotal:pedido1.total}];

    // console.log(productoDetalles);

    // alert("Detalle del pedido:\n"+
        // "- " + pedido1.producto + " x " + pedido1.cantidad + ": $" + pedido1.precio * pedido1.cantidad +"\n" +
        // "- IVA 21%: $" + pedido1.calcularIva() + "\n" +
        // "- Costo de envío: $" + pedido1.envio + "\n" +
        // "Total = $" + pedido1.total
    // );

    // productoDetalles.sort(function (a, b) {
        // if (a.producto > b.producto) {
          // return 1;
        // }
        // if (a.producto < b.producto) {
          // return -1;
        // }
        // // a must be equal to b
        // return 0;
      // });
      // console.log(items);
// };
// console.log(productoDetalles);
