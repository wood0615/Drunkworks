// import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DatePipe } from '@angular/common';
const headers = new Headers;

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(
        private http: HttpClient,
        private datePipe: DatePipe
        ) {

        }
        // get tokenData(): any { return JSON.stringify(this.auth.getToken()); }
        public d: any;

         apiurl = 'https://api.punkapi.com/v2/'
         
        post(route: string, data: any, responseType?: any){
          headers.append('Access-Control-Allow-Origin', '*');
            const observe = 'response';
             // tslint:disable-next-line: max-line-length
            let ret = this.http.post<any>(this.apiurl + route, data, {withCredentials: false, responseType, observe: observe as 'body'} );
            return ret;
          }
    put(route: string, data: any, responseType?: any){
      headers.append('Access-Control-Allow-Origin', '*');

      const observe = responseType === 'blob' ? 'response' : 'body';
     // tslint:disable-next-line: max-line-length
      let ret = this.http.put<any>(this.apiurl + route, data, {withCredentials: false, responseType, observe: observe as 'body'} );
      return ret;
    }




    delete(route: string, data: any, responseType?: any){
      headers.append('Access-Control-Allow-Origin', '*');
      const observe = responseType === 'blob' ? 'response' : 'body';
          let ret = this.http.delete<any>(this.apiurl + route +'/' +data, data );
      return ret;
    }

    getwithparms(route: string, data: any, responseType?: any): Observable<any[]>{
      headers.append('Access-Control-Allow-Origin', '*');
      const observe =     responseType === 'blob' ? 'response' : 'body';
  
        // tslint:disable-next-line: max-line-length
      let ret = this.http.get<any[]>(this.apiurl + route + '/' + data, 
        { withCredentials: false, responseType, observe: observe as 'body'} );
        return ret;
  }
    get(route: string, data: any, responseType?: any): Observable<any[]>{
      headers.append('Access-Control-Allow-Origin', '*');
      const observe =     responseType === 'blob' ? 'response' : 'body';

        // tslint:disable-next-line: max-line-length
      let ret = this.http.get<any[]>(this.apiurl + route,
         {withCredentials: false, responseType, observe: observe as 'body'} );
        return ret;
  }

}
