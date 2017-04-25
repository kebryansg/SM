<%-- 
    Document   : editarMedico
    Created on : 30/03/2017, 13:01:07
    Author     : Deivi
--%>

<%@page import="mvc.modelo.smDaoImp.EspecialidadDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.Especialidad"%>
<%@page import="mvc.modelo.smDao.EspecialidadDao"%>
<%@page import="mvc.controlador.entidades.sm.Medico"%>
<%@page import="mvc.modelo.smDaoImp.MedicoDaoImp"%>
<%@page import="java.util.List"%>
<%@page import="mvc.modelo.smDao.MedicoDao"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>
<script src="medico/js/editarMedico.js"></script>

<script src="resources/js/style.js" type="text/javascript"></script>


<script src="resources/js/jquery.twbsPagination.js" type="text/javascript"></script>




<style>

</style>
<br>

<div style="padding-left: 12px; padding-right: 12px " class="row">
    <div class="col-lg-12">


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
        <div class="row" style="padding-bottom: 1%; text-align: right;" >
            <div class="col-xs-12 col-sm-12 col-md-12"> 
                <div class="col-xs-12 col-sm-12 col-md-3"> 

                </div>

            </div>
        </div>

        <div class="table-responsive">
            <table id="tablaMedico" class="table table-bordered table-hover table-striped">
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
<form class="form-horizontal" id="myForm">                             
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">          
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Editar Médico</h4>
                </div>
                <div class="modal-body">

                    <div class="row" style="padding-bottom: 12px">
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Cédula</label>
                            <input type="text" id="txtCedulaModal" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Primer Nombre</label>
                            <input id="txtPrimerNombreModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Segundo Nombre</label>
                            <input id="txtSegundoNombreModal" type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row" style="padding-bottom: 12px">
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Primer Apellido</label>
                            <input  id="txtPrimerApellidoModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Segundo Apellido</label>
                            <input id="txtSegundoApellidoModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Domicilio</label>
                            <input id="txtDomicilioModal" type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row" style="padding-bottom: 12px">
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Ciudad</label>
                            <input id="txtCiudadModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Teléf. Domicilio</label>
                            <input id="txtTelefonoDomicilioModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Teléf. Oficina</label>
                            <input id="txtTelefonoOficinaModal" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="row" style="padding-bottom: 12px">                    
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Teléf. Movil</label>
                            <input id="txtTelefonoMovilModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">E-mail</label>
                            <input id="txtEmailModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Estado</label>
                            <select id="cboEstadoModal" class="selectpicker">
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option>
                            </select>
                        </div>
                    </div>

                    <div class="row" style="padding-bottom: 12px">                    
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Especialidad</label>
                            <select id="cboEspecialidades" data-live-search="true" class="selectpicker" multiple title="Seleccione">

                            </select>
                        </div>


                    </div>

                </div>
                <div class="modal-footer">

                    <button id="btnActualizar" type="button" onclick="closeModal('myModal')" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </div>
    </div>


</form>

<script>
    $(".selectpicker").selectpicker().selectpicker("render");
</script>