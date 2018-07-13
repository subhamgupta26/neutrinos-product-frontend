import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  products = [];
  product = { imagePath: '', name: '', price: '' };
  baseUrl = 'http://localhost:3000';
  userId = '';

  constructor(
    private userService: UserService,
    public router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.userService.getAllProducts().subscribe(
      response => {
        console.log(response);
        const myProducts = response['response'];
        for (const myproduct of myProducts) {
          if (myproduct) {
            this.product = myproduct;
            this.product.imagePath = `${this.baseUrl}/${
              myproduct['imagePath']
            }`;
            this.products.push(this.product);
          }
        }
      },
      error => {
        this.toastr.error(error['error'].message);
        console.log(error['error'].status.message);
      }
    );
  }

  addToCart(product) {
    this.userService.getCurrentUser().subscribe(
      userResponse => {
        console.log(userResponse);
        this.userId = userResponse['_id'];

        this.userService.addToCart(this.userId, product).subscribe(
          response => {
            console.log(response);
            this.toastr.success('Product added to cart');
            this.router.navigate(['cart']);
          },
          error => {
            this.toastr.error(error['error'].message);
            console.log(error['error'].status.message);
          }
        );
      },
      error => {
        this.toastr.error(error['error'].message);
      }
    );
  }
  cart() {
    this.router.navigate(['cart']);
  }

  logout() {
    localStorage.removeItem('token');
    this.toastr.success('Successfully logged out');
    this.router.navigate(['login']);
  }
}
