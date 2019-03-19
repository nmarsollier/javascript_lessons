// console.log es una forma de imprimir en la consola
console.log("Variables");

// Alfanumericos
// const define una constante, no se puede modificar su valor
const constante = "esta es una constante";

// Var define variables, pueden modificar su valor
var cadena2 = "Cadena compuesta con 'comillas simples'";
var cadena3 = 'Cadena con "comillas dobles" y caracteres unicode \u0041';
var cadenaConcatenada = 'Cadena ' + "concatenada";
var template = `Templates a partir de ES5 ${cadena1}`
var cadenaLarga = `
    Hola soy una cadena larga
`;

//Los nombres pueden tener alfanumericos, '$' y '_' . No deben empezar con numeros.
var $numero1;
var _$letra;
var $$$otroNumero;
var $_a__$4;


var variableNumerica = 12; // Todo numero es un double de 64 bits. Una division de enteros retorna double.

var variableBooleana = true; // Una variable booleana.

var cadenaDeTexto = "Esta es una cadena de texto con caracteres especiales \\ \" \' \t \n "; // Una cadena de caracteres.

var cadenaConComillas = "Esta es una cadena con \"comillas \""; // Incluir comillas dentro de una cadena

var cadenaCombinandoComillas = 'Esta es una cadena con "comillas" tambien. '; // Se pueden utilizar comillas simples y dobles.

var cadenaUnicod = "Cadena con caracteres unicode \u0041 "; // Caracteres unicode comienzan con \u

//Asigancion y Expresiones

var asignacionNumerica = variableNumerica; // Podemos asingar un valor de una variable a otra.

var expresionNumerica = variableNumerica * 10; // Podemos deinir numeros como expresion

var expresionBooleana = variableNumerica == 12; // Un valor booleano desde una expresion.

var expresionBooleana1 = 12 == '12'; // Evalua a true

var expresionBooleana2 = 12 === '12'; // Evalua a falso

var concatenacionCadenas = "El valor de Variable Numerica es " + variableNumerica; // Si concatenamos String con numero el resultado es String

var concatenacionStrBoolean = "El valor de expresionBooleana1 es " + expresionBooleana1; // Resulta en cadena

var concatenacionYSuma = 2 + 2 + " es cuatro. "; // La suma se evalua de izquierda a derecha

var numero1 = 4564.84567;

// toFixed redondea los numeros
console.log(numero1.toFixed(2)); // 4564.85
console.log(numero1.toFixed(6)); // 4564.845670
console.log(numero1.toFixed()); // 4565

//Undefined y null
var objetoUndefined; // = undefined  es una variable declarada, pero nunca inicializada
var objetoNull = null; // = valor especial null

// Estructuras de objectos

var estructuraDatos1 = {
    nombre: "Nestor",
    hijos: 1
}

//Arrays
console.log("\n\n\nArrays");

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; // Arreglo de caracteres.
var primerElemento = dias[0]; // = "Lunes"

var numeroDias = dias.length; // = 7

var array = ["hola", "mundo"];
var mensaje = array.join(""); // mensaje = "holamundo"
mensaje = array.join(" "); // mensaje = "hola mundo"

var ultimo = array.pop(); // ahora array = ["hola"], ultimo = "mundo"

array.push("mundo"); // array = ["hola", "mundo"]

array = [1, 2, 3]; // Una reasignacion puede cambiar el tipo de datos del array
var primero = array.shift(); // ahora array = [2, 3], primero = 1

array = [1, "hola", { text: "mundo" }]; // Podemos incluir cualquier elemento en el array



//Operadores
console.log("\n\n\n Operadores");

var numero = 5;
numero = numero + 1; // Operadores - + / * %
numero += 3; // Operadores -= += /= *= %=
--numero;
numero++;

var visible = true;
var varBooleana = !visible;

var cantidad = 0;
varBooleana = !cantidad; // Expresar un numero como booleano.  0 evalua false, al negarlo queda = true

var mensaje = "";
varBooleana = !mensaje; // varBooleana = true

varBooleana = !cantidad && !mensaje; // Expresion logica And. resultado  = true


//Funciones STRING

var mensaje = "Hola Mundo";
var cantidadLetras = mensaje.length; //  = 10
var upper = mensaje.toUpperCase(); // = "HOLA MUNDO"
var upper = mensaje.toLowerCase(); // = "hola mundo"
var letra = mensaje.charAt(0); // = H
var posicion_a = mensaje.indexOf('a'); // = 3
var posicion = mensaje.lastIndexOf('o'); // = 9
var substring = mensaje.substring(2); // porcion = "la Mundo"
var porcion = mensaje.substring(1, 8); // porcion = "ola Mun"


//Definicion de Funciones
console.log("\n\n\n Funciones");

function sumaMuestra(numero1, numero2) {
    var resultado = numero1 + numero2;
    console.log("El resultado es " + resultado);
};

sumaMuestra(1, 3); // llamada a la funcion

var sumaMuestra1 = function(numero1, numero2) { // Un puntero a funcion.
    var resultado = numero1 + numero2;
    return "El resultado es " + resultado; // En este ejemplo la funcion retorna un valor.
};
console.log(sumaMuestra1(1, 3)); // LLamada con punteros.


function accesoGlobal() {
    console.log("Accedemos a la variable global mensaje " + mensaje);
};

accesoGlobal();

// Funciones anonimas

(function() {
    console.log("Funcion anonima e inmediata");
})();


// Expresion lambda
((param) => {
    console.log("Arrow function anonimo " + param);
})("el parametro");


/**
 * Una variable booleana tiene los valores true y false, pero cualquier objeto puede evaluearse en una expresion
 * como a true y false:
 *
 *
    false
    null
    undefined
    ''     // Cadena vacia
	0      // Numero 0
    NaN    // Not a number
 *
 */

console.log("\n\n\n Expresiones logicas");

var numerico = 12;
console.log("Expresiones ");
console.log(numerico == "12"); // =true, Si los valores son iguales
console.log(numerico === "12"); // =false, incluso si los valores son iguales
console.log(numerico != "12"); // =false, Si los valores son distintos
console.log(numerico !== "12"); // =true, Si los valores son distintos o el tipo de datos es distinto


console.log("\n\n\n Comportamientos extraños");

// Jvascript tiene un comportamiento muy extraño cuando se usan strings y boolean, CUIDADO
console.log("!'hola' : " + (!'hola')); // =false 'hola' evalua como true
console.log("!'' : " + (!'')); // true '' evalua como false
console.log("'hola' == true : " + ('hola' == true)); // =false 'hola' evalua como false en este caso
console.log("'hola' && true : " + ('hola' && true)); // =true 'hola' evalua como true
console.log("'false' && true : " + ('false' && true)); // =true 'false' evalua como true

// Para darle sentido al uso de booleans creamos nuestra propia funcion de parseo de boolean
// Sin embargo es conveniente usar alguna libreria de funciones como underscore
function parseBoolean(string) {
    booleanValue = String(string).toLowerCase();
    return booleanValue === 'true' ||
        booleanValue === 'yes' ||
        booleanValue === '1';
}

console.log("parseBoolean('false') = " + (parseBoolean('false')));

// Arrays
console.log("\n\n\n Arrays");

var vocales = ["a", "e", "i", "o", "u"];
console.log("vocales.length = " + (vocales.length)); // numeroVocales = 5
var array1 = [1, 2, 3];
array2 = array1.concat(4, 5, 6);
console.log("array2 = " + (array2)); //array2 = [1, 2, 3, 4, 5, 6]



/* Tambien existen las expresiones :
 *
   <  Menor
   <= Menor o igual
   >  Mayor
   >= Mayor o igual
   +-*%/  Operaciones matematicas
   && Y logico
   || O logico
*/
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


console.log("Condicional- case ");
switch (numerico) {
    case 12:
        console.log("Es 12");
        break;
    default:
        console.log("Default, no entra");
        break;
}

var strLetraA = "a";
switch (strLetraA.toUpperCase()) {
    case "A":
        console.log("Es A");
        break;
    default:
        console.log("Default, no entra");
        break;
}

console.log("Sentencia - while ");

var i = 0;
while (i < numerico) {
    console.log(i);
    i++;
}
i = 0;
do {
    console.log(i);
    i++;
} while (i < numerico);

console.log("Sentencia - for ");

for (var i = 0; i < numerico; i++) {
    console.log(i);
}

console.log("Sentencia - for loop ");

var arreglo = ["uno", "dos", "tres"];
for (var i in arreglo) {
    console.log(arreglo[i]);
}
// Foreach recibe como parametro una funcion con 3 parametros, usamos lambda
arreglo.forEach((value, index, array) => {
    console.log(value);
})

// poodemos prescindir de lo que no necesitamos
arreglo.forEach((value) => {
    console.log(value);
})

/**
 * Creacion del primer objeto en linea.
 *
 * Uso de var para crear una instancia de un objeto.
 * las pripiedades de un objeto pueden tener cualquier nombre alfanumerico y varios caracteres especiales como _$@, excepto por las palabras reservadas :
 *
 * " ' abstract arguments boolean break byte case catch char class* const continue debugger default delete do double else enum* eval export*
 *   extends* false final finally float for function goto if implements import* in instanceof int interface let long native new null
 *   package private protected public return short static super* switch synchronized this throw throws transient true try typeof var void volatile
 *   while with yield
 *
 *
 * Javascript no utiliza tipos de datos, por lo que el tipo de datos de una propiedad se infiere de la asignacion de un valor.
 *
 * Los objetos en javascript no son definidos por tipos, por lo tanto puede agregarse y quitarse las propiedades a gusto.
 * Puede definirse por ejemplo un objeto simplemente enunciandolo
 *
 */
console.log("\n\n Objetos simples y arreglos");

var primerObjeto = {
    fechaActual: Date(),
    label: "primerObjeto",
    getFechaActual: function() {
        return "Este es la fecha actual" + this.fechaActual;
    }
};

console.log(primerObjeto.fechaActual);
console.log(primerObjeto.getFechaActual());

primerObjeto.label = "ya no es mas el primer objeto";
console.log(primerObjeto["label"]);

// null y undefined
primerObjeto.label = undefined;
console.log("Analizando valor undefined : " + primerObjeto.label);

primerObjeto.label = null;
console.log("Analizando valor null : " + primerObjeto.label);

// En javascript los objetos no son estrucutras fijas, podemos agregarle propiedades luego de instanciar objetos
primerObjeto.propiedadAgregada = "Agregada";
console.log("Podemos agregar propiedades : " + primerObjeto.propiedadAgregada);

// Incluso cambiar el comportamiento del objeto
primerObjeto.getFechaActual = () => { return "Funcion cambiada." };
console.log(primerObjeto.getFechaActual());

/*
 * Existe una relacion muy cercana en javascript entre un objeto y un arreglo,
 * ya que los objetos pueden utilizarse como arreglos.
 */

var objetoYArreglos = {
    arreglo: ["arreglo 1", "arreglo 2", "arreglo 3"],
    "1": "valor 1",
    "2": "valor 2"
}

console.log(objetoYArreglos[0]);
console.log(objetoYArreglos["2"]);
console.log(objetoYArreglos["arreglo"][0]);
console.log(objetoYArreglos.arreglo["1"]);

/**
 * Clases y prototipos
 *
 * Dado que javascript no proporciona soporte oficial para el manejo de Objetos
 * pero todo en javascript es una estructura de datos, y a su vez
 * las estructuras de datos pueden tener punteros a funciones, por lo tanto
 * se pueden simular objetos, el problema es que no tenemos soporte para
 * la definicion de clases.
 *
 */
// El patron mas simple para la creacion de objetos es utilizando una funcion de construccion de objeto
console.log("\n\Factory Pattern");
var Objeto1 = function(nombre, edad, estado) {
    var result = {
        nombre: nombre,
        edad: edad
    };

    result.estado = estado;

    result.log = function() {
        // Notar el uso de this dentro de la funcion, referencia a una instancia de result
        console.log(JSON.stringify(this));
    }

    return result;
}

var objetoFuncion1 = Objeto1("Nestor", 40, true);
var objetoFuncion2 = Objeto1("Bruno", 5, false);
objetoFuncion1.log();
objetoFuncion2.log();

//Construction Pattern
console.log("\n\nConstruction Pattern");
var Objeto2 = function(nombre, edad, estado) {
    this.nombre = nombre;
    this.edad = edad;
    this.estado = estado;

    // El problema es que esta definicion de funcion se replica por cada uno
    // de los objetos que creamos
    this.log = function() {
        console.log(JSON.stringify(this));
    }
}

var constructorPersona1 = new Objeto2("Nestor", 40, true);
var constructorPersona2 = new Objeto2("Bruno", 5, false);
constructorPersona1.log();
constructorPersona2.log();

//Prototype Construction Function
console.log("\n\nPrototype Construction Function");
var Objeto3 = function(nombre, edad, estado) {
    this.nombre = nombre;
    this.edad = edad;
    this.estado = estado;
}
Objeto3.prototype.log = function() {
    console.log(JSON.stringify(this));
}

var prototypePersona1 = new Objeto3("Nestor", 40, true);
var prototypePersona2 = new Objeto3("Bruno", 5, false);
prototypePersona1.log();
prototypePersona2.log();


console.log("\n\n Callback Pattern");
// Callback Functions - High order functions
// En javascript las funciones son first class objects, se pueden pasar como argumentos.
var funcionPrincipal = function(callback) {
    console.log("Ejecutando el proceso principal");
    callback();
}

funcionPrincipal(() => {
    console.log("Callback");
});

console.log("\n\n Strategy Pattern");
//En javascript las funciones son first class objects, se pueden pasar como argumentos.
function sum(a, b) {
    return a + b;
};

function multiply(a, b) {
    return a * b;
};

function calc(a, b, func) {
    if (typeof func === "function")
        return func(a, b);
}

console.log(calc(2, 3, sum));
console.log(calc(2, 3, multiply));
console.log(calc(2, 3, (a, b) => {
    return a + " y " + b;
}));

//En javascript las promesas son similares se compromete a hacer una tarea y resulta ok o falla
// http://javascriptplayground.com/blog/2015/02/promises/
console.log("\n\n Promises");
var promesaCasamiento = new Promise(function(resolve, reject) {
    console.log("Intentando casarse... esto va a llevar mucho tiempo...");

    var seCaso = Math.random() >= 0.5;

    if (seCaso) {
        resolve("Todo bien");
    } else {
        reject("Todo mal");
    }
});

promesaCasamiento.then((result) => {
    console.log("Se caso " + result);
}).catch((reason) => {
    console.log(" No se caso " + reason);
});