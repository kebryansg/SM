<%-- 
    Document   : prueba
    Created on : 13-abr-2017, 15:20:01
    Author     : kebryan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>

        <link href="resources/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="resources/bootstrap/css/bootstrap-datetimepicker.css" rel="stylesheet" type="text/css"/>



    </head>
    <body>
        <label for="dtp_input2" class="col-md-2 control-label">Date Picking</label>
        <div class="input-group date form_date col-md-5" data-date="" data-date-format="yyyy-MM-dd" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
            <input class="form-control" size="16" type="text" value="" readonly>
            <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
        </div>
    </body>
    <script src="resources/js/jquery.min.js" type="text/javascript"></script>
    <script src="resources/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="resources/bootstrap/js/bootstrap-datetimepicker.js" type="text/javascript"></script>
    <script src="resources/bootstrap/js/bootstrap-datetimepicker.es.js" type="text/javascript"></script>
    <script>
        $('.form_date').datetimepicker({
            language: 'es',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });
    </script>        

</html>
