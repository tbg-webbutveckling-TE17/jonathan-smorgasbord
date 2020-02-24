var paragraph = document.getElementById("output");

var movies = [
    {
        movie: "A",
        hasWatched: true,
        rating: 4.5 
    },
    {
        movie: "B",
        hasWatched: false,
        rating: 4.0
    },
    {
        movie: "C",
        hasWatched: true,
        rating: 3.0
    },
    {
        movie: "D",
        hasWatched: true,
        rating: 3.0
    }
]

movies.forEach(element => {
    if(element.hasWatched) {
        var string = `You have seen ${element.movie} rated ${element.rating} stars`
    }
    else {
        var string = `You have not seen ${element.movie} rated ${element.rating} stars`
    }
    paragraph.innerHTML += string + '<br>';
});