let boxie = document.querySelectorAll(".box"); // Acess the element box & btn
let rstbtn = document.querySelector(".reset-btn");
let rstbtn1 = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let container = document.querySelector(".msg-container");

let turnO = true; // to check the turn of player

let winpatterns = [
  //2d array to check the win pattern
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const reset = () => {
    turnO = true;
    btnenable();
    container.classList.add("hide");
  };
boxie.forEach((box) => {
  box.addEventListener("click", () => {
    // add event onclick by arrow function in foreach loop
    console.log("successfully clicked");
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const btndis = () => {
    for (let box of boxie) {
      box.disabled = true;
    }
  };
const btnenable = () => {
  for (let box of boxie) {
    box.disabled = false;
    box.innerHTML = "";
  }
};


const showwinner = (winner) => {
  msg.innerHTML = `congratulation, winner is ${winner}`;
  btndis();
  container.classList.remove("hide");
};

const checkwinner = () => {
  for (pattern of winpatterns) {
    let pos1 = boxie[pattern[0]].innerHTML;
    let pos2 = boxie[pattern[1]].innerHTML;
    let pos3 = boxie[pattern[2]].innerHTML;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showwinner(pos1);
      }
      
    }
  }
};

rstbtn1.addEventListener("click",reset);
newbtn.addEventListener("click",reset);
