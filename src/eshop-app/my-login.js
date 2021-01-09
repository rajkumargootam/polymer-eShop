import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';

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
      <style>

          iron-pages{
            display:none !important;
          }
          .center {
            width:100%;
            text-align:center;
          }
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

        .login-form{

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

.login-form{

width: 80%;
}


app-drawer-layout{

  background-color: #74b9ff;
}

app-header{
  display: none;
}

  </style>


<app-location route="{{route}}"></app-location>
<div class="login-form">
  <paper-card class="rate">

    <div class="card-content">
    <h3>Login</h3>
      <paper-input id="User_name" name="user" float-label label="Username" value="{{username}}" required auto-validate pattern="[a-zA-Z]*" char-counter maxlength="10" error-message="Please enter the username!"></paper-input>
      <paper-input id="Password" type="password" name="Password" float-label label="Password" value="{{password}}" char-counter maxlength="10" required auto-validate error-message="Please enter the password!"></paper-input>
    </div>
    <div class="card-actions">
      <paper-button raised on-click="_login" class="custom indigo">Login</paper-button>
    </div>
  </paper-card>
</div>
    `;
  }

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

  _login(){
          //getting the values of username and pasword
          // var un = this.$.User_name.value;
          // console.log('un: '+ un);
          // var pw = this.$.Password.value;
          // console.log('pw: '+ pw);

          var unArray = ["rajkumar", "username2"];  // as many as you like
        	var pwArray = ["123456", "password2",];  // the corresponding passwords;


    for (var i=0; i <unArray.length; i++) {
      if ((this.username == unArray[i]) && (this.password == pwArray[i])) {
        console.log(unArray[i]);
        console.log(pwArray[i]);
      this.set('route.path', '/myDashboard');
        return true;
      }else{
        alert('Please enter the valid credentials');
        return false;
      }
    }
  } //closing of _login()


}
/*register element to the browser*/
window.customElements.define('my-login', MyLogin);
