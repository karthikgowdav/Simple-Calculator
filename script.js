console.log("hello world!");
// let btn=document.querySelector(".equals");
// btn.addEventListener("click",()=>{
//     alert("button was clicked!");
//     console.log("button was clicked")
// })

let currentstring = "";

let display = document.getElementById("display");

let clearbtn = document.querySelector(".clear");
clearbtn.addEventListener("click", () => {
  currentstring = "";
  display.innerText = "";
});

let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentstring.length <= 12) {
      let lgg = currentstring.slice(-1);
      let bl = /[/]/.test(lgg);
      if (bl) {
        if (btn.innerText == "0") {
          alert("zero division error");
          return;
        }
      }

      currentstring += btn.innerText;
      display.innerText = currentstring;
    }
  });
});

let operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
  op.addEventListener("click", () => {
    let last = currentstring.slice(-1);
    let oop = /[+\-*/]/.test(last);
    if (!oop) {
      currentstring += op.innerText;
      display.innerText = currentstring;
    } else alert("invalid expression");
  });
});

let equal = document.querySelector(".equals");
equal.addEventListener("click", () => {
  try {
    result = eval(currentstring);
    display.innerText = result;
    currentstring = result.toString();
  } catch {
    display.innerText = "Error";
    currentstring = "";
  }
});
