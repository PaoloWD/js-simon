const randomNumArray = [];
const userNum = [];
const check = [];

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
  generateNumRandom();
  const containerRandomEl = document.querySelector(".container-random");

  for (i = 0; i < randomNumArray.length; i++) {
    const number = document.createElement("div");

    number.innerHTML = randomNumArray[i];

    containerRandomEl.append(number);
  }
  setTimeout(function () {
    containerRandomEl.innerHTML = "";
  }, 3000);
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
    checkArray(randomNumArray, userNum);
  }, 3100);
}

function checkArray(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    alert(`Hai inserito ${arr1.length} numeri esatti: ${arr1}`);
  } else {
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        const check2 = arr1[i];
        check.push(check2);
      }
    }
    alert(`Hai inserito ${check.length} numeri esatti: ${check}`);
  }
}

function randomNum() {
  const num = Math.floor(Math.random() * 10);
  return num;
}
