class Postavke {
  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  static coins = [];

  static projektili = [];

  static projektili_enemy = [];

  static dno = 9 * 64;

  static key = [];

  static chest = [];

  /** @type {Coin} */
  static coin;

  /** @type {Projektil} */
  static projektil;

  /** @type {Item} */
  static kutija;

  /** @type {Tonma} */
  static tonma;

  /** @type {Enemy1} */
  static enemy1;

  /** @type {Enemy2} */
  static enemy2;

  /** @type {Enemy3} */
  static enemy3;

  /** @type {Chest} */
  static chest;

  /** @type {Key} */
  static key;

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static ukloniProjektil(p){
    for (let i = Postavke.projektili.length - 1; i >= 0; i--) {
      if (Postavke.projektili[i] === p) {
        Postavke.projektili.splice(i, 1);       
        console.log("uk");
        break; 
      }
    }
  }

  static ukloniProjektilEnemy(p){
    for (let i = Postavke.projektili_enemy.length - 1; i >= 0; i--) {
      if (Postavke.projektili_enemy[i] === p) {
        Postavke.projektili_enemy.splice(i, 1);       
        console.log("uk");
        break; 
      }
    }
  }

  static reset() {
    this.coins = [];
    this.key = [];
    this.chest = [];
  }
}