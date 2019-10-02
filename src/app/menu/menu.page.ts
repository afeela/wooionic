import { Component, OnInit } from '@angular/core';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Platform } from '@ionic/angular';

// import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  homePage: Component;

  api = new WooCommerceRestApi({
    url: 'http://localhost/wordpress',
    consumerKey: 'ck_356fdca2733429e1bcf4e8689778b67d22c2911d',
    consumerSecret: 'cs_7c8381923c832d553555ced975d8fb8d099d1521',
    version: 'wc/v3'
  });

  categories: any[] = [];

  constructor(
    private platform: Platform
  ) { 
    // this.homePage = 'HomePage';
    this.initializeApp();  
  }

  ngOnInit() {
  }

  initializeApp() {

    this.platform.ready().then(() => {
    
      this.api.get("products/categories").then( (data: any) => {
        let temp: any [] = data.data;

        for (let i=0; i<temp.length; i++) {
          if (temp[i].parent == 0) {
            this.categories.push(temp[i]);
          }
        }        
        console.log('this.categories : ', this.categories);
      }, (err: any) => {
        console.log('Menu page: initializeApp err: ', err);
      });
    });
  }

}
