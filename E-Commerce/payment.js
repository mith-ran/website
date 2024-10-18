import { cart_num,cart} from "./data/cart.js";
import { products } from "./data/products1.js";
import { delivery_option, matchingitem } from "./data/delivery_option.js";

export const payment_render = () => {
    let cart_quantity=cart_num();
    let cart_totalprice=0;
    let delivery;
    let Shippingfee=0;
    let fee;
    let tax;
    let tax1;
    cart.forEach((element) => {
        products.forEach(product=>{
            if (element.cart_idd==product.id){
                cart_totalprice+=(product.priceCents*element.quantity)/10;
                delivery=matchingitem(element.cart_id)
                Shippingfee+=delivery.price;
            }
        })
    });
fee=cart_totalprice+Shippingfee;
tax1=fee*10/100
tax=fee-tax1;
console.log(cart_totalprice)






    let html = `<h2>Order Summary</h2>
                    <div class="paym" >
                        <p>Item-${cart_quantity}</p><p>₹${cart_totalprice}</p>
                    </div>
                    <div class="paym" >
                        <p>Shipping Fee</p><p>₹${Shippingfee}</p>
                    </div>
                    <div class="paym" >
                        <p>Total before tax</p><p>₹${fee}</p>
                    </div>
                    <div class="paym">
                        <p>Tax-10% </p><p>₹${tax1}</p>
                    </div>
                    <hr>
                    <div class="paym" >
                        <h3>Total ammount</h3><h3>₹${tax}</h3>
                    </div>
                    <button class="order_button">place your order</button>`

    document.querySelector('.pay').innerHTML=html;
}