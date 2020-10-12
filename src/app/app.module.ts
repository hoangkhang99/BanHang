import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import {FooterComponent} from './shares/footer/footer.component'
import { MenuComponent } from './shares/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    ProductModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
