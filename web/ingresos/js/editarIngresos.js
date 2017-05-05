/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var pagina=1;
    var diagnosticos=[];    
     var datos=[];
     var medicinas=[];
     var indice=0;
     var idMedicamento=0;
     var idIngreso=0;
     $('.dropdown-toggle').dropdown();
     $('[data-toggle="tooltip"]').tooltip();  
     var bandera=0;
     ocultarModal();
     function ocultarModal()
     {
         $('.modal').on({ 
	            'show.bs.modal': function() {
	                var idx = $('.modal:visible').length;
	                $(this).css('z-index', 1040 + (10 * idx));
	            },
	            'shown.bs.modal': function() {
	                var idx = ($('.modal:visible').length) - 1; // raise backdrop after animation.
	                $('.modal-backdrop').not('.stacked')
	                .css('z-index', 1039 + (10 * idx))
	                .addClass('stacked');
	            },
	            'hidden.bs.modal': function() {
	                if ($('.modal:visible').length > 0) {
	                    // restore the modal-open class to the body element, so that scrolling works
	                    // properly after de-stacking a modal.
	                    setTimeout(function() {
	                        $(document.body).addClass('modal-open');
	                    }, 0);
	                }
	            }
	        });
         
     }
    function cargarIngresos()
    {
        $.ajax({
            type: 'Post',
            url: 'sIngresosHospital',
            data: {            
                opcion: '5',
                
                //$("#dtpFechaIngreso").val()
                fechaEgreso: $("#dtpFechaEgresoIngresos").val(),
                fechaIngreso:$("#dtpFechaIngresoIngresos").val(),
                totalMostrar:5,
                pagina:pagina
            },
            async: false,
            success:function(data){  
                console.log(data);
                   var resultado = JSON && JSON.parse(data) || $.parseJSON(data);                                    
                   console.log(resultado[0].registros);   
                   $('#paginacionIngresosEditar').find('li').remove();
                   var totalPaginas=resultado[0].registros/5;
                   totalPaginas=Math.ceil(totalPaginas);
                   $("#paginacionIngresosEditar ul").append('<li><a href="#">&laquo;</a></li>');
                    for(i=0;i <totalPaginas; i++)                
                    {
                        var indice=parseInt(i)+1;
                        //<li><a href="#">1</a></li>                
                        if(indice==pagina)
                            $("#paginacionIngresosEditar ul").append('<li ><a href="#">'+indice+'</a></li>');
                        else 
                            $("#paginacionIngresosEditar ul ").append('<li><a href="#">'+indice+'</a></li>');
                    }
                    $("#paginacionIngresosEditar ul").append('<li><a href="#">&raquo;</a></li>');
                   $('#tablaIngresos tr').remove();
                   $('#tablaIngresos thead').append("<tr>\n\
                                                        <th>No.</th>\n\
                                                        <th class='col-lg-1'>Cédula</th>\n\
                                                        <th>Nombres</th>\n\
                                                        <th>Apellidos</th>\n\
                                                        <th style='display:none;' class='col-lg-2'>idTipoIngregos</th>\n\
                                                        <th style='display:none;'>idCaso</th>\n\
                                                        \n\<th style='display:none;'>Id. Espegreso</th>\n\
                                                        <th style='display:none;'>E. Egreso</th>\n\
                                                        <th>F. Ingreso</th>\n\
                                                        <th>F. Egreso</th>\n\
                                                        <th style='display:none;'>Hora</th>\n\
                                                        <th class='col-lg-1' style='display:none;'>Cond. Egreso</th>\n\
                                                        <th class='col-lg-2'>D. Egreso</th>\n\
                                                        <th style='display:none;' class='col-lg-1'>S. Egreso</th>\n\
                                                        <th style='display:none;' class='col-lg-1'>S. Egreso 2</th>\n\
                                                        <th style='display:none;' class='col-lg-1'>C. Externa</th>\n\
                                                        <th class='col-lg-1'>Cód.</th>\n\
                                                        <th >Acción.</th></tr>");
                var valor="btn-group";
                    for(i=0;i <resultado.length; i++)
                    {
                        diagnosticos[i]=resultado[i].definitivoEgreso;
                        if(diagnosticos[i].length>=17)
                            var res = diagnosticos[i].substring(0, 17)+'...';
                        else
                            res = diagnosticos[i];
                        if(i==4)
                            valor="btn-group dropup";
                        $('#tablaIngresos').append("<tr >\n\
                                                        <td>"+resultado[i].id+"</td>\n\
                                                        <td>"+resultado[i].unPaciente.cedula+"</td>\n\
                                                        <td>"+resultado[i].unPaciente.nombre1+ ' '+resultado[i].unPaciente.nombre2+"</td>\n\
                                                        <td>"+resultado[i].unPaciente.apellido1+" "+resultado[i].unPaciente.apellido2+"</td>\n\
                                                        <td style='display:none;'>"+resultado[i].idTipoIngreso.id+"</td>\n\
                                                        <td style='display:none;'>"+resultado[i].idCaso.id+"</td>\n\
                                                        <td style='display:none;'>"+resultado[i].idEspecialidadEgreso.id+"</td>\n\
                                                        <td style='display:none;'>"+resultado[i].idEspecialidadEgreso.descripcion+"</td>\n\
                                                        <td>"+resultado[i].fechaEntrada+"</td>\n\
                                                        <td>"+resultado[i].fechaSalida+"</td>\n\
                                                        <td style='display:none;'>"+resultado[i].hora+"</td>\n\
                                                        <td style='display:none;'>"+resultado[i].condicionEgreso+"</td>\n\
                                                        <td>"+res+"</td>\n\
                                                        <td style='display:none;'>"+resultado[i].secundarioEgreso+"</td>\n\
                                                        <td style='display:none;'>"+resultado[i].secundarioEgreso2+"</td>\n\
                                                        <td style='display:none;'>"+resultado[i].causaExterna+"</td>\n\
                                                        <td>"+resultado[i].codigoDiagnosticoDefinitivo+"</td>\n\
                                                        <td style='width: 20%' >\n\
                                                            <button id='botonEditar' class='btn btn-primary'><span class='glyphicon glyphicon-pencil'></span> </button> \n\
                                                            \n\
                                                            <button id='btnEliminar' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a></button>\n\
\n\
                                                            <div class='"+valor+"'>\n\
                                                            \n\<button id='btnMedicinas' type='button' class='btn btn-warning dropdown-toggle' data-toggle='dropdown'>Medicinas <span class='caret'></span></button>\
                                                               <ul class='dropdown-menu' role='menu'>\n\
                                                                    <li id='opAgregarMedicina'><a href='#'>Agregar</a></li>\n\
                                                                    <li id='opMantenimientoMedicina'><a href='#'>Editar</a></li>     \n\
                                                                    \n\
                                                               </ul>\n\
                                                            </div>\n\
</td>\n\
                                                    </tr>");
                }
            }
        });
    
     }
     $('#paginacionIngresosEditar ul').click(function (e) {        
        var a = e.target.parentNode;
        pagina = a.innerText;                
        cargarIngresos();
    });
    
     $('#btnBuscar').click(function(event) {                        
         cargarIngresos();
     });       
     $(".table-responsive").on("click", "tr", function(){  
         indice = $(this).index();
      });
      //editar ingreso
   $(".table-responsive").on("click", "#botonEditar", function(){  
          var cont=0;    
          $(this).parents("tr").find("td").each(function(){
              datos[cont]=$(this).html();   
              cont++;
          });
          console.log(datos);
          $('#txtPaciente').val(datos[2]+' '+datos[3]);
          $('select[id=cboCondicionEgreso]').val(datos[11]);
          $('select[id=cboEspecialidadEgreso]').val(datos[6]);
          $('.selectpicker').selectpicker('refresh');
          $('#dtpFechaIngresoIngresosModal').val(datos[8]);
          $('#dtpFechaEgresoIngresosModal').val(datos[9]);             
          $('#dtpHoraIngreso').val(datos[10]);
          $('#txtCodigoCie').val(datos[16]);
          $('#txtDefinitivoEgreso').val(datos[12]);
          $('#txtSecundarioEgreso').val(datos[13]);   
          $('#txtSecundarioEgreso2').val(datos[14]);   
          $('#txtCausaExterna').val(datos[15]);   
          var id='myModal';
          $("#"+id).modal('show');
      });
      //agregar medicamento
      $(".table-responsive").on("click", "#opAgregarMedicina", function(){
         idMedicamento=0;
          var cont=0;    
          $(this).parents("tr").find("td").each(function(){
              datos[cont]=$(this).html();   
              cont++;
          });
          var id='medicinas';
          $.each($("#"+id+" input"), function (){
            $(this).val("");
            
        }); 
        $("#dtpFechaMedicamentoIngresosModal").val('');
          $("#"+id).modal('show');
      });
      //editar medicina
      $(".table-responsive").on("click", "#opMantenimientoMedicina", function(){
          var cont=0;    
          $(this).parents("tr").find("td").each(function(){
              datos[cont]=$(this).html();   
              cont++;
          });
           $.post('sIngresosHospital', {
               idIngreso : datos[0],
               opcion: 10
           }, function(data) { 
               var resultado = JSON && JSON.parse(data) || $.parseJSON(data); 
               $('#tablaMedicamentos tr').remove();
               $('#tablaMedicamentos thead').append("<tr>\n\
                                                <th style='display:none;' class='col-lg-1'>id</th>\n\
                                                <th class='col-lg-1'>Fecha</th>\n\
                                                <th>Hor</th>\n\
                                                <th class='col-lg-1'>Lni</th>\n\
                                                  <th class='col-lg-1'>Fin</th>\n\
                                                <th >Administración de medicamentos y tratamientos</th>\n\
                                                <th style='display:none;'></th>\n\
                                                <th class='col-lg-1'>Acción</th>\n\
                                              </tr>");
               for(i=0;i <resultado.length; i++)
                {
                    $('#tablaMedicamentos').append("<tr>\n\                                                            \n\
                                                    <td style='display:none;'>"+resultado[i].id+"</td>\n\
                                                    \n\<td>"+resultado[i].fecha+"</td>\n\
                                                    \n\<td>"+resultado[i].hor+"</td>\n\
                                                    \n\ \n\<td>"+resultado[i].lni+"</td>\n\
                                                    \n\ \n\<td>"+resultado[i].fin+"</td>\n\
                                                    \n\ \n\<td>"+resultado[i].medicamentoTratamiento+"</td>\n\
                                                    \n\<td style='display:none;'>"+resultado[i].ingreso.id+"</td>\
                                                    <td style='width: 12%' ><button id='btnEditarMedicamento' class='btn btn-primary' '><span class='glyphicon glyphicon-pencil'></span> </button>\n\
                                                        <button id='btnEliminar' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a></button>\n\
                                                    </td>\n\
                                                </tr>");
                }
           
       });
           
          var cont=0;    
          $(this).parents("tr").find("td").each(function(){
              datos[cont]=$(this).html();   
              cont++;
          });
          var id='mantenimientoMedicina';
          $("#"+id).modal('show');
      });
      //btnAgregarMedicamentos
      $('#btnAgregarMedicamentos').click(function(event) {          
          $.post('sIngresosHospital', {
            idIngreso : idIngreso,
            fechaMedicamento: $('#dtpFechaMedicamentoIngresosModal').val(),
            hor: $('#txtHor').val(),
            lni: $('#txtLni').val(),
            fin: $('#txtFin').val(),  
            medicamentoTratamiento:$('#txtMedicamentos').val(),
            opcion:'9',
            idMedicamento:idMedicamento
        }, function(responseText) {               
            alertify.success("Datos registrados correctamente");
        });
      });
    $('#btnActualizar').click(function(event) {
        $.post('sIngresosHospital', {
            idIngreso : datos[0],
            fechaIngreso: $('#dtpFechaIngresoIngresosModal').val(),
            idTipoIngreso: 2,
            idEspecialidadEgreso: $('#cboEspecialidadEgreso').val(),
            fechaEgreso: $('#dtpFechaEgresoIngresosModal').val(),
            horaIngreso: $("#dtpHoraIngreso").val(),
            sos: 0,
            condicionEgreso: $("#cboCondicionEgreso").val(),
            definitivoEgreso: $("#txtDefinitivoEgreso").val(),
            secundarioEgreso: $("#txtSecundarioEgreso").val(),
            secundarioEgreso2: $("#txtSecundarioEgreso2").val(),
            causaExterna: $("#txtCausaExterna").val(),
            idCaso:datos[5],
            codigoDiagnosticoDefinitivo:$("#txtCodigoCie").val(),
            opcion:'7'                                
        }, function(responseText) {   
            console.log(responseText); 
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[5].innerHTML = datos[5];
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[6].innerHTML = $('#cboEspecialidadEgreso').val();            
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[8].innerHTML = $('#dtpFechaIngresoIngresosModal').val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[9].innerHTML = $('#dtpFechaEgresoIngresosModal').val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[10].innerHTML = $("#dtpHoraIngreso").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[11].innerHTML = $("#cboCondicionEgreso").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[12].innerHTML = $("#txtDefinitivoEgreso").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[13].innerHTML = $("#txtSecundarioEgreso").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[14].innerHTML = $("#txtSecundarioEgreso2").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[15].innerHTML = $("#txtCausaExterna").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[16].innerHTML = $("#txtCodigoCie").val();
            alertify.success("Datos Actualizados correctamente");
        });
    });
    
    $('.table-responsive').on("click", "#btnEliminar", function(event){ 
        var cont=0;
        $(this).parents("tr").find("td").each(function(){
            datos[cont]=$(this).html();   
            cont++;
        });
        $.post('sIngresosHospital', {
            opcion : 8,
            idIngreso: datos[0]                                
        }, function(responseText) {  
             cargarIngresos();
            alertify.success("Registro eliminado");
        });
        event.preventDefault();
        $(this).closest('tr').remove();
    });
    
       //editar Medicamento
       $(".table-responsive").on("click", "#btnEditarMedicamento", function(){  
          var cont=0;    
          $(this).parents("tr").find("td").each(function(){
              medicinas[cont]=$(this).html();               
              cont++;
              
          });
          idMedicamento=medicinas[0];
          idIngreso=medicinas[6];
          var id='medicinas';
           $('#dtpFechaMedicamentoIngresosModal').val(medicinas[1]);
           $('#txtHor').val(medicinas[2]);
           $('#txtLni').val(medicinas[3]);
           $('#txtFin').val(medicinas[4]);
           $('#txtMedicamentos').val(medicinas[5]);
           $("#"+id).modal('show');
          
      });
      
});
    
