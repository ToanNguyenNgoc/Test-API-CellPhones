import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phone } from 'src/app/models/phone';
import { MobileServiceService } from 'src/app/shared/mobile-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  item : Phone|undefined;
  public allProduct: Phone[]=[];
  constructor(
    public activatedRoute: ActivatedRoute,
    public service: MobileServiceService
  ) {
   
   }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.service.getListCategory().subscribe((data)=>{
      this.allProduct = data.phone.samsung;
      const routeParams = this.activatedRoute.snapshot.paramMap;
      const productName = routeParams.get('name');
      this.item = this.allProduct.find(item=> item.name === productName);
      console.log(this.item);
    })
  }

}
