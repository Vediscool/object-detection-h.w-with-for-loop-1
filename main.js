img="";
status="";

function preload(){
    img=loadImage('bottles.webp')
    img=loadImage('Fruit basket.webp')
    img=loadImage('Laptop and mobile.webp')           
    text("Bottles",45,75);
    text("Laptop and Mobile",45,75);
    img=loadImage('Fan and AC.webp')
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center;
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Fruits Basket",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

   fill("FF0000");
   text("Fan and AC",45,75);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
    objectDetector=ml5.objectDetectot('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";

    image(img,0,0,640,420);
    fill("#FF0000");
    text("Mobile and Laptop",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);


    image(img,0,0,640,420);
    fill("#FF0000");
    text("Bottles",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    

}

function draw(){
    if(error){
        for(i=0; i<objects.length; i++){
            percent=floor(objects[i].confidence*100);
            label=objects[i].x,objects[i].y,objects[i].width,objects[i].height;
        }
    }
}

function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    objects=[];
    if(error){
        console.log(error);
    }
    console.log(results);
}