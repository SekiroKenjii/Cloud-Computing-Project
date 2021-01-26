import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-show-prod-tag',
  templateUrl: './show-prod-tag.component.html',
  styleUrls: ['./show-prod-tag.component.sass']
})
export class ShowProdTagComponent implements OnInit {

  constructor(private service: SharedService) { }

  ModalTitle: string;
  ActiveProdTagModal = false;

  ProdTagList: any = [];
  prodtag: any;

  ngOnInit(): void {
    this.refreshProdTagList()
  }

  openCreateProdTag(){
    this.prodtag = {
      id: 0,
      name: null,
      status: null,
    };
    this.ModalTitle = 'Thêm nhãn sản phẩm mới';
    this.ActiveProdTagModal = true;
  }

  openEditProdTag(item: any){
    this.prodtag = item;
    this.ModalTitle = 'Chỉnh sửa nhãn sản phẩm hàng';
    this.ActiveProdTagModal = true;
  }

  deleteClick(id: any){
    const r = confirm('Bạn có chắc muốn xoá?');
    if (r === true){
      this.service.deleteProdTag(id).subscribe((res: { toString: () => any; }) => {
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

        this.refreshProdTagList();
      });
    }
    else{
      this.ActiveProdTagModal = false;
    }
  }

  closeClick(){
    this.ActiveProdTagModal = false;
    this.refreshProdTagList();
  }

  refreshProdTagList() {
    this.service.getProdTagList().subscribe(data => {
      this.ProdTagList = data;
    });
  }
}
