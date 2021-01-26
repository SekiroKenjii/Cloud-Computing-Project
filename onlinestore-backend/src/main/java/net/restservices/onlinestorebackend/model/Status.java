package net.restservices.onlinestorebackend.model;

public enum Status {
    Active("Active"), InActive("InActive");

    private final String status;

    Status(String status){
        this.status = status;
    }

    public String getStatus(){
        return status;
    }
}
