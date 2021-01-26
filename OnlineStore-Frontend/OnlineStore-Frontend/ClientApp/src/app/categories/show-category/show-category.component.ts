import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.sass']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private service: SharedService) { }

  ModalTitle: string;
  ActiveCategoryModal = false;

  CategoryList: any = [];
  category: any;

  ngOnInit(): void {
    this.refreshCategoryList()
  }

  // tslint:disable-next-line: typedef
  openCreateCategory(){
    this.category = {
      id: 0,
      name: null,
      status: null,
    };
    this.ModalTitle = 'Thêm loại hàng mới';
    this.ActiveCategoryModal = true;
  }

  // tslint:disable-next-line: typedef
  openEditCategory(item: any){
    this.category = item;
    this.ModalTitle = 'Chỉnh sửa loại hàng';
    this.ActiveCategoryModal = true;
  }

  // tslint:disable-next-line: typedef
  deleteClick(id: any){
    const r = confirm('Bạn có chắc muốn xoá?');
    if (r === true){
      this.service.deleteCategory(id).subscribe((res: { toString: () => any; }) => {
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

        this.refreshCategoryList();
      });
    }
    else{
      this.ActiveCategoryModal = false;
    }
  }

  // tslint:disable-next-line: typedef
  closeClick(){
    this.ActiveCategoryModal = false;
    this.refreshCategoryList();
  }

  // tslint:disable-next-line: typedef
  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.CategoryList = data;
    });
  }
}
