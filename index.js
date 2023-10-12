// Code your solutions in this file
let writeCards = function (names) {
  let thankYouMsgs = [];
  for (var i = 0; i < names.length; i++) {
    thankYouMsgs.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return thankYouMsgs;
}

let countDown = function (number) {
  for (var i = number; i > -1; i--) {
    console.log(i);
  }
}