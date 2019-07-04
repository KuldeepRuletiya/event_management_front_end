import { Injectable, Inject } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

const APT_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }


  addToLocalStorage(key: string, value: any) {
    this.storage.set(key, value);
  }

}
