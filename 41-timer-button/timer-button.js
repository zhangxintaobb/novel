// var $timerButton = (function () {
function TimerButton() {
    var $btn = $('<input class="timer-button" type="button" disabled>');
    var timer, num;
    var cfg = {
        container: 'body',
        num: 6,
        title: "同意",
        onClick: null
    };
    // function show(conf) {
        this.show = function (conf) {  
        $(cfg.container).append($btn);
        $.extend(cfg, conf);
        num = cfg.num;
        $btn.val(cfg.title + '(' + num + 's)');
        timer = setInterval(function () {
            num--;
            if (num === -1) {
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
                num = 0;
            } else {
                $btn.val(cfg.title + '(' + num + ')s');
            }
        }, 1000);
        $btn.click(cfg.onClick);
    }
};


/*
var $timerButton = (function () {
    // var $html = '<input type="button" value="同意（6s）" disabled>';
    // var $btn = $('<input class="timer-button" type="button" disabled>');
    // var num = 6;
    // var timer, num;
    // var cfg = {
    //     container: 'body',
    //     num: 6,
    //     title: "同意"
    // };

    // $btn.css({
    //     height:'50px',
    //     width:'100px'
    // })

    function show(conf) {
        var $btn = $('<input class="timer-button" type="button" disabled>');
        var timer, num;
        var cfg = {
            container: 'body',
            num: 6,
            title: "同意",
            onClick: null
        };

        // 1. DOM绘制
        // $(container).html($html);

        $(cfg.container).append($btn);
        $.extend(cfg, conf);
        num = cfg.num;
        $btn.val(cfg.title + '(' + num + 's)');
        timer = setInterval(function () {
            num--;
            if (num === -1) {
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
                num = 0;
            } else {
                $btn.val(cfg.title + '(' + num + ')s');
            }
        }, 1000);
        $btn.click(cfg.onClick);


        // if (!num) {
        //     clearInterval(timer);
        //     num = cfg.num;
        //     $btn.val(cfg.title + '(' + num + 's)');
        //     timer = setInterval(function () {
        //         num--;
        //         if (num === -1) {
        //             $btn.val(cfg.title);
        //             $btn.removeAttr('disabled');
        //             num = 0;
        //         } else {
        //             $btn.val(cfg.title + '(' + num + ')s');
        //         }
        //     }, 1000);
        //     // 2. 事件绑定(event bind)
        // // $btn.click(function () {
        // //     cfg.onClick();
        // // });
        // $btn.click(cfg.onClick);
        // }

        // // 2. 事件绑定(event bind)
        // // $btn.click(function () {
        // //     cfg.onClick();
        // // });
    }
    return {
        show: show
    }
}());
*/
// 不用 page load event

// 封装成对象
/**
 * 1.全局对象,简单对象自变量，不完全是面向对象，不能封装私有对象
 * var timer{
 *  show:function()
 * }
 *
 * 2. 工厂函数，一个函数返回值是一个简单对象，UI组件封装用的比较多
 * var timerBtn = (function(){
 *  return {
 *      show:function(){}
 *  }
 * }())    立即执行表达式
 *
 * 3. 构造函数：
 * function TimerBtn(){
 * }
 * var tb = new TimerBtn();
 */