const person = {
  name: "Suman",
  walk() {},
  talk() {},
};
person.talk();
const targetMem = "name";
person[targetMem] = "Mosh";
