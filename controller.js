function runtimer() {
  let timer = 50+Math.floor(Math.random() * 150);
  let max = timer;
  let interval = 100;
  let countdown = setInterval(() => {
  // if (model.gameover == true){
  //   clearInterval(countdown);
  // }
  if(model.food.food == true){
    model.food.food = false;
    clearInterval(countdown);
    setTimeout(runtimer,400);
    model.food.timer = model.food.max;
    let progressBar = 500;
    document.getElementById('counter').innerHTML = (`${model.food.timer}/${model.food.max}`);
    document.getElementById('progressBar').innerHTML = (`${progressBar}`);
    document.getElementById('foodProgressBar').style.width = (`${progressBar}px`);
    return;
       
  }
  else if(timer == 0) {
    clearInterval(countdown);
    // model.gameover = true;
    model.food.timer = timer;
    model.food.max = max;
    let progressBar = timer / max * 500;
    document.getElementById('counter').innerHTML = (`${model.food.timer}/${model.food.max}`);
    document.getElementById('progressBar').innerHTML = (`${progressBar}`);
    document.getElementById('foodProgressBar').style.width = (`${progressBar}px`);
    theGameOverView();
    catDied();
    
    return;
    // game over skjerm her
  }
  model.food.timer = timer;
  model.food.max = max;
  let progressBar = timer / max * 500;
  document.getElementById('foodProgressBar').style.width = (`${progressBar}px`);
  if (timer <= max*0.5) {
    model.food.progress1 = false;
  }
  else {
    model.food.progress1 = true;
  }
  document.getElementById('counter').innerHTML = (`${model.food.timer}/${model.food.max}`);
  document.getElementById('progressBar').innerHTML = (`${progressBar}`);
  document.getElementById('testtest').innerHTML = (`${model.food.progress1}`);
  timer--;
  }, interval); 
}
function giveFood(){
  model.food.food = true;
}


function addFood(){
  
}

function play(){

}

function cleanTheRoom(){

}
