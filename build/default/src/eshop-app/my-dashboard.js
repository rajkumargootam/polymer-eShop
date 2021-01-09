/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { PolymerElement, html } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-card/paper-card.js";
import "../../node_modules/@polymer/paper-button/paper-button.js";
import "../../node_modules/@polymer/paper-checkbox/paper-checkbox.js";
import "../../node_modules/@polymer/paper-icon-button/paper-icon-button.js";
import "../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../node_modules/@polymer/app-route/app-location.js";
import "../../node_modules/@polymer/app-route/app-route.js";
let productList = [{
  "id": 1,
  "img": "./src/images/iphone.jpg",
  "categoryId": "1",
  "productName": "iPhone",
  "price": 40.00
}, {
  "id": 2,
  "img": "./src/images/casio-edifice-bg.jpg",
  "categoryId": "2",
  "productName": "Casio Edifice",
  "price": 100
}, {
  "id": 3,
  "img": "././src/images/ipad-black.jpg",
  "categoryId": "3",
  "productName": "iPad",
  "price": 100
}, {
  "id": 4,
  "img": "././src/images/ipad-black.jpg",
  "categoryId": "3",
  "productName": "iPad",
  "price": 100
}];
let Arrivals = [{
  "id": 1,
  "img": "./src/images/m1.jpg",
  "categoryId": "1",
  "productName": "Formal Blue Shirt",
  "price": 45.99
}, {
  "id": 2,
  "img": "./src/images/m2.jpg",
  "categoryId": "2",
  "productName": "Gabi Full Sleeve Sweatshirt",
  "price": 45.99
}, {
  "id": 3,
  "img": "././src/images/m3.jpg",
  "categoryId": "3",
  "productName": "Dark Blue Track Pants",
  "price": 80.99
}, {
  "id": 4,
  "img": "./src/images/m4.jpg",
  "categoryId": "4",
  "productName": "Round Neck Black T-Shirt",
  "price": 190.99
}, {
  "id": 5,
  "img": "./src/images/m5.jpg",
  "categoryId": "5",
  "productName": "Men's Black Jeans",
  "price": 100
}, {
  "id": 6,
  "img": "././src/images/m6.jpg",
  "categoryId": "6",
  "productName": "Reversible",
  "price": 100,
  "rating": 4
}, {
  "id": 7,
  "img": "./src/images/m7.jpg",
  "categoryId": "7",
  "productName": "BeltAnalog Watch",
  "price": 45.99
}, {
  "id": 8,
  "img": "./src/images/m8.jpg",
  "categoryId": "8",
  "productName": "Party Men's Blazer",
  "price": 100
}];

class MyDashboard extends PolymerElement {
  static get template() {
    return html`
      <style is="custom-style">
        :host {
          display: block;

          padding: 10px;
        }

      /*  #notes {
          @apply --layout-vertical;
          @apply --layout-wrap;
          height: 344px;
          width: 384px;
        }

        #notes > paper-card {
          box-sizing: border-box;
          max-width: 184px;
          margin: 3px;
          flex: 0 0 auto;
        }*/

      /* #Featured-categories > paper-card {
          box-sizing: border-box;
          max-width: 184px;
          margin: 3px;
          flex: 0 0 auto;
        } */


        /*--------------------------------------Featured-categories starts here----------------------*/
        #example-sizing-cover {
                width: 355px;
                height: 250px;
                background: #ddd;
              }
        /*--------------------------------------Featured-categories ends here----------------------*/
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

        /*--------------------------------------Product-top ----------------------*/

.product-top
{
	width: 100%;
}
.overlay-right
{
	display: block;
	opacity: 0;
	position: absolute;
	top: 10%;
	margin-left: 0;
	width: 70px;
}
.overlay-right .fa
{
	cursor: pointer;
	background-color: #fff;
	color: #000;
	height: 35px;
	width: 30px;
	padding: 7px;
	margin-top: 5%;
	margin-bottom: 5%;
}

.overlay-right .btn-secondary
{
	background: none !important;
	border: none !important;
	box-shadow: none !important;
}

.product-top:hover .overlay-right
{
	opacity: 1;
	margin-left: 5%;
	transition: 0.5s;
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
/* paper-card#truck > #img{
  vertical-align: middle;
  width: 20%;
} */

/* paper-card.website-feature{
      padding: 16px 40px;
} */




/*--------------------------------------website-feature ----------------------*/

.feature-content{
  flex-grow: 4;
  text-align: center;
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


/*--------------------------------------footer ----------------------*/

#footer{
  background: black;
  color: white;
}

.footer-content{
  flex-grow: 4;
  text-align: center;
}

.copyright
{
	margin-bottom: -80px;
	text-align: center;
	font-size: 15px;
	padding-bottom:20px;
  color: #FFF;
}

      </style>


      <!---Featured-categories ------>
      <div id="Featured-categories">
        <div class="">
          <a href="https://www.amazon.in/s?k=headset&crid=1HHSJ7LSR5LX0&sprefix=headset%2Caps%2C371&ref=nb_sb_ss_ts-doa-p_1_7">
          <iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/headphones-3683983_960_720.jpg"></iron-image></a>

          <a href="https://www.amazon.in/s?k=dslr+camera+nike&ref=nb_sb_noss_2"><iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/camera-431119_960_720.jpg"></iron-image></a>

          <a href="https://www.amazon.in/s?k=hipster+shoe&ref=nb_sb_noss_2"><iron-image sizing="cover" id="example-sizing-cover" alt="The Polymer logo." src="./src/images/hipster-958805_960_720.jpg"></iron-image></a>
        </div>
      </div>
      <br/>



<!---On sale Product ------>

  <div class="title-box">
  <h2>On Sale</h2>
  </div>

<div id="notes">

<paper-card class="dark">
  <div class="product-top">
    <a href="product-details.html"><img src="./src/images/iphone.jpg" class=""></a>
    <div class="overlay-right">
      <paper-icon-button icon="favorite"></paper-icon-button>
      <paper-icon-button icon="visibility"></paper-icon-button>
      <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
    </div>

    <div class="product-bottom">
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
        <h3>iPhone</h3>
        <h5>$40.00</h5>
    </div>
  </div>
</paper-card>

<paper-card class="dark">
  <div class="product-top">
  <a href="product-details.html"><img src="./src/images/casio-edifice-bg.jpg" class="img-fluid img-thumbnail"></a>
    <div class="overlay-right">
      <paper-icon-button icon="favorite"></paper-icon-button>
      <paper-icon-button icon="visibility"></paper-icon-button>
      <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
    </div>

  <div class="product-bottom text-center">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>Casio Edifice</h3>
      <h5>$40.00</h5>
    </div>
    </div>
</paper-card>

  <paper-card class="dark">
    <div class="product-top">
    <a href="product-details.html"><img src="./src/images/ipad-black.jpg" class="img-fluid img-thumbnail"></a>
      <div class="overlay-right">
        <paper-icon-button icon="favorite"></paper-icon-button>
        <paper-icon-button icon="visibility"></paper-icon-button>
        <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
      </div>

    <div class="product-bottom text-center">
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
        <h3>iPad</h3>
        <h5>$40.00</h5>
      </div>
      </div>
  </paper-card>

  <paper-card class="dark">
    <div class="product-top">
    <a href="product-details.html"><img src="./src/images/powerbank.jpg" height="255px"; width="255px"; class=""></a>
      <div class="overlay-right">
        <paper-icon-button icon="favorite"></paper-icon-button>
        <paper-icon-button icon="visibility"></paper-icon-button>
        <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
      </div>

    <div class="product-bottom text-center">
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
      <iron-icon class="star" icon="star"></iron-icon>
        <h3>Mi Powerbank</h3>
        <h5>$40.00</h5>
      </div>
      </div>
  </paper-card>
</div>

<div class="title-box">
<h2>New Arrivals</h2>
</div>

<div id="notes">

<paper-card class="dark">
<div class="product-top">
  <a href="product-details.html"><img src="./src/images/images (1).jpg" class=""></a>
  <div class="overlay-right">
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

  <div class="product-bottom">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>Kurta Pajama</h3>
      <h5>$40.00</h5>
  </div>
</div>
</paper-card>

<paper-card class="dark">
<div class="product-top">
<a href="product-details.html"><img src="./src/images/6-12-months-orange-golden-d9-kids-original-imafnhbghdyztnbz.jpeg"  style="height: 245px;" class="img-fluid img-thumbnail"></a>
  <div class="overlay-right">
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

<div class="product-bottom text-center">
  <iron-icon class="star" icon="star"></iron-icon>
  <iron-icon class="star" icon="star"></iron-icon>
  <iron-icon class="star" icon="star"></iron-icon>
  <iron-icon class="star" icon="star"></iron-icon>
  <iron-icon class="star" icon="star"></iron-icon>
    <h3>Girls Silk Semi <br/> Stitched Lehenga Chol</h3>
    <h5>$40.00</h5>
  </div>
  </div>
</paper-card>

<paper-card class="dark">
  <div class="product-top">
  <a href="product-details.html"><img src="./src/images/images (3).jpg" class="img-fluid img-thumbnail"></a>
    <div class="overlay-right">
      <paper-icon-button icon="favorite"></paper-icon-button>
      <paper-icon-button icon="visibility"></paper-icon-button>
      <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
    </div>

  <div class="product-bottom text-center">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>Churidar</h3>
      <h5>$40.00</h5>
      <h6>[[section]]</h6>
    </div>
    </div>
</paper-card>

<paper-card class="dark">
  <div class="product-top">
  <a href="product-details.html"><img src="./src/images/VASBSW120MA_1_large.jpg" class=""></a>
    <div class="overlay-right">
      <paper-icon-button icon="favorite"></paper-icon-button>
      <paper-icon-button icon="visibility"></paper-icon-button>
      <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
    </div>

  <div class="product-bottom text-center">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>Boy's Black Cotton Blend <br/> Sherwani Style Kurta</h3>
      <h5>$40.00</h5>
    </div>
    </div>
</paper-card>

<paper-card class="dark">
<div class="product-top">
  <a href="product-details.html"><img src="./src/images/samsung_galaxy_note3_note3neo.jpg" style="width: 190px; height: 187px;" class=""></a>
  <div class="overlay-right">
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

  <div class="product-bottom">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>Samsung Galaxy Note3</h3>
      <h5>$40.00</h5>
  </div>
</div>
</paper-card>
<paper-card class="dark">
<div class="product-top">
  <a href="product-details.html"><img src="./src/images/cam.jpg" style="width: 223px; height: 187px;"  class=""></a>
  <div class="overlay-right">
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

  <div class="product-bottom">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>DSLR Camera</h3>
      <h5>$40.00</h5>
  </div>
</div>
</paper-card>
<paper-card class="dark">
<div class="product-top">
  <a href="product-details.html"><img src="./src/images/mi-band.jpg" style="width: 190px; height: 187px;"  class=""></a>
  <div class="overlay-right">
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

  <div class="product-bottom">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>Mi Band</h3>
      <h5>$40.00</h5>
  </div>
</div>
</paper-card>
<paper-card class="dark">
<div class="product-top">
  <a href="product-details.html"><img src="./src/images/Bose-Soundlink-Micro-Speakers.jpg" style="width: 200px; height: 187px;"  class=""></a>
  <div class="overlay-right">
    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button icon="visibility"></paper-icon-button>
    <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
  </div>

  <div class="product-bottom">
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
    <iron-icon class="star" icon="star"></iron-icon>
      <h3>Bose Soundlink Micro <br/> Speakers</h3>
      <h5>$40.00</h5>
  </div>
</div>
</paper-card>
</div>




<div class="flex-container">

  <div class="feature-content">
  <img src="https://image.shutterstock.com/image-vector/certified-original-stamp-design-vector-600w-710037370.jpg" style="width: 75px;">
    <p class=""><b>100% Original items </b> <br/>are avilable at company.</p>
  </div>

  <div class="feature-content" >
  <img src="https://cdn0.iconfinder.com/data/icons/large-black-icons/512/Refresh_reload_arrow_sync.png" style="width: 80px;" class="">
    <p><b>Return within 30 days </b> <br/>of receving your order.</p>
  </div>


  <div class="feature-content" >
  <img src="./src/images/mail-clipart-shipping-truck-download-shipping-icon-png-shipping-truck-png-860_480.png" style="width: 80px;">
    <p><b>Return within 30 days </b> <br/>of receving your order.</p>
  </div>



  <div class="feature-content" >
    <img src="http://simpleicon.com/wp-content/uploads/credit-card-6.png" style="width: 80px;"/>
      <!-- <iron-icon class="credit-card" icon="credit-card"></iron-icon> -->
    <p><b>Return within 30 days </b> <br/> of receving your order.</p>
  </div>
</div>


<dom-repeat items="[[product]]">
        <template strip-whitespace="">
    <paper-card class="dark" style="">
      <div class="product-top">
        <a href\$="#[[section]]/[[item.id]]"><img src="{{item.img}}" class=""></a>
        <div class="overlay-right">
          <paper-icon-button icon="favorite"></paper-icon-button>
          <paper-icon-button icon="visibility"></paper-icon-button>
          <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
        </div>

        <div class="product-bottom">
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
            <h3>{{item.productName}}</h3>
            <h5>{{item.price}}</h5>
        </div>
      </div>
    </paper-card>
  </template>
</dom-repeat>


<h1> newly Arrivals</h1>

<dom-repeat items="[[arrivalData]]">
        <template strip-whitespace="">
    <paper-card class="dark" style="">
      <div class="product-top">
        <a href="product-details.html"><img src="{{item.img}}" class=""></a>
        <div class="overlay-right">
          <paper-icon-button icon="favorite"></paper-icon-button>
          <paper-icon-button icon="visibility"></paper-icon-button>
          <paper-icon-button icon="add-shopping-cart"></paper-icon-button>
        </div>

        <div class="product-bottom">
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
          <iron-icon class="star" icon="star"></iron-icon>
            <h3>{{item.productName}}</h3>
            <h5>{{item.price}}</h5>
        </div>
      </div>
    </paper-card>
  </template>
</dom-repeat>



<div id="footer">
<div class="flex-container">
    <div class="footer-content">
      <h2>Useful Links</h2>
      <p>Privacy Policy</p>
      <p>Terms of Use</p>
      <p>Return Policy</p>
      <p>Discount Coupons</p>
    </div>


    <div class="footer-content">
      <h2>Company</h2>
      <p>About Us</p>
      <p>Contact Us</p>
      <p>Career</p>
      <p>Affiliate</p>
    </div>


    <div class="footer-content">
    <h2>Follow Us On</h2>
      <p><i class="fa fa-facebook-official"></i> Facebook</p>
      <p><i class="fa fa-youtube-play"></i> Youtube</p>
      <p><i class="fa fa-linkedin"></i> Linkedin</p>
      <p><i class="fa fa-twitter"></i> Twitter</p>
    </div>
    </div>
  <hr>
  <p class="copyright"> Resived All Rights by eShop</p>
</div>
    `;
  }

  static get properties() {
    return {
      product: {
        type: Array,
        value: productList,
        notify: true
      },
      arrivalData: {
        type: Array,
        value: Arrivals,
        notify: true
      },
      section: {
        type: String
      }
    };
  }

}

window.customElements.define('my-dashboard', MyDashboard);