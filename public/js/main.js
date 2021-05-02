


/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

/*----- init function -----*/
initialize();
function initialize(){
    /*----- event listeners -----*/
    console.log("init");
    randomButtonElem.addEventListener('click', randomButtonEvent);
    
}

/*------------------------------ render and render helper functions ----------------------------*/

async function render(){
    const data = await getRandomIdea();
    const idea = data["idea"];
    console.log(data["idea"], "data")
    resultElem.innerHTML = '';
    let result = document.createElement('h3');
    result.setAttribute('class', "idea");
    result.textContent = idea;
    resultElem.appendChild(result);
}

// async function randomAPIcall(){
//     const data = await getRandomIdea()
//     console.log(data, "API Call <----");
//     return data;
// }

function getRandomIdea(){
    return fetch('/api/random').then(res => res.json());

}

/*------------------------------ controller functions ----------------------------*/

function randomButtonEvent(e){
    e.preventDefault();
    render();
}