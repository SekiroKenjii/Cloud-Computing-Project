import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import bsCustomFileInput from 'admin-lte/plugins/bs-custom-file-input/bs-custom-file-input.js';

declare let $: any;

@Component({
  selector: 'app-manage-trademark',
  templateUrl: './manage-trademark.component.html',
  styleUrls: ['./manage-trademark.component.sass']
})
export class ManageTrademarkComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() trademark: any;
  @Input() activeDetailsModal: any;

  trademarkId: number;
  Name: string;
  LogoName: any;
  selectedImage: File;
  base64Data: any;
  retrievedImage: any;
  selectedStatus: string;
  Options = ["Active", "InActive"];
  Active: boolean;

  ngOnInit(): void {
    this.trademarkId = this.trademark.id;
    this.Name = this.trademark.name;
    this.LogoName = this.trademark.logoName;
    this.base64Data = this.trademark.logoByte;
    this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    this.selectedStatus = this.trademark.status;
    this.Active = this.activeDetailsModal;
    $(document).ready(function () {
      $('.select2').select2({
        placeholder: "Chọn trạng thái...",
        allowClear: true
      });
      bsCustomFileInput.init();
    })
  }

  ngAfterViewInit(): void {
    $('.select2').on("change", (e) => this.selectedStatus = $(e.target).val())
  }

  public onFileChanged(event){
    this.selectedImage = event.target.files[0];
  }
  createClick(){
    const data = new FormData();
    data.append('imageFile', this.selectedImage, this.selectedImage.name);
    data.append('dataRequest', new Blob([JSON.stringify({
      "name": this.Name,
      "status": this.selectedStatus
    })], {type: "application/json"}));
    this.service.createTrademark(data).subscribe((res: { toString: () => any; }) => {
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
}
