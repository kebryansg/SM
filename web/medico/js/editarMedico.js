/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 $(document).ready(function(){      
     //obtengo el total de registros
     //arreglo con las peticiones
     var xhrRequest=[];
     var totalRegistros=0;
     var totalPaginas=0;
     var paginasVisibles=5;
     var paginaActual=0;
     var buscar=0;
     var pagina=1;
     var datos = [];
     var idTablaSeleccionada=-1;     
     var indice=-1;
     $("#txtBuscar").text("");
     $("#cboMostrar").val(5);     
     cargarMedicos(1);
     
      function validar() {
   

    /* Validacion de email */
    
    var email = $("#tabMedicoEditar input[validate='email']");
    $(email).blur(function(){    		               
                validarText(email);
	});
   validarEmail(email);
    /* Validacion de email */

    $.each($("#tabMedicoEditar input[validate='text']"), function (index, value) {  
       $(value).blur(function(){    		               
                validarText(value);
	});
        validarText(value);
    });
    
    $.each($("#myModal select[validate='select']"), function (index, value) {
        $(value).on('change', function() { 
             validarSelect(value);
        });
        
       validarSelect(value); 
    });
    $.each($("#tabMedicoEditar input[validate='date']"), function (index, value) {
        if ($(value).val() === null || $(value).val() === "") {
            $(value).closest("div").addClass("has-error");
            $(value).parent("div").after('<span id="' + $(value).attr("id") + 'help" style="color:#a94442;" class="help-block">Sin Fecha</span');
        } else
        {
            $(value).closest("div").removeClass("has-error");
        }
    });
 
    return $(".help-block").length === 0;
}
function validarText(value)
{
    
     if($(value).attr("id")!=="txtCedula" || $(value).val() === "")
     {
          var valor= "#"+$(value).attr("id") + 'help';           
          $(valor).remove();
        if ($(value).val() === null || $(value).val() === "") {
            $(value).closest("div").addClass("has-error");
            $(value).after('<span id="' + $(value).attr("id") + 'help" class="help-block">Campo Vacio</span');
        } else
        {
            $(value).closest("div").removeClass("has-error");            
          
        }
    }
}
function validarEmail(email)  
{
    var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
     var valor= "#"+$(email).attr("id") + 'help'; 
         $(valor).remove();
     if ($(email).val() === null || $(email).val() === "" || !validacion_email.test($(email).val())) {
        $(email).closest("div").addClass("has-error");
        $(email).after('<span id="' + $(email).attr("id") + 'help" class="help-block">Email no valido.</span');
    } else {
        $(email).closest("div").removeClass("has-error");
        
    }
}
function validarSelect(value)
{
    var valor= "#"+$(value).attr("id") + 'help'; 
         $(valor).remove();
   if ($(value).val() === "0" || $(value).val() === null ) {
            $(value).closest("div").addClass("has-error");
            $(value).after('<span id="' + $(value).attr("id") + 'help" class="help-block">Sin seleccionar</span');
        } else
        {
            $(value).closest("div").removeClass("has-error");
        } 
}
function validarCedula()
    {
        
         $.ajax({
            type: 'Post',
            url: 'sMedico',
            data: {
                cedula : $('#txtCedula').val(),                
                opcion:'6'
            },
            async: false,
            success:function(response){
                $("#txtCedulahelp").remove();  
                if(response>0)
                {   
                    
                    $("#txtCedula").closest("div").addClass("has-error");                    
                    $("#txtCedula").after('<span id="' + $("#txtCedula").attr("id") + 'help" class="help-block">Cédula ya registrada</span');
                    
                }
                else 
                {
                    
                    $("#txtCedula").closest("div").removeClass("has-error");
                                       
                    
                }
            }
        }); 
    }
   
     //evento al presionar el txt buscar
     
     $("#txtBuscar").keyup(function(event){
         
             if($("#txtBuscar").val().length < 1) 
             {
                 buscar=0;
                 
                 
            }
             
             else
             {
                 buscar=1;
                 pagina=1;
                 
             }
             cargarMedicos(1);
	});         
     
     
    //Funcion para cargar los medicos de forma paginada
    function cargarMedicos(pagina)
    {
        $.each(xhrRequest,function(idx, jqXHR)
        {
            jqXHR.abort();
        });
        var totalRegistro=$("#cboMostrar").val();        
        var xhr=null;
        xhr=$.post('sMedico', {
            totalMostrar : totalRegistro,
            pagina: pagina,
            opcion: '2',
            bandera:buscar,
            buscar:$("#txtBuscar").val()
        }, function(data) {   
            $('#tablaMedico tr').remove();
             $('#paginacionMedico').find('li').remove();
            var resultado = JSON && JSON.parse(data) || $.parseJSON(data); 
            var totalPaginas=resultado[0].registros/$("#cboMostrar").val();
            totalPaginas=Math.ceil(totalPaginas); 
            console.log(totalPaginas);
            $("#paginacionMedico ul").append('<li><a href="#">&laquo;</a></li>');
            for(i=0;i <totalPaginas; i++)                
            {
                var indice=parseInt(i)+1;
                //<li><a href="#">1</a></li>                
                if(indice==pagina)
                    $("#paginacionMedico ul").append('<li class="active"><a href="#">'+indice+'</a></li>');
                else 
                    $("#paginacionMedico ul ").append('<li><a href="#">'+indice+'</a></li>');
            }
            $("#paginacionMedico ul").append('<li><a href="#">&raquo;</a></li>');
            $('#tablaMedico thead').append("<tr>\n\<th class='col-lg-1'>No.</th>\n\
                                                <th>Cédula</th>\n\
                                                <th class='col-lg-2'>Apellidos</th>\n\
                                                <th class='col-lg-2'>Nombres</th>\n\
                                                <th class='col-lg-2'>Domicilio</th>\n\
                                                <th style='display:none;'>Ciudad</th>\n\
                                                <th style='display:none;'>Teléf. Domicilio</th>\n\
                                                <th style='display:none;'>Teléf. Oficina</th>\n\
                                                <th>Teléf. Movil</th>\n\
                                                <th style='display:none;' class='col-lg-3'>Email</th>\n\
                                                <th style='display:none;'>Estado</th>\n\
                                                <th class='col-lg-1'>Acci&oacute;n</th>");
            for(i=0;i <resultado.length; i++)
            {
                $('#tablaMedico').append("<tr class='active'>\n\
                                                    <td style='width: 1%' >"+resultado[i].id+"</td>\n\
                                                    <td>"+resultado[i].cedula+"</td>\n\
                                                    <td>"+resultado[i].apellidos1+ ' '+resultado[i].apellidos2+"</td>\n\
                                                    <td>"+resultado[i].nombre1+" "+resultado[i].nombre2+"</td>\n\
                                                    <td>"+resultado[i].domicilio+"</td>\n\
                                                    <td style='display:none;'>"+resultado[i].ciudad+"</td>\n\
                                                    <td  style='display:none;'>"+resultado[i].telefonoDomicilio+"</td>\n\
                                                    <td  style='display:none;'>"+resultado[i].telefonoOficina+"</td>\n\
                                                    <td>"+resultado[i].telefonoMovil+"</td>\n\
                                                    <td style='display:none;'>"+resultado[i].email+"</td>\n\
                                                    <td style='display:none;'>"+resultado[i].visible+"</td>  \n\
                                                    <td style='width: 10%' >     \n\
                                                    <button id='botonEditar' class='btn btn-primary'><span class='glyphicon glyphicon-pencil'></span> </button> \n\
                                                    <button id='btnEliminar' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a></button>\n\
                                                    </td>\n\
                                                </tr>");
            }
        });    
        xhrRequest.push(xhr);
    }
    $('#paginacionMedico ul').click(function (e) {        
        var a = e.target.parentNode;
        pagina = a.innerText;        
        cargarMedicos(pagina);
    });
    $('#cboMostrar').on('change', function() {   
        pagina=1;
        cargarMedicos(pagina);
        });
     //porque las creo de forma dinamicas    
     $("#tablaMedico").on("click", "#botonEditar", function(){                    
            var cont=0;            
            $(this).parents("tr").find("td").each(function(){
                datos[cont]=$(this).html();                  
                cont++;
            });
            var nombres=datos[3];
             var apellidos=datos[2];
             var res1 = apellidos.split(" ");
             var res = nombres.split(" ");
             $('#txtCedulaModal').val(datos[1]);              
             $('#txtPrimerApellidoModal').val(res1[0]);
             $('#txtSegundoApellidoModal').val(res1[1]);
             $('#txtPrimerNombreModal').val(res[0]);
             $('#txtSegundoNombreModal').val(res[1]);
             $('#txtDomicilioModal').val(datos[4]);
             $('#txtCiudadModal').val(datos[5]);
             $('#txtTelefonoDomicilioModal').val(datos[6]);
             $('#txtTelefonoOficinaModal').val(datos[7]);
             $('#txtTelefonoMovilModal').val(datos[8]);
             $('#txtEmailModal').val(datos[9]);
             $('select[id=cboEstadoModal]').val(datos[10]);
        });
        
        $('#btnActualizar').click(function(event) {
            if (validar()) {
                $.post('sMedico', {
                    cedula : $('#txtCedulaModal').val(),
                    primerNombre: $('#txtPrimerNombreModal').val(),
                    segundoNombre: $('#txtSegundoNombreModal').val(),
                    primerApellido: $('#txtPrimerApellidoModal').val(),
                    segundoApellido: $('#txtSegundoApellidoModal').val(),
                    domicilio: $('#txtDomicilioModal').val(),
                    ciudad: $('#txtCiudadModal').val(),
                    telefonoOficina: $('#txtTelefonoOficinaModal').val(),
                    email:  $('#txtEmailModal').val(),
                    telefonoDomicilio: $('#txtTelefonoDomicilioModal').val(),
                    telefonoMovil:  $('#txtTelefonoMovilModal').val(),
                    idEspecialidad: $("#cboEspecialidades").val(),
                    visible:$("#cboEstadoModal").val(),
                    opcion:'3',
                    idMedico: datos[0]
                }, function(responseText) {   
                    $($('#tablaMedico').find('tbody > tr')[indice]).children('td')[1].innerHTML = $('#txtCedulaModal').val();
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[2].innerHTML = $('#txtPrimerApellidoModal').val()+' '+$('#txtSegundoApellidoModal').val();
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[3].innerHTML = $('#txtPrimerNombreModal').val()+' '+$('#txtSegundoNombreModal').val();
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[4].innerHTML =datos[4];
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[5].innerHTML =datos[5];
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[6].innerHTML =datos[6];
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[7].innerHTML =datos[7];
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[8].innerHTML =datos[8];
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[9].innerHTML =datos[9];
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[10].innerHTML =$("#cboEstadoModal").val();
                    alertify.success("Datos Actualizados correctamente");
                    var cont=0;     
                     $("#myModal").modal('toggle');
                });
        }
        });
        $(".table-responsive").on("click", "tr", function(){  
            indice = $(this).index();
        });
        
        $('.table-responsive').on("click", "#btnEliminar", function(event){ 
            var cont=0;
            $(this).parents("tr").find("td").each(function(){
                datos[cont]=$(this).html();   
                cont++;
            });
            $.post('sMedico', {
                idMedico : datos[0],
                opcion: 5
            }, function(responseText) {  
                cargarTotalRegistros();
                alertify.success("Registros Eliminado");
            });
            event.preventDefault();
            $(this).closest('tr').remove();
        });
        
    });