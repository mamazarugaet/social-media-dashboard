var btn = document.getElementById('toggle-button');
var bgc = document.querySelectorAll('.card-item');



btn.addEventListener("click", function(event) {
    bgc.forEach((el) => {
      el.classList.toggle("dark-mode-card");
    });
    document.body.classList.toggle('dark-mode');
  });