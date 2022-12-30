let numb;

if ((typeof(numb) == 'number')&&(!isNaN(numb))) {
    console.log("value is Number");
} else if (typeof(numb) == 'string') {
    console.log("value is String");
} else if (typeof(numb) == 'boolean') {
    console.log("value is Boolean");
} else {
    console.log("value X is undefined");
}