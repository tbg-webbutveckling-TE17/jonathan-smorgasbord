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

