$("#cerrarMenu").click(function () {
    $(".menu-lateral").toggleClass("close-menu");
    $(".contenedor").toggleClass("open-contenedor");
    $("#cerrarMenu i").toggleClass("fa-chevron-circle-left");
    $("#cerrarMenu i").toggleClass("fa-chevron-circle-right");
});

$("#pruebaTab").click(function () {
    //alert(); 
    $(".nav").append('<li><a data-toggle="tab" href="#menu2">Menu 2</a></li>');
});


$(".close-all-tab").click(function (e) {
    $('.nav-tabs li').remove();
    $('.tab-content').html("");
});


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
            $("#cboCanton").html(response);
        }

    });
}

$("#cboProvincia").change(function () {
    change_cboProvincia();
});
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
            $("#cboParroquia").html(response);
        }

    });
}
$("#cboCanton").change(function () {
    change_cboCanton();
});

function change_Genero() {
    if ($("#pac_Genero").val() === "1") {
        $("#tabObstetricia").addClass("disabledTab");
    }
    else{
        $("#tabObstetricia").removeClass("disabledTab");
    }
}

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
    $.getScript("resources/js/paciente.js", function () {
        var id = $("#savePaciente").attr("data-id");
        if(id === "0"){
            save();
        }
        else{
            editSave();
        }
        
    });
});

$("#cancelPaciente").click(function () {
    $.getScript("resources/js/paciente.js", function () {
        edit();
    });
});


function loadScript(url, callback) {
    var script = document.createElement('script');

    if (script.readyState) { // IE
        script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { // Others
        script.onload = function () {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}