// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleTrueOrFalse = false;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    triangleTrueOrFalse = true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    triangleTrueOrFalse = true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    triangleTrueOrFalse = true;
  } else {
    triangleTrueOrFalse = false;
  }
  return triangleTrueOrFalse;
}

// Desafio 13
function hydrate(string) {
  let mathdigitsOfDrinks = /\d+/g;
  let digitsOfDrinks = string.match(mathdigitsOfDrinks);
  let sumOfDrinks = 0;
  for (let sum in digitsOfDrinks) {
    sumOfDrinks += parseInt(digitsOfDrinks[sum]);
  }
  let copoOrCopos = '';
  if (sumOfDrinks === 1) {
    copoOrCopos = ' copo de água';
  } else {
    copoOrCopos = ' copos de água';
  }
  return sumOfDrinks + copoOrCopos;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
