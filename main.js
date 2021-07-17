var canvas = new fabric.Canvas('myCanvas');
 
 block_image ="";
 image1="BirthdayImage.jpg"

function new_image()
{
    fabric.Image.fromURL("hOye.gif",function (Img){
        block_image=Img;
        block_image.scaleToWidth(700);
        block_image.scaleToHeight(510);
        block_image.set({
            top:0,left:0});
            canvas.add(block_image);
       
            
	
});
    }
    var x= document.getElementById("myAudio");
    
function playSound(){
    x.play();  	

  fabric.Image.fromURL("background.gif",function (Img){
    block_image=Img;
    block_image.scaleToWidth(700);
    block_image.scaleToHeight(510);
    block_image.set({
        top:0,left:0});
        canvas.add(block_image);
});}
