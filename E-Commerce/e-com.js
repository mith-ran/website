import { cart } from "./cart.js";

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
        let matchingitem;
        cart.forEach(function(item){
            if (product_name===item.productname){
                console.log("match");
                item.quantity+=1;
                matchingitem=2
            }
           
        });

            if (matchingitem!=2){

                cart.push({
                    productname:product_name,
                    quantity:1
                    
                });
            };

            
        

        console.log(cart);
       
        let cartquantity =0;
        cart.forEach(function(item){
            cartquantity+=item.quantity;
        })
        console.log(cartquantity);
        document.querySelector(".cart-num").innerHTML=cartquantity;
    })
})











