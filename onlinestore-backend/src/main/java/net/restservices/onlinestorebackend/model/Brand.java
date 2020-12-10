package net.restservices.onlinestorebackend.model;

import javax.persistence.*;

@Entity
@Table(name = "brands")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String NameBrand;

    public Brand(){

    }

    public Brand(String name) {
        super();
        this.NameBrand = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNameBrand() {
        return NameBrand;
    }

    public void setNameBrand(String name) {
        this.NameBrand = name;
    }

}