import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.sass']
})
export class ShowUserComponent implements OnInit {

  constructor(private service: SharedService) { }

  ModalTitle: string | undefined;
  ActiveUserModal = false;

  UserList: any = [];
  user: any;

  ngOnInit(): void {
    this.refreshUserList();
  }

  // tslint:disable-next-line: typedef
  openCreateUser(){
    this.user = {
      id: 0,
      firstname: null,
      lastname: null,
      email: null,
      phonenumber: null,
      address: null
    };
    this.ModalTitle = 'Thêm người dùng mới';
    this.ActiveUserModal = true;
  }

  // tslint:disable-next-line: typedef
  openEditUser(item: any){
    this.user = item;
    this.ModalTitle = 'Chỉnh sửa tài khoản';
    this.ActiveUserModal = true;
  }

  // tslint:disable-next-line: typedef
  deleteClick(id: any){
    const r = confirm('Bạn có chắc muốn xoá?');
    if (r === true){
      this.service.deleteUser(id).subscribe((res: { toString: () => any; }) => {
      // tslint:disable-next-line: triple-equals
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
          title: 'Xoá Thành Công'
        });

        this.refreshUserList();
      });
    }
    else{
      this.ActiveUserModal = false;
    }
  }
  // tslint:disable-next-line: typedef
  closeClick(){
    this.ActiveUserModal = false;
    this.refreshUserList();
  }

  // tslint:disable-next-line: typedef
  refreshUserList() {
    this.service.getUserList().subscribe(data => {
      this.UserList = data;
    });
  }
}
