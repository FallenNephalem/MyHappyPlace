import "./style.css";
import Phaser from "phaser";

const config = {
  type: Phaser.CANVAS, // Use the CANVAS rendering type
  canvas: document.getElementById('gameCanvas'), // Specify the custom canvas element
    width: 800,
    height: 600,
    canvas: gameCanvas,
    scene: {
      preload: preload,
      create: create,
      // update: update
    },
    // scene: [GameScene],
  };
  
  const game = new Phaser.Game(config);

function preload() {
    // Load your tilemap and tileset images
    // this.load.tilemapTiledJSON('map', 'path/to/your/tilemap.json');
    this.load.image('tiles', '/public/assets/maptileimage.png');
}

function create() {
    // Create tilemap and tileset
    var map = this.make.tilemap({ tileWidth: 32, tileHeight: 32 });
    var tileset = map.addTilesetImage('tiles');
    var layer = map.createLayer(0, tiles, 0, 0);
    layer.setTileIndexCallback(tileIndex, callbackFunction, this);

    var gameCanvasContext = this.sys.game.canvas.getContext('2d');

    // Define tile size and map dimensions
    var tileSize = 32;
    var mapWidth = 10;
    var mapHeight = 10;

    // Draw tiles on the custom canvas
    for (var row = 0; row < mapHeight; row++) {
        for (var col = 0; col < mapWidth; col++) {
            var x = col * tileSize;
            var y = row * tileSize;

            // Draw the tile on the custom canvas context
            // Replace 'tileIndex' with the actual index of the tile in your spritesheet
            gameCanvasContext.drawImage(this.textures.get('tiles').getSourceImage(), x, y, tileSize, tileSize);
        }
    }
    // Create a layer from the map
    // var layer = map.createLayer(0, tileset, 0, 0);
}
