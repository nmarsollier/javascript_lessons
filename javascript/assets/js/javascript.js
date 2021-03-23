// console.log es una forma de imprimir en la consola
console.log("Variables");

// Alfanuméricos
// const define una constante, no se puede modificar el valor al que apunta
// No significa que el objeto al que apunte sea inmutable, pero no podemos cambiar la referencia
// para que apunte a otro obj
const constante = "esta es una constante";

// let define variables
let variableLet = "esta es una variable con let";

// En un contexto delimitado, por ejemplo un bloque de estructura
function letTest() {
    let x = 31;
    if (true) {
        let x = 71; // Define una variable nueva dentro del bloque if
        console.log(x); // 71
    }
    console.log(x); // 31
}

// Por otro lado no se puede redefinir la misma variable con let
if (x) {
    let foo;
    let foo; // Terminamos con un SyntaxError.
    var foo; // Igual tendríamos SyntaxError
}

//  no podemos usarlas antes de que sean definidos
function let_something() {
    console.log(foo); // ReferenceError: foo no está definido
    let foo = 2;

    for (let i = 0; i < 10; i++) {
        console.log(i); // 0, 1, 2, 3, 4 ... 9
    }

    console.log(i); // ReferenceError: i is not defined
}


// Var define variables, similar a let pero es scope es a función, por lo tanto
// puede darnos resultados inesperados.
function varTest() {
    var x = 31;
    if (true) {
        var x = 71; // Misma variable, no se define una nueva
        console.log(x); // 71
    }
    console.log(x); // 71
}

// Por otro lado se puede redefinir la misma variable con var
if (x) {
    var foo;
    var foo; // Todo bien, es la misma variable
}

//   podemos usarlas antes de que sean definidas
function var_something() {
    console.log(foo); // undefined
    var foo = 2;

    for (var i = 0; i < 10; i++) {
        console.log(i); // 0, 1, 2, 3, 4 ... 9
    }

    console.log(i); // valor 10
}


// Ejemplos
let cadena2 = "Cadena compuesta con 'comillas simples'";
let cadena3 = 'Cadena con "comillas dobles" y caracteres unicode \u0041';
let cadenaConcatenada = 'Cadena ' + "concatenada";
let template = `Templates a partir de ES5 ${cadena2}`
let cadenaLarga = `
    Hola soy una cadena larga
`;

//Los nombres pueden tener alfanumericos, '$' y '_' . No deben empezar con numeros.
let $numero1;
let _$letra;

let $$$otroNumero;
let $_a__$4;

// Tipos de datos :
// 1- Boolean. true y false.
// 2- null. Una palabra clave especial que denota un valor nulo. Como JavaScript es case-sensitive, 
//    null no es lo mismo que Null, NULL, o cualquier otra variante.
// 3- undefined. Una propiedad de alto nivel cuyo valor no es definido.
// 4- Number. Un número entero o un número con coma flotante. Por ejemplo: 42 o 3.14159.
// 5- BigInt. Un número entero con precisión arbitraria. Por ejemplo: 9007199254740992n
// 6- String. Una secuencia de caracteres que representan un valor "Hola"
// 7- Symbol (nuevo en ECMAScript 6). Un tipo de dato cuyas casos son únicos e inmutables
// 8- Object : Objetos personalizados

let variableNumerica = 12; // Todo numero es un double de 64 bits. Una division de enteros retorna double.

let variableBooleana = true; // Una variable booleana.

let cadenaDeTexto = "Esta es una cadena de texto con caracteres especiales \\ \" \' \t \n "; // Una cadena de caracteres.

let cadenaConComillas = "Esta es una cadena con \"comillas \""; // Incluir comillas dentro de una cadena

let cadenaCombinandoComillas = 'Esta es una cadena con "comillas" tambien. '; // Se pueden utilizar comillas simples y dobles.

let cadenaUnicod = "Cadena con caracteres unicode \u0041 "; // Caracteres unicode comienzan con \u

//Asigancion y Expresiones

let asignacionNumerica = variableNumerica; // Podemos asingar un valor de una variable a otra.

let expresionNumerica = variableNumerica * 10; // Podemos deinir numeros como expresion

let expresionBooleana = variableNumerica == 12; // Un valor booleano desde una expresion.

let iExpresionBooleana1 = 12 == '12'; // Evalua a true

let dExpresionBooleana2 = 12 === '12'; // Evalua a falso

let sConcatenacionCadenas = "El valor de Variable Numerica es " + variableNumerica; // Si concatenamos String con numero el resultado es String

let concatenacionStrBoolean = "El valor de expresionBooleana1 es " + expresionBooleana1; // Resulta en cadena

let concatenacionYSuma = 2 + 2 + " es cuatro. "; // La suma se evalua de izquierda a derecha "4 es cuatro"

let numero1 = 4564.84567;

// Para evitar confusiones es bueno utilizar funciones de conversion como
// parseInt(), parseFloat()

// toFixed redondea los numeros
console.log(numero1.toFixed(2)); // 4564.85
console.log(numero1.toFixed(6)); // 4564.845670
console.log(numero1.toFixed()); // 4565

//Undefined y null
let objetoUndefined; // = undefined  es una variable declarada, pero nunca inicializado
let objetoNull = null; // = valor especial null

// Objetos literales
let estructuraDatos1 = {
    nombre: "Nestor",
    hijos: 1,
    otra: {
        dato1: "Uno"
    }
}

// Expresiones regulares en forma literal, se definen con / y son del tipo  RegExp
var re = /ab+c/;


//Arrays
console.log("\n\n\nArrays");

// La siguiente es una definición literal de arrays:
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; // Arreglo de caracteres.

// Los arrays son objetos, y pueden iniciarse de la forma
let data1 = new Array("Hola", miVariable, 3.14159);
let data2 = new Array(20); // 20 es el tamaño que queremos inicial del array

let primerElemento = dias[0]; // = "Lunes"

let numeroDias = dias.length; // = 7

let array = ["hola", "mundo"];
let mensaje = array.join(""); // mensaje = "holamundo"
mensaje = array.join(" "); // mensaje = "hola mundo"

let ultimo = array.pop(); // ahora array = ["hola"], ultimo = "mundo"

array.push("mundo"); // array = ["hola", "mundo"]

array = [1, 2, 3]; // Una reasignacion puede cambiar el tipo de datos del array
let primero = array.shift(); // ahora array = [2, 3], primero = 1

array = [1, "hola", {
    text: "mundo"
}]; // Podemos incluir cualquier elemento en el array




//Operadores
console.log("\n\n\n Operadores");

let numero = 5;
numero = numero + 1; // Operadores - + / * %
numero += 3; // Operadores -= += /= *= %=
--numero;
numero++;

let visible = true;
let varBooleana = !visible;

let cantidad = 0;
varBooleana = !cantidad; // Expresar un numero como booleano.  0 evalúa false, al negarlo queda = true

let mensaje = "";
varBooleana = !mensaje; // varBooleana = true

varBooleana = !cantidad && !mensaje; // Expresión lógica And. resultado  = true

// Delete elimina una variable definida con var, la deja undefined
delete varBooleana;

//Funciones STRING

let mensaje = "Hola Mundo";
let cantidadLetras = mensaje.length; //  = 10
let upper = mensaje.toUpperCase(); // = "HOLA MUNDO"
let upper = mensaje.toLowerCase(); // = "hola mundo"
let letra = mensaje.charAt(0); // = H
let posicion_a = mensaje.indexOf('a'); // = 3
let posicion = mensaje.lastIndexOf('o'); // = 9
let substring = mensaje.substring(2); // porcion = "la Mundo"
let porcion = mensaje.substring(1, 8); // porcion = "ola Mun"


//=======================================================
// Expresiones

/**
 * Una variable booleana tiene los valores true y false, pero cualquier objeto puede
 * evaluearse en una expresion como a true y false:
 *

    false
    null
    undefined
    ''     // Cadena vacia
	0      // Numero 0
    NaN    // Not a number
 *
 */

var numerico = 12;
console.log("Expresiones ");
console.log(numerico == "12"); // =true, Si los valores son iguales
console.log(numerico === "12"); // =false, incluso si los valores son iguales
console.log(numerico != "12"); // =false, Si los valores son distintos
console.log(numerico !== "12"); // =true, Si los valores son distintos o el tipo de datos es distinto

// Remarco el uso de librerias de parseo de informacion para asegurarnos un buen manejo de estas
// conversiones

// Bloques if
if (condición_1) {
    sentencia_1;
} else if (condición_2) {
    sentencia_2;
} else if (condición_n) {
    sentencia_n;
} else {
    ultima_sentencia;
}

console.log("\n\n\n Condicionales");
if (numerico) {
    console.log("ok numerico == 12 ==> true"); // Numerico tiene valor, ingresa
}
if (!NaN) {
    console.log("ok !NaN es true, NaN es false"); // NaN evalua a falso
}
if (!null) {
    console.log("ok !null es true, null es false"); // null evalua a falso
}
if (numerico > 3) {
    console.log("ok"); // Numerico tiene valor > 3
}
console.log(12 + 2 == 14 ? "ok 12 + 2 == 14 " : "no"); // La operacion matematica da 14


// If inmediato
condición ? valor1 : valor2

// Bloque whiles
while (x < 10) {
    x++;
}
var x = 0
do {
    x++;
} while (x < 10);

// Switch
switch (expresión) {
    case etiqueta_0:
    case etiqueta_1:
        sentencias_1
        break;
    case etiqueta_2:
        sentencias_2
        break;
    default:
        sentencias_por_defecto
}

console.log("Condicional- case ");
switch (numerico) {
    case 12:
        console.log("Es 12");
        break;
    default:
        console.log("Default, no entra");
        break;
}

let strLetraA = "a";
switch (strLetraA.toUpperCase()) {
    case "A":
        console.log("Es A");
        break;
    default:
        console.log("Default, no entra");
        break;
}

//  For
for (var i = 0; i < numerico; i++) {
    console.log(i);
}

console.log("Sentencia - for loop ");

let arreglo = ["uno", "dos", "tres"];
for (let i in arreglo) {
    console.log(arreglo[i]);
}
// Foreach recibe como parámetro una función con 3 parámetros, usamos lambda
arreglo.forEach((value, index, array) => {
    console.log(value);
})

// podemos prescindir de lo que no necesitamos
arreglo.forEach((value) => {
    console.log(value);
})

// Exceptions
// throw expresión;

try {
    //...
    throw "error"
} catch (e) {
    console.log(e);
} finally {
    console.log("end")
}

// Normalmente se usa con el objeto Error
throw (new Error('The message'));


//Definicion de Funciones
console.log("\n\n\n Funciones");

function sumaMuestra(numero1, numero2) {
    var resultado = numero1 + numero2;
    console.log("El resultado es " + resultado);
};

sumaMuestra(1, 3); // llamada a la función

// Una variable puede ser un puntero a función
let sumaMuestra1 = function (numero1, numero2) { // Un puntero a función.
    var resultado = numero1 + numero2;
    return "El resultado es " + resultado; // En este ejemplo la función retorna un valor.
};
console.log(sumaMuestra1(1, 3)); // LLamada con punteros.


function accesoGlobal() {
    console.log("Accedemos a la variable global mensaje " + mensaje);
};

accesoGlobal();

// Funciones anidadas
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

// Closures, es una estrategia por la cual una función puede retornar otra función u objeto
// haciendo uso de variables definidas localmente
let petFunc = function (name) {
    return function () {
        return name;
    }
};
let myPet = petFunc("Vivie");
myPet(); // Imprime "Vivie", pero esta función no tiene conocimientos del contexto con el cual fue generada

// Es una estrategia muy util cuando se quieren hacer callbacks con funciones que tienen
// inicializacion de ámbito local


// Arguments es un arreglo que nos permite analizar los argumentos de una función
function myConcat(separator) {
    if (arguments.length != 1) {
        throw (new Error("Invalid arguments"))
    }
    // ...
}

// Argumentos variables
function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}


// Funciones anónimas

(function (param) {
    console.log("Funcion anonima e inmediata");
})("");


// Expresión lambda o arrow
((param) => {
    console.log("Arrow function anonimo " + param);
})("el parametro");

let funcionLambda = (param) => {
    console.log("Arrow function " + param);
};
funcionLambda("Hola");

(() => {
    let texto = "texto 2"
    console.log(texto + 123)
})();

// Funciones predefinidas interesantes
// eval  // eval("2 + 2") ==>  4
// isFinite
// isNaN
// parseInt and parseFloat
// Number and String
// encodeURI, decodeURI, encodeURIComponent, decodeURIComponent


/**
 * Creación del primer objeto en linea.
 *
 *
 * Los objetos en javascript no son definidos por tipos, por lo tanto puede agregarse y quitarse las propiedades a gusto.
 * Puede definirse por ejemplo un objeto simplemente enunciándolo
 *
 */
console.log("\n\n Objetos simples y arreglos");

// Ase podemos crear un objeto en linea
let primerObjeto = {
    fechaActual: Date(),
    label: "primerObjeto",
    getFechaActual: function () {
        return "Este es la fecha actual" + this.fechaActual;
    }
};

// operaciones con objetos

// in determina si la propiedad se encuentra en un objeto

nombrePropiedadoNumero in nombreObjeto

// instanceof  determina si un objeto es de un tipo especifico
nombreObjeto instanceof Date

// También podemos usar una función constructora

function Auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var miAuto = new Auto("Eagle", "Talon TSi", 1993);
miAuto.marca = "VW"
console.log(miAuto.annio)


/**
 * Clases y prototipos
 *
 * Dado que javascript no proporciona soporte oficial para el manejo de Objetos
 * pero todo en javascript es una estructura de datos, y a su vez
 * las estructuras de datos pueden tener punteros a funciones, por lo tanto
 * se pueden simular objetos, el problema es que no tenemos soporte para
 * la definición de clases.
 *
 */
// Esto solo aplica para ES6, para versiones anteriores es mucho mas complejo
class ClassWithStaticField {
    static staticField = 'static field';
    static staticMethod() {
        return ' method output';
    }
    static __PRIVATE_STATIC_FIELD;

    property1 = 'instance field';
    instanceMethod() {
        return 'method output';
    }

    __msg = 'variable privada'; // Las variables privadas comienzan con __
    get msg() {
        return this.__msg;
    }
    set msg(x) {
        this.__msg = `hello ${x}`;
    }

    __privateMethod() {
        return 'hello world';
    }
}
console.log(ClassWithStaticField.staticField);
console.log(ClassWithStaticField.staticMethod());

const instance = new ClassWithInstanceField();
console.log(instance.property1)
console.log(instance.instanceMethod())



//En javascript las promesas son similares se compromete a hacer una tarea y resulta ok o falla
// http://javascriptplayground.com/blog/2015/02/promises/
console.log("\n\n Promises");
let promesaCasamiento = new Promise((resolve, reject) => {
    console.log("Intentando casarse... esto va a llevar mucho tiempo...");

    let seCaso = Math.random() >= 0.5;

    if (seCaso) {
        resolve("Todo bien");
    } else {
        reject("Todo mal");
    }
});

promesaCasamiento.then(
        (result) => {
            console.log("Se caso " + result);
        }
    )
    .catch(
        (reason) => {
            console.log(" No se caso " + reason);
        }
    );

// Promesas con async await
console.log("\n\n Async / Await");

async function promesaAsync() {
    console.log("Intentando casarse 2.0... esto va a llevar mucho tiempo...");
    if (Math.random() >= 0.5) {
        return Promise.resolve("Todo bien");
    } else {
        return Promise.reject("Todo mal");
    }
}

// El bloque que llama await tiene que estar dentro de un bloque async
async function testAsyncAwait() {
    try {
        var resultAW = await promesaAsync()
        console.log("AW Se caso " + resultAW);
    } catch (reason) {
        console.log("AW No se caso " + reason);
    }
}
testAsyncAwait();

// Un ejemplo de lo mismo pero escrito de una forma integrando varias cosas
(async () => {
    try {
        console.log("Integrando Ok " + (await promesaAsync()));
    } catch (reason) {
        console.log("Integrando Falla " + reason);
    }
})()
