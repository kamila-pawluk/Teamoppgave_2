function updateView(){
    app.innerHTML = /*HTML*/`
    <div>
    <p>test test</p>
    <p id="counter">${model.food.timer}/${model.food.max}</p>
    <button onclick="runtimer()">clickit</button>
    </div>
    `;
}