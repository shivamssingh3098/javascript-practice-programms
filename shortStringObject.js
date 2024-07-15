let a = ["c:3", "a:1", "b:2", "d:4", "a:5", "b:8"];

const obj = {
  a: 1,
  b: 3,
  c: 5,
};

for (let i in obj) {
  console.log(i);
}
console.log("of wale");
for (let b of obj) {
  console.log(b);
}
