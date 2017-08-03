$(window).on("load", function () {
    function showLoading() {
        $("#black-wrap").show();
        $("#loader").show();
    }

    function stopLoading() {
        $("#black-wrap").hide();
        $("#loader").hide();
    }

    var url = 'http://api.fixer.io/latest';
    showLoading();
    var noAfricaArr = [];
    var newArr = [];
    var noAsiaArr = [];
    $.when($.get(url))
        .then(function (currency) {
            var arr = Lazy(currency)
                .source.rates;
            return arr;
        })
        .then(function(arr){
            var cur = [arr.USD,arr.RUB];
            return cur;
        })
        .then(function(cur){
            $('body').append('<div class="currency"><div class="euro"><p>Курс евро</p><span>'+cur[1].toFixed(2)+'</span></div>' +
                '<div class="dollar"><p>Курс доллара</p><span>'+(cur[1]/cur[0]).toFixed(2)+'</span></div></div> ' )
        })
        .fail(function (xhr, textStatus, errorThrow) {
            console.log('error');
        })
        .always(function (xhr, textStatus) {
            stopLoading();
        });

});