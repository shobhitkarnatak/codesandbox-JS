// create a  constructor function

function Alert(title) {
  // this --> instance of Alert
  this.title = title || "Default  Alert";

  // by dafult it returns instance of Alert function
}

// add toUpperCase()
Alert.prototype.toUpperCase = function() {
  console.log(this.title.toUpperCase());
};

const alert = new Alert();
console.log(alert.toUpperCase());
