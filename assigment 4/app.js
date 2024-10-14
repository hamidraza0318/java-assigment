let nameInput = document.querySelector("#userInput");
let btn = document.querySelector(".nameBtn")
let heading = document.querySelector(".heading")
btn.addEventListener("click", function () {
    heading.innerHTML = nameInput.value;
})

let descripInput = document.querySelector("#userInput")
let descripBtn = document.querySelector(".descripBtn")
let para = document.querySelector(".para")

descripBtn.addEventListener("click", function () {

    para.innerHTML = descripInput.value
})

let picBtn = document.querySelector(".picBtn");
let image = document.querySelector("#image")
let emty = 0;

picBtn.addEventListener("click",function () {
if(emty == 0){
    image.setAttribute("src","HAMID.jpg")
emty = 1;
}else if(emty == 1){
    image.setAttribute("src", "R.jpeg")
emty = 2;
}else if(emty == 2){
    image.setAttribute("src", "c:\Users\Tech Link\Desktop\mariyam\OIP.jpeg")
emty = 3;
}else if (emty === 3){
    image.setAttribute("src", "")
    emty = 0;
}
})

let body = document.querySelector(".box")
let backBtn = document.querySelector(".backBtn");
let colors = ["red", "yellow","green", "salmon", "aqua", "brown","crimson","blueviolet","chocolate","lightcoral","lightseagreen","red", "yellow","green", "salmon", "aqua", "brown","crimson","blueviolet","chocolate","lightcoral","lightseagreen" ]
let count = 0;
backBtn.addEventListener("click", function(){

body.style.backgroundColor = colors[count];
count++;
})

let resetBtn = document.querySelector(".resetBtn")

resetBtn.addEventListener("click", function(){
    heading.innerHTML = "hamid raza"
    para.innerHTML = "web developer"
    body.style.backgroundColor = "pink"
    image.setAttribute("src", "New folder/1725771270750.jpg")
})


// let nameBtn = document.querySelector(".nameBtn")
// let heading = document.querySelector(".heading")
// nameBtn.addEventListener("click", function(){

// heading.innerHTML = nameInput;

// })