
// // callback function

// function someTimeLater(fnc){
//     setTimeout(fnc,(Math.floor(Math.random()*10)*1000));

// }
// someTimeLater(function () {
//     console.log(("hey"));
// });


// // callback hell

//  function profileFetch(username, cb){
//     console.log("fetching user data....")
//     setTimeout(()=> {
//         console.log((`profile fetched of ${username}`));
//         cb({_id:20221 , username , age: 26, email:"huihui@gmail.com"});
//     },2000);
//  }

//  function fetchPost(id , cb){
//     console.log("fetching user posts....")
//     setTimeout(()=> {
//         cb({_id:id , posts:["hey" , "hellow" , "hi" , "hulululu"]})
//     },1000)
//  }

//  function fetchComments(id , cb){
//     console.log("fetching user commentss....")
//     setTimeout(()=> {
//         cb({_id:id , posts:["Fire" , "Infromative" , "Good Job" , "Best video"]})
//     },1000)
//  }

//  profileFetch("mubassir", function(profiledata){
//     console.log(profiledata); 
//     fetchPost(profiledata._id , function(posts) {
//         console.log(posts)
//             fetchComments(profiledata._id , function(comments) {
//                console.log(comments)
//     });
//     });
    
//  }); 

// // promises

// let pr = new Promise(function(res , rej){
//     setTimeout(() => {
//         let rn = Math.floor(Math.random()*10);
//         if(rn <=5) res(`reslove with `+rn);
//         else rej(`reject with `+rn);
//     }, 1000);
// })

// // pr
// // .then(function (val) {
// //     console.log(val);
// // })
// // .catch(function (val) {
// //     console.log(val);
// // });

// async function abcd() {
//    try{
//      let val = await pr;
//      console.log(val);
//    } catch (err){
//       console.log(err);
//    }
    
// }
// abcd();


