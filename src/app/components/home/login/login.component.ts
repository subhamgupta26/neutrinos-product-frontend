import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= {
    email: '',
    name: '',
    password: ''
  };
  constructor(private homeService: HomeService, public router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

login() {
  this.homeService.login(this.user).subscribe((res) => {
    console.log(res);
    localStorage.setItem('token', res['token']);
    this.toastr.success('Login Successful!!');
    this.router.navigate(['producthome']);

  },      error => {
   // toastr.error(error['error'].status.message);
   this.toastr.error(error['error'].message);

  }
);
}

signup() {
  this.router.navigate(['signup']);
}

}
