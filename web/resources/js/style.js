$(function () {
    $("#cerrarMenu").click(function () {
        $(".menu-lateral").toggleClass("close-menu");
        $(".contenedor").toggleClass("open-contenedor");
        $("#cerrarMenu i").toggleClass("fa-chevron-circle-left");
        $("#cerrarMenu i").toggleClass("fa-chevron-circle-right");
    });

    $("#pruebaTab").click(function () {
        $(".nav").append('<li><a data-toggle="tab" href="#menu2">Menu 2</a></li>');
    });


    $(".close-all-tab").click(function (e) {
        $('.nav-tabs li').remove();
        $('.tab-content').html("");
    });
    $("#pestaña").click(function(){
        var pestaña = $(getCurrentTab()).attr("href");
        
        alert($(pestaña + " #optionPaciente").attr("data-id"));
    });
});



function openModal(id) {
    $("#" + id).modal('show');
    $.each($("#" + id + " input"), function () {
        $(this).val("");
    });
}

function closeModal(id) {
    $("#" + id).modal('toggle');
}