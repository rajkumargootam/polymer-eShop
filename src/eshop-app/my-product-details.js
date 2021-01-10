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
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt fugiat culpa esse aute nulla. malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
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
