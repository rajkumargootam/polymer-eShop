/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// Import the Polymer library and html helper function
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-ajax/iron-ajax.js';
/*below is the reference path of my-product.js component*/
import'./my-product.js';
/*below is the reference path of my-arrivals.js component*/
 import'./my-arrivals.js';
 /*below is the reference path of my-footer.js component*/
import'./my-footer.js'
/*below is the reference path of home-styles.js component*/
import'./home-styles.js'
 


export class MyHome extends PolymerElement {
  static get template() {
    return html`
      <style include="home-styles">

      </style>
      <!--  navigation path from one page to another -->
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <!---Featured-categories  ------>
      <div id="Featured-categories">
        <div class="">
          <a href="https://www.amazon.in/s?k=headset&crid=1HHSJ7LSR5LX0&sprefix=headset%2Caps%2C371&ref=nb_sb_ss_ts-doa-p_1_7">
            <iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/headphones-3683983_960_720.jpg"></iron-image>
          </a>
          <a href="https://www.amazon.in/s?k=dslr+camera+nike&ref=nb_sb_noss_2">
            <iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/camera-431119_960_720.jpg"></iron-image>
          </a>
          <a href="https://www.amazon.in/s?k=hipster+shoe&ref=nb_sb_noss_2">
            <iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/hipster-958805_960_720.jpg"></iron-image>
          </a>
        </div>
      </div>
      <br/>
      <!-- listing the product componnent -->
      <my-product></my-product>
      <!-- listing all newly araviales product -->
      <my-Arrivals></my-Arrivals>
      <!---website feature section starts here ------>
      <div class="flex-container" id="website-features">
        <div class="feature-content"> <img src="https://image.shutterstock.com/image-vector/certified-original-stamp-design-vector-600w-710037370.jpg" style="width: 75px;">
          <p class=""><b>100% Original items </b>
            <br/>are avilable at company.</p>
        </div>
        <div class="feature-content"> <img src="https://cdn0.iconfinder.com/data/icons/large-black-icons/512/Refresh_reload_arrow_sync.png" style="width: 80px;" class="">
          <p><b>Return within 30 days </b>
            <br/>of receving your order.</p>
        </div>
        <div class="feature-content"> <img src="./src/images/mail-clipart-shipping-truck-download-shipping-icon-png-shipping-truck-png-860_480.png" style="width: 80px;">
          <p><b>Return within 30 days </b>
            <br/>of receving your order.</p>
        </div>
        <div class="feature-content"> <img src="http://simpleicon.com/wp-content/uploads/credit-card-6.png" style="width: 80px;" />
          <p><b>Return within 30 days </b>
            <br/> of receving your order.</p>
        </div>
      </div>
      <!---website feature section ends here ------>
      <!-- footer component code starts here  -->
      <my-footer></my-footer>
      <!-- footer component code ends here  -->
    `;
  }




  static get properties() {
    return {
      product: {
        type: Array,
        //value: productList,
        notify: true
      },
      arrivalData: {
        type: Array,
       // value: Arrivals,
        notify: true
      },
      section: {
        type: String,
        notify: true
      },
      addCount: {
        type: Number,
        notify: true,
        observer: '_checkCount'
        //value: 0,
      }
    };
  }
_checkCount(e){
  console.log('--home-e');
  console.log(e);
}

}
/*register element to the browser*/
window.customElements.define('my-home', MyHome);
