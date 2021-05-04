


/*----- app's state (variables) -----*/

let state = {
    on: false,
    hertz: 0,
    score: "",
}

/*----- cached element references -----*/
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const score = document.getElementById('score');

// sound -----------------------------------------------*/

var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();

// interval
var hearingTest;


/*----- init function -----*/
initialize();
function initialize(){
    
    /*----- event listeners -----*/
    
    state.score = document.createElement('h3');
    score.appendChild(state.score);
    startButton.addEventListener('click', startButtonEvent);
    stopButton.addEventListener('click', stopButtonEvent);
    resetButton.addEventListener('click', resetButtonEvent);
    
}

/*------------------------------ render and render helper functions ----------------------------*/

function changeScore(){
    score.removeChild(state.score);
    state.score = document.createElement('h3');
    state.score.innerText = state.hertz;
    score.appendChild(state.score); 
    
}

function changeFrequency(){
    state.hertz += 1;
    o.frequency.value = state.hertz
    changeScore();
}

/*------------------------------ controller functions ----------------------------*/

function startButtonEvent(e){
    e.preventDefault();
    state.on = true;
    o = context.createOscillator();
    g = context.createGain();
    o.frequency.value = state.hertz;
    o.type = "sine";
    o.connect(g);
    g.connect(context.destination);
    o.start(0);
    hearingTest = setInterval(changeFrequency, .5);
    
}

function stopButtonEvent(e){
    e.preventDefault();
    state.on = false;
    clearInterval(hearingTest);
    o.connect(g);
    g.connect(context.destination);
    g.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + 0.04
    );
}

function resetButtonEvent(){
    score.removeChild(state.score);
    state = {
        on: false,
        hertz: 0,
        score: "",
    }
    initialize();
}