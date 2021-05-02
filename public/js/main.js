


/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

/*----- init function -----*/
initialize();
function initialize(){
    /*----- event listeners -----*/
    console.log("init");
    startButton.addEventListener('click', startButtonEvent);
    stopButton.addEventListener('click', stopButtonEvent);
    
}

/*------------------------------ render and render helper functions ----------------------------*/

function render(){
    console.log("render")
}



/*------------------------------ controller functions ----------------------------*/

function startButtonEvent(e){
    e.preventDefault();
    render();
}

function stopButtonEvent(e){
    e.preventDefault();
    render();
}