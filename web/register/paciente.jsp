<%@page import="mvc.controlador.entidades.ip.Parientes"%>
<%@page import="mvc.modelo.ipDaoImp.ParientesDaoImp"%>
<%@page import="mvc.modelo.ipDaoImp.EnfermedadDaoImp"%>
<%@page import="mvc.controlador.entidades.ip.Enfermedad"%>
<%@page import="mvc.modelo.ipDao.EnfermedadDao"%>
<%@page import="mvc.controlador.entidades.ip.Provincia"%>
<%@page import="java.util.List"%>
<%@page import="mvc.modelo.ipDao.ProvinciaDao"%>
<%@page import="mvc.modelo.ipDaoImp.ProvinciaDaoImp"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="contenedor-tabs">
    <div class="row ">
        <div class="col-md-12">
            <div class="pull-right">
                <button class="btn btn-info" id="cancelPaciente">Cancelar</button>
                <button class="btn btn-info" id="savePaciente">Guardar</button>
            </div>       

        </div>
    </div>
    <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#ip">Informacion personal</a></li>
        <li><a data-toggle="tab" href="#antecedentes">Antecedentes</a></li>
        <li id="tabObstetricia" class="disabledTab"><a data-toggle="tab" href="#obstetricia">Obstetricia</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade in active" id="ip" style="padding-top: 10px;">
            <div class="form-horizontal">
                <div class="row">
                    <div class="col-sm-6">

                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Cedula *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="pac_Cedula" maxlength="10" id="inputUserName" placeholder="Cedula">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-sm-3">Nombres *</label>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="pac_primerNombre" placeholder="Primer nombre">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="pac_segundoNombre" placeholder="Segundo nombre">
                            </div>

                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-sm-3">Apellidos *</label>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="pac_primerApellido" placeholder="Primer apellido">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="pac_segundoApellido" placeholder="Segundo apellido">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Fecha Nac. *</label>
                            <div class="col-md-8">
                                <!--<input class="form-control" id="pac_FechaNac" type="text">-->
                                <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                                    <input class="form-control" id="pac_FechaNac" size="16" type="text" value="" readonly>
                                    <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div id="contenedorImg" >
                        <div>
                            <img src="resources/img/user.png" id="pac_imagen" class="img-thumbnail" height="150" width="150"/>  
                        </div>

                        <div class="btn-foto" >
                            <input type="file" id="file_imagen" style="display: none;" >      
                            <button class="btn btn-info" id="btnAddPhoto"><i class="fa fa-camera"></i></button>
                            <button class="btn btn-danger" id="btnRemovePhoto"><i class="fa fa-remove"></i></button>
                        </div>       
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Nacionalidad *</label>
                            <div class="col-md-8">
                                <select class="form-control" id="pac_nacionalidad">
                                    <option value="1">Ecuatoriano</option>
                                    <option value="2">Extranjero</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Tef. Casa *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" maxlength="10" id="pac_TelCasa" placeholder="Tef. Casa">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">E-mail *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control"  id="pac_Email" placeholder="E-mail">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Etnia *</label>
                            <div class="col-md-8">
                                <select class="form-control" id="pac_Etnia">
                                    <option value="1">Indigena</option>
                                    <option value="2">Afroecuatoriano</option>
                                    <option value="3">Negro(a)</option>
                                    <option value="4">Mulato(a)</option>
                                    <option value="5">Montubio(a)</option>
                                    <option value="6">Mestizo(a)</option>
                                    <option value="7">Blanco(a)</option>
                                    <option value="8">Otro(a)</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Domicilio *</label>
                            <div class="col-md-8">
                                <textarea class="form-control" rows="3" id="pac_Domicilio"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Discapacidad *</label>
                            <div class="col-md-8">
                                <label><input type="checkbox" value="" id="pac_Discapacidad"></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Cuidad *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control"  id="pac_Ciudad" placeholder="Ciudad">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Estado civil *</label>
                            <div class="col-md-8">
                                <select class="form-control" id="pac_EstadoCivil">
                                    <option value="1">Soltero</option>
                                    <option value="2">Casado</option>
                                    <option value="3">Divorciado</option>
                                    <option value="4">Viudo</option>
                                    <option value="5">Union libre</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Tef. Oficina *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" maxlength="10" id="pac_TelOficina" placeholder="Tef. Oficina">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Género *</label>
                            <div class="col-md-8">
                                <select class="form-control" id="pac_Genero">
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Pais Nac. *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control"  id="pac_PaisNac" placeholder="Pais Nacimiento">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Lugar Nac. *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control"  id="pac_LugarNac" placeholder="Lugar Nacimiento">
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label col-md-3">Provincia *</label>
                            <div class="col-md-8">
                                <select class="form-control" id="cboProvincia">
                                    <option value="0">Seleccione una</option>
                                    <%
                                        ProvinciaDao p = new ProvinciaDaoImp();
                                        List<Provincia> ps = p.list();
                                        for (Provincia provincia : ps) {%>
                                    <option value="<%= provincia.getId()%>"><%= provincia.getDescripcion()%></option>  
                                    <% }%>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-md-3">Parroquia *</label>
                            <div class="col-md-8">
                                <select class="form-control" id="cboParroquia">

                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label col-md-3">Canton *</label>
                            <div class="col-md-8">
                                <select class="form-control" id="cboCanton">

                                </select>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
        <div class="tab-pane fade " id="antecedentes" style="padding-top: 10px;">
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <td> Enfermedad</td>
                            <%
                                List<Parientes> parientes = new ParientesDaoImp().list();
                                for (Parientes pariente : parientes) {%>
                            <td><%= pariente.getParentesco()%></td>        
                            <% } %>
                        </tr>
                    </thead>
                    <tbody>
                        <%
                            List<Enfermedad> enfermedades = new EnfermedadDaoImp().list();
                            for (Enfermedad enfermedad : enfermedades) {%>
                        <tr>
                            <td><%= enfermedad.getNombres()%></td>
                            <% for (Parientes pariente : parientes) {%>
                            <td><input type="checkbox" antecedentes data-id="0" dEnfermedad="<%= enfermedad.getId()%>" dParient="<%= pariente.getId()%>"> </td>
                                <% } %>
                        </tr>

                        <% }%>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="tab-pane fade" id="obstetricia" style="padding-top: 10px;">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">F.P.P *</label>
                            <div class="col-md-5">
                                <!--<input class="form-control date" id="pac_FPP" type="text">-->
                                <div class="input-group date form_date" data-date="" data-date-format="yyyy-mm-dd">
                                    <input class="form-control" id="pac_FPP" size="16" type="text" value="" readonly>
                                    <!--<span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>-->
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">

                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Gestacion</label>
                            <div class="col-md-5">
                                <input class="form-control" id="pac_Gestacion"  type="number" value="0" min="0" max="10">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Abortos</label>
                            <div class="col-md-5">
                                <input class="form-control" id="pac_Abortos"  type="number" value="0" min="0" max="10">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-horizontal">


                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Partos</label>
                            <div class="col-md-5">
                                <input class="form-control" id="pac_Partos" type="number" value="0" min="0" max="10">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Cesareas</label>
                            <div class="col-md-5">
                                <input class="form-control" id="pac_Cesareas" type="number" value="0" min="0" max="10">
                            </div>
                        </div>
                    </div>       

                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-horizontal">
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Nacido vivos</label>
                            <div class="col-md-5">
                                <input class="form-control" id="pac_NacidoVivo"  type="number" value="0" min="0" max="10">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Nacidos muertos</label>
                            <div class="col-md-5">
                                <input class="form-control" id="pac_NacidoMuerto"  type="number" value="0" min="0" max="10">
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-horizontal">


                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Hijos vivos</label>
                            <div class="col-md-5">
                                <input class="form-control" id="pac_HijosVivos" type="number" value="0" min="0" max="10">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Hijos Muertos</label>
                            <div class="col-md-5">
                                <input class="form-control" id="pac_HijosMuertos"  type="number" value="0" min="0" max="10">
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        </div>
    </div>
</div>

