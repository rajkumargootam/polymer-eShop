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
<my-success-card></my-success-card>
<my-similar-products></my-similar-products>
<!-----------------------------------similar Product ends here --------------------->




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

window.customElements.define('my-product-details', MyProductDetails);
