import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {
  Http,
  RequestOptionsArgs,
  RequestOptions,
  Response,
  Headers
} from "@angular/http";
import { REST_HOST } from '../config';

@Injectable()
export class MHttp {

  constructor(
    private http: Http
  ) { }

  private mergeOptions(options: RequestOptionsArgs = {}) {
    let newOptions = new RequestOptions({}).merge(options);
    let newHeaders = new Headers(newOptions.headers);
    // 设置公用配置
    newHeaders.set('Content-Type', 'application/x-www-form-urlencoded');
    newOptions.headers = newHeaders;
    return newOptions;
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.get(REST_HOST + url, this.mergeOptions(options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>  {
    return this.http.post(REST_HOST + url, body, this.mergeOptions(options));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.put(REST_HOST + url, body, this.mergeOptions(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.delete(REST_HOST + url, this.mergeOptions(options));
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(REST_HOST + url, body, this.mergeOptions(options));
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.head(REST_HOST + url, this.mergeOptions(options));
  }

}