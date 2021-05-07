function forLoop(array) {
  for (let i = 1; i < 25; i++) {
  array.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`); //the readme says it not to add s on 1?
}
}
