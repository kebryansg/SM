var xhrRequest=[];
var idHistoria=0;
var totalRegistros = 0;
var totalPaginas = 0;
var paginasVisibles = 5;
var paginaActual = 1;
var buscar = 0;
var pagina=1;
$("#cboMostrar").val(5);
limpiar();
$("#txtBuscar").keyup(function (event) {
    if ($("#txtBuscar").val().length < 1)
        buscar = 0;
    else
        buscar = 1;
    pagina=1;
    cargarPacientes(pagina,buscar);
});
function validarIngreso()
{
    $(".help-block").remove();
    $.each($("#tabIngresos input[validate='date']"), function (index, value) {
        $(value).change(function(){    		               
                validarDateIngresos(value);
	});
        validarDateIngresos(value);
        
    });
    $('#txtCodigoCie').blur(function(){    		               
        validarCodigo();
    });
    validarCodigo();
    validarDefinitivoEgreso();
    $('#txtDefinitivoEgreso').blur(function(){    		               
        validarDefinitivoEgreso();
    });
    if(idHistoria==0)
    {
        $('#txtCedula').closest("div").addClass("has-error");
        $('#txtCedula').after('<span id="' + $('#txtCedula').attr("id") + 'help" class="help-block">Cargar un paciente</span');
     
    }
    else
    {
        $('#txtCedula').closest("div").removeClass("has-error");
        
    }
    return $(".help-block").length === 0;
}
function validarCodigo()
{
    $("#txtCodigoCiehelp").remove(); 
    if ($('#txtCodigoCie').val() === null || $('#txtCodigoCie').val()==="" )
        {
            $('#txtCodigoCie').closest("div").addClass("has-error");
            $('#txtCodigoCie').after('<span id="' + $('#txtCodigoCie').attr("id") + 'help" class="help-block">Campo Vacio</span');
        }
        else
        {
            $('#txtCodigoCie').closest("div").removeClass("has-error");
        }
}
function validarDefinitivoEgreso()
{
    $("#txtDefinitivoEgresohelp").remove();  
    if ($('#txtDefinitivoEgreso').val() === null || $('#txtDefinitivoEgreso').val()==="" )
        {
            $('#txtDefinitivoEgreso').closest("div").addClass("has-error");
            $('#txtDefinitivoEgreso').after('<span id="' + $('#txtDefinitivoEgreso').attr("id") + 'help" class="help-block">Campo Vacio</span');
        }
        else
        {
            $('#txtDefinitivoEgreso').closest("div").removeClass("has-error");
        }
}
function validarDateIngresos(value)
{
    if ($(value).val() === null || $(value).val() === "") {
            $(value).closest("div").addClass("has-error");
            $(value).parent("div").after('<span id="' + $(value).attr("id") + 'help" style="color:#a94442;" class="help-block">Sin Fecha</span');
        } else
        {
            $(value).closest("div").removeClass("has-error");
            $("#"+$(value).attr("id") + 'help').remove();
        }
}
$('#btnBuscar').click(function (event) {
    cargarPacientes(pagina,buscar);
});
$('#cboMostrar').on('change', function () {
    pagina=1;
    cargarPacientes(pagina,buscar);
});
function momentToDate(varMoment, formato)
{
    var dateObj = new Date(varMoment);
    var momentObj = moment(dateObj);
    return momentObj.format(formato);

}
function limpiar()
{
    $(':text').val('');
    $('textarea').val('');
    $('#tablaPacientes tr:not(:first-child)').remove();
}
$("a[data-url]").on("click", "#btnCargar", function ()
{


});

$('#btnCargar').click(function (event) {
    var cedula = $("#txtCedula").val();
    $.ajax({
        type: 'Post',
        url: 'sIngresosHospital',
        data: {
            opcion: '1',
            cedula: cedula
        },

        async: false,
        success: function (data) {
            //shows the relevant data of your login result object in json format                
            var resultado = JSON && JSON.parse(data) || $.parseJSON(data);
            //alert(loginResult.id);
            if(resultado.id==0)
            {
                $("#txtCedula").focus();
                alertify.success("Paciente no encontrado");
            }
            else
            {
            $("#txtPaciente").val(resultado.paciente);
            idHistoria = resultado.id;
            $('#txtCedula').closest("div").removeClass("has-error");
            }
            

        }
    });
    });
    
  
  
    function cargarPacientes(pagina,esBuscar)
    {
        $.each(xhrRequest,function(idx, jqXHR)
        {
            jqXHR.abort();
        });
        var totalRegistro=$("#cboMostrar").val();
        var xhr=null;
        xhr=$.post('sIngresosHospital', {
            totalMostrar : totalRegistro,
            pagina: pagina,
            opcion: '4',
            bandera:esBuscar,
            buscar:$("#txtBuscar").val()
        }, function(data) {  
            $('#paginacionBuscarIngresos').find('li').remove();
           
            var resultado = JSON && JSON.parse(data) || $.parseJSON(data); 
            var totalPaginas=resultado[0].registros/$("#cboMostrar").val();
            totalPaginas=Math.ceil(totalPaginas);
            $("#paginacionBuscarIngresos ul").append('<li><a href="#">&laquo;</a></li>');
            for(i=0;i <totalPaginas; i++)                
            {
                var indice=parseInt(i)+1;
                //<li><a href="#">1</a></li>                
                if(indice==pagina)
                    $("#paginacionBuscarIngresos ul").append('<li class="active"><a href="#">'+indice+'</a></li>');
                else 
                    $("#paginacionBuscarIngresos ul ").append('<li><a href="#">'+indice+'</a></li>');
            }
            $("#paginacionBuscarIngresos ul").append('<li><a href="#">&raquo;</a></li>');
            $('#tablaPacientes tr').remove();
            $('#tablaPacientes thead').append("<tr>\n\
                                                <th style='display: none'></th>\n\
                                                <th class='col-lg-1'>No.</th>\n\
                                                <th class='col-lg-3'>Cédula</th>\n\
                                                <th class='col-lg-4'>Apellidos</th>\n\
                                                <th class='col-lg-4'>Nombres</th>\n\
                                                <th class='col-lg-4'>Opción</th>\n\
                                             </tr>");
            var resultado = JSON && JSON.parse(data) || $.parseJSON(data);  
            for(i=0;i <resultado.length; i++)
            {
                $('#tablaPacientes ').append("<tr class='active'>\n\
                                                <td style='display: none'>"+resultado[i].idPaciente+"</td>\n\
                                                <td>"+resultado[i].id+"</td>\n\
                                                <td>"+resultado[i].cedula+"</td>\n\
                                                <td>"+resultado[i].apellido1+" "+resultado[i].apellido2+"</td>\n\
                                                <td>"+resultado[i].nombre1+" "+resultado[i].nombre2+"</td>\n\
                                                <td style='width: 20%' ><button id='btnSeleccionar' type=\"button\" class='btn btn-primary'><span>Seleccionar</span> </button></td>\n\
                                             </tr>");
            }
        });        
        xhrRequest.push(xhr);
        var id='myModalIngreso';
             $("#"+id).modal('show');
    }
    
    $('#paginacionBuscarIngresos ul').click(function (e) {        
        var a = e.target.parentNode;
        pagina = a.innerText;        
        cargarPacientes(pagina,buscar);
    });
    $(".table-responsive").on("click", "#btnSeleccionar", function(){ 
        var cont=0;
        var datos=[];
        $(this).parents("tr").find("td").each(function(){
            datos[cont]=$(this).html();                   
            cont++;
        });
        idHistoria=datos[1];
        $("#txtCedula").val(datos[2]);
        $("#txtPaciente").val(datos[3]+' '+datos[4]);
        $('#txtCedula').closest("div").removeClass("has-error");
         $("#txtCedulahelp").remove();  
        closeModal("myModalIngreso");
    });
    
    $('#btnGuardar').click(function(event) {   
         if (validarIngreso()) {
        $.post('sIngresosHospital', {            
            idHistoria : idHistoria,
            fechaIngreso: $("#dtpFechaIngreso").val(),
            idTipoIngreso: 2,
            idEspecialidadEgreso: $('#cboEspecialidadEgreso').val(),
            fechaEgreso: $("#dtpFechaEgreso").val(),
            horaIngreso: $("#dtpHoraIngreso").val(),
            sos: 0,
            condicionEgreso: $("#cboCondicionEgreso").val(),
            definitivoEgreso: $("#txtDefinitivoEgreso").val(),
            secundarioEgreso: $("#txtSecundarioEgreso").val(),
            secundarioEgreso2: $("#txtSecundarioEgreso2").val(),
            causaExterna: $("#txtCausaExterna").val(),
            codigoDiagnosticoDefinitivo:$("#txtCodigoCie").val(),
            opcion:'2'                                
        }, function(responseText) {   
            console.log(responseText);        
            limpiar();
            alertify.success("Datos Registrados correctamente");
        });
    }
    });

