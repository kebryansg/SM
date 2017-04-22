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

function list_filter(filter) {
    var cantList = $("#cantList").val();
    $.ajax({
        url: 'sPaciente',
        type: 'POST',
        async: false,
        data: {
            filter: filter,
            top: cantList,
            pag : 0,
            op: 'list_filter'
        },
        success: function (response) {
            var obj = $.parseJSON(response);
            $("#tablePaciente").html(obj.list);
            $('#pagination-demo').twbsPagination('destroy');
            var obj = $('#pagination-demo').twbsPagination({
                totalPages: (obj.cant / cantList),
                visiblePages: 4,
                first: "Primero",
                onPageClick: function (event, page) {
                    
                }
            });
        }
    });
}


function edit() {
    $.ajax({
        url: 'sPaciente',
        type: 'POST',
        async: false,
        data: {
            id: 6,
            op: 'edit'
        },
        success: function (response) {
            var ob = $.parseJSON(response);
            asignarPaciente(ob.paciente);
            addAntecedentes(ob.list);
            if (!ob.paciente.sexo) {
                asignarObstetrico(ob.obs);
            }
        }
    });
}

function editSave() {
    var newA = newAntecedentes();
    var editA = editAntecedentes();
    $.ajax({
        url: 'sPaciente',
        type: 'POST',
        async: false,
        data: {
            id: $("#savePaciente").attr("data-id"),
            paciente: obtenerDatos(),
            newAntecedentes: newA,
            editAntecedentes: editA,
            op: 'save'
        },
        success: function (response) {

        }
    });
}

function save() {
    var newA = newAntecedentes();
    $.ajax({
        url: 'sPaciente',
        type: 'POST',
        async: false,
        data: {
            id: 0,
            paciente: obtenerDatos(),
            newAntecedentes: newA,
            op: 'save'
        },
        success: function (response) {

        }
    });
}

function obtenerDatos() {
    var paciente = {
        cedula: $("#pac_Cedula").val(),
        primerNombre: $("#pac_primerNombre").val(),
        segundoNombre: $("#pac_segundoNombre").val(),
        primerApellido: $("#pac_primerApellido").val(),
        segundoApellido: $("#pac_segundoApellido").val(),
        fechaNac: $("#pac_FechaNac").val(),
        imagen: $("#pac_imagen").attr("src"),
        editImg: ($("#pac_imagen").attr("src") === $("#pac_imagen").attr("edit")) ? "0" : "1",
        nacionalidad: $("#pac_nacionalidad").val(),
        telCasa: $("#pac_TelCasa").val(),
        email: $("#pac_Email").val(),
        etnia: $("#pac_Etnia").val(),
        domicilio: $("#pac_Domicilio").val(),
        discapacidad: $("#pac_Discapacidad").prop("checked"),
        ciudad: $("#pac_Ciudad").val(),
        estadoCivil: $("#pac_EstadoCivil").val(),
        telOficina: $("#pac_TelOficina").val(),
        genero: $("#pac_Genero").val(),
        paisNac: $("#pac_PaisNac").val(),
        lugarNac: $("#pac_LugarNac").val(),
        provincia: $("#cboProvincia").val(),
        parroquia: $("#cboParroquia").val(),
        canton: $("#cboCanton").val(),
        //Obstetricia
        idObs: $("#tabObstetricia").attr("data-id"),
        fpp: $("#pac_FPP").val(),
        gestacion: $("#pac_Gestacion").val(),
        abortos: $("#pac_Abortos").val(),
        partos: $("#pac_Partos").val(),
        cesareas: $("#pac_Cesareas").val(),
        nacidoVivo: $("#pac_NacidoVivo").val(),
        nacidoMuerto: $("#pac_NacidoMuerto").val(),
        hijosVivos: $("#pac_HijosVivos").val(),
        hijosMuertos: $("#pac_HijosMuertos").val()

    };
    return paciente;
}

function newAntecedentes() {
// Retorna los nuevos antecedentes
    var ids = [];
    $.each($("input[antecedentes]:not([data-id!='0']):checked"), function (index, cbk) {
        ids.push($(cbk).attr("dEnfermedad") + ":" + $(cbk).attr("dParient"));
    });
    return ids;
}

function addAntecedentes(list) {
    $.each(list, function (index, item) {
        $("input[antecedentes][dEnfermedad='" + item.idEnfermedad.id + "'][dParient='" + item.idPariente.id + "']").attr("data-id", item.id);
        $("input[antecedentes][dEnfermedad='" + item.idEnfermedad.id + "'][dParient='" + item.idPariente.id + "']").prop("checked", true);
    });
}

function editAntecedentes() {
// Retorna los antecedentes que han sido editados
    var ids = [];
    $.each($("input[antecedentes][data-id!='0']"), function (index, cbk) {
        if (!$(cbk).prop("checked")) {
            ids.push($(cbk).attr("data-id"));
        }
    });
    return ids;
}

function asignarObstetrico(obs) {
    $("#tabObstetricia").attr("data-id", obs.id);
    $("#pac_FPP").val(obs.fpp);
    $("#pac_Gestacion").val(obs.gestas);
    $("#pac_Abortos").val(obs.abortos);
    $("#pac_Partos").val(obs.partos);
    $("#pac_Cesareas").val(obs.cesareas);
    $("#pac_NacidoVivo").val(obs.nacidosVivos);
    $("#pac_NacidoMuerto").val(obs.nacidosMuertos);
    $("#pac_HijosVivos").val(obs.hijosVivos);
    $("#pac_HijosMuertos").val(obs.muertos);
}

function asignarPaciente(paciente) {
    $("#savePaciente").attr("data-id", paciente.id);
    $("#pac_Cedula").val(paciente.cedula);
    $("#pac_primerNombre").val(paciente.nombre1);
    $("#pac_segundoNombre").val(paciente.nombre2);
    $("#pac_primerApellido").val(paciente.apellido1);
    $("#pac_segundoApellido").val(paciente.apellido2);
    $("#pac_FechaNac").val(paciente.fechaNacimiento);
    $("#pac_imagen").attr("src", paciente.imagen);
    $("#pac_imagen").attr("edit", paciente.imagen);
    $("#pac_TelCasa").val(paciente.telefonoDomicilio);
    $("#pac_Email").val(paciente.email);
    $("#pac_TelOficina").val(paciente.telefonoOficina);
    $("#pac_PaisNac").val(paciente.paisNacimiento);
    $("#pac_LugarNac").val(paciente.lugarNacimiento);
    $("#pac_Domicilio").val(paciente.domicilio);
    $("#pac_Ciudad").val(paciente.ciudad);
    var discapacidad = paciente.discapacidad === 1 ? true : false;
    $("#pac_Discapacidad").attr("checked", discapacidad);
    //Select
    $('#pac_nacionalidad > option[value="' + paciente.nacionalidad + '"]').attr('selected', true);
    $('#pac_Etnia > option[value="' + paciente.etnia + '"]').attr('selected', true);
    $('#pac_EstadoCivil > option[value="' + paciente.estadoCivil + '"]').attr('selected', true);
    var sexo = paciente.sexo === true ? "1" : "2";
    $('#pac_Genero > option[value="' + sexo + '"]').attr('selected', true);
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
            $('#cboProvincia > option[value="' + det.provincia + '"]').attr('selected', true);
            change_cboProvincia();
            $('#cboCanton > option[value="' + det.canton + '"]').attr('selected', true);
            change_cboCanton();
            $('#cboParroquia > option[value="' + paciente.idParroquia.id + '"]').attr('selected', true);
        }
    });
}

