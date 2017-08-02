define(
    function (where, wordsArr) {
    return {
        searchText: function (where, wordsArr) {
            var termArr = wordsArr;
            var placeSearch = $(where).html();
            var elArr;
            $(termArr).each(function (i) {
                var termEl = termArr[i];
                elArr = placeSearch.replace(eval("/" + termEl + "/g"), '<strong>' + termEl + '</strong>');
                placeSearch = elArr;
            });
            $(where).html(elArr);
        }
    }
});