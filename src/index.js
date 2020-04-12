/**
 *  1. what is constructor function
 */
//tHIS IF FORKED CODESANDBOX JS
// create add function

function add(a, b) {
  return a + b;
}

let final = add(2, 4);
console.log(final);
//
const a = "shobhit";
const b = 1;

if (a && b) {
  console.log("&& operator ", a && b);
}

if (a || b) {
  console.log("|| operator ", a || b);
}

function Alert(title) {
  this.title = title || "Alert";
}

let alert = new Alert("success");
console.log(alert);

class Alert1 {
  constructor(title) {
    this.title = title;
  }
}

const alert1 = new Alert1("Failed");

console.log(alert1);
