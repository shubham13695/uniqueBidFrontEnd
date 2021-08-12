import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../component/pages/home/home.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  product:any[] = [];
  listType="upcomming";
  curr=0;

  constructor(
    private homeService:HomeService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.homeService.getActiveProduct(this.listType).subscribe(({data}:any)=>{
      this.product = data.data;
      console.log(this.product)
    });
  }

  changeSlide(slideNumber:number){
    if(this.curr+slideNumber<0){
      slideNumber = 1;
    }
    this.curr = (this.curr+slideNumber)%this.product.length;
  }

}
