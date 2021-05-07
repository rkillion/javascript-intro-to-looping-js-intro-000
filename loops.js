function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`); //the readme says it not to add s on 1?
}
}
