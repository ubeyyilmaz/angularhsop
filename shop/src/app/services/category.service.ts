import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Category } from '../category/category';
import { Observable, catchError,tap,throwError } from 'rxjs';




@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories"

  getCategories():Observable<Category[]> {
    return this.http
      .get<Category[]>(this.path).pipe(
        tap(data=> console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );

  }
  handleError(error: HttpErrorResponse){
    let errorMessage =''
    if(error.error instanceof ErrorEvent )  {
      errorMessage = 'Bir Hata Olulştu' + error.error.message
  }else{
    errorMessage = 'Sistemsel Bir Hata'
  }
  return throwError(errorMessage);
}
}