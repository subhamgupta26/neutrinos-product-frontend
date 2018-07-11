import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserCart();
  }

  getUserCart() {
    this.userService.getUserCart('5b4115fa1a37db1760156515').subscribe((response) => {

      console.log(response);
      this.products = response;
    },
    error => {
      // toastr.error(error['error'].status.message);
      console.log(error['error'].status.message);
     });
  }

}
