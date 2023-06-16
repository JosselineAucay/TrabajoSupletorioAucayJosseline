import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num:number=0;
  constructor() {}
generaral(){
  this.num=Math.floor(Math.random()*4)+1;
  console.log(this.num);
}
}
