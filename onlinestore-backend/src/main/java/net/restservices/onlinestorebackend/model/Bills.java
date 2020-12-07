package net.restservices.onlinestorebackend.model;

import javax.persistence.*;

@Entity
@Table(name = "bills")
public class Bills {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "productId")
    private long proId;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "type")
    private String type;

    @Column(name = "totalPrice")
    private int total;



    public Bills(){

    }

    public Bills(long proId, int quan, String type, int total) {
        super();
        this.proId = proId;
        this.quantity = quan;
        this.type = type;
        this.total = total;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getProductId() {
        return proId;
    }

    public void setProductId(long l) {
        this.proId = l;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quan) {
        this.quantity = quan;
    }

    public String getType()
    {
        return type;
    }

    public void setType(String type){
        this.type = type;
    }

    public int getTotalPrice(){
        return total;
    }

    public void setTotalPrice(int total)
    {
        this.total = total;
    }
}
