define(function(require,exports,module){

     var util = {};

     var colorRange = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];


     //取得随机颜色值
     util.randomColor = function(){
          //console.log("calling randomColor");
          return '#' +

               colorRange[Math.floor(Math.random() * 16)] +

               colorRange[Math.floor(Math.random() * 16)] +

               colorRange[Math.floor(Math.random() * 16)] +

               colorRange[Math.floor(Math.random() * 16)] +

               colorRange[Math.floor(Math.random() * 16)] +

               colorRange[Math.floor(Math.random() * 16)];

     };


    //取得0-100随机像素值
    util.randomPixel=function(){
        //console.log("calling randomPixel");
        return Math.floor(Math.random()*100)+'px';
    }

     module.exports = util;

});