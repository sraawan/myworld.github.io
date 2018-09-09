import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';
import { Location } from '@angular/common'
import { Countries } from './countries';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers:[ Location]
})
export class CountriesComponent implements OnInit,Countries {
  public countries:any =[];
  public title;
  public search = { name: '' };
  

  constructor(public route:ActivatedRoute,public http:HttpService, private location:Location) { }

  ngOnInit() {
    let pram = this.route.snapshot.paramMap.get('pram');
    console.log(pram);
    let pramName= this.route.snapshot.paramMap.get('pramName');
    console.log(pramName);
    this.title= pramName;
    console.log(this.title);
    

    this.http.getAllCountries(pram,pramName).subscribe(
      data=>{
        
        this.countries=data;
        console.log(this.countries);

      }
    )

      
   
  }
  goBackToPreviousPage(): any {
    this.location.back();
  }


}
