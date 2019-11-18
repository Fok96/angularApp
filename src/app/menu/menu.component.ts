import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  public title: string = "to pio omorfo menu tou kosmou";
  public num: number = 666;

  public menu: string[] = ["start","about","products","contact"];

}
