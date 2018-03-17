/**
 * New typescript file
 */
var TaTeTi = /** @class */ (function () {
    function TaTeTi() {
        this.tablero = [];
        for (var i = 0; i < 9; i++) {
            this.tablero[i] = Math.random() < 0.5;
        }
    }
    TaTeTi.prototype.isTaTeTi = function () {
        return this.tablero[0] && this.tablero[1] && this.tablero[2]
            || this.tablero[3] && this.tablero[4] && this.tablero[5]
            || this.tablero[6] && this.tablero[7] && this.tablero[8]
            || this.tablero[0] && this.tablero[3] && this.tablero[6]
            || this.tablero[1] && this.tablero[4] && this.tablero[7]
            || this.tablero[2] && this.tablero[5] && this.tablero[8]
            || this.tablero[0] && this.tablero[4] && this.tablero[8]
            || this.tablero[2] && this.tablero[4] && this.tablero[6];
    };
    TaTeTi.prototype.toString = function () {
        return (this.tablero[0] ? "X " : "O ") + (this.tablero[1] ? "X " : "O ") + (this.tablero[2] ? "X " : "O ") + "\n"
            + (this.tablero[3] ? "X " : "O ") + (this.tablero[4] ? "X " : "O ") + (this.tablero[5] ? "X " : "O ") + "\n"
            + (this.tablero[6] ? "X " : "O ") + (this.tablero[7] ? "X " : "O ") + (this.tablero[8] ? "X " : "O ") + "\n\n";
    };
    return TaTeTi;
}());
var tateti;
do {
    tateti = new TaTeTi();
    console.log(tateti.toString());
} while (!tateti.isTaTeTi());
//# sourceMappingURL=TaTeTi.js.map