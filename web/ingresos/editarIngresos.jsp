<%-- 
    Document   : editarIngresos
    Created on : 17/04/2017, 8:08:36
    Author     : Deivi
--%>

<%@page import="mvc.modelo.smDaoImp.EspecialidadEgresoDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.EspecialidadEgreso"%>
<%@page import="mvc.modelo.smDao.EspecialidadEgresoDao"%>
<%@page import="mvc.modelo.smDaoImp.EspecialidadDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.Especialidad"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<script src="resources/js/jquery.twbsPagination.js" type="text/javascript"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">
       <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>
<script type="text/javascript">
  $(function () {
                $('#dtpFechaIngreso').datetimepicker({format: 'DD/MM/YYYY'});
                $('#dtpFechaSalida').datetimepicker({format: 'DD/MM/YYYY'});
                $('#dtpHoraIngreso').datetimepicker({ format: 'LT'});
                $('#dtpFechaIngresoEditar').datetimepicker({format: 'YYYY/MM/DD'});
                $('#dtpFechaSalidaEditar').datetimepicker({format: 'YYYY/MM/DD'});
                
            });
</script>
<script type="text/javascript" src="paciente/js/editarIngresos.js"></script>
<br>
<div class="row">
    <div class="col-md-12">
        <div class="row">
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-12">
                            <label for="inputName" style="padding-top: 10px" class="control-label col-xs-1">Ingreso</label>
                            <div class="col-md-3">
                               <div class='input-group date' id='dtpFechaIngreso'>
                                   <input id='dtpFechaIngreso' type='text' class="form-control" />
                                   <span class="input-group-addon">
                                       <span class="glyphicon glyphicon-calendar"></span>
                                   </span>
                               </div>
                            </div>
                            <label for="inputName" style="padding-top: 10px" class="control-label col-xs-1">Salida</label>
                            <div class="col-md-3">
                               <div class='input-group date' id='dtpFechaSalida'>
                                   <input id='dtpFechaSalida' type='text' class="form-control" />
                                   <span class="input-group-addon">
                                       <span class="glyphicon glyphicon-calendar"></span>
                                   </span>
                               </div>
                            </div>
                            <button id="btnBuscar" type="button" class="btn btn-primary">Buscar</button>   
                    </div>                    
                </div>
            </div>            
        </div>
        <span class="label label-default"></span>
        <br>
         <div class="table-responsive">
                            <table id="tablaIngresos" class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        
                                    </tr>
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
                                                                List<EspecialidadEgreso> list= esp.list();
                                                                for(EspecialidadEgreso elem: list)
                                                                   {%>
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
                                                        <label class="col-md-12" for="dtpFechaIngreso">F. Ingreso</label>
                                                        <div class="col-md-12">
                                                            <div class='input-group date' id='dtpFechaIngresoEditar'>
                                                                <input id='dtpFechaIngresoEditar' type='text' class="form-control" />
                                                                <span class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group col-xs-3">
                                                    <div class="col-md-12">
                                                        <label class="col-md-12" for="dtpFechaEgreso">F. Egreso</label>
                                                        <div class="col-md-12">
                                                            <div class='input-group date' id='dtpFechaSalidaEditar'>
                                                                <input id='dtpFechaSalidaEditar' type='text' class="form-control" />
                                                                <span class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            <div class="form-group col-xs-3">
                                                    <div class="col-md-12">
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
 