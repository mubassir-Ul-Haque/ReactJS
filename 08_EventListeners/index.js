// selecting element and add eventlistener

// let a = document.querySelector("img");
// let Changed = false;
// function dblclick(){
//     if(Changed === false){
//     a.src="https://images.unsplash.com/photo-1786698857779-6f7459548e44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8";
//     a.alt="broken angel";
//     Changed= true;
//     }else{
//         a.src="https://plus.unsplash.com/premium_photo-1786631942444-ec2b06320387?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
//     Changed = false;
//     }
// }

// a.addEventListener("dblclick",  dblclick );

// // remove event listener

// a.removeEventListener("dblclick", dblclick);

// // common events

// // --->>> click, mouseover, keyup, submit, change, input

// let inp= document.querySelector("input");
// function input(data){
//     if(data.data !== null){
//      console.log(data.data)
// }}
// inp.addEventListener("input", input);

// change event

// let pop = document.querySelector("select");
// let map=document.querySelector("#mapper");

// pop.addEventListener("change", function (dets) {
//    map.textContent = `You selected: ${dets.target.value.toUpperCase()}`;
// })

// //screen typer
// let h1= document.querySelector("h1");
// window.addEventListener("keydown", function(del){
//   if(del.key === " "){
//       h1.textContent="SPC";
//   }else{
//       h1.textContent=del.key;
//   }

// })


 // // custom upload button
 console.log("JS FILE CONNECTED");
 let btn = document.querySelector("#btn");
 let uploadinp = document.querySelector("#uploadinp")

 function inputfile() {
 btn.textContent = "UPLOAD FILE"; 
 uploadinp.click();
 }
 btn.addEventListener("click", inputfile);

 uploadinp.addEventListener("change", function(dels){
    let fileName=dels.target.files[0];

    if(fileName){
      btn.textContent= fileName.name;
    }else{
      btn.textContent="UPLOAD FILE"
    }
 })