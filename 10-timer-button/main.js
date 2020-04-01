$(function () {
    var $btn = $('input');
    var num = 6;
    var timer = setInterval(function(){
        num--;
        if(num === 0){
            clearInterval(timer); 
            $btn.val('同意');
            $btn.removeAttr('disabled');
        }else{
            $btn.val('同意(' + num + ')s');
        }
    }, 1000);
    $btn.click(function(){
        alert('就知道你会同意的！');
    })
});