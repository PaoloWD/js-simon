const randomNumArray = [];
const userNum = [];

generateNumRandom();
generateDivRandom();
generateDivUser();

function generateNumRandom() {
  while (randomNumArray.length < 5) {
    const pushNum = randomNum();
    if (!randomNumArray.includes(pushNum)) {
      randomNumArray.push(pushNum);
    }
  }
}

function generateDivRandom() {
  const containerRandomEl = document.querySelector(".container-random");

  for (i = 0; i < randomNumArray.length; i++) {
    const number = document.createElement("div");

    number.innerHTML = randomNumArray[i];

    containerRandomEl.append(number);
  }
  setTimeout(function timer() {
    containerRandomEl.innerHTML = "";
  }, 5000);
}

function generateDivUser() {
  setTimeout(function () {
    const containerUserEL = document.querySelector(".container-user");
    while (userNum.length < randomNumArray.length) {
      const numUser = prompt("inserisci numero");
      userNum.push(parseInt(numUser));
    }
    for (i = 0; i < randomNumArray.length; i++) {
      const user = document.createElement("div");
      user.innerHTML = userNum[i];
      containerUserEL.append(user);
    }
    if (JSON.stringify(randomNumArray) === JSON.stringify(userNum)) {
      alert("hai inserito i numeri giusti");
    } else {
      alert("hai inserito i numeri sbagliati");
    }
  }, 6000);
}

function randomNum() {
  num = Math.floor(Math.random() * 10);
  return num;
}
