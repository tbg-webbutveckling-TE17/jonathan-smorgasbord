var circleArr = [];


document.addEventListener("keypress", function (e) {
    var sound = new Howl({
        src: ['../assets/audio/' + e.key + '.mp3'],
        volume: 0.1
      });
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(new Point(point), 800);
    newCircle.fillColor = "blue";
    circleArr.push(newCircle);
    sound.play();
    sound.fade(1, 0, 1000);
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
