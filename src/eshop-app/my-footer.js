/**
 *Import the Polymer library
 * Import the Polymer paper-card
 * Import the Polymer paper-button
 * Import the Polymer paper-icon-button
 * Import the Polymer iron-icons
 * Imported the common-product-styles.js
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import './commom-product-styles.js';


/** Creating the new element as a class
* child-elements which takes the reffernce from the parent component my-addtocart.js
* class name should be in camel case
*/
class MyFooter extends PolymerElement {

  // Provide a DOM template for the element
  static get template() {

    // Tag the returned template literal with the html helper function
    // to convert it into an instance of HTMLTemplateElement

    return html`
    <style include="commom-product-styles">
      /* import custom styles and included commom-product-styles  */
    </style>


                                      <!---footer section starts here ------>

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
                                      <!---footer section starts here------>

    `;
    }


  }
/*register element to the browser*/
window.customElements.define('my-footer', MyFooter);
