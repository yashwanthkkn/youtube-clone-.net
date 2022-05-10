import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  histories: any[] = [];

  private history = new Subject<any[]>();

  subject = this.history.asObservable();

  constructor(private http: HttpClient) { }

  url = environment.HOST_URL+'/History';


  getHistory(userId: string) {
    this.http.get(this.url+'?userId='+userId).subscribe(
      (data:any)=>{
        this.histories = data;
        this.history.next(this.histories);
      }
    )
  }
  logHistory(videoId: string, userId: string) {
    this.http.post(this.url,{VideoId: videoId,UserId: userId}).subscribe(
      (data:any)=>{
        
      }
    )
    // return this.http.post(this.url, {VideoId: videoId, UserId: userId});
  }

}
