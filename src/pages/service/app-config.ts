import {InjectionToken} from "@angular/core";


export interface ApplicationConfig
{
    Url:String;
}

export const AppConfig: ApplicationConfig={
    // Url: "http://192.168.1.16:8000/",
    //Url: "http://ec2-34-212-87-251.us-west-2.compute.amazonaws.com:8002/",
	Url: "http://localhost:8000/",
};

export const MY_CONFIG_TOKEN = new InjectionToken<ApplicationConfig>('config');

