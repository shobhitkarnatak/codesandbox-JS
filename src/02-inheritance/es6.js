class Alert {
  // static method
  static logger() {
    console.log("static method attched");
  }
  constructor(title) {
    this.title = title || "Default   Alert";
  }

  toUpperCase() {
    console.log(this.title.toUpperCase());
  }
}

class SuccessAlert extends Alert {
  constructor(title) {
    super(title);
    this.type = "success";
  }

  // method override
  toUpperCase() {
    console.log(this.title.toUpperCase());
  }
}

// Instantiated in the object
let sa = new SuccessAlert("Success Alert");
console.log(sa.toUpperCase());

let a = new Alert("Alert");
console.log(a.toUpperCase());

console.log(Alert.logger());
