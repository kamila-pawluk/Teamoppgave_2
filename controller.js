function foodtimer() {
    let timer = 5+Math.floor(Math.random() * 15);
    let max = timer;
    model.food.max = 
    let interval = 1000;
    let countdown = setInterval(() => {
    if(timer <= 1) {
      clearInterval(countdown);
      runtimer();
    }
      timer--;
      model.food.timer = timer;
      updateView();
    }, interval); 
    

    //clearIntervalIfGameOver
  }

function addFood(){

}

function play(){

}

function cleanTheRoom(){

}

  function goToGameOverView(){
        //changeToGameOverView
  }
