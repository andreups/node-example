let lodash = require("lodash");

let name = "marsh";
console.log(name);

let sentence = "where have all the cookies gone?";

name = lodash.upperFirst(name);
console.log(name);

name = lodash.lowerCase(name);
console.log(name);

name = lodash.upperCase(name);
console.log(name);

name = "marsh";

sentence = lodash.startCase(sentence);
console.log(sentence);
