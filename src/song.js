"use strict";

const animals = ["fly", "spider", "bird", "cat", "dog", "cow", "horse"];
const sentenceIDontKnow = `\nI don't know why she swallowed a fly - perhaps she'll die!`;
let initialCounter = 1;
const sentenceThereWasAnOldLady = (animal) => `There was an old lady who swallowed a ${animal};`;
const sentenceSheSwallowed = (n) => {
  const verse = [];
  for (let i = n; i>0 ; i--) {
    verse.push(`She swallowed the ${animals[i]} to catch the ${animals[i-1]}${ i===1 ? ";" : ",\n" }`);
  }
  verse.push(sentenceIDontKnow);
  initialCounter ++;
  return verse.join("");
}

const song = `${sentenceThereWasAnOldLady(animals[0]).replace(";", ".")}${sentenceIDontKnow}

${sentenceThereWasAnOldLady(animals[initialCounter])}
That wriggled and wiggled and tickled inside her.
${sentenceSheSwallowed(initialCounter)}

${sentenceThereWasAnOldLady(animals[initialCounter])}
How absurd to swallow a bird.
${sentenceSheSwallowed(initialCounter)}

${sentenceThereWasAnOldLady(animals[initialCounter])}
Fancy that to swallow a cat!
${sentenceSheSwallowed(initialCounter)}

${sentenceThereWasAnOldLady(animals[initialCounter])}
What a hog, to swallow a dog!
${sentenceSheSwallowed(initialCounter)}

${sentenceThereWasAnOldLady(animals[initialCounter])}
I don't know how she swallowed a cow!
${sentenceSheSwallowed(initialCounter)}

${sentenceThereWasAnOldLady(animals[initialCounter]).replace(";", "...")}
...She's dead, of course!`;

console.log(song);

module.exports = song;