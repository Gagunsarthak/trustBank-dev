import { Component, Input, OnInit } from '@angular/core';
import { ApplicationStateService } from 'libs/my-lib/src/lib/services/application-state.service';
import { Post } from '../../../models/posts.model';

@Component({
  selector: 'ws-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input()
  post:Post.IHomeTimelineResult|null=null
  isMobileView=false
  constructor( private applicationStateService: ApplicationStateService,) { 
    if (applicationStateService.getIsMobileResolution()) {
  
      console.log("is Mobile screen view")
      this.isMobileView=true
    }else{
      this.isMobileView=false
      console.log("Desktop view")
    }
  }

  ngOnInit(): void {
    console.log("post is ",this.post)
    console.log("image url is ",this.post?.thumbnail)
    if(this.post?.thumbnail){
   //   console.log("image url  total is ",this.post.thumbnail?.assets)
    }
  }

}


