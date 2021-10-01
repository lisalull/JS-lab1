"use strict";

const name = "Lisa Lull";
let age = 30;
const birthday = "September 6";
let pineapplePizza = true;
const lifeEvents = [
  "I went to Central Michigan University.",
  "I lived in Chicago for 7 years.",
  "I adopted my dog Reggie.",
  "This year I bought a house, got engaged, and turned 30!",
];
if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !== 5`);
    counter++;
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
