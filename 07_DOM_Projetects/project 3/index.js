const from = document.querySelector("form");


from.addEventListener("submit",(evt)=> {
     evt.preventDefault();
     const Boy = document.querySelector("#boy");
     const Girl = document.querySelector("#girl");
    
     const l1 = Boy.value.length;
     const l2 = Girl.value.length;

     const result = Math.pow(l1+l2,3)%101;

     document.querySelector("h2").textContent=`Result: ${result}% real love`;
})