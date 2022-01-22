import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { TopNavBarModule } from './top-nav-bar/top-nav-bar.module';
@NgModule({
  imports: [CommonModule,TopNavBarModule],
  declarations: [
    
  
  ],
  exports:[]
})
export class MyLibModule {}
