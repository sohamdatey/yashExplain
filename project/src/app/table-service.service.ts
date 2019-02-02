import { Injectable } from '@angular/core';
import { IPerson } from './person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts/1";

constructor(private http:HttpClient) { }

getPersons(): Observable<IPerson>{

return this.http.get<IPerson>(this._url);

}

errorHandler(error: HttpErrorResponse){

return Observable.throw(error.message || "Server Error");

}

}


  

