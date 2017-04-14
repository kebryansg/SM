/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.servlet;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;
import mvc.controlador.entidades.ip.Enfermedad;
import mvc.controlador.entidades.ip.Obstetricos;
import mvc.controlador.entidades.ip.Paciente;
import mvc.controlador.entidades.ip.ParienteEnfermedadPaciente;
import mvc.controlador.entidades.ip.Parientes;
import mvc.controlador.entidades.ip.Parroquia;
import mvc.modelo.ipDaoImp.ObstetricosDaoImp;
import mvc.modelo.ipDaoImp.PacienteDaoImp;
import mvc.modelo.ipDaoImp.ParienteEnfermedadPacienteDaoImp;
import test.test;

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
        switch (op) {
            case "editar":

                break;
            case "save":
                Paciente paciente = new Paciente(0);
                int idPaciente = test.getID("paciente") + 1;
                paciente.setCedula(request.getParameter("paciente[cedula]"));
                paciente.setNombre1(request.getParameter("paciente[primerNombre]"));
                paciente.setNombre2(request.getParameter("paciente[segundoNombre]"));
                paciente.setApellido1(request.getParameter("paciente[primerApellido]"));
                paciente.setApellido2(request.getParameter("paciente[segundoApellido]"));
                paciente.setFechaNacimiento(test.fechaSQL(request.getParameter("paciente[fechaNac]")));
                
                paciente.setNacionalidad(request.getParameter("paciente[nacionalidad]"));
                paciente.setTelefonoDomicilio(request.getParameter("paciente[telCasa]"));
                paciente.setEmail(request.getParameter("paciente[email]"));
                paciente.setEtnia(Integer.parseInt(request.getParameter("paciente[etnia]")));
                paciente.setDomicilio(request.getParameter("paciente[domicilio]"));
                paciente.setDiscapacidad(request.getParameter("paciente[discapacidad]").equals("true") ? 1 : 0);
                paciente.setCiudad(request.getParameter("paciente[ciudad]"));
                paciente.setEstadoCivil(request.getParameter("paciente[estadoCivil]"));
                paciente.setTelefonoOficina(request.getParameter("paciente[telOficina]"));
                Boolean sexo = request.getParameter("paciente[genero]").equals("1") ? true : false;
                paciente.setSexo(sexo);
                paciente.setPaisNacimiento(request.getParameter("paciente[paisNac]"));
                paciente.setLugarNacimiento(request.getParameter("paciente[lugarNac]"));
                paciente.setIdParroquia(new Parroquia(Integer.parseInt(request.getParameter("paciente[parroquia]"))));
                
                
                paciente.setImagen("imagen/paciente/p_" + idPaciente + ".jpg");
                new PacienteDaoImp().save(paciente);
                paciente.setId(idPaciente);
                saveFoto(request.getParameter("paciente[imagen]"), paciente.getId());

                if (!sexo) {
                    Obstetricos obstetricos = new Obstetricos(0);
                    obstetricos.setGestas(Integer.parseInt(request.getParameter("paciente[gestacion]")));
                    obstetricos.setAbortos(Integer.parseInt(request.getParameter("paciente[abortos]")));
                    obstetricos.setCesareas(Integer.parseInt(request.getParameter("paciente[cesareas]")));
                    obstetricos.setFpp(test.fechaSQL(request.getParameter("paciente[fpp]")));
                    obstetricos.setHijosVivos(Integer.parseInt(request.getParameter("paciente[hijosVivos]")));
                    obstetricos.setIdPaciente(paciente);//Agregar Id
                    obstetricos.setMuertos(Integer.parseInt(request.getParameter("paciente[hijosMuertos]")));
                    obstetricos.setNacidosMuertos(Integer.parseInt(request.getParameter("paciente[nacidoMuerto]")));
                    obstetricos.setNacidosVivos(Integer.parseInt(request.getParameter("paciente[nacidoVivo]")));
                    obstetricos.setObservaciones("");
                    obstetricos.setPartos(Integer.parseInt(request.getParameter("paciente[partos]")));
                    new ObstetricosDaoImp().save(obstetricos);
                }
                //String arrayLis = request.getParameter("newAntecedentes");
                String[] parientes_enfermedad = request.getParameterValues("newAntecedentes[]");
                for (String pariente_enfermedad : parientes_enfermedad) {
                    ParienteEnfermedadPaciente par_enfer = new ParienteEnfermedadPaciente(0);
                    par_enfer.setIdPaciente(paciente);
                    par_enfer.setIdEnfermedad(new Enfermedad(Integer.parseInt(pariente_enfermedad.split(":")[0])));
                    par_enfer.setIdPariente(new Parientes(Integer.parseInt(pariente_enfermedad.split(":")[1])));
                    new ParienteEnfermedadPacienteDaoImp().save(par_enfer);
                }
                break;
        }
    }

    public void saveFoto(String data, int idPaciente) throws FileNotFoundException, IOException {
        String path = test.ruta() + "imagen/paciente/p_" + idPaciente + ".jpg";
        byte[] imageByteArray = DatatypeConverter.parseBase64Binary(data);
        try (FileOutputStream fileout = new FileOutputStream(path)) {
            fileout.write(imageByteArray);
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
