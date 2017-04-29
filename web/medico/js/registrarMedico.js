/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    function limpiar()
    {
        $(':text').val('');
        $('textarea').val('');
    }
    limpiar();
    $('#btnGuardar').click(function(event) {
        $.ajax({
            type: 'Post',
            url: 'sMedico',
            data: {
                cedula : $('#txtCedula').val(),
                primerNombre: $('#txtPrimerNombre').val(),
                segundoNombre: $('#txtSegundoNombre').val(),
                primerApellido: $('#txtPrimerApellido').val(),
                segundoApellido: $('#txtSegundoApellido').val(),
                domicilio: $('#txtDomicilio').val(),
                ciudad: $('#txtCiudad').val(),
                telefonoOficina: $('#txtTelefonoOficina').val(),
                email: $('#txtEmail').val(),
                telefonoDomicilio: $('#txtTelefonoDomicilio').val(),
                telefonoMovil: $('#txtTelefonoMovil').val(),
                idEspecialidad: $("#cboEspecialidad").val(),
                visible:'1',
                opcion:'0'
            },
            async: false,
            success:function(response){ 
                alertify.success("Medico registrado correctamente");
                limpiar();
            }
        }); 
    });
});


