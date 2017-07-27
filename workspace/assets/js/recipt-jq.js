$(window).on("load",function(){
    var products = ["400 мл молока","550 г муки","20-25 г сырых дрожжей","20 г сливочного масла","2 ст.л. растительного масла","0,5 ст.л. соли ","1,5 ст.л. сахара","500 г адыгейского сыра","яйца"],
        includeBlock=$("#ingrdients"),
        ul=$("<ul></ul>"),
        li=$("<li></li>");
    $("#recipts-img").on("click",function(e){e.target.remove()});
    includeBlock.append(ul.append($.each(products,function(i){
            li.text(products[i]);
        })
    ));
    var term = "хачапури";
    var locale_HTML = document.body.innerHTML;
    var termArr =["хачапури","самые","вкусные"];
    var placeSearch = $('#accordion').html();
    /*var el = placeSearch.replace(eval("/"+term+"/g"),"#"+term);
    $('#accordion').html(el);*/
    var elArr;
    $(termArr).each(function (i) {
        var termEl = termArr[i];
        elArr = placeSearch.replace(eval("/"+termEl+"/g"),"#"+termEl);
        placeSearch = elArr;
        console.log(elArr);
    });
    $('#accordion').html(elArr);


/*
    var term = "хачапури";
    var placeSearch = $('body').html();
    var el = placeSearch.replace(eval("/"+term+"/g"),"#"+term);
    $('body').html(el);
*/


});