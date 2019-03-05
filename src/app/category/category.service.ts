import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './Category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http: HttpClient) { }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://northwindapi.azurewebsites.net/api/categories');
  }
}
