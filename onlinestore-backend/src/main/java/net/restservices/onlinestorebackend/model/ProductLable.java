package net.restservices.onlinestorebackend.model;
import javax.persistence.*;


@Entity
@Table(name = "lables")
public class ProductLable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "nameLable")
    private String lable;

    public ProductLable(){

    }

    public ProductLable(String name) {
        super();
        this.lable = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLable() {
        return lable;
    }

    public void setLable(String name) {
        this.lable = name;
    }
}
