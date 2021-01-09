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
import "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../node_modules/@polymer/iron-icons/iron-icons.js";

class MyProductDetails extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style">
        :host {
          display: block;

          padding: 10px;
        }

      /*  #notes {
          @apply --layout-vertical;
          @apply --layout-wrap;
          height: 344px;
          width: 384px;
        }

        #notes > paper-card {
          box-sizing: border-box;
          max-width: 184px;
          margin: 3px;
          flex: 0 0 auto;
        }*/

      /* #Featured-categories > paper-card {
          box-sizing: border-box;
          max-width: 184px;
          margin: 3px;
          flex: 0 0 auto;
        } */


        .product-content{
          flex-grow: ;
          text-align: center;
        }
        #single-product .flex-container {
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

        /*--------------------------------------Featured-categories starts here----------------------*/
        #example-sizing-cover {
                width: 355px;
                height: 250px;
                background: #ddd;
              }
        /*--------------------------------------Featured-categories ends here----------------------*/
        paper-card.dark{
          margin: 9px;
        }
        iron-icon.star {
          --iron-icon-width: 16px;
          --iron-icon-height: 16px;
          color: var(--paper-amber-500);
          padding: 5px;
        }
        iron-icon.star:last-of-type { color: var(--paper-grey-500); }

        /*--------------------------------------On sale Product----------------------*/

        .title-box
        {
        	background-color: orange;
        	color: #fff;
        	width:130px;
        	padding:4px 10px;
        	height: 32px;
        	margin-bottom: 30px;
        	display: flex;
        }

        .title-box h2
        {
        	font-size: 16px;
        }

        .title-box::after
        {
        	content: '';
        	border-top: 40px solid orange;
        	border-right:50px solid transparent;
        	position: absolute;
        	display: flex;
        	margin-top: -4px;
        	margin-left: 140px;
        }

        /*--------------------------------------Product-top ----------------------*/

.product-top
{
	width: 100%;
}
.overlay-right
{
	display: block;
	opacity: 0;
	position: absolute;
	top: 10%;
	margin-left: 0;
	width: 70px;
}
.overlay-right .fa
{
	cursor: pointer;
	background-color: #fff;
	color: #000;
	height: 35px;
	width: 30px;
	padding: 7px;
	margin-top: 5%;
	margin-bottom: 5%;
}

.overlay-right .btn-secondary
{
	background: none !important;
	border: none !important;
	box-shadow: none !important;
}

.product-top:hover .overlay-right
{
	opacity: 1;
	margin-left: 5%;
	transition: 0.5s;
}

.product-top img{
  padding: 16px;
}

@media only screen and (max-width: 980px)
{
	.product-top img
	{
	height: 360px;
  width: 360px;
	}
}


/*--------------------------------------product-bottom ----------------------*/

.product-bottom .star
{
	color: orange;
	font-size: 10px;
  text-align: center;
}

.product-bottom h3
{
	font-size: 20px;
	font-weight: bold;
  text-align: center;
}

.product-bottom h5
{
	font-size: 15px;
	padding-bottom: 10px;
  text-align: center;
}

/*--------------------------------------product-description ----------------------*/
.product-description h4
{
	margin-top: 50px;
	color: orange;
}
.product-description p
{
	margin-top: 30px;
}

.product-description hr
{
	margin-top: 30px;
}






/*--------------------------------------product-bottom ----------------------*/

.footer{
  background: black;
}
paper-card.footer-card{
  width: 30%;
  box-shadow: none;
  background: black;
  color: #FFF;
}
.footer-content{
    padding: 0 70px;
}
/* paper-card#truck > #img{
  vertical-align: middle;
  width: 20%;
} */

/* paper-card.website-feature{
      padding: 16px 40px;
} */


/*--------------------------------------footer ----------------------*/

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

.widthSize{
      width: 20px;
}

      </style>



<div id="single-product">
  <div class="flex-container">
      <div class="product-content flex-item-left">
        <iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/headphones-3683983_960_720.jpg"></iron-image>
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

      					<p class="price">USD $15.00</p>
      					<p><b>Availability:</b> In Stock</p>
      					<p><b>Condition:</b> New</p>
      					<p><b>Brand:</b> Apple</p>
      					<lable>Quantity:</lable>
                <iron-input value="1">
                  <input class="widthSize">
                </iron-input>
                <paper-button raised><iron-icon icon="shopping-cart"></iron-icon>Add to Cart</paper-button>
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

<!-----------------------------------similar Product starts here --------------------->


<!-- title div -->
<div class="title-box">
<h2>Similar</h2>
</div>

<!-- cards section -->
<div id="notes">
<paper-card class="dark">
<div class="product-top">
<!-- image  -->
  <a href="product-details.html"><img src="./src/images/samsung_galaxy_note3_note3neo.jpg" style="width: 190px; height: 187px;" class=""></a>
  <div class="overlay-right">
  <!-- display button icons  -->
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

  <div class="product-bottom">
  <!-- display rating here  -->
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <!-- product Name -->
      <h3>Samsung Galaxy Note3</h3>
      <!-- product price -->
      <h5>$40.00</h5>
  </div>
</div>
</paper-card>
<paper-card class="dark">
<div class="product-top">
  <a href="product-details.html"><img src="./src/images/cam.jpg" style="width: 223px; height: 187px;"  class=""></a>
  <div class="overlay-right">
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

  <div class="product-bottom">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>DSLR Camera</h3>
      <h5>$40.00</h5>
  </div>
</div>
</paper-card>
<paper-card class="dark">
<div class="product-top">
  <a href="product-details.html"><img src="./src/images/mi-band.jpg" style="width: 190px; height: 187px;"  class=""></a>
  <div class="overlay-right">
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

  <div class="product-bottom">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>Mi Band</h3>
      <h5>$40.00</h5>
  </div>
</div>
</paper-card>
<paper-card class="dark">
<div class="product-top">
  <a href="product-details.html"><img src="./src/images/Bose-Soundlink-Micro-Speakers.jpg" style="width: 200px; height: 187px;"  class=""></a>
  <div class="overlay-right">
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

  <div class="product-bottom">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>Bose Soundlink Micro <br/> Speakers</h3>
      <h5>$40.00</h5>
  </div>
</div>
</paper-card>
</div>

<!-----------------------------------similar Product ends here --------------------->

<!------------------------------------- footer section starts here ------------------------------------->

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
<!------------------------------------- footer section ends here ------------------------------------->

<my-dashboard mysection="[[section]]"></my-dashboard>

    `;
  }

}

window.customElements.define('my-product-details', MyProductDetails);