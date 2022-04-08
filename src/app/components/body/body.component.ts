import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public capacity?:number;
  public fillingSpeed?:number;
  public time?:number;
  public volume:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  public countVolume(){
    if(this.capacity != null && this.fillingSpeed != null && this.time != null){
      this.volume = Math.round(((this.fillingSpeed * this.time)/this.capacity)*100) 
    }
  }


}
