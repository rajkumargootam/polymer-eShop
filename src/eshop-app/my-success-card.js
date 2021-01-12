/**
 *Import the Polymer library
 * Import the Polymer paper-card
 * Import the Polymer paper-button
 * Import the Polymer paper-icon-button
 * Import the Polymer iron-icons
 * Imported the common-product-styles.js
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';



/** Creating the new element as a class
* child-elements which takes the reffernce from the parent component my-addtocart.js
* class name should be in camel case
*/
class MySuccessCard extends PolymerElement {

  // Provide a DOM template for the element
  static get template() {

    // Tag the returned template literal with the html helper function
    // to convert it into an instance of HTMLTemplateElement

    return html`
    <style include="">
    /*success css Starts Here*/
              body {
            text-align: center;
            padding: 40px 0;
            background: #EBF0F5;
          }
    h1 {
              color: #88B04B;
              font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
              font-weight: 900;
              font-size: 40px;
              margin-bottom: 10px;
            }
            p {
              color: #404F5E;
              font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
              font-size:20px;
              margin: 0;
            }
          i {
            color: #9ABC66;
            font-size: 100px;
            line-height: 200px;
            margin-left:-15px;
          }
          i.checkmark {
              margin-left: 10%;
          }
          .card-content{
            text-align: center;
          }
          .card {
            background: white;
            padding: 60px;
            border-radius: 4px;
            box-shadow: 0 2px 3px #C8D0D8;
            display: inline-block;
            margin: 0 auto;
          }
      /*success css Ends Here*/
    </style>
<body>
      <!---success card  starts here ------>
      <div class="card-content">
      <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
        <i class="checkmark">✓</i>
      </div>
        <h1>Success</h1>
        <p>Your order has placed successfully <br/> it will delever in 3 working days.</p>
      </div>
      <!---success card Ends Here ------>
  </body>
    `;
    }


  }
/*register element to the browser*/
window.customElements.define('my-success-card', MySuccessCard);
