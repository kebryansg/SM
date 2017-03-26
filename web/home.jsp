<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Sistema Mèdico</title>
        <link href="resources/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="resources/font-awesome/css/font-awesome.min.css" rel="stylesheet">
        <link href="resources/css/style_home.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div class="fill">
            <div class="header">
                <h1 class="text-center">Sistema Medico</h1>

            </div>
            <div class="body">

                <div class="menu-lateral">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                        Paciente</a>
                                </h4>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse in">
                                <div class="panel-body menu-body">
                                    <div class="list-group">
                                        <a class="list-group-item" data-url="Registrar Paciente" href="#"><i class="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp; Registrar Paciente</a>
                                        <a class="list-group-item" data-url="Buscar Paciente" href="#"><i class="fa fa-address-book fa-fw" aria-hidden="true"></i>&nbsp; Buscar Paciente</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                        Consultas</a>
                                </h4>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <!-- Contenido -->
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                        Collapsible Group 3</a>
                                </h4>
                            </div>
                            <div id="collapse3" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <!-- Contenido -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <a id="cerrarMenu">
                        <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
                    </a>

                </div>
                <div class="contenedor">
                    <ul class="nav nav-tabs" id="TabAdm">
                        <li class="active"><a data-toggle="tab" href="#home"><button class="close closeTab" type="button" ><i class="fa fa-close"></i></button>Home</a></li>
                        <!--<li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
                        <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>-->
                        <button class="close close-all-tab" type="button" ><i class="fa fa-close"></i></button>
                    </ul>
                    

                    <div class="tab-content">
                        <div id="home" class="tab-pane fade in active">
                            <%@include file="register/paciente.jsp" %>
                        </div>
                        <!--<div id="menu1" class="tab-pane fade">
                            <h3>Menu 1</h3>
                            <p>Some content in menu 1.</p>
                        </div>
                        <div id="menu2" class="tab-pane fade">
                            <h3>Menu 2</h3>
                            <p>Some content in menu 2.</p>
                        </div>-->
                    </div>


                    <!--Contenido-->
                    <!--<div>
                        <div class="operationDiv">
                            <button type="submit" class="btn" id="composeButton">Compose</button>
                        </div>
                    </div>-->



                </div>

            </div>
            <!--<div class="footer">
                <label class="right">Soft @2017</label>
            </div>-->

            <script src="resources/js/jquery.min.js"></script>
            <script src="resources/bootstrap/js/bootstrap.min.js"></script>
            <script src="resources/js/style.js" type="text/javascript"></script>
            <script src="resources/js/tabPanel.js" type="text/javascript"></script>
    </body>
</html>
