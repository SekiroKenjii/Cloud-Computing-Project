import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $: any;

@Component({
  selector: 'app-show-trademark',
  templateUrl: './show-trademark.component.html',
  styleUrls: ['./show-trademark.component.sass']
})
export class ShowTrademarkComponent implements OnInit {

  constructor(private service: SharedService) { }

  ModalTitle: string;
  ActiveTrademarkModal = false;
  activeDetailsModal = false;

  TrademarkList: any;
  trademark: any;

  ngOnInit(): void {
    this.refreshTrademarkList()
  }

  openCreateTrademark(){
    this.trademark = {
      id: 0,
      name: null,
      logoName: null,
      logoByte: null,
      status: null,
    };
    this.ModalTitle = 'Thêm mới thương hiệu';
    this.ActiveTrademarkModal = true;
  }

  openEditTrademark(id: number){
    this.service.getTrademarkById(id).subscribe(data =>{
      this.trademark = data;
      console.log(this.trademark)
    })
    this.ModalTitle = 'Chỉnh sửa thương hiệu';
    this.ActiveTrademarkModal = true;
  }

  openDetailsTrademark(id: number){
    this.service.getTrademarkById(id).subscribe(data =>{
      this.trademark = data
    })
    console.log(this.trademark)
    $.LoadingOverlay("show", {
      image       : "",
      fontawesome : "fa fa-cog fa-spin"
    });
    setTimeout(function(){
      $.LoadingOverlay("hide");
      $("#trademarkModal").modal()
    }, 800);
    this.ModalTitle = 'Chi tiết thương hiệu';
    this.ActiveTrademarkModal = true;
    this.activeDetailsModal = true;
  }

  deleteClick(id: any){
    const r = confirm('Bạn có chắc muốn xoá?');
    if (r === true){
      this.service.deleteTrademark(id).subscribe((res: { toString: () => any; }) => {
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

        this.refreshTrademarkList();
      });
    }
    else{
      this.ActiveTrademarkModal = false;
      this.activeDetailsModal = false;
    }
  }

  closeClick(){
    this.ActiveTrademarkModal = false;
    this.activeDetailsModal = false;
    this.refreshTrademarkList();
  }

  refreshTrademarkList() {
    this.service.getTrademarkList().subscribe(data => {
      this.TrademarkList = data;
    });
  }
}
