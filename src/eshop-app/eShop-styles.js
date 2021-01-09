import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="eShop-styles">
  <template>
    <style>

    :host {
      --app-primary-color: #FFF;
      --app-secondary-color: black;
      display: block;
    }

    app-drawer-layout:not([narrow]) [drawer-toggle] {
      display: none;
    }

    app-header {
      color: #fff;
      background-color: var(--app-primary-color);
    }

    app-header paper-icon-button {
      --paper-icon-button-ink-color: white;
    }

    .drawer-list {
      margin: 0 20px;
    }

    .drawer-list a {
      display: block;
      padding: 0 16px;
      text-decoration: none;
      color: var(--app-secondary-color);
      line-height: 40px;
    }

    .drawer-list a.iron-selected {
      color: black;
      font-weight: bold;
    }

    app-drawer#drawer {
        box-shadow: 1px 2px 5px #888888;
    }

    app-header{
      display: none;
    }




    iron-pages {
  padding-top: 30px;
  }


    </style>
     </template>
    </dom-module>`;

    document.head.appendChild($_documentContainer.content);
