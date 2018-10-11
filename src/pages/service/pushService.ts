import { Inject, Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from "../Interceptor/HttpClient"
import { ApplicationConfig, MY_CONFIG_TOKEN } from "./app-config";


@Injectable()
export class PushService {

    constructor(private http: HttpClient, @Inject(MY_CONFIG_TOKEN) private config: ApplicationConfig){

    }

    pushSubscription(userDetails):Observable<any>{
        return this.http.post(this.config.Url+'api/push/subscribe', userDetails).map(
            response=>{
                return response.json();
            }
        )
    }

}