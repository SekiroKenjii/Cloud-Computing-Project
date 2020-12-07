package net.restservices.onlinestorebackend.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "productName")
    private String productName;

    @Column(name = "vendorName")
    private String vendorName;

    @Column(name = "price")
    private int price;

    public Products(){

    }

    public Products(String productName, String vendorName, int price) {
        super();
        this.productName = productName;
        this.vendorName = vendorName;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
