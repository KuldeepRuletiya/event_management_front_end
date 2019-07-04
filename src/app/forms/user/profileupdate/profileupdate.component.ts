import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
// import { UsersService } from '../../../services/users.service';
import { ApiserviceService } from 'src/app/services/ApiServices/apiservice.service';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  profileupdateForm: FormGroup;
  payment_type: any = [
    { id: 1, name: "cash" },
    { id: 2, name: "paytm" },
    { id: 3, name: "phonepay" },
    { id: 4, name: "googlepay" },
    { id: 5, name: "atm" },
  ]

  paymetoptiondrop: any = {
    text: "Select",
    noDataLabel: "No Data Available",
    enableSearchFilter: true,
    singleSelection: true,
  };
  drop_down_list: any = [];

  constructor(private fb: FormBuilder, private apiserviceService: ApiserviceService) { }

  ngOnInit() {
    this.profileupdateForm = this.fb.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'middle_name': ['', Validators.required],
      'event_time': ['', Validators.required],
      'event_date': ['', Validators.required],
      'event_name': ['', Validators.required],
      'city': ['', Validators.required],
      'event_location': ['', Validators.required],
      'email': ['', Validators.required],
      'paymetoption': ['', Validators.required],
    })

    this.drop_down_list = this.payment_type.map((data: any) => {
      return { id: data.id, itemName: data.name }
    });

  }

  get first_name(): any { return this.profileupdateForm.get('name.first_name'); }

  get name(): any { return this.profileupdateForm.get('last_name'); }





  signupPage(data: any) {
    console.log("registration data", data);
  }
}
