import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../services/home.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private homeService: HomeService, public router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  signup() {
    this.homeService.signup(this.user).subscribe((response) => {
      console.log(response);
      this.toastr.success('Sign up Successful!!,Please Login');
      this.router.navigate(['login']);
    },
         error => {
      // toastr.error(error['error'].status.message);
      this.toastr.error(error['error'].message);
     });
  }

  login() {
    this.router.navigate(['login']);
  }


}
