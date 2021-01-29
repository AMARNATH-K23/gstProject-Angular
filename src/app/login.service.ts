import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _baseUrl = 'http://101.53.155.156/auth/login'

  private _gst = this._baseUrl;

  constructor(private http: HttpClient) { }

  addGst(data: any) {
    return this.http.post<any>(this._gst, data)
  }
 
}
