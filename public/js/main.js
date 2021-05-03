


/*----- app's state (variables) -----*/

const state = {
    on: false,
    hertz: 150
}

/*----- cached element references -----*/
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// sound -----------------------------------------------*/

var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();


/*----- init function -----*/
initialize();
function initialize(){
    connect();
    /*----- event listeners -----*/
    console.log("init");
    startButton.addEventListener('click', startButtonEvent);
    stopButton.addEventListener('click', stopButtonEvent);
    
}

/*------------------------------ render and render helper functions ----------------------------*/

function connect(){
    o.connect(context.destination)
    
    
}



/*------------------------------ controller functions ----------------------------*/

function startButtonEvent(e){
    e.preventDefault();
    o = context.createOscillator();
    g = context.createGain();
    o.frequency.value = 100;
    o.type = "sine";
    o.connect(g);
    g.connect(context.destination);
    o.start(0);
}

function stopButtonEvent(e){
    e.preventDefault();
    o.connect(g);
    g.connect(context.destination);
    g.gain.exponentialRampToValueAtTime(
        0.00001, context.currentTime + 0.04
    );
}