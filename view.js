function mainPageView(){
    app.innerHTML = /*HTML*/`

    <div id="healthBox" class="box">
    
</div>

<div id="catView">
    <img id="catImage" src="happyCat.png" alt="happyCat" >
    <div id="catsDialogue" class="dialogue">Here comes cats talk</div>

</div>

<div id="buttons" class="buttons">
    <img  src="happyCat.png" alt="" onclick="addFood()">
    <img  src="happyCat.png" alt="" onclick="play()">
    <img  src="happyCat.png" alt="" onclick="cleanTheRoom()">
</div>

    <div>
    <p>test test</p>
    <p id="counter">${model.food.timer}/${model.food.max}</p>
    <p id="progressBar"></p>
    <p id="testtest">above 40%=${model.food.progress1} </p>
    <button onclick="runtimer()">timer </button>
    <button onclick="giveFood()"> givefood </button>

    <div class="foodProgressBar" id="foodProgressBar"></div>
    </div>
    `;
    
}

function theGameOverView(){
    app.innerHTML = /*HTML*/`
    <div>
    <h1>You loose</h1>
        <div id="notification"></div>
        <button onclick="mainPageView()"> RESTART </button>
    </div>
    `

}

function catDied(){
    document.getElementById('notification').innerHTML += /*HTML*/ ` 
    <span>"Your friend died of hunger" </span>
    <img src="happyCat.png">
    `;
}
function catMovedOut(){
    document.getElementById('notification').innerHTML = "Your friend moved out because he was bored";
}
function catGotSick(){
    document.getElementById('notification').innerHTML = "Your friend got sick because you haven't clean";
}


