function mainPageView(){
    model.gameover = false;
    app.innerHTML = /*HTML*/`
    
  

<div id="catView">
    <img id="catImage" src="https://www.novelupdatesforum.com/attachments/giphy-1-gif.91277/" alt="happyCat" alt="happyCat">
    <p id="catsDialogue" class="dialogue">Here comes cats talk</p>

</div>

<div id="buttons" class="catButtons">
    <img  src="https://media4.giphy.com/media/1qeMVoOlGWcL0CIYw3/giphy.gif?cid=6c09b952bot6lbummp8nyhhrt30fnflhxcr4jzoe0hmg23bq&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" onclick="giveFood()">
    <img  src="https://i.pinimg.com/originals/4f/d1/75/4fd1753e32bfccc4577a3d145c40c915.gif" alt="" onclick="play()">
    <img  src="https://i.pinimg.com/originals/a3/4e/ab/a34eab87b6db60713c9ff9b5acef9534.gif" alt="" onclick="cleanTheRoom()">
    <img  src="https://i.pinimg.com/originals/57/0b/9b/570b9b3337bd96bbe364f2f991fe65da.gif" alt="" onclick="pet()">
</div>

    <div>
      <button onclick="runtimer(), runtimerFun(), runtimerClean(), runtimerPet()">Start game</button>

    <button onclick="runtimer()">timer </button>
    <button onclick="runtimerFun()">timerFun </button>
    <button onclick="runtimerClean()">timerClean</button>
    <button onclick="runtimerPet()">timerPet</button>

    <div id="healthBox" class="box">
     <span>Food</span><br/>
    <div class="progressBar" id="foodProgressBar"></div> 
    <span>Fun</span><br/>  
    <div class="progressBar" id="funProgressBar"></div>
    <span>Cleanliness</span>
    <div class="progressBar" id="cleanProgressBar"></div>
    <span>Pet</span>
    <div class="progressBar" id="petProgressBar"></div> 
    
    </div>
    </div>
    `;
    
}

function theGameOverView(){
    app.innerHTML = /*HTML*/`
    <div>
    <h1>You loose</h1>
        <div id="notification"></div>
        <button onclick="mainPageView()" class ="restartButton"> RESTART </button>
    </div>
    `

}

function catDied(){
    document.getElementById('notification').innerHTML += /*HTML*/ ` 
    <span>"Your friend died of hunger" </span>
    <img class = "RIP" src="https://static.vecteezy.com/system/resources/previews/012/589/327/non_2x/grave-rip-hand-drawn-halloween-illustration-free-png.png">
    `;
}
function catMovedOut(){
    document.getElementById('notification').innerHTML += /*HTML*/ ` 
    <span> "Your friend moved out because he was bored" </span>`
}
function catGotSick(){
    document.getElementById('notification').innerHTML += /*HTML*/ ` 
    <span> "Your friend got sick because you haven't clean" </span>`
}
function catHasLackOfHuggies(){
    document.getElementById('notification').innerHTML += /*HTML*/ ` 
    <span> "Your friend died of lacking head pats" </span>`
}


