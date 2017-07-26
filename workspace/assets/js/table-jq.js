$(window).on("load", function () {
    $('#mendeleev').bind("mouseover", function (event) {
        if (event.target.matches('tr:nth-child(even) > td:nth-child(even)')) {
            event.target.classList.add('bg')
        }
    });
    var elem = [];
    $('TD').bind("click", function (event) {
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
    });
});