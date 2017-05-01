<%@page import="mvc.modelo.smDaoImp.EspecialidadDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.Especialidad"%>
<%@page import="mvc.modelo.smDao.EspecialidadDao"%>
<%@page import="mvc.controlador.entidades.sm.Medico"%>
<%@page import="mvc.modelo.smDaoImp.MedicoDaoImp"%>
<%@page import="java.util.List"%>
<%@page import="mvc.modelo.smDao.MedicoDao"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<script src="medico/js/editarMedico.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/css/bootstrap-select.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.2/js/bootstrap-select.min.js"></script>


<!--<script src="resources/js/style.js" type="text/javascript"></script>-->


<!--<script src="resources/js/jquery.twbsPagination.js" type="text/javascript"></script>-->
<style>
        .paginacion {
margin:20px 0;
}
 
.paginacion ul {
list-style:none;
text-align: center;
}
 
.paginacion ul li {
display:inline-block;
margin-right:10px;
}
 
.paginacion ul li a {
display:block;
padding:10px 20px;
color:#fff;
background:#024959;
text-decoration: none;
}
 
.paginacion ul li a:hover {
background:#037E8C;
}
 
.paginacion ul li .active {
background:#037E8C;
font-weight:bold;
}
    </style>
<div class="contenedor-tabs" id="tabMedicoEditar">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="tab-content"  >
                <br>
                
                <div class="row">
                    <div class="col-md-8">
                    <div class="form-group">
                        <label class="control-label col-xs-4">Registros por páginas:</label>
                        <div style="padding-left: -10px" class="col-xs-2">
                            <select class="form-control" id="cboMostrar" >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        
                        <div class="col-xs-3">
                            <input type="text" class="form-control" id="txtBuscar" placeholder="Buscar">
                        </div>
                        
                        
                    </div>
                        
                    </div>
                </div>
                <hr/>
                <!--<div class="row" style="padding-bottom: 1%; text-align: right;" >
                    <div class="col-xs-12 col-sm-12 col-md-12"> 
                        <div class="col-xs-12 col-sm-12 col-md-3"> 
                        </div>
        
                    </div>
                </div>-->
                <div style="width: 100%; height: 300px; overflow-y: scroll; overflow-x: hidden;">
                <div class="row" >
                    <div class="col-xs-12">

                    <div class="table-responsive" style="margin: 0 auto; text-align:left">
                        <table id="tablaMedico" class="table table-bordered table-hover table-striped">
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
                <div style="text-align: right; width: 100%;" id="paginacionMedico">
                    <ul class="pagination" >
                
                    </ul>
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
                    <h4 class="modal-title">Editar Médico</h4>
                </div>
                <div class="modal-body" >

                    <div class="row" style="padding-bottom: 12px">
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Cédula</label>
                            <input onblur="validarCedula()" validate="text" type="text" id="txtCedulaModal" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Primer Nombre</label>
                            <input validate="text" id="txtPrimerNombreModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label validate="text" for="exampleInputEmail1">Segundo Nombre</label>
                            <input id="txtSegundoNombreModal" type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row" style="padding-bottom: 12px">
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Primer Apellido</label>
                            <input  validate="text" id="txtPrimerApellidoModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Segundo Apellido</label>
                            <input validate="text" id="txtSegundoApellidoModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Domicilio</label>
                            <input validate="text" id="txtDomicilioModal" type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row" style="padding-bottom: 12px">
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Ciudad</label>
                            <input validate="text" id="txtCiudadModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Teléf. Domicilio</label>
                            <input validate="text" id="txtTelefonoDomicilioModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Teléf. Oficina</label>
                            <input validate="text" id="txtTelefonoOficinaModal" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="row" style="padding-bottom: 12px">                    
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Teléf. Movil</label>
                            <input validate="text" id="txtTelefonoMovilModal" type="text" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">E-mail</label>
                            <input id="txtEmailModal" type="email" validate="email" class="form-control" >
                        </div>
                        <div class="col-xs-4">
                            <label for="exampleInputEmail1">Estado</label>
                            <select validate="select" id="cboEstadoModal" class="selectpicker" >
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option>
                            </select>
                        </div>
                    </div>

                    <div class="row" style="padding-bottom: 12px">                    
                        <div class="col-xs-3">
                            <label for="exampleInputEmail1">Especialidad</label>
                            <select validate="select" id="cboEspecialidades" data-live-search="true" class="selectpicker" multiple title="Seleccione">
                                        <%
                                    EspecialidadDao esp = new EspecialidadDaoImp();
                                    List<Especialidad> list = esp.list();
                                    for (Especialidad elem : list) {%>
                                <option value="<%= elem.getId()%>"><%=elem.getDescripcion()%></option>
                                <% }%>
                            </select>
                        </div>


                    </div>

                </div>
                <div class="modal-footer">

                    <button id="btnActualizar" type="button"  class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </div>
    </div>


</form>
    
</div>
     </div>