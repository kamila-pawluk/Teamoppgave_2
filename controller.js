function runtimer() {
    let timer = 50+Math.floor(Math.random() * 150);
    let max = timer;
    let interval = 100;
    let countdown = setInterval(() => {
    if(timer == 0) {
      clearInterval(countdown);
      runtimer();
    }
    model.food.timer = timer;
    model.food.max = max;
    if (timer <= max*0.5) {
      model.food.progress1 = false;
    }
    else {
      model.food.progress1 = true;
    }
    updateView();
    timer--;
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
