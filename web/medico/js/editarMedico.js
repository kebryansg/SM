/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 $(document).ready(function(){      
     //obtengo el total de registros
     var totalRegistros=0;
     var totalPaginas=0;
     var paginasVisibles=5;
     var paginaActual=0;
     var buscar=0;
     idTablaSeleccionada=-1;
     var indice=-1;
     $("#txtBuscar").text("");
     $("#cboMostrar").val(5);
     cargarTotalRegistros();
     $("#txtBuscar").keyup(function(event){		            
             if($("#txtBuscar").val().length < 1) 
                 buscar=0;
             else
                 buscar=1;
             cargarTotalRegistros();    
	}); 
     function cargarTotalRegistros()
     {
         $.post('../SM/sMedico', { 
             opcion : "4",
             bandera:buscar,
             buscar:$("#txtBuscar").val()
             
         }, function(responseText) {   
             totalRegistros=responseText;   
              cargarPaginacion();
             console.log(responseText);
             
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
                   cargarMedicos(page);
               }
           });
           console.info(obj.data());      
     }
        //console.info(obj.data());    
     
     //cambio de pagina
     
    //Establesco por defecto que muestren 5 datos al inicio
    
    //cargo los datos de los medicos
    //cargarMedicos(1);
    //Funcion para cargar los medicos de forma paginada
    function cargarMedicos(pagina)
    {
        var totalRegistro=$("#cboMostrar").val();
        $.post('sMedico', {
            totalMostrar : totalRegistro,
            pagina: pagina,
            opcion: '2',
            bandera:buscar,
             buscar:$("#txtBuscar").val()
        }, function(data) {   
            //elimino las anteriorres
                //$('#tablaMedico tr:not(:first-child)').remove();
                //añado los datos 
                //$('#tablaMedico tr:last').after(responseText);
                $('#tablaMedico tr').remove();
                 var resultado = JSON && JSON.parse(data) || $.parseJSON(data);         
                 $('#tablaMedico thead').append("<tr>\n\
                                                <th class='col-lg-1'>No.</th>\n\
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
            
    }
    
    $('#cboMostrar').on('change', function() {     
        cargarPaginacion();
        //cargarMedicos(paginaActual);        
        });
        
        
        var datos = [];
                                                
     //porque las creo de forma dinamicas    
     $(".table-responsive").on("click", "#botonEditar", function(){           
         // Obtenemos todos los valores contenidos en los <td> de la fila
            // seleccionada
            
            var cont=0;            
            $(this).parents("tr").find("td").each(function(){
                datos[cont]=$(this).html();  
                //alert(datos[cont]);
                cont++;
                
                
            });
            $.ajax({
                type: 'Post',
                url: 'sMedico',
                data: {
                    idMedico: datos[0],				                                
                    opcion: '1'
                },
                async: false,
                success:function(response){                    
                     $("#cboEspecialidades").html(response);
                   /* $("#cboEspecialidades option").each(function(){
                        alert('opcion '+$(this).text()+' valor '+ $(this).attr('value'))
                    });    */
                    $('.selectpicker').selectpicker('refresh');
                    //abro la ventana
                    var id='myModal';
                    $("#"+id).modal('show');
                        $.each($("#"+id+" input"), function (){
                            $(this).val("");
                        }); 
                    //class="selectpicker" 
                   // $("#cboEspecialidades").addClass("selectpicker");
                }
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
            //$('#txtEstadoModal').val(datos[10]);  
            //$("#cboEstadoModal option[value="+  datos[10] +"]").attr("selected",true);
            $('select[id=cboEstadoModal]').val(datos[10]);
        });
        
        $('#btnActualizar').click(function(event) {
            
            $.post('../SM/sMedico', {
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
                            console.log(responseText);      
                           
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
                             
                             
                             
			});
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
                         
                         // Si en vez de por post lo queremos hacer por get, cambiamos el $.post por $.get
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






