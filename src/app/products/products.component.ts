import { Component, OnInit } from '@angular/core';
import { IProduct } from "../interfaces/Iproduct";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [
    {
      id:1,
      name:"core i3",
      price:300,
      sale:250,
      photo:"assets/images/crop.jpg"
    },
    {
      id:2,
      name:"core i5",
      price:400,
      sale:null,
      
      photo:"assets/images/crop.jpg"
    },{
      id:3,
      name:"core i7",
      price:700,
      sale:650,
      photo:"assets/images/crop.jpg"
    },{
      id:4,
      name:"core i9",
      price:900,
      sale:null,
      photo:"assets/images/crop.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
