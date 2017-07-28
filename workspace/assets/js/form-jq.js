$(window).on("load", function () {

    function checkInput(e) {
        var theTarget = e.target;
        if (theTarget.value.length < 4) {
            $(theTarget).addClass("error");
        } else {
            $(theTarget).removeClass("error");
        }
    }

    $('#name,#surname,#about').keyup(checkInput);

    function createUser() {
        this.name = $('#name').val() + ' ' + $('#surname').val();
        this.about = $('#about').val();
        this.subscribe = $("#subscribe").is(":checked");
        this.education = $("[name='education']:checked").val();
        this.country = $("[name='country']:checked").val();
        console.log(this);
    }

    $('#submit').bind('click',

        function (e) {
            e.preventDefault();
            showLoader();
            setTimeout(function (){
                new createUser;
            },2000)});

    function showLoader() {
        $("#black-wrap").show();
        $("#loader").show();
        setTimeout(function () {
            $("#black-wrap").hide();
            $("#loader").hide();
        }, 3000)};

});



