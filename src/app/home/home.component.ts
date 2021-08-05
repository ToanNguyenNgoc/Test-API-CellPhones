import { Component, OnInit } from '@angular/core';
import { MobileServiceService } from '../shared/mobile-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listCategory:any=[];
  constructor(
    public service: MobileServiceService
  ) { }

  ngOnInit() {
    this.getListCategory();
  }

  getListCategory(){
    this.service.getListCategory().subscribe((data)=>{
      this.listCategory = data.phone.samsung;
      console.log(this.listCategory);
    })
  }

}
