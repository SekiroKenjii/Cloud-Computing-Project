import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $: any;

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrls: ['./manage-category.component.sass']
})
export class ManageCategoryComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() category: any;

  categoryId: number;
  Name: string;
  selectedStatus: string;
  Options = ["Active", "InActive"];

  ngOnInit(): void {
    this.categoryId = this.category.id
    this.Name = this.category.name
    this.selectedStatus = this.category.status
    $('.select2').select2({
      placeholder: "Chọn trạng thái...",
      allowClear: true
    })
  }

  ngAfterViewInit(): void {
    $('.select2').on("change", (e) => this.selectedStatus = $(e.target).val())
  }

  onSelectedChange(value: string) {
    console.log(value);
    this.selectedStatus = value;
  }

  // tslint:disable-next-line: typedef
  createClick(){
    const val = {
      name: this.Name,
      status: this.selectedStatus
    };
    this.service.createCategory(val).subscribe((res: { toString: () => any; }) => {
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
    const id = this.categoryId;
    const val = {
      name: this.Name,
      status: this.selectedStatus
    };
    this.service.updateCategory(id, val).subscribe((res: { toString: () => any; }) => {
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
