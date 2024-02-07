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

//tentativa falha de colocar texto na tela (1)
var resposta = ('Durante a vida tive poucas chances de programar, e sempre com tarefas pequenas, sem nunca enteder a lógic por trás. Fico muito contente de saber que isso etpa mudando hoje!');


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
    // não finalizei o peixe 2
    this.add.image(600, 80, 'peixin2').setScale(1);

    //tentativa falha de colocar texto na tela (2)
    document.write(resposta);

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