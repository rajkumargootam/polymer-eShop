/**
 *Import the Polymer library
 * Import the Polymer paper-card
 * Import the Polymer paper-button
 * Import the Polymer iron-form
 * Import the Polymer paper-input
 * Import the login-styles.js
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import'./login-styles.js'

/**
 * @customElement
 * @polymer
 */
 /*class name should be in camel case*/
class MyLogin extends PolymerElement {


  constructor() {
      // If you override the constructor, always call the
      // superconstructor first.
      super();
      // Resolve warning about scroll performance
      // See https://developers.google.com/web/updates/2016/06/passive-event-listeners
    }

    ready(){
      // If you override ready, always call super.ready() first.
      super.ready();
      // Output the custom element's HTML tag to the browser console.
      // Open your browser's developer tools to view the output.
    }


  static get template() {
    return html`
      <style include="login-styles">

      a#shoppinCart {
        display: none;
    }
    
  </style>

  <!--  navigation path from one page to another -->
  <app-location route="{{route}}"></app-location>
  <!-- Login form starts here -->
  <div class="login-form">
    <iron-form id="formOne" on-iron-form-response="onResponse">
      <form method="post" action="https://httpbin.org/post" is="iron-form">
        <!-- To display card I'm using paper card -->
        <paper-card class="rate">
          <!-- Content inside the paper card -->
          <div class="card-content">
            <h3>Login</h3>
            <!-- Paper input for text fields using polymer component -->
            <paper-input id="User_name" name="user" float-label label="Username" value="{{username}}" required auto-validate pattern="[a-zA-Z]*" error-message="Please enter the username!"></paper-input>
            <paper-input id="Password" type="password" name="Password" float-label label="Password" value="{{password}}" required auto-validate error-message="Please enter the password!"></paper-input>
            <!--  Paper input for text fields from polymer component -->
          </div>
          <div class="error-text">{{errormsg}}</div>
          <div class="card-actions">
            <!-- Paper buuton for login using polymer component -->
            <paper-button raised class="custom indigo" on-tap="submitHandler">Login</paper-button>
          </div>
        </paper-card>
        <!-- To display card I'm using paper card -->
      </form>
    </iron-form>
  </div>
  <!-- Login form ends here -->
    `;
  }

  //properties section to declare
  static get properties() {
    return {
      username: {
        type: String,
        notify: true
      },
      password:{
        type: String,
        notify:true
      },
      errormsg:{
        type:String
      },
      formData:{
        type:String
      }

    };

  }

   // login functnallity ends here
   submitHandler() {
    // form submit used to formone is from id
   this.$.formOne.submit();
   };

   //Getting response
   onResponse(e){
    console.log('e.detail.response.form', e.detail.response.form)

    this.formData = e.detail.response.form
    console.log('this.formData', this.formData);

    if(this.formData.user != 'rajkumar' && this.formData.password != '123456'){
      this.errormsg = 'invalid credentials';
      console.log('this.formData invalid')
    }else{
      console.log('this.formData valid' )
      this.errormsg ="";
      this.set('route.path', '/MyPayment');
    }
    
   }
}
/*register element to the browser*/
window.customElements.define('my-login', MyLogin);
