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
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';




class MyShoppingCart extends PolymerElement {
  static get template() {
    return html`


    <style>
    /*
    I wanted to go with a mobile first approach, but it actually lead to more verbose CSS in this case, so I've gone web first. Can't always force things...

    Side note: I know that this style of nesting in SASS doesn't result in the most performance efficient CSS code... but on the OCD/organizational side, I like it. So for CodePen purposes, CSS selector performance be damned.
    */
    /* Global settings */
    /* Global "table" column settings */
    .product-image {
      float: left;
      width: 20%;
    }

    .product-details {
      float: left;
      width: 37%;
    }

    .product-price {
      float: left;
      width: 12%;
    }

    .product-quantity {
      float: left;
      width: 10%;
    }

    .product-removal {
      float: left;
      width: 9%;
    }

    .product-line-price {
      float: left;
      width: 12%;
      text-align: right;
    }

    /* This is used as the traditional .clearfix class */
    .group:before, .shopping-cart:before, .column-labels:before, .product:before, .totals-item:before,
    .group:after,
    .shopping-cart:after,
    .column-labels:after,
    .product:after,
    .totals-item:after {
      content: '';
      display: table;
    }

    .group:after, .shopping-cart:after, .column-labels:after, .product:after, .totals-item:after {
      clear: both;
    }

    .group, .shopping-cart, .column-labels, .product, .totals-item {
      zoom: 1;
    }

    /* Apply clearfix in a few places */
    /* Apply dollar signs */
    .product .product-price:before, .product .product-line-price:before, .totals-value:before {
      content: '$';
    }

    /* Body/Header stuff */
    body {
      padding: 0px 30px 30px 20px;
      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 100;
    }

    h1 {
      font-weight: 100;
    }
    h1.headerText{
      margin-left: 10px;
    }

    label {
      color: #aaa;
    }

    .shopping-cart {
      margin-top: -45px;
    }

    /* Column headers */
    .column-labels label {
      padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #eee;
    }
    .column-labels .product-image, .column-labels .product-details, .column-labels .product-removal {
      text-indent: -9999px;
    }

    /* Product entries */
    .product {
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    .product .product-image {
      text-align: center;
    }
    .product .product-image img {
      width: 100px;
    }
    .product .product-details .product-title {
      margin-right: 20px;
      font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
    }
    .product .product-details .product-description {
      margin: 5px 20px 5px 0;
      line-height: 1.4em;
    }
    .product .product-quantity input {
      width: 40px;
    }
    .product .remove-product {
      border: 0;
      padding: 4px 8px;
      background-color: #c66;
      color: #fff;
      font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
      font-size: 12px;
      border-radius: 3px;
    }
    .product .remove-product:hover {
      background-color: #a44;
    }

    /* Totals section */
    .totals .totals-item {
      float: right;
      clear: both;
      width: 100%;
      margin-bottom: 10px;
    }
    .totals .totals-item label {
      float: left;
      clear: both;
      width: 79%;
      text-align: right;
    }
    .totals .totals-item .totals-value {
      float: right;
      width: 21%;
      text-align: right;
    }
    .totals .totals-item-total {
      font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
    }

    .checkout {
      float: right;
      border: 0;
      margin-top: 20px;
      padding: 6px 25px;
      background-color: #6b6;
      color: #fff;
      font-size: 25px;
      border-radius: 3px;
    }

    .checkout:hover {
      background-color: #494;
    }

    /* Make adjustments for tablet */
    @media screen and (max-width: 650px) {
      .shopping-cart {
        margin: 0;
        padding-top: 20px;
        border-top: 1px solid #eee;
      }

      .column-labels {
        display: none;
      }

      .product-image {
        float: right;
        width: auto;
      }
      .product-image img {
        margin: 0 0 10px 10px;
      }

      .product-details {
        float: none;
        margin-bottom: 10px;
        width: auto;
        margin-left: 10px;
      }

      .product-price {
        clear: both;
        width: 70px;
        margin: 10px;
      }

      .product-quantity {
        width: 100px;
      }
      .product-quantity input {
        margin-left: 20px;
      }

      .product-quantity:before {
        content: 'x';
      }

      .product-removal {
        width: auto;
      }

      .product-line-price {
        float: right;
        width: 70px;
      }
    }
    /* Make more adjustments for phone */
    @media screen and (max-width: 350px) {
      .product-removal {
        float: right;
      }

      .product-line-price {
        float: right;
        clear: left;
        width: auto;
        margin-top: 10px;
      }

      .product .product-line-price:before {
        content: 'Item Total: $';
      }

      .totals .totals-item label {
        width: 60%;
      }
      .totals .totals-item .totals-value {
        width: 40%;
      }
    }
    </style>
    <!-- navigating form one page to another page -->
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

    <body >

      <h1 class="headerText">Shopping Cart</h1>

    <div class="shopping-cart">
    <!-- taable header names starst here -->
      <div class="column-labels">
        <label class="product-image">Image</label>
        <label class="product-details">Product</label>
        <label class="product-price">Price</label>
        <!-- <label class="product-quantity">Quantity</label> -->
        <label class="product-removal">Remove</label>
        <!-- <label class="product-line-price">Total</label> -->
      </div>
  <!-- taable header names starst here -->
<!-- itterating the UI element and display the data starts here -->
<template is="dom-repeat" items="{{productListItem}}">
<!-- Displaying product img starts here -->
      <div class="product">
        <div class="product-image">
          <img src="[[item.0]]">
        </div>
<!-- Displaying product img ends here -->
<!-- Displaying product details starts here -->
        <div class="product-details">
          <div class="product-title">[[item.1]]</div>
          <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
        </div>
<!-- Displaying product details ends here -->
<!-- Displaying product price ends here -->

        <div class="product-price">[[item.2]]</div>
        <!-- Displaying product details ends here -->

        <!-- <div class="product-quantity">
          <input type="number" value="2" min="1">
        </div> -->
        <!-- Remove button to delete the addto cart data -->
        <div class="product-removal">
          <button class="remove-product" on-click="_removeFn">
            Remove
          </button>
        </div>
        <!-- Remove button to delete the addto cart data -->
        <!-- <div class="product-line-price">[[item.2]]</div> -->
      </div>
</template>
<!-- itterating the UI element and display the data ends here -->
<!-- Displaying the total amount,sub total ,tax ,shipping  starts here-->
      <div class="totals">
        <div class="totals-item">
          <label>Subtotal</label>
          <div class="totals-value" id="cart-subtotal">[[productPrice]]</div>
        </div>
        <div class="totals-item">
          <label>Tax (5%)</label>
          <div class="totals-value" id="cart-tax">[[tax]]</div>
        </div>
        <div class="totals-item">
          <label>Shipping</label>
          <div class="totals-value" id="cart-shipping">[[deliveryCharges]]</div>
        </div>
        <div class="totals-item totals-item-total">
          <label>Grand Total</label>
          <div class="totals-value" id="cart-total">[[productTotalPrice]]</div>
        </div>
      </div>
      <!-- Displaying the total amount,sub total ,tax ,shipping  Ends Here-->

          <!-- <button class="checkout">Checkout</button> -->
          <!-- Button for Addto cart starts here -->
          <paper-button raised on-click="_CheckboxBtn" class="custom checkout indigo" id="">Checkout</paper-button>
          <!-- Button for Addto cart ends here -->
    </div>



    </body>




 `;
  }

  static get properties() { return {
    //productItem for list of the products
      productItem:{
        type: Array,
        notify: true,
        value: null
      },
    //productItem for list of the products
      productListItem:{
        type: Array,
        notify: true,
        value: null
      },
      // deliveryCharges
      deliveryCharges:{
        type: Number,
        value: null
      },
      //Creating product list Array
      produclistArray:{
        type: Array,
        value: null
      },
     //productPrice is the total amount of product
     productPrice:{
       type: Number,
       value: null
     },
     //tax for the all the products
     tax:{
       type: Number,
       value: null
     },
     //productTotalPrice is the total price of the products
     productTotalPrice:{
       type: Number,
       value: null
     }
    }
  }



  ready() {
      super.ready();
      // _productlistfn()
//products displying in cart page
    this.productListItem = JSON.parse(window.localStorage.getItem('setProductItemsInLocalStorage'));
// total calculated amount in summarytotalamount
    this.productPrice = window.localStorage.getItem('totalprice');
// total calculated amount in summarytotalamount
    this.deliveryCharges = this.productPrice * 0.02;
// total calculated amount in summarytotalamount
    this.tax = this.productPrice * 0.01;
// total calculated amount in summarytotalamount
    this.productTotalPrice = Math.round(Number(this.productPrice) + Number(this.deliveryCharges) + Number(this.tax));
  }


_removeFn(e){
  console.log('clciked');
  var indexId= e.model.index;
  this.productListItem.forEach((item, i) => {
    console.log(item, i);
    if(indexId == i){
      console.log('entred',i);
      this.productListItem.splice(indexId, 1);

    }
      //set item back into localStorage
      window.localStorage.setItem('setProductItemsInLocalStorage',JSON.stringify(this.productListItem));
  });

}

_CheckboxBtn(){

  this.set('route.path', '/myLogin');
}



}
window.customElements.define('my-shopping-cart', MyShoppingCart);
