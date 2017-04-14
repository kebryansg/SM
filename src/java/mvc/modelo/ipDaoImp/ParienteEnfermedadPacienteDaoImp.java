/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.modelo.ipDaoImp;

import java.util.List;
import mvc.controlador.C_BD;
import mvc.controlador.con_db;
import mvc.controlador.entidades.ip.ParienteEnfermedadPaciente;
import mvc.modelo.ipDao.ParienteEnfermedadPacienteDao;

/**
 *
 * @author kebryan
 */
public class ParienteEnfermedadPacienteDaoImp implements ParienteEnfermedadPacienteDao {

    C_BD conn;

    @Override
    public List<ParienteEnfermedadPaciente> list() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ParienteEnfermedadPaciente edit(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean save(ParienteEnfermedadPaciente value) {
        this.conn = con_db.open(con_db.MSSQL_IP);
        String sql = "";
        try {
            if (value.getId() == 0) {
                sql = "INSERT INTO [dbo].[pariente_enfermedad_paciente]([idPariente],[idEnfermedad],[idPaciente])\n"
                        + "     VALUES\n"
                        + "           (" + value.getIdPariente().getId() + "\n"
                        + "           ," + value.getIdEnfermedad().getId() + "\n"
                        + "           ," + value.getIdPaciente().getId() + ")";
            } else {
            }
            conn.execute(sql);
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
