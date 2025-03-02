//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
/// <reference path="kod_01-likovi.js"/>

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup(tonmaScore) {

  GAME.clearSprites();

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "Map1":
      setupMap1();
      break;
    
    case "Map2":
      setupMap2(tonmaScore);
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

/* LEVELS */

function setupMap1() {
  Postavke.reset();

  GAME.clearSprites();

  let c = ["c1", "c2", "c3", "c4", "c5"];

  for (let i = 0; i < c.length; i++) {
    let layer = GAME.getSpriteLayer(c[i]);
    let coin = new Coin(layer);
    coin.visible = true;
    GAME.addSprite(coin);
    Postavke.coins.push(coin);
  }

  GAME.activeWorldMap.setCollisions("Platforme");

  Postavke.tonma = new Tonma(GAME.getSpriteLayer("Tonma"));
  GAME.addSprite(Postavke.tonma);

  Postavke.enemy1 = new Enemy1(750, 61, GAME.getSpriteLayer("Enemy1"));
  GAME.addSprite(Postavke.enemy1);
}

function setupMap2(tonmaScore) {
  Postavke.reset();

  GAME.clearSprites();

  let c = ["c1", "c2", "c3", "c4", "c5"];

  for (let i = 0; i < c.length; i++) {
    let layer = GAME.getSpriteLayer(c[i]);
    let coin = new Coin(layer);
    coin.visible = true;
    GAME.addSprite(coin);
    Postavke.coins.push(coin);
  }

  let k = ["key"];

  for (let i = 0; i < k.length; i++) {
    let layer = GAME.getSpriteLayer(k[i]);
    let key = new Key(layer);
    key.visible = true;
    GAME.addSprite(key);
    Postavke.key.push(key);
  }

  let ch = ["chest"];

  for (let i = 0; i < ch.length; i++) {
    let layer = GAME.getSpriteLayer(ch[i]);
    let chest = new Chest(layer);
    chest.visible = true;
    GAME.addSprite(chest);
    Postavke.chest.push(chest);
  }


  GAME.activeWorldMap.setCollisions("Platforme");

  Postavke.tonma = new Tonma(GAME.getSpriteLayer("Tonma"));
  GAME.addSprite(Postavke.tonma);
  Postavke.tonma.points = tonmaScore;

  Postavke.enemy1 = new Enemy1(50, 125, GAME.getSpriteLayer("Enemy1"));
  GAME.addSprite(Postavke.enemy1);

  Postavke.enemy2 = new Enemy2(735, 253, GAME.getSpriteLayer("Enemy2"));
  GAME.addSprite(Postavke.enemy2);

  Postavke.enemy2_2 = new Enemy2(825, 253, GAME.getSpriteLayer("Enemy2"));
  GAME.addSprite(Postavke.enemy2_2);

  Postavke.enemy3 = new Enemy3(600, 93, GAME.getSpriteLayer("Enemy3"));
  GAME.addSprite(Postavke.enemy3);
}