// create a  constructor function

function Alert(title) {
  // this --> instance of Alert
  this.title = title || "Default  Alert";

  // by dafult it returns instance of Alert function
  // this.logData = function() {
  //   console.log("log data1");
  // };
}

Alert.prototype.logData = function() {
  console.log("log data again");
};

// add toUpperCase()

Alert.prototype.toUpperCase = function() {
  console.log(this.title.toUpperCase());
};

function SuccessAlert(title) {
  Alert.call(this, title);
  this.type = "success";
}

SuccessAlert.prototype = Object.create(Alert.prototype);
SuccessAlert.prototype.constructor = SuccessAlert;
const sa = new SuccessAlert("successAlert");
console.log(sa);
