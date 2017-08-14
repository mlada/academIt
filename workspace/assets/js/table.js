(function () {
    'use strict';

    document.addEventListener("DOMContentLoaded", function (event) {
        init();
    });

    function init() {
        document.getElementById('mendeleev').addEventListener("mouseover", function (event) {
            var target = event.target;
            if (target.matches('tr:nth-child(even) > td:nth-child(even)')) {
                target.classList.toggle('bg')
            }
        }, false);
    }
}());