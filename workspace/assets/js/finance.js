$(window).on("load", function () {
   function showLoading(){
       $("#black-wrap").show();
       $("#loader").show();
   }
    function stopLoading(){
       $("#black-wrap").hide();
       $("#loader").hide();
   }

    /*/!*ajax*!/
    var xhr;
    if(window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }else if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        throw new Error("Ajax not supported");
    }*/

  /*  /!*promise when/then*!/
    var url = 'https://restcountries.eu/rest/v2/lang/ru';
   showLoading();
    $.when($.get(url))
        .then(function(countries){
            var countLength = Lazy(countries).length();
            return countLength;
        }).then(function (countLength){
            console.log(countLength);
        })
        .fail(function (xhr,textStatus,errerThrow) {

        })
        .always(function (xhr,textStatus) {
            stopLoading();
        });*/

    /*создание promice*/
   //  var url = 'https://restcountries.eu/rest/v2/lang/ru';
//     function asyncEvent() {
//         var dfd = jQuery.Deferred(); // создание промиса
//         setTimeout(function () {
//             dfd.resolve('hurray');
//         },2);
//         setTimeout(function () {
//             dfd.reject('sorry');
//         },2);
//         setTimeout(function working() {
//             if (dfd.state() === "pending"){
//                 dfd.notify('working...');
//                 setTimeout(working,500);
//             }
//         },1);
//         return dfd.promise();
//     }
//     $.when(asyncEvent()).then(
//         function (status) {
//             console.log (status + ", все супер! ");
//         },
//         function (status) {
//             console.log (status + ", что-то пошло не так! ");
//         },
//         function (status) {
//             $("body").append(status);
//         }
//     );

   /*Пример с jquery*/
    var url = 'https://restcountries.eu/rest/v2/lang/ru';
    $.get(url,{ },function (countries) {
        var countLength = Lazy(countries).length();
        return countLength;
    });
    $.get(url)
        .done(function (countries,textStatus,xhr) {
            var countLength = Lazy(countries).length();
            return countLength;
        })
        .fail(function (xhr,textStatus,errorThrown){}
        )
        .always(function (xhr,textStatus){}
        );
});