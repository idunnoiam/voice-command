x = 0;
y = 0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition;

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak"
    recognition.start();
}

function preload() {
    apple = loadImage('apple.png');
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognised as: " + content;
    to_number = Number(content)
    if (Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "Started drawing apples";
        for (var i = 1; i <= to_number; i++) {
            x = Math.floor(Math.random() * 700)
            y = Math.floor(Math.random() * 600);
            image(apple, x, y, 50, 50);
        }

    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (draw_apple == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn. ";
        draw_circle = "";
    }
}