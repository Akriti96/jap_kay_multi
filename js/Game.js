class Game {
  constructor() { }

  // getting gamestate value from firebase
  getState() {
    var stateInfo = database.ref("gameState")
    stateInfo.on("value", (data) => {
      myGameState = data.val()
    })
    console.log(myGameState)
  }

  updateState(stateNumber) {
    database.ref("/").update({
      gameState: stateNumber
    })
  }

  start() {
    myform = new Form();
    myform.display();

    myplayer = new Player();
    myplayer.getCount()


    car1 = createSprite(width / 2 - 100, height -100)
    car1.addImage("car1", car1Image)
    car1.scale = 0.07

    car2 = createSprite(width / 2 + 100, height - 100)
    car2.addImage("car2", car2Image)
    car2.scale = 0.07

    cars = [car1, car2]
  }



  play() {
    myform.hide()
    myform.titleImg.position(40, 80)
    myform.titleImg.class("changeTitle")
    Player.getPlayerInfo()
    // console.log(allPlayers)
    if (allPlayers !== undefined) {
      // image(nameImage,x,y,w,h)
      image(trackImage, 0, -height * 5, width, height * 6)

      var index = 0
      for (var i in allPlayers) {
        // console.log(i) i means player1 and player2 in allplayers
        index = index + 1

        var x = allPlayers[i].positionX
        var y = height-allPlayers[i].positionY

        // cars=[car1,car2]
        // index=1  cars[1-1]= cars[0]= car1
        // index=2  cars[2-1]= cars[1]= car2
        cars[index - 1].position.x = x
        cars[index - 1].position.y = y

        // active window
        if (index === myplayer.index) {
          stroke("red")
          strokeWeight(4)
          fill("black")
          ellipse(x,y,80,80)
          // camera.position.x = cars[index - 1].position.x
          camera.position.y = cars[index - 1].position.y
        }
      }

    }


    if (keyDown("up")) {
      myplayer.positionY += 10
      myplayer.updatePlayerInfo()
    }

    drawSprites()

  }


  end() {

  }
}
