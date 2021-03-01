//var btn = document.getElementById('btn');
//btn.addEventListener("click", toggle)
//var el = document.querySelectorAll('.card-item');




//function toggle (){
//    console.log(el);
//    el.classList.add('dark-mode-card');
//}

var btn = document.getElementById('toggle-button');
var bgc = document.querySelectorAll('.card-item');
btn.addEventListener("click", function(event) {
    
    bgc.forEach((el) => {
      el.classList.toggle("dark-mode-card");
    });
    document.body.classList.toggle('dark-mode');
  });