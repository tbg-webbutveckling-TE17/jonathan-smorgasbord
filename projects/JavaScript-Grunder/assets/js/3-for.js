alert("lol")
// For använder man när man vet hur många gånger loopen ska köras.


for(var i = 0; i < 6; i++) {
    console.log(i);
}

var str = "Någon grej";
for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}   

var myArr = ["HTML", "CSS", "JS", 42, true];
var len = myArr.length
for(var i = 0; i < len; i++) {
    console.log(myArr[i]);
}