define(function(require,exports,module){

     var util = require('./util');

     var helloSeaJS = document.getElementById('hello-seajs');

     //helloSeaJS.style.color = util.randomColor();
     helloSeaJS.style.fontSize=util.randomPixel();
     helloSeaJS.style.borderRadius=util.randomPixel();
     helloSeaJS.style.backgroundColor=util.randomColor();
     //console.log("hello");
     window.setInterval(function(){
          //helloSeaJS.style.color = util.randomColor();
          helloSeaJS.style.fontSize=util.randomPixel();
          helloSeaJS.style.borderRadius=util.randomPixel();
          helloSeaJS.style.backgroundColor=util.randomColor();
     },1500);

});