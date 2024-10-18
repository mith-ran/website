import {products} from "./data/products1.js";
import {cart,remove_cart,cart_num,save,matchingitem_cart} from "./data/cart.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { del_func} from "./data/delivery_option.js";
import { payment_render } from "./payment.js";
export function render(){
let html="";

console.log(cart);

const today=dayjs()

 function dom(){
    
     cart.forEach((item)=>{
               
         products.forEach((product)=>{
            
             if(item.productname==product.name){
               
                
                let {deliveroption_html,delivery_date0}=del_func(item,product,today);
                console.log(delivery_date0)  
               
                 html+=`<div class="ele1" id=${product.id} >
                             <div class="date">Delevary Date: ${delivery_date0}</div>
                             <div class="innergrid">
                                 <div>
                                     <img src="${product.image}" height="110px" class="img_c">                        
                                 </div>
                                 <div>
                                     <h3>${product.name}</h3>
                                     <div class="date1">$${product.priceCents/10}</div>
                                     <div>Quantity:${item.quantity} <span class="green up" data-name=${product.id} >Update</span> <span class="green del" data-name1=${product.id} data-name="${product.name}" >Delete</span></div>
                                 </div>
                                 <div>
                                     <h3>Choose delivery option:</h3>
                                     <div >${deliveroption_html}</div>
                                 </div>
                             </div>
                             </div>`
             }
         });
     })
     return html;
 }

document.querySelector('.ele').innerHTML=dom();
//removve cart
document.querySelectorAll('.del').forEach((item)=>item.addEventListener('click',()=>{
    const name=item.dataset.name1;
    const qq= item.dataset.name;
    console.log(name)
    let cart_ite=matchingitem_cart(name);
    console.log(cart_ite.quantity)
    if(cart_ite.quantity==1){
        console.log("qiiiiio")
        const rem= document.querySelector(`#${CSS.escape(name)}`);
        rem.remove();
    }
    remove_cart(qq);
    document.querySelector('.hed_no').innerHTML=cart_num();
    dom()

    render()
}))
document.querySelector('.hed_no').innerHTML=cart_num();


    
document.querySelectorAll('.inp').forEach((inp)=>{
    //del date selector
    let name3=inp.dataset.name;
    let name4=inp.dataset.idd;
    inp.addEventListener('click',()=>{
      console.log(name4);
      cart.forEach((itemm)=>{
        console.log(itemm.cart_idd)
        if(itemm.cart_idd==name4){
            itemm.cart_id=name3;
            save();
            console.log(cart);
            render();
        }
      })
    })
})

document.querySelectorAll('.up').forEach((Element)=>{
    Element.addEventListener('click',()=>{
        const id=Element.dataset.name;
        let match=matchingitem_cart(id);
        match.quantity+=1;
        save();
        render();   
    })
})
payment_render();
}
