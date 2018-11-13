import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product.model';
import { ProductService } from '../../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];
  @Input() userName: string; 
  selectedProduct: Product;
  displayDialog: boolean = false;

  constructor(private productService: ProductService,
    private modalService: NgbModal) { }

  ngOnInit() {
  
  }

  addItemToCart(product) {
    if (this.userName !== null) {
      this.productService.createOrUpdateCart(this.userName, product.pid);
    } else {
      this.modalService.open(LoginComponent,{
        size: 'sm'
      });
    }
  }

  selectAProduct(product) {
    this.displayDialog = true;
    this.selectedProduct = product;
  }
}
