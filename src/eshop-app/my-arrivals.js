
/**
 *Import the Polymer library
 * Import the Polymer paper-card
 * Import the Polymer paper-button
 * Import the Polymer paper-icon-button
 * Import the Polymer iron-icons
 * Import the Polymer iron-ajax to read the JSON
  Import the Polymer array-selector
 * Import the Base class AddToCart form addtocart component
 */


import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/polymer/lib/elements/array-selector.js';
import { AddToCart } from './my-addtocart.js';




 // child-elements which takes the reffernce from the parent component my-addtocart.js

class MyArrivals extends AddToCart {

  // Provide a DOM template for the element
  static get template() {

    // Tag the returned template literal with the html helper function
    // to convert it into an instance of HTMLTemplateElement
    return html`
      <style include="shared-products-style">
        /* import custom styles and included shared-products-style  */
        /* custom elements default to display: inline */

        paper-button#addToCartBtn {
          padding: 10px 74px 10px 74px;
            margin: 4px;
            background: orange;
            color: #FFF;

        }

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

                paper-card.dark{
                  margin: 4px;
                }
                iron-icon.star {
                  --iron-icon-width: 16px;
                  --iron-icon-height: 16px;
                  color: var(--paper-amber-500);
                  padding: 12px;
                }
                iron-icon.star:last-of-type { color: var(--paper-grey-500); }

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
          padding: 0px;
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


        .product-bottom {
            background: #f5f5f5;
        }
        .product-bottom .star
        {
        	color: orange;
        	font-size: 10px;
          text-align: center;
        }

        .product-bottom h3
        {
        	font-size: 16px;
        	font-weight: bold;
          text-align: center;
        }

        .product-bottom h5
        {
        	font-size: 15px;
        	padding-bottom: 10px;
          text-align: center;
        }
        paper-button#addToCartBtn{
          width: 100%;
          margin: 10px 0px;
        }
        /*product-button ends here */
        .website-feature{
            box-shadow: none;
        }


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

        div#notes{
          margin: 10px;

        }
      </style>

      <!-- To read the json data  using iron-ajax starts here
      auto is use when we want to display the data on page load -->

      <iron-ajax
      auto
      url="./src/data/arrivals.json"
      handle-as="json"
      last-response="{{response}}">
      </iron-ajax>
    <!-- To read the json data  using iron-ajax ends here -->
    
                                <!---New Arrivals starts here ------>
    <!-- display the title name -->
      <div class="title-box">
      <h2>New Arrivals</h2>
      </div>

      <div id="notes">
      <!-- Getting response data using iron Ajax and displaying product data using dom-repeat and one-way data binding -->
      <!-- for iterating array object we are using dom-repeat -->
      <dom-repeat items="[[response.results]]" id="productListItem">
        <!-- creating template to dispaly the UI content -->
        <template strip-whitespace="">
        <!-- for creating the cards  usig paper-card -->
          <paper-card class="dark" style="">
            <div class="product-top">
              <!-- on click on this image anchor tag navigate to the product details page -->
              <a href="MyProductDetails"><img src="{{item.img}}" class=""></a>
                <!-- this product bottom is mainly for maintain the icons, product name, price $ to manage the div css  -->
              <div class="product-bottom">
        <!-- bleow icons are displayed for rating the product starts here-->
                <iron-icon class="star" icon="star"></iron-icon>
                <iron-icon class="star" icon="star"></iron-icon>
                <iron-icon class="star" icon="star"></iron-icon>
                <iron-icon class="star" icon="star"></iron-icon>
                <iron-icon class="star" icon="star"></iron-icon>
        <!-- bleow icons are displayed for rating the product ends here-->
        <!--  displaying the product name-->
                  <h3>{{item.productName}}</h3>
          <!--  displaying the product price-->
                  <h5>₹{{item.price}}</h5>
          <!-- Button for Addto cart starts here -->
                  <paper-button raised on-click="addToCartBtn" class="custom indigo" id="addToCartBtn">Add to Cart</paper-button>
          <!-- Button for Addto cart ends here -->
              </div>
        <!-- this product bottom is mainly for maintain the icons, product name, price $ to manage the div css  ends here -->
            </div>
          </paper-card>
<!-- for creating the cards  usig paper-card -->
        </template>
<!-- creating template to dispaly the UI content -->
      </dom-repeat>
<!-- for iterating array object we are using dom-repeat -->
      </div>

      <!-- Using  array-selector we are going to push the product details into arraylist -->
      <array-selector id="selector" items="{{response.results}}" selected="{{selected}}" multi toggle></array-selector>
                                        <!---New Arrivals ends here ------>
    `;
    }

  }

/*register element to the browser*/
window.customElements.define('my-arrivals', MyArrivals);
