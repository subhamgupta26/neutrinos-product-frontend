import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token = localStorage.getItem('token');
  userName= '';
  isToken = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.setUserName();
  }



  setUserName() {
    if ( this.token ) {
      this.isToken = true;
      this.userService.getCurrentUser().subscribe((response) => {
        this.userName = response['name'];
      });
    }
  }
}
