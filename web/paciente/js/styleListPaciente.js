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
    
    $("#tablePaciente").on("click","button[name='deletPaciente']",function(){
        var id = $(this).attr("data-id");
        $.getScript("paciente/js/paciente.js", function () {
            deletPaciente(id);
            list_filter();
        });
    });
    $("#tablePaciente").on("click","button[name='editPaciente']",function(){
        alert();
    });

});