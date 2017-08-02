require(["ingredients"], function (prod) {
    var products = prod,
        includeBlock = $("#ingrdients"),
        div = '';
    $.each(products, function (i) {
        div += '<div>' + products[i] + '</div>';
    });
    includeBlock.append(div);
});