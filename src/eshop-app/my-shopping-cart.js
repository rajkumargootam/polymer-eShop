/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

 /**
 *Import the Polymer library
 * Import the Polymer paper-card
 * Import the Polymer paper-button
 * Import the Polymer paper-icon-button
 * Import the Polymer iron-icons
 * Imported the shopping-cart-styles.js
 * Imported the my-footer.js
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import './shopping-cart-styles.js'
import'./my-footer.js';



class MyShoppingCart extends PolymerElement {
  static get template() {
    return html`
    <!-- css code is exeting in the external file and we are refering that file in the style tag -->
    <style include="shopping-cart-styles">

    </style>
    <!-- navigating form one page to another page -->
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

    <body >

      
      <!-- Button for Addto cart starts here -->
      <paper-button  on-click="_redirecBtn"  raised class="continueShopping"><iron-icon icon="shopping-cart"></iron-icon>Continue Shopping </paper-button>
      <!-- Button for Addto cart ends here -->
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
          <p class="product-description">[[item.5]]</p>
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

      <!-- footer component code starts here  -->
       <my-footer></my-footer>
      <!-- footer component code ends here  -->
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
      // creating deliveryCharges
      deliveryCharges:{
        type: Number,
        value: null
      },
      //Creating product list Array
      produclistArray:{
        type: Array,
        value: null
      },
     //productPrice is the total amount of the product
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
     },
     count: {
      type: Number,
      value: window.localStorage.getItem("count"),
    },

    }
  }



  ready() {
      super.ready();
      // _productlistfn(){
//for displying product in cart page
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

// Removing the product from the add to cart page
_removeFn(e){
    //getting the particular index id
    var indexId= e.model.index;
    // comparing the index id with productListItem id by iterating
    this.productListItem.forEach((item, i) => {
      if(indexId == i){
        // removing the matched id from shoppingcart
        this.productListItem.splice(indexId, 1);
        //set item back into localStorage
        window.localStorage.setItem('setProductItemsInLocalStorage', JSON.stringify( this.productListItem));
        // decreasing the cout value
        this.count=this.count-1;
        window.localStorage.setItem('count', this.count);
        // setting the 
      this.productListItem = JSON.parse(window.localStorage.getItem("setProductItemsInLocalStorage"));
      // total calculated amount in summarytotalamount
      this.productPrice = window.localStorage.getItem('totalprice');
      // total calculated amount in summarytotalamount
          this.deliveryCharges = this.productPrice * 0.02;
      // total calculated amount in summarytotalamount
          this.tax = this.productPrice * 0.05;
      // total calculated amount in summarytotalamount
          this.productTotalPrice = Math.round(Number(this.productPrice) + Number(this.deliveryCharges) + Number(this.tax));
      // reload page
          location.reload();
      }
  });
  }
  _redirecBtn(){
    this.set('route.path', '/home');
  }


// checkout function
_CheckboxBtn(){
  this.set('route.path', '/myLogin');
}

}
/*register element to the browser*/
window.customElements.define('my-shopping-cart', MyShoppingCart);
