import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private _videos = new Subject<any[]>();
  videos: any[] = [];
  subject = this._videos.asObservable();
  constructor(private http: HttpClient) { }
  url = environment.HOST_URL+'/Videos/';

  getVideos() {
      

    this.http.get('https://localhost:44315/api/Videos').subscribe(
      (data: any) => {
        this.videos = data;          
        this._videos.next(this.videos);
      }
    )
}


  getVideoById(id:string){
   console.log("Function called....")
    return this.http.get(this.url+id)
    
  }
}
