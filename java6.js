let arr = ['1', '22', '333', '4444', '55555'];

let fat = true;
for (let i = 0; i < arr.length; i++){
    for (let s = i + 1; s < arr.length; s++){
        if (typeof(arr[i]) !== typeof(arr[s])){
            fat = false;
        }
    }
}
if (fat) {
    console.log("true");
} else {
    console.log("false");
}