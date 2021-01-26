import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-manage-vendor',
  templateUrl: './manage-vendor.component.html',
  styleUrls: ['./manage-vendor.component.sass']
})
export class ManageVendorComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() vendor: any;
  @Input() activeDetailsModal: any;

  vendorId: number;
  Name: string;
  ContactName: string;
  ContactTitle: string;
  Address: string;
  PhoneNumber: string;
  HomePage: string;
  Active: boolean;

  ngOnInit(): void {
    this.vendorId = this.vendor.id;
    this.Name = this.vendor.name;
    this.ContactName = this.vendor.contactName;
    this.ContactTitle = this.vendor.contactTitle;
    this.Address = this.vendor.address;
    this.PhoneNumber = this.vendor.phoneNumber;
    this.HomePage = this.vendor.homePage;
    this.Active = this.activeDetailsModal;
  }

  // tslint:disable-next-line: typedef
  createClick(){
    const val = {
      name: this.Name,
      contactName: this.ContactName,
      contactTitle: this.ContactTitle,
      address: this.Address,
      phoneNumber: this.PhoneNumber,
      homePage: this.HomePage
    };
    this.service.createVendor(val).subscribe((res: { toString: () => any; }) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'Tạo Thành Công'
      });
    });
  }

  // tslint:disable-next-line: typedef
  saveClick(){
    const id = this.vendorId;
    const val = {
      name: this.Name,
      contactName: this.ContactName,
      contactTitle: this.ContactTitle,
      address: this.Address,
      phoneNumber: this.PhoneNumber,
      homePage: this.HomePage
    };
    this.service.updateVendor(id, val).subscribe((res: { toString: () => any; }) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });

      Toast.fire({
        icon: 'success',
        title: 'Chỉnh Sửa Thành Công'
      });
    });
  }

}
