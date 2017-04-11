/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.modelo.ipDaoImp;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import mvc.controlador.C_BD;
import mvc.controlador.con_db;
import mvc.controlador.entidades.ip.Paciente;
import mvc.modelo.ipDao.PacienteDao;

/**
 *
 * @author kebryan
 */
public class PacienteDaoImp implements PacienteDao {

    C_BD conn;

    @Override
    public List<Paciente> list() {
        this.conn = con_db.open(con_db.MSSQL_IP);
        List<Paciente> list = new ArrayList<>();
        ResultSet rs = this.conn.query("select * from paciente");
        try {
            while (rs.next()) {
                Paciente value = new Paciente();
                value.setCedula(rs.getNString("cedula"));
                list.add(value);
            }
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        } finally {
            this.conn.close();
        }
        return list;
    }

    @Override
    public Paciente edit(int id) {
        this.conn = con_db.open(con_db.MSSQL_IP);
        ResultSet rs = this.conn.query("select * from paciente where id = '" + id + "'");
        Paciente value = new Paciente();
        try {
            while (rs.next()) {
                value.setCedula(rs.getNString("cedula"));
            }
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        } finally {
            this.conn.close();
        }
        return value;
    }

    @Override
    public boolean save(Paciente value) {
        this.conn = con_db.open(con_db.MSSQL_IP);
        String sql = "";
        try {
            if (value.getId() == 0) {
                sql = "INSERT INTO [dbo].[paciente]([cedula],[nombre1],[nombre2],[apellido1],[apellido2],[domicilio],[nacionalidad],[ciudad],[estadoCivil],[telefonoDomicilio],[telefonoOficina],[email],[sexo],[paisNacimiento],[lugarNacimiento],[fechaNacimiento],[etnia],[discapacidad],[idParroquia],[imagen])\n"
                        + "     VALUES\n"
                        + "           ('" + value.getCedula() + "'\n"
                        + "           ,'" + value.getNombre1() + "'\n"
                        + "           ,'" + value.getNombre2() + "'\n"
                        + "           ,'" + value.getApellido1() + "'\n"
                        + "           ,'" + value.getApellido2() + "'\n"
                        + "           ,'" + value.getDomicilio() + "'\n"
                        + "           ,'" + value.getNacionalidad() + "'\n"
                        + "           ,'" + value.getCiudad() + "'\n"
                        + "           ,'" + value.getEstadoCivil() + "'\n"
                        + "           ,'" + value.getTelefonoDomicilio() + "'\n"
                        + "           ,'" + value.getTelefonoOficina() + "'\n"
                        + "           ,'" + value.getEmail() + "'\n"
                        + "           ,'" + test.test.Sexo(value.getSexo()) + "'\n"
                        + "           ,'" + value.getPaisNacimiento() + "'\n"
                        + "           ,'" + value.getLugarNacimiento() + "'\n"
                        + "           ,'" + test.test.SQLSave(value.getFechaNacimiento()) + "'\n"
                        + "           ,'" + value.getEtnia() + "'\n"
                        + "           ,'" + value.getDiscapacidad() + "'\n"
                        + "           ,'" + value.getIdParroquia().getId() + "'\n"
                        + "           ,'" + value.getImagen() + "')";
            } else {
                sql = "";
            }
            //conn.execute(sql);
            System.out.println(sql);
            return true;
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
            return false;
        } finally {
            this.conn.close();
        }
    }

    @Override
    public boolean delete(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
