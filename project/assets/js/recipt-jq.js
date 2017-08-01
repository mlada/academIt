$(window).on("load", function () {

    var products = ["400 мл молока", "550 г муки", "20-25 г сырых дрожжей", "20 г сливочного масла", "2 ст.л. растительного масла", "0,5 ст.л. соли ", "1,5 ст.л. сахара", "500 г адыгейского сыра", "яйца"],
        includeBlock = $("#ingrdients"),
        div = '';


    $.each(products, function (i) {
        div += '<div>' + products[i] + '</div>';
    });
    includeBlock.append(div);

    console.log(div);
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