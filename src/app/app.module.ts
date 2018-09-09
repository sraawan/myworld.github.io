import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule,Routes} from '@angular/router';
import { WorldModule } from './world/world.module';
import { ShareModule } from './share/share.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorldModule,
    ShareModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
