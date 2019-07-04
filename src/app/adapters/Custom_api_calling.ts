import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Constants } from '../constants/constants';

@Injectable()
export class Custom_api_calling {
    // constructor(private httpClient: HttpClient, @Inject(localStorage) private storage: WebStorageService) {
    // }
    constructor(private httpClient: HttpClient) {
    }

    http_calling_post(api, body, callback) {
        console.log("body data login",body)


        const requestOptions = {
            headers: new HttpHeaders(Constants.API_FILE_HEADER)
        };
        let result = this.httpClient.post(Constants.API_URL + api, body, requestOptions);

        result.subscribe((data) => {
            if (data['status_code'] == 6) {
                // this.storage.remove('log_in_email');
                // this.storage.remove('log_in_token');
                // this.storage.set('session_expired', data['message']);
                // document.getElementById("dashboard_container").remove();
                // window.location.reload();
            }
            else {
                callback(data);
            }
        },err=>{
            console.log("eer post data req",err);
        });


    }


    http_calling_json_put(api, body, callback) {
        const requestOptions = {
            headers: new HttpHeaders(Constants.API_FILE_HEADER)
        };
        this.httpClient.put(Constants.API_URL + api, body, requestOptions).subscribe((data) => {
            if (data['status_code'] == 6) {
                // this.storage.remove('log_in_email');
                // this.storage.remove('log_in_token');
                // this.storage.set('session_expired', data['message']);
                // document.getElementById("dashboard_container").remove();
                // window.location.reload();
            }
            else {
                callback(data);
            }
        });

    }

    http_calling_get(api, callback) {
        console.log("api===",api)
        const requestOptions = {
            headers: new HttpHeaders(Constants.API_HEADER)
        };
        this.httpClient.get(Constants.API_URL + api).subscribe((data) => {
            console.log("pp list",data);
            if (data['status_code'] == 6) {
                // this.storage.remove('log_in_email');
                // this.storage.remove('log_in_token');
                // this.storage.set('session_expired', data['message']);
                // document.getElementById("dashboard_container").remove();
                // window.location.reload();
            }
            else {
                callback(data);
            }
        });
    }



}
