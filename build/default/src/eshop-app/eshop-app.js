import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/app-layout/app-drawer/app-drawer.js";
import "../../node_modules/@polymer/app-layout/app-drawer-layout/app-drawer-layout.js";
import "../../node_modules/@polymer/app-layout/app-header/app-header.js";
import "../../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js";
import "../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js";
import "../../node_modules/@polymer/app-route/app-location.js";
import "../../node_modules/@polymer/app-route/app-route.js";
import "../../node_modules/@polymer/iron-pages/iron-pages.js";
import "../../node_modules/@polymer/iron-selector/iron-selector.js";
import "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import { setPassiveTouchGestures, setRootPath } from "../../node_modules/@polymer/polymer/lib/utils/settings.js";
/*below is the reference path of mylogin.js component*/

import './my-login.js';
/*below is the reference path of dashboard.js component*/

import './my-dashboard.js';
/*below is the reference path of my-product-details.js component*/

import './my-product-details.js';
/*below is the reference path of my-icon.js component*/

import './my-icons.js';
/*below is the reference path of my-shopping-cart.js component*/

import './my-shopping-cart.js'; // Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.

setPassiveTouchGestures(true); // Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.

setRootPath(MyAppGlobals.rootPath);
/**
 * @customElement
 * @polymer
 */

class EshopApp extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
      	--app-primary-color: #FFF;
      	--app-secondary-color: black;
      	display: block;
      }

      app-drawer-layout:not([narrow]) [drawer-toggle] {
      	display: none;
      }

      app-header {
      	color: #fff;
      	background-color: var(--app-primary-color);
      }

      app-header paper-icon-button {
      	--paper-icon-button-ink-color: white;
      }

      .drawer-list {
      	margin: 0 20px;
      }

      .drawer-list a {
      	display: block;
      	padding: 0 16px;
      	text-decoration: none;
      	color: var(--app-secondary-color);
      	line-height: 40px;
      }

      .drawer-list a.iron-selected {
      	color: black;
      	font-weight: bold;
      }


      /*------------------------------top nav bar code ----------------*/

      .top-nav-bar {
      	height: 57px;
      	top: 0;
      	position: sticky;
      	background: #fff;
      	margin-bottom: 20px;
      	border-bottom: 3px solid orange;
      	z-index: 2;
      }

      a#eshop {
      	text-decoration: none;
      }

      .logo {
      	height: 40px;
      	margin: 0px 10px;
      	color: orange;
      }

      .form-control {
      	margin-top: 9px;
      	margin-left: 30px;
      	border: 1px solid orange !important;
      	border-top-left-radius: 20px !important;
      	border-bottom-left-radius: 20px !important;
      	border-top-right-radius: 0 !important;
      	border-bottom-right-radius: 0 !important;
      	box-shadow: none !important;
      }

      .input-group-text {
      	background: orange !important;
      	border: 1px solid orange !important;
      	margin: 9px 10px 0px 0 !important;
      	border-top-left-radius: 0px !important;
      	border-bottom-left-radius: 0px !important;
      	border-top-right-radius: 20 !important;
      	border-bottom-right-radius: 20 !important;
      	cursor: pointer;
      }

      .search-box {
      	display: inline-flex;
      	width: 60%;
      }

      .fa-search {
      	color: #fff;
      }

      .menu-bar {
      	width: 40%;
      	height: 57px;
      	float: right;
      }

      .menu-bar ul {
      	display: inline-flex;
      	float: right;
      }

      .menu-bar ul li {
      	border-left: 1px solid #fff;
      	list-style-type: none;
      	padding: 15px 35px;
      	text-align: center;
      	background-color: orange;
      	cursor: pointer;
      }

      .menu-bar ul li a {
      	color: #fff;
      	font-size: 12px;
      	font-weight: bold;
      	text-decoration: none;
      }

      .fa-shopping-basket {
      	margin-right: 5px;
      }

      paper-icon-button {
      	color: orange;
      }

      paper-button#logOut-button {
      	background: orange;
      	font-size: 15px;
      	margin: 12px;
      }

      .top-nav-bar {
      	width: 100%;
      }

      paper-icon-button#search-button {
      	color: #FFF;
      }

      input#searchInput {
      	width: 100%;
      }

      input:focus {
      	color: orange;
      }

      .menu-bar {
      	text-align: right;
      }

      @media only screen and (max-width: 980px) {
      	.top-nav-bar {
      		height: 25px;
      		border-bottom: 0;
      	}
      	.search-box {
      		width: 100%;
      	}
      	.menu-bar {
      		width: 100%;
      	}
      }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
         <!-- Drawer content -->
         <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
           <app-toolbar>Menu</app-toolbar>
           <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
             <a name="myLogin" href="[[rootPath]]myLogin">Login</a>
             <a name="myDashboard" href="[[rootPath]]myDashboard">Dashboard</a>
             <a name="MyProductDetails" href="[[rootPath]]MyProductDetails">Product Details</a>
             <a name="MyShoppingCart" href="[[rootPath]]MyShoppingCart">shopping Cart</a>
           </iron-selector>
         </app-drawer>

         <!-- Main content -->
         <app-header-layout has-scrolling-region="">

           <!-- <template is="dom-if" if="{{navShow}}"> -->

           <app-header slot="header" condenses="" reveals="" effects="waterfall">
             <app-toolbar>
               <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
               <!-- <div main-title="">eShop</div> -->
               <div class="top-nav-bar">
                <div class="search-box">
                <h1 class="logo">eShop</h1>
                <input id="searchInput" type="text" class="form-control">
                <span class="input-group-text"><paper-icon-button id="search-button" icon="search"></paper-icon-button></span>
                </div>
                <div class="menu-bar">
                <paper-icon-button id="cart-button" icon="shopping-cart"></paper-icon-button>
                <paper-button id="logOut-button" raised>Log Out</paper-button>

                </div>
               </div>


             </app-toolbar>
           </app-header>
           <!-- </template> -->

           <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
             <my-login name="myLogin"></my-login>
             <my-dashboard name="myDashboard"></my-dashboard>
             <my-product-details name="MyProductDetails"></my-product-details>
             <my-shopping-cart name="MyShoppingCart"></my-shopping-cart>

           </iron-pages>
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
      navShow: {
        type: Boolean,
        value: true
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return ['_routePageChanged(routeData.page)'];
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
      this.page = 'myLogin';
    } else if (['myLogin', 'myDashboard', 'MyProductDetails', 'MyShoppingCart'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    } // Close a non-persistent drawer when the page & route are changed.


    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
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
        break;

      case 'myDashboard':
        import('./my-dashboard.js');
        break;

      case 'MyProductDetails':
        import('./my-product-details.js');
        break;

      case 'MyShoppingCart':
        import('./my-shopping-cart.js');
        break;

      case 'view404':
        import('./my-login.js');
        break;
    }
  }

}
/*register element to the browser*/


window.customElements.define('eshop-app', EshopApp);