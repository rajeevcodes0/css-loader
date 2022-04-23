window.addEventListener("load",()=>{
    addAnimations();
    
    loadingTextHandler();

})

function loadingTextHandler(){
    let loadingText = document.getElementsByClassName("loading-text")[0];
    let dotCounter = 0;
    setInterval(()=>{
        if(dotCounter===0){
            loadingText.innerText="Loading";
        }else if(dotCounter===1){
            loadingText.innerText="Loading."
        }else if(dotCounter===2){
            loadingText.innerText="Loading.."
        }else if(dotCounter===3){
            loadingText.innerText="Loading..."
        }
        dotCounter=++dotCounter%4
    },500)
}

function addAnimations(){
    let allBoxes = document.getElementsByClassName("box");
    allBoxes[0].classList.add("box-one-animation-class");
    allBoxes[1].classList.add("box-two-animation-class");
    allBoxes[2].classList.add("box-three-animation-class");
    allBoxes[3].classList.add("box-four-animation-class");
    allBoxes[4].classList.add("box-five-animation-class");
    setTimeout(removeAnimations,5000);
}

function removeAnimations(){
    let allBoxes = document.getElementsByClassName("box");
    allBoxes[0].classList.remove("box-one-animation-class");
    allBoxes[1].classList.remove("box-two-animation-class");
    allBoxes[2].classList.remove("box-three-animation-class");
    allBoxes[3].classList.remove("box-four-animation-class");
    allBoxes[4].classList.remove("box-five-animation-class");
    setTimeout(addAnimations,100);
}