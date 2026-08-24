// // array stracture

// let arr = [3,4,5,6,7,8];
// let arr2 = ["apple","mango","lichi"];
// let arr3 = ["Mubassir", 1, [2,3,4], true];
// console.log(arr);
// console.log(arr2);
// console.log(arr3);


// let arr4 = new Array("Mubassir", 1, [2,3,4], true);
// console.log(arr4); --> xxxx
// let arr = [20]
// let carr = new Array(20).fill(0)
// console.log(arr)
// console.log(carr)

// console.log(arr.length)
// console.log(carr.length);

// let arr = [1, 3, 5, 8];
// console.log(arr[0])
// console.log(arr[2])
// arr[2] = 99;
// console.log(arr)
// arr[0] = 100;
// console.log(arr)

// let arr = [1, 3, 5, 100, 99];
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i] * 2);
// }

// for(let elem of arr){
//     console.log(elem)
// }

// for(let ind in arr){
//     console.log(ind)
// }

// // array methods

// let arr = [2, 5, "mubassir", 5, 8, 10, "alpha", "beta"];
// console.log(arr, arr.length);


// let a = arr.push(999);
// console.log(arr, a, arr.length)

// let b = arr.pop();
// console.log(arr);

// let c = arr.unshift("love");
// console.log(arr,arr.length);

// let d = arr.slice(0,5);
// console.log(d);

// let e = arr.splice(3,3, "BD", 71, "hackers");
// console.log(arr);

// let arr2 = [1,2,3]
// let f = [...arr,...arr2]
// // let f = arr.concat(arr,arr2);
// console.log(f);

// let g = arr.includes("love");
// console.log(g);

// let h = arr.indexOf(10);
// console.log(h);

// let i = arr.reverse();
// console.log(i);

// let j = arr.find(function (item){
//     return item ==="BD"
// });
// console.log(j);

// let k = arr.reverse();
// console.log(k);

// let heroes = ["spiderman", ["hulk", "hawkeye", ["mubassir"], "thor"]]
// console.log(heroes.flat(Infinity))

// let heroes = ['spiderman', 'ironman', 'hulk', 'thor', 'hawkeye', 'wanda'];
// heroes.sort();
// console.log(heroes)


// let arr3 = [2, 5, "mubassir", 5, 8, 10, "alpha", "beta"];

// arr3.map((emel, index , arr3)=>{
//     console.log(emel, index , arr3)
// })



// let arr = [1, 2, 5, 9, 10];

// let newArr = arr.map((elem)=>{
//     return elem*2;
// })
// console.log("originial array : ", arr);
// console.log(newArr)

// arr.forEach((elem, index)=>{
//     arr[index] = elem*2;
// })

// let filterArr = arr.filter((elem, index, arr)=>{
//     return elem > 5
// })

// let result = arr.reduce((acc, curr)=>{ 
//     return acc + curr
// }, 10)

// console.log(result);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// let arr3 = [...arr1];

// console.log(arr1);
// console.log(arr3);
// arr3.pop();
// console.log(arr1);
// console.log(arr3);


// let arr = [1,2,3, [99, 100]]
// let copyArr = [...arr];
// copyArr[3].push(23);
// console.log(arr)
// console.log(copyArr)

// let arr =[1,2,3,4];
// let arr2= console.log(arr); // --> xxxxx
// console.log(arr2)

// let arr = [1,2,3,4,5];
// let newarr = arr.map((elem,ind)=>{
//     console.log(elem,ind)
//     return ind;
    
// });
// console.log(newarr);

// let newarr = arr.map((elem)=>{
//     console.log(elem);
//     if(elem === 2){
//         return elem;
//     }
// })
// console.log(newarr)

// let newarr = arr.forEach((elem)=>{
//     console.log(elem);
//     return elem===2
// })
// console.log(newarr); 

//questions

// // 1>>> sum of students mark  

// let mark=[12,34,25,46,35,36,46,24,13,42,23,24,34,15,43,41,35];
// let total= mark.reduce((prev,curv)=>{
//     return prev+curv
// },0);
// let avr= total/mark.length;
// console.log(avr);
// console.log(total)

// // 2>> create a arrow with given length and fill with 0

// let length= Number(prompt("enter the length of array: "));
// let arr= new Array(length).fill(0);  

// console.log(arr);

// // 3>> create a arrow with given length and fill with 1 to n

// let length= Number(prompt("enter the length of array: "));
// let arr= new Array(length).fill("MUBASSIR");  
// arr.forEach((item, index) =>{
//     arr[index]=index+1;
// })
// console.log(arr);

// // 4>> check the give thing is array or not

// let arr=[1,2,3];
// let arr2=34;
// console.log(Array.isArray(arr2));
// console.log(Array.from("bd"))

// // check give sting is palindrom or not

//  let str= prompt("enter the the name: ");

//  let arr = Array.from(str);
//  let newarr = [...arr];
//  let plndrm = newarr.reverse();

//  console.log(arr);
//  console.log(plndrm);
//  if(newarr === plndrm){
//     console.log("its palindrome");
//  }else{
//     console.log("its a normal name");
//  }


// // make every words first letter capitalaized

// let str= prompt("enter the the name: ");

// let arr = str.split(" ");
// console.log(arr);

// let captlz = arr.map((elem,ind)=>{
//    return arr[ind][0].toUpperCase() + arr[ind].slice(1);
// });

// console.log(captlz.join(" "));