(function () {
    'use strict';

    document.addEventListener("DOMContentLoaded", function (event) {
        init();
    });

    function init() {
        /*var rows = document.getElementById('mendeleev').childNodes[1].children;
         (function () {
         for (var i = 0; i < rows.length; i++) {
         (i + 1 & 1) ? ( rows[i].className = "") : (
         (function () {
         for (var j = 0; j < rows[i].children.length; j++) {
         (j + 1 & 1) ? ( rows[i].children[j].className = "") :
         rows[i].children[j].onmouseover = function (event) {
         var target = event.target;
         target.classList.add('bg');
         }
         }
         })()
         );
         }
         })();*/

        // var elements = document.querySelectorAll('tr:nth-child(even) > td:nth-child(even)');
        // console.log(elements.querySelector);
        /*for (var td in elements){
         elements.onmouseover = function (event) {
         var target = event.target;
         target.classList.add('bg');
         };
         elements.onmouseout = function (event) {
         var target = event.target;
         target.classList.remove('bg');
         };
         }*/
        // elements.addEventListener("mouseover", function(e) {e.target.classList.toggle('bg')}, false);
        document.getElementById('mendeleev').addEventListener("mouseover", function (event) {
            var target = event.target;
            if (target.matches('tr:nth-child(even) > td:nth-child(even)')) {
                target.classList.toggle('bg')
            }
        }, false);
    }
}());