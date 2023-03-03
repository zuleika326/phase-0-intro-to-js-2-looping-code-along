const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
const name = ["Guadalupe", "Ollie", "Aki",];
function writeCards(name, event) {
  return name.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);

}
console.log(writeCards(names, "birthday"))

function countDown(startInt) {
  while (startInt) {
    console.log(startInt);
    startInt -= 1;
  } console.log(startInt)
}
