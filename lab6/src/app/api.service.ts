import { Injectable } from '@angular/core'
import { Observable, of, throwError } from 'rxjs'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { Api } from './api'
import { HttpJsonParseError } from '@angular/common/http/src/response';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiURL : string = 'http://lab.pamelagao.ca/test.php';

  private handleError (error : HttpErrorResponse) {
    console.log(error.statusText)
    return throwError ('Something bad happened!')
  }

  getApis (apiKey ?: string): Observable<Api[]> {

    if (apiKey) {
      return this.http.get<Api[]>(this.apiURL + `?api_keys=${apiKey}`)
    } else {
      return this.http.get<Api[]>(this.apiURL)
    }
  }
  constructor (private http: HttpClient) { }
}