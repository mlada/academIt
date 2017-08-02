$(window).on("load", function () {
    require(["ingredients"], function(ingredients) {
        alert(ingredients);
    });
    var includeBlock = $("#ingrdients"),
        div = '';


    $.each(products, function (i) {
        div += '<div>' + products[i] + '</div>';
    });
    includeBlock.append(div);

    var term = "хачапури";
    var locale_HTML = document.body.innerHTML;
    var termArr = ["хачапури", "самые", "вкусные"];
    var placeSearch = $('#reciptBlock').html();
    var elArr;
    $(termArr).each(function (i) {
        var termEl = termArr[i];
        elArr = placeSearch.replace(eval("/" + termEl + "/g"), '<strong>' + termEl + '</strong>');
        placeSearch = elArr;
    });
    $('#reciptBlock').html(elArr);
    $("#accordion")
        .accordion({
            header: "> div > h2"
        })
        .sortable({
            axis: "y",
            handle: "h2",
            stop: function (event, ui) {
                ui.item.children("h2").triggerHandler("focusout");
                $(this).accordion("refresh");
            }
        });

    $("#recipts-img").on("click", function (e) {
        e.target.remove()
    });
});