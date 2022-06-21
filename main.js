song="";
function setup()
{
    canvas=createCanvas(600,500);
    canvas.position(450,160);

    video=createCapture(VIDEO);
    video.hide();
}
function preload()
{
    song=loadSound("music.mp3");
}
function draw()
{
    image(video,0,0,600,500);
}
function start()
{
    song.play();
}