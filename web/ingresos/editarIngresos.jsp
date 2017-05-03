<%@page import="mvc.modelo.smDaoImp.EspecialidadEgresoDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.EspecialidadEgreso"%>
<%@page import="mvc.modelo.smDao.EspecialidadEgresoDao"%>
<%@page import="mvc.modelo.smDaoImp.EspecialidadDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.Especialidad"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!--<script src="resources/js/jquery.twbsPagination.js" type="text/javascript"></script>-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js" async="async" ></script>


<br>
<div class="contenedor-tabs">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12">
                        <label for="inputName" style="padding-top: 10px" class="control-label col-xs-1">Ingreso</label>
                        <div class="col-md-3">
                             <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                                            <input validate="date" class="form-control" id="dtpFechaIngresoIngresos" size="16" type="text" value="" readonly>
                                            <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                             </div>
                        </div>
                        <label for="inputName" style="padding-top: 10px" class="control-label col-xs-1">Salida</label>
                        <div class="col-md-3">
                            <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                                            <input validate="date" class="form-control" id="dtpFechaEgresoIngresos" size="16" type="text" value="" readonly>
                                            <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                             </div>
                        </div>
                        <button id="btnBuscar" type="button" class="btn btn-primary">Buscar</button>   
                    </div>                    
                </div>
            </div>            
        </div>
        <span class="label label-default"></span>
        <br>
        <div style="width: 100%; height: 300px; overflow-y: scroll; overflow-x: hidden;">
        <div class="row">
            <div class="col-xs-12">
            <div class="table-responsive" style="margin: 0 auto; text-align:left">
            <table id="tablaIngresos" class="table table-bordered table-hover table-striped">
                <thead>
                    <tr>

                    </tr>
                </thead>
                <tbody>


                </tbody>
            </table>
            </div>
        </div>
        </div>  
            </div>
        <div style="text-align: right; width: 100%;" id="paginacionIngresosEditar">
                    <ul class="pagination" >
                
                    </ul>
         </div>
    </div>
</div>


<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">          
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Editar Ingresos</h4>
            </div>
            <div class="modal-body">
                <div class="tab-pane fade in active" id="ip" style="padding-top: 10px;">
                    <div class="row">
                        <div class="col-lg-12">                                    


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
                                    <div class="col-md-10">
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
                                    <div class="col-md-12">
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
                                    <div class="col-md-12">
                                        <label class="col-md-12" for="dtpFechaIngresoModal">F. Ingreso</label>
                                        <div class="col-md-12">
                                                <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                                            <input validate="date" class="form-control" id="dtpFechaIngresoIngresosModal" size="16" type="text" value="" readonly>
                                            <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group col-xs-3">
                                    <div class="col-md-12">
                                        <label class="col-md-12" for="dtpFechaEgreso">F. Egreso</label>
                                        <div class="col-md-12">
                                            <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                                        <input validate="date" class="form-control" id="dtpFechaEgresoIngresosModal" size="16" type="text" value="" readonly>
                                        <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                                        <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group col-xs-3">
                                    <div class="col-md-12">
                                        <label class="col-md-12" for="dtpHoraIngreso">Hora Ingreso</label>
                                        <div class="col-md-12">
                                            <div class="input-group date form_time" data-date="" data-date-format="hh:ii" data-link-format="hh:ii">
                                  <input validate="date" class="form-control" id="dtpHoraIngreso" size="16" type="text" value="" readonly>
                        	<!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                                    <span class="input-group-addon">
                                        <span class="glyphicon glyphicon-time"></span>
                                    </span>
                                </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group col-xs-3">
                                    <div class="col-md-12">
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
                                        <button id="btnActualizar" type="button" onclick="closeModal('myModal')" class="btn btn-primary">Guardar</button>
                                    </div>
                                </div>
                            </div>
                            </form>


                        </div>




                    </div>
                </div> 







            </div>

        </div>
    </div>
</div>
                                            
                                            
<!--Modal medicinas -->
<div class="modal fade" id="medicinas" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">          
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Medicamentos</h4>
            </div>
            <div class="modal-body">
                <div class="tab-pane fade in active" id="ip" style="padding-top: 10px;">
                    <div class="row">
                        <div class="col-lg-12">                                    


                           <div class="row">
                                <div class="form-group col-xs-6">
                                    <div class="col-md-12">
                                        <label class="col-md-12" for="dtpFechaIngresoModal">Fecha</label>
                                        <div class="col-md-12">
                                                <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                                            <input validate="date" class="form-control" id="dtpFechaMedicamentoIngresosModal" size="16" type="text" value="" readonly>
                                            <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group col-xs-6">
                                    <div class="col-md-12">
                                        <label class="col-md-12" for="dtpFechaEgreso">Hor</label>
                                        <div class="col-md-12">
                                                    <input id='txtHor' type='text' class="form-control" />                                            
                                        </div>
                                    </div>
                                </div>

                               
                            </div>
                             <div class="row">
                                  <div class="form-group col-xs-6">
                                    <div class="col-md-12">
                                        <label class="col-md-12" for="dtpHoraIngreso">Lni</label>
                                        <div class="col-md-12">
                                            
                                                    <input id='txtLni' type='text' class="form-control" /> 
                                            
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group col-xs-6">
                                    <div class="col-md-12">
                                        <label class="col-md-12" for="dtpHoraIngreso">Fin</label>
                                        <div class="col-md-12">
                                            
                                                <input id='txtFin' type='text' class="form-control" />                                                                
                                            
                                        </div>
                                    </div>
                                </div>
                             </div>
                            <div class="row">
                                <div class="form-group col-xs-12">
                                    <div class="col-md-12">
                                        <label class="col-md-12" for="txtDefinitivoEgreso">Administración de medicamentos y tratamientos</label>
                                        <div class="col-md-12">
                                            <textarea id="txtMedicamentos" rows="3" class="form-control" placeholder=""></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="row">
                                <div class="form-group col-xs-10">

                                </div>                                       
                                
                            </div>
                            </form>


                        </div>




                    </div>
                </div> 







            </div>
            <div class="modal-footer">
                <div class="form-group col-xs-2">                                       
                                    <div class="col-md-2">
                                        <button id="btnAgregarMedicamentos" type="button" onclick="closeModal('medicinas')" class="btn btn-primary">Guardar</button>
                                    </div>
                                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="mantenimientoMedicina" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">          
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Mantenimiento Medicamentos</h4>
            </div>
            <div class="modal-body">
                <div class="tab-pane fade in active" id="ip" style="padding-top: 10px;">
                    <div class="row">
                        <div class="col-lg-12">                                    
                               <div style="width: 100%; height: 300px; overflow-y: scroll; overflow-x: hidden;">         
                                    <div class="table-responsive">
                                        <table id="tablaMedicamentos" class="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th class="col-lg-1">id</th>
                                                    <th class="col-lg-1">Fecha</th>
                                                    <th>Hor</th>
                                                    <th class="col-lg-1">Lni</th>
                                                    <th class="col-lg-1">Fin</th>
                                                    <th class="col-lg-1">Administración de medicamentos y tratamientos</th>

                                                </tr>

                                            </thead>
                                            <tbody >


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            <div style="text-align: right; width: 100%;" id="paginacionBuscarIngresos">
                            <nav aria-label="Page navigation">
                                    <ul class="pagination" id="paginacionBuscarI"></ul>
                             </nav>
                    </div>        

                            
                            <div class="row">
                                <div class="form-group col-xs-10">

                                </div>                                       
                                <div class="form-group col-xs-2">                                       
                                    <div class="col-md-2">
                                        <button id="btnActualizar" type="button" onclick="closeModal('myModal')" class="btn btn-primary">Guardar</button>
                                    </div>
                                </div>
                            </div>
                            </form>


                        </div>




                    </div>
                </div> 







            </div>

        </div>
    </div>
</div>
                                            
               

<script src="ingresos/js/editarIngresos.js" type="text/javascript" async="async"></script>