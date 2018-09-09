import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Location } from '@angular/common';
import { Region } from './region';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit,Region {
  public allRegions:any=[];

  constructor(public http:HttpService,private location: Location) { }
 
  ngOnInit() {
    
    this.http.getAll().subscribe(
      data=>{
        console.log(data);
        for (let all of data){          
        this.allRegions.indexOf(all.region)===-1 && all.region!=''?this.allRegions.push(all.region):null;
        
        }
      })
     
  }
  goBackToPreviousPage(): any {
    this.location.back();
  }

}
