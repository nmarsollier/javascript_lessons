

function multiplicar(number1, number2) {
    if(!isNumber(number1)) {
        throw "number 1 debe ser numerico"
    }
    if(!isNumber(number2)) {
        throw "number 2 debe ser numerico"
    }

    return number1 * number2
}


function sumar(number1, number2) {
    // validar parametros == 2
    if(!isNumber(number1)) {
        throw "number 1 debe ser numerico"
    }
    if(!isNumber(number2)) {
        throw "number 2 debe ser numerico"
    }

    return number1 + number2
}


/*
- sumar tipos de datos invalidos (bool, string, sruct, etc) , no numericos en parametro 1
- sumar tipos de datos invalidos, no numericos en parametro 2
- sumar tipos de datos invalidos, no numericos en parametro 1 y 2
- sumar valores undefined en parametro 1
- sumar valores undefined en parametro 2
- sumar valores undefined en parametro 1, 2
- validar mas de 2 parametros
- validar menos de 2 parametrs

- sumar un set de numeros variados que resultan validos

- En cada lugar donde se llame a la funcion, testearla con todas las posibilidades que
  ese negocio permita
*/



function agregarUsuario(usuario) {
    --
}

