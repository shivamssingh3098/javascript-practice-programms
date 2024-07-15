// let arr = [75, 67, 8, 3, 6, 3, 6, 5, 4, 5, 4, 6, 300, 400];

// function loop() {
//   let newarr = [0, 2];
//   let arr = [75, 67, 8, 3, 6, 3, 6, 5, 4, 5, 4, 6, 300, 400];
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     for (let j = 0; j < newarr.length; j++) {
//       console.log("sdf", newarr[j]);
//       if (newarr[j] === arr[i]) {

//         console.log(j);
//       } else {
//         console.log(i);
//         //  console.log("f "+ newarr[j]+ "and "+ arr[i] + " "+ j +" and " + i)
//         newarr.push(arr[i]);

//       }
//     }
//   }

//   console.log(newarr);
//   console.log("fand ");
// }

// loop();

// function loop() {
//   let newarr = [];
//   let arr = [75, 67, 8, 3, 6, 3, 6, 5, 4, 5, 4, 6, 300, 400];
//   for (let index = 0; index < arr.length; index++) {
//  for (let i = 0; i < arr.length; i++) {

//   }

// }
// loop();
// let arr = [75, 67, 8, 3, 6, 3, 6, 5, 4, 5, 4, 6, 300, 400];
// let res = arr.filter((a, i) => {
//   return arr.indexOf(a) === i;
// });
// console.log(res);

function loop() {
  let arr = [75, 67, 8, 3, 6, 3, 6, 5, 4, 5, 4, 6, 300, 400];
  let sor = [];
  let c = 0;
  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < sor.length; i++) {
      if (sor[i] === arr[index]) {
        c++;
      }
    }
    if (!c > 0) {
      sor.push(arr[index]);
    }
    c = 0;
  }

  console.log("final sorted array is   --- ", sor);
}
loop();
