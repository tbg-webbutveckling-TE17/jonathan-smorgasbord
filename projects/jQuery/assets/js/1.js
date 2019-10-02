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
$(function () {
    $("#textLoad").click(function (e) {
        $("#loadText").load("test.html #test", function (response, status, xhr) {
            if (status == "error") 
            {
                $("#loadText").html("Error: " + xhr.status + ": " + xhr.statusText);
            }

        });
    });
});