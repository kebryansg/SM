function save(){
    var pac = obtenerDatos();
    $.ajax({
        url: 'sPaciente',
        type: 'POST',
        async: false,
        data: {
            paciente : obtenerDatos(),
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
function addAntecedentes(antecedentes) {
    $.each(antecedentes, function (index, value) {
        var enfermedad = value.split(":")[0];
        var pariente = value.split(":")[1];
        var id = value.split(":")[2];
        $("input[antecedentes][dEnfermedad='" + enfermedad + "'][dParient='" + pariente + "']").attr("data-id", id);
        $("input[antecedentes][dEnfermedad='" + enfermedad + "'][dParient='" + pariente + "']").prop("checked",true);
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

function asignarDatos(paciente) {
    $("#pac_Cedula").val(paciente["cedula"]);
    $("#pac_primerNombre").val(paciente["primerNombre"]);
    $("#pac_segundoNombre").val(paciente["segundoNombre"]);
    $("#pac_primerApellido").val(paciente["primerApellido"]);
    $("#pac_segundoApellido").val(paciente["segundoApellido"]);
    $("#pac_FechaNac").val(paciente["fechaNac"]);
    $("#pac_imagen").attr("src", paciente["imagen"]);
    $("#pac_nacionalidad").val(paciente["nacionalidad"]);
    $("#pac_TelCasa").val(paciente["telCasa"]);
    $("#pac_Email").val(paciente["email"]);
    $("#pac_Etnia").val(paciente["etnia"]);
    $("#pac_Domicilio").val(paciente["domicilio"]);
    $("#pac_Discapacidad").val(paciente["discapacidad"]);
    $("#pac_Ciudad").val(paciente["ciudad"]);
    $("#pac_EstadoCivil").val(paciente["estadoCivil"]);
    $("#pac_TelOficina").val(paciente["telOficina"]);
    $("#pac_Genero").val(paciente["genero"]);
    $("#pac_PaisNac").val(paciente["paisNac"]);
    $("#pac_LugarNac").val(paciente["lugarNac"]);
    $("#cboProvincia").val(paciente["provincia"]);
    $("#cboParroquia").val(paciente["parroquia"]);
    $("#cboCanton").val(paciente["canton"]);
    //Obstetricia
    $("#pac_FPP").val(paciente["fpp"]);
    $("#pac_Gestacion").val(paciente["gestacion"]);
    $("#pac_Abortos").val(paciente["abortos"]);
    $("#pac_Partos").val(paciente["partos"]);
    $("#pac_Cesareas").val(paciente["cesareas"]);
    $("#pac_NacidoVivo").val(paciente["nacidoVivo"]);
    $("#pac_NacidoMuerto").val(paciente["nacidoMuerto"]);
    $("#pac_HijosVivos").val(paciente["hijosVivos"]);
    $("#pac_HijosMuertos").val(paciente["hijosMuertos"]);
}

