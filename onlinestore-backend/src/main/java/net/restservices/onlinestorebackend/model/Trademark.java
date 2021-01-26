package net.restservices.onlinestorebackend.model;

import javax.persistence.*;

@Entity
@Table(name = "trademarks")
public class Trademark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String Name;

    @Column(name = "logo_name")
    private String LogoName;

    @Column(name = "logo_byte", length = 1000)
    private byte[] LogoByte;

    @Column(name = "status")
    private String Status;

    public Trademark() {
        super();
    }

    public Trademark(String name, String logoName, byte[] logoByte, String status) {
        this.Name = name;
        this.LogoName = logoName;
        this.LogoByte = logoByte;
        this.Status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        this.Name = name;
    }

    public String getLogoName() {
        return LogoName;
    }

    public void setLogoName(String logoName) {
        this.LogoName = logoName;
    }

    public byte[] getLogoByte() {
        return LogoByte;
    }

    public void setLogoByte(byte[] logoByte) {
        this.LogoByte = logoByte;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        this.Status = status;
    }
}
