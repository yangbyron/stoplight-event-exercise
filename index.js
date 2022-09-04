(function () {
  'use strict';
  var obj = {
    'stop': 'red',
    'slow': 'yellow',
    'go': 'green'
  };
  // YOUR CODE HERE
  //Part I
  var originalColor = document.getElementById('stopLight').style.backgroundColor;
  var buttons = document.getElementById('controls');
  buttons.addEventListener('click', (e) => {
    var light = document.body.querySelector(`div[id=${e.target.textContent.toLowerCase()}Light]`);
    if (light.style.backgroundColor === originalColor) {
      light.style.backgroundColor = obj[e.target.textContent.toLowerCase()];
      //Bonus
      console.log(e.target.textContent + '-bulb on');
    } else {
      light.style.backgroundColor = originalColor;
      //Bonus
      console.log(e.target.textContent + '-bulb off');
    }
  })
  //Part II
  var buttonsDiv = document.getElementsByClassName('button');
  for (let index = 0; index < buttonsDiv.length; index++) {
    buttonsDiv[index].addEventListener('mouseover', (e) => {
      console.log(`Entered ${e.target.textContent} button`);
    });
    buttonsDiv[index].addEventListener('mouseout', (e) => {
      console.log(`Left ${e.target.textContent.toLowerCase()} button`)
    });
  }

})();