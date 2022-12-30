let greetings = "hello";
let newgreetings = "";
for (let i = greetings.length - 1; i >= 0; i--) {
    newgreetings += greetings[i];
}
console.log(newgreetings);