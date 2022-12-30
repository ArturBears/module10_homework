let Volume = prompt("");
console.log(Volume);

if ((typeof +Volume == 'number') && (!isNaN +Volume )){
    if (Volume % 2 === 0) {
        console.log("Четное число");
    } else {
        console.log("Не четное число");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}