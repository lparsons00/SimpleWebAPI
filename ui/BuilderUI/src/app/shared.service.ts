import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  readonly APIUrl = "http://localhost:53535/api";

  constructor(private http: HttpClient) { }

  getBuilderList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Builder');
  }

  addBuilder(val: any) {
    return this.http.post(this.APIUrl + '/Builder', val);
  }

  updateBuilder(val: any) {
    return this.http.put(this.APIUrl + '/Builder', val);
  }

  deleteBuilder(val: any) {
    return this.http.delete(this.APIUrl + '/Builder/' + val);
  }


  getProjectList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Project');
  }

  addProject(val: any) {
    return this.http.post(this.APIUrl + '/Project', val);
  }

  updateProject(val: any) {
    return this.http.put(this.APIUrl + '/Project', val);
  }

  deleteProject(val: any) {
    return this.http.delete(this.APIUrl + '/Project/' + val);
  }

  getAllBuilderNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/Builder/GetAllBuilderNames');
  }

}
