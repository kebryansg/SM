/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import mvc.controlador.entidades.ip.Paciente;

/**
 *
 * @author kebryan
 */
public class sPaciente extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet sPaciente</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet sPaciente at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        String op = request.getParameter("op");
        //String cedula = request.getParameter("paciente[cedula]");
        switch(op){
            case "save": 
                Paciente paciente = new Paciente();
                paciente.setCedula(request.getParameter("paciente[cedula]"));
                paciente.setNombre1(request.getParameter("paciente[primerNombre]"));
                paciente.setNombre2(request.getParameter("paciente[segundoNombre]"));
                paciente.setApellido1(request.getParameter("paciente[primerApellido]"));
                paciente.setApellido2(request.getParameter("paciente[segundoApellido]"));
                paciente.setFechaNacimiento(request.getParameter("paciente[fechaNac]"));
                //paciente.setFoto(request.getParameter("paciente[imagen]"));
                paciente.setNacionalidad(request.getParameter("paciente[nacionalidad]"));
                paciente.setTelefonoDomicilio(request.getParameter("paciente[telCasa]"));
                paciente.setEtnia(request.getParameter("paciente[etnia]"));
                paciente.setDomicilio(request.getParameter("paciente[domicilio]"));
                paciente.setDiscapacidad(request.getParameter("paciente[discapacidad]"));
                paciente.setCiudad(request.getParameter("paciente[ciudad]"));
                paciente.setEstadoCivil(request.getParameter("paciente[estadoCivil]"));
                paciente.setTelefonoOficina(request.getParameter("paciente[telOficina]"));
                paciente.setSexo(request.getParameter("paciente[genero]"));
                paciente.setPaisNacimiento(request.getParameter("paciente[paisNac]"));
                paciente.setLugarNacimiento(request.getParameter("paciente[lugarNac]"));
                //paciente.setNombre1(request.getParameter("paciente[parroquia]"));
            break;
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
