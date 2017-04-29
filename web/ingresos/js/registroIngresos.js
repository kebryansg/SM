var idHistoria;
var totalRegistros = 0;
var totalPaginas = 0;
var paginasVisibles = 5;
var paginaActual = 1;
var buscar = 0;
$("#cboMostrar").val(5);
limpiar();
$("#txtBuscar").keyup(function (event) {
    if ($("#txtBuscar").val().length < 1)
        buscar = 0;
    else
        buscar = 1;
    cargarTotalRegistros();
});

$('#btnBuscar').click(function (event) {

    cargarTotalRegistros();
});
$('#cboMostrar').on('change', function () {
    cargarTotalRegistros();
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
        url: '../SM/sIngresosHospital',
        data: {
            opcion: '1',
            cedula: cedula
        },

        async: false,
        success: function (data) {
            //shows the relevant data of your login result object in json format                
            var resultado = JSON && JSON.parse(data) || $.parseJSON(data);
            //alert(loginResult.id);
            $("#txtPaciente").val(resultado.paciente);
            idHistoria = resultado.id;

        }
    });
    
    function cargarTotalRegistros()
    {
        $.post('sIngresosHospital', { 
            opcion : "3",
            bandera:buscar,
            buscar:$("#txtBuscar").val(),              
            async: false,
        }, function(responseText) {   
            totalRegistros=responseText;                
            console.log(responseText);
            if(totalRegistros==0)
                $('#tablaPacientes tr:not(:first-child)').remove();
            else
                cargarPaginacion();
        });    
    }
    
    function cargarPaginacion()
    {
        totalPaginas=totalRegistros/$("#cboMostrar").val();
        totalPaginas=Math.ceil(totalPaginas); 
        $('#pagination').twbsPagination('destroy');
        var obj = $('#pagination').twbsPagination({
            totalPages: totalPaginas,
            visiblePages: 10,
            onPageClick: function (event, page) {
                console.info(page);   
                paginaActual=page;
                cargarPacientes(page,buscar);
            }
        });
        console.info(obj.data());      
    }
    
    function cargarPacientes(pagina,esBuscar)
    {
        var totalRegistro=$("#cboMostrar").val();
        $.post('sIngresosHospital', {
            totalMostrar : totalRegistro,
            pagina: pagina,
            opcion: '4',
            bandera:esBuscar,
            buscar:$("#txtBuscar").val()
        }, function(data) {   
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
    }
    
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
        closeModal("myModal");
    });
    $('#cboMostrar').on('change', function() {     
        cargarPaginacion();        
    });
});
