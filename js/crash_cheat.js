<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://i.loli.net/2018/08/24/5b7fcb00ed9bf.png");
         document.title = '╭(°A°`)╮网页崩溃了';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://i.loli.net/2018/09/25/5baa4f21661e7.png");
         document.title = '没想到吧(ฅ>ω<*ฅ)';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
             $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
         }, 2000);
     }
 });1