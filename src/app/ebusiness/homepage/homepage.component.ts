import { Component, OnInit, OnChanges } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../login/login.component';
import {MenuItem } from 'primeng/api';
import { ProductService } from '../../services/product.service';
import { CartComponent } from '../cart/cart.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnChanges {

  items: MenuItem[];
  sideItems: MenuItem[];
  accountButton: MenuItem[];
  closeResult: string;
  products: any;
  imagePath = "../../../assets/logo.jpg";
  searchQuery: string;
  username: string = null;
  showloginbutton: boolean = false;
  showCartButton: boolean = false;

  constructor(private modalService: NgbModal, 
    private productService: ProductService,
    private cookieService: CookieService) {}

  ngOnChanges() {
  }

  ngOnInit() {

    this.productService.getProducts(0, 20, '', '').then(products => this.products = products);

    this.items = [
      {
          label: 'Clothing',
          icon: 'pi pi-chevron-circle-down',
          items: [
            { label: 'Dresses', icon: 'pi pi-chevron-circle-right',},
            { label: 'Tops', icon: 'pi pi-chevron-circle-right',},
            { label: 'Bottoms', icon: 'pi pi-chevron-circle-right',},
            { label: 'Tees', icon: 'pi pi-chevron-circle-right',}
          ]
      },
      {
          label: 'Shoes',
          icon: 'pi pi-chevron-circle-down',
          items: [
              {label: 'Heels & Wedges', icon: 'pi pi-chevron-circle-right'},
              {label: 'Flats', icon: 'pi pi-chevron-circle-right'},
              {label: 'Sneakers', icon: 'pi pi-chevron-circle-right'}
          ]
      },
      {
        label: 'Accessories',
        icon: 'pi pi-chevron-circle-down',
        items: [
            {label: 'Bags', icon: 'pi pi-chevron-circle-right'},
            {label: 'Belts', icon: 'pi pi-chevron-circle-right'},
            {label: 'Jewelery', icon: 'pi pi-chevron-circle-right'}
        ]
    }
  ];

  this.accountButton = [
    {
      label: 'Cart',
    },{
      label: 'Login',
    },{
      label: 'Register',
    }
  ]

  this.sideItems = [
    {
        label: 'Brand',
        items: [
          { label: '', icon: ''},
          { label: '', icon: ''},
          { label: '', icon: ''},
        ]
    },{
      label: 'Sizes',
      items: [
        { label: 'XS', icon: 'pi pi-chevron-circle-right'},
        { label: 'S', icon: 'pi pi-chevron-circle-right'},
        { label: 'M', icon: 'pi pi-chevron-circle-right'},
        { label: 'L', icon: 'pi pi-chevron-circle-right'},
      ]
    },{
      label: 'Sort By',
      items: [
        { label: 'Price low', icon: 'pi pi-chevron-circle-right'},
        { label: 'Price high', icon: 'pi pi-chevron-circle-right'},
        { label: 'Popularity', icon: 'pi pi-chevron-circle-right'},
      ]
    }
  ];

  if (this.cookieService.get('username')) {
    this.username = this.cookieService.get('username');
    this.showCartButton = true;
    this.showloginbutton = false;
  } else {
    this.open();
    this.showCartButton = false;
    this.showloginbutton = true;
    }
  }

  open() {
    this.modalService.open(LoginComponent,{
      size: 'sm'
    });
  }

  onClickItem(item) {
    if (item.target.textContent === 'Cart') {
      this.modalService.open(CartComponent, {
        size: 'sm'
      });
    } else {
      this.productService.getProductsByCategory(0, 20, item.target.textContent).then(products => this.products = products);
    }
  }

  openCartModal() {
    this.modalService.open(CartComponent, {
      size: 'sm'
    });
  }

  plainSearch() {
    this.productService.getProducts(0, 20, this.searchQuery, "").then(products => this.products = products);
  }
}
