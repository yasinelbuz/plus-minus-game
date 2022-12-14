function createRandomNumber(count) {
  let randomNumber = "";
  while (randomNumber.length !== count) {
    let random = Math.floor(Math.random() * 10);
    if (randomNumber.length === 0 && random === 0) continue;

    if (!randomNumber.includes(random)) {
      randomNumber += random;
    }
  }
  return Number(randomNumber);
}

export default createRandomNumber;
