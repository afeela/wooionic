import { Component } from '@angular/core';

// import * as WC from 'woocommerce-api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpt: any;
  WooCommerce: any;

  constructor() {
    this.slideOpt = {
      loop: true,
      autoplay:true
    };

    // this.WooCommerce = new WC({
    //   url: 'http://localhost/wordpress',
    //   consumerKey: 'ck_a9dcb267cbcf9faa4b564bc006a52859e5f2efb6',
    //   consumerSecret: 'cs_cfc3fd2a9c000b221fd8a62ee8430dfa3ad581e7',
    //   wpAPI: true, 
    //   queryStringAuth: true
    // });

    // console.log('this.WooCommerce : ', this.WooCommerce);

    // this.WooCommerce.getAsync("products").then( (data: any) => {
    //   console.log(JSON.parse(data.body));
    // }, (err: any) => {
    //   console.log(err);
    // });
   }

}
