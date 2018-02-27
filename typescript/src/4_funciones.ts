/**
 * Funciones
 */


// parametros opcionales
{
    function buildName( firstName: string, lastName?: string ) {
        if ( lastName )
            return firstName + " " + lastName;
        else
            return firstName;
    }

    let result1 = buildName( "Bob" );                  // works correctly now
    let result3 = buildName( "Bob", "Adams" );         // ah, just right
}

// valor por defecto
{
    function buildName2( firstName: string, lastName = "Smith" ) {
        return firstName + " " + lastName;
    }

    let result1 = buildName2( "Bob" );                  // works correctly now, returns "Bob Smith"
    let result2 = buildName2( "Bob", undefined );       // still works, also returns "Bob Smith"
    let result4 = buildName2( "Bob", "Adams" );         // ah, just right
}

// parametros variables
{
    function buildName3( firstName: string, ...restOfName: string[] ) {
        return firstName + " " + restOfName.join( " " );
    }

    let employeeName = buildName3( "Joseph", "Samuel", "Lucas", "MacKinzie" );
}

// Sobrecarga
{
    let suits = ["hearts", "spades", "clubs", "diamonds"];

    function pickCard( x: { suit: string; card: number; }[] ): number;
    function pickCard( x: number ): { suit: string; card: number; };
    function pickCard( x ): any {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if ( typeof x == "object" ) {
            let pickedCard = Math.floor( Math.random() * x.length );
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if ( typeof x == "number" ) {
            let pickedSuit = Math.floor( x / 13 );
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
}





