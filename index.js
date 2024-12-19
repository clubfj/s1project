
let characterEl = document.getElementById("character")

document.addEventListener("keydown", (event) => {
    if(event.key == "w"){
        let previousTop = characterEl.style.top;
        characterEl.style.top = Number(previousTop.substring(0,previousTop.length-2)) - 2 + "px"
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key == "s"){
        let previousTop = characterEl.style.top;
        characterEl.style.top = Number(previousTop.substring(0,previousTop.length-2)) + 2 + "px"
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key == "a"){
        let previousTop = characterEl.style.left;
        characterEl.style.left = Number(previousTop.substring(0,previousTop.length-2)) - 2 + "px"
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key == "d"){
        let previousTop = characterEl.style.left;
        characterEl.style.left = Number(previousTop.substring(0,previousTop.length-2)) + 2 + "px"
    }
})