import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
url="https://0wioipwi.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22posts%22%5D%7B%0A%20title%2C%0A%20%20%20%20%20%0A%20%20%20%20%20%20%20%20description%2C%0A%20%20%20%20%20%20%20%20postType%2C%0A%20%20%20%20%20%20%20%20visibility%2C%0A%20%20%20%20%20%20%20%20coinsOffered%2C%0A%20%20%20%20%20%20%20%20postId%2C%0A%20%20%20%20%20%20%20%20postCreator%2C%0A%20%20%20%20%20%20%20%20postActivity%2C%0A%20%20%20%20%20%20%20%20postDetails%2C%0A%20%20%20%20%20%20%20%20attachments%2C%0A%20%20%20%20%20%20%20%0A%20%20%22thumbnail%22%3Athumbnail.asset-%3Eurl%2C%0A%20%20%20%20%20%20%20%20duration%2C%0A%20%20%20%20%20%20%20%20tags%2C%0A%20%20%20%20%20%20%20%20skillsRequired%2C%0A%20%20%20%20%20%20%20%20experienceRequired%2C%0A%20%20%0A%7D"
  constructor(
    private http:HttpClient
  ) { 
   }

   getPosts():Observable<any> {
     var obj =this.http.get(this.url);
     console.log("Obj in service class is",obj )
    return this.http.get(this.url);
  }

}
