(function() {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        init();
    });

    function init(){
        var products = ["400 мл молока","550 г муки","20-25 г сырых дрожжей","20 г сливочного масла","2 ст.л. растительного масла","0,5 ст.л. соли ","1,5 ст.л. сахара","500 г адыгейского сыра","яйца"],
            includeBlock=document.getElementById('ingrdients'),
            ul=document.createElement('ul'),
            li=document.createElement('li');
        for (var i=0; i<products.length; i++){
            li=document.createElement('li');
            li.innerText=products[i];
            ul.appendChild(li);
        };
        includeBlock.appendChild(ul);
        var pic = document.getElementById('recipts-img');
        pic.onclick = function() {
            pic.remove();
        };
    }

}());