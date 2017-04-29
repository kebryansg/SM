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
    $("#tablePaciente").on("click", "button[name='editPaciente']", function () {
        var title = "Modificar Paciente";
        var id = $(this).attr("data-id");
        var tabId = "compose" + composeCount;
        composeCount = composeCount + 1;

        $('#TabAdm').append('<li><a name="' + title + '" href="#' + tabId + '"><button class="close closeTab" type="button" ><i class="fa fa-close"></i></button>' + title + '</a></li>');
        $('#ContentAdm').append('<div class="tab-pane fade" id="' + tabId + '"><div id="editP' + id + '"></div></div>');
        $('#editP' + id).load("paciente/paciente.jsp", function () {
            ini();
            $.getScript("paciente/js/paciente.js", function () {
                edit(id);
            });
        });
        $currentTab = $('#TabAdm a[href="#' + tabId + '"]');

        $(this).tab('show');
        showTab(tabId);
        registerCloseEvent();
    });

    $("#tablePaciente").on("click", "button[name='deletPaciente']", function () {
        var id = $(this).attr("data-id");
        $.getScript("paciente/js/paciente.js", function () {
            deletPaciente(id);
            list_filter();
        });
    });



});