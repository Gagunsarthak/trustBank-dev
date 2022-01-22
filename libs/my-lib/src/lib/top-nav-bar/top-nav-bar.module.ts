import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [TopNavBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule

  ],
  exports:[TopNavBarComponent]
})
export class TopNavBarModule { }
