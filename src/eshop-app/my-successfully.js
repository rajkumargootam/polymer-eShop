/**
 *Import the Polymer library
 * Import the my-payment-crad.js
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import'./my-payment-crad.js';
import'./my-success-card.js';


/** Creating the new element as a class
* class name should be in camel case
*/
class MySuccessfully extends PolymerElement {

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
          background-color: var(--paper-pink-a200) !important;
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
    </style>



    <!--  navigation path from one page to another -->
    <app-location route="{{route}}"></app-location>
    <!-- payment form starts here -->
    <div class="payment-form">
    <!-- To display card I'm using paper card -->
      <paper-card class="rate">
      <!-- Content inside the paper card -->
        <div class="card-content">
          <my-success-card></my-success-card>
        </div>
        <div class="card-actions">
            <!-- Paper buuton for home page redirect using polymer component -->
          <paper-button raised on-click="_logOut" class="custom indigo">Continue Shopping</paper-button>
        </div>
      </paper-card>
      <!-- To display card I'm using paper card -->
    </div>
    <!-- payment form ends here -->

      <!---Payment  starts here ------>
      <div class="center">

    </div>
      <!---payment ends here ------>
    `;
    }

    //logout functnallity starts here
     _logOut(){
       window.location.href ="home";
     }

  }
/*register element to the browser*/
window.customElements.define('my-successfully', MySuccessfully);
