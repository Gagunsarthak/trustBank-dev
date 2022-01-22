import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {TopNavBarModule} from 'libs/my-lib/src/lib/top-nav-bar/top-nav-bar.module'
// E:\newCloneTrust\trustBank-dev\libs\my-lib\src\lib\top-nav-bar\top-nav-bar.module.ts
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent,],
  imports: [BrowserModule,MatSliderModule,
    MatListModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    TopNavBarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
