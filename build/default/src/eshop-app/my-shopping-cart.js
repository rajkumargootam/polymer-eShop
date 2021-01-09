/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { PolymerElement, html } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-card/paper-card.js";
import "../../node_modules/@polymer/paper-button/paper-button.js";
import "../../node_modules/@polymer/paper-checkbox/paper-checkbox.js";
import "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../node_modules/@polymer/iron-icons/iron-icons.js";
let productList = [{
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
}, {
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
}, {
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
}];

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
          font-size: 12px;
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

         a {
             text-decoration: none !important
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
        }

        .flex-item-left {
          flex: 50%;
        }

        .flex-item-right {
          flex: 50%;
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


    <div id="shopping">
      <div class="flex-container">
      	<div class="">
      		<table class="rtable">
      			<thead>
      				<tr>
      					<th>Product</th>
      					<th>Quantity</th>
      					<th>Price</th>
      						<th>&nbsp;</th>    
                </tr>
              </thead>
      			<tbody>
      				<tr>
      					<td>
      						<figure class="itemside align-items-center">
      							<!-- <div class="aside"><img src="./src/images/iphone.jpg" width="50px" ;class="img-sm"></div> -->
                    <img src="./src/images/iphone.jpg" width="50px" ;class="img-sm">
      							<figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">Tshirt with round nect</a>
      								<p class="text-muted small">SIZE: L
      									<br> Brand: MAXTRA</p>
      							</figcaption>
      						</figure>  </td>
      					<td>
      						<select class="form-control">
      							<option>1</option>
      							<option>2</option>
      							<option>3</option>
      							<option>4</option>
      						</select>
                  </td>
      					<td>
      						<div class="price-wrap"> <var class="price">$10.00</var> <small class="text-muted"> $9.20 each </small> </div>  </td>
      					<td>
      						<a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip" data-abc="true"> <i class="fa fa-heart"></i></a>
                  <!-- <a href="" class="btn btn-light" data-abc="true"> Remove </a> -->
                    <paper-button raised><iron-icon icon="delete"></iron-icon>Remove</paper-button>
                </td>
               </tr>
               <tr>
       					<td>
       						<figure class="itemside align-items-center">
       							<div class="aside"><img src="./src/images/iphone.jpg" width="50px" ;class="img-sm"></div>
       							<figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">Remove</a>
       								<p class="text-muted small">SIZE: L
       									<br> Brand: MAXTRA</p>
       							</figcaption>
       						</figure>  </td>
       					<td>
       						<select class="form-control">
       							<option>1</option>
       							<option>2</option>
       							<option>3</option>
       							<option>4</option>
       						</select>
                   </td>
       					<td>
       						<div class="price-wrap"> <var class="price">$10.00</var> <small class="text-muted"> $9.20 each </small> </div>  </td>
       					<td>
       						<a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip" data-abc="true"> <i class="fa fa-heart"></i></a>
                    <paper-button raised><iron-icon icon="delete"></iron-icon>Remove</paper-button>
                 </td>
                </tr>
                <tr>
        					<td>
        						<figure class="itemside align-items-center">
        							<div class="aside"><img src="./src/images/iphone.jpg" width="50px" ;class="img-sm"></div>
        							<figcaption class="info"> <a href="#" class="title text-dark" data-abc="true">Tshirt with round nect</a>
        								<p class="text-muted small">SIZE: L
        									<br> Brand: MAXTRA</p>
        							</figcaption>
        						</figure>  </td>
        					<td>
        						<select class="form-control">
        							<option>1</option>
        							<option>2</option>
        							<option>3</option>
        							<option>4</option>
        						</select>
                    </td>
        					<td>
        						<div class="price-wrap"> <var class="price">$10.00</var> <small class="text-muted"> $9.20 each </small> </div>  </td>
        					<td>
        						<a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light" data-toggle="tooltip" data-abc="true"> <i class="fa fa-heart"></i></a>
                    <!-- <a href="" class="btn btn-light" data-abc="true"> Remove </a> -->
                    <paper-button raised><iron-icon icon="delete"></iron-icon>Remove</paper-button>
                  </td>
                 </tr>
             </tbody>
      		</table>
      	</div>
      	<div class="product-content">
      		<div class="card">
      			<div class="card-body">
      				<form>
      					<div class="form-group">
      						<label>Have coupon?</label>
      						<div class="input-group">
      							<input type="text" class="form-control coupon" name="" placeholder="Coupon code">
                     <span class="input-group-append">
                      <!-- <button class="btn btn-primary btn-apply coupon">Apply</button> -->
                      <paper-button raised>Apply</paper-button>
                     </span>
                   </div>
                  </div>
                </form>                
                </div>
              </div>
            <div class="product-content">
      		<div class="card">
      			<div class="card-body">
      				<dl class="dlist-align"> <dt>Total price:</dt>
      					<dd class="text-right ml-3">$69.97</dd> </dl>
      				<dl class="dlist-align"> <dt>Discount:</dt>
      					<dd class="text-right text-danger ml-3">- $10.00</dd> </dl>
      				<dl class="dlist-align"><dt>Total:</dt>
      					<dd class="text-right text-dark b ml-3"><strong>$59.97</strong></dd></dl>
      				<hr>
              <paper-button raised><iron-icon icon=""></iron-icon>&nbsp; &nbsp; Make Purchase &nbsp; &nbsp;</paper-button><br/>
              <paper-button raised><iron-icon icon=""></iron-icon>Continue Shopping</paper-button>
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

}

window.customElements.define('my-shopping-cart', MyShoppingCart);