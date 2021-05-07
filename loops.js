function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`); //the readme says it not to add s on 1?
}
return array;
};
var whileLoop = (n) => {
  while (n>0) {
    console.log(n);
    n--;
  }
  return "done";
}
