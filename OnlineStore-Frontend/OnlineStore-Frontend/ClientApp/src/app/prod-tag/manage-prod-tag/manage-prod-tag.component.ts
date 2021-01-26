import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $: any;

@Component({
  selector: 'app-manage-prod-tag',
  templateUrl: './manage-prod-tag.component.html',
  styleUrls: ['./manage-prod-tag.component.sass']
})
export class ManageProdTagComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() prodtag: any;

  prodTagId: number;
  Name: string;
  selectedStatus: string;
  Options = ["Active", "InActive"];

  ngOnInit(): void {
    this.prodTagId = this.prodtag.id;
    this.Name = this.prodtag.name
    this.selectedStatus = this.prodtag.status
    $('.select2').select2({
      placeholder: "Chọn trạng thái...",
      allowClear: true
    })
  }

  ngAfterViewInit(): void {
    $('.select2').on("change", (e) => this.selectedStatus = $(e.target).val())
  }

  createClick(){
    const val = {
      name: this.Name,
      status: this.selectedStatus
    };
    this.service.createProdTag(val).subscribe((res: { toString: () => any; }) => {
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

  saveClick(){
    const id = this.prodTagId;
    const val = {
      name: this.Name,
      status: this.selectedStatus
    };
    this.service.updateProdTag(id, val).subscribe((res: { toString: () => any; }) => {
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
