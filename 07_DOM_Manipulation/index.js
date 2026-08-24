//text manipulation

let first = document.querySelector("h1"); // Finds the first h1 element on the page
console.dir(first);
first.innerHTML="DOM Manipulation In Javascript"; // Updates the text content of the h1
first.style.backgroundColor="yellow"; // Directly updates the CSS background color property

//paragraph

let second = document.querySelector("p"); // Finds the first paragraph element
console.dir(second);
second.innerHTML="DOM Manipulation In Javascript"; // Updates the text content of the paragraph

//attribute

let third = document.querySelector("img"); // Finds the first image element
console.log(third);
third.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9J5MY-KtK-6YZA2VccpymCFyJSbVm39k2BFsq3Kn_A&s=10"); // Changes the image source path

//create element

let fourth = document.createElement("img"); // Creates a new image tag in memory but doesn't show it yet
fourth.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-Qr_tzqcmiG5dlCleVdoPj_d76OWn1etTfxB_qqXoA&s=10"); // Sets source link for new image
fourth.setAttribute("alt","broken image"); // Sets alt text for new image
const element = document.getElementById("after"); // Finds the element with id "after" to use as a position marker
document.querySelector("body");
element.before(fourth); // Physically inserts the new image right before the marker element

//convert to array

let fifth = document.getElementsByTagName("li"); // Gets a live list (HTMLCollection) which lacks array features
console.log(fifth);
for(let num of fifth){
    console.log(num);   //cant use map and foreach
}
let arr= [...fifth]; // Spreads the live list into a true JavaScript array
console.log(arr);
arr[0].innerHTML="lamp"; // Changes the inner HTML of the first item inside our new array

// unordered list add

const list = document.createElement("li"); // Creates a list item for milk
list.textContent = "milk";
const list2 = document.createElement("li"); // Creates a list item for bread
list2.textContent= "bread";
const list3 = document.createElement("li"); // Creates a list item for egg
list3.textContent = "egg";

const listelem = document.getElementById("fifth"); // Finds the parent ul element with id "fifth"

listelem.append(list); // Adds the milk element to the very end of the list
listelem.children[3].after(list2); // Targets the 4th child item and inserts bread right after it
listelem.children[0].before(list3); // Targets the 1st child item and inserts egg right before it

let arrlist = ["katchup","hatchup","handcup","worldcup"];
let p2 = document.querySelectorAll("ul li:nth-child(2n)");
p2.forEach(function(p){
    p.classList.add("styleprac");
})
const fragment = document.createDocumentFragment(); // Creates an invisible, lightweight virtual DOM container

for(let bom of arrlist){
   const list = document.createElement("li"); // Loops and creates a list item for each array string
   list.textContent=bom;
   fragment.append(list); // Saves items into the virtual container first to protect page performance
   
}

listelem.append(fragment); // Sends all the saved fragment items to the actual webpage at one single time

let myCustomArray = []; // Creates a regular, empty JavaScript array to hold nodes
let arrlist2 = ["bd","iran","palestine"];
for (let bom of arrlist2) {
   const item = document.createElement("li"); // Loops and creates list elements
   item.textContent = bom;
   
   myCustomArray.push(item); // Pushes each created list node into our personal array storage
}
listelem.append(...myCustomArray); // Spreads the array elements apart so append can add them all at once


// set font sixe of p tags

let p = document.querySelectorAll("p");
p.forEach(function(p){
    p.classList.add("styleprac");
})