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
<template is="dom-repeat" items="[[productListItem]]">
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
          <div class="totals-value" id="cart-subtotal">[[totalPrice]]</div>
        </div>
        <div class="totals-item">
          <label>Tax (1%)</label>
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

          <!-- <button class="checkout">Check out</button> -->
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
     // Getting count from window object
     count: {
      type: Number,
      value: 0
    },
    //final total price  
    totalPrice: {
      type: Number,
      value: 0,
    }

    }
  }



  
  ready() {
      super.ready();
//for displying product in cart page
    this.productListItem = JSON.parse(window.localStorage.getItem('setProductItemsInLocalStorage'));
    console.log('this.productListItem :' +this.productListItem);
// total calculated amount in summarytotalamount
    this.totalPrice = window.localStorage.getItem('totalprice');
// total calculated amount in summarytotalamount
    this.deliveryCharges = this.totalPrice * 0.02;
// total calculated amount in summarytotalamount
    this.tax = this.totalPrice * 0.01;
// total calculated amount in summarytotalamount
    this.productTotalPrice = Math.round(Number(this.totalPrice) + Number(this.deliveryCharges) + Number(this.tax));
  }



// Removing the product from the add to cart page
_removeFn(e){
    //getting the particular index id
    var indexId= e.model.index;
    var totalPrice = 0;
    // comparing the index id with productListItem id by iterating
    this.productListItem.forEach((item, i) => {
      if(indexId == i){
         // subtract the deleted product price from the total price
        totalPrice = this.totalPrice - this.productListItem[i][2];      
        // removing the matched id from shoppingcart
        this.productListItem.splice(indexId, 1);
        //set item back into localStorage
        window.localStorage.setItem('setProductItemsInLocalStorage', JSON.stringify( this.productListItem));
        // getting the length affter deleting item
        this.count= this.productListItem.length;
        window.localStorage.setItem('count', this.count);
        // getting the productListItem
      this.productListItem = JSON.parse(window.localStorage.getItem("setProductItemsInLocalStorage"));
        // setting the total price to this.total price
        window.localStorage.setItem('totalprice', totalPrice);
        this.totalPrice = totalPrice;
      // total calculated amount in summarytotalamount
          this.deliveryCharges = totalPrice * 0.02;
      // total calculated amount in summarytotalamount
          this.tax = totalPrice * 0.01;
      // total calculated amount in summarytotalamount
          this.productTotalPrice = Math.round(Number(totalPrice) + Number(this.deliveryCharges) + Number(this.tax));
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
    localStorage.clear();
    window.localStorage.setItem('count', this.count);
    this.set('route.path', '/myLogin');
  }

}
/*register element to the browser*/
window.customElements.define('my-shopping-cart', MyShoppingCart);
