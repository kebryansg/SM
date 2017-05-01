/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var datos = [];
    var totalRegistros=0;
    var totalPaginas=0;
    var pagina=1;
    var buscar=0;    
    var indice=0;
    var xhrRequest=[];
    function validaciones()
    {
        $(".help-block").remove();
        $.each($("#tbEspecialidad input[validate='text']"), function (index, value) {
        if ($(value).val() === null || $(value).val() === "") {
            $(value).closest("div").addClass("has-error");
            $(value).after('<span id="' + $(value).attr("id") + 'help" class="help-block">Campo Vacio</span');
        } else
        {
            $(value).closest("div").removeClass("has-error");
        }
        return $(".help-block").length === 0;
    });
        
    }
    $("#cboMostrar").val(5);   
    $('#cboMostrar').on('change', function() {    
         pagina=1;
        cargarEspecialidades(pagina,buscar);        
    });    
    $("#txtBuscar").keyup(function(event){		            
        if($("#txtBuscar").val().length < 1) 
            buscar=0;
        else
            buscar=1;
         pagina=1;
        cargarEspecialidades(pagina,buscar);   
    }); 
    cargarEspecialidades(pagina,buscar);
    
    $(".table-responsive").on("click", "#botonEditar", function(){           
        var cont=0;            
        $(this).parents("tr").find("td").each(function(){
            datos[cont]=$(this).html();   
            cont++;
        });
        $('.modal-title').text('Editar Especialidad');
        var id='myModal';
        $("#"+id).modal('show');
        $.each($("#"+id+" input"), function (){
            $(this).val("");
        }); 
        
        $('#recipient-name').val(datos[1]);
    });
    
    $('#btnAgregar').click(function(event) {
        datos[0]=0;
        $('.modal-title').text('Agregar Especialidad');
        var id='myModal';
        $("#"+id).modal('show');
        $.each($("#"+id+" input"), function (){
            $(this).val("");
        }); 
       // $('#recipient-name').val(datos[1]);
    });
    
    $(".table-responsive").on("click", "tr", function(){  
        indice = $(this).index();        
      });
      
    $('#btnActualizar').click(function(event) {
        if (validaciones()) {
            var descripcionEspecialidadVar = $('#recipient-name').val();
            var idEspecialidadVar = datos[0];
            $.post('sEspecialidad', {
                descripcionEspecialidad : descripcionEspecialidadVar,
                idEspecialidad: idEspecialidadVar,
                visible: '1',
                opcion: "3"
            }, function(responseText) { 
                if(idEspecialidadVar===0)
                {
                    alertify.success("Especialidad agregada correctamente");
                }
                else
                {
                    alertify.success("Especialidad Modificada");
                    $($('.table-responsive').find('tbody > tr')[indice]).children('td')[1].innerHTML = $('#recipient-name').val();
                }
                $("#myModal").modal('toggle');
            });
    }
    });
    
    $('.table-responsive').on("click", "#btnEliminar", function(event){ 
        var cont=0;
        $(this).parents("tr").find("td").each(function(){
            datos[cont]=$(this).html();   
            cont++;
        });
        $.post('sEspecialidad', {
            descripcionEspecialidad : datos[1],
            idEspecialidad: datos[0],
            visible: 0,
            opcion: "3"
        }, function(responseText) {  
            cargarTotalRegistros();  
            alertify.success("Especialidad eliminada");
        });
        event.preventDefault();
        $(this).closest('tr').remove();
    });
    
  
   
    function cargarEspecialidades(pagina,esBuscar)
    {
        var totalRegistro=$("#cboMostrar").val();
        $.each(xhrRequest,function(idx, jqXHR)
        {
            jqXHR.abort();
        });
        var xhr=null;
        xhr=$.post('sEspecialidad', {
            totalMostrar : totalRegistro,
            pagina: pagina,
            opcion: '2',
            bandera:esBuscar,
            buscar:$("#txtBuscar").val()
        }, function(data) {   
            var resultado = JSON && JSON.parse(data) || $.parseJSON(data); 
            var totalPaginas=resultado[0].registros/$("#cboMostrar").val();
            totalPaginas=Math.ceil(totalPaginas);
            $('#paginacionEspecialidad').find('li').remove();
            $("#paginacionEspecialidad ul").append('<li><a href="#">&laquo;</a></li>');
            for(i=0;i <totalPaginas; i++)                
            {
                var indice=parseInt(i)+1;
                //<li><a href="#">1</a></li>                
                if(indice==pagina)
                    $("#paginacionEspecialidad ul").append('<li class="active"><a href="#">'+indice+'</a></li>');
                else 
                    $("#paginacionEspecialidad ul ").append('<li><a href="#">'+indice+'</a></li>');
            }
            $("#paginacionEspecialidad ul").append('<li><a href="#">&raquo;</a></li>');
            $('#especialidades tr').remove();
            $('#especialidades thead').append("<tr>\n\
                                                <th class='col-lg-1'>No.</th>\n\
                                                <th class='col-lg-9'>Descripción</th>\n\
                                                <th>Opción</th>\n\
                                              </tr>");
              
            for(i=0;i <resultado.length; i++)
            {
                $('#especialidades').append("<tr class='active'>\n\                                                            \n\
                                                <td>"+resultado[i].id+"</td>\n\
                                                <td>"+resultado[i].descripcion+"</td>\n\
                                                <td style='width: 5px' ><button id='botonEditar' class='btn btn-primary' onclick='openModal('myModal')'><span class='glyphicon glyphicon-pencil'></span> </button>\n\
                                                    <button id='btnEliminar' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a></button>\n\
                                                </td>\n\
                                            </tr>");
            }
        });        
        xhrRequest.push(xhr);
    }
    $('#paginacionEspecialidad ul').click(function (e) {        
        var a = e.target.parentNode;
        pagina = a.innerText;        
        cargarEspecialidades(pagina,buscar);
    });
});

