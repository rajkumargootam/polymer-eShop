
import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="commom-product-styles">
  <template>
    <style>


          paper-button#addToCartBtn {
            padding: 10px 62px 10px 62px;
            margin: 4px;
            background: orange;
            color: #FFF;
            width: 90%;
            margin-bottom: 10px;
            margin-left: 15px;
            font-family: 'roboto', sans-serif;
        }

        /*--------------------------------------On sale Product----------------------*/


        .title-box
        {
          background-color: orange;
          color: #fff;
          width:130px;
          padding:4px 10px;
          height: 32px;
          margin-bottom: 30px;
          display: flex;
        }

        .title-box h2
        {
          font-size: 16px;
          font-family: 'lato', sans-serif;
        }

        .title-box::after
        {
          content: '';
          border-top: 40px solid orange;
          border-right:50px solid transparent;
          position: absolute;
          display: flex;
          margin-top: -4px;
          margin-left: 140px;
        }

        paper-card.dark{
         margin-bottom: 30px;
         margin-right:6px;
         margin-left:6px;
        }

        .star-icons{
          text-align: center;
          margin: 10px;
        }


         iron-icon.star {
          --iron-icon-width: 16px;
          --iron-icon-height: 16px;
          color: var(--paper-amber-500);
        }
        iron-icon.star:last-of-type {
           color: var(--paper-grey-500);
        }

/*--------------------------------------Product-top ----------------------*/

        .product-top
        {
          width: 100%;
        }

        .product-top img{
          padding: 0px;
        }

        @media only screen and (max-width: 980px)
        {
          paper-card.dark{
            margin-bottom: 30px;
            width: 100%;
            margin-right:0;
            margin-left:0;
          }

          .product-top img{
            width: 100%;
          }
        }


/*--------------------------------------product-bottom ----------------------*/


        .product-bottom {
            background: #f5f5f5;
        }
        .product-bottom .star
        {
          color: orange;
          font-size: 10px;
          text-align: center;
          margin-top: 10px;
        }

        .product-bottom h3
        {
          font-size: 16px;
          font-weight: bold;
          text-align: center;
          font-family: 'roboto', sans-serif;
          font-weight: 600;
        }

        .product-bottom h5
        {
          font-size: 15px;
          padding-bottom: 10px;
          text-align: center;
        }

        /*product-button ends here */
        .website-feature{
            box-shadow: none;
        }


        .footer{
          background: black;
        }
        paper-card.footer-card{
          width: 30%;
          box-shadow: none;
          background: black;
          color: #FFF;
        }
        .footer-content{
            padding: 0 70px;
        }


/*--------------------------------------footer styles starts here----------------------*/


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

          #footer{
            background: black;
            color: white;
          }

          .footer-content{
            flex-grow: 4;
            text-align: center;
            font-family: 'Lato', sans-serif
          }

          .copyright
          {
            margin-bottom: -80px;
            text-align: center;
            font-size: 15px;
            padding-bottom:20px;
            color: #FFF;
            font-family: 'Lato', sans-serif;

          }
  /*--------------------------------------footer styles ends here----------------------*/

</style>
 </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
