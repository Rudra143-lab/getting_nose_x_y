function preload(){}

function setup(){
   canvas= createCanvas(400,300);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();

   pose=ml5.poseNet(video,model_loaded);
   pose.on('pose',got_pose);
}

function model_loaded(){
    console.log("Model Loaded");
}

function got_pose(results){
    if(results.length>0){
        console.log(results);
        console.log("nose_x ="+results[0].pose.nose.x);
        console.log("nose_x ="+results[0].pose.nose.x);
    }
}

function take_snapshot(){
    save("my_image,png");
}

function draw(){
    image(video,0,0,400,300);
}