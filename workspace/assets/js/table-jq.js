$(window).on("load", function () {
    $('#mendeleev').bind("mouseover", function (event) {
        if (event.target.matches('tr:nth-child(even) > td:nth-child(even)')) {
            event.target.classList.add('bg')
        }
    });
    var elem = [];
    /*$('TD').bind("click", function (event) {
     if (elem.length < 2) {
     elem.push(event.target);
     console.log(elem);
     }
     else{
     var sb1 = elem[1].previousElementSibling;
     $(elem[0].previousElementSibling).after($(elem[1]));
     $(sb1).after($(elem[0]).detach());
     elem = [];
     }
     });*/

    $('TD').bind("click", function (event) {
            elem.push(event.target);
            while (elem.length == 2) {
                var a = $(elem[0]).text();
                $(elem[0]).text($(elem[1]).text());
                $(elem[1]).text(a);
                elem =[];
                break;
            }
    });

   /* while (elem.length == 2) {
        console.log($(elem[0]).text());
        // console.log(elem[1].text());
    }*/
});