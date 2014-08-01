define(function(require,exports,module){
    require('jquery');
    $(function(){
        //alert("Hello index");
        $('#btnClick').click(function(){
            alert($(this).html());
        });
    });
});