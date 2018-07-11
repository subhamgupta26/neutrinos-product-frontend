import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {

  products;
  constructor(private userService: UserService, public router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.userService.getAllProducts().subscribe((response) => {
      console.log(response);
      this.products = response;
    },
    error => {
      // toastr.error(error['error'].status.message);
      console.log(error['error'].status.message);
     });
  }

  addToCart(product) {
    this.userService.addToCart('5b4115fa1a37db1760156515', product).subscribe((response) => {
      console.log(response);
      this.router.navigate(['cart']);
    },
    error => {
      // toastr.error(error['error'].status.message);
      console.log(error['error'].status.message);
     });
  }

}
