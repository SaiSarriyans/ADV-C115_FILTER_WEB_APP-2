function preload()
{

}
function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide()
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw()
{
    Image(video,0,0,300,300);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
    console.log('modelLoaded pose net is also initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
      noseX = results[0].pose.nose.x-17;
      nosey =  results[0].pose.nose.y-17;
      console.log("noseX = " + results[0].pose.nose.x);
      console.log("nosey = " + results[0].pose.nose.y);
    
    }
}