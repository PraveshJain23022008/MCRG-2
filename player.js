class Player{
    constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null; 
    }
    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",(data)=>{
            playerCount = data.val();
        });
    }
    upgradeCount(Count){
        database.ref("/").update({
            playerCount:Count
        })
    }
    updateName(){
        var playerIndex = "Players/player" + this.index;

        database.ref(playerIndex).set({
            name:name, 
            distance:this.distance
        })
    }
    static getPlayerinfo(){
        var playerInfoRef = database.ref("Players");
        playerInfoRef.on("Value",(data)=>{
            allPlayers = data.val();

        })

    }
}