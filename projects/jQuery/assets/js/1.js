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

var myNames = ["Jon", "Alex", "Lily"];
$.each(myNames, function(index, value) {
    console.log("[" + index + "] : " + value);
});

    json
var json = [
    {
        "Product": "Ferrari",
        "Color": "Chroma",
        "Price": "$1,000,000"
    },
    {
        "Product": "Volvo 740",
        "Color": "Bae",
        "Price": "$7,200,000,000" 
    },
    {
        "Product": "Used socks",
        "Color": "White",
        "Price": "$2"
    }
]

$.each(json, function(index, value) {
    $.each(this, function(index, value) {
        console.log(index + " :: " + value);
    });
});