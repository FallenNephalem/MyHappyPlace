import "./style.css";
import Phaser from "phaser";

const sizes = {
  width: 800,
  height: 500,
};

const speedDown = 300

class GameScene extends Phaser.Scene {
  // constructor() {
  //   super("scene-game");
  // }

  preload() {
  }

  create() {
    // const map = this.make.tilemap({key: "map", tileWidth: 64, tileHeight: 64});
    // const tileset = map.addTilesetImage("tiles1", "tiles");
    // const layer = map.createLayer("toplayer", tileset, 0, 0);
  }

  update() {
  }

}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: speedDown },
      debug: true,
    },
  },
  scene: [GameScene],
};

const game = new Phaser.Game(config);
