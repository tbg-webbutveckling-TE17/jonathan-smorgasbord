var reusableArray = ["b", "b", "c", "d", "e", "f", "g", "h", "i"]
var reusableVariableArray = [-1, 2, 4, 6, 10, 21, 45]

// var foodArray = ["Pizza", "Tacos", "Macaroni"]

        // foodArray.forEach(function(foodType) {
    // console.log(foodType);
// });

// console.log(Array.from("Pizza"))

// Creates new arrow instance to the power of 2 from the original int.
// console.log(Array.from([2, 4, 8], x => Math.pow(x, 2)));

// var cars = ["V50", "V60", "V70"]
// console.log(Array.isArray(cars));
// console.log(Array.isArray([5]));
// console.log(Array.isArray("Is this an array?"));
// console.log(Array.isArray(["JS", "PY", "C#"]));

// console.log(Array.of(2));
// console.log(Array.of(3, 2));
// console.log(Array(2));
// console.log(Array(3, 2));

// var array1 = ["a", "b", "c"]
// var array2 = ["f", "g", "h"]
// var array3 = ["j", "l", "i"]
// console.log(array1.concat(array2, array3));

// Implemented reusableArray
// console.log(reusableArray.copyWithin(4, 5, 6));

// var iterator1 = reusableArray.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

// function isPositive(value) {
//     return value > 0
// }

// console.log(reusableVariableArray.every(isPositive));

// console.log(reusableVariableArray.fill(5, 3, 6));

function changeArray() {
    reusableArray[2] = "z"
}

changeArray();

console.log(reusableArray)









