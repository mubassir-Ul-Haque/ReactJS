let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let container = document.querySelector(".container");
let currentColorValue = document.querySelector(".currentColorValue");


const changeColor = (color)=> {
    container.style.backgroundColor = color;
    currentColorValue.innerText = color;

}

const handleRandomBtnClick = ()=> {
  const colors = [
  "Crimson", "DarkRed", "FireBrick", "LightCoral", "Salmon",
  "Coral", "Tomato", "OrangeRed", "DarkOrange", "Orange",
  "Gold", "Yellow", "LightYellow", "LemonChiffon", "PapayaWhip",
  "Moccasin", "PeachPuff", "PaleGoldenRod", "Khaki", "DarkKhaki",
  "Lavender", "Thistle", "Plum", "Violet", "Orchid",
  "Fuchsia", "Magenta", "MediumOrchid", "MediumPurple", "BlueViolet",
  "DarkViolet", "DarkMediumPurple", "Purple", "Indigo", "SlateBlue",
  "DarkSlateBlue", "GreenYellow", "Chartreuse", "LawnGreen", "Lime",
  "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen",
  "MediumSeaGreen", "SeaGreen", "ForestGreen", "Green", "DarkGreen"
];
  changeColor(colors[Math.floor(Math.random()*colors.length)]);
}

const handleApplyBtnClick = ()=> {
    const colorname = colorInput.value;
    changeColor(colorname);
}

randomBtn.addEventListener("click",handleRandomBtnClick);
applyBtn.addEventListener("click",handleApplyBtnClick);


setInterval(()=>{
    changeColor("black")
},10000);


const body = document.querySelector("body");

container.addEventListener("mouseover",(evt)=>{
  const left = evt.clientX;
  const top = evt.clientY;
  const dreamyColors = [
    "#ff9a9e", // Soft Pink
    "#fad0c4", // Peach Dream
    "#a1c4fd", // Sky Blue
    "#c2e9fb", // Pale Cyan
    "#fbc2eb", // Pastel Magenta
    "#a6c1ee", // Dreamy Periwinkle
    "#d4fc79", // Electric Lime/Green Glow
    "#96e6a1", // Soft Mint
    "#ff758c", // Neon Rose
    "#ff7eb3", // Bubblegum Pink
    "#7f00ff", // Neon Violet
    "#e100ff", // Vivid Purple-Pink
    "#30cfd0", // Aqua Teal
    "#330867", // Deep Cosmic Indigo
    "#b19cd9", // Pastel Lavender
    "#ffdac1"  // Warm Sunset Cream
];
  const circleElement = document.createElement("div");
  circleElement.classList.add("circle");
  circleElement.style.backgroundColor = dreamyColors[Math.floor(Math.random()*15)];

  circleElement.style.top = `${top}px`;
  circleElement.style.left = `${left}px`;

  container.append(circleElement);

  setTimeout(()=> {
    circleElement.remove();
  },30000)
})