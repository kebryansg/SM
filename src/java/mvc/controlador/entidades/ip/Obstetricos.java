/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.controlador.entidades.ip;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author kebryan
 */
@Entity
@Table(name = "obstetricos")
@NamedQueries({
    @NamedQuery(name = "Obstetricos.findAll", query = "SELECT o FROM Obstetricos o")})
public class Obstetricos implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "fpp")
    @Temporal(TemporalType.DATE)
    private Date fpp;
    @Column(name = "gestas")
    private Integer gestas;
    @Column(name = "abortos")
    private Integer abortos;
    @Column(name = "partos")
    private Integer partos;
    @Column(name = "cesareas")
    private Integer cesareas;
    @Column(name = "nacidosVivos")
    private Integer nacidosVivos;
    @Column(name = "nacidosMuertos")
    private Integer nacidosMuertos;
    @Column(name = "hijosVivos")
    private Integer hijosVivos;
    @Column(name = "muertos")
    private Integer muertos;
    @Lob
    @Column(name = "observaciones")
    private String observaciones;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idObstetricos")
    private List<Paciente> pacienteList;

    public Obstetricos() {
    }

    public Obstetricos(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getFpp() {
        return fpp;
    }

    public void setFpp(Date fpp) {
        this.fpp = fpp;
    }

    public Integer getGestas() {
        return gestas;
    }

    public void setGestas(Integer gestas) {
        this.gestas = gestas;
    }

    public Integer getAbortos() {
        return abortos;
    }

    public void setAbortos(Integer abortos) {
        this.abortos = abortos;
    }

    public Integer getPartos() {
        return partos;
    }

    public void setPartos(Integer partos) {
        this.partos = partos;
    }

    public Integer getCesareas() {
        return cesareas;
    }

    public void setCesareas(Integer cesareas) {
        this.cesareas = cesareas;
    }

    public Integer getNacidosVivos() {
        return nacidosVivos;
    }

    public void setNacidosVivos(Integer nacidosVivos) {
        this.nacidosVivos = nacidosVivos;
    }

    public Integer getNacidosMuertos() {
        return nacidosMuertos;
    }

    public void setNacidosMuertos(Integer nacidosMuertos) {
        this.nacidosMuertos = nacidosMuertos;
    }

    public Integer getHijosVivos() {
        return hijosVivos;
    }

    public void setHijosVivos(Integer hijosVivos) {
        this.hijosVivos = hijosVivos;
    }

    public Integer getMuertos() {
        return muertos;
    }

    public void setMuertos(Integer muertos) {
        this.muertos = muertos;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public List<Paciente> getPacienteList() {
        return pacienteList;
    }

    public void setPacienteList(List<Paciente> pacienteList) {
        this.pacienteList = pacienteList;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Obstetricos)) {
            return false;
        }
        Obstetricos other = (Obstetricos) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mvc.controlador.entidades.ip.Obstetricos[ id=" + id + " ]";
    }
    
}
