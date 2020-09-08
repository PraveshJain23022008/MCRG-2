class Form{
    constructor(){
        this.title = createElement("H2");
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("H3");
    } 
    display(){
        
        this.title.html("car racing game");
        this.title.position(130,0);
        
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.upgradeCount(playerCount);
            player.updateName();
            
            this.greeting.html("Welcome:"+ player.name);
            this.greeting.position(130,160);
            
        })
        
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}