import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from '../login/login.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { ProductListComponent } from './product-list/product-list.component';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import { ProductService } from '../services/product.service';
import { LoginAndRegisterService } from '../services/login.service';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CartComponent } from './cart/cart.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbModule,
    MenubarModule,
    InputTextModule,
    PanelMenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    DataViewModule,
    CardModule,
    PanelModule,
    DialogModule,
    ToastModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomepageComponent
  ],
  providers: [ProductService, LoginAndRegisterService, MessageService, CookieService
  ],
  declarations: [HomepageComponent, LoginComponent, RegisterComponent, ProductListComponent, CartComponent],
  entryComponents: [LoginComponent, CartComponent]
})
export class EbusinessModule { }
