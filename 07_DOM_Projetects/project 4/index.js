const form = document.querySelector("form");
const income = document.querySelector("#income");

form.addEventListener("submit",(evt)=> {
    evt.preventDefault();
    const amount = parseInt(income.value);

    const result = document.querySelector("h2");
    let tax=0;
    if(amount<1200000){
    tax=0;}
    else if(amount<=1600000){
    tax=(amount-1200000)*.15;
    }
    else if(amount<=2000000){
    tax=(amount-1600000)*.20 + 60000;
    }
    else if(amount<=2400000){
    tax=(amount-2000000)*.25 + 60000 + 80000;
    }
    else{
    tax=(amount-2400000)*.30 + 60000 + 80000 + 100000;
    }

    result.textContent=`Your Sax Amount: ${tax}tk`;

})