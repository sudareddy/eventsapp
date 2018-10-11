
import {Injectable} from "@angular/core";
import {Toast} from "@ionic-native/toast";
import {AlertController} from "ionic-angular";
import {LoadingController} from "ionic-angular";

@Injectable()
export class ComponentService{
    loader:any;
    constructor(private toast:Toast, private alertCtrl:AlertController,public loadingCtrl: LoadingController){

    }
     // Toast
    showToast(msg,align)
    {
        this.toast.show(msg,'3000',align).subscribe(
            () => {
            }
    )

    }
    // Alert
    presentAlert(title,subtitle) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present();
    }
    // Loader
    showLoader(msg){
        this.loader = this.loadingCtrl.create({
            content:msg
        });
        this.loader.present();
    }

    closeLoader(){
        this.loader.dismiss();
    }

    closeAll(){
        this.loader.dismissAll();
    }


}