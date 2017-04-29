function change_cboProvincia() {
    $.ajax({
        type: 'Post',
        url: 'pruebaCombo',
        async: false,
        data: {
            id: $("#cboProvincia").val(),
            op: 'cantones'
        },
        success: function (response) {
            $("#cboCanton").append(response);
            $("#cboCanton").selectpicker('refresh');
        }
    });
}

function change_cboCanton() {
    $.ajax({
        type: 'Post',
        url: 'pruebaCombo',
        async: false,
        data: {
            id: $("#cboCanton").val(),
            op: 'parroquias'
        },
        success: function (response) {
            $("#cboParroquia").append(response);
            $("#cboParroquia").selectpicker('refresh');
        }

    });
}

function change_Genero() {
    if ($("#pac_Genero").val() === "1") {
        $("#tabObstetricia").addClass("disabledTab");
    } else {
        $("#tabObstetricia").removeClass("disabledTab");
    }
}

$(document).ready(function () {
    $("#cboProvincia").on("changed.bs.select",function(e){
        change_cboProvincia();
    });
    
    $("#cboCanton").on("changed.bs.select",function(e){
        change_cboCanton();
    });

    $("#pac_Genero").change(change_Genero);

    $("#btnAddPhoto").click(function () {
        $("#file_imagen").click();
    });
    $("#btnRemovePhoto").click(function () {
        $("#pac_imagen").attr("src", "resources/img/user.png");
    });
    $("#file_imagen").change(function (evt) {
        var files = evt.target.files; // FileList object

        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {
            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();
            // Closure to capture the file information.
            reader.onload = (function (theFile) {
                return function (e) {
                    $("#pac_imagen").attr("src", e.target.result);
                };
            })(f);
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    });

    $("#savePaciente").click(function () {
        $.getScript("paciente/js/paciente.js", function () {
            var id = $("#savePaciente").attr("data-id");
            if (id === "0") {
                save();
            } else {
                editSave();
            }
        });
    });

    $("#cancelPaciente").click(function () {
        $.getScript("paciente/js/paciente.js", function () {
            //edit();
            //limpiar();
            validar();
        });
    });


    
});