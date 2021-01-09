import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-card/paper-card.js";
import "../../node_modules/@polymer/paper-button/paper-button.js";
import "../../node_modules/@polymer/paper-input/paper-input.js";
/**
 * @customElement
 * @polymer
 */

/*class name should be in camel case*/

class MyLogin extends PolymerElement {
  constructor() {
    // If you override the constructor, always call the
    // superconstructor first.
    super(); // Resolve warning about scroll performance
    // See https://developers.google.com/web/updates/2016/06/passive-event-listeners
  }

  ready() {
    // If you override ready, always call super.ready() first.
    super.ready(); // Output the custom element's HTML tag to the browser console.
    // Open your browser's developer tools to view the output.
  }

  static get template() {
    return html`
      <style>

        iron-pages{
          display:none !important;
        }
        .center {
          width:100%;
          text-align:center;
        }
        paper-card{
          width:37%;
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


  </style>


<app-location route="{{route}}"></app-location>
<div class="center">
  <br>
  <paper-card class="rate">

    <div class="card-content">
    <h3>Login Form</h3>
      <paper-input id="User_name" name="user" float-label label="Username" required auto-validate pattern="[a-zA-Z]*" error-message="Please enter the username!"></paper-input>
      <paper-input id="Password" type="password" name="Password" float-label label="Password" required auto-validate error-message="Please enter the password!"></paper-input>
    </div>
    <div class="card-actions">
      <paper-button raised on-click="_login" class="custom indigo">Login</paper-button>
    </div>
  </paper-card>
</div>
    `;
  }

  _login() {
    //getting the values of username and pasword
    var un = this.$.User_name.value;
    console.log('un: ' + un);
    var pw = this.$.Password.value;
    console.log('pw: ' + pw);
    var valid = false;
    var unArray = ["rajkumar", "username2"]; // as many as you like

    var pwArray = ["123456", "password2"]; // the corresponding passwords;

    for (var i = 0; i < unArray.length; i++) {
      if (un == unArray[i] && pw == pwArray[i]) {
        console.log(unArray[i]);
        console.log(pwArray[i]);
        valid = true; // location.href = "myDashboard";

        this.set('route.path', '/myDashboard');
        break;
      } else {
        alert('Please enter the valid credentials');
        return false;
      }
    }
  } //closing of _login()


}
/*register element to the browser*/


window.customElements.define('my-login', MyLogin);