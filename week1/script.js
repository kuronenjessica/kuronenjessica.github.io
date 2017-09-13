document.addEventListener('DOMContentLoaded', function(){
  var container = document.querySelector('.composition1');
  var currentComp = 1;
  var base = 1;

  var modulate = function (){
    container.classList.remove('composition' + currentComp);
    base = base + 1;
    currentComp = base % 4;
    container.classList.add('composition' + currentComp);
  }


  setInterval(modulate, 1000);

});
