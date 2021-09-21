 img = "";
 status = "";
 objects = [];
 
 
 function preload(){

    img = loadImage('dog_cat.jpg');

 }

 function setup(){

canvas = createCanvas( 640 , 420 );
canvas.center(); 

objectDetector = ml5.objectDetector ('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status : detecting objects";




 }

 function draw(){

image( img , 0 , 0 , 640 , 420 );

if(status != ""){

   for (i = o; i < objects.legnth; i++){

      document.getElementById("status").innerHTML = "Status : object detected";

      fill("#FF0000");
      percent = floor(objects[i].confidence * 100); 
      text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
      noFill();
      stroke("#FF0000");
      rect(objects[i].x, objects[i].y , objects[i].width, objects[i].height);

      
   }
   
}

fill( "#000000" );



text( "dog" , 45 , 75);

noFill();
stroke("aqua");

rect( 30, 60 , 450 ,350 );

fill( "#000000" );

text( "cat" , 350 , 100);

noFill();
stroke("aqua");

rect( 300, 75,  270 , 320);

 }

 


 function modelLoaded(){

   console.log ("model loaded");
   status = true;
   objectDetector.detect( img , gotResults);
 }

 function gotResults( results , error){

   if ( error){

      console.log (error);
   }
   else{

      console.log (results);
      objects = results;
   }


 }

 
 