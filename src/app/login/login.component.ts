import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { Custom_api_calling } from '../adapters/Custom_api_calling';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiserviceService } from '../services/ApiServices/apiservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrom: FormGroup;
  // myRecaptcha = new FormControl(false)
  constructor(private fb: FormBuilder, private router: Router, private apiserviceService: ApiserviceService, private usersService: UsersService, private custom_api_calling: Custom_api_calling, private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    var emailVal = /^[A-Za-z_][A-Za-z0-9_]*[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;
    // var pass = /^[a-zA-Z0-9]$/;
    this.loginFrom = this.fb.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailVal)])],
      'password': [null, Validators.compose([Validators.required])],
      'recaptchaReactive': [null],
    });

  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }


  loginPage(udata: any) {


    let body = this.loginFrom.value;

    console.log("login form data body", body);

    this.custom_api_calling.http_calling_post('/api/customers/customer_login/', body, (result) => {

      if (result['status']) {
        console.log("login status data", result);
        console.log("rrr", result.message);

        this.usersService.addToLocalStorage('user_email', result['values'][0].email_id);
        this.usersService.addToLocalStorage('user_type', result['values'][0].user_type);


        this.flashMessagesService.show(result.message, { cssClass: 'alert-success', timeout: 1000 });
        result['values'][0].user_type == 'employee' ? this.router.navigate(['/profilelist']) : this.router.navigate(['/event_details_by_id', result['values'][0].id]);
      } else {
        console.log("login status data false", result);
        this.loginFrom.reset();
        this.flashMessagesService.show(result.message, { cssClass: 'alert-danger', timeout: 1000 });
        this.router.navigate(['/login'])
      }
    })
  }

  newTab(){
    window.location.href="https://www.google.com";
  }


  
}
