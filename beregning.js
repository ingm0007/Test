function calculate(){
	var t = widthBox.value;
	//read from the textBoxs
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lenghtBox").value;
	var h = document.getElementById("heightBox").value;
//convert to Float
w=parseFloat (w);
h=parseFloat (h);
l=parseFloat (l);
var result= w*l*h;
//show result in div
document.getElementById("result").innerHTML= result;
}