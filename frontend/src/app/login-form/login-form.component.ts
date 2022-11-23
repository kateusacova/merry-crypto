import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
      
  }


  passwordHide = true;

  login() {
    this.authService.login('lauren@merrycrypto.com', '123456').subscribe(
      data => console.log("Success"));
  };

}
