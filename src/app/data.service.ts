import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http"
import "rxjs/add/operator/map"

@Injectable()
export class DataService {
  result: any;

  constructor(private http: Http) { }

  getInterfaces() {
    return this.http.get("/api/interfaces")
      .map(result => this.result = result.json().data)
  }

}
