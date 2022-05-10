import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private _videos = new Subject<any[]>();
  videos: any[] = [];
  subject = this._videos.asObservable();
  constructor(private http: HttpClient) { }

  getVideoById(id:string){
   console.log("Function called....")
    return this.http.get('https://localhost:44315/api/Videos/'+1)
    
  }
}
