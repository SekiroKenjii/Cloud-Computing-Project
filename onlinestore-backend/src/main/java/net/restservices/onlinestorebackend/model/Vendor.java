package net.restservices.onlinestorebackend.model;

import javax.persistence.*;

@Entity
@Table(name = "vendors")
public class Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String Name;

    @Column(name = "contact_name")
    private String ContactName;

    @Column(name = "contact_title")
    private String ContactTitle;

    @Column(name = "address")
    private String Address;

    @Column(name = "phone_number")
    private String PhoneNumber;

    @Column(name = "home_page")
    private String HomePage;

    public Vendor(){

    }

    public Vendor(String name, String contactName, String contactTitle, String address, String phoneNumber, String homePage) {
        super();
        Name = name;
        ContactName = contactName;
        ContactTitle = contactTitle;
        Address = address;
        PhoneNumber = phoneNumber;
        HomePage = homePage;
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

    public String getContactName() {
        return ContactName;
    }

    public void setContactName(String contactName) {
        this.ContactName = contactName;
    }

    public String getContactTitle() {
        return ContactTitle;
    }

    public void setContactTitle(String contactTitle) {
        this.ContactTitle = contactTitle;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        this.Address = address;
    }

    public String getPhoneNumber() {
        return PhoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.PhoneNumber = phoneNumber;
    }

    public String getHomePage() {
        return HomePage;
    }

    public void setHomePage(String homePage) {
        this.HomePage = homePage;
    }
}
