let year = 2004;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(" leap year % 400: " + year);
    } else {
      console.log(" not leap year ! % 400: " + year);
    }
  } else {
    console.log("leap year: ! % 100 " + year);
  }
  //   console.log("leap year: " + year);
} else {
  console.log("not leap year !%4: " + year);
}
