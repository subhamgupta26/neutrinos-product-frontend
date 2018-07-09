import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Router } from '@angular/router';

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
  constructor(private homeService: HomeService, public router: Router) { }

  ngOnInit() {
  }

login() {
  this.homeService.login(this.user).subscribe((res) => {
    console.log(res);
    this.router.navigate(['productHome']);

  },      error => {
   // toastr.error(error['error'].status.message);
   console.log(error['error'].status.message);

  }
);
}

signup() {
  this.router.navigate(['signup']);
}

}
