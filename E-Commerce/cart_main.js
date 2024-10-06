import {products} from "./products1.js";
import {cart,remove_cart,cart_num,save} from "./cart.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { del_func} from "./delivery_option.js";
function render(){
let html="";

console.log(cart);

const today=dayjs()

let delivery_date0;






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
document.querySelectorAll('.del').forEach((item)=>item.addEventListener('click',()=>{
    const name=item.dataset.name1;
    const qq= item.dataset.name;
    
    remove_cart(qq);
    const rem= document.querySelector(`#${CSS.escape(name)}`);
    rem.remove();
    dom();
    document.querySelector('.hed_no').innerHTML=cart_num();


}))
document.querySelector('.hed_no').innerHTML=cart_num();


    
document.querySelectorAll('.inp').forEach((inp)=>{
    let name3=inp.dataset.name;
    let name4=inp.dataset.idd
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



}
render();