// Import the Polymer library and html helper function
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

/**
 * @author
 * @class AddToCart
 * @event on-click
 * export class AddToCart for accessing the properties and methods to the child class
 * objects type creat Array, object
 * value  string,number
 * item is arraylist, productEntries, productArraylist
 * type Number for ,productCost
 */
export class AddToCart extends PolymerElement {

  //properties section if rquired any
   static get properties() { return {
     response: { type: Object },
     //productItem is to list of the products
       productItem:{
         type: Array,
         notify: true,
         value: null
       },
       //Existing entriesint to  productEntries
       productList:{
         type: Array,
         value: null
       },
       //creating produc list Array
       produclistArray:{
         type: Array,
         value: null
       },
      //productPrice is the total amount
      productPrice:{
        type: Number,
        value: null
      },
     }
   }
   ready() {
     super.ready();
   }
//Add to cart on click functnallity starts here
   addToCartBtn(e){

     this.productItem = this.$.productListItem.itemForElement(e.target);
     console.log(this.$.productListItem);
      this.$.selector.select(this.productItem);

      //Storing the data in to local storage
      this.productList = JSON.parse(localStorage.getItem("setProductItemsInLocalStorage"));
      console.log('this.productEntries :' + this.productList);
      if (this.productList == null) this.productList = [];
      this.produclistArray = [];

      //Getting the Product price value
      var totalprice = this.productItem.price;
      console.log('totalamount :' + totalprice);

      //Pushing the productItem to produclistArray
      this.produclistArray.push(this.productItem.img, this.productItem.productName, this.productItem.price,this.productItem.id, totalprice)
      console.log(this.produclistArray);

      // Getting current selected values and setting to CurrentProductList
      window.localStorage.setItem('CurrentProductList', JSON.stringify(this.produclistArray));

      //Pushing  the data to  products list Array
      this.productList.push(this.produclistArray);

      //Finally store the all products using localstorage setitem
      window.localStorage.setItem("setProductItemsInLocalStorage", JSON.stringify(this.productList));

      //reload the page to set the values in shopping-cart
      location.reload();

    // adding tot product price amount

    this.productPrice = window.localStorage.getItem('totalprice');
    if(this.productPrice != null){
      this.productPrice = parseInt(this.productPrice);
      window.localStorage.setItem("totalprice", this.productPrice + this.productItem.price);
      } else{
        window.localStorage.setItem("totalprice", this.productItem.price);
    }


  }//Add to cart on click functnallity ends here
}
/*register element to the browser*/
window.customElements.define('my-addtocart', AddToCart);
