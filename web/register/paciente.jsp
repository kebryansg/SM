<%@page import="mvc.controlador.entidades.ip.Provincia"%>
<%@page import="java.util.List"%>
<%@page import="mvc.modelo.ipDao.ProvinciaDao"%>
<%@page import="mvc.modelo.ipDaoImp.ProvinciaDaoImp"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="contenedor-tabs">
    <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#ip">Informacion personal</a></li>
        <li><a data-toggle="tab" href="#antecedentes">Antecedentes</a></li>
        <li><a data-toggle="tab" href="#obstetricia">Obstetricia</a></li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade in active" id="ip" style="padding-top: 10px;">
            <div class="form-horizontal">
                <div class="row">
                    <div class="col-sm-6" >

                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Cedula *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" id="idCedula" maxlength="10" id="inputUserName" placeholder="Cedula">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-sm-3">Nombres *</label>
                            <div class="form-inline">
                                <input type="text" class="form-control" id="primerNombre" placeholder="Primer nombre">
                                <input type="text" class="form-control" id="segundoNombre" placeholder="Segundo nombre">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-sm-3">Apellidos *</label>
                            <div class="form-inline">
                                <input type="text" class="form-control" id="primerApellido" placeholder="Primer apellido">
                                <input type="text" class="form-control" id="segundoApellido" placeholder="Segundo apellido">
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Fecha Nac. *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" maxlength="10" id="inputUserName" placeholder="Fecha Nacimiento">
                            </div>
                        </div>


                    </div>
                    <div class="col-sm-3">
                        asdads
                        <img src="" class="img-responsive" height="150"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Nacionalidad *</label>
                            <div class="col-md-8">
                                <select class="form-control">
                                    <option value="1">Ecuatoriano</option>
                                    <option value="2">Extranjero</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Tef. Casa *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" maxlength="10" id="inputUserName" placeholder="Tef. Casa">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">E-mail *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" maxlength="10" id="inputUserName" placeholder="E-mail">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Etnia *</label>
                            <div class="col-md-8">
                                <select class="form-control">
                                    <option value="1">Mulato</option>
                                    <option value="2">Casado</option>
                                    <option value="3">Divorciado</option>
                                    <option value="4">Viudo</option>
                                    <option value="5">Union libre</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Domicilio *</label>
                            <div class="col-md-8">
                                <textarea class="form-control" rows="3" id="comment"></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Discapacidad *</label>
                            <div class="col-md-8">
                                <label><input type="checkbox" value=""></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Cuidad *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" maxlength="10" id="inputUserName" placeholder="Ciudad">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Estado civil *</label>
                            <div class="col-md-8">
                                <select class="form-control">
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
                                <input type="text" class="form-control" maxlength="10" id="inputUserName" placeholder="Tef. Oficina">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Género *</label>
                            <div class="col-md-8">
                                <select class="form-control">
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">E-mail *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" maxlength="10" id="inputUserName" placeholder="E-mail">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Pais Nac. *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" maxlength="10" id="inputUserName" placeholder="Pais Nacimiento">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputUserName" class="control-label col-md-3">Lugar Nac. *</label>
                            <div class="col-md-8">
                                <input type="text" class="form-control" maxlength="10" id="inputUserName" placeholder="Lugar Nacimiento">
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
        <div class="tab-pane fade" id="antecedentes">
            antecedentes
        </div>
        <div class="tab-pane fade" id="obstetricia">
            obstetricia
        </div>
    </div>
</div>