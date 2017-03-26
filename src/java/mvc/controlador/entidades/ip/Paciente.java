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
@Table(name = "paciente")
@NamedQueries({
    @NamedQuery(name = "Paciente.findAll", query = "SELECT p FROM Paciente p")})
public class Paciente implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "cedula")
    private String cedula;
    @Column(name = "nombre1")
    private String nombre1;
    @Column(name = "nombre2")
    private String nombre2;
    @Column(name = "domicilio")
    private String domicilio;
    @Column(name = "nacionalidad")
    private String nacionalidad;
    @Column(name = "ciudad")
    private String ciudad;
    @Column(name = "estadoCivil")
    private String estadoCivil;
    @Column(name = "telefonoDomicilio")
    private String telefonoDomicilio;
    @Column(name = "telefonoOficina")
    private String telefonoOficina;
    @Column(name = "email")
    private String email;
    @Column(name = "sexo")
    private Boolean sexo;
    @Column(name = "paisNacimiento")
    private String paisNacimiento;
    @Column(name = "lugarNacimiento")
    private String lugarNacimiento;
    @Column(name = "fechaNacimiento")
    @Temporal(TemporalType.DATE)
    private Date fechaNacimiento;
    @Lob
    @Column(name = "foto")
    private byte[] foto;
    @Column(name = "etnia")
    private Integer etnia;
    @Column(name = "discapacidad")
    private Integer discapacidad;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idPaciente")
    private List<ParienteEnfermedadPaciente> parienteEnfermedadPacienteList;
    @JoinColumn(name = "idObstetricos", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Obstetricos idObstetricos;
    @JoinColumn(name = "idParroquia", referencedColumnName = "id")
    @ManyToOne
    private Parroquia idParroquia;

    public Paciente() {
        this.id = 0;
    }

    public Paciente(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getNombre1() {
        return nombre1;
    }

    public void setNombre1(String nombre1) {
        this.nombre1 = nombre1;
    }

    public String getNombre2() {
        return nombre2;
    }

    public void setNombre2(String nombre2) {
        this.nombre2 = nombre2;
    }

    public String getDomicilio() {
        return domicilio;
    }

    public void setDomicilio(String domicilio) {
        this.domicilio = domicilio;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(String estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public String getTelefonoDomicilio() {
        return telefonoDomicilio;
    }

    public void setTelefonoDomicilio(String telefonoDomicilio) {
        this.telefonoDomicilio = telefonoDomicilio;
    }

    public String getTelefonoOficina() {
        return telefonoOficina;
    }

    public void setTelefonoOficina(String telefonoOficina) {
        this.telefonoOficina = telefonoOficina;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getSexo() {
        return sexo;
    }

    public void setSexo(Boolean sexo) {
        this.sexo = sexo;
    }

    public String getPaisNacimiento() {
        return paisNacimiento;
    }

    public void setPaisNacimiento(String paisNacimiento) {
        this.paisNacimiento = paisNacimiento;
    }

    public String getLugarNacimiento() {
        return lugarNacimiento;
    }

    public void setLugarNacimiento(String lugarNacimiento) {
        this.lugarNacimiento = lugarNacimiento;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public byte[] getFoto() {
        return foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

    public Integer getEtnia() {
        return etnia;
    }

    public void setEtnia(Integer etnia) {
        this.etnia = etnia;
    }

    public Integer getDiscapacidad() {
        return discapacidad;
    }

    public void setDiscapacidad(Integer discapacidad) {
        this.discapacidad = discapacidad;
    }

    public List<ParienteEnfermedadPaciente> getParienteEnfermedadPacienteList() {
        return parienteEnfermedadPacienteList;
    }

    public void setParienteEnfermedadPacienteList(List<ParienteEnfermedadPaciente> parienteEnfermedadPacienteList) {
        this.parienteEnfermedadPacienteList = parienteEnfermedadPacienteList;
    }

    public Obstetricos getIdObstetricos() {
        return idObstetricos;
    }

    public void setIdObstetricos(Obstetricos idObstetricos) {
        this.idObstetricos = idObstetricos;
    }

    public Parroquia getIdParroquia() {
        return idParroquia;
    }

    public void setIdParroquia(Parroquia idParroquia) {
        this.idParroquia = idParroquia;
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
        if (!(object instanceof Paciente)) {
            return false;
        }
        Paciente other = (Paciente) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "mvc.controlador.entidades.ip.Paciente[ id=" + id + " ]";
    }
    
}
