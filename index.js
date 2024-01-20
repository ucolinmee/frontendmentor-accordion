window.onload = init;

function init() {
    var button = document.getElementById("button-1");
    var text = document.getElementById("answer-1");
    button.onclick = function() {
        if (button.className === "plus") {
            button.className = "minus";
            button.src = "./assets/images/icon-minus.svg"
            text.classList.remove("hidden");
        } else {
            button.className = "plus";
            button.src = "./assets/images/icon-plus.svg"
            text.classList.add("hidden");
        }
    }
}
