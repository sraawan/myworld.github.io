import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionCoreComponent } from './region-core/region-core.component';
import { CurrencyComponent } from './currency/currency.component';
import { CodeComponent } from './code/code.component';
import { LanguageComponent } from './language/language.component';
import { RouterModule } from '@angular/router';
import { CountryCoreComponent } from './country-core/country-core.component';
import { NameComponent } from './name/name.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [RegionCoreComponent, CurrencyComponent, CodeComponent, LanguageComponent, CountryCoreComponent, NameComponent],
  exports: [RegionCoreComponent, CurrencyComponent, CodeComponent, LanguageComponent,CountryCoreComponent,NameComponent]
})
export class ShareModule { }
