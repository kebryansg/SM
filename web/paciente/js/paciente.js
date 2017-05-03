function validar() {
    $(".help-block").remove();

    /* Validacion de email */
    var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var email = $("#tabPacientes input[validate='email']");
    if ($(email).val() === null || $(email).val() === "" || !validacion_email.test($(email).val())) {
        $(email).closest("div").addClass("has-error");
        $(email).after('<span id="' + $(email).attr("id") + 'help" class="help-block">Email no valido.</span');
    } else {
        $(email).closest("div").removeClass("has-error");
    }
    /* Validacion de email */

    $.each($("#tabPacientes input[validate='text']"), function (index, value) {
        if ($(value).val() === null || $(value).val() === "") {
            $(value).closest("div").addClass("has-error");
            $(value).after('<span id="' + $(value).attr("id") + 'help" class="help-block">Campo Vacio</span');
        } else
        {
            $(value).closest("div").removeClass("has-error");
        }
    });
    $.each($("#tabPacientes select[validate='select']"), function (index, value) {
        if ($(value).val() === "0") {
            $(value).closest("div").addClass("has-error");
            $(value).after('<span id="' + $(value).attr("id") + 'help" class="help-block">Sin seleccionar</span');
        } else
        {
            $(value).closest("div").removeClass("has-error");
        }
    });
    $.each($("#tabPacientes input[validate='date']"), function (index, value) {
        if ($(value).val() === null || $(value).val() === "") {
            $(value).closest("div").addClass("has-error");
            $(value).parent("div").after('<span id="' + $(value).attr("id") + 'help" style="color:#a94442;" class="help-block">Sin Fecha</span');
        } else
        {
            $(value).closest("div").removeClass("has-error");
        }
    });
    if ($("#pac_Genero").val() === "2") {
        var date = $("#pac_FPP");
        if ($(date).val() === null || $(date).val() === "") {
            $(date).closest("div").addClass("has-error");
            $(date).parent("div").after('<span id="' + $(date).attr("id") + 'help" style="color:#a94442;" class="help-block">Sin Fecha</span');
        } else
        {
            $(date).closest("div").removeClass("has-error");
        }
    }
    return $(".help-block").length === 0;
}

function deletPaciente(id) {
    $.ajax({
        url: 'sPaciente',
        data: {
            op: 'delete',
            id: id
        },
        async: false,
        type: 'POST',
        success: function (data) {
            alertify.success("Registros Eliminado");
        }
    });
}

function list() {
    $.ajax({
        url: 'sPaciente',
        type: 'POST',
        async: false,
        data: {
            op: 'list'
        },
        success: function (response) {
            $("#tablePaciente").html(response);
        }
    });
}

var $pagination = $('#pagPacientes');

function indexPag(pag) {
    var cantList = $("#cantList").val();
    $.ajax({
        url: 'sPaciente',
        type: 'POST',
        async: false,
        data: {
            filter: $("#txt_filterPaciente").val(),
            top: cantList,
            pag: ((pag - 1) * cantList),
            op: 'list_filter'
        },
        success: function (response) {
            var obj = $.parseJSON(response);
            $("#tablePaciente").html(obj.list);
        }
    });

}

function list_filter() {
    if ($("#txt_filterPaciente").val() === "") {
        indexPag(1);
        $pagination.twbsPagination('destroy');
    } else {
        var $totalPages = 0;
        $.ajax({
            url: 'sPaciente',
            type: 'POST',
            async: false,
            data: {
                op: 'list',
                filter: $("#txt_filterPaciente").val()
            },
            success: function (response) {
                $totalPages = response / $("#cantList").val();
                $totalPages = Math.ceil($totalPages);
            }
        });
        var defaultOpts = {
            totalPages: $totalPages,
            visiblePages: 10,
            first: "Primero",
            next: "Siguiente",
            last: "Ultimo",
            prev: "Anterior",
            onPageClick: function (event, page) {
                indexPag(page);
            }
        };
        $pagination.twbsPagination('destroy');
        $pagination.twbsPagination(defaultOpts);
    }



}

function edit(id) {
    $.ajax({
        url: 'sPaciente',
        type: 'POST',
        async: false,
        data: {
            id: id,
            op: 'edit'
        },
        success: function (response) {
            var ob = $.parseJSON(response);
            $("#editP" + ob.paciente.id + " #optionPaciente").attr("data-id", ob.paciente.id);
            asignarPaciente(ob.paciente);

            addAntecedentes(ob.list, ob.paciente.id);
            if (!ob.paciente.sexo) {
                asignarObstetrico(ob.obs, ob.paciente.id);
            }
        }
    });
}

function editSave(id) {
    //var id = $("#savePaciente").attr("data-id");
    //if (validar()) {
    if (true) {
        var newA = newAntecedentes(id);
        var editA = editAntecedentes(id);
        alert(obtenerDatos(id));
        $.ajax({
            url: 'sPaciente',
            type: 'POST',
            async: false,
            data: {
                id: id,
                paciente: obtenerDatos(id),
                newAntecedentes: newA,
                editAntecedentes: editA,
                op: 'save'
            },
            success: function (response) {
                alertify.success("Paciente Modificado");
            }
        });
    }
}

function save() {
    //if (validar()) {
    if (true) {
        var newA = newAntecedentes(0);
        $.ajax({
            url: 'sPaciente',
            type: 'POST',
            async: false,
            data: {
                id: 0,
                paciente: obtenerDatos(0),
                newAntecedentes: newA,
                op: 'save'
            },
            success: function (response) {
                alertify.success("Paciente Registrado");
            }
        });
    }
}

function obtenerDatos(id) {
    var paciente = {
        cedula: $("#optionPaciente[data-id='" + id + "'] #pac_Cedula").val(),
        primerNombre: $("#optionPaciente[data-id='" + id + "'] #pac_primerNombre").val(),
        segundoNombre: $("#optionPaciente[data-id='" + id + "'] #pac_segundoNombre").val(),
        primerApellido: $("#optionPaciente[data-id='" + id + "'] #pac_primerApellido").val(),
        segundoApellido: $("#optionPaciente[data-id='" + id + "'] #pac_segundoApellido").val(),
        fechaNac: $("#optionPaciente[data-id='" + id + "'] #pac_FechaNac").val(),
        imagen: $("#optionPaciente[data-id='" + id + "'] #pac_imagen").attr("src"),
        editImg: ($("#optionPaciente[data-id='" + id + "'] #pac_imagen").attr("src") === $("#optionPaciente[data-id='" + id + "'] #pac_imagen").attr("edit")) ? "0" : "1",
        nacionalidad: $("#optionPaciente[data-id='" + id + "'] #pac_nacionalidad").val(),
        telCasa: $("#optionPaciente[data-id='" + id + "'] #pac_TelCasa").val(),
        email: $("#optionPaciente[data-id='" + id + "'] #pac_Email").val(),
        etnia: $("#optionPaciente[data-id='" + id + "'] #pac_Etnia").val(),
        domicilio: $("#optionPaciente[data-id='" + id + "'] #pac_Domicilio").val(),
        discapacidad: $("#optionPaciente[data-id='" + id + "'] #pac_Discapacidad").prop("checked"),
        ciudad: $("#optionPaciente[data-id='" + id + "'] #pac_Ciudad").val(),
        estadoCivil: $("#optionPaciente[data-id='" + id + "'] #pac_EstadoCivil").val(),
        telOficina: $("#optionPaciente[data-id='" + id + "'] #pac_TelOficina").val(),
        genero: $("#optionPaciente[data-id='" + id + "'] #pac_Genero").val(),
        paisNac: $("#optionPaciente[data-id='" + id + "'] #pac_PaisNac").val(),
        lugarNac: $("#optionPaciente[data-id='" + id + "'] #pac_LugarNac").val(),
        provincia: $("#optionPaciente[data-id='" + id + "'] #cboProvincia").val(),
        parroquia: $("#optionPaciente[data-id='" + id + "'] #cboParroquia").val(),
        canton: $("#optionPaciente[data-id='" + id + "'] #cboCanton").val(),
        //Obstetricia
        idObs: $("#optionPaciente[data-id='" + id + "'] #tabObstetricia").attr("data-id"),
        fpp: $("#optionPaciente[data-id='" + id + "'] #pac_FPP").val(),
        gestacion: $("#optionPaciente[data-id='" + id + "'] #pac_Gestacion").val(),
        abortos: $("#optionPaciente[data-id='" + id + "'] #pac_Abortos").val(),
        partos: $("#optionPaciente[data-id='" + id + "'] #pac_Partos").val(),
        cesareas: $("#optionPaciente[data-id='" + id + "'] #pac_Cesareas").val(),
        nacidoVivo: $("#optionPaciente[data-id='" + id + "'] #pac_NacidoVivo").val(),
        nacidoMuerto: $("#optionPaciente[data-id='" + id + "'] #pac_NacidoMuerto").val(),
        hijosVivos: $("#optionPaciente[data-id='" + id + "'] #pac_HijosVivos").val(),
        hijosMuertos: $("#optionPaciente[data-id='" + id + "'] #pac_HijosMuertos").val()

    };
    return paciente;
}

function newAntecedentes(id) {
// Retorna los nuevos antecedentes
    var ids = [];
    $.each($("#optionPaciente[data-id='" + id + "'] input[antecedentes]:not([data-id!='0']):checked"), function (index, cbk) {
        ids.push($(cbk).attr("dEnfermedad") + ":" + $(cbk).attr("dParient"));
    });
    return ids;
}

function addAntecedentes(list, id) {
    $.each(list, function (index, item) {
        $("#editP" + id + " input[antecedentes][dEnfermedad='" + item.idEnfermedad.id + "'][dParient='" + item.idPariente.id + "']").attr("data-id", item.id);
        $("#editP" + id + " input[antecedentes][dEnfermedad='" + item.idEnfermedad.id + "'][dParient='" + item.idPariente.id + "']").prop("checked", true);
    });
}

function editAntecedentes(id) {
// Retorna los antecedentes que han sido editados
    var ids = [];
    $.each($("#editP" + id + " input[antecedentes][data-id!='0']"), function (index, cbk) {
        if (!$(cbk).prop("checked")) {
            ids.push($(cbk).attr("data-id"));
        }
    });
    return ids;
}

function asignarObstetrico(obs, id) {
    $("#editP" + id + " #tabObstetricia").attr("data-id", obs.id);
    $("#editP" + id + " #pac_FPP").val(obs.fpp);
    $("#editP" + id + " #pac_Gestacion").val(obs.gestas);
    $("#editP" + id + " #pac_Abortos").val(obs.abortos);
    $("#editP" + id + " #pac_Partos").val(obs.partos);
    $("#editP" + id + " #pac_Cesareas").val(obs.cesareas);
    $("#editP" + id + " #pac_NacidoVivo").val(obs.nacidosVivos);
    $("#editP" + id + " #pac_NacidoMuerto").val(obs.nacidosMuertos);
    $("#editP" + id + " #pac_HijosVivos").val(obs.hijosVivos);
    $("#editP" + id + " #pac_HijosMuertos").val(obs.muertos);
}

function asignarPaciente(paciente) {
    $("#editP" + paciente.id + " #savePaciente").attr("data-id", paciente.id);
    $("#editP" + paciente.id + " #pac_Cedula").val(paciente.cedula);
    $("#editP" + paciente.id + " #pac_primerNombre").val(paciente.nombre1);
    $("#editP" + paciente.id + " #pac_segundoNombre").val(paciente.nombre2);
    $("#editP" + paciente.id + " #pac_primerApellido").val(paciente.apellido1);
    $("#editP" + paciente.id + " #pac_segundoApellido").val(paciente.apellido2);
    $("#editP" + paciente.id + " #pac_FechaNac").val(paciente.fechaNacimiento);
    $("#editP" + paciente.id + " #pac_imagen").attr("src", paciente.imagen);
    $("#editP" + paciente.id + " #pac_imagen").attr("edit", paciente.imagen);
    $("#editP" + paciente.id + " #pac_TelCasa").val(paciente.telefonoDomicilio);
    $("#editP" + paciente.id + " #pac_Email").val(paciente.email);
    $("#editP" + paciente.id + " #pac_TelOficina").val(paciente.telefonoOficina);
    $("#editP" + paciente.id + " #pac_PaisNac").val(paciente.paisNacimiento);
    $("#editP" + paciente.id + " #pac_LugarNac").val(paciente.lugarNacimiento);
    $("#editP" + paciente.id + " #pac_Domicilio").val(paciente.domicilio);
    $("#editP" + paciente.id + " #pac_Ciudad").val(paciente.ciudad);
    var discapacidad = paciente.discapacidad === 1 ? true : false;
    $("#editP" + paciente.id + " #pac_Discapacidad").attr("checked", discapacidad);

    //Select
    $('#editP' + paciente.id + ' #pac_nacionalidad > option[value="' + paciente.nacionalidad + '"]').attr('selected', true);
    $('#editP' + paciente.id + ' #pac_Etnia > option[value="' + paciente.etnia + '"]').attr('selected', true);
    $('#editP' + paciente.id + ' #pac_EstadoCivil > option[value="' + paciente.estadoCivil + '"]').attr('selected', true);
    var sexo = paciente.sexo === true ? "1" : "2";
    $('#editP' + paciente.id + ' #pac_Genero > option[value="' + sexo + '"]').attr('selected', true);
    change_Genero();

    /* Carga y asigna provincia,canton y parroquia */
    $.ajax({
        type: 'POST',
        url: 'sPaciente',
        async: false,
        data: {
            idParroquia: paciente.idParroquia.id,
            op: "det"
        },
        success: function (response) {
            var det = $.parseJSON(response);

            $('#editP' + paciente.id + ' #cboProvincia').selectpicker('val', det.provincia);
            //$('#cboProvincia > option[value="' + det.provincia + '"]').attr('selected', true);
            change_cboProvincia();
            $('#editP' + paciente.id + ' #cboCanton').selectpicker('val', det.canton);
            //$('#cboCanton > option[value="' + det.canton + '"]').attr('selected', true);
            change_cboCanton();
            $('#editP' + paciente.id + ' #cboParroquia').selectpicker('val', paciente.idParroquia.id);
            //$('#cboParroquia > option[value="' + paciente.idParroquia.id + '"]').attr('selected', true);
        }
    });
}

function limpiarPaciente() {
    $($currentTab.attr("href")).load("paciente/paciente.jsp", function () {
        ini();
    });
}