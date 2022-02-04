class Form {

    constructor() {
      this.input = createInput("Nombre");
      this.button = createButton('Jugar');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h3')
      title.html("Juego De Carreras De Autos");
      title.position(130, 0);
  
      this.input.position(displayWidth/2-40, displayHeight/2-80);
      this.button.position(displayWidth/2-30, displayHeight/2);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hola " + player.name)
        this.greeting.position(displayWidth/2-70, displayHeight/4);
      });
  
    }
  }