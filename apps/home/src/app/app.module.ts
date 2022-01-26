import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule,NoopAnimationsModule  } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {TopNavBarModule} from 'libs/my-lib/src/lib/widgets/top-nav-bar/top-nav-bar.module'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {BottomNavBarModule} from 'libs/my-lib/src/lib/widgets/bottom-nav-bar/bottom-nav-bar.module'
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
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    NoopAnimationsModule ,
    BottomNavBarModule,
    MatDividerModule,
    LayoutModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
