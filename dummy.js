class Member extends Alert {
  constructor(title, memberPackages) {
    super(title);
    this.packages = memberPackages;
  }

  //3> static: without creating objects & can not be called through class instance
  static count(title) {
    // console.log(`the total count is+ ${title}`);
  }

  getPackage() {
    // console.log(`Packages name is ${this.packages}`);
  }
}

Member.count("50"); //static
let bob = new Member("alert", "handwash");
bob.getPackage();

//1> create a constructor function

class Alert {
  constructor(title) {
    this.title = title || "Default   Alert";
  }

  toUpperCase() {
    // console.log(this.title.toUpperCase());
  }
}

// Instantiated in the object
let alert = new Alert();
// console.log(alert.toUpperCase());

//2> Inheritence

// 4> abstraction: Hiding the implementation detail showing only functionality to the user

class Foo {
  constructor(text) {
    this._text = text;
  }

  /**
   * Implementation optional
   */
  genericMethod() {
    console.log("running from super class. Text: " + this._text);
  }

  /**
   * Implementation required
   */
  doSomething() {
    throw new Error("You have to implement the method doSomething!");
  }
}

class Bar extends Foo {
  constructor(text) {
    super(text);
  }

  genericMethod() {
    console.log("running from extended class. Text: " + this._text);
  }

  doSomething() {
    console.log("Method implemented successfully!");
  }
}

let b = new Bar("Howdy!");
b.genericMethod();
b.doSomething();
