<%-- 
    Document   : registroIngresos
    Created on : 10/04/2017, 13:33:16
    Author     : Deivi
--%>

<%@page import="mvc.modelo.smDaoImp.EspecialidadEgresoDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.EspecialidadEgreso"%>
<%@page import="mvc.modelo.smDao.EspecialidadEgresoDao"%>
<%@page import="mvc.modelo.smDaoImp.EspecialidadDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.Especialidad"%>
<%@page import="java.util.List"%>
<%@page import="mvc.modelo.smDao.EspecialidadDao"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>


<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.min.js" integrity="sha384-Plbmg8JY28KFelvJVai01l8WyZzrYWG825m+cZ0eDDS1f7d/js6ikvy1+X+guPIB" crossorigin="anonymous"></script>
<script src="resources/js/jquery.twbsPagination.js" type="text/javascript"></script>

<div class="tab-content">

    <div class="tab-pane fade in active" id="ip" style="padding-top: 10px;">
        <div class="row">
            <div class="col-lg-12">                                    
                <div class="row">                                            
                    <div class="form-group col-xs-6">
                        <div class="col-md-12">                                                        
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="txtCedula" placeholder="Cédula">
                            </div>
                            <div class="col-md-6">
                                <div class="col-md-4">
                                    <button id="btnCargar" type="button" class="btn btn-primary">Cargar</button>   
                                </div>
                                <div class="col-md-4">
                                    <button id="btnBuscar" onclick="openModal('myModal')" type="button" class="btn btn-primary">Buscar</button>   
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-xs-4">
                        <div class="col-md-12">
                            <label class="col-md-12" for="txtPaciente">Paciente</label>
                            <div class="col-md-12">
                                <input id="txtPaciente" type='text' class="form-control" />                                                            
                            </div>                                                        
                        </div>
                    </div>
                    <div class="form-group col-xs-4">
                        <div class="col-md-8">
                            <label class="col-md-12" for="cboCondicionEgreso">Condición al egreso</label>
                            <div class="col-md-12">
                                <select id="cboCondicionEgreso" class="selectpicker">
                                    <option value="1">Vivo</option>
                                    <option value="2">Fallecido - 48 horas</option>
                                    <option value="3">Fallecido + 48 horas</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-xs-4">
                        <div class="col-md-8">
                            <label class="col-md-12" for="cboEspecialidadEgreso">Especialidad del egreso</label>
                            <div class="col-md-12">
                                <select id="cboEspecialidadEgreso" data-live-search="true" class="selectpicker">
                                    <%
                                        EspecialidadEgresoDao esp = new EspecialidadEgresoDaoImp();
                                        List<EspecialidadEgreso> list = esp.list();
                                        for (EspecialidadEgreso elem : list) {%>
                                    <option value="<%= elem.getId()%>"><%=elem.getDescripcion()%></option>
                                    <% }%>                                                            
                                </select>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="row">
                    <div class="form-group col-xs-3">
                        <div class="col-md-10">
                            <label class="col-md-12" for="dtpFechaIngreso">F. Ingreso</label>
                            <div class="col-md-12">
                                <div class='input-group date form_date' id='dtpFechaIngreso'>
                                    <input id='dtpFechaIngreso' type='text' class="form-control" />
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-xs-3">
                        <div class="col-md-10">
                            <label class="col-md-12" for="dtpFechaEgreso">F. Egreso</label>
                            <div class="col-md-12">
                                <div class='input-group date form_date' id='dtpFechaEgreso'>
                                    <input id='dtpFechaEgreso' type='text' class="form-control" />
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-xs-3">
                        <div class="col-md-10">
                            <label class="col-md-12" for="dtpHoraIngreso">Hora Ingreso</label>
                            <div class="col-md-12">
                                <div class='input-group date' id='dtpHoraIngreso'>
                                    <input id='dtpHoraIngreso' type='text' class="form-control" />
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-time"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-xs-3">
                        <div class="col-md-10">
                            <label class="col-md-12" for="dtpHoraIngreso">Código CIE - 10 </label>
                            <div class="col-md-12">
                                <div class='input-group date' id='dtpHoraIngreso'>
                                    <input id='txtCodigoCie' type='text' class="form-control" />                                                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-xs-6">
                        <div class="col-md-12">
                            <label class="col-md-12" for="txtDefinitivoEgreso">Definitivo de Egreso</label>
                            <div class="col-md-12">
                                <textarea id="txtDefinitivoEgreso" rows="3" class="form-control" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-xs-6">
                        <div class="col-md-12">
                            <label class="col-md-12" for="txtSecundarioEgreso">1. Secundarios de Egreso</label>
                            <div class="col-md-12">
                                <textarea id="txtSecundarioEgreso" rows="3" class="form-control" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-xs-6">
                        <div class="col-md-12">
                            <label class="col-md-12" for="txtSecundarioEgreso2">2. Secundarios de Egreso</label>
                            <div class="col-md-12">
                                <textarea id="txtSecundarioEgreso2" rows="3" class="form-control" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="form-group col-xs-6">
                        <div class="col-md-12">
                            <label class="col-md-12" for="txtCausaExterna">Causa Externa</label>
                            <div class="col-md-12">
                                <textarea id="txtCausaExterna" rows="3" class="form-control" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-10">

                    </div>                                       
                    <div class="form-group col-xs-2">                                       
                        <div class="col-md-2">
                            <button id="btnGuardar" type="button" class="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>
                </form>


            </div>




        </div>
    </div>     
</div>


<form class="form-horizontal" id="myForm">                             
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">          
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Búsqueda de Pacientes</h4>
                </div>
                <div class="modal-body">
                    <div style="padding-left: 12px; padding-right: 12px " class="row">
                        <div class="col-lg-12">


                            <div class="row">
                                <div style="padding-top: 10px" class="col-xs-1 col-md-1">Registros:</div>

                                <div style=" padding: 2;" class="col-md-1 col-xs-1">
                                    <select class="selectpicker"  id="cboMostrar" data-width="60px">
                                        <option value="5">5</option>
                                        <option value="10">10</option>                                        
                                    </select>

                                </div>

                                <div class="col-xs-4 col-md-4">
                                    <input type="text" class="form-control" id="txtBuscar"  placeholder="Buscar">
                                </div>
                            </div>
                            <div class="row" style="padding-bottom: 1%; text-align: right;" >
                                <div class="col-xs-12 col-sm-12 col-md-12"> 
                                    <div class="col-xs-12 col-sm-12 col-md-3"> 

                                    </div>

                                </div>
                            </div>

                            <div class="table-responsive">
                                <table id="tablaPacientes" class="table table-bordered table-hover table-striped">
                                    <thead>

                                    </thead>
                                    <tbody>


                                    </tbody>
                                </table>
                            </div>
                            <div class="container">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination" id="pagination"></ul>
                                </nav>
                            </div>
                        </div>
                    </div>   









                </div>

            </div>
        </div>
    </div>


</form>
<script src="ingresos/js/registroIngresos.js"></script>
<script>
                                        $(".selectpicker").selectpicker().selectpicker("render");
                                        $(function () {
                                            /*$('#dtpFechaIngreso').datetimepicker({format: 'DD/MM/YYYY'});
                                             $('#dtpFechaEgreso').datetimepicker({format: 'DD/MM/YYYY'});
                                             $('#dtpHoraIngreso').datetimepicker({format: 'LT'});*/

                                        });
</script>
