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
