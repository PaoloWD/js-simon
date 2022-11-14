const randomNumArray = [];
let userNum = [];

for (let i = 0; i < 5; i++) {
  const pushNum = randomNum();
  randomNumArray.push(pushNum);
}

generateDivRandom();
generateDivUser();

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
      userNum.push(numUser);
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
  num = Math.floor(Math.random() * 101);
  return num;
}
