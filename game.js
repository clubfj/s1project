
let characterEl = document.getElementById("character")

document.addEventListener("keydown", (event) => {
    if(event.key == "w"){
        let previousTop = characterEl.style.top;
        characterEl.style.top = Number(previousTop.substring(0,previousTop.length-2)) - 2 + "px"
       let yPos = document.getElementById("currentYPosition")
        yPos.innerText = characterEl.style.top 
    }
    if(event.key == "s"){
        let previousTop = characterEl.style.top;
        characterEl.style.top = Number(previousTop.substring(0,previousTop.length-2)) + 2 + "px"
        let yPos = document.getElementById("currentYPosition")
        yPos.innerText = characterEl.style.top 
    }
    if(event.key == "a"){
        let previousLeft = characterEl.style.left;
        characterEl.style.left = Number(previousLeft.substring(0,previousLeft.length-2)) - 2 + "px"
        let xPos = document.getElementById("currentXPosition")
        xPos.innerText = characterEl.style.left
    }
    if(event.key == "d"){
        let previousLeft = characterEl.style.left;
        characterEl.style.left = Number(previousLeft.substring(0,previousLeft.length-2)) + 2 + "px"
        let xPos = document.getElementById("currentXPosition")
        xPos.innerText = characterEl.style.left
    }
})

 