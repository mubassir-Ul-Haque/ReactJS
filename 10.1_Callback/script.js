
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
//         console.log(posts);
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


// Real-World Analogy

const orderDetail = {
    cost: 520,
    items: ["biryani", 'pani puri', 'pizza'],
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_name: "Dominos",
};

function placeOrder(orderDetail, Callback) {
    console.log(`Processing the payment of ${orderDetail.cost}`);

    setTimeout(() => {
        console.log("Payment completed and Order is placed");
        orderDetail.paymetStatus = true;  // ✅ Add new data
        Callback(orderDetail);  // 👉 Pass to next step
    }, 3000);
}

function preparingOrder(orderDetail, Callback) {
    console.log(`${orderDetail.items} is getting Prepared `);

    setTimeout(() => {
        console.log("Your Order is prepared");
        orderDetail.token = "10";  // ✅ Add token number
        Callback(orderDetail);  // 👉 Pass to next step
    }, 3000);
}

function pickupOrder(orderDetail, Callback) {
    console.log(`Delivery partner is on the way to pickup the order from ${orderDetail.restaurant_name}`);

    setTimeout(() => {
        console.log("I have picked up your order");
        orderDetail.pickup = true;  // ✅ Mark as picked up
        Callback(orderDetail);  // 👉 Pass to next step
    }, 3000);
}

function deleiverOrder(orderDetail) {
    console.log(`I am on my way to deliver the order ${orderDetail.customer_location}`);

    setTimeout(() => {
        console.log("Your order is delivered successfully");
        orderDetail.delivery = true;  // ✅ Final status
    }, 1000);
}

placeOrder(orderDetail, (orderDetail) => {
    // This function doesn't run immediately
    // It WAITS for placeOrder to finish
    // THEN it runs with the updated orderDetail

    preparingOrder(orderDetail, (orderDetail) => {
        // This WAITS for preparingOrder to finish
        // Then runs with the updated orderDetail

        pickupOrder(orderDetail, (orderDetail) => {
            // And so on...
            deleiverOrder(orderDetail);
        });
    });
});
