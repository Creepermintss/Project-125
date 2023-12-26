noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/gjf8RC1f/48-482965-red-nose-png-circle-transparent-png-removebg-preview.png');
}




function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    PoseNet = ml5.poseNet(video, modeLoaded);
    PoseNet.on('pose', gotPoses);
}

function modeLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX - 15, noseY - 13, 30 ,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{

    if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
console.log("nose x =" + noseX);
console.log("nose y =" + noseY);
}
}






