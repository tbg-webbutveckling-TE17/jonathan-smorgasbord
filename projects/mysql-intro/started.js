var paragraph = document.getElementById("output");

var movies = [
    {
        movie: "A",
        haswWatched: true,
        rating: 4.5 
    },
    {
        movie: "B",
        haswWatched: false,
        rating: 4.0
    },
    {
        movie: "C",
        haswWatched: true,
        rating: 3.0
    },
    {
        movie: "D",
        haswWatched: true,
        rating: 3.0
    }
]

movies.forEach(element => {
    if(element.haswWatched) {
        var string = `You have seen ${element.movie} rated ${element.rating} stars`
    }
    else {
        var string = `You have not seen ${element.movie} rated ${element.rating} stars`
    }
    paragraph.innerHTML += string + '<br>';
});