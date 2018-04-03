/**
 * Declaraciones de clases e interfaces
 */

// Las interfaces actuan como una estructura a respetar, las clases en typescript no 
// necesariamente implementan interfaces, pero typescript determina en base al contexto si el objeto
// es posible ser utilizado con esa declaracion de interfaz 
{
    interface LabelledValue {
        label: string;
    }

    function printLabel( labelledObj: LabelledValue ) {
        console.log( labelledObj.label );
    }

    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel( myObj );
}

// Valores opcionales
{
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare( config: SquareConfig ): { color: string; area: number } {
        let newSquare = { color: "white", area: 100 };
        if ( config.color ) {
            newSquare.color = config.color;
        }
        if ( config.width ) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare( { color: "black" });

}

// Readonly es similar a const, pero se usa para interfaces
{
    interface Point {
        readonly x: number;
        readonly y: number;
    }
}

// Interfaces funcionales
{
    interface SearchFunc {
        ( source: string, subString: string ): boolean;
    }

    let mySearch: SearchFunc = function( source: string, subString: string ) {
        let result = source.search( subString );
        return result > -1;
    }
}

// Forzar a implementar interfaces 
{
    interface ClockInterface {
        currentTime: Date;
    }

    class Clock implements ClockInterface {
        currentTime: Date;
        constructor( h: number, m: number ) { }
    }
}

// Herencia de interfaces
{
    interface Shape {
        color: string;
    }

    interface Square extends Shape {
        sideLength: number;
    }
}

// CLASES
{
    class Greeter {
        // las propiedades son publicas por default

        greeting: string;
        constructor( message: string ) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    let greeter = new Greeter( "world" );
}

// Herencia
{
    class Animal {
        // las propiedades se pueden definir en el constructor poniendo private, public o protected
        constructor( public name: string ) {
        }

        move( distanceInMeters: number = 0 ) {
            console.log( `${this.name} moved ${distanceInMeters}m.` );
        }
    }

    class Snake extends Animal {
        constructor( name: string ) {
            // se puede llamar al constructor de la clase superior
            super( name );
        }
        move( distanceInMeters = 5 ) {
            console.log( "Slithering..." );
            super.move( distanceInMeters );
        }
    }

    class Horse extends Animal {
        constructor( name: string ) { super( name ); }
        move( distanceInMeters = 45 ) {
            console.log( "Galloping..." );
            super.move( distanceInMeters );
        }
    }

    let sam = new Snake( "Sammy the Python" );
    let tom: Animal = new Horse( "Tommy the Palomino" );

    sam.move();
    tom.move( 34 );
}

// Restriccion de acceso
{
    class Animal {
        // Name es una variable privada
        private _name: string;

        // Podemos definir getters y setters de forma simple encapsultando el contenido
        get name() {
            return this._name;
        }
        set name( name: string ) {
            if ( name.length > 0 ) {
                this._name = name;
            }
        }

        public constructor( theName: string ) {
            this._name = theName;
        }

        public move( distanceInMeters: number ) {
            console.log( `${this.name} moved ${distanceInMeters}m.` );
        }
    }
    
    let an = new Animal("Chuwaca");
    console.log(an.name);
    an.name = "";
    console.log(an.name);
    an.name = "Boby";
    console.log(an.name);
}


// protected
{
    class Person {
        protected name: string;
        constructor( name: string ) {
            this.name = name;
        }
        toString() {
            console.log( "Persona : " + this.name );
        }
    }

    class Employee extends Person {
        private department: string;

        constructor( name: string, department: string ) {
            super( name );
            this.department = department;
        }
        toString() {
            console.log( "Empleado : " + this.name );
        }

        public getEmployeeHello() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let persona: Person = new Employee( "Nestor", "UTN" );
    if ( persona instanceof Employee ) {
        console.log( "Empleado " + persona.getEmployeeHello() );
    } else {
        console.log(persona.toString());
    }

}

// constructor
// La sobrecarga no es posible, pero si se puede hacer algo parecido
{
    class Greeter {
        message: string;
        destinatario: string;
        constructor( destinatario: string );
        constructor( destinatario: string, message?: string ) {
            if ( message ) {
                this.message = message;
            } else {
                this.message = "Hola";
            }

            this.destinatario = destinatario;
        }
        greet() {
            return this.message + ", " + this.destinatario;
        }
    }

    console.log( new Greeter( "Nestor" ).greet() );
}










