// //basics of promise

// console.log("start");

// let p1 = fetch("https://api.github.com/users");


// const p2 = p1.then((response)=> {
//     return response.json();
// });


// p2.then((response)=> {
//     console.log(response)
// })

// console.log("end");

// // promise chaining

// let p1 = fetch("https://api.github.com/users");

// p1.then((res)=> {
//     return res.json();
// })

// .then((data)=> {
//     console.log(data);
// })

// .catch ((err)=> {
//     console.log(err.message);
// })

// real world analogy

const orderDetail = {
    cost: 520,
    items: ["biryani", 'pani puri', 'pizza'],
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_name: "Dominos",
};

function placeOrder(orderDetail) {
    console.log(`Processing the payment of ${orderDetail.cost}`);

    return new Promise((resolve,reject)=> {
        setTimeout(() => {
        console.log("Payment completed and Order is placed");
        orderDetail.paymetStatus = true;  // ✅ Add new data
        resolve(orderDetail);
    }, 3000);
    })
}

function preparingOrder(orderDetail) {
    console.log(`${orderDetail.items} is getting Prepared `);

    return new Promise((resolve,reject)=> {
        setTimeout(() => {
        console.log("Your Order is prepared");
        orderDetail.token = "10"; 
        resolve(orderDetail);
    }, 3000);
    })
}

function pickupOrder(orderDetail) {
    console.log(`Delivery partner is on the way to pickup the order from ${orderDetail.restaurant_name}`);
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
        console.log("I have picked up your order");
        orderDetail.pickup = true;  // ✅ Mark as picked up
        resolve(orderDetail);
    }, 3000);
    })

}

function deleiverOrder(orderDetail) {
    console.log(`I am on my way to deliver the order ${orderDetail.customer_location}`);

    return new Promise((resolve,reject)=> {
        setTimeout(() => {
        console.log("Your order is delivered successfully");
        orderDetail.delivery = true; 
        resolve(orderDetail);
    }, 3000);
    })
}

placeOrder(orderDetail)
.then((orderDetail)=> preparingOrder(orderDetail))
.then((orderDetail)=> pickupOrder(orderDetail))
.then((orderDetail)=> deleiverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail)
})
.catch((error)=> {
    console.log(error.message);
})
