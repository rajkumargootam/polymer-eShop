/**
 *Import the Polymer library
 * Import the gold-cc-input
 * Import the polymer gold-cc-expiration-input
 * Import the polymer paper-button
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/gold-cc-input/gold-cc-input.js';
import '@polymer/gold-cc-expiration-input/gold-cc-expiration-input.js';
import '@polymer/paper-button/paper-button.js';


/** Creating the new element as a class
* class name should be in camel case
*/
class MyPayment extends PolymerElement {

  // Provide a DOM template for the element
  static get template() {

    // Tag the returned template literal with the html helper function
    // to convert it into an instance of HTMLTemplateElement

    return html`
    <style include="">

      paper-card{
        width:75%;
        display:inline-block;
        margin-top: 3%;
      }

      paper-button.indigo {
        background-color: var(--paper-indigo-500);
        color: white;
        --paper-button-raised-keyboard-focus: {
          background-color: var(--paper-indigo-500) !important;
          color: white !important;
        };
      }
      paper-button.disabled {
        color: white;
        background-color: bisque;
      }

    .payment-form{

    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
  }

  .card-actions{
    text-align: center;
  }
    a#shoppinCart {
      display: none;
  }


  paper-button.custom{
    width: 100%;
    font-size: 20px;
    font-weight: 700;
      margin: 20px 0px;
  }

  .card-content h3{
    text-align: center;
      font-size: 30px;
      text-transform: uppercase;
  }

  @media (max-width: 800px) {
    paper-card{
      width:100%;
  }

  .payment-form{

  width: 80%;
  }

  /*Removing the outline for the iput fields Starts Here*/
  gold-cc-input{
    outline: none;
  }

  gold-cc-expiration-input{
    outline: none;
  }
  /*Removing the outline for the iput fields Ends Here*/
    </style>



    <!--  navigation path from one page to another -->
    <app-location route="{{route}}"></app-location>
    <!-- payment form starts here -->
    <div class="payment-form">
    <!-- To display card I'm using paper card -->
      <paper-card class="rate">
      <!-- Content inside the paper card -->
        <div class="card-content">
        <h3>Payment</h3>
        <!-- credicard input field starts Here -->
        <gold-cc-input
             auto-validate
             label="Card number"
             value ="4111 1111 1111 1111"
             error-message="Enter valid visa or mastercard"
             card-types='["visa", "mastercard"]'
             required >
      </gold-cc-input>
             <!-- credicard input field Ends Here-->
       <!-- expiredate input field Starts Here-->
     <gold-cc-expiration-input label="Date"></gold-cc-expiration-input>
       <!-- expiredate input field Ends Here-->
       <!-- cvv code starts here -->
       <paper-input name="cardCvv"  placeholder="CVV"  auto-validate pattern="[0-9]{3}" maxlength="3" error-message="CVV" required ></paper-input>
       <!-- cvv code ends here -->
        </div>
        <div class="card-actions">
            <!-- Paper buuton for login using polymer component -->
          <paper-button raised on-click="_payment" class="custom indigo">Proceed</paper-button>
        </div>
      </paper-card>
      <!-- To display card I'm using paper card -->
    </div>
    <!-- payment form ends here -->
    `;
    }
    
_payment(){

    this.set('route.path', '/MySuccessfully');
}

  }
/*register element to the browser*/
window.customElements.define('my-payment', MyPayment);
