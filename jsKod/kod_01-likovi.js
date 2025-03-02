//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

class Character extends Sprite {
  constructor(x, y, layer) {

    super(x + 4, y + 4, 64 - 8, 64 - 8);

    this.frame_sets = {};

    this.layer = layer;
    this.visible = true;

  }

  jump(h = 50) {

    if (!this.jumping) {

      this.jumping = true;
      this.velocity_y -= h;

    }
  }

  distanceTo(other) {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

}

class Tonma extends Character {
  constructor(layer) {
    super(0, 221, layer);

    this.width = 31;
    this.height = 31;

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [2, 3, 4, 5],
      "down": [1],
      "walk-down": [1],
      "left": [7],
      "walk-left": [8, 9, 10, 11]
    };

    this.okvir = false;
    this.puca = false;

    //! postaviti smjer glavnog lika
    this.direction = 90;

    this.dead = false;
    this.points = 0;
    this.hasKey = false;
  }

  moveRight() {
    this.direction = 90;
    this.velocity_x += 1.5;
  }

  moveLeft() {
    this.direction = 270;
    this.velocity_x -= 1.5;
  }

  pucaj() {

    //! stvaramo novi objekt projektil
    let p = new Projektil(GAME.getSpriteLayer("Projektil"));
    GAME.addSprite(p);

    //! dodajemo ga u poseban popis za lakše praćenje
    p.rbr = Postavke.projektili.length;
    Postavke.projektili.push(p);

    // postavi na poziciju i smjer trenutnog lika
    p.x = this.x;
    p.y = this.y;
    p.direction = this.direction;

    p.put = 0;
    p.visible = true;
    p.move = true;

  }

  die() {
    if (!this.dead) {
      this.dead = true;
      this.visible = false;
      this.velocity_x = 0;
      this.velocity_y = 0;
      setTimeout(() => {
        alert("Tonma je umro!");
        location.reload();
      }, 1000);
    }
  }

  collect(c){
    c.visible = false;
    this.points += c.value;
  }

  collectKey(c){
    c.visible = false;
    this.hasKey = true;
  }

  unlockChest(c){
    c.visible = false;
    this.points += c.value;
  }

  addPoints(points) {
    this.points += points;
    GameSettings.output("Bodovi: " + this.points, true);
  }
}
  

class Collectable extends Item {

  constructor(layer) {
    super(layer);

  }

  getType() {
    return this.constructor.name;
  }

}

class Coin extends Collectable {
  constructor(layer) {
    super(layer);
    this.value = 10;
  }
}

/*------------------------------*/

class Key extends Collectable {
  constructor(layer) {
    super(layer);
    this.value = 10;
  }
}

class Chest extends Collectable {
  constructor(layer) {
    super(layer);
    this.value = 100;
  }
}

/*------------------------------*/

class Projektil extends Item {
  #put;  
  constructor(layer) {
    super(layer);
    this.width = 15;  // Set the appropriate width for the projectile
    this.height = 15;
    this.visible = false;
    this.put = 0;
    this.move = true;

    // ne možemo koristiti #collidedPlatform jer će se dogoditi greška
    // klasa Sprite nema svojstvo, a collidedPlatform se koristi na više mjesta
    this._collidedPlatform = "";
  }

  // potrebno je definirati svojstvo kako bi se točno znalo u kojem trenutku dira neku platformu
  get collidedPlatform() {
    return this._collidedPlatform;
  }
  set collidedPlatform(v) {
    // ako dira platformu, onda string nije prazan već se radi o strani s koje je dira
    if (v != "") {
      // zaustavi projektil
      this.stop();
    }

    this._collidedPlatform = v;
  }

  get put() {
    return this.#put;
  }
  set put(v) {
    if (v >= 200) {
      this.#put = 0;
      this.stop(); // vraća sve postavke za projektil
    }
    else {
      this.#put = v;
    }
  }

  updatePosition() {
    if (this.move) {

      // ovo mora biti prije promjene x-a kako bi se ponašalo "normalno"
      // kod dodira s platformom (update old_x i old_y)
      //super.updatePosition();

      // kretanje projektila po posebnim pravilima
      if (this.direction == 90) {
        this.x += 5; // ide desno
        this.put += 5; // povećava put
      }
      else {
        this.x -= 5; // ide lijevo
        this.put += 5; // povećava put
      }

    }
  }

  stop() {
    this.visible = false;
    this.move = false;

    // popis svih likova u mapi
    let sprites = GAME.activeWorldMap.sprites;

    // izbaci onog koji staje (tako da se više ne crta)
    for (let i = sprites.length - 1; i >= 0; i--) {
      if (sprites[i] === this) {
        sprites.splice(i, 1); // brisanje i-tog elementa        

        Postavke.ukloniProjektil(this);
        Postavke.ukloniProjektilEnemy(this);

        break;
      }
    }

  }
}

class Enemy1 extends Character {
  constructor(start_x, start_y, layer) {
    super(start_x, start_y, layer);

    this.width = 31;
    this.height = 31;

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [2, 3, 4, 5],
      "down": [1],
      "walk-down": [1],
      "left": [7],
      "walk-left": [8, 9, 10, 11]
    };

    this.okvir = false;
    this.speed = 0.5; 
  }

  moveTo(target) {
    if (this.x < target.x) {
      this.moveRight();
    } else if (this.x > target.x) {
      this.moveLeft();
    }

    if (this.y < target.y) {
      this.moveDown();
    } else if (this.y > target.y) {
      this.moveUp();
    }
  }
}

class Enemy2 extends Character {
  constructor(start_x, start_y, layer) {
    super(start_x, start_y, layer);

    this.width = 31;
    this.height = 31;

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [2, 3, 4, 5],
      "down": [1],
      "walk-down": [1],
      "left": [7],
      "walk-left": [8, 9, 10, 11]
    };

    this.okvir = false;
    this.speed = 0.5; 
  }

  moveTo(target) {
    if (this.x < target.x) {
      this.moveRight();
    } else if (this.x > target.x) {
      this.moveLeft();
    }

    if (this.y < target.y) {
      this.moveDown();
    } else if (this.y > target.y) {
      this.moveUp();
    }
  }
}

class Enemy3 extends Character {
  constructor(start_x, start_y, layer) {
    super(start_x, start_y, layer);

    this.width = 31;
    this.height = 31;

    this.frame_sets = {
      "up": [1],
      "walk-up": [1],
      "right": [1],
      "walk-right": [1],
      "down": [1],
      "walk-down": [1],
      "left": [1],
      "walk-left": [1]
    };

    this.okvir = false;
    this.speed = 0.5;
    this.direction = 90;

    this.shootInterval = setInterval(() => this.pucaj(), 3000);
  }

  pucaj() {

    //! stvaramo novi objekt projektil
    let p = new Projektil(GAME.getSpriteLayer("Projektil2"));
    GAME.addSprite(p);

    //! dodajemo ga u poseban popis za lakše praćenje
    p.rbr = Postavke.projektili_enemy.length;
    Postavke.projektili_enemy.push(p);

    // postavi na poziciju i smjer trenutnog lika
    p.x = this.x;
    p.y = this.y;
    p.direction = this.direction;

    p.put = 0;
    p.visible = true;
    p.move = true;

  }
}
