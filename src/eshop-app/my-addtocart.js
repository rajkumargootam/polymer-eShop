// Import the Polymer library and html helper function
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

/**
 * @author
 * @class AddToCart
 * @event on-click
 * exporting the class  from parent(AddToCart) to access the properties and methods to child class
 * objects type creat Array, object
 * value  string, number
 * item is arraylist, productList, productArraylist
 * type Number for ,productPrice
 */
export class AddToCart extends PolymerElement {

  //properties section to declare
   static get properties() { return {
     response: { type: Object },
     //productItem is to list of the products
       productItem:{
         type: Array,
         notify: true,
         value: null
       },
       //creating an array productList
       productList:{
         type: Array,
         value: null
       },
       //creating produc list Array
       produclistArray:{
         type: Array,
         value: null
       },
      //Price of the product
      productPrice:{
        type: Number,
        value: null
      },
      //total product count
      count: {
          type: Number,
          value: 0,
        },
       //total product amount
      totalPrice: {
        type: Number,
        value: 0,
      }
      // spinner: {
      //   type: string,
      //   vale: "active"
      // }

     }
   }
   ready() {
     super.ready();
   }
//Add to cart on click functnallity starts here
   addToCartBtn(e){

     this.productItem = this.$.productListItem.itemForElement(e.target);
      this.$.selector.select(this.productItem);

      //Storing the data in to local storage
      this.productList = JSON.parse(localStorage.getItem("setProductItemsInLocalStorage"));
      if (this.productList == null) this.productList = [];
      this.produclistArray = [];

      //Getting the Product price value
      var productPrice = this.productItem.price;

      //Getting the Product description 
      var description = this.productItem.description;

      //Pushing the productItem to produclistArray
      this.produclistArray.push(this.productItem.img, this.productItem.productName, this.productItem.price,this.productItem.id,productPrice, description)
  

      // Getting current selected values and setting to CurrentProductList
      window.localStorage.setItem('CurrentProductList', JSON.stringify(this.produclistArray));

      //Pushing  the data to  products list Array
      this.productList.push(this.produclistArray);

      //Finally store the all products using localstorage setitem
      window.localStorage.setItem("setProductItemsInLocalStorage", JSON.stringify(this.productList));

      //reload the page to set the values in shopping-cart
     // location.reload();
//this.spinner =

// Getting productlist count       
      this.count = this.productList.length;
       window.localStorage.setItem('count', this.count);
       // Add to cart - Finding the totoal amount incrementaly for multiple product items  
      this.totalPrice = window.localStorage.getItem('totalprice');
      if(this.count < 2){
        this.totalPrice =  this.productItem.price;
        window.localStorage.setItem('totalprice', this.totalPrice);
      }else{
       this.totalPrice =  parseFloat(this.totalPrice) +  parseFloat(this.productItem.price);
       window.localStorage.setItem('totalprice', this.totalPrice);
      }

  }//Add to cart on click functnallity ends here
}
/*register element to the browser*/
window.customElements.define('my-addtocart', AddToCart);
