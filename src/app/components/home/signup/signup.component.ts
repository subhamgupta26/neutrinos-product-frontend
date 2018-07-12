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
  rePassword ='';

  constructor(private homeService: HomeService, public router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  signup() {
    if(this.validate()){
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
  }

  login() {
    this.router.navigate(['login']);
  }

  validate(){
    if(this.user.name.trim()==='' || this.user.email.trim() === '' || this.user.password.trim() === '' ){
 this.toastr.error('Mandatory fields cannot be empty');
      return false;     
    }
        if(!this.validateEmail(this.user.email)){
        this.toastr.error('Please enter a valid email address');
        return false;
    }
    if(this.user.password != this.rePassword){
      this.toastr.error('Password and Confirm password doesnot match');
      return false;
    }

    return true;
  }
    validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


}
