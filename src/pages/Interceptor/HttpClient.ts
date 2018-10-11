/**
 * Created by admin on 12/26/2017.
 */
import { Http , Headers , RequestOptions, Response } from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs/Observable';
import {Injectable} from "@angular/core";

@Injectable()
export class HttpClient
{


  constructor(private http: Http )
  {

  }

  post(url,data):Observable<any>
  {
    console.log(url);

    let token_header=window.localStorage.getItem('session');
    console.log()

    let headers = new Headers({ 'x-access-token': token_header });
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });


    return this.http.post(url,data,options).map(
      (response : Response) =>
      {
        console.log('returning from interceptor');
        return response;
      });
  }

    put(url,data):Observable<any>
    {
        console.log(url);
        let token_header=window.localStorage.getItem('session');
        console.log()

        let headers = new Headers({ 'x-access-token': token_header });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });


        return this.http.put(url,data,options).map(
            (response : Response) =>
            {
                console.log('returning from interceptor');
                return response;
            });
    }

  get(url) : Observable<any>
  {
    let token_header = window.localStorage.getItem('session');

    console.log('from local storage');
    console.log(token_header);
    let headers = new Headers({ 'x-access-token': token_header });

    let options = new RequestOptions({ headers: headers});
    console.log(url);

    return this.http.get(url,options).map(
      Response =>
      {
        console.log('returning from interceptor');
        return Response;
      });
  }
  

}
