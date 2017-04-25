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
                    <select class="form-control" id="cantList">
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
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <td>Home 1</td>
                                <td>Home 2</td>
                            </tr>
                        </thead>
                        <tbody id="tablePaciente"></tbody>
                    </table>
                </div>
            </div>       
        </div>
    </div>




    <!--<input type="hidden" id="cantList" value="2">-->

    <ul id="pagPacientes" class="pagination"></ul>
</div>
<script src="resources/js/jquery.twbsPagination.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        $.getScript("paciente/js/paciente.js", function () {
            list();
        });
    });

</script>