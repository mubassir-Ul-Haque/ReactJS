// let obj ={
//     name:"mubassir",
//     age:16,
//     gender:"male",
// }

// console.log(obj);


// // basics of Objects

// let car={
//     name:"lamborghini",
//     model:2017,
//     isnew:true,
//     start:() => {
//        return console.log("starting the car");
//     },
//     stop:function(){
//       return console.log("stopping the car");
//     }
// }

// let test = "full name"

// console.log(car);
// car.stop();
// car.start();

// console.log(car["name"])
// car["start"]()
// console.log(car[test])


// let obj = new Object({
//     name: "manas"
// })

// let obj2 = {
//  falna: "laskjdf",
//  dhikna: "ldkjfldsf"   
// }

// obj.age = 19
// obj2.gamma = "something"
// obj.havemoney = 30000;

// console.log(obj)
// console.log(obj2)

// let obj = {
//     "name": "mubassir",
//     age: 23,
// }

// obj.name = "Mubassir ul haque"
// obj.city = "bhagalpur"

// delete obj.age;

// console.log(obj);


// this. in object

// let obj ={
//     name:"alpha"
// }

// obj.greet = function(){

//     obj.greet= 2;
//     function internal(){
//         console.log(this);
//     }
//     internal();
// }

// console.log(obj);
// obj.greet();
// console.log(obj.greet);

// // key,entries, value in object

// let car={
//     name:"lamborghini",
//     model:2017,
//     isnew:true,
// }

// let keys = Object.keys(car);
// console.log(keys);

// let values = Object.values(car);
// console.log(values);

// let entries = Object.entries(car);
// console.log(entries);

// let obj={
//     name:"mubassir",
//     age:23
// }

// let obj2 ={...obj};
// obj2.age= 23;

// Object.freeze(obj2);
// Object.seal(obj);

// obj2.gender="male";
// obj.gender="male";
// obj.name="male";
// delete obj.name;

// console.log(obj);
// console.log(obj2)

// console.log(obj.hasOwnProperty("age"));





// // distracture

// let obj={
//     name:"mubassir",
//     age:"16",
//     roll:23,
// }

// let {name,age,roll} = obj;
// console.log(name,age,roll);


// let arr=["mubassir", true, false, 34];
// let [name,,istrue,mobile] = arr;
// console.log(istrue,mobile,name)

// // question 1 >>> 
// let person={
//     name:"mubassir",
//     age:16,
//     city:"dhaka"
// }


// person.email = "email@gmail.com"
// delete person.city;

// for(let key in person){
//     console.log(`Value of ${key} is ${person[key]}`);
// }

// // question 2 >>>

// let name={
//     firstname:"mubassir",
//     middlename:"ul",
//     lastname:"haque",
// }

// let fullname = `${name.firstname} ${name.middlename} ${name.lastname}`
// console.log(fullname);



// // question 3 >>>

// let person={
//     name:"mubassir",
//     age:16,
//     city:"dhaka"
// }
// let keys= Object.keys(person).length;
// console.log(keys);


// // question 4>> admin access

// let arr = [
//     {name:"mubassir", role:"admin"},
//     {name:"lisan", role:"host"},
//     {name:"rafi", role:"executive"},
//     {name:"ariyan", role:"admin"},
// ]

// let find =arr.filter((item)=>{
//     return item.role==="admin"
// })

// let list= find.map((item)=>{
//      return item.name
// })

// console.log(list)


// // question5:

// let products = [
//     {id:1, name: "samsung Galaxy"},
//     {id:2, name: "poco m24"},
//     {id:3, name: "apple m2"}
// ]

// function search(products, searchkeyword){
//    let filtered= products.filter((item)=>{
//        return item.name.toLowerCase().includes(searchkeyword.toLowerCase())                //=== searchkeyword.toLowerCase()
//     })
//     console.log(filtered);
// }

// search(products,"p");



// // questin 6:
let comments = [
    { postId: 1, comment: "hello" },
    { postId: 2, comment: "owesome video bhaiya" },
    { postId: 1, comment: "how are you" },
    { postId: 1, comment: "hello" },
    { postId: 2, comment: "owesome video bhaiya" },
    { postId: 1, comment: "how are you" }
]

function group(comments){
    let groupcomments = {};

    comments.forEach(com =>{
        let {postId , comment} = com;

        if(groupcomments.hasOwnProperty(postId)){
            groupcomments[postId].push(comment)
        }else {
            groupcomments[postId]= [comment]
        }
    });

    console.log(groupcomments);
}

group(comments);


function group(comments){
    let groupcom = {};

    comments.forEach(com=>{
       let {postId,comment} = com;

       if(groupcom.hasOwnProperty(postId)){
        groupcom[postId].push(comment);
       }else{
        groupcom[postId]=[comment]
       }
        console.log(groupcom)
    })
}

group(comments);

// // question 7:

// let params = {
//     search: "alpha",
//     page: 2,
//     sort: 'asc',
//     falna: 'aldsjf',
// }

// function createUrl(params){
//     let url = "";
//     for(let key in params){
//         url = url + `${key}=${params[key]}&`
//     }
//     let finalUrl = url.slice(0, url.length-1)
//     return finalUrl
// }


// let url = createUrl(params)
// console.log(url)
