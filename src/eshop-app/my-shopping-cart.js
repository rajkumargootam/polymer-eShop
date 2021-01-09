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




let productList = [
                    {
                      "id": 1,
                      "img": "./src/images/iphone.jpg",
                      "categoryId": "1",
                      "productName": "iPhone",
                      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                      "price": 40.00,
                      "status": "none",
                      "stock": "In stock",
                      "review": "(250 review)",
                      "rating": 4
                    },
                    {
                      "id": 2,
                      "img": "./src/images/casio-edifice-bg.jpg",
                      "categoryId": "2",
                      "productName": "Casio Edifice",
                      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                      "price": 100,
                      "status": "none",
                      "stock": "In stock",
                      "review": "(250 review)",
                      "rating": 4
                    },
                    {
                      "id": 3,
                      "img": "././src/images/ipad-black.jpg",
                      "categoryId": "2",
                      "productName": "iPad",
                      "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                      "price": 100,
                      "status": "none",
                      "stock": "In stock",
                      "review": "(250 review)",
                      "rating": 4
                    }

  ];



class MyShoppingCart extends PolymerElement {
  static get template() {
    return html`
      <style>

        :host {
          display: block;

          padding: 10px;
        }

        .rtable {
          display: inline-block;
          vertical-align: top;
          max-width: 100%;
          overflow-x: auto;
          white-space: nowrap;
          border-collapse: collapse;
          border-spacing: 0;
        }



        .rtable th {
          /* font-size: 14px; */
          text-align: left;
          text-transform: uppercase;
          background: #f2f0e6;
        }

        .rtable th,
        .rtable td {
          padding: 6px 12px;
          border: 1px solid #d9d7ce;
        }


        body {
          margin: 0;
          padding: 25px;
          color: #494b4d;
          font-size: 14px;
          line-height: 20px;
        }

        h1, h2, h3 {
          margin: 0 0 10px 0;
          color: #1d97bf;
        }

        h1 {
          font-size: 25px;
          line-height: 30px;
        }

        h2 {
          font-size: 20px;
          line-height: 25px;
        }

        h3 {
          font-size: 16px;
          line-height: 20px;
        }

        table {
          margin-bottom: 30px;
        }

        a {
          color: #ff6680;
        }

        code {
          background: #fffbcc;
          font-size: 12px;
        }

        .flex-container {
          display: flex;
          flex-direction: row;
        }


        .container-fluid {
             margin-top: 70px
         }

         .card-body {
             flex: 1 1 auto;
             padding: 1.40rem
         }

         .img-sm {
             width: 80px;
             height: 80px
         }

         .itemside .info {
             padding-left: 15px;
             padding-right: 7px
         }

         .table-shopping-cart .price-wrap {
             line-height: 1.2
         }

         .table-shopping-cart .price {
             font-weight: bold;
             margin-right: 5px;
             display: block
         }

         .text-muted {
             color: #969696 !important
         }

         .continueShoppingLink {
             text-decoration: underline;
              color: black;
              font-weight: bold;
              float: right;
         }

        .makePurchaseLink {
             text-decoration: underline;
              color: black;
              font-weight: bold;
              float: right;
              padding-right: 25px;
         }

         .card {
             position: relative;
             display: -ms-flexbox;
             display: flex;
             -ms-flex-direction: column;
             flex-direction: column;
             min-width: 0;
             word-wrap: break-word;
             background-color: #fff;
             background-clip: border-box;
             border: 1px solid rgba(0, 0, 0, .125);
             border-radius: 0px
         }

         .itemside {
             position: relative;
             display: -webkit-box;
             display: -ms-flexbox;
             display: flex;
             width: 100%
         }

         .dlist-align {
             display: -webkit-box;
             display: -ms-flexbox;
             display: flex
         }



         .coupon {
             border-radius: 1px
         }

         .price {
             font-weight: 600;
             color: #212529
         }

         .btn.btn-out {
             outline: 1px solid #fff;
             outline-offset: -5px
         }

         .btn-main {
             border-radius: 2px;
             text-transform: capitalize;
             font-size: 15px;
             padding: 10px 19px;
             cursor: pointer;
             color: #fff;
             width: 100%
         }

         .btn-light {
             color: #ffffff;
             background-color: #F44336;
             border-color: #f8f9fa;
             font-size: 12px
         }

         .btn-light:hover {
             color: #ffffff;
             background-color: #F44336;
             border-color: #F44336
         }

         .btn-apply {
             font-size: 11px
         }


        .product-content{
          flex-grow: 2;
          text-align: center;
        }
        #shopping .flex-container {
          display: flex;
          flex-wrap: wrap;
            flex-direction: row;
        }

        .flex-item-left {
          flex: 50%;
        }

        .flex-item-right {
          /* flex: 50%; */
        }

        /* Responsive layout - makes a one column layout instead of a two-column layout */
        @media (max-width: 800px) {
          .flex-item-right, .flex-item-left {
            flex: 100%;
          }
        }


/*--------------------------------------website-feature ----------------------*/

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


/*--------------------------------------footer ----------------------*/

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

.card-body {
    border: 1px solid black;
    margin-top: 30px;
    padding: 30px;
}



      </style>
      <a href="home" class="continueShoppingLink">Continue Shopping</a>
    <div id="shopping">
          <div class="flex-container">
          <div class="flex-item-left">
    		<table class="rtable">
      			<thead>
      				<tr>
      					<th>Product</th>
                <th>Name</th>
      					<th>Price</th>
      						<!-- <th>&nbsp;</th>     -->
                </tr>
              </thead>
      			<tbody>
              <template is="dom-repeat" items="{{productListItem}}">
      				<tr>
      					<td>
      						<figure class="itemside align-items-center">
                    <img src="[[item.0]]" width="50px" ;class="img-sm">
      						</figure>  </td>
                  <td>
                    <a href="#" class="title text-dark" data-abc="true">[[item.1]]</a>
                  </td>
      					<td>
      						<div class="price-wrap"> <var class="price">[[item.2]]</var></div>
                 </td>
      					<!-- <td>
      						<a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip" data-abc="true"> <i class="fa fa-heart"></i></a>
                    <paper-button raised><iron-icon icon="delete"></iron-icon>Remove</paper-button>
                </td> -->
               </tr>
               </template>
             </tbody>
      		</table>
          </div>

<div class="flex-item-right">
        <div class="product-content">
      		<div class="card">
      			<div class="card-body">
      				<dl class="dlist-align"> <dt>Total price:</dt>
      					<dd class="text-right ml-3">[[productPrice]]</dd> </dl>
      				<dl class="dlist-align"> <dt>Delivery charges:</dt>
      					<dd class="text-right text-danger ml-3"> [[deliveryCharges]]</dd> </dl>
                <dl class="dlist-align"> <dt>Tax:</dt>
                  <dd class="text-right text-danger ml-3"> [[tax]]</dd> </dl>
      				<dl class="dlist-align"><dt>Total:</dt>
      					<dd class="text-right text-dark b ml-3"><strong>[[productTotalPrice]]</strong></dd></dl>
      				<hr>
              <a href="[[rootPath]]myLogin" class="makePurchaseLink" > Make Purchase </a><br/>

              <!-- <a href="#" class="btn btn-out btn-primary btn-square btn-main" data-abc="true"> Make Purchase </a>
              <a href="#" class="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</a> -->
              </div>
            </div>
            </div>
      </div>
</div>
</div>



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
</div> `;
  }

  static get properties() { return {
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
}
window.customElements.define('my-shopping-cart', MyShoppingCart);
