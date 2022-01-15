import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {MyLibModule} from 'libs/my-lib/src/lib/my-lib.module'
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent,],
  imports: [BrowserModule,MyLibModule,MatSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
