define(function(require,exports,module){

     var util = require('./util');

     var helloSeaJS = document.getElementById('hello-seajs');

     helloSeaJS.style.color = util.randomColor();
     console.log("hello");
     window.setInterval(function(){

          helloSeaJS.style.color = util.randomColor();

     },1500);

});