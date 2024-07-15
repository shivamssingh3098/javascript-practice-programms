function sevenBoom(arr) {
  let bool = false;
  arr.map((ele) => {
    let str = String(ele).split("");
    let aa = str.filter((d) => d == 7);
    console.log(str);
    if (aa.indexOf("7") != -1) {
      bool = true;
      console.log("d is ", aa);
    } else {
      if (!bool) bool = false;
    }
  });

  if (bool) {
    return "Boom!";
  } else {
    return "there is no 7 in the array";
  }
}

let ar1 = [1, 2, 3, 4, 5, 6, 7];
let ar2 = [8, 6, 33, 100];
let ar3 = [2, 55, 60, 97, 86];

// console.log(sevenBoom(ar1));

// console.log(sevenBoom(ar2));

console.log(sevenBoom(ar3));
