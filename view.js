function updateView(){
    app.innerHTML = /*HTML*/`

    <div id="healthBox" class="box">
    <progress id="health" value="100" max="100"></progress>

    <div class="foodLvl">

    Food
         <div id="bar1Food" class="bar"> </div>
         <div id="bar2Food" class="bar"> </div>
         <div id="bar3Food" class="bar"> </div>
         <div id="bar4Food" class="bar"> </div>
         <div id="bar5Food" class="bar"> </div>
    </div>
    <div class="funLvl">
    Fun
        <div id="bar1Fun" class="bar"> </div>
        <div id="bar2Fun" class="bar"> </div>
        <div id="bar3Fun" class="bar"> </div>
        <div id="bar4Fun" class="bar"> </div>
        <div id="bar5Fun" class="bar"> </div>
    </div>
    <div class="cleanlinessLvl">
    Cleanliness
        <div id="bar1Clean" class="bar"> </div>
        <div id="bar2Clean" class="bar"> </div>
        <div id="bar3Clean" class="bar"> </div>
        <div id="bar4Clean" class="bar"> </div>
        <div id="bar5Clean" class="bar"> </div>
    </div>
</div>

<div id="catView">
    <img id="catImage" src="happyCat.png" alt="happyCat" >
    <div id="catsDialogue" class="dialogue">Here comes cats talk</div>

</div>

<div id="buttons" class="buttons">
    <img class= "imageButtons" src="happyCat.png" alt="" onclick="addFood()">
    <img class= "imageButtons" src="happyCat.png" alt="" onclick="play()">
    <img class= "imageButtons" src="happyCat.png" alt="" onclick="cleanTheRoom()">
</div>

    <div>
    <p>test test</p>
    <p id="counter">${model.food.timer}/${model.food.max}</p>
    <button onclick="runtimer()">clickit</button>
    <p id="testtest"> ${model.food.progress1} </p>

    </div>
    `;
}