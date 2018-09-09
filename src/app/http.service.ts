import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public basicUrl ='https://restcountries.eu/rest/v2'

  constructor(public _http:HttpClient) { }

  public getAll():any{
    let regionAll= this._http.get(`${this.basicUrl}/all?fields=region`);
    console.log('http:',regionAll)
    return regionAll;
  }

  public getCountry(countryName):any{
    let countryAll = this._http.get(`${this.basicUrl}/name/${countryName}?fullText=true`);
    console.log('http:',countryAll);
    return countryAll;
  }
public getAllCountries(pram,pramName):any{
  let allCountries = this._http.get(`${this.basicUrl}/${pram}/${pramName}?fields=name;capital;flag;subregion;population`);
  return allCountries;
}
}
