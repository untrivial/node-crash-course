global.setTimeout(() => {
    console.log('yo');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('yippee');
}, 1000);

console.log(__dirname); // path of dir
console.log(__filename); // path of dir + file name
