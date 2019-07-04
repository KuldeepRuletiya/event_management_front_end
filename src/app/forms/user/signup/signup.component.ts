import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiserviceService } from 'src/app/services/ApiServices/apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fileToUpload: any;
  signupFrom: FormGroup;
  usertype: any;
  userType: any = [
    { id: 1, name: "Employee" },
    { id: 2, name: "Manager" }
  ]

  genderData: any = [
    { id: 1, name: "Male" }, 
    { id: 2, name: "Female" },
    { id: 3, name: "Other" }
  ]
  uploadedFiles: any;

  // payment_type: any = [
  //   { id: 1, name: "cash" },
  //   { id: 2, name: "paytm" },
  //   { id: 3, name: "phonepay" },
  //   { id: 4, name: "googlepay" },
  //   { id: 5, name: "atm" },
  // ]

  @ViewChild('profile_pic') profile_pic;

  // usertypeSettings: any = {
  //   text: "Select",
  //   noDataLabel: "No Data Available",
  //   enableSearchFilter: true,
  //   singleSelection: true,
  // };

  // gendertypeSettings: any = {
  //   text: "Select",
  //   noDataLabel: "No Data Available",
  //   enableSearchFilter: true,
  //   singleSelection: true,
  // };

  drop_down_list: any = [];
  gender_drop_down_list: any = [];

  gender_
  // paymetoptiondrop: any = {
  //   text: "Select",
  //   noDataLabel: "No Data Available",
  //   enableSearchFilter: true,
  //   singleSelection: true,
  // };
  // payment_drop_down_list: any = [];

  constructor(private fb: FormBuilder, private apiserviceService: ApiserviceService, private router: Router, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.signupFrom = this.fb.group({
      'email': [null, Validators.required],
      // 'last_name': [null, Validators.required],
      'name': [null, Validators.required],
      // 'middle_name': [null, Validators.required],
      'user_type': [null, Validators.required],
      'event_time': [null, Validators.required],
      'event_date': [null, Validators.required],
      'event_name': [null, Validators.required],
      'city': [null, Validators.required],
      'event_location': [null, Validators.required],
      'paymetoption': [null, Validators.required],
      'profile_pic': [null, Validators.required],
      'gender_type': [null, Validators.required],
      'dob': [null, Validators.required],
      'contact_us': [null, Validators.required],
      'mobile_number': [null, Validators.required],
      'confirm_password': [null, Validators.required],
      'password': [null, Validators.required],


    })

    // this.drop_down_list = this.userType.map((data: any) => {
    //   return { id: data.id, itemName: data.name }
    // });
    // this.gender_drop_down_list = this.genderData.map((data: any) => {
    //   console.log("hggg data", data)
    //   return { id: data.id, itemName: data.name }
    // });


    // this.payment_drop_down_list = this.payment_type.map((data: any) => {
    //   return { id: data.id, itemName: data.name }
    // });


  }

  signupPage() {

    let body = this.signupFrom.value;

    // if (this.fileToUpload !== undefined && this.fileToUpload !== null && this.fileToUpload !== '') {
    //   body.image = this.fileToUpload;
    //   console.log("image file is ", this.fileToUpload);
    // }

    if (this.profile_pic.files && this.profile_pic.files[0]) {
      let fileToUpload = this.profile_pic.files[0];
      // console.log("fiel upday",fileToUpload);

      body.profile_pic = fileToUpload;
    }



    // let form_data = new FormData();
    // for (let key in body) {
    //   form_data.append(key, body[key]);
    // }

    // console.log("body==> signup", body)
    this.apiserviceService.user_sign_up(body, (result) => {
      if (result['status']) {
        this.flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 1000 });
        this.router.navigate(['/login'])
      } else {
        this.flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 1000 });

      }

    })
  }

  change_value_type($event: any) {
    this.usertype = $event.id;
    // console.log("fdddd", $event.id);
  }

  change_gender_type($event: any) {
    // this.usertype = $event.id;
    // console.log("fdddd", $event.id);
  }


  fileChange(fileInput: any) {
    // let img1 = this.profile_pic.nativeElement;
    this.fileToUpload = fileInput.target.files;


    // if (img1.files && img1.files[0]) {
    //   this.fileToUpload = img1.files[0];
    //   // body.image1 = fileToUpload;
    //   // console.log(" body.image1", body.image1)
    // }


    // this.signupPage({data:this.fileToUpload})
    // this.uploadedFiles = element.target.files;
    // console.log("file select", this.uploadedFiles);

  }

  cancelForm() {
    this.router.navigate(['/login'])

  }
}
