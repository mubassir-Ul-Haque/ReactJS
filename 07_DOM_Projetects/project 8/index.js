const body = document.querySelector("body");

body.addEventListener("mouseover",(evt)=>{
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

  body.append(circleElement);

  setTimeout(()=> {
    circleElement.remove();
  },3000)
})