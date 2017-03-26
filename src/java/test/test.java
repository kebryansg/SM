/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import java.util.List;
import mvc.controlador.C_BD;
import mvc.controlador.con_db;
import mvc.controlador.entidades.ip.Provincia;
import mvc.modelo.ipDao.ProvinciaDao;
import mvc.modelo.ipDaoImp.ProvinciaDaoImp;

/**
 *
 * @author kebryan
 */
public class test {
    
    public static void main(String[] args) {
        C_BD conn;
        conn = con_db.open(con_db.MSSQL_IP);
        
        ProvinciaDao provinciaDao = new ProvinciaDaoImp();
        List<Provincia> list = provinciaDao.list();
        for (Provincia provincia : list) {
            System.out.println(provincia.getDescripcion());
        }
        
    }
    
}
