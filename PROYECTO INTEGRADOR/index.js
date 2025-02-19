/* let fechaventa, valorventa, saldo,indice,fechaultimopago

function ingresaDatos (a){
    b=prompt("ingrese "+a+": ")
    return b
}
function nuevopago(){
    let pagar=prompt("desea realizar un pago si/no")
    if (pagar=="si"){
        let fechapago=ingresaDatos("fecha de pago")
        let valorpago=parseFloat(ingresaDatos("importe pago"))
    saldo=(saldo*(fechapago-fechaultimopago)*indice)-(valorpago) 
    fechaultimopago=fechapago   
    }
}
function venta(){
    fechaventa=ingresaDatos("fecha de hoy")
    fechaultimopago=fechaventa
    valorventa= ingresaDatos("valor de venta")
    saldo=valorventa
    indice= ingresaDatos ("indique el indice de actualizacion diario")

}
function saldarcuenta(){
    if(saldo>0){
        nuevopago()
    }else if(saldo==0){
        alert("ya esta todo en orden")
    }
else{alert("pagaste de mas "+(-saldo))

}
}

venta()
saldarcuenta()
 */
let fechaventa, valorventa, saldo, indice, fechaultimopago;

function ingresaDatos(a, tipo) {
    let b
    if (tipo === "fecha") {
        do {
            b = prompt("Ingrese " + a + ": ");
            c = validaFecha(b)
           
        } while (c == false) return new Date( b)
    } else if (tipo === "numero") {
        do {
            b = prompt("Ingrese " + a + ": ");
            c = validaDatos(b)
        } while (c == false) return b
    }
}

function validaDatos(num) {
    if (isNaN(num)) {
        alert("Valor no válido");
        return false;
    } else { return true }
}

function validaFecha(fech) {
    let fecha = new Date(fech);
    if (isNaN(fecha.getTime())) { // Validamos si la fecha es incorrecta
        alert("Fecha no válida");
        return false;
    } else {
        return true;
    }
}

function venta() {
    fechaventa = ingresaDatos("fecha de hoy (formato: YYYY-MM-DD)", "fecha");
    fechaultimopago = fechaventa;
    valorventa = parseFloat(ingresaDatos("valor de venta", "numero"));

    saldo = valorventa;
    indice = parseFloat(ingresaDatos("indique el índice de actualización diario", "numero"));

}
function nuevopago() {
    let pagar = prompt("¿Desea realizar un pago? si/no");
    if (pagar == "si") {
        let fechapago = ingresaDatos("fecha de pago (formato: YYYY-MM-DD)", "fecha");


        let valorpago = parseFloat(ingresaDatos("importe de pago", "numero"));

        let difDias = (fechapago - fechaultimopago) / (1000 * 3600 * 24);
        saldo = (saldo * (1 + (difDias * indice))) - valorpago;
        fechaultimopago = fechapago;
        alert("Saldo actualizado. Nuevo saldo: " + saldo);
    }
}



function saldarcuenta() {
    do {
        if (saldo > 0) {
            nuevopago();
        } else if (saldo == 0) {
            alert("Ya está todo en orden");
        } else {
            alert("Pagaste de más: " + (-saldo));
        }
    } while (saldo > 0)
}

venta();
saldarcuenta();
