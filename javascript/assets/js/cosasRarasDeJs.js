/**
 * Matematicas
 */

1+2===3                                         // true  Bien ahi !

0.1+0.2===0.3                                   // false
100 - 99.9                                      // 0.09999999999999432
100 - 99.8                                      // 0.20000000000000284

111111111111111111111===111111111111111110000   // true
    10000000000000000===10000000000000001       // true
    10000000000000000+1                         //10000000000000000

Infinity === 1/0                                // true   (quizas un NaN o undefined ?)
Number.MIN_VALUE > 0                            // true

Number.MAX_VALUE*1.0000000000000001             // 1.7976931348623157e+308
Number.MAX_VALUE+1e290                          // 1.7976931348623157e+308
Number.MAX_VALUE*1.0000000000000002             // Infinite Numeros extra ?
Number.MAX_VALUE+1e300                          // Infinite

Math.max();                                     // -Infinity
Math.min();                                     // Infinity
Math.min() < Math.max()                         // false

parseInt("10anything");                    		// 10  Base 10 evalua el comienzo del string mientras sea numero
parseInt("anything", 16);                    	// 10  Base 16 evalua cualquier cosa

//Undefined , null y NaN
var objetoUndefined; // = undefined  es una variable declarada, pero nunca inicializada
var objetoNull = null; // = valor especial null
var objetoInfinity = 0 / 0;     // es NaN
var objetoNaN = 1 / 0;          // Es infinity
var valor1 = objetoNull + 1;    // null+1 = 1
console.log("undefined + 1" + (undefined + 1));

isNaN(objetoNaN);       // true
isNaN(objetoUndefined); // true  undefined no es numero
isNaN(objetoNull);      // false null es un numero
isNaN("asdasd");        // true El string no puede evaluarse a numero
isNaN("12");            // false "12" se evalua como numero


// Tipos de Datos

NaN === NaN                                     // false

typeof null                                     // object
null instanceof Object                          // false
typeof NaN                                      // number

0 == false           							// true
igual = [] == false        						// true
"" == false        								// true

null == false      								// false
null == undefined  								// true

typeof "string"        							// string
"string" instanceof String    					// false

igual = [] == []       							// false  obvio son 2 arrays diferentes
igual = [] == ![]        						// true   ???

"" == true            							// false
"hola" == true        							// false
"true" == true        							// false
"1" == true            							// true    ?????
"0" == false        							// true    ya vamos entendiendo

"hola" ? true: false   	 				// true
"false" ? true: false    				// true
"1" ? true: false        				// true
"0" ? true: false        				// true   no, no entendemos

(true + 1) === 2        				// true
(true + true) === 2        				// true

5 == "0000005.00000"    				// ?
"3" + 1  								// 31
"3" - 1  								// 2
