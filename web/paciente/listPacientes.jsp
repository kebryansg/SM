<%@page contentType="text/html" pageEncoding="UTF-8"%>
<script src="paciente/js/stylePaciente.js" type="text/javascript"></script>

<!DOCTYPE html>
<div class="contenedor-tabs">
    <div class="container-fluid">
        <div class="row">
            <div class="pull-left">
                <div class="col-md-12">
                    <input class="form-control" id="txt_filterPaciente" placeholder="Buscar">
                </div>
            </div>
            <div class="pull-right">
                <div class="col-md-12">
                    <select class="selectpicker" data-width="80px" id="cantList">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
        </div>    
        <br>
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover table-striped">
                        <thead style="font-weight: bold;">
                            <tr>
                                <td style="width: 12%;">Historia Clinica</td>
                                <td>Cèdula</td>
                                <td>Apellidos y Nombres</td>
                                <td>Ciudad</td>
                                <td>Domicilio</td>
                                <td style="width: 10%;">Acciòn</td>
                            </tr>
                        </thead>
                        <tbody id="tablePaciente"></tbody>
                    </table>
                </div>
                <ul id="pagPacientes" class="pagination"></ul>
            </div>       
        </div>
    </div>
    
</div>
<script src="resources/js/jquery.twbsPagination.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        $.getScript("paciente/js/paciente.js", function () {
            //list_filter();
        });
    });
</script>