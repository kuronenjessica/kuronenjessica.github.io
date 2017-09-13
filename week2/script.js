document.addEventListener('DOMContentLoaded', function(){
  var illustration = document.querySelector('.composition1');
  var currentComp = 1;

  var handleMouseEnter = function(index) {
    illustration.classList.remove('composition' + currentComp);
    illustration.classList.add('composition' + (index + 1));
    currentComp = (index + 1);
  };

  //Here is the verbose way to do this
  // var handleMouseEnter = function(index) {
  //   illustration.classList.remove('composition1', 'composition2', 'composition3', 'composition4');
  //   if (index === 0) {
  //     illustration.classList.add('composition' + 1);
  //   } else if (index === 1) {
  //     illustration.classList.add('composition' + 2);
  //   } else if (index === 2) {
  //     illustration.classList.add('composition' + 3);
  //   } else if (index === 3) {
  //     illustration.classList.add('composition' + 4);
  //   }
  // };

  var controls = document.querySelectorAll('.control-area');
  /* [].forEach.call() is weird JS quirk to allow us to loop through a Nodelist as if it was an Array */
  [].forEach.call(controls, function(element, index) {
    console.log('for each loop...', element, index);
    element.addEventListener('mouseenter', function(){
      console.log('mousein', index);
      handleMouseEnter(index);
    })
  });



  // var currentComp = 1;
  // var base = 1;

  // var modulate = function (){
  //   container.classList.remove('composition' + currentComp);
  //   base = base + 1;
  //   currentComp = base % 4;
  //   container.classList.add('composition' + currentComp);
  // };

  // var rotate = function(){
  //   container.classList.remove('composition' + currentComp);
  //   if (currentComp < 4){
  //     currentComp = currentComp + 1;
  //   } else {
  //     currentComp = 1;
  //   }
  //   container.classList.add('composition' + currentComp);
  //
  // };

  // setInterval(modulate, 1000);

});
