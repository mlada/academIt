define(
    function (el) {
        return {
            accordeon: function (el) {
                $(el)
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
            }
        }
    });