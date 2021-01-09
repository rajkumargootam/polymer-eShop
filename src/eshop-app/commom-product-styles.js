
import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="commom-product-styles">
  <template>
    <style>

paper-button#addToCartBtn {
  padding: 10px 74px 10px 74px;
    margin: 4px;
    background: orange;
    color: #FFF;
    width: 100%;
    margin: 10px 0px;
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
          margin: 4px;
        }
        iron-icon.star {
          --iron-icon-width: 16px;
          --iron-icon-height: 16px;
          color: var(--paper-amber-500);
          padding: 12px;
        }
        iron-icon.star:last-of-type { color: var(--paper-grey-500); }

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
  .product-top img
  {
  height: 360px;
  width: 360px;
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
}

.product-bottom h3
{
  font-size: 16px;
  font-weight: bold;
  text-align: center;
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

div#notes{
  margin: 10px;

}
</style>
 </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
