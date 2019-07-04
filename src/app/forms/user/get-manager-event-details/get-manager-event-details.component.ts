import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
// import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiserviceService } from '../../../services/ApiServices/apiservice.service';

@Component({
  selector: 'app-get-manager-event-details',
  templateUrl: './get-manager-event-details.component.html',
  styleUrls: ['./get-manager-event-details.component.css']
})
export class GetManagerEventDetailsComponent implements OnInit {


  apiUrl: string = Constants.API_URL;
  no_image = Constants.NO_IMAGE_FOUND;
  manager_id: any;
  id: any = 0;
  customerData: any = [];
  constructor(private apiserviceService: ApiserviceService, private router: Router, private flashMessagesService: FlashMessagesService, private activatedRoute: ActivatedRoute) { }




  ngOnInit() {
    // console.log("ggggggggggggg")

    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      console.log("idddddd", this.id)
    });
    this.get_user_profile_details_by_id({ id: this.id });




  }

  get_user_profile_details_by_id(val_id: any) {
    console.log("id is ", val_id);

    this.apiserviceService.event_details_by_id(val_id, (result) => {
      console.log("by id result foounds", result);
      if (result['status']) {
        // result['values'].forEach(element => {
        //   if(element.profile_pic==undefined||element.profile_pic==null||element.profile_pic=='undefined'||element.profile_pic=='null'){
        //     element.profile_pic='';
        //   }
        // });
        this.customerData = result['values'][0];

        this.flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 1000 });



        // this.router.navigate(['/login'])
      } else {
        this.flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 1000 });

      }

    })


  }

}
