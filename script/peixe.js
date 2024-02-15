var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
  
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };
  
  var game = new Phaser.Game(config);
  var peixin;
  
  function preload() {
    // pré carregando a imagem do cenário e do logo do inteli
    this.load.image("mar", "assets/bg_azulescuro.png");
    this.load.image("logo", "assets/logointeli_branco.png");
    this.load.image('crustaceo', 'assets/peixes/crustaceo.png')
  
    // guardando o peixin numa variável
    peixin = this.load.image("peixe", "assets/peixes/peixe_serio.png");
  }
  
  function create() {
    //adicionando as imagens à tela, do mar, logo e crustáceo
    this.add.image(400, 300, "mar").setScale(2.2);
    this.add.image(1070, 80, "logo").setScale(0.75);
    this.add.image(800, 500, 'crustaceo');
  
    //adicionando o peixe à tela
    peixin = this.add.image(400, 300, "peixe").setOrigin(0.5, 0.5);
    peixin.setFlip(true, false);
  }
  
  function update() {
      //configurando peixe virando para o lado que está nadando
    if (this.input.x > peixin.x) {
      peixin.setScale(1).setFlip(true, false);
    } else {
      peixin.setFlip(false, false);
    }
  
    //input de movimentação do peixe seguindo o mouse
    peixin.x = this.input.x;
    peixin.y = this.input.y;
  }
  
  //resposta da pergunta da atividade
  console.log("Desde criança já programei, porém sempre coisas simples e sem entender a ideia por trás... fico muito feliz que isso esteja mudando a partir de hoje")