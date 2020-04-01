define(['jquery'], function($){
    function TimerButton() {
        var $btn = $('<input class="timer-button" type="button" disabled>');
        var timer, num;
        var cfg = {
            container: 'body',
            num: 6,
            title: "同意",
            onClick: null
        };
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
    return TimerButton;
})
