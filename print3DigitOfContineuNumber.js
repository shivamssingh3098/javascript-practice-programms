let str = "121123334566678588";
let count = 1;
let numString = "";

for (let index = 0; index < str.length; index++) {
  if (str.charAt(index) === str.charAt(index + 1)) {
    count += 1;
  }
  if (count === 3) {
    numString += str.charAt(index) + str.charAt(index) + str.charAt(index);
    count = 1;
  }
}
console.log("finally", numString);
