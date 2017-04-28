<%-- 
    Document   : medico
    Created on : 24-mar-2017, 13:01:43
    Author     : Byron
--%>

<%@page import="mvc.modelo.smDaoImp.MedicoEspecialidadDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.MedicoEspecialidad"%>
<%@page import="mvc.modelo.smDao.MedicoEspecialidadDao"%>
<%@page import="mvc.controlador.entidades.sm.MedicoEspecialidad"%>
<%@page import="mvc.controlador.entidades.sm.Medico"%>
<%@page import="mvc.modelo.smDaoImp.MedicoDaoImp"%>
<%@page import="mvc.modelo.smDao.MedicoDao"%>
<%@page import="java.util.List"%>
<%@page import="mvc.modelo.smDaoImp.EspecialidadDaoImp"%>
<%@page import="mvc.controlador.entidades.sm.Especialidad"%>
<%@page import="mvc.controlador.entidades.sm.Especialidad"%>
<%@page import="mvc.modelo.smDao.EspecialidadDao"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>


<script src="medico/js/registrarMedico.js" ></script>


<!DOCTYPE html>

<div class="contenedor-tabs">
    <div class="container-fluid">
        <div class="row">
            <div class="form-horizontal" >
                <div class="row" style="padding-left: 12%; padding-bottom: 12px">                   
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label for="inputUserName" >Cedula</label>
                        <input type="text" class="form-control"  maxlength="10" id="txtCedula" placeholder="Cedula">
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label for="inputUserName">Primer Nombre</label>
                        <input type="text" class="form-control" id="txtPrimerNombre" placeholder="Primer nombre">                                    
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">                                    
                        <label for="inputUserName">Segundo Nombre</label>
                        <input type="text" class="form-control" id="txtSegundoNombre" placeholder="Segundo nombre">
                    </div>
                </div>

                <div class="row" style="padding-left: 12%; padding-bottom: 12px">

                    <div class="col-xs-12 col-sm-6 col-md-3">          
                        <label for="inputUserName">Primer Apellido</label>
                        <input type="text" class="form-control" id="txtPrimerApellido" placeholder="Primer apellido">
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">          
                        <label for="inputUserName">Segundo Apellido</label>
                        <input type="text" class="form-control" id="txtSegundoApellido" placeholder="Segundo apellido">
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label for="inputUserName">Domicilio *</label>                            
                        <input type="text" class="form-control" id="txtDomicilio" placeholder="Domicilio">
                    </div>


                </div>

                <div class="row" style="padding-left: 12%; padding-bottom: 12px">

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label for="inputUserName" >Ciudad *</label>                            
                        <input type="text" class="form-control" maxlength="10" id="txtCiudad" placeholder="Ciudad">
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label for="inputUserName">Teléf. Domicilio</label>                            
                        <input type="text" class="form-control" maxlength="10" id="txtTelefonoDomicilio" placeholder="Teléf. Domicilio">
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label for="inputUserName" >Teléf. Oficina</label>                            
                        <input type="text" class="form-control" maxlength="10" id="txtTelefonoOficina" placeholder="Teléf. Oficina">
                    </div>




                </div>

                <div class="row" style="padding-left: 12%; padding-bottom: 12px">


                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label for="inputUserName">Teléf. Movil</label>
                        <input type="text" class="form-control" maxlength="10" id="txtTelefonoMovil" placeholder="Teléf. Movil">
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label for="inputUserName" >E-mail*</label>                            
                        <input type="text" class="form-control" maxlength="10" id="txtEmail" placeholder="E-mail">
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3">
                        <label for="inputUserName">Especialidad *</label>                            
                        <select class="selectpicker" data-live-search="true" id="cboEspecialidad" data-width="100%" multiple >
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
        </div>
    </div>
    <div class="row" style="padding-left: 12%; text-align: right;" >
        <div class="col-xs-12">                
            <div class="col-xs-9">                
                <div class="form-group" >
                    <button id="btnGuardar" type="button" class="btn btn-primary">Guardar</button>
                    <button type="button" class="btn btn-default">Limpiar</button>
                </div>
            </div>            
        </div>                    
    </div>
</div>


<script>
    $(".selectpicker").selectpicker().selectpicker("render");
</script>                                  