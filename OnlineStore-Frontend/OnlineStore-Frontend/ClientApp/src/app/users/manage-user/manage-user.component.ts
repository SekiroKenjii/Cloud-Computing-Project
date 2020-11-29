import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.sass']
})
export class ManageUserComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() user: any;

  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;

  ngOnInit(): void {
    this.userId = this.user.id;
    this.firstName = this.user.firstname;
    this.lastName = this.user.lastname;
    this.email = this.user.email;
    this.address = this.user.address;
    this.phoneNumber = this.user.phonenumber;
  }

  // tslint:disable-next-line: typedef
  createClick(){
    const val = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      address: this.address,
      phonenumber: this.phoneNumber
    };
    this.service.createUser(val).subscribe((res: { toString: () => any; }) => {
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
    const id = this.userId;
    const val = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      address: this.address,
      phonenumber: this.phoneNumber
    };
    this.service.updateUser(id, val).subscribe((res: { toString: () => any; }) => {
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
