/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.modelo.ipDaoImp;

import java.util.List;
import mvc.controlador.C_BD;
import mvc.controlador.con_db;
import mvc.controlador.entidades.ip.Obstetricos;
import mvc.modelo.ipDao.ObstetricosDao;

/**
 *
 * @author kebryan
 */
public class ObstetricosDaoImp implements ObstetricosDao {

    C_BD conn;

    @Override
    public List<Obstetricos> list() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Obstetricos edit(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean save(Obstetricos value) {
        this.conn = con_db.open(con_db.MSSQL_IP);
        String sql = "";
        try {
            if (value.getId() == 0) {
                sql = "INSERT INTO [dbo].[obstetricos]([fpp],[gestas],[abortos],[partos],[cesareas],[nacidosVivos],[nacidosMuertos],[hijosVivos],[muertos],[observaciones],[idPaciente])\n"
                        + "     VALUES\n"
                        + "           (" + value.getFpp() + "\n"
                        + "           ," + value.getGestas()+ "\n"
                        + "           ," + value.getAbortos()+ "\n"
                        + "           ," + value.getPartos()+ "\n"
                        + "           ," + value.getCesareas()+ "\n"
                        + "           ," + value.getNacidosVivos()+ "\n"
                        + "           ," + value.getNacidosMuertos()+ "\n"
                        + "           ," + value.getHijosVivos()+ "\n"
                        + "           ," + value.getMuertos()+ "\n"
                        + "           ," + value.getObservaciones()+ "\n"
                        + "           ," + value.getIdPaciente().getId()+ ")";
            } else {
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
