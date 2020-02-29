
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '哦豁,网页崩溃了';
         clearTimeout(titleTime);
     }
     else {
         document.title = '傻逼,没想到吧' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });

