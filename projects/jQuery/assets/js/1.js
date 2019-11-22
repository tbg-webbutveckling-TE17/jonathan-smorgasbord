// jQuery execsises 1-3

// $(function()
// {
//     $("button").click(function() {
//         $("p").hide();
//         $(".test").hide();
//         $("#test").hide();
//         alert("Button is pressed");
//     });
//     alert("Dom is ready");
// });

// Execsises 4-

// $(function () {
//     $("#textLoad").click(function (e) {
//         $("#loadText").load("text.txt", function (response, status, xhr) {
//             if (status == "error") 
//             {
//                 $("#loadText").html("Error: " + xhr.status + ": " + xhr.statusText);
//             }

//         });
//     });
// });
// $(function () {
//     $("#textLoad").click(function (e) {
//         $("#loadText").load("test.html #test", function (response, status, xhr) {
//             if (status == "error") 
//             {
//                 $("#loadText").html("Error: " + xhr.status + ": " + xhr.statusText);
//             }

//         });
//     });
// });

//Execsises 5

// $(function()
// {
//     $("button").click(function() {
//         $("#img").animate({
//             width: "200px"
//         });
//     });
// });

// $(function()
// {
//     $("button").click(function() {
//         $("#img")
//             .animate({width: "200px"})
//             .animate({height: "200px"})
//             .animate({width: "300px"})
//             .animate({height: "300px"})
//     });
// });

// $(function()
// {
//     $("button").click(function() {
//         $("#img")
//             .animate({width: "+=200px"})
//             .animate({height: "+=200px"})
//             .animate({width: "-=300px"})
//             .animate({height: "-=300px"})
//     });
// });

//Exercise 7

// $(function()
// {
//     var slides = $("#slider").children();
//     console.log(slides)
//     x = 0;
//     setInterval(function() {
//         $(slides).hide();
//         $(slides).eq(x).show();
//         if (x == slides.length-1) 
//         {
//             x = 0;
//         }
//         else {
//             x++;
//         }
//     }, 1000)
//     setInterval(function() {
//         var d = new Date();
//         var t = d.toLocaleTimeString();
//         $("#time").html(t);
//     })
// });

//Exercise 9
//https://www.w3schools.com/jquery/jquery_ref_traversing.asp

//Exercise 10
// $("#loadFile").click(function(e) {
//     $.ajax({
//         url: "test.html",
//         success: function (result, status, xhr) {
//             $("#htmlData").html(result);
//         }
//     });
// });

// $.ajax({
//     url: "jsonData.json",
//     success: function (result, status, xhr) {
//         var table = $("<table><tr><th>Product</th><th>Color</th><th>Price</th></tr>")
//         var tr;
//         for (var i = 0; i < result.length; i++) {
//             tr = $("<tr>");
//             tr.append("<td>" + result[i].Product + "</td>");
//             tr.append("<td>" + result[i].Color + "</td>");
//             tr.append("<td>" + result[i].Price + "</td>");
//             table.append(tr);
//             $("#htmlData").html(table);
//         }
//     }
// });

//Exercise 11

// var myNames = ["Jon", "Alex", "Lily"];
// $.each(myNames, function(index, value) {
//     console.log("[" + index + "] : " + value);
// });

//     json
// var json = [
//     {
//         "Product": "Ferrari",
//         "Color": "Chroma",
//         "Price": "$1,000,000"
//     },
//     {
//         "Product": "Volvo 740",
//         "Color": "Bae",
//         "Price": "$7,200,000,000" 
//     },
//     {
//         "Product": "Used socks",
//         "Color": "White",
//         "Price": "$2"
//     }
// ]

// $.each(json, function(index, value) {
//     $.each(this, function(index, value) {
//         console.log(index + " :: " + value);
//     });
// });

// $("#paragraphs p").each(function (index, value) {
// }).filter(":odd").each(function (index, value) {
//     $(value).css("background-color", "red");
// });

// // $("#fadeButton1").click(function (e) {
// //     $("#fade").fadeOut();
// // })

// // $("#fadeButton2").click(function (e) {
// //     $("#fade").fadeIn();
// // })

// $("#fadeButton1").click(function (e) {
//     $("#fade").fadeOut(3000, "linear")
// });

// $("#fadeButton2").click(function (e) {
//     $("#fade").fadeIn(5000, "linear");
// });

document.getElementById("idButton").addEventListener("click", generateFortune);
document.addEventListener("keypress", keyClick);
var guesses = 10;
var wins = 0;
var losses = 0;
var code = ["A", "B", "C"];
var unrevealedCode = ["_", "_", "_"]
var guessedLetters = "";

document.getElementById("missingLetters").innerHTML = unrevealedCode.toString();

function keyClick() {
    var correctLetter = ""
    var currentLetter = String.fromCharCode(event.keyCode);
    guessedLetters += currentLetter;
    code.forEach(element => {
        if(currentLetter == element.toLowerCase()) {
            correctLetter = currentLetter;
            unrevealedCode[unrevealedCode.indexOf()] = correctLetter;
        }
        else {
        }
    });
    if(correctLetter != "") {
        document.getElementById("youFound").innerHTML = "You found the letter " + currentLetter;

    }
    else {
        guesses--;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
    }
    document.getElementById("missingLetters").innerHTML = unrevealedCode.toString();
    
}

function generateFortune() {
    var rndName = ["Sasha", "LL", "OOO"];
    var rndLoc = ["New York", "California"];
    var rndJobTitle = ["Dentist", "Programmer"]
    var rndNum = [Math.floor(Math.random() * 10)]
    tellFortune(rndJobTitle[Math.floor(Math.random() * rndJobTitle.length)], rndLoc[Math.floor(Math.random() * rndLoc.length)], rndName[Math.floor(Math.random() * rndName.length)], rndNum[Math.floor(Math.random() * rndNum.length)])
}

function tellFortune(jobTitle, geoLoc, partnerName, numChildren) {
    var tellFuture = `You will be a ${jobTitle} in ${geoLoc} and married to ${partnerName} with ${numChildren} children`
    pFortune = document.getElementById("fortune");
    pFortune.innerHTML = tellFuture
    pFortune.style.color = "white";

}

