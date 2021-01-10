
import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="product-details-styles">
  <template>
    <style>

    :host {
      display: block;

      padding: 10px;
    }


    .product-content{
      flex-grow: ;
      text-align: center;
    }
    #single-product .flex-container {
      display: flex;
      flex-wrap: wrap;
    }

    .flex-item-left {
      flex: 50%;
    }

    .flex-item-right {
      flex: 50%;
    }

    /* Responsive layout - makes a one column layout instead of a two-column layout */
    @media (max-width: 800px) {
      .flex-item-right, .flex-item-left {
        flex: 100%;
      }
    }

    paper-button#addTocartProduct {
      background: orange;
      color: #FFF;
  }

    /*--------------------------------------Featured-categories starts here----------------------*/
    #example-sizing-cover {
            width: 355px;
            height: 250px;
            background: #ddd;
          }
    /*--------------------------------------Featured-categories ends here----------------------*/
    paper-card.dark{
      margin: 9px;
    }
    iron-icon.star {
      --iron-icon-width: 16px;
      --iron-icon-height: 16px;
      color: var(--paper-amber-500);
      padding: 5px;
    }
    iron-icon.star:last-of-type { color: var(--paper-grey-500); }

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

 

/*--------------------------------------product-description ----------------------*/
.product-description h4
{
margin-top: 50px;
color: orange;
}
.product-description p
{
margin-top: 30px;
}

.product-description hr
{
margin-top: 30px;
}

/*--------------------------------------product-bottom ----------------------*/


.widthSize{
  width: 20px;
}


</style>
 </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
