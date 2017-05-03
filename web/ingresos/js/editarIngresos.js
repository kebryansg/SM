/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var pagina=1;
    var diagnosticos=[];
    var totalRegistros=0;
     var totalPaginas=0;
     var datos=[];
     var indice=0;
     $('[data-toggle="tooltip"]').tooltip();  
     function momentToDate(varMoment, formato)
     {
         var dateObj = new Date(varMoment);
         var momentObj = moment(dateObj);
         return momentObj.format(formato);        
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
                            $("#paginacionIngresosEditar ul").append('<li class="active"><a href="#">'+indice+'</a></li>');
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
                    for(i=0;i <resultado.length; i++)
                    {
                        diagnosticos[i]=resultado[i].definitivoEgreso;
                        if(diagnosticos[i].length>=17)
                            var res = diagnosticos[i].substring(0, 17)+'...';
                        else
                            res = diagnosticos[i];
                        $('#tablaIngresos').append("<tr class='active'>\n\
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
                                                        <td style='width: 18%' >\n\
                                                            <button id='botonEditar' class='btn btn-primary'><span class='glyphicon glyphicon-pencil'></span> </button> \n\
                                                            \n\
                                                            <button id='btnEliminar' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a></button>\n\
                                                            \n\<button id='bntMedicinas' class='btn btn-warning'></span>Medicina</button> \
                                                        </td>\n\
                                                    </tr>");
                }
            }
        });
    
     }
     $('#paginacionIngresosEditar ul').click(function (e) {        
        var a = e.target.parentNode;
        pagina = a.innerText;        
        alert(pagina);
        cargarIngresos();
    });
     $('#btnBuscar').click(function(event) {               
         
         cargarIngresos();
     });  
     
     $(".table-responsive").on("click", "tr", function(){  
         indice = $(this).index();
      });
      
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
      $(".table-responsive").on("click", "#bntMedicinas", function(){
          var cont=0;    
          $(this).parents("tr").find("td").each(function(){
              datos[cont]=$(this).html();   
              cont++;
          });
          var id='medicinas';
          $("#"+id).modal('show');
      });
      //btnAgregarMedicamentos
      $('#btnAgregarMedicamentos').click(function(event) {
          $.post('sIngresosHospital', {
            idIngreso : datos[0],
            fechaMedicamento: $('#dtpFechaMedicamentoIngresosModal').val(),
            hor: $('#txtHor').val(),
            lni: $('#txtLni').val(),
            fin: $('#txtFin').val(),  
            medicamentoTratamiento:$('#txtMedicamentos').val(),
            opcion:'9'                                
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
});
    
