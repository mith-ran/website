import { cart_num,cart} from "./data/cart.js";
import { products } from "./data/products1.js";


export const payment_render = () => {
    let cart_quantity=cart_num();
    let cart_totalprice=0;
    cart.forEach((element) => {
        products.forEach(product=>{
            if (element.cart_idd==product.id){
                cart_totalprice+=product.priceCents/10;
                
            }
        })
    });

console.log(cart_totalprice)






    let html = `<h2>Order Summary</h2>
                    <div class="paym" >
                        <p>Item-${cart_quantity}</p><p>$355</p>
                    </div>
                    <div class="paym" >
                        <p>Shipping Fee</p><p>$0</p>
                    </div>
                    <div class="paym" >
                        <p>Total before tax</p><p>$35</p>
                    </div>
                    <div class="paym">
                        <p>Tax-10% </p><p>999</p>
                    </div>
                    <hr>
                    <div class="paym" >
                        <h3>Total ammount</h3><h3>$390</h3>
                    </div>
                    <button class="order_button">place your order</button>`

    document.querySelector('.pay').innerHTML=html;
}