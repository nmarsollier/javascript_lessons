/**
 * Tipos de Datos
 */
// Boolean
let isDone: boolean = false;
// Let se introduce para evitar problemas de scope de las variables declaradas con var
// el scope de let es mucho mas intuitivo y funciona correctamente


// Number 
let decimal = 6; // El tipo se infiere del valor asignado en la declaracion
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${ age + 1} years old next month.`

// Arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let [first, ...rest] = [1, 2, 3, 4];
console.log( first ); // imprime 1
console.log( rest ); // imprime [ 2, 3, 4 ]

// first actua como una variable por lo tanto no podemos utilizarla nuevamente en este scope
// podemos crear un scope nuevo usando {}
{
    let [first, segundo] = [1, 2, 3, 4];
    console.log( first ); // outputs 1
}

let [, second, , fourth] = [1, 2, 3, 4];


// Tuplas
// El tipo de datos que representa a las tuplas se llama tuple. El tipo tuple es inmutable
let x: [string, number];
x = ["hello", 10];


// Cuando accedemos a los datos tipados, el tipo de dato correcto es retornado y podemos operar acorde a eso
console.log( x[0].substr( 1 ) ); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// Enum

enum ColorA { Red, Green, Blue };
let c1: ColorA = ColorA.Green;


enum ColorB { Red = 1, Green, Blue };
let c2: ColorB = ColorB.Green;

enum ColorC { Red = 1, Green = 2, Blue = 4 };
let c3: ColorC = ColorC.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

//El valor de retorno se especifica al final
function suma( a: number, b: number ): number {
    return a + b;
}

// El valor de retorno se infiere del return
function suma1( a: number, b: number ) {
    return a + b;
}

// Void se usa para indicar que una funcion no retorna nada
function warnUser(): void {
    alert( "This is my warning message" );
}

// ? undica que es opcional
function keepWholeObject( wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}



// Const
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
