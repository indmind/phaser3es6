import Phaser from 'phaser'

import WelcomeScene from './scenes/Welcome'

/* eslint-disable no-new */
new Phaser.Game({
  type: Phaser.WEBGL,
  parent: 'content',
  width: 400,
  height: 240,
  scaleMode: 0,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: false
    }
  },
  scene: [WelcomeScene]
})
