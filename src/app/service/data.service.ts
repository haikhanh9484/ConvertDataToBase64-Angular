import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { ApiResponse } from '../model/api.response';
import { Data } from '../model/data.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl+'/api/convert/';

  TextToBase64(data: Data): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "/encode", data);
  }

  Base64ToText(data: Data): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "/decode", data);
  }

  ImgToBase64(selectedFile: FormData): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "/img/encode", selectedFile);
  }

  Base64ToImg(data: Data): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + "/img/decode", data);
  }
}
