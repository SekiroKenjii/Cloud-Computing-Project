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

    @Column(name = "typeName")
    private String typeName;

    @Column(name = "brandName")
    private String brandName;

    @Column(name = "lableName")
    private String lableName;



    @Column(name = "price")
    private int price;

    public Products(){

    }

    public Products(String productName, String vendorName,String typeName,String brandName,String lableName, int price) {
        super();
        this.productName = productName;
        this.vendorName = vendorName;
        this.brandName = brandName;
        this.lableName = lableName;
        this.typeName = typeName;
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

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getLableName() {
        return lableName;
    }

    public void setLableName(String lableId) {
        this.lableName = lableId;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandId) {
        this.brandName = brandId;
    }
}
