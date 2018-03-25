import Phaser from 'phaser'

export default class Welcome extends Phaser.Scene {
  constructor() {
    super({ key: 'Welcome' })
  }

  create() {
    this.text = this.add.text(0, 0, 'Happy Coding!', {
      font: '40px Bangers'
    })
  }
}
