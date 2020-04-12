//1> create a constructor function

class Alert {
  constructor(title) {
    this.title = title || "Default   Alert";
  }

  toUpperCase() {
    console.log(this.title.toUpperCase());
  }
}

// Instantiated in the object
let alert = new Alert();
console.log(alert.toUpperCase());
