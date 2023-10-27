import { Component } from '@angular/core';
import { authentication } from '../Skillz_services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(private authentication: authentication){
  }
  public logout(): void{
      this.authentication.logout();
  }
}
