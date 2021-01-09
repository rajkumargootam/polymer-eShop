// Import the Polymer library and html helper function
// Import the Polymer paper-card
// Import the Polymer paper-button
// Import the Polymer paper-icon-button
// Import the Polymer iron-ajax
/**
 * using iron-ajax receving json data
 * Using one-way binding bind the json data using dom-repeat for listing products
 * implimented accessibility in products details tabindex, title, role, alt
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/polymer/lib/elements/array-selector.js';
import { AddToCart } from './my-addtocart.js';


// Define the new element as a class
// child-element renders its light DOM children inside this compnent
class MyProduct extends AddToCart {

  // Provide a DOM template for the element
  static get template() {

    // Tag the returned template literal with the html helper function
    // to convert it into an instance of HTMLTemplateElement
    return html`
      <style>
        /* custom elements for the styles */
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


        /*--------------------------------------Product code starts Here ----------------------*/
                  div#notes{
                    margin: 10px;
                  }
       /*--------------------------------------product Ends Here ----------------------*/
               /*------------------product-bottom ends here --------- */

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
        /*------------------product-bottom ends here --------- */

        /*------------------footer ends here --------- */
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
        /*------------------footer ends here --------- */

      </style>


      <!---On sale Product  starts here ------>

<div class="title-box">
<h2>On Sale</h2>
</div>

<iron-ajax
auto
url="./src/data/data.json"
handle-as="json"
last-response="{{response}}">

</iron-ajax>

<div id="notes
  <dom-repeat items="[[response]]" id="productListItem">
    <template strip-whitespace="">
      <paper-card class="dark" style="">
      <div class="product-top">
        <a href\$="[[section]]/[[item.id]]" on-click="getval"><img src="{{item.img}}" class=""></a>

        <div class="product-bottom">
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <h3>{{item.productName}}</h3>
          <h5>₹{{item.price}}</h5>
          <paper-button raised on-click="addToCartBtn" class="custom indigo" id="addToCartBtn">Add to Cart</paper-button>
        </div>
      </div>
      </paper-card>
  </template>
  </dom-repeat>
</div>
    <!-- Using  array-selector we are going to push the product details into arraylist -->
    <array-selector id="selector" items="{{response}}" selected="{{selected}}" multi toggle></array-selector>

      <!---On sale Product ends here ------>
    `;
    }
    //properties section if rquired any
     static get properties() { return {
         section:{
           type: String,
           notify: true,
           value:'MyProductDetails'
       }
     }

     }

  }
//@customElement MyProduct register to webbrowser
window.customElements.define('my-product', MyProduct);
