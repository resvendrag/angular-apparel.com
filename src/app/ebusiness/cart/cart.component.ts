import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MessageService } from 'primeng/api';
import { CookieService } from 'ngx-cookie-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  display: boolean = true;
  cart: any;

  constructor(private productsService: ProductService,
  private messageService: MessageService,
  private cookieService: CookieService,
  private modalService: NgbModal) {
  }

  ngOnInit() {
    var login = this.cookieService.get('username');
    if (login) {
      this.productsService.getCartById(login).then(cart => { this.cart = cart});
    } else {
      this.messageService.add({severity:'error', summary: 'Error Message', detail:'Please login first'}); 
      this.modalService.dismissAll();
    }
  }

  close() {
    this.modalService.dismissAll();
  }
}
