package net.restservices.onlinestorebackend.model;

import javax.persistence.*;

@Entity
@Table(name = "product_statuses")
public class ProductStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String Name;

    @Column(name = "description")
    private String Description;

    public ProductStatus() {

    }

    public ProductStatus(String name, String description) {
        super();
        this.Name = name;
        this.Description = description;
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

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        this.Description = description;
    }
}
