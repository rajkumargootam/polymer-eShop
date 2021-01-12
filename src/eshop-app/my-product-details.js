/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
/*below is the reference path of my-similar-products.js component*/
 import'./my-similar-products.js';
 /*below is the reference path of my-similar-products.js component*/
  import'./my-success-card.js';
  /*below is the reference path of product-details-styles.js component*/
  import'./product-details-styles.js';
    /*below is the reference path of my-footer component*/
  import'./my-footer.js';


class MyProductDetails extends PolymerElement {
  static get template() {
    return html`
    <!-- created product details styles folder to maintain all the css in that files -->
    <style include="product-details-styles">

    </style>

      </style>



<div id="single-product">
  <div class="flex-container">
      <div class="product-content flex-item-left">
        <iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/mobile.jpg"></iron-image>
      </div>

      <div class="product-content flex-item-left">
      <p class="new-arrival text-center">NEW</p>
      				<h2>iPhone - Black Color </h2>
      				<p>Product Code: IRSC2019</p>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>

      					<p class="price">INR ₹15.00</p>
      					<p><b>Availability:</b> In Stock</p>
      					<p><b>Condition:</b> New</p>
      					<p><b>Brand:</b> Apple</p>
      					<lable>Quantity:</lable>
                <iron-input value="1">
                  <input class="widthSize">
                </iron-input>
                <paper-button id="addTocartProduct"raised><iron-icon icon="shopping-cart"></iron-icon>Add to Cart</paper-button>
      </div>
    </div>
</div>

<!---Product Description ------>

<div class="product-description">
			<h4>Product Description</h4>
			<p>The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system (OS), and as of 2017, there were 2.2 million apps available for it through the Apple App Store, according to Statista.</p>
			<p>The first-generation iPhone was extremely thin (only 11.6 mm thick) but wider and longer than many comparable devices. The display area was a 3.5 inch-wide screen with a multitouch interface and unusually high resolution (160 pixels per inch). Unlike most other smartphones at the time, iPhone did not use a hardware keyboard or a stylus. Instead, a user relied on multiple taps and drags to navigate through iPhone OS 1.0, a mobile version of Apple's OS X for Mac computers. Like the iPod, the iPhone synchronized data with a user's personal computer via a USB port, using Apple iTunes as client software..</p>
			<hr>
		</div>

<!------------------------------ similar Product starts here  --------------------->
<my-similar-products></my-similar-products>
<!------------------------------- similar Product ends here --------------------->
    <!--- footer component starts here --->
      <my-footer></myfooter>
    <!--- footer component starts here --->


    `;
  }
  static get properties() {
    return {
      section: {
        type: String,
        value:'MyProductDetails',
        notify: true
      }
    };
  }



}
/*register element to the browser*/
window.customElements.define('my-product-details', MyProductDetails);
