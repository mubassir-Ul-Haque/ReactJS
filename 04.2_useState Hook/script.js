const button = document.querySelector("button");
const  count = document.querySelector("#count");
let num = 0;

function incraseNum(){
     num++;
     console.log(num)
    count.textContent=num;
    
}

button.addEventListener("click", incraseNum)
