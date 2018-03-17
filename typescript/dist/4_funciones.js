/**
 * Funciones
 */
// parametros opcionales
{
    function buildName(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    var result1 = buildName("Bob"); // works correctly now
    var result3 = buildName("Bob", "Adams"); // ah, just right
}
// valor por defecto
{
    function buildName2(firstName, lastName) {
        if (lastName === void 0) { lastName = "Smith"; }
        return firstName + " " + lastName;
    }
    var result1 = buildName2("Bob"); // works correctly now, returns "Bob Smith"
    var result2 = buildName2("Bob", undefined); // still works, also returns "Bob Smith"
    var result4 = buildName2("Bob", "Adams"); // ah, just right
}
// parametros variables
{
    function buildName3(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
}
// Sobrecarga
{
    var suits_1 = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x) {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x == "number") {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits_1[pickedSuit], card: x % 13 };
        }
    }
}
//# sourceMappingURL=4_funciones.js.map