<%-- 
    Document   : especialidad
    Created on : 24-mar-2017, 13:01:54
    Author     : Byron
--%>

<%@page import="mvc.controlador.conexion"%>
<%@page import="mvc.controlador.C_BD"%>

<%@page import="java.util.List"%>
<%@page import="mvc.controlador.entidades.sm.Especialidad"%>
<%@page import="mvc.modelo.smDao.EspecialidadDao"%>
<%@page import="mvc.modelo.smDaoImp.EspecialidadDaoImp"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

         <div class="row">
                    <div class="col-lg-6">
                        <h2>Listado de especialidades</h2>
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th class="col-lg-1">No.</th>
                                        <th>Descripci&oacute;n</th>
                                        <th class="col-lg-1">Acci&oacute;n</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <%
                                     EspecialidadDao esp = new EspecialidadDaoImp();
                                        List<Especialidad> list= esp.list();
                                        for(Especialidad elem: list)
                                           {
                                               %>
                                               <tr class='active'>
                                               <td><%=elem.getId()%></td>
                                               <td ><%=elem.getDescripcion()%></td>
                                               <td style="width: 20%" >   
                                                   <button class="btn btn-primary" onclick="openModal('myModal')"><span class='glyphicon glyphicon-pencil'></span> </button>                                            
                                                   <button class="btn btn-danger"><span class='glyphicon glyphicon-trash'></span></a></button>
                                        </td>                                       
                                               </tr>
                                               <%
                                           }
                                        %>       
                                    
                                        
                                       
                                                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                                        
                              
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Editar Especialidades</h4>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label class="form-control-label">Descripci&oacute;n:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
        </div>
        <div class="modal-footer">
           
        <button type="button" class="btn btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  </div>
                                
                                
                               
