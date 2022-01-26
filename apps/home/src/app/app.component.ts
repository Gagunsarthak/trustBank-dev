import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ApplicationStateService} from 'libs/my-lib/src/lib/services/application-state.service'

@Component({
  selector: 'nx-micro-frontend-trust-bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  
  showFiller = false;
  events: string[] = [];
  opened=true;

  //trial
  title = 'AngularMaterialGettingStarted';

  isMenuOpen = false;
  contentMargin = 240;
isMobileView=false
  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ]
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 
  public constructor(
    private applicationStateService: ApplicationStateService,
    private observer: BreakpointObserver) {

    if (applicationStateService.getIsMobileResolution()) {
  
      console.log("is Mobile screen view")
      this.isMobileView=true
    }else{
      this.isMobileView=false
      console.log("Desktop view")
    }
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
}
