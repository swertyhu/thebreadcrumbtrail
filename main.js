var button = document.getElementById('1');
var buttonInfoText = document.createTextNode("MASS INFO HERE");
var body = document.getElementById('main-body')
$(document).ready(function(){
    $("button").click(function(){
      $("#div1").fadeOut();
      $("#div2").fadeOut("slow");
      $("#div3").fadeOut(3000);
    });
  });
button.addEventListener('click', function(){
    for(var time=0; body.style.opacity != 0; time++){
        setTimeout(function(){
            body.style.opacity -= .01
        }, 1000);
    }
    window.location = "heatmap.html";
});
/*button.addEventListener('mouseover', function(){
    textBox.style.display = "block";
    //document.body.style.backgroundColor = 'green';
});
button.addEventListener('mouseout', function(){
    textBox.style.display = "none";
});*/