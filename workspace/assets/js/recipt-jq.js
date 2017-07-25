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
});