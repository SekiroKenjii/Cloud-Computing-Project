import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-show-vendor',
  templateUrl: './show-vendor.component.html',
  styleUrls: ['./show-vendor.component.sass']
})
export class ShowVendorComponent implements OnInit {

  constructor(private service: SharedService) { }

  ModalTitle: string;
  ActiveVendorModal = false;
  activeDetailsModal = false;

  VendorList: any = [];
  vendor: any;

  ngOnInit(): void {
    this.refreshVendorList();
  }

  // tslint:disable-next-line: typedef
  openCreateVendor(){
    this.vendor = {
      id: 0,
      name: null,
      contactName: null,
      contactTitle: null,
      phoneNumber: null,
      address: null,
      homePage: null
    };
    this.ModalTitle = 'Thêm nhà cung cấp  mới';
    this.ActiveVendorModal = true;
  }

  // tslint:disable-next-line: typedef
  openEditVendor(item: any){
    this.vendor = item;
    this.ModalTitle = 'Chỉnh sửa nhà cung cấp';
    this.ActiveVendorModal = true;
  }

  // tslint:disable-next-line: typedef
  openDetailsVendor(item: any){
    this.vendor = item;
    this.ModalTitle = 'Chi tiết nhà cung cấp';
    this.ActiveVendorModal = true;
    this.activeDetailsModal = true;
  }

  deleteClick(id: any){
    const r = confirm('Bạn có chắc muốn xoá?');
    if (r === true){
      this.service.deleteVendor(id).subscribe((res: { toString: () => any; }) => {
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

        this.refreshVendorList();
      });
    }
    else{
      this.ActiveVendorModal = false;
      this.activeDetailsModal = false;
    }
  }

  // tslint:disable-next-line: typedef
  closeClick(){
    this.ActiveVendorModal = false;
    this.activeDetailsModal = false;
    this.refreshVendorList();
  }

  refreshVendorList() {
    this.service.getVendorList().subscribe(data => {
      this.VendorList = data;
    });
  }
}
