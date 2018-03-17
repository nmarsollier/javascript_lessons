/**
 * Tipos de Datos
 */
// Boolean
var isDone = false;
// Let se introduce para evitar problemas de scope de las variables declaradas con var
// el scope de let es mucho mas intuitivo y funciona correctamente
// Number 
var decimal = 6; // El tipo se infiere del valor asignado en la declaracion
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// String
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
// Arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
console.log(first); // imprime 1
console.log(rest); // imprime [ 2, 3, 4 ]
// first actua como una variable por lo tanto no podemos utilizarla nuevamente en este scope
// podemos crear un scope nuevo usando {}
{
    var _b = [1, 2, 3, 4], first_1 = _b[0], segundo = _b[1];
    console.log(first_1); // outputs 1
}
var _c = [1, 2, 3, 4], second = _c[1], fourth = _c[3];
// Tuplas
// El tipo de datos que representa a las tuplas se llama tuple. El tipo tuple es inmutable
var x;
x = ["hello", 10];
// Cuando accedemos a los datos tipados, el tipo de dato correcto es retornado y podemos operar acorde a eso
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// Enum
var ColorA;
(function (ColorA) {
    ColorA[ColorA["Red"] = 0] = "Red";
    ColorA[ColorA["Green"] = 1] = "Green";
    ColorA[ColorA["Blue"] = 2] = "Blue";
})(ColorA || (ColorA = {}));
;
var c1 = ColorA.Green;
var ColorB;
(function (ColorB) {
    ColorB[ColorB["Red"] = 1] = "Red";
    ColorB[ColorB["Green"] = 2] = "Green";
    ColorB[ColorB["Blue"] = 3] = "Blue";
})(ColorB || (ColorB = {}));
;
var c2 = ColorB.Green;
var ColorC;
(function (ColorC) {
    ColorC[ColorC["Red"] = 1] = "Red";
    ColorC[ColorC["Green"] = 2] = "Green";
    ColorC[ColorC["Blue"] = 4] = "Blue";
})(ColorC || (ColorC = {}));
;
var c3 = ColorC.Green;
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//El valor de retorno se especifica al final
function suma(a, b) {
    return a + b;
}
// El valor de retorno se infiere del return
function suma1(a, b) {
    return a + b;
}
// Void se usa para indicar que una funcion no retorna nada
function warnUser() {
    alert("This is my warning message");
}
// ? undica que es opcional
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
// Const
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
//# sourceMappingURL=2_tipos_datos.js.map