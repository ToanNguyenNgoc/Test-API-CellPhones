import { Component, OnInit } from '@angular/core';
import { MobileServiceService } from 'src/app/shared/mobile-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  listCate:any[]=[];
  constructor(
    public service: MobileServiceService
  ) { }

  ngOnInit() {
    this.getListCategory();
  }
  getListCategory(){
    this.service.getListCategory().subscribe((data)=>{
      this.listCate = data.phone.apple;
      console.log(this.listCate);
    })
  }
}
