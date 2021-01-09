/**
 *Import the Polymer library
 * Import the Polymer paper-card
 * Import the Polymer paper-button
 * Import the Polymer paper-input
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
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


  </style>

<!--  navigation path from one page to another -->
<app-location route="{{route}}"></app-location>
<!-- Login form starts here -->
<div class="login-form">
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
    <div class="card-actions">
        <!-- Paper buuton for login using polymer component -->
      <paper-button raised on-click="_login" class="custom indigo">Login</paper-button>
    </div>
  </paper-card>
  <!-- To display card I'm using paper card -->
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
      }


    };

  }
  // login functnallity starts here
  _login(){

          var unArray = ["rajkumar", "username2"];  // as many as you like
        	var pwArray = ["123456", "password2",];  // the corresponding passwords;


    for (var i=0; i <unArray.length; i++) {
      if ((this.username == unArray[i]) && (this.password == pwArray[i])) {
      this.set('route.path', '/MyPayment');
        return true;
      }else{
        alert('Please enter the valid credentials');
        return false;
      }
    }
  }
   // login functnallity ends here


}
/*register element to the browser*/
window.customElements.define('my-login', MyLogin);
