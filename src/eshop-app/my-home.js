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


export class MyHome extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style">
        :host {
          display: block;

          padding: 10px;
        }

    /*---------------------------Featured-categories styles starts here----------------------*/
        #example-sizing-cover {
                width: 355px;
                height: 250px;
                background: #ddd;
              }
    /*----------------------------Featured-categories styles ends here----------------------*/

    /*--------------------------------------website-feature styles stars here----------------------*/

              div#website-features {
                  margin: 20px;
              }

              .feature-content{
                flex-grow: 4;
                text-align: center;
              }

              .flex-container{
                display: flex;
                flex-direction: row;
                align-items: stretch;
              }


        /* Responsive layout - makes a one column layout instead of a two-column layout */
              @media (max-width: 800px) {
                .flex-container {
                  flex-direction: column;
                }
              }

  /*--------------------------------------website-feature styles ends here----------------------*/

  /*--------------------------------------footer styles starts here----------------------*/

        #footer{
          background: black;
          color: white;
        }

        .footer-content{
          flex-grow: 4;
          text-align: center;
        }

        .copyright
        {
        	margin-bottom: -80px;
        	text-align: center;
        	font-size: 15px;
        	padding-bottom:20px;
          color: #FFF;
        }
    /*--------------------------------------footer styles ends here----------------------*/
      </style>


                              <!---Featured-categories  ------>
<div id="Featured-categories">
  <div class="">
    <a href="https://www.amazon.in/s?k=headset&crid=1HHSJ7LSR5LX0&sprefix=headset%2Caps%2C371&ref=nb_sb_ss_ts-doa-p_1_7"><iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/headphones-3683983_960_720.jpg"></iron-image></a>

    <a href="https://www.amazon.in/s?k=dslr+camera+nike&ref=nb_sb_noss_2"><iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/camera-431119_960_720.jpg"></iron-image></a>

    <a href="https://www.amazon.in/s?k=hipster+shoe&ref=nb_sb_noss_2"><iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/hipster-958805_960_720.jpg"></iron-image></a>
  </div>
</div>
<br/>
                              <!---Featured-categories  ------>

<!-- listing the product componnent -->
<my-product></my-product>
<!-- listing all newly araviales product -->
<my-Arrivals></my-Arrivals>


                                  <!---website feature section starts here ------>


<div class="flex-container" id="website-features">

  <div class="feature-content">
  <img src="https://image.shutterstock.com/image-vector/certified-original-stamp-design-vector-600w-710037370.jpg" style="width: 75px;">
    <p class=""><b>100% Original items </b> <br/>are avilable at company.</p>
  </div>

  <div class="feature-content" >
  <img src="https://cdn0.iconfinder.com/data/icons/large-black-icons/512/Refresh_reload_arrow_sync.png" style="width: 80px;" class="">
    <p><b>Return within 30 days </b> <br/>of receving your order.</p>
  </div>


  <div class="feature-content" >
  <img src="./src/images/mail-clipart-shipping-truck-download-shipping-icon-png-shipping-truck-png-860_480.png" style="width: 80px;">
    <p><b>Return within 30 days </b> <br/>of receving your order.</p>
  </div>



  <div class="feature-content" >
    <img src="http://simpleicon.com/wp-content/uploads/credit-card-6.png" style="width: 80px;"/>
    <p><b>Return within 30 days </b> <br/> of receving your order.</p>
  </div>
</div>

                                  <!---website feature section ends here ------>

                                  <!---footer section starts here ------>

<div id="footer">
  <div class="flex-container">
      <div class="footer-content">
        <h2>Useful Links</h2>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Return Policy</p>
        <p>Discount Coupons</p>
      </div>

      <div class="footer-content">
        <h2>Company</h2>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Career</p>
        <p>Affiliate</p>
      </div>

      <div class="footer-content">
      <h2>Follow Us On</h2>
        <p><i class="fa fa-facebook-official"></i> Facebook</p>
        <p><i class="fa fa-youtube-play"></i> Youtube</p>
        <p><i class="fa fa-linkedin"></i> Linkedin</p>
        <p><i class="fa fa-twitter"></i> Twitter</p>
      </div>
    </div>
  <hr>
  <p class="copyright"> Resived All Rights by eShop</p>
</div>
                                  <!---footer section starts here------>
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
      }
    };
  }


}
/*register element to the browser*/
window.customElements.define('my-home', MyHome);
