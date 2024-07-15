// lexical scope

function ram(color) {
  let name1 = "shivam singh";
  return function syam() {
    console.log(color);
    document.body.style.backgroundColor = color;
  };
  // syam();
}

let fun = ram("alok");
console.log(fun());

document.getElementById("blue").onclick = ram("blue");
document.getElementById("orange").onclick = ram("orange");

// promises------------------------

// const createOrder = (cart) => {
//   const p = new Promise((resolve, reject) => {
//     let orderData = {};
//     if (cart.length < 1) {
//       let err = new Error("Cart is empty");
//       reject(err);
//     } else {
//       let message = "Order created successfully";
//       orderData.message = message;
//       orderData.orderId = 100000;
//       orderData.cart = cart;

//       resolve(orderData);
//     }
//   });
//   return p;
// };

// const proceedToPayment = (orderData) => {
//   const pm = new Promise((resolve, reject) => {
//     if (orderData.orderId) {
//       orderData.payment = true;
//       orderData.message = "payment done successfully";
//       resolve(orderData);
//     } else {
//       orderData.payment = false;
//       orderData.message = "payment not done";
//       reject(orderData);
//     }
//   });
//   return pm;
// };

// const showOrderSummary = (orderData) => {
//   console.log("Show Order Summary", orderData);
//   //   const or = new Promise((resolve, reject) => {
//   //     if(orderData.payment){
//   //         resolve
//   //     }
//   //   });
// };

// const cart = [];

// createOrder(cart)
//   .then((orderData) => proceedToPayment(orderData))
//   .then((orderData) => showOrderSummary(orderData))
//   .catch((err) => {
//     console.log(err.message);
//   });

// simple promises code

// function createPromise(number) {
//   const promise = new Promise((resolve, reject) => {
//     if (number % 2 === 0) {
//       setTimeout(() => {
//         resolve(true);
//       }, 5000);
//       //   console.log("number is even");
//     } else {
//       reject(false);
//     }
//   });
//   return promise;
// }

// const p = createPromise(10)
//   .then((promise) => even(promise))
//   .catch((promise) => odd(promise));
// // console.log("promise created", p);

// const even = (promise) => {
//   console.log("even called");
// };
// const odd = (promise) => {
//   console.log("odd called");
// };
