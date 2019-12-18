var circleArr = [];

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(new Point(point), 800);
        newCircle.fillColor = "blue";
        circleArr.push(newCircle);
    }
    console.log(circleArr);
});

function onFrame() {
    for (i = 0; i < circleArr.length; i++) {
        circleArr[i].scale(0.96)
        circleArr[i].fillColor.hue += 3;
        
        if (circleArr[i].area < 1) {
            circleArr[i].remove()
            circleArr.splice(i, 1);
        }
    }
}
