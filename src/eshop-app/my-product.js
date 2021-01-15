/**
 *Import the Polymer library
 * Import the Polymer paper-card
 * Import the Polymer paper-button
 * Import the Polymer paper-icon-button
 * Import the Polymer iron-icons
 * Import the Polymer iron-ajax to read the JSON
  Import the Polymer array-selector
 * Import the Base class AddToCart form addtocart component
 * Imported the common-product-styles.js
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/polymer/lib/elements/array-selector.js';
import { AddToCart } from './my-addtocart.js';
import './commom-product-styles.js';


/** Creating the new element as a class
* child-elements which takes the reffernce from the parent component my-addtocart.js
* class name should be in camel case
*/
class MyProduct extends AddToCart {

  // Provide a DOM template for the element
  static get template() {

    // Tag the returned template literal with the html helper function
    // to convert it into an instance of HTMLTemplateElement

    return html`
    <style include="commom-product-styles">
      /* import custom styles and included commom-product-styles  */
    </style>
    <!--  navigation path from one page to another -->
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location> 
      <!---On sale Product  starts here ------>
      <!-- display the title name -->
    <div class="title-box">
      <h2>On Sale</h2>
    </div>
    <!-- To read the json data  using iron-ajax starts here
    auto is use when we want to display the data on page load -->
        <iron-ajax
        auto
        url="./src/data/data.json"
        handle-as="json"
        last-response="{{response}}">

    </iron-ajax>
        <!-- To read the json data  using iron-ajax ends here -->

    <div id="notes">
    <!-- Getting response data using iron Ajax and displaying product data using dom-repeat and one-way data binding -->
    <!-- for iterating array object we are using dom-repeat -->
      <dom-repeat items="[[response]]" id="productListItem">
              <!-- creating template to dispaly the UI content -->
        <template strip-whitespace="">
            <!-- for creating the cards  usig paper-card  starst here-->
          <paper-card class="dark" style="">
          <div class="product-top">
                  <!-- on click on this image anchor tag navigate to the product details page -->
            <a href="MyProductDetails"><img src="[[item.img]]"></a>

    <!-- this product bottom is mainly for maintain the icons, product name, price $ to manage the div css  -->
            <div class="product-bottom">
            <!-- bleow icons are displayed for rating the product starts here-->
            <div class="star-icons">
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
              <iron-icon class="star" icon="star"></iron-icon>
            </div>
              <!-- bleow icons are displayed for rating the product ends here-->
              <!--  displaying the product name-->
              <h3>[[item.productName]]</h3>
              <!--  displaying the product price-->
              <h5>₹[[item.price]]</h5>
              <!-- Button for Addto cart starts here -->
              <paper-button raised on-click="addToCartBtn"  class="custom indigo" id="addToCartBtn">Add to Cart</paper-button>
              <!-- Button for Addto cart ends here -->
            </div>
            
            <!-- this product bottom is mainly for maintain the icons, product name, price $ to manage the div css  ends here -->
          </div>
        </paper-card>
    <!-- for creating the cards  usig paper-card  Ends here-->
      </template>
    <!-- creating template to dispaly the UI content ends here-->
      </dom-repeat>
    <!-- for iterating array object we are using dom-repeat  ends here-->
    </div>
    <!-- Using  array-selector we are going to push the product details into arraylist -->
      <array-selector id="selector" items="[[response]]" selected="[[selected]]" multi toggle></array-selector>

                           <!---On sale Product ends here ------>

    `;
    }


  }
/*register element to the browser*/
window.customElements.define('my-product', MyProduct);
