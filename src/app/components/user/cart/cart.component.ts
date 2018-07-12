import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products = [];
  product = {imagePath: '', name: '', price: ''};
  baseUrl = 'http://localhost:3000';
  userId= '';
  constructor(private userService: UserService, public router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.getUserCart();
  }

  getUserCart() {
    this.userService.getCurrentUser().subscribe((userResponse) => {
      console.log(userResponse);
      this.userId = userResponse['_id'];

    this.userService.getUserCart(this.userId).subscribe((response) => {

      console.log(response);
      const myProducts = response['response'];
      for (const myproduct of myProducts) {
        if (myproduct) {
      this.product = myproduct;
      this.product.imagePath = `${this.baseUrl}/${myproduct['imagePath']}`;
      this.products.push(this.product);
      }
    }
  },
    error => {
      // toastr.error(error['error'].status.message);
      console.log(error['error'].status.message);
     });
    },    error => {
      // toastr.error(error['error'].status.message);
      this.toastr.error(error['error'].message);
     }
  );
  }

  productHome() {
    this.router.navigate(['producthome']);
  }

  logout() {
    localStorage.removeItem('token');
    this.toastr.success('Successfully logged out');
    this.router.navigate(['login']);
  }

}
