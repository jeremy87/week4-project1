// Add your JS here.
$(document).ready(function(){
 // Question #1:
 $("#hover").mouseenter(function(){
   $("#hover").css("background-color", "red");
 });
 $("#hover").click(function(){
 	$("#hover").toggleClass("green");
 });
 // Question #2:
 $(".hideMe").click(function(){
 	$(".hideMe").hide();
 });
 // Question #3:
 $("button.changeColor").click(function(){
 	$("li").eq(2).css("color", "#8A2BE2");
 });
 // Question #4:
 $("button#removeLi").click(function(){
 	$("li").eq(1).hide();
 });
 // Question #5:
 $("li").eq(3).click(function(){
 	$(this).after("<li>I am a new line item!</li>");
 });
 //Question #6:
 $("li").eq(4).click(function(){
 	$("ul li").hide();
 	$("li").eq(4).show();
 	$(this).css("font-size", "40px");
 });
 // Question #7:
 $("img.cute").click(function(){
 	var puppyImage = $("img.cute"); 
 	for(i=0; i < 20; i++) { 
 		puppyImage.clone().appendTo(".clones")
 	}
 });
 // Question #8:
 $("body").dblclick(function(){
 	$("#makeSquare").css("border-radius", "0px");
 	$("#makeSquare").css("width", "120px");
 });
 // Question #9:
 $("button#dontClick").click(function(){
 	alert("I told you not to click the button!");
 });
 // Question #10:
 $(".black.swatch").click(function(){
 	$("body").css("background-color", "#000");
 });
 $(".wood.swatch").click(function(){
 	$("body").css("background-image", "url(http://phandroid.s3.amazonaws.com/wp-content/uploads/2015/03/wood-wallpaper-3.jpg)");
 });
 $(".chaos.swatch").click(function(){
 	$("body").css("background-image", "url(http://www.henderson-art.co.uk/art/wallpaper/chaos.jpg)");
 });
// Closing 
});