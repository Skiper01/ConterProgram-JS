document.getElementById("incrementButton").onclick = function(){
    document.getElementById("count").textContent = parseInt(document.getElementById("count").textContent) + 1;
}

document.getElementById("decrementButton").onclick = function(){
    document.getElementById("count").textContent = parseInt(document.getElementById("count").textContent) - 1;
}

document.getElementById("resetButton").onclick = function(){
    document.getElementById("count").textContent = 0;
}