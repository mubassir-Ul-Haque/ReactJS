const form = document.querySelector('form');
const answer= {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
}

form.addEventListener("submit",(evt)=> {
     evt.preventDefault();

     const data = new FormData(form);
     let finalscore = 0;


     for( let [name,value] of data.entries()){
        if(answer[name]==value)
            finalscore++;
     };
    
     document.querySelector("#out").textContent = `Your score is ${finalscore} out of 5`



     form.reset();
})