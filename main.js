difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,120);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded()
{
    console.log('PoseNet in Initialized!')
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)
     leftWrist = results[0].pose.leftWrist.x;
     rightWrist = results[0].pose.rightWrist.y;
    console.log("leftWrist = " + leftWrist +" rightWrist = " + rightWrist);
    
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("Left Wrist X:" + leftWristX + "Right Wrist X:" + rightWristX + "Difference:" + difference);
    }
}

function draw()
{
    background('#adff2f');
    textSize(difference);
    fill('#0000FF');
    text(Bhavadithya,50,400);
}

