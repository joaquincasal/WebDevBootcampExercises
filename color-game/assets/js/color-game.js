var dificulty = { "Easy": 3, "Hard": 6 };
var mode = "Hard";
var colors;
var chosenColor;
var gameOver = false;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var title = document.getElementById("title");
var resetButton = document.getElementById("reset");
var modeButtons = document.getElementsByClassName("mode");

function init(){
    setupModeButtons();
    setupSquares();
    setupResetButton();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            if (gameOver || this.textContent === mode) return;
            modeButtons[0].classList.remove("selected"); //TODO
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            mode = this.textContent;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === chosenColor){
                messageDisplay.textContent = "Correct :)";
                changeSquaresColors(chosenColor);
                title.style.backgroundColor = chosenColor;
                resetButton.textContent = "Play again";
                gameOver = true;
            } else {
                this.style.backgroundColor = document.body.style.backgroundColor;
                messageDisplay.textContent = "Wrong! Try again :)";
            }
        });
    }
}

function setupResetButton(){
    resetButton.addEventListener("click", function(){
        reset();
    });
}

function reset(){
    colors = generateRandomColors(dificulty[mode]);
    chosenColor = pickColor();
    colorDisplay.textContent = chosenColor;
    for(var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "Change colors";
    title.style.backgroundColor = "";
    messageDisplay.textContent = "";
    gameOver = false;
}

function changeSquaresColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var randomIndex = Math.floor(Math.random() * dificulty[mode]);
    return colors[randomIndex];
}

function generateRandomColors(n){
    var randomColors = [];
    for(var i = 0; i < n; i++){
        randomColors.push(randomColor());
    }
    return randomColors;
}

function randomColor(){
    var red = randomColorChannel();
    var green = randomColorChannel();
    var blue = randomColorChannel();
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color;
}

function randomColorChannel(){
    return Math.floor(Math.random() * 256);
}


init();
