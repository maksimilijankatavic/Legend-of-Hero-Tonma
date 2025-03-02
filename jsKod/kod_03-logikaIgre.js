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
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {
  if (GAME.activeWorldMap.name == "Map1")
    Map1();
  else if(GAME.activeWorldMap.name == "Map2")
    Map2();

  GAME.update();

};

function Map1() {
  if (SENSING.left.active) {
    Postavke.tonma.moveLeft();
  }

  if (SENSING.right.active) {
    Postavke.tonma.moveRight();
  }

  if (SENSING.up.active) {
    Postavke.tonma.jump();
  }

  if (SENSING.keyD.active) {
    if (!Postavke.tonma.puca) {
      Postavke.tonma.puca = true;
      Postavke.tonma.pucaj();
    }
  }
  else {
    Postavke.tonma.puca = false;
  }

  if (!Postavke.tonma.dead && Postavke.tonma.touching(Postavke.enemy1)) {
    Postavke.tonma.die();
  }

  const proximityDistance = 3 * 32;
  if (Postavke.enemy1.distanceTo(Postavke.tonma) < proximityDistance) {
    Postavke.enemy1.moveTo(Postavke.tonma);
  }

  for (let i = 0; i < Postavke.projektili.length; i++) {
    const p = Postavke.projektili[i];
    if(p.touching(Postavke.enemy1)){
      p.stop();
      Postavke.tonma.addPoints(50);
      Postavke.enemy1.visible = false;
      break;
    }
  }

  for (let i = 0; i < Postavke.coins.length; i++) {
    
    const c = Postavke.coins[i];
    
    if (Postavke.tonma.touching(c)) {
      Postavke.tonma.collect(c);
      GameSettings.output("Bodovi: " + Postavke.tonma.points, true);
    }
  }

  checkTriggerPoint(Postavke.tonma.points);
}

function checkTriggerPoint(tonmaScore) {
  const triggerPoint = { x: 450, y: 280 };
  const triggerProximity = 32;

  if (Math.abs(Postavke.tonma.x - triggerPoint.x) < triggerProximity &&
      Math.abs(Postavke.tonma.y - triggerPoint.y) < triggerProximity) {
    loadNextMap(tonmaScore);
  }
}

function loadNextMap(tonmaScore) {
  const nextMapName = "Map2";
  if (GAME.hasWorld(nextMapName)) {
    GAME.setActiveWorldMap(nextMapName);
    setup(tonmaScore);
    console.log(`Loaded ${nextMapName}`);
  } else {
    console.error(`Map ${nextMapName} does not exist!`);
  }
}

function Map2(){
  if (SENSING.left.active) {
    Postavke.tonma.moveLeft();
  }

  if (SENSING.right.active) {
    Postavke.tonma.moveRight();
  }

  if (SENSING.up.active) {
    Postavke.tonma.jump();
  }

  if (SENSING.keyD.active) {
    if (!Postavke.tonma.puca) {
      Postavke.tonma.puca = true;
      Postavke.tonma.pucaj();
    }
  }
  else {
    Postavke.tonma.puca = false;
  }

  if (!Postavke.tonma.dead && Postavke.tonma.touching(Postavke.enemy1)) {
    Postavke.tonma.die();
  }

  if (!Postavke.tonma.dead && Postavke.tonma.touching(Postavke.enemy2)) {
    Postavke.tonma.die();
  }

  if (!Postavke.tonma.dead && Postavke.tonma.touching(Postavke.enemy2_2)) {
    Postavke.tonma.die();
  }

  const proximityDistance = 3 * 32;
  if (Postavke.enemy1.distanceTo(Postavke.tonma) < proximityDistance) {
    Postavke.enemy1.moveTo(Postavke.tonma);
  }

  if (Postavke.enemy2.distanceTo(Postavke.tonma) < proximityDistance) {
    Postavke.enemy2.moveTo(Postavke.tonma);
  }

  if (Postavke.enemy2_2.distanceTo(Postavke.tonma) < proximityDistance) {
    Postavke.enemy2_2.moveTo(Postavke.tonma);
  }

  for (let i = 0; i < Postavke.projektili.length; i++) {
    const p = Postavke.projektili[i];
    if(p.touching(Postavke.enemy1)){
      p.stop();
      Postavke.tonma.addPoints(50);
      Postavke.enemy1.visible = false;
      break;
    }

    if(p.touching(Postavke.enemy2)){
      p.stop();
      Postavke.tonma.addPoints(50);
      Postavke.enemy2.visible = false;
      break;
    }

    if(p.touching(Postavke.enemy2_2)){
      p.stop();
      Postavke.tonma.addPoints(50);
      Postavke.enemy2_2.visible = false;
      break;
    }
  }

  for (let i = 0; i < Postavke.projektili_enemy.length; i++) {
    const p = Postavke.projektili_enemy[i];
    if(p.touching(Postavke.tonma)){
      p.stop();
      Postavke.tonma.die();
      break;
    }
  }

  for (let i = 0; i < Postavke.coins.length; i++) {
    
    const c = Postavke.coins[i];
    
    if (Postavke.tonma.touching(c)) {
      Postavke.tonma.collect(c);
      GameSettings.output("Bodovi: " + Postavke.tonma.points, true);
    }
  }

  for (let i = 0; i < Postavke.key.length; i++) {
    
    const c = Postavke.key[i];
    
    if (Postavke.tonma.touching(c)) {
      Postavke.tonma.collectKey(c);
      GameSettings.output("Tonma ima ključ!");
    }
  }

  for (let i = 0; i < Postavke.chest.length; i++) {
    
    const c = Postavke.chest[i];
    
    if (Postavke.tonma.touching(c)) {
      if(Postavke.tonma.hasKey){
        Postavke.tonma.unlockChest(c);
        GameSettings.output("Bodovi: " + Postavke.tonma.points, true);
      }
    }
  }

  checkTriggerPointEnd(Postavke.tonma.points);
}

let hasTriggeredEnd = false;

function checkTriggerPointEnd(tonmaScore) {
  const triggerPoint = { x: 515, y: 120 };
  const triggerProximity = 32;

  if (!hasTriggeredEnd &&
      Math.abs(Postavke.tonma.x - triggerPoint.x) < triggerProximity &&
      Math.abs(Postavke.tonma.y - triggerPoint.y) < triggerProximity) {
        hasTriggeredEnd = true;
    
        setTimeout(() => {
          alert(`Final score: ${tonmaScore}`);
          location.reload();
        }, 1000)
  }
}