import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GstserviceService {

  private _baseUr2 = 'http://101.53.155.156/api/trading/gst/get'

  private _baseUr3 = 'http://101.53.155.156/api/trading/gst/create'

  constructor(private http: HttpClient) { }


  getAllPers() {

    // const token = window.localStorage.getItem("token")
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: 'BslogiKey ' + token
    //   })
    // };
    return this.http.get<any>(this._baseUr2);
  }

  public currentUser() {
    return (localStorage.getItem('currentUser'));
  }

  public getToken() {
    return localStorage.getItem('token');
  }
  addPers(data: any) {
    console.log('1');
    return this.http.post<any>(this._baseUr3, data)
  }

}
