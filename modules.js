const pog = require('./people'); // ./ looks in same dir as current file
                                 // this will find and RUN the other file
// console.log(pog); // empty unless we export
// console.log(pog.people);

const { people, ages } = require('./people');
console.log(people);
console.log(ages);

const os = require('os'); // built in module. we are importing it here
console.log(os.platform(), os.homedir());
