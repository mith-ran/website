import {cart,cart_num,cart_push} from "./cart.js";
import {product} from "./product.js";
//import { cart_dom } from "./cart_main.js";

let html="";

product.forEach(function(product){

    html+=  
    

   `   <div class="container">  
                
    <div class="img-container">
        <img src="${product.Image}" alt="" height="180px" class="product"   >

    </div>
    
        <p class="para"> ${product.name} </p>

   
    <div class="rating">
        <div>

            <img src="${product.rating}" width="100px">
        </div>
       <p style="margin: 0%;">${product.rating_no}</p>
    </div>
   

        <p style="margin-bottom: 18px; margin-top: 0%; font-weight: 700;">${product.price}</p>
    
    <div class="select">

        <select>
            <option selected>1</option>
            <option value="1">2</option>
            <option value="2">3</option>
            <option value="3">4</option>
        </select>
    </div>
    <div  class="add">
        <p></p>
    </div>
   

        <button class="cart-btn" data-name="${product.name}">Add to cart</button>
   

</div>`

    document.querySelector(".grid").innerHTML=html;
})

document.querySelectorAll(".cart-btn").forEach(function(button){
    button.addEventListener('click',function(){
        
        const product_name=button.dataset.name;
        cart_push(product_name);
            
        

        console.log(cart);
 //       cart_dom();
        let cartquantity=cart_num();
        console.log(cartquantity);
        document.querySelector(".cart-num").innerHTML=cartquantity;
    })
})











