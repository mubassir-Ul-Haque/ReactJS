const form = document.querySelector('form');
const input = document.querySelector('input');
const tasklist = document.querySelector('#allTask');

form.addEventListener("submit",(evt)=> {
    evt.preventDefault();

    const text = input.value;
    
    if(text == ""){
        return;
    }

    const parent = document.createElement('div');
    parent.style.marginTop = "30px";

    const task = document.createElement('span');
    task.textContent = text;
    task.style.marginRight = "15px";

    const deletebtn = document.createElement('button');
    deletebtn.textContent = "Delete";
    deletebtn.style.marginRight = "15px";
    deletebtn.style.width = "50px";

    const donebtn = document.createElement('button');
    donebtn.textContent = "Done";
    donebtn.style.marginRight = "15px";
    donebtn.style.width = "50px";

    parent.append(task,donebtn,deletebtn);
    tasklist.append(parent);

    deletebtn.addEventListener("click",()=> {
    parent.remove();
    });


    donebtn.addEventListener("click",()=> {
    task.style.textDecoration = 'line-through';
    task.style.color = 'grey';
    });

    form.reset();

})