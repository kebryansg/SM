/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mvc.controlador.entidades.sm;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
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
@Table(name = "ingresos")
@NamedQueries({
    @NamedQuery(name = "Ingresos.findAll", query = "SELECT i FROM Ingresos i")})
public class Ingresos implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "fechaEntrada")
    @Temporal(TemporalType.DATE)
    private Date fechaEntrada;
    @Column(name = "fechaSalida")
    @Temporal(TemporalType.DATE)
    private Date fechaSalida;
    @Column(name = "hora")
    @Temporal(TemporalType.TIME)
    private Date hora;
    @Column(name = "sos")
    private Boolean sos;
    @Column(name = "condicionEgreso")
    private Boolean condicionEgreso;
    @Lob
    @Column(name = "definitivoEgreso")
    private String definitivoEgreso;
    @Lob
    @Column(name = "secundarioEgreso")
    private String secundarioEgreso;
    @Lob
    @Column(name = "secundarioEgreso2")
    private String secundarioEgreso2;
    @Lob
    @Column(name = "causaExterna")
    private String causaExterna;
    @Lob
    @Column(name = "codigoDiagnosticoDefinitivo")
    private String codigoDiagnosticoDefinitivo;
    @JoinColumn(name = "idCaso", referencedColumnName = "id")
    @ManyToOne
    private Caso idCaso;
    @JoinColumn(name = "idEspecialidadEgreso", referencedColumnName = "id")
    @ManyToOne
    private EspecialidadEgreso idEspecialidadEgreso;
    @JoinColumn(name = "idTipoIngreso", referencedColumnName = "id")
    @ManyToOne
    private TipoIngreso idTipoIngreso;
    @OneToMany(mappedBy = "idIngreso")
    private List<DetalleIngresos> detalleIngresosList;

    public Ingresos() {
    }

    public Ingresos(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getFechaEntrada() {
        return fechaEntrada;
    }

    public void setFechaEntrada(Date fechaEntrada) {
        this.fechaEntrada = fechaEntrada;
    }

    public Date getFechaSalida() {
        return fechaSalida;
    }

    public void setFechaSalida(Date fechaSalida) {
        this.fechaSalida = fechaSalida;
    }

    public Date getHora() {
        return hora;
    }

    public void setHora(Date hora) {
        this.hora = hora;
    }

    public Boolean getSos() {
        return sos;
    }

    public void setSos(Boolean sos) {
        this.sos = sos;
    }

    public Boolean getCondicionEgreso() {
        return condicionEgreso;
    }

    public void setCondicionEgreso(Boolean condicionEgreso) {
        this.condicionEgreso = condicionEgreso;
    }

    public String getDefinitivoEgreso() {
        return definitivoEgreso;
    }

    public void setDefinitivoEgreso(String definitivoEgreso) {
        this.definitivoEgreso = definitivoEgreso;
    }

    public String getSecundarioEgreso() {
        return secundarioEgreso;
    }

    public void setSecundarioEgreso(String secundarioEgreso) {
        this.secundarioEgreso = secundarioEgreso;
    }

    public String getSecundarioEgreso2() {
        return secundarioEgreso2;
    }

    public void setSecundarioEgreso2(String secundarioEgreso2) {
        this.secundarioEgreso2 = secundarioEgreso2;
    }

    public String getCausaExterna() {
        return causaExterna;
    }

    public void setCausaExterna(String causaExterna) {
        this.causaExterna = causaExterna;
    }

    public String getCodigoDiagnosticoDefinitivo() {
        return codigoDiagnosticoDefinitivo;
    }

    public void setCodigoDiagnosticoDefinitivo(String codigoDiagnosticoDefinitivo) {
        this.codigoDiagnosticoDefinitivo = codigoDiagnosticoDefinitivo;
    }

    public Caso getIdCaso() {
        return idCaso;
    }

    public void setIdCaso(Caso idCaso) {
        this.idCaso = idCaso;
    }

    public EspecialidadEgreso getIdEspecialidadEgreso() {
        return idEspecialidadEgreso;
    }

    public void setIdEspecialidadEgreso(EspecialidadEgreso idEspecialidadEgreso) {
        this.idEspecialidadEgreso = idEspecialidadEgreso;
    }

    public TipoIngreso getIdTipoIngreso() {
        return idTipoIngreso;
    }

    public void setIdTipoIngreso(TipoIngreso idTipoIngreso) {
        this.idTipoIngreso = idTipoIngreso;
    }

    public List<DetalleIngresos> getDetalleIngresosList() {
        return detalleIngresosList;
    }

    public void setDetalleIngresosList(List<DetalleIngresos> detalleIngresosList) {
        this.detalleIngresosList = detalleIngresosList;
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
        if (!(object instanceof Ingresos)) {
            return false;
        }
        Ingresos other = (Ingresos) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mvc.controlador.entidades.sm.Ingresos[ id=" + id + " ]";
    }
    
}
