<%-- 
    Document   : medico
    Created on : 24-mar-2017, 13:01:43
    Author     : Byron
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="container">
    <div class="panel panel-primary">
        <div class="panel-heading">Ingreso de Pacientes</div>
        <div class="panel-body">
            <form id="form" class="form-horizontal" role="form">

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="ejemplo_email_3" class="col-md-4 control-label" name="nombre">Primer Nombre</label>

                        <div class="col-md-8">
                            <input class="form-control" name="text_nom1" id="text_nom1" required/>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="ejemplo_email_3" class="col-md-5 col-lg-4 control-label">Segundo Nombre</label>

                        <div class="col-md-7 col-lg-8">
                            <input class="form-control" name="text_nom2" id="text_nom2">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="ejemplo_email_3" class="col-md-4 control-label">Primer Apellido</label>

                        <div class="col-md-8">
                            <input class="form-control" name="text_ape1" id="text_ape1">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="ejemplo_email_3" class="col-md-5 col-lg-4 control-label">Segundo Apellido</label>

                        <div class="col-md-7 col-lg-8">
                            <input class="form-control" name="text_ape2" id="text_ape2">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="ejemplo_email_3" class="col-md-4 control-label">Ciudad</label>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-xs-4 col-sm-3 col-md-4 col-lg-4">
                                    <input class="form-control" id="ejemplo_password_3" name="text_ciu" id="text_ciu">
                                </div>
                                <div class="col-xs-8 col-sm-9 col-md-8 col-lg-8">
                                    <input class="form-control" id="ejemplo_password_3" name="text_ciu" id="text_ciu">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="ejemplo_email_3" class="col-md-5 col-lg-4 control-label">Departamento</label>

                        <div class="col-md-7 col-lg-8">
                            <input class="form-control" id="ejemplo_password_3" name="text_dep" id="text_dep">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-offset-5 col-sm-2 text-center">
                        <div class="btn-group" data-toggle="buttons">
                            <button type="button" id="btn_enviar" class="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>
</div>