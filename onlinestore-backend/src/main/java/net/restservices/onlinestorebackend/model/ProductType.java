package net.restservices.onlinestorebackend.model;


import javax.persistence.*;

@Entity
@Table(name = "productTypes")
public class ProductType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "productTypeName")
    private String typeName;

    public ProductType(){

    }

    public ProductType(String name) {
        super();
        this.typeName = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String name) {
        this.typeName = name;
    }
}
