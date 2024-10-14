let upCaseBtn = document.getElementById("upCaseBtn");
let lowCaseBtn = document.getElementById("lowCaseBtn");
let capBtn = document.getElementById("capBtn");
let clearBtn = document.getElementById("clearBtn");

upCaseBtn.addEventListener("click", makeUpperCase);
lowCaseBtn.addEventListener("click", makeLowerCase);
capBtn.addEventListener("click", makeCaps);
clearBtn.addEventListener("click", clearAll);

function makeUpperCase() {
  let input = document.getElementById("mainInput").value;
  let outputBox = document.getElementById("outputBox");
  let uppcasedInput = input.toUpperCase();
  outputBox.textContent = uppcasedInput;
}

function makeLowerCase() {
  let input = document.getElementById("mainInput").value;
  let outputBox = document.getElementById("outputBox");
  let uppcasedInput = input.toLowerCase();
  outputBox.textContent = uppcasedInput;
}

function makeCaps() {
  let input = document.getElementById("mainInput").value;
  let outputBox = document.getElementById("outputBox");
  function capsss(str) {
    return str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
  outputBox.textContent = capsss(input);
}

function clearAll() {
  document.getElementById("mainInput").value = " ";
  document.getElementById("outputBox").innerHTML = " ";
}
