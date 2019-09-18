import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfillistComponent } from './profillist/profillist.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { AddUserFormComponent } from './forms/user/add-user-form/add-user-form.component';
import { EditUserFormComponent } from './forms/user/edit-user-form/edit-user-form.component';
import { UserFormComponent } from './forms/user/user-form/user-form.component';
import { ProfileupdateComponent } from './forms/user/profileupdate/profileupdate.component';
import { SignupComponent } from './forms/user/signup/signup.component';
import { EventFormComponent } from './forms/event/event-form/event-form.component';
import { EditEventFormComponent } from './forms/event/edit-event-form/edit-event-form.component';
import { AddEventFormComponent } from './forms/event/add-event-form/add-event-form.component';
import { Custom_api_calling } from './adapters/Custom_api_calling';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { GetProfileManagerDetailsComponent } from './forms/user/get-profile-manager-details/get-profile-manager-details.component';
import { GetManagerEventDetailsComponent } from './forms/user/get-manager-event-details/get-manager-event-details.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ApiserviceService } from './services/ApiServices/apiservice.service';
// import {NgxPaginationModule} from 'ngx-pagination';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ExternalLinkDirectiveDirective } from './customer-directives/external-link-directive.directive';

const appRoutes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profilelist', component: ProfillistComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'updateprofle', component: ProfileupdateComponent },
  { path: 'get_profile_details', component: GetProfileManagerDetailsComponent },
  { path: 'customer_profile_by_id/:id', component: GetProfileManagerDetailsComponent },
  { path: 'event_details_by_id/:id', component: GetManagerEventDetailsComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileupdateComponent,
    ProfillistComponent,
    PagenotfoundComponent,
    EventFormComponent,
    EditEventFormComponent,
    AddEventFormComponent,
    AddUserFormComponent,
    EditUserFormComponent,
    UserFormComponent,
    GetProfileManagerDetailsComponent,
    GetManagerEventDetailsComponent,
    ExternalLinkDirectiveDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    HttpClientModule,
    AngularMultiSelectModule,
    // NgxPaginationModule,
    StorageServiceModule,
    FlashMessagesModule.forRoot(),
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [
    UsersService,
    ApiserviceService,
    Custom_api_calling,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LfZT6UUAAAAAAEvFvQel8tBTsKmrH_Bl4qfxinE',
      } as RecaptchaSettings,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
