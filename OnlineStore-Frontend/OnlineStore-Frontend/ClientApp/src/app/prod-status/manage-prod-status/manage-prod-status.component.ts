import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare let $: any;

@Component({
  selector: 'app-manage-prod-status',
  templateUrl: './manage-prod-status.component.html',
  styleUrls: ['./manage-prod-status.component.sass']
})
export class ManageProdStatusComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() prodstatus: any;

  prodStatusId: number;
  Name: string;
  Description: string;

  ngOnInit(): void {
    this.prodStatusId = this.prodstatus.id
    this.Name = this.prodstatus.name
    this.Description = this.prodstatus.description
    $('.textarea').summernote({
      tabsize: 2,
      height: 200,
      minHeight: 100,
      maxHeight: 300,
      focus: true,
    })  
    $('.textarea').summernote('code', this.Description)
  }

  // tslint:disable-next-line: typedef
  createClick(){
    this.Description = $('.textarea').summernote('code').replace(/<\/?[^>]+(>|$)/g, "");
    const val = {
      name: this.Name,
      description: this.Description
    };
    this.service.createProdStatus(val).subscribe((res: { toString: () => any; }) => {
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
    const id = this.prodStatusId;
    this.Description = $('.textarea').summernote('code').replace(/<\/?[^>]+(>|$)/g, "");
    const val = {
      name: this.Name,
      description: this.Description
    };
    this.service.updateProdStatus(id, val).subscribe((res: { toString: () => any; }) => {
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
