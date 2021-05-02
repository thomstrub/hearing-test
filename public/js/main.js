


/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// sound -----------------------------------------------*/

var context = new AudioContext()
var o = context.createOscillator()
o.type = "sine"

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
    o.start();
}

function stopButtonEvent(e){
    e.preventDefault();
    o.pause();
    connect();
}