const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
 
  // Attaching an keydown event listener to document.body
  document.body.addEventListener("keydown", (event) => {
    // Now, how can we check for which specific key was pressed?
  }
}

let index = 0

function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
