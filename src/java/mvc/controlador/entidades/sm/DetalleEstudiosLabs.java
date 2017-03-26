/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.controlador.entidades.sm;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author kebryan
 */
@Entity
@Table(name = "detalleEstudiosLabs")
@NamedQueries({
    @NamedQuery(name = "DetalleEstudiosLabs.findAll", query = "SELECT d FROM DetalleEstudiosLabs d")})
public class DetalleEstudiosLabs implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "descripcion")
    private String descripcion;
    @JoinColumn(name = "idEstudiosLab", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private EstudiosLaboratorio idEstudiosLab;
    @OneToMany(mappedBy = "idDetalleEstudiosLabs")
    private List<ConsultaEstudiosLabs> consultaEstudiosLabsList;

    public DetalleEstudiosLabs() {
    }

    public DetalleEstudiosLabs(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public EstudiosLaboratorio getIdEstudiosLab() {
        return idEstudiosLab;
    }

    public void setIdEstudiosLab(EstudiosLaboratorio idEstudiosLab) {
        this.idEstudiosLab = idEstudiosLab;
    }

    public List<ConsultaEstudiosLabs> getConsultaEstudiosLabsList() {
        return consultaEstudiosLabsList;
    }

    public void setConsultaEstudiosLabsList(List<ConsultaEstudiosLabs> consultaEstudiosLabsList) {
        this.consultaEstudiosLabsList = consultaEstudiosLabsList;
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
        if (!(object instanceof DetalleEstudiosLabs)) {
            return false;
        }
        DetalleEstudiosLabs other = (DetalleEstudiosLabs) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mvc.controlador.entidades.sm.DetalleEstudiosLabs[ id=" + id + " ]";
    }
    
}
