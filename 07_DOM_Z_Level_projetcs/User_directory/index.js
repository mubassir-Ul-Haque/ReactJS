let usercontainer = document.querySelector(".usercontainer");
let searchinp = document.querySelector("#searchinp");
let container = document.querySelector(".container");
let messg = document.createElement("h1");
messg.textContent="No user found";
messg.style.display="none";
container.append(messg);


const userProfiles = [
  {
    id: 1,
    name: "Liam Henderson",
    email: "liam.henderson@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATdoG34Rkl3Ni5BpKCmZMo211lVKUj_0f6a1P4p-KTg&s=10"
  },
  {
    id: 2,
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ-7fCio1kw2mRFkTT76lO2Iri-9S6bgdxhxRheHG9Q&s=10"
  },
  {
    id: 3,
    name: "Alexander Wright",
    email: "alex.wright@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ-7fCio1kw2mRFkTT76lO2Iri-9S6bgdxhxRheHG9Q&s=10"
  },
  {
    id: 4,
    name: "Emma Watson",
    email: "emma.watson@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqQcFTwzXBH0ZO9QczjUI-iKjrqeAJA0dPE3O15n70A&s=10"
  },
  {
    id: 5,
    name: "Ethan Brooks",
    email: "ethan.brooks@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqQcFTwzXBH0ZO9QczjUI-iKjrqeAJA0dPE3O15n70A&s=10"
  },
  {
    id: 6,
    name: "Olivia Chang",
    email: "olivia.chang@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyqQcFTwzXBH0ZO9QczjUI-iKjrqeAJA0dPE3O15n70A&s=10"
  },
  {
    id: 7,
    name: "Lucas Davies",
    email: "lucas.davies@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATdoG34Rkl3Ni5BpKCmZMo211lVKUj_0f6a1P4p-KTg&s=10"
  },
  {
    id: 8,
    name: "Ava Thompson",
    email: "ava.thompson@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSATdoG34Rkl3Ni5BpKCmZMo211lVKUj_0f6a1P4p-KTg&s=10"
  },
  {
    id: 9,
    name: "Mason Carter",
    email: "mason.carter@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvI5EBlXB4nDflN6g2jWn_HqqzekaW87LwA4l4hS48jg&s=10"
  },
  {
    id: 10,
    name: "Isabella Rossi",
    email: "isabella.rossi@example.com",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsrTYLuIsat-F48ohFUzoHBS8NTmm8RoxIsIwk1QbDw&s=10"
  },

];

function renderUser(arr){

          messg.style.display="none";
          if(arr.length === 0){
           messg.style.display="block" ;
           }
          
  usercontainer.innerHTML=``;
  arr.map((obj)=> {
  let elem = document.createElement("div");
  elem.className = 'userItem';
  elem.innerHTML = `
  <div class="userItem">
            <div class="image">
                 <img src="${obj.profilePic}" alt="error handeling message">
            </div>
            <div class="userdetails">
                <h3>${obj.name}</h3>
                <p>${obj.email}</p>
            </div>
        </div>`

  usercontainer.append(elem);
  })

}

renderUser(userProfiles);

function handleSearch(evt){
       let searchValue = evt.target.value; 
       let filteredUser = userProfiles.filter((obj)=> {
          return obj.name.toLowerCase().includes(searchValue.toLowerCase());
       });
       renderUser(filteredUser);
};


searchinp.addEventListener("input",handleSearch);


function emailSearch(evt){
       let searchValue = evt.target.value; 
       let filteredUser = userProfiles.filter((obj)=> {
          return obj.email.toLowerCase().includes(searchValue.toLowerCase());
       });
       renderUser(filteredUser);
};


searchinp.addEventListener("input",emailSearch);


