import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants/constants';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/ApiServices/apiservice.service';

@Component({
  selector: 'app-profillist',
  templateUrl: './profillist.component.html',
  styleUrls: ['./profillist.component.css']
})
export class ProfillistComponent implements OnInit {


  apiUrl: string = Constants.API_URL;
  no_image = Constants.NO_IMAGE_FOUND;
  userdataList: any = [];

  constructor(private apiserviceService: ApiserviceService, private flashMessagesService: FlashMessagesService, private router: Router) { }

  ngOnInit() {
    this.get_profile_list();
  }

  get_profile_list() {
    console.log("calling user service11");
    this.apiserviceService.get_profile_list('', (result) => {
      console.log("result list profilrs", result)
      if (result['status']) {
        this.userdataList = result['values'];

        // this.flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 1000 });
      } else {
        console.log("data not founds");

      }
    })
  }
}
