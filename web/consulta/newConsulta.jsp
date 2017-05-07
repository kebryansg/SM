<%@page import="java.util.List"%>
<%@page import="mvc.modelo.smDaoImp.MedicoEspecialidadDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.MedicoEspecialidad"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="contenedor-tabs">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="pull-right">
                    <button class="btn btn-info">Guardar</button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label class="control-label" for="con_Fecha">Fecha</label>
                        <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                            <input class="form-control" validate="date" id="con_Fecha" size="16" type="text" value="" readonly>
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>    
                    </div>
                    <div class="form-group col-md-6">
                        <label class="control-label" for="cboEspecialidadMedico">Especilidad</label>
                        <select class="form-control selectpicker" validate="select" data-live-search="true" id="cboEspecialidadMedico">
                            <option value="0">Seleccione</option>
                            <%
                                List<MedicoEspecialidad> list = new MedicoEspecialidadDaoImp().list(68);
                                for (MedicoEspecialidad m_e : list) {
                            %>
                            <option value="0"><%= m_e.getIdEspecialidad().getDescripcion() %></option>
                            <%
                                }
                            %>  
                            <option value=""><%= list.size() %></option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label">Motivo</label>
                    <textarea class="form-control" validate="text" rows="3" id="con_Motivo"></textarea>
                </div>
                <div class="form-group">
                    <label class="control-label">Sintomas</label>
                    <textarea class="form-control" validate="text" rows="5" id="con_Sintomas"></textarea>
                </div>
            </div>
            <div class="col-md-6">
                <div class="col-md-4">
                    <button class="btn btn-danger btn-block" onclick="openModal_Clean('SignosVitales')">Signos Vitales</button>    
                </div>
                <div class="col-md-4">
                    <button class="btn btn-info btn-block" >Estudios Lab.</button>    
                </div>

            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="SignosVitales" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Signos Vitales</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="form-group col-md-4">
                        <label class="form-control-label">Peso:</label>
                        <input validate="text" type="text" class="form-control solo-numero" placeholder="kg" id="sv_Peso">
                    </div>
                    <div class="form-group col-md-4">
                        <label class="form-control-label">Talla:</label>
                        <input validate="text" type="text" class="form-control solo-numero" placeholder="cm" id="sv_Talla">
                    </div>
                    <div class="form-group col-md-4">
                        <label class="form-control-label">Frecuencia Cardìaca:</label>
                        <input validate="text" type="text" class="form-control solo-numero" placeholder="x Minuto" id="sv_Frecuencia">
                    </div>
                    <div class="form-group col-md-4">
                        <label class="form-control-label">Presiòn Arterial:</label>
                        <input validate="text" type="text" class="form-control solo-numero" placeholder="mmHg" id="sv_Presion">
                    </div>
                    <div class="form-group col-md-4">
                        <label class="form-control-label">Temperatura:</label>
                        <input validate="text" type="text" class="form-control solo-numero" placeholder="ºC" id="sv_Temperatura">
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="form-group col-md-4">
                        <label class="form-control-label">FUM:</label>
                        <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                            <input class="form-control" validate="date" id="sv_FUM" size="16" type="text" value="" readonly>
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>  
                    </div>
                    <div class="form-group col-md-4">
                        <label class="form-control-label">FUC:</label>
                        <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                            <input class="form-control" validate="date" id="sv_FUC" size="16" type="text" value="" readonly>
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                        </div>  
                    </div>
                </div>

            </div>
            <div class="modal-footer">

                <button id="btnActualizar" type="button"  class="btn btn-primary">Guardar</button>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    //openModal_Clean("SignosVitales");
</script>