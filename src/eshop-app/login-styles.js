import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="login-styles">
  <template>
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

    div#footer{
    display: none;
    }



    </style>
     </template>
    </dom-module>`;

    document.head.appendChild($_documentContainer.content);
