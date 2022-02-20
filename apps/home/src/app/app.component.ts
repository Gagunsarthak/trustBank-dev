import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{Post} from '../app/models/posts.model'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ApplicationStateService} from 'libs/my-lib/src/lib/services/application-state.service'
import { HomeService } from '../services/home.service';

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
  obj: any;
  timeLineResult:Post.IHomeTimelineResult[]=[]
 
  public constructor(
    private applicationStateService: ApplicationStateService,
    private homeHttp:HomeService,
 
    private observer: BreakpointObserver) {

    if (applicationStateService.getIsMobileResolution()) {
  
      console.log("is Mobile screen view")
      this.isMobileView=true
    }else{
      this.isMobileView=false
      console.log("Desktop view")
    }
  }
  ngOnInit(){

   this.obj=this.homeHttp.getPosts();
   
    this.obj.subscribe((data: any)=>{
      console.log("the data is ",data.result)
      this.timeLineResult=data.result
      console.log("timeline results ",this.timeLineResult)
    })
    console.log("obj is ",this.obj)
    this.fetchTimeline()
  
  }
  fetchTimeline(){
    this.homeHttp.getPosts().subscribe(data=>{
    this.timeLineResult=data.result
    this.timeLineResult.forEach(
      post=>{
        console.log("Post in iteration is ",post.thumbnail)
      //  post.thumbnail=''
      }
    )
    })
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
