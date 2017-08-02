/*подключить сторонние библ */
require.config({
    paths: {
        jqueryui: '/node_modules/jquery-ui-dist/jquery-ui.min',
        jquery: '/node_modules/jquery/dist/jquery.min'
    }
});

/*создать список ингридиентов*/
require(["includeIngredients"]);

/*выделить слова*/
require(["search","searchWords","jquery"],function(words,search,$){
    search.searchText('#reciptBlock',words);
});

/*аккордеон + jQuery-ui*/
require(["accordeon","jqueryui"],function(func){
    func.accordeon('#accordion');
});

/*удаление изображения*/
require(['jquery'], function ($) {
    $("#recipts-img").on("click", function (e) {
        e.target.remove()
    });
});
