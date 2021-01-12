import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="home-styles">
  <template>
    <style>

     :host {
          display: block;

          padding: 10px;
        }

    /*---------------------------Featured-categories styles starts here----------------------*/
        #example-sizing-cover {
                width: 355px;
                height: 250px;
                background: #ddd;
              }

              
    @media only screen and (max-width: 768px)
    {
      #example-sizing-cover {
        width: 100%;
    }
  }
    /*----------------------------Featured-categories styles ends here----------------------*/

    /*--------------------------------------website-feature styles stars here----------------------*/

              div#website-features {
                  margin: 20px;
              }

              .feature-content{
                flex-grow: 4;
                text-align: center;
                font-family: 'lato', sans-serif;
              }

              .flex-container{
                display: flex;
                flex-direction: row;
                align-items: stretch;
              }


        /* Responsive layout - makes a one column layout instead of a two-column layout */
              @media (max-width: 800px) {
                .flex-container {
                  flex-direction: column;
                }
              }

  /*--------------------------------------website-feature styles ends here----------------------*/




    </style>
     </template>
    </dom-module>`;

    document.head.appendChild($_documentContainer.content);
