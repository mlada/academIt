$(window).on("load", function () {
    function showLoading() {
        $("#black-wrap").show();
        $("#loader").show();
    }

    function stopLoading() {
        $("#black-wrap").hide();
        $("#loader").hide();
    }

    /*
     var url = 'https://restcountries.eu/rest/v2/';
     showLoading();
     var noAfricaArr = [];
     var newArr = [];
     var noAsiaArr = [];
     $.when($.get(url))
     .then(function (countries) {
     Lazy(countries)
     .source
     .forEach(function (con) {
     con.currencies.forEach(function (cur) {
     if (cur.code === "USD") {
     newArr.push(con);
     }
     });
     });
     return newArr;
     })
     .then(function (newArr) {
     Lazy(newArr)
     .forEach(function (e) {
     if (e.region !== 'africa') {
     noAfricaArr.push(e);
     }
     });
     return noAfricaArr;
     })
     .then(function (noAfricaArr) {
     Lazy(noAfricaArr)
     .forEach(function (e) {
     if (e.region !== 'Asia') {
     noAsiaArr.push(e);
     }
     });
     return noAsiaArr;
     })
     .then(function (noAsiaArr) {
     var noAsiaLength = Lazy(noAsiaArr)
     .length();
     console.log(noAsiaLength);
     })
     .fail(function (xhr, textStatus, errorThrow) {
     console.log('error');
     })
     .always(function (xhr, textStatus) {
     stopLoading();
     });*/


    var url = 'https://restcountries.eu/rest/v2/';
    showLoading();
    function isUSD(x) {
        return Lazy(x.currencies).forEach(function (e) {
            return e.code === 'USD';
        })
    }
    function noAfrica(x) {
        return x.region !== 'Africa'
    }
    function noAsia(x) {
        return x.region !== 'Asia'
    }
    $.when($.get(url))
        .then(function (countries) {
            return Lazy(countries)
                .source
                .filter(isUSD);
        })
        .then(function (countries) {
            return Lazy(countries)
                .source
                .filter(noAfrica);
        })
        .then(function (countries) {
            return Lazy(countries)
                .source
                .filter(noAsia);
        })
        .then(function (countries) {
            console.log(Lazy(countries).length())
        })
        .fail(function (xhr, textStatus, errorThrow) {
            console.log('error');
        })
        .always(function (xhr, textStatus) {
            stopLoading();
        });

});