import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/base/Category';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly serviceUrl: string = environment.apiUrl + "/categories"

  constructor(private http: HttpClient) { }
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.serviceUrl)
  }
}
