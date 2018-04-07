/**
 * New typescript file
 */

class TaTeTi {
  private tablero: boolean[] = [];

  constructor() {
    let lista = [0,1,2,3,4,5,6,7,8];
    lista = lista.sort(function() {return Math.random() - 0.5});

    lista.forEach((index, element) => {
      this.tablero[element] = index % 2 == 0 
    });
  }

  public isTaTeTi() {
    return (this.tablero[0] && this.tablero[4] && this.tablero[8])
      || (!this.tablero[0] && !this.tablero[4] && !this.tablero[8]);
  }

  public toString() {
    return (this.tablero[0] ? "X " : "O ") + (this.tablero[1] ? "X " : "O ") + (this.tablero[2] ? "X " : "O ") + "\n"
      + (this.tablero[3] ? "X " : "O ") + (this.tablero[4] ? "X " : "O ") + (this.tablero[5] ? "X " : "O ") + "\n"
      + (this.tablero[6] ? "X " : "O ") + (this.tablero[7] ? "X " : "O ") + (this.tablero[8] ? "X " : "O ") + "\n\n";
  }
}

let tateti: TaTeTi;
do {
  tateti = new TaTeTi();
  console.log(tateti.toString());
} while (!tateti.isTaTeTi());
