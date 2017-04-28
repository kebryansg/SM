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
    function cargarTotalRegistros()
     {
         $.post('sIngresosHospital', { 
             opcion : "6",    
             fechaEgreso: momentToDate($("#dtpFechaSalida").data("DateTimePicker").date(),'YYYY-MM-DD'),
             fechaIngreso:momentToDate($("#dtpFechaIngreso").data("DateTimePicker").date(),'YYYY-MM-DD'),           
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
         
        
         totalPaginas=totalRegistros/5;
         totalPaginas=Math.ceil(totalPaginas); 
         
         $('#pagination').twbsPagination('destroy');
           var obj = $('#pagination').twbsPagination({
               totalPages: totalPaginas,
               visiblePages: 10,
               onPageClick: function (event, page) {
                   console.info(page);   
                   pagina=page;
                   cargarIngresos();
               }
           });
           console.info(obj.data());      
     }
    function cargarIngresos()
     {
           $.ajax({
            type: 'Post',
            url: 'sIngresosHospital',
            data: {            
                opcion: '5',
                fechaEgreso: momentToDate($("#dtpFechaSalida").data("DateTimePicker").date(),'YYYY-MM-DD'),
                fechaIngreso:momentToDate($("#dtpFechaIngreso").data("DateTimePicker").date(),'YYYY-MM-DD'),
                totalMostrar:5,
                pagina:pagina
            },
            
            async: false,
            success:function(data){                       
                 //shows the relevant data of your login result object in json format                
                    var resultado = JSON && JSON.parse(data) || $.parseJSON(data);                
                    //alert(loginResult.id);
                   console.log(resultado);            
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
                                                    <th >Acción.</th>\n\
                                                </tr>");
                for(i=0;i <resultado.length; i++)
                {
                    diagnosticos[i]=resultado[i].definitivoEgreso;
                    if(diagnosticos[i].length>=17)
                        var res = diagnosticos[i].substring(0, 17)+'...';
                    else
                        res = diagnosticos[i];
                       $('#tablaIngresos').append("<tr class='active'>\n\
                                                               \n\<td>"+resultado[i].id+"</td>\n\
                                                                <td>"+resultado[i].unPaciente.cedula+"</td>\n\
                                                                <td>"+resultado[i].unPaciente.nombre1+ ' '+resultado[i].unPaciente.nombre2+"</td>\n\
                                                                <td>"+resultado[i].unPaciente.apellido1+" "+resultado[i].unPaciente.apellido2+"</td>\n\
                                                                <td style='display:none;'>"+resultado[i].idTipoIngreso.id+"</td>\n\
                                                                \n\<td style='display:none;'>"+resultado[i].idCaso.id+"</td>\n\
\n\                                                             <td style='display:none;'>"+resultado[i].idEspecialidadEgreso.id+"</td>\n\
\n\\n\                                                          <td style='display:none;'>"+resultado[i].idEspecialidadEgreso.descripcion+"</td>\n\
                                                                <td>"+resultado[i].fechaEntrada+"</td>\n\
                                                                \n\<td>"+resultado[i].fechaSalida+"</td>\n\
\n\ \n\\n\                                                          <td style='display:none;'>"+resultado[i].hora+"</td>\n\
\n\\n\ \n\\n\                                                          <td style='display:none;'>"+resultado[i].condicionEgreso+"</td>\n\
                                                                \n\<td>"+res+"</td>\n\
\n\\n\\n\ \n\\n\                                                          <td style='display:none;'>"+resultado[i].secundarioEgreso+"</td>\n\
\n\\n\\n\\n\ \n\\n\                                                          <td style='display:none;'>"+resultado[i].secundarioEgreso2+"</td>\n\
\n\\n\\n\\n\ \n\\n\                                                          <td style='display:none;'>"+resultado[i].causaExterna+"</td>\n\
                                                                    \n\<td>"+resultado[i].codigoDiagnosticoDefinitivo+"</td>\n\
<td style='width: 20%' >\n\
\n\<button id='botonEditar' class='btn btn-primary'><span class='glyphicon glyphicon-pencil'></span> </button> \n\
\n\<button id='btnEliminar' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a></button>\n\
</td>\n\
                                                    </tr>");
                                                                                                                            
                    
                    
                    
                }
            }
        });
    
     }
    $('#btnBuscar').click(function(event) {               
            cargarTotalRegistros();
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
             $('#dtpFechaIngresoEditar').data("DateTimePicker").date(datos[8]);
             $('#dtpFechaSalidaEditar').data("DateTimePicker").date(datos[9]);             
             $('#dtpHoraIngreso').data("DateTimePicker").date(datos[10]);
             $('#txtCodigoCie').val(datos[16]);
             $('#txtDefinitivoEgreso').val(datos[12]);
            $('#txtSecundarioEgreso').val(datos[13]);   
            $('#txtSecundarioEgreso2').val(datos[14]);   
            $('#txtCausaExterna').val(datos[15]);   
            
          
          var id='myModal';
                    $("#"+id).modal('show');
                        $.each($("#"+id+" input"), function (){
                           // $(this).val("");
                        }); 
                       
      });
      $('#btnActualizar').click(function(event) {
          $.post('sIngresosHospital', {
            
				idIngreso : datos[0],
				fechaIngreso: momentToDate($("#dtpFechaIngresoEditar").data("DateTimePicker").date(),'YYYY-MM-DD'),
                                idTipoIngreso: 2,
                                idEspecialidadEgreso: $('#cboEspecialidadEgreso').val(),
                                fechaEgreso: momentToDate($("#dtpFechaSalidaEditar").data("DateTimePicker").date(),'YYYY-MM-DD'),
                                horaIngreso: momentToDate($("#dtpHoraIngreso").data("DateTimePicker").date(),'YYYY-MM-DD HH:MM'),
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
            //$($('.table-responsive').find('tbody > tr')[indice]).children('td')[7].innerHTML = "lo cambie";
            
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[8].innerHTML = momentToDate($("#dtpFechaIngresoEditar").data("DateTimePicker").date().toString().substring(0, 10));
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[9].innerHTML = momentToDate($("#dtpFechaSalidaEditar").data("DateTimePicker").date());
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[10].innerHTML = momentToDate($("#dtpHoraIngreso").data("DateTimePicker").date());
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[11].innerHTML = $("#cboCondicionEgreso").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[12].innerHTML = $("#txtDefinitivoEgreso").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[13].innerHTML = $("#txtSecundarioEgreso").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[14].innerHTML = $("#txtSecundarioEgreso2").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[15].innerHTML = $("#txtCausaExterna").val();
            $($('.table-responsive').find('tbody > tr')[indice]).children('td')[16].innerHTML = $("#txtCodigoCie").val();
            
                             alertify.success("Datos Registrados correctamente");
                             
			});
          
      });
      $('.table-responsive').on("click", "#btnEliminar", function(event){ 
                         var cont=0;
                         $(this).parents("tr").find("td").each(function(){
                             datos[cont]=$(this).html();   
                             cont++;
                         });
                         
                         // Si en vez de por post lo queremos hacer por get, cambiamos el $.post por $.get
			$.post('sIngresosHospital', {
                           
				opcion : 8,
				idIngreso: datos[0]                                
			}, function(responseText) {  
                            cargarTotalRegistros();
                            alertify.success("Registro eliminado");
                            
			});
                        event.preventDefault();
                            $(this).closest('tr').remove();
		});
});
    
