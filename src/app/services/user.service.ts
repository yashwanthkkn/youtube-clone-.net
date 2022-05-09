import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = 'https://localhost:44315/api/Users';
  
  getUser(user:any){
    return this.http.post(this.url, {Email:user.email, UserName:user.name, ProfileImg:user.url})
  }
}
