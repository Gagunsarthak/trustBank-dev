import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { TopNavBarModule } from './top-nav-bar/top-nav-bar.module';
import { BottomNavBarComponent } from './widgets/bottom-nav-bar/bottom-nav-bar.component';
@NgModule({
  imports: [CommonModule,TopNavBarModule],
  declarations: [
    
  
  
    BottomNavBarComponent
  ],
  exports:[]
})
export class MyLibModule {}
