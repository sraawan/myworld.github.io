import { Component, OnInit,Input } from '@angular/core';
import { CountryCore } from './country-core';

@Component({
  selector: 'app-country-core',
  templateUrl: './country-core.component.html',
  styleUrls: ['./country-core.component.css']
})
export class CountryCoreComponent implements OnInit,CountryCore {
  @Input() img
  @Input() capital;
  @Input() subregion;
  @Input() countryName;
  @Input() population;
  



  constructor() { }

  ngOnInit() {
  }

}
