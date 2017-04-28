<%@page contentType="text/html" pageEncoding="UTF-8"%>
<script src="medico/js/especialidad.js"></script>
<script src="resources/js/jquery.twbsPagination.js" type="text/javascript"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>
<!DOCTYPE html>
<div class="contenedor-tabs">
    <div class="container-fluid">
        <div class="row">
            <div style="bottom: -10px;" class="col-xs-2 col-md-2">Registros por páginas:</div>
            <div class="col-xs-1 col-md-1">
                <select class="selectpicker" id="cboMostrar" data-width="80px">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div class="col-xs-2 col-md-2"><input type="text" class="form-control" id="txtBuscar"  placeholder="Buscar"></div>
        </div>
        <br>
        <div class="row">
            <div class="table-responsive col-lg-6">
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
        <div class="row">
            <nav aria-label="Page navigation">
                <ul class="pagination" id="pagEspecialidad"></ul>
            </nav>
        </div>
        <div class="row" style="padding-left: 12%; text-align: right;" >
            <div class="col-xs-6">                
                <div class="col-xs-11">                
                    <div class="form-group" >
                        <button id="btnAgregar" onclick="openModal('myModal')" type="button" class="btn btn-primary">Agregar</button>                           
                    </div>
                </div>            
            </div>     

        </div>
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
                    <input type="text" class="form-control" id="recipient-name">
                </div>
            </div>
            <div class="modal-footer">

                <button id="btnActualizar" type="button" onclick="closeModal('myModal')" class="btn btn-primary">Guardar</button>
            </div>
        </div>
    </div>
</div>



