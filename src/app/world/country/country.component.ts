import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { Location } from '@angular/common';
import { Country } from './country';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [Location]
})
export class CountryComponent implements OnInit,Country {
  public country:any =[];

  constructor(public route:ActivatedRoute,public router:Router,public http:HttpService, private location: Location) { }

  ngOnInit() {
    let countryName =this.route.snapshot.paramMap.get('countryName');
    console.log('pram:',countryName);
    
    this.http.getCountry(countryName).subscribe(
      data => {
        this.country = data;
        console.log(this.country);
  })
}
goBackToPreviousPage(): any {
  this.location.back();
}
goHome():any{
  let nav =this.router.navigate(['']);
  console.log(nav);

}

}
