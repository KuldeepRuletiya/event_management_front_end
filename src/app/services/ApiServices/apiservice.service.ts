import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Custom_api_calling } from '../../adapters/Custom_api_calling';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private custom_api_calling: Custom_api_calling) { }



  //   http_calling_post(api, body,callback) {console.log(Constants.API_URL + api, body);
  //     const requestOptions = {
  //         headers: new HttpHeaders(Constants.API_HEADER)
  //     };
  //     let result = this.httpClient.post(Constants.API_URL + api, body, requestOptions);

  //     result.subscribe((data)=>{
  //         if (data['status_code'] == 6) {
  //             localStorage.clear();
  //             this.storage.set('session_expired', data['message']);
  //             try{
  //             // document.getElementById("dashboard_container").remove();
  //             }catch(e){console.log('eeeeee', e);}
  //             window.location.reload();
  //         }
  //        else{
  //             callback(data);
  //         }
  //     });


  // }



  // user_login(body) {
  //   return this.custom_api_calling.http_calling_post(APT_URL + '/api/customers/customer_login/', body);

  // }

  user_logout() {

  }

  get_profile_list(data, callback) {
    return this.custom_api_calling.http_calling_get('/api/customers/customer_profile_list/', (result) => {
      callback(result);
    });
  }

  update_profile() {

  }

  user_sign_up(body, callback) {
    console.log("user sign page ",body)
    return this.custom_api_calling.http_calling_post('/api/customers/sign_up_customer/', body, (result) => {
      callback(result);
    });

  }

  user_profile_by_id(data, callback) {
    return this.custom_api_calling.http_calling_get('/api/customers/customer_profile_by_id?id=' + data.id, (result) => {
      callback(result);
    });

  }


  event_details_by_id(data, callback) {

    return this.custom_api_calling.http_calling_get('/api/customers/event_details_by_id?id=' + data.id, (result) => {
      callback(result);
    });

  }
}
