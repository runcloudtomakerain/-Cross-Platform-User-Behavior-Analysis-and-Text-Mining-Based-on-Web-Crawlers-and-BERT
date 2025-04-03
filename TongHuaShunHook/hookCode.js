
//自执行函数
(function(){
    var cookie_cache = document.cookie;
    Object.defineProperty(document,'cookie',{
        get:function(){
            console.log('Get cookie');
            // debugger
            return cookie_cache;
        },
        set:function(val){
            console.log('Set cookie',val);
            debugger
            return cookie_cache;
        },
    });
})();
