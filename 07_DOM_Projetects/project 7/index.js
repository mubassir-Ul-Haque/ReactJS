const quotes = [
    "money cant buy happiness",
    "to earn money u need to study",
    "hardwork will give u freedom",
    "status dont matter",
    "happiness depends on mindset",
    "people dont think about your money",
    "status is more important then money"
]
const h1 = document.querySelector("h1");
const btn = document.querySelector("#btn");
btn.addEventListener("click",()=> {
    const index = Math.floor(Math.random()*6);
    h1.textContent=quotes[index];
})