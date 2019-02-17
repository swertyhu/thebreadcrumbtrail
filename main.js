var button = document.getElementById('buttonMore');
var buttonInfoText = document.createTextNode("MASS INFO HERE");
var textBox = document.getElementById('textBox');
textBox.style.display = "none";

button.addEventListener('click', function(){
    location.href = "heatmap.html";
});
button.addEventListener('mouseover', function(){
    textBox.style.display = "block";
    //document.body.style.backgroundColor = 'green';
});
button.addEventListener('mouseout', function(){
    textBox.style.display = "none";
});