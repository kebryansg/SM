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
            <div class="col-md-6 bx">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-md-3">Fecha</label>
                        <div class="col-md-4">
                            <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                                <input class="form-control" validate="date" id="con_Fecha" size="16" type="text" value="" readonly>
                                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                            </div>    
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-3">Fecha</label>
                        <div class="col-md-4">
                            <select class="selectpicker" validate="select" data-live-search="true" id="cboEspecialidadMedico">
                                
                            </select>
                        </div>
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

            </div>
        </div>
    </div>
</div>