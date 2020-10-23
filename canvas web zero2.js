var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = 'https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; // lower is faster
var scale = 1.05;
var y = -4.5; // vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;
    
    if (imgW > CanvasXSize) {
        // image larger than canvas
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // image width larger than canvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        // image height larger than canvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }
    
    // get canvas context
    ctx = document.getElementById('canvas1').getContext('2d');
 
    // set refresh rate
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas
    
    // if image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        // reset, start from beginning
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        // draw additional image1
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        // draw additional image2
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    // image is > Canvas Size
    else {
        // reset, start from beginning
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // draw aditional image
        if (x > (CanvasXSize-imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    // draw image
    ctx.drawImage(img, x, y,imgW, imgH);
    // amount to move
    x += dx;
}





function clock() {
    var now = new Date();
    var ctx = document.getElementById('canvas2').getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
  
    // Hour marks
    ctx.save();
    for (var i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(100, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.restore();
  
    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (i = 0; i < 60; i++) {
      if (i % 5!= 0) {
        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore();
   
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;
  
    ctx.fillStyle = 'black';
  
    // write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
  
    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();
   
    // Write seconds
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = '#D40000';
    ctx.fillStyle = '#D40000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
  
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();
  
    ctx.restore();
  
    window.requestAnimationFrame(clock);
  }
  
  window.requestAnimationFrame(clock);


//   3

var ctx3 = document.getElementById('canvas3').getContext('2d');
var scrs = ["earth.jpg", "1949.png"];

var image3 = [];
var i = 0;
scrs.forEach(function(src){
    var img3 = new Image();
    img3.src = src ; 
    image3.push(img3);
    img3.onload = function(){
        i++;
        if(i==image3.length){

        setInterval(drawearth,10);
        }
    }
},this);
 var z = 0 , z1 = 0;
function drawearth(){
     z++;
     z1 = z1+0.6;
    if(z >= 534){
        z=0;
    }
    if(z1 >= 534){
        z1=0;
    }
    ctx3.clearRect(0,0,500,300);
    ctx3.fillRect(0,0,500,300);
    ctx3.save();
    ctx3.beginPath();
    ctx3.arc(250,150,150,0,2*Math.PI);
    ctx3.clip();
    
    ctx3.drawImage(image3[0],-z,0,534,300);
    ctx3.drawImage(image3[0],534-z,0,534,300);

    // ctx3.globalAlpha = 0.2;
    // ctx3.drawImage(image3[1],-z1,0,534,300);
    // ctx3.drawImage(image3[1],534-z1,0,534,300);
    // ctx3.globalAlpha = 1;
    ctx3.restore();
}


//4

// var can4 = document.getElementById('canvas4'),
//     ctx4 = can4.getContext('2d');

// var img4 = new Image();
// img4.src = "img_5terre_wide.jpg";
//  img4.onload = draw4;


// function draw4(){
    
//    ctx4.drawImage(img4,0,0,1000,350);
//   var imageData4 = ctx4.getImageData(1000,350);
  
//   console.log(imageData4);
//    ctx4.clearRect(0,0,1000,350);

//   for(var i = 0; i < imageData4.data.length; i+=4){
//      var m4 = (imageData4.data[i] + imageData4.data[i+1] + imageData4.data[i+2])/3;
//      imageData4.data[i] =m4+100;
//      imageData4.data[i+1] =m4+100;
//      imageData4.data[i+2] =m4+100;
//  }

//   ctx4.putImageData(imageData4,0,0);
// }


var can4 = document.getElementById('canvas4'),
ctx4 = can4.getContext('2d');


function draw4(){

//    ctx4.fillStyle = "red";
//    ctx4.fillRect(0,0,600,500);
//     ctx4.drawImage(img4,0,0);
var imageData4 = ctx4.getImageData(0,0,600,500);
console.log(imageData4);
ctx4.clearRect(0,0,600,500);

//   for(var i = 0; i < imageData4.data.length; i+=4){
//      var m4 = (imageData4.data[i] + imageData4.data[i+1] + imageData4.data[i+2])/3;
//      imageData4.data[i] =m4;
//      imageData4.data[i+1] =m4;
//      imageData4.data[i+2] =m4;
////       imageData4.data[i+3] = 255;

// }

//    طريقه اخرى للوصول للبكسل 
for(var y = 0; y<500; y++){
   if(y%20>=10){
       continue;
   }
   for(var x = 0; x<600; x++){
        if(x%20>=10){
       continue;
   }
       var index = ((y*600)+x)*4;
       imageData4.data[index]  = 255
       
       imageData4.data[index+1] = 255
       
       imageData4.data[index+2] = 255
         
       imageData4.data[index+3]=255;
   }
}

ctx4.putImageData(imageData4,0,0);
}
   draw4();


 //5
 
 var can5 = document.getElementById('canvas5'),
ctx5 = can5.getContext('2d');
var video5 = document.getElementById("video5");

video5.onplay = function(){
    setTimeout(draw5,10);
}
function draw5(){
    if(video5.paused || video5.ended){
        return;
    }
    ctx5.beginPath();
    ctx5.arc(80,150,80,0,2*Math.PI);
    ctx5.arc(200,150,80,0,2*Math.PI);
    ctx5.clip();
    ctx5.drawImage(video5,0,60);
    setTimeout(draw5,10);
    //requestAnimationFrame(draw5)
}


//6

var can6 = document.getElementById('canvas6'),
ctx6 = can6.getContext('2d');
var e = window.confirm("Are you like red?");
if (e){
    good();
}else{
    bad();
}
function good(){
    ctx6 .fillStyle = "rgb(255,0,0)";
    ctx6 .fillRect(0,0,300,300);
    //ctx6 .fill();
}
function bad(){
    var c = prompt("what is color you like");
    ctx6 .fillStyle = c;
    ctx6 .fillRect(0,0,300,300);
    ctx6 .fill();
}



//  7


var can7 = document.getElementById('canvas7'),
ctx7 = can7.getContext('2d');
var video7 = document.getElementById("v7");
window.URL = window.URL || window.webkitURL;
 
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){

 navigator.mediaDevices.getUserMedia({video:true}).then(success).catch(erro);
}else{
    navigator.getUserMedia = navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia  ||
                             navigator.oGetUserMedia ;
    navigator.getUserMedia({video:true},success,erro);                        
}
function success(stream){
    
    video7.src = Window.URL.createObjectURL(stream);
    video7.crossOrigin = "Anonymous";
    video7.play();


    
}
function erro(err){
    console.log(err.name +":"+err.message);
}

video7.onplay = function (){
    setTimeout(draw7,10);
}
function draw7(){
    if(video7.paused || video7.ended){return};
    ctx7.drawImage(video7,0,0);
    setTimeout(draw7,10);
}
