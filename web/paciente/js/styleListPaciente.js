$(function () {
$("#txt_filterPaciente").keyup(function () {
        $.getScript("paciente/js/paciente.js", function () {
            list_filter();
        });
    });

    $("#cantList").change(function () {
        $.getScript("paciente/js/paciente.js", function () {
            list_filter();
        });
    });

});