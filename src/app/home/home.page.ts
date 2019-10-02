import { Component, ViewChild } from '@angular/core';
import { IonSlides, ToastController , IonInfiniteScroll } from '@ionic/angular';
import { Platform } from '@ionic/angular';

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  api = new WooCommerceRestApi({
    url: 'http://localhost/wordpress',
    consumerKey: 'ck_356fdca2733429e1bcf4e8689778b67d22c2911d',
    consumerSecret: 'cs_7c8381923c832d553555ced975d8fb8d099d1521',
    version: 'wc/v3'
  });

  slideOpt: any;
  WooCommerce: any;
  products: any[];
  page: number = 2;
  moreProducts: any[];
   
  @ViewChild('productSlides', { static: false }) productSlides: IonSlides;
  @ViewChild('refresherRef', { static: false }) refresherRef;

  dataList:any;

  constructor(
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.slideOpt = {
      loop: true,
      autoplay: true
    };    
    
    this.initializeApp();    
  }

  initializeApp() {
    this.platform.ready().then(() => {
    
      this.api.get("products").then( (data: any) => {
        this.products = data.data;
      }, (err: any) => {
        console.log('initializeApp API Error: ', err);
      });

      this.loadMoreProducts(null);

    });
    
    setInterval(async () => {
      if(await this.productSlides.getActiveIndex() == await this.productSlides.length() - 1)
        this.productSlides.slideTo(0);

        this.productSlides.slideNext();
    }, 3000);
  }

  loadMoreProducts (event: any) {

    if(event == null) {
      this.page = 2;
      this.moreProducts = [];
    }
    else { this.page++; }      

    this.api.get("products?page=" + this.page).then( async (data: any) => {

      this.moreProducts = this.moreProducts.concat(data.data);

      if (event != null) { 
        this.refresherRef.complete(); 
        this.presentToast();
      }
    }, (err: any) => {
      console.log('loadMoreProducts Error: ', err);
    });
  }  

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'No more products!',
      duration: 2000
    });
    toast.present();
  }

}
