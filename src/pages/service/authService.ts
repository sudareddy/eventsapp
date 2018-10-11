/**
 * Created by admin on 12/26/2017.
 */
import {Http} from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from "../Interceptor/HttpClient"
import {Inject, Injectable} from "@angular/core";
import {LoadingController} from "ionic-angular";
import {ApplicationConfig, MY_CONFIG_TOKEN} from "./app-config";

@Injectable()
export class authService
{
    isUserLoggedIn:any;
    loader:any;
    constructor(private http: HttpClient, private https:Http, public loadingCtrl: LoadingController, @Inject(MY_CONFIG_TOKEN) private config:ApplicationConfig)
    {
    }

    login(username,password):Observable<any>{
        return this.https.post(this.config.Url+'login',{email:username,password:password}).map(
            (response)=>
            {
                this.isUserLoggedIn = true;
                return response;
            });
    }

    signUp(signUpData):Observable<any>{
        return this.http.post(this.config.Url+'signup',signUpData).map(


            response=>{
                console.log(response);
                return response;
            }
        )
    }

    // //save invite
    // createInvite(inviteData):Observable<any>{
    //     return this.http.post(this.config.Url+'api/invite/save',inviteData).map(
    //         response=>{
    //             console.log(response);
    //             return response;
    //         }
    //     )
    // }

    //save or update draft
    saveInvite(inviteDate):Observable<any>{
        return this.http.post(this.config.Url+'api/invite/saveDraft',inviteDate).map(
            response=>{
                return response;
            }
        )
    }

    sendInvite(inviteDate):Observable<any>{
        return this.http.post(this.config.Url+'api/invite/send',inviteDate).map(
            response=>{
                return response;
            }
        )
    }


    getInvites():Observable<any>{
        return this.http.get(this.config.Url+'api/invite/get/all').map(
            response=>{
                console.log(response);
                return response.json();
            }
        )
    }

    getCategories():Observable<any>{
        return this.http.get(this.config.Url+'api/categories').map(
            response=>{
                console.log(response);
                return response.json();
            }
        )
    }

    getTypes(category):Observable<any>{
        return this.http.get(this.config.Url+'api/types/'+category).map(
            response=>{
                console.log(response);
                return response.json();
            }
        )
    }

    getUpcomingInvites():Observable<any>{
        return this.http.get(this.config.Url+'api/invite/get/upcoming').map(
            response=>{
                console.log(response);
                return response.json();
            }
        )
    }

    getReceivedInvites():Observable<any>{
         return this.http.get(this.config.Url+'api/invite/get/received').map(
             response=>{
                 console.log(response);
                 return response.json();
             }
         )
    }

    getPastReceivedInvites():Observable<any>{
        return this.http.get(this.config.Url+'api/invite/get/pastReceived').map(
            response=>{
                console.log(response);
                return response.json();
            }
        )
    }

    getPastInvites():Observable<any>{
        return this.http.get(this.config.Url+'api/invite/get/past').map(
            response=>{
                console.log(response);
                return response.json();
            }
        )
    }

    googlePlaces():Observable<any>{
        return this.http.get("https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters").map(
            response=>{
                console.log(response);
                return response.json();
            }
        )
    }

    respondInvite(resp,inviteId): Observable<any>{
        return this.http.post(this.config.Url+"api/invite/respondInvite",{response:resp,inviteId:inviteId}).map(
            response=>{
                console.log(response);
                return response;
            }
        )
    }

    getProfile(): Observable<any> {
        return this.http.get(this.config.Url+"api/profile").map(
            response => {
                console.log(response);
                return response.json();
            }
        )
    }

    updateProfile(payload): Observable<any> {
        return this.http.post(this.config.Url+"api/profile", payload).map(
            response => {
                console.log(response);
                return response.json();
            }
        )
    }


    updateInvite(inviteDetails): Observable<any> {
        return this.http.post(this.config.Url + "api/invite/" + inviteDetails.id + "/update", inviteDetails).map(
            response => {
                console.log(response);
                return response.json();
            })
    }

    cancelevent(id,reason):Observable<any>{
        var data={reason:reason}
        return this.http.post(this.config.Url+'api/invite/'+id+'/cancel',data).map(
            response=>{
                return response.json()

            }
        )
    }

    viewInvite(id):Observable<any>{
        return this.http.get(this.config.Url+'api/invite/'+id+'/view').map(
            response=>{
                return response.json()

            }
        )
    }

    addContacts(id,contacts):Observable<any>{
        return this.http.post(this.config.Url+'api/invite/'+id+'/addContacts',contacts).map(
            response=>{
                return response.json()

            }
        )

    }

    getNotification():Observable<any>{
        return this.http.get(this.config.Url+'api/notifications').map(
            response=>{
                return response.json();
            }
        )
    }

    updateNotification(id,state):Observable<any>{
        return this.http.put(this.config.Url+'api/update/'+id+'/'+state+'/notifications',"").map(
            response=>{
                return response.json();
            }
        )
    }

    getAssociation():Observable<any>{
        return this.http.get(this.config.Url+'api/push/getAssociation').map(
            response=>{
                return response.json();
            }
        )
    }

    updateDeviceID(pushObject):Observable<any>{
        return this.http.post(this.config.Url+'api/push/device/update', pushObject).map(
            response=>{
                    return response.json();
            }
        )
    }

    sendReminder(sendDetail):Observable<any>{
        return this.http.post(this.config.Url+'api/sendReminder', sendDetail).map(
            response=>{
                return response.json();
            }
        )
    }
}
