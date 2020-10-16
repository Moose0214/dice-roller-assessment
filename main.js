let rollDiceInput = document.querySelector("#roll-number");
let rollButton = document.querySelector("#roll-dice");
let showAllRolls = document.querySelector("#show-all-rolls");
let rollResults = document.querySelector("#roll-results");
let totalRolls = document.querySelector("#total-rolls");
let resetRolls = document.querySelector("#reset");
let dieRolls = [];

rollButton.addEventListener("click", function () {
  let maxRolls = Number(rollDiceInput.value);
  let count = 0;
  dieRolls = [];
  rollDiceInput.value = "";

  while (count < maxRolls) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dieRolls.push(randomNumber);
    count++;
  }
  console.log(dieRolls);
});

showAllRolls.addEventListener("click", function () {
  rollResults.innerHTML = "";
  let count = 0;

  let total = 0;

  while (count < dieRolls.length) {
    console.log(dieRolls[count]);
    rollResults.innerHTML += "<li>" + dieRolls[count] + "</li>";
    total += dieRolls[count];
    count++;

    //document.getElementById("myList").style.listStyleImage =
    //<style>
    //listStyleImage = url(
    //"https://thumbs.dreamstime.com/b/red-dice-14185404.jpg" );
    //</style>;
  }

  totalRolls.innerHTML = total;
  console.log(total);
});

resetRolls.addEventListener("click", function () {
  rollResults.innerHTML = "";
  totalRolls.innerHTML = 0;
});

//let rolls = [];
//let count = 0;
//
//while(count <= 50) {
//rolls.push(Math.floor(Math.random() *6 +1);
//count++;
//}
//
//let total = 0;
//let i = 0;
//
//while(i < rolls.length) {
//console.log(rolls[i]);
//total += rolls[i];
//i++;
//}
//
//console.log(rolls[0]);
