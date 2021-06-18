const first = { name: "Suman" };
const sec = { job: "ins" };

const com = { ...first, location: "kol", ...sec };

console.log(com);
