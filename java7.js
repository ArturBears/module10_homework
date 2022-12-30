let arr = [1, 2, 3, 4, 5,'a',null];
let trust1 = 0;
let trust2 = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
            trust1++;
        } else {
            trust2++;
        }
    }

console.log("countable " + trust1);
console.log("not even " + trust2);