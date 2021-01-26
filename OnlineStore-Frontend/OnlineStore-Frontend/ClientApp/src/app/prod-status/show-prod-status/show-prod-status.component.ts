import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-show-prod-status',
  templateUrl: './show-prod-status.component.html',
  styleUrls: ['./show-prod-status.component.sass']
})
export class ShowProdStatusComponent implements OnInit {

  constructor(private service: SharedService) { }

  ModalTitle: string;
  ActiveProdStatusModal = false;

  ProdStatusList: any = [];
  prodstatus: any;

  ngOnInit(): void {
    this.refreshProdStatusList()
  }

  // tslint:disable-next-line: typedef
  openCreateProdStatus(){
    this.prodstatus = {
      id: 0,
      name: null,
      description: null,
    };
    this.ModalTitle = 'Thêm trạng thái hàng mới';
    this.ActiveProdStatusModal = true;
  }

  // tslint:disable-next-line: typedef
  openEditProdStatus(item: any){
    this.prodstatus = item;
    this.ModalTitle = 'Chỉnh sửa trạng thái hàng';
    this.ActiveProdStatusModal = true;
  }

  // tslint:disable-next-line: typedef
  deleteClick(id: any){
    const r = confirm('Bạn có chắc muốn xoá?');
    if (r === true){
      this.service.deleteProdStatus(id).subscribe((res: { toString: () => any; }) => {
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

        this.refreshProdStatusList();
      });
    }
    else{
      this.ActiveProdStatusModal = false;
    }
  }

  // tslint:disable-next-line: typedef
  closeClick(){
    this.ActiveProdStatusModal = false;
    this.refreshProdStatusList();
  }

  // tslint:disable-next-line: typedef
  refreshProdStatusList() {
    this.service.getProdStatusList().subscribe(data => {
      this.ProdStatusList = data;
    });
  }
}
