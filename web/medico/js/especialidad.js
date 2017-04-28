/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var datos = [];
    var totalRegistros = 0;
    var totalPaginas = 0;
    var pagina = 0;
    var buscar = 0;
    var paginaActual = 0;
    var indice = 0;

    $("#cboMostrar").val(5);
    cargarTotalRegistros();
    $('#cboMostrar').on('change', function () {
        cargarTotalRegistros();
    });

    $("#txtBuscar").keyup(function (event) {
        if ($("#txtBuscar").val().length < 1)
            buscar = 0;
        else
            buscar = 1;
        cargarTotalRegistros();
    });
    //porque las creo de forma dinamicas
    $(".table-responsive").on("click", "#botonEditar", function () {
        // Obtenemos todos los valores contenidos en los <td> de la fila
        // seleccionada

        var cont = 0;
        $(this).parents("tr").find("td").each(function () {
            datos[cont] = $(this).html();
            cont++;
        });
        $('.modal-title').text('Editar Especialidad');
        var id = 'myModal';
        $("#" + id).modal('show');
        $.each($("#" + id + " input"), function () {
            $(this).val("");
        });
        $('#recipient-name').val(datos[1]);

    });
    $('#btnAgregar').click(function (event) {
        datos[0] = 0;
        $('.modal-title').text('Agregar Especialidad');

        var id = 'myModal';
        $("#" + id).modal('show');
        $.each($("#" + id + " input"), function () {
            $(this).val("");
        });
        $('#recipient-name').val(datos[1]);
    });
    $(".table-responsive").on("click", "tr", function () {
        indice = $(this).index();

    });
    $('#btnActualizar').click(function (event) {

        var descripcionEspecialidadVar = $('#recipient-name').val();
        var idEspecialidadVar = datos[0];


        // Si en vez de por post lo queremos hacer por get, cambiamos el $.post por $.get
        $.post('sEspecialidad', {
            descripcionEspecialidad: descripcionEspecialidadVar,
            idEspecialidad: idEspecialidadVar,
            visible: '1',
            opcion: "3"
        }, function (responseText) {
            if (idEspecialidadVar === 0)
            {
                cargarTotalRegistros();
                alertify.success("Especialidad agregada correctamente");
            } else
            {
                alertify.success("Especialidad Modificada");
                $($('.table-responsive').find('tbody > tr')[indice]).children('td')[1].innerHTML = $('#recipient-name').val();

            }


        });
    });

    $('.table-responsive').on("click", "#btnEliminar", function (event) {
        var cont = 0;
        $(this).parents("tr").find("td").each(function () {
            datos[cont] = $(this).html();
            cont++;
        });

        // Si en vez de por post lo queremos hacer por get, cambiamos el $.post por $.get
        $.post('sEspecialidad', {

            descripcionEspecialidad: datos[1],
            idEspecialidad: datos[0],
            visible: 0,
            opcion: "3"
        }, function (responseText) {
            cargarTotalRegistros();
            alertify.success("Especialidad eliminada");

        });
        event.preventDefault();
        $(this).closest('tr').remove();
    });
    function cargarTotalRegistros()
    {
        $.post('sEspecialidad', {
            opcion: "1",
            bandera: buscar,
            buscar: $("#txtBuscar").val()

        }, function (responseText) {
            totalRegistros = responseText;
            console.log(responseText);
            if (totalRegistros == 0)
                $('#tablaPacientes tr:not(:first-child)').remove();
            else
                cargarPaginacion();

        });
    }
    function cargarPaginacion()
    {
        totalPaginas = totalRegistros / $("#cboMostrar").val();
        totalPaginas = Math.ceil(totalPaginas);

        $('#pagEspecialidad').twbsPagination('destroy');
        var obj = $('#pagEspecialidad').twbsPagination({
            totalPages: totalPaginas,
            visiblePages: 7,
            first: "Primero",
            next: "Siguiente",
            last: "Ultimo",
            prev: "Anterior",
            onPageClick: function (event, page) {
                console.info(page);
                paginaActual = page;
                cargarEspecialidades(page, buscar);
            }
        });
        console.info(obj.data());
    }
    function cargarEspecialidades(pagina, esBuscar)
    {
        var totalRegistro = $("#cboMostrar").val();
        $.post('sEspecialidad', {
            totalMostrar: totalRegistro,
            pagina: pagina,
            opcion: '2',
            bandera: esBuscar,
            buscar: $("#txtBuscar").val()
        }, function (data) {
            //elimino las anteriorres
            $('#especialidades tr').remove();
            $('#especialidades thead').append("<tr>\n\
       \n\                              <th class='col-lg-1'>No.</th>\n\
                                        <th class='col-lg-3'>Descripción</th>\n\
\n\                                     <th class='col-lg-1'>Opción</th>\n\
                                    </tr>");

            var resultado = JSON && JSON.parse(data) || $.parseJSON(data);
            //añado los datos 
            for (i = 0; i < resultado.length; i++)
            {
                $('#especialidades').append("<tr class='active'>\n\                                                            \n\
                                                            <td>" + resultado[i].id + "</td>\n\
                                                            <td>" + resultado[i].descripcion + "</td>\n\
\n\                                                         <td style='width: 10%' ><button id='botonEditar' class='btn btn-primary' onclick='openModal('myModal')'><span class='glyphicon glyphicon-pencil'></span> </button>\n\
                                                                <button id='btnEliminar' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a></button>\n\
                                                            </td>\n\
                                                        </tr>");

            }
            //$('#tablaPacientes tr:last').after(responseText);
        });

    }

});

