import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user= {
    email: '',
    name: '',
    password: ''
  };

  constructor(private homeService: HomeService, public router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.homeService.signup(this.user).subscribe((response) => {
      console.log(response);
      this.router.navigate(['producthome']);
    },
         error => {
      // toastr.error(error['error'].status.message);
      console.log(error['error'].status.message);
     });
  }

  login() {
    this.router.navigate(['login']);
  }


}
