var string = "this-is-easy-yes";
string = string.replace(/-/g, "_");
console.log(string);

$(function() {
    $("#accordion").accordion()
});

$(function() {
    var allTags = [
        "ASD",
        "BdD",
        "GGG",
        "GOOO",
        "WOOO"
    ]
    $(tag).autocomplete({
        source: allTags
    });
});

$(function() {
    $("#progress").progressbar({
        value: 50
    });
});

$( function() {
    $( document ).tooltip();
  } );

