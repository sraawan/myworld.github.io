import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { RegionComponent } from './region/region.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { CountriesComponent } from './countries/countries.component';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    FilterPipeModule,
    RouterModule.forRoot([
      {path:'home',component:RegionComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'country/:countryName',component:CountryComponent},
      {path:'countries/:pram/:pramName',component:CountriesComponent}
    ])
  ],
  declarations: [CountryComponent, RegionComponent, CountriesComponent]
})
export class WorldModule { }
