/**
 * Declaraciones de clases e interfaces
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Las interfaces actuan como una estructura a respetar, las clases en typescript no 
// necesariamente implementan interfaces, pero typescript determina en base al contexto si el objeto
// es posible ser utilizado con esa declaracion de interfaz 
{
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
}
// Valores opcionales
{
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: "black" });
}
// Readonly es similar a const, pero se usa para interfaces
{
}
// Interfaces funcionales
{
    var mySearch = function (source, subString) {
        var result = source.search(subString);
        return result > -1;
    };
}
// Forzar a implementar interfaces 
{
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
        }
        return Clock;
    }());
}
// Herencia de interfaces
{
}
// CLASES
{
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter("world");
}
// Herencia
{
    var Animal = /** @class */ (function () {
        // las propiedades se pueden definir en el constructor poniendo private, public o protected
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            // se puede llamar al constructor de la clase superior
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
}
// Restriccion de acceso
{
    var Animal = /** @class */ (function () {
        function Animal(theName) {
            this._name = theName;
        }
        Object.defineProperty(Animal.prototype, "name", {
            // Podemos definir getters y setters de forma simple encapsultando el contenido
            get: function () {
                return this._name;
            },
            set: function (name) {
                if (name.length > 0) {
                    this._name = name;
                }
            },
            enumerable: true,
            configurable: true
        });
        Animal.prototype.move = function (distanceInMeters) {
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var an = new Animal("Chuwaca");
    console.log(an.name);
    an.name = "";
    console.log(an.name);
    an.name = "Boby";
    console.log(an.name);
}
// protected
{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.toString = function () {
            console.log("Persona : " + this.name);
        };
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.toString = function () {
            console.log("Empleado : " + this.name);
        };
        Employee.prototype.getEmployeeHello = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee;
    }(Person));
    var persona = new Employee("Nestor", "UTN");
    if (persona instanceof Employee) {
        console.log("Empleado " + persona.getEmployeeHello());
    }
    else {
        console.log(persona.toString());
    }
}
// constructor
// La sobrecarga no es posible, pero si se puede hacer algo parecido
{
    var Greeter = /** @class */ (function () {
        function Greeter(destinatario, message) {
            if (message) {
                this.message = message;
            }
            else {
                this.message = "Hola";
            }
            this.destinatario = destinatario;
        }
        Greeter.prototype.greet = function () {
            return this.message + ", " + this.destinatario;
        };
        return Greeter;
    }());
    console.log(new Greeter("Nestor").greet());
}
//# sourceMappingURL=3_declaracion_tipos.js.map