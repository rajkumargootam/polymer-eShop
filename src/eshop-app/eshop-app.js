import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-badge/paper-badge.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
/*below is the reference path of mylogin.js component*/
import'./my-login.js';
/*below is the reference path of home.js component*/
import'./my-home.js';
/*below is the reference path of my-product-details.js component*/
import'./my-product-details.js';
/*below is the reference path of my-icon.js component*/
import'./my-icons.js';
/*below is the reference path of my-shopping-cart.js component*/
 import'./my-shopping-cart.js';
 /*below is the reference path of my-footer.js component*/
  import'./my-footer.js';
  /*below is the reference path of my-payment.js component*/
   import'./my-payment.js';

import './eShop-styles.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

/**
 * @customElement
 * @polymer
 */
class EshopApp extends PolymerElement {
  static get template() {
    return html`

     <style include="eShop-styles">

      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
         <!-- Drawer content -->
         <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
           <app-toolbar><span id="logoContent">eShop</span> <a href="[[rootPath]]MyShoppingCart" id="shoppinCart"><paper-icon-button id="shoppingIcon" icon="shopping-cart" on-top="shoppinCart"></paper-icon-button>
           <paper-badge for="shoppingIcon" label="[[count]]" class="red"></paper-badge></a> </app-toolbar>

            <!-- <paper-icon-button id="cart-button" icon="shopping-cart" on-top="shoppinCart"></paper-icon-button> -->

           <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
             <!-- <a name="myLogin" href="[[rootPath]]myLogin">Login</a> -->
             <a name="home" href="[[rootPath]]home">Home</a>
             <a name="MyProductDetails" href="[[rootPath]]MyProductDetails">Product Details</a>
             <a name="MyShoppingCart" href="[[rootPath]]MyShoppingCart">shopping Cart</a>

           </iron-selector>
         </app-drawer>

         <!-- Main content -->
         <app-header-layout has-scrolling-region="">
           <app-header slot="header" condenses="" reveals="" effects="waterfall">
             <app-toolbar>
               <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
             </app-toolbar>
           </app-header>
           <!-- </template> -->

           <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
             <my-login name="myLogin"></my-login>
             <my-home name="home"></my-home>
             <my-product-details name="MyProductDetails"></my-product-details>
             <my-shopping-cart name="MyShoppingCart"></my-shopping-cart>
             <my-payment name="MyPayment"></my-payment>
             <my-successfully name="MySuccessfully"></my-successfully>
           </iron-pages>
           <!-- added footer component starts here-->
           <!-- <my-footer></my-footer> -->
          <!-- added footer component ends here -->
         </app-header-layout>
       </app-drawer-layout>
    `;
  }
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      /*to hide the button based on the navShoe condition*/
      navShow:{
        type: Boolean,
        value:true
      },
      count: {
          type: Number,
          value: 0,
        },

      routeData: Object,
      subroute: Object,

    };

  }
  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
     // if (this.page == 'myLogin') {
     //   console.log('navShow : '+ this.navShow);
     //   this.navShow = false;
     // }else{
     //   this.navShow = true;
     // }


    if (!page) {
      this.page = 'home';
    } else if (['myLogin','home','MyProductDetails','MyShoppingCart','MyPayment','MySuccessfully','view404'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
//To hide the app drawer in the login page
    if (page = 'login') {} else {
                this.$.drawer.style.display = "block";

            }
    if (page = 'MyPayment') {} else {
                this.$.drawer.style.display = "block";

            }
    if (page = 'MySuccessfully') {} else {
                this.$.drawer.style.display = "block";

            }
            if (page = 'home') {} else {
                        this.$.drawer.style.display = "block";

                  }

  }


  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.

    switch (page) {
      case 'myLogin':
        import('./my-login.js');
        this.$.drawer.style.display = "none";
        break;
      case 'home':
        import('./my-home.js');
        break;
      case 'MyProductDetails':
        import('./my-product-details.js');
        break;
      case 'MyShoppingCart':
        import('./my-shopping-cart.js');
        break;
        case 'MyPayment':
          import('./my-payment.js');
          this.$.drawer.style.display = "none";
          break;
          case 'MySuccessfully':
            import('./my-successfully.js');
            this.$.drawer.style.display = "none";
            break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
//onClick its navigating to MyShoppingCart
shoppinCart(){
  this.set('route.path', '/MyShoppingCart');
}


 ready() {
     super.ready();

//products displying in cart page
   this.count = window.localStorage.getItem('count');
   console.log(this.count);
   console.log('count');
 }

}

/*register element to the browser*/
window.customElements.define('eshop-app', EshopApp);
