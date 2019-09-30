import { Component, ViewChild } from '@angular/core';
// import { NavController, IonSlides } from '@ionic/angular';
import { Platform } from '@ionic/angular';

import * as WC from 'woocommerce-api';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpt: any;
  WooCommerce: any;
  products: any[];

  // @ViewChild('productSlides', { static: false }) productSlides: IonSlides;

  constructor(
    private platform: Platform
  ) {
    this.slideOpt = {
      loop: true,
      autoplay: true
    };    

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // console.log('WC : ', WC);

      const api = new WooCommerceRestApi({
      // this.WooCommerce = new WC({
        url: 'http://localhost/wordpress',
        consumerKey: 'ck_a9dcb267cbcf9faa4b564bc006a52859e5f2efb6',
        consumerSecret: 'cs_cfc3fd2a9c000b221fd8a62ee8430dfa3ad581e7',
        // wpAPI: true, 
        version: 'wc/v3',
        // queryStringAuth: true
      });
      console.log('api : ', api);
      // console.log('this.WooCommerce : ', this.WooCommerce);
      // api.get("products").then( (data: any) => {
      //   console.log(data.body);
      // }, (err: any) => {
      //   console.log('Error: ', err);
      // });
      
      // this.WooCommerce.getAsync("products").then( (data: any) => {
      //   console.log(JSON.parse(data.body));
      //   this.products = JSON.parse(data.body).products;
      // }, (err: any) => {
      //   console.log('Error: ', err);
      // });

      // setInterval(() => {
      //   if(this.productSlides.getActiveIndex() == this.productSlides.length() -1)
      //     this.productSlides.slideTo(0);

      //     this.productSlides.slideNext();
      // }, 3000)

    });
  }

}
