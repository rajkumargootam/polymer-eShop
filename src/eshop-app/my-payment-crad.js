/**
 *Import the Polymer library
 * Import the polymer gold-cc-input
 * Import the Polymer gold-cc-expiration-input
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/gold-cc-input/gold-cc-input.js';
import '@polymer/gold-cc-expiration-input/gold-cc-expiration-input.js';


/** Creating the new element as a class
* class name should be in camel case
*/
class MyPaymentCard extends PolymerElement {

  // Provide a DOM template for the element
  static get template() {

    // Tag the returned template literal with the html helper function
    // to convert it into an instance of HTMLTemplateElement

    return html`
    <style include="">
    /*Removing the outline for the iput fields Starts Here*/
      gold-cc-input{
        outline: none;
      }

      gold-cc-expiration-input{
        outline: none;
      }
      /*Removing the outline for the iput fields Ends Here*/
    </style>

      <!---Payment  starts here ------>
      <!-- credicard input field starts Here -->
      <!-- <gold-cc-input
            auto-validate
            label="Card number"
            error-message="Enter valid visa or mastercard!"
            card-types='["visa", "mastercard"]'
            required maxlength="16" pattern="[0-9]{16}">
      </gold-cc-input> -->
        <paper-input id="" name="" float-label label="Card Name"
        required auto-validate  maxlength="16" pattern="[0-9]{16}" error-message="Enter valid visa or mastercard!">
        </paper-input>
            <!-- credicard input field Ends Here-->
      <!-- expiredate input field Starts Here-->
    <gold-cc-expiration-input label="Date"></gold-cc-expiration-input>
      <!-- expiredate input field Ends Here-->
      <!-- cvv code starts here -->
      <paper-input name="cardCvv"  placeholder="CVV"  auto-validate pattern="[0-9]{3}" maxlength="3" error-message="CVV" required ></paper-input>
      <!-- cvv code ends here -->
      <!---payment Ends Here ------>
    `;
    }


  }
/*register element to the browser*/
window.customElements.define('my-payment-card', MyPaymentCard);
