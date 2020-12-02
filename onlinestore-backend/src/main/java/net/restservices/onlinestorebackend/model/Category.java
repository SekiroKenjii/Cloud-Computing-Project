package net.restservices.onlinestorebackend.model;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String Name;

    @Column(name = "status")
    private Status Status;

    public Category(){

    }

    public Category(String name, Status status) {
        super();
        this.Name = name;
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

    public Status getStatus() {
        return Status;
    }

    public void setStatus(Status status) {
        this.Status = status;
    }
}
