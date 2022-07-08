class Player {
  constructor() {
    this.name = null
    this.positionX = 0
    this.positionY = 0
    this.index = 0
  }


  addPlayers() {
    var playersnode = "players/player" + this.index
    //  this.index ===1 means its car1(player1)  index===2 player2
    if (this.index === 1) {
      this.positionX = width / 2 - 100
    }
    else {
      this.positionX = width / 2 + 100
    }

    database.ref(playersnode).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      index: this.index
    })


  }


  getCount() {
    var countInfo = database.ref("playerCount")
    countInfo.on("value", (data) => {
      myPlayerCount = data.val()
    })
  
  }

  updateCount(countNumber) {
    database.ref("/").update({
      playerCount: countNumber
    })
  }


  getDistance() {
    var playersnode = database.ref("players/player" + this.index)
    playersnode.on("value", (data) => {
      var d = data.val()
      console.log(d)
      this.positionX = d.positionX
      this.positionY = d.positionY
    })
  }


  updatePlayerInfo(){
    var playersnode ="players/player" + this.index
    database.ref(playersnode).update({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      index: this.index
    })
  }

 static getPlayerInfo(){
    var playernode=database.ref("players")
    playernode.on("value",data=>{
      allPlayers=data.val()
    })
  }
}
