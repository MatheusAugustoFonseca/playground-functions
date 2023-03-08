// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}
// codeReview
// return param1 && param2

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  const splited = string.split(' ');
  return splited;
}

// Desafio 4
function concatName(array) {
  let concatingLast = array.slice(-1);
  let concatingFirst = array[0];
  return `${concatingLast}, ${concatingFirst}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNum) {
  let numberCheck;
  for (let index of arrayNum) {
    if (numberCheck === undefined || index > numberCheck) {
      numberCheck = index;
      console.log(numberCheck);
    }
  }
  return (arrayNum.filter((number) => number === numberCheck).length);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catOnePosition = Math.abs(mouse - cat1);
  let catTwoPosition = Math.abs(mouse - cat2);
  if (catOnePosition === catTwoPosition) {
    return 'os gatos trombam e o rato foge';
  } if (catOnePosition < catTwoPosition) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function checkFizzBuzz(numero) {
  if (numero % 5 === 0 && numero % 3 === 0) {
    return 'fizzBuzz';
  }
  if (numero % 5 === 0) {
    return 'buzz';
  }
  if (numero % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}

function fizzBuzz(arrayInt) {
  let newArray = [];
  for (let number of arrayInt) {
    newArray.push(checkFizzBuzz(number));
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let encodedWord = string;
  let vowel = 'aeiou';
  let index = 1;
  for (let letter of vowel) {
    encodedWord = encodedWord.replaceAll(letter, index);
    index += 1;
  }
  return encodedWord;
}
function decode(wordToDecode) {
  let decodedWord = wordToDecode;
  let encript = '12345';
  let vowel = 'aeiou';
  let index = 0;
  for (let letter of encript) {
    decodedWord = decodedWord.replaceAll(letter, vowel[index]);
    index += 1;
  }
  return decodedWord;
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
