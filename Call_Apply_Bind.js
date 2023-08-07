const obj = {
  name: "suyog",
};

let greeting = function (a, b) {
  return a + this.name + b;
};

console.log("@SN ", greeting.call(obj, "Hello ", " How are you?"));
console.log("@SN ", greeting.apply(obj, ["Hello ", " How are you?"]));
let result = greeting.bind(obj);
console.log("@SN ", result("Hello ", " How are you?"));
