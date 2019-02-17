var button1 = document.getElementById('1');
var button2 = document.getElementById('2');
var button3 = document.getElementById('3');
var buttonInfoText = document.createTextNode("MASS INFO HERE");
var body = document.getElementById('main-body')

button1.addEventListener('click', function(){

});
button2.addEventListener('click', function(){

});
button3.addEventListener('click', function(){

});
$("1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("main-body").offset().top
    }, 2000);
});
/*button.addEventListener('mouseover', function(){
    textBox.style.display = "block";
    //document.body.style.backgroundColor = 'green';
});
button.addEventListener('mouseout', function(){
    textBox.style.display = "none";
});*/