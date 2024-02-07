var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,

    scene: {
        preload: preload,
        create: create,
        update: update
    }

};

var game = new Phaser.Game(config);
var peixin

function preload() {
    this.load.image('mar', 'assets/bg_azulescuro.png');
    this.load.image('logo', 'assets/logointeli_branco.png');
    this.load.image('peixin2', 'assets/peixes/peixe_rosa.png');

    // guardando o peixin movimentável numa variável
    peixin = this.load.image('peixe', 'assets/peixes/peixe_serio.png');

}

function create() {
    this.add.image(400, 300, 'mar').setScale(2.2);
    this.add.image(150, 80, 'logo').setScale(0.75);
    this.add.image(600, 80, 'peixin2').setScale(1);

    peixin = this.add.image(400, 300, 'peixe').setOrigin(400, 300).setFlip(true, false);
}

function update() {
    
    //
    if (this.input.x > peixin.x) {
        peixin.setScale(1).setFlip(true, false);
        
    } else {
        peixin.setScale(-1).setFlip(true, true);
        
    }

    peixin.x = this.input.x;
    peixin.y = this.input.y;
}