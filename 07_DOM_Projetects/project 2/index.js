const redbtn = document.querySelector("#red");
const bluebtn = document.querySelector("#blue");
const greenbtn = document.querySelector("#green");
const yellowbtn = document.querySelector("#yellow");
const pinkbtn = document.querySelector("#pink");
const body = document.querySelector("body");

redbtn.addEventListener("click",()=> {
    body.style.backgroundColor="red";
})

bluebtn.addEventListener("click",()=> {
    body.style.backgroundColor="blue";
})

greenbtn.addEventListener("click",()=> {
    body.style.backgroundColor="green";
})

yellowbtn.addEventListener("click",()=> {
    body.style.backgroundColor="yellow";
})

pinkbtn.addEventListener("click",()=> {
    body.style.backgroundColor="pink";
})
