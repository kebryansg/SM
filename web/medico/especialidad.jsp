<%@page contentType="text/html" pageEncoding="UTF-8"%>
<script src="medico/js/especialidad.js"></script>
<script src="resources/js/jquery.twbsPagination.js" type="text/javascript"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>
<!DOCTYPE html>
<div class="contenedor-tabs" >
    <div class="container-fluid">
        <div class="row ">
            <div class="col-md-12">
                <div class="pull-right">
                    <button class="btn btn-info" id="btnAgregar"  data-id="0">Agregar</button>
                </div>       
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="pull-right">
                <div class="col-md-12">
                    <input class="form-control" id="txtBuscar" placeholder="Buscar">
                </div>
            </div>
            <div class="pull-left">
                <div class="col-md-12">
                    <div class="form-inline">
                        <label for="txt_filterPaciente" class="control-label">Mostrar</label>
                        <select class="selectpicker" data-width="80px" id="cboMostrar">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>    
        <br>
        <div style="width: 100%; height: 300px; overflow-y: scroll; overflow-x: hidden;">
            <div class="row">
                <div class="table-responsive col-lg-12">
                    <table id="especialidades" class="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th class="col-lg-1">No.</th>
                                <th>Descripci&oacute;n</th>
                                <th class="col-lg-1">Acci&oacute;n</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>   
        </div>  
        <div style="text-align: right; width: 100%;" id="paginacionEspecialidad">
            <nav aria-label="Page navigation">
                <ul class="pagination" id="pagEspecialidad"></ul>
            </nav>
        </div>        
    </div>
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"></h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-control-label">Descripci&oacute;n:</label>
                        <input validate="text" type="text" class="form-control" id="recipient-name">
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="btnActualizar" type="button"  class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</div>