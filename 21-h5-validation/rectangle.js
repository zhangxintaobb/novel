/* global $: true */
$(function(){
    var $width = $('#width'),
        $height = $('#height'),
        // $btn = $('#calculate'),
        $per = $('#perimeter'),
        $form = $('form');
        $area = $('#area');
    function decimalSave(num, n){
        return Math.round(num*Math.pow(10, n))/Math.pow(10,n);
    }
    $form.submit(function(e){
        // 验证不通过，什么都不做
        // if(!validate('#width') || !validate('#height')) return;

        e.preventDefault();

        var w = Number($width.val());
        var h = Number($height.val());
        var p = 2*(w+h);
        var a = w*h;

        p = decimalSave(p, 4);
        a = decimalSave(a, 4);

        $per.val(p);
        $area.val(a);
    });

    // 1. event keypress
    // 2. event argument get key value，  e.key  and  e.target.value
    // 3. ilegal key filter,  e.preventDefault()
    // 4. 合法字符还要考虑出现的位置  . e E -
    $width.keypress(function (e) {
        if( /[abcdf-zABCDF-Z]/.test(e.key)){
            e.preventDefault();
            return;
        }

        // 合法字符  e
        // 允许出现在非科学计数法的数字末尾
        // 允许出现在非科学计数法的数字中间

        // 不允许出现在非科学计数法的数字前面
        // 不允许出现在空文本中
        // 不允许出现在负号后面
        // 不允许出现在科学计数法（e  E）数字的末尾
        // 不允许出现在科学计数法数字的前面
        // 不允许出现在科学计数法数字的中间
        var pos = e.target.selectionStart,
            con = e.target.value;

        if(e.key === 'e'){
            if(pos===0 || con.indexOf('e')!==-1 || con.indexOf('E') !== -1){
                e.preventDefault();
                return;
            }
            if(pos===1 && con.substring(0,1)==='-'){
                e.preventDefault();
                return;
            }
        }


        
    })

    $height.keypress(function (e) {
        if( /[abcdf-zABCDF-Z]/.test(e.key)){
            e.preventDefault();
            return;
        }
    })





    // tab键的校验
    $width.focusout(function(){
        // if(!validate($width)) select this;
        if(!validate('#width')){
            $width.select();
        }
    });
    $height.focusout(function(){
        // if(!validate($width)) select this;
        if(!validate('#height')){
            $height.select();
        }
    });

    function validate(field){
        // get DOM error message
        var $data = $(field);
        var $msg = $(field + '-validation-message');

        // validate null
        if($data.val() === ''){
            if(field==='#width'){
                $msg.html('宽度不能为空！');
            }else{
                $msg.html('高度不能为空！');
            }
            // select:设置焦点
            $data.select(); 
            return false;
        }

        // validate number
        if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
            $msg.html('必须是数值！');
            $data.select();
            return false;
        }

        // validate > 0
        if(Number($data.val()) < 0){
            $msg.html('必须大于零！');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }



});
// http://regex101.com