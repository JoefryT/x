img = "";
statuse = "";
function preload()
{
    img = loadImage('alarm.jpg')
}
function modelLoaded(){
    console.log("Model Loaded!");
    statuse = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Object Detecting..."
}
function draw(){
    image(img, 0 , 0 , 640, 420);
     
}