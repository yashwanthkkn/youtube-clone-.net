import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  videos: any[] = [];

  private _videos = new Subject<any[]>();

  subject = this._videos.asObservable();

  constructor(private http: HttpClient) { }

  getVideos() {
      

      this.http.get('https://localhost:44315/api/Youtube').subscribe(
        (data: any) => {
          this.videos = data;          
          this._videos.next(this.videos);
        }
      )
  }
}
